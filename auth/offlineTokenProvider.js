"use strict";
// Copyright 2021-2026 ONDEWO GmbH
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
Object.defineProperty(exports, "__esModule", { value: true });
exports.OfflineTokenProvider = exports.KeycloakAuthenticationError = exports.TokenError = exports.OfflineTokenError = exports.DEFAULT_KEYCLOAK_TOKEN_TIMINGS = void 0;
exports.computeRefreshBackoffS = computeRefreshBackoffS;
exports.login = login;
exports.keycloakProviderRegistryKey = keycloakProviderRegistryKey;
exports.getKeycloakTokenProvider = getKeycloakTokenProvider;
/**
 * D18 headless-SDK auth helper (keycloak-migration-plan §7.8 + D18).
 *
 * Acquires a Keycloak access token for the PUBLIC SDK client `ondewo-t2s-cai-sdk-public` (no
 * `client_secret` -- Q1) either with a one-time ROPC login (`grant_type=password`,
 * `scope=offline_access`) or, when a handed-off OFFLINE refresh token is configured, with a single
 * refresh grant (no password is ever sent then). The access token is refreshed two ways, both bounded
 * by `tokenExpirationInS` (if given) since the initial acquisition:
 *
 * - proactively, by a background timer that fires {@link KeycloakTokenTimings.expiryLeewayS} before
 *   the token expires;
 * - lazily, by {@link OfflineTokenProvider.getAuthorizationMetadataAsync}, which every gRPC call reads.
 *
 * Both paths share ONE refresh decision and ONE jittered failure backoff: a failed refresh never ends
 * the background loop, never falls back to a password grant, and is only raised once the access token
 * has actually expired. Concurrent callers share one in-flight refresh (single flight).
 *
 * @packageDocumentation
 */
const crypto_1 = require("crypto");
const perf_hooks_1 = require("perf_hooks");
const util_1 = require("util");
/**
 * Production timings, identical in every ONDEWO SDK. A Keycloak outage is retried no faster than every
 * 5 s and backs off to every 300 s: ondewo runs one client per call container, so a 1 Hz retry that is
 * harmless for one process is an amplifier against the realm all of them share.
 */
exports.DEFAULT_KEYCLOAK_TOKEN_TIMINGS = Object.freeze({
    expiryLeewayS: 30,
    minRefreshDelayS: 1,
    retryBaseDelayS: 5,
    retryMaxDelayS: 300,
    maxRetryExponent: 6,
    httpTimeoutS: 10,
    maxErrorBodyChars: 500
});
/** What a rendering shows in place of a non-empty secret. */
const REDACTED_SECRET = '***REDACTED***';
/** Error raised on an invalid configuration, and the base class of {@link KeycloakAuthenticationError}. */
class OfflineTokenError extends Error {
    /**
     * Create an {@link OfflineTokenError} with a fixed `name` of `"OfflineTokenError"`.
     *
     * @param message - Human-readable description of the token failure.
     * @param status - The HTTP status of a refused token request; `0` when there is none.
     */
    constructor(message, status = 0) {
        super(message);
        this.name = 'OfflineTokenError';
        this.status = status;
    }
}
exports.OfflineTokenError = OfflineTokenError;
exports.TokenError = OfflineTokenError;
/**
 * Raised for every failure of a login, a refresh, or the lazy read of an expired token. The original
 * error, if any, is its `cause`. The message never contains a credential.
 */
class KeycloakAuthenticationError extends OfflineTokenError {
    /**
     * @param message - Description of the failure; never contains a credential.
     * @param cause - The underlying error, if any.
     * @param status - The HTTP status of a refused token request; `0` when there is none.
     */
    constructor(message, cause, status) {
        super(message, status);
        this.name = 'KeycloakAuthenticationError';
        this.cause = cause;
    }
}
exports.KeycloakAuthenticationError = KeycloakAuthenticationError;
/**
 * Compute the wait before the next attempt after `consecutiveFailures` failed refreshes: uniform in
 * `[base, ceiling]` with the ceiling doubling per failure up to the maximum (full jitter). The jitter is
 * the load-bearing half: N containers whose refreshes fail in the same instant would otherwise retry in
 * lockstep for as long as the outage lasts.
 *
 * @param consecutiveFailures - Failed refreshes so far; values below 1 count as 1.
 * @param randomFraction - Source of a [0,1) fraction; a value outside [0,1] is clamped.
 * @param timings - Timings to use; defaults to {@link DEFAULT_KEYCLOAK_TOKEN_TIMINGS}.
 * @returns Seconds to wait.
 */
function computeRefreshBackoffS(consecutiveFailures, randomFraction, timings = exports.DEFAULT_KEYCLOAK_TOKEN_TIMINGS) {
    const exponent = Math.min(Math.max(consecutiveFailures, 1) - 1, timings.maxRetryExponent);
    const ceilingS = Math.min(timings.retryBaseDelayS * 2 ** exponent, timings.retryMaxDelayS);
    const fraction = Math.min(Math.max(randomFraction(), 0), 1);
    return timings.retryBaseDelayS + fraction * (ceilingS - timings.retryBaseDelayS);
}
/**
 * Build the OIDC token endpoint URL for a realm, tolerating a trailing slash on `keycloakUrl`.
 *
 * @param keycloakUrl - Base Keycloak URL (trailing slashes are stripped).
 * @param realm - Realm name; URL-encoded into the path.
 * @returns The fully-qualified `.../protocol/openid-connect/token` endpoint URL.
 */
function buildTokenEndpoint(keycloakUrl, realm) {
    const base = keycloakUrl.replace(/\/+$/, '');
    return `${base}/realms/${encodeURIComponent(realm)}/protocol/openid-connect/token`;
}
/**
 * Render an error as `<Type>: <message>` for log lines and error messages.
 *
 * @param error - Anything that was thrown.
 * @returns The rendering.
 */
function describeError(error) {
    if (error instanceof Error) {
        return `${error.name}: ${error.message}`;
    }
    return `${typeof error}: ${String(error)}`;
}
/**
 * Say whether a transport rejection is a network failure (refused, DNS, TLS, timeout, socket).
 *
 * @param error - What the transport threw.
 * @returns `true` for a network failure, `false` for anything else (e.g. a bug in an injected transport).
 */
function isNetworkError(error) {
    if (!(error instanceof Error)) {
        return false;
    }
    const code = error.code;
    return (error.name === 'AbortError' ||
        error.name === 'TimeoutError' ||
        typeof code === 'string' ||
        error.message === 'fetch failed');
}
/**
 * The JSON type word of a parsed value that is not an object.
 *
 * @param value - The parsed JSON value.
 * @returns `array`, `null`, `string`, `number` or `boolean`.
 */
function jsonTypeWord(value) {
    if (Array.isArray(value)) {
        return 'array';
    }
    if (value === null) {
        return 'null';
    }
    return typeof value;
}
/** The global `WeakRef` constructor. */
const WeakReferenceImpl = globalThis
    .WeakRef;
/** Default scheduler: an `unref`-ed `setTimeout`, looked up at call time. */
const DEFAULT_SCHEDULER = {
    schedule: (task, delayInMs) => {
        const handle = setTimeout(() => {
            void task();
        }, delayInMs);
        // Do not keep the event loop alive solely for the refresh timer.
        /* c8 ignore next 3 -- the else branch is unreachable: Node's Timeout always exposes unref() */
        if (typeof handle.unref === 'function') {
            handle.unref();
        }
        return handle;
    },
    cancel: (handle) => {
        clearTimeout(handle);
    }
};
/** Default logger: `console`, without debug lines. */
const DEFAULT_LOGGER = {
    warn: (message) => console.warn(message),
    info: (message) => console.info(message)
};
/**
 * Background timer callback. Holds the provider only WEAKLY, so a pending timer never keeps an
 * otherwise unreachable provider (and its registry slot) alive.
 *
 * @param providerRef - Weak reference to the provider.
 * @returns A promise that settles once the step is done; it never rejects.
 */
async function runBackgroundRefresh(providerRef) {
    const provider = providerRef.deref();
    /* c8 ignore next 3 -- only reachable after a garbage collection, which a test cannot force without --expose-gc */
    if (provider === undefined) {
        return;
    }
    await provider.onBackgroundTimer();
}
/**
 * A live access-token holder backed by a bounded, failure-tolerant auto-refresh. Obtain one from
 * {@link login} or {@link getKeycloakTokenProvider}; read {@link getAuthorizationMetadataAsync} for the gRPC
 * metadata of every call and call {@link stop} when done.
 */
class OfflineTokenProvider {
    /**
     * Construct an inert provider from login options. No network call is made here; call
     * {@link bootstrap} (or use the {@link login} factory) to acquire the first token.
     *
     * @param options - The {@link OfflineTokenLoginOptions}.
     */
    constructor(options) {
        this.tokenEndpoint = buildTokenEndpoint(options.keycloakUrl, options.realm);
        this.clientId = options.clientId;
        this.tokenExpirationInS = options.tokenExpirationInS;
        this.fetchImpl = options.fetchImpl ?? createDefaultFetch(options.keycloakVerifySsl ?? true);
        this.nowInMs = options.nowInMs ?? options.nowMs ?? (() => perf_hooks_1.performance.now());
        this.randomFraction = options.randomFraction ?? Math.random;
        this.logger = options.logger ?? DEFAULT_LOGGER;
        this.scheduler = options.scheduler ?? DEFAULT_SCHEDULER;
        this.startBackgroundRefresh = options.startBackgroundRefresh ?? true;
        this.timings = Object.freeze({
            ...exports.DEFAULT_KEYCLOAK_TOKEN_TIMINGS,
            ...(options.refreshSkewInS === undefined ? {} : { expiryLeewayS: options.refreshSkewInS }),
            ...options.timings
        });
        this.selfRef = new WeakReferenceImpl(this);
        this.accessToken = null;
        this.refreshToken =
            typeof options.refreshToken === 'string' && options.refreshToken.length > 0 ? options.refreshToken : null;
        this.accessTokenExpiresAtS = 0;
        this.timer = null;
        this.stopped = false;
        this.closed = false;
        this.deadlineS = null;
        this.onRefreshErrorHandler = null;
        this.consecutiveRefreshFailures = 0;
        this.nextRefreshAttemptAtS = 0;
        this.lastRefreshFailure = null;
        this.inFlightRefresh = null;
    }
    /**
     * Acquire the first token and arm the background refresh. Awaited by {@link login}.
     *
     * With a handed-off `refreshToken` this is ONE refresh grant and the password is never sent (a
     * refused token is raised, not answered with a password login); otherwise ONE password grant. A
     * failure is raised without retry and without arming anything.
     *
     * @param username - The 2FA-exempt technical-user email.
     * @param password - The technical-user password (unused when a refresh token was handed off).
     * @returns A promise that resolves once the first token is stored and the refresh is armed.
     * @throws {@link KeycloakAuthenticationError} If the token endpoint fails, or a password login's
     *   response carries no `refresh_token` (the SDK client lacks `directAccessGrants` + `offline_access`).
     */
    async bootstrap(username, password) {
        if (this.refreshToken !== null) {
            await this.exchangeRefreshToken();
        }
        else {
            const payload = await this.postTokenRequest({
                grant_type: 'password',
                client_id: this.clientId,
                username,
                password,
                scope: 'offline_access'
            }, 'login');
            this.storeTokens(payload);
            if (this.refreshToken === null) {
                throw new KeycloakAuthenticationError('Keycloak token response did not contain a refresh_token; the SDK client must have ' +
                    'directAccessGrants + the offline_access scope (ondewo-t2s-cai-sdk-public)');
            }
        }
        if (this.tokenExpirationInS !== undefined) {
            this.deadlineS = this.nowS() + this.tokenExpirationInS;
        }
        if (this.startBackgroundRefresh) {
            this.armNextRefresh();
        }
    }
    /**
     * The `authorization` gRPC metadata of the next call, refreshing first when the token is within the
     * leeway of its expiry. Concurrent callers share one refresh. While a failed refresh backs off no
     * request is sent and the still-valid token is served; an expired token that cannot be refreshed is
     * raised instead of being handed to a server that would refuse it. After the bounded deadline the
     * token is served as it is and allowed to lapse.
     *
     * @returns `['authorization', 'Bearer <access_token>']`.
     * @throws {@link OfflineTokenError} If no token was acquired yet.
     * @throws {@link KeycloakAuthenticationError} If the access token has expired and could not be refreshed.
     */
    async getAuthorizationMetadataAsync() {
        if (this.accessToken === null) {
            throw new OfflineTokenError('No access token available; login() has not completed or has lapsed');
        }
        await this.refreshIfWithinWindow();
        return ['authorization', `Bearer ${this.accessToken}`];
    }
    /**
     * Register a callback invoked with the error of a failed background refresh (optional diagnostics).
     * A later call replaces any previously registered handler.
     *
     * @param handler - Callback receiving the {@link KeycloakAuthenticationError} of the failed refresh.
     */
    onRefreshError(handler) {
        this.onRefreshErrorHandler = handler;
    }
    /**
     * Return the current access token without refreshing it; prefer {@link getAuthorizationMetadataAsync}.
     *
     * @returns The current access token.
     * @throws {@link OfflineTokenError} If no access token is available yet, i.e. login has not completed.
     */
    getAccessToken() {
        if (this.accessToken === null) {
            throw new OfflineTokenError('No access token available; login() has not completed or has lapsed');
        }
        return this.accessToken;
    }
    /**
     * Build the value for an `Authorization` gRPC metadata header WITHOUT refreshing it; prefer
     * {@link getAuthorizationMetadataAsync}, which refreshes on demand.
     *
     * @returns The header value `Bearer <access_token>`.
     * @throws {@link OfflineTokenError} If no access token is available yet, i.e. login has not completed.
     */
    getAuthorizationHeader() {
        if (this.accessToken === null) {
            throw new OfflineTokenError('No access token available; login() has not completed or has lapsed');
        }
        return `Bearer ${this.accessToken}`;
    }
    /**
     * Perform the initial token acquisition and return a started provider (the t2s 6.x entry point that
     * {@link login} delegates to).
     *
     * @param options - The {@link OfflineTokenLoginOptions}.
     * @returns A promise resolving to a bootstrapped provider.
     * @throws {@link OfflineTokenError} If the options are invalid (before any network call).
     * @throws {@link KeycloakAuthenticationError} If the initial token acquisition fails.
     */
    static async create(options) {
        validateLoginOptions(options);
        const provider = new OfflineTokenProvider(options);
        await provider.bootstrap(options.username, options.password);
        return provider;
    }
    /**
     * The `authorization` metadata as a plain object, WITHOUT refreshing it (t2s 6.x); prefer
     * {@link getAuthorizationMetadataAsync} or the `tokenProvider` option of `createGrpcClient`, which
     * refresh on demand.
     *
     * @returns `{ authorization: 'Bearer <access_token>' }` (lowercase key, as gRPC requires).
     * @throws {@link OfflineTokenError} If no access token is available yet.
     */
    getAuthorizationMetadata() {
        return { authorization: this.getAuthorizationHeader() };
    }
    /**
     * Refresh the access token now, whatever its expiry (t2s 6.x).
     *
     * @returns The refreshed access token.
     * @throws {@link KeycloakAuthenticationError} If the refresh fails.
     */
    async refresh() {
        await this.runForcedRefresh();
        return this.getAccessToken();
    }
    /**
     * Stop the background refresh, interrupting a pending wait (also a backoff wait) so no further
     * request is sent. Idempotent and safe from any state, also from inside an `onRefreshError` handler.
     * The lazy {@link getAuthorizationMetadataAsync} keeps refreshing on demand afterwards.
     */
    stop() {
        this.closed = true;
        this.halt();
    }
    /** Alias of {@link stop}. */
    close() {
        this.stop();
    }
    /**
     * Whether {@link stop} / {@link close} was called.
     *
     * @returns `true` once the provider was closed by its user.
     */
    isClosed() {
        return this.closed;
    }
    /**
     * Redacted description: no token value, an empty token stays visible as `''`.
     *
     * @returns For example `OfflineTokenProvider(tokenEndpoint=..., clientId=..., accessToken=***REDACTED***, refreshToken=***REDACTED***)`.
     */
    toString() {
        return (`OfflineTokenProvider(tokenEndpoint=${this.tokenEndpoint}, clientId=${this.clientId}, ` +
            `accessToken=${redact(this.accessToken)}, refreshToken=${redact(this.refreshToken)})`);
    }
    /**
     * Loggable form with the tokens redacted.
     *
     * @returns A plain object safe to log or `JSON.stringify`.
     */
    toJSON() {
        return {
            tokenEndpoint: this.tokenEndpoint,
            clientId: this.clientId,
            accessToken: redact(this.accessToken),
            refreshToken: redact(this.refreshToken)
        };
    }
    /**
     * `util.inspect()` / `console.log()` rendering: the same as {@link toString}.
     *
     * @returns The redacted description.
     */
    [util_1.inspect.custom]() {
        return this.toString();
    }
    /** End the background refresh (user stop or the bounded deadline) and release the armed timer. */
    halt() {
        this.stopped = true;
        if (this.timer !== null) {
            const timer = this.timer;
            this.timer = null;
            try {
                this.scheduler.cancel(timer);
            }
            catch {
                // A scheduler that refuses the cancel cannot be helped here; `stopped` already keeps the
                // fired task from sending a request or re-arming, so stop() must not throw for it.
            }
        }
    }
    /**
     * The current monotonic time in seconds.
     *
     * @returns Seconds.
     */
    nowS() {
        return this.nowInMs() / 1000;
    }
    /**
     * Arm the background timer for the next refresh: the leeway before expiry, or after a failure the
     * backoff (never the floor alone), floored at the minimum delay and clamped to the bounded deadline.
     * Stops the loop once the deadline has passed.
     */
    armNextRefresh() {
        if (this.stopped) {
            return;
        }
        const nowS = this.nowS();
        if (this.deadlineS !== null && nowS >= this.deadlineS) {
            this.halt();
            return;
        }
        let delayS = this.accessTokenExpiresAtS - this.timings.expiryLeewayS - nowS;
        if (this.consecutiveRefreshFailures > 0) {
            delayS = this.nextRefreshAttemptAtS - nowS;
        }
        delayS = Math.max(delayS, this.timings.minRefreshDelayS);
        if (this.deadlineS !== null) {
            delayS = Math.min(delayS, this.deadlineS - nowS);
        }
        const selfRef = this.selfRef;
        this.timer = this.scheduler.schedule(() => runBackgroundRefresh(selfRef), delayS * 1000);
    }
    /**
     * One background step: refresh if due, report a failure, re-arm. A failure never ends the loop.
     *
     * @returns A promise that settles when the step is done; it never rejects.
     */
    async onBackgroundTimer() {
        this.timer = null;
        if (this.stopped) {
            return;
        }
        const failuresBefore = this.consecutiveRefreshFailures;
        try {
            await this.refreshIfWithinWindow();
        }
        catch (error) {
            // Already recorded and warned about by recordRefreshFailure; never a second warning.
            this.logger.debug?.(`Keycloak background refresh will be retried (${describeError(error)})`);
        }
        if (this.consecutiveRefreshFailures > failuresBefore && this.onRefreshErrorHandler !== null) {
            try {
                this.onRefreshErrorHandler(this.lastRefreshFailure);
            }
            catch {
                // A diagnostics handler that throws is the caller's bug; it must not end the loop.
            }
        }
        this.armNextRefresh();
    }
    /**
     * The refresh decision shared by the lazy and the background path (single flight).
     *
     * @returns A promise that resolves when the token may be served.
     * @throws {@link KeycloakAuthenticationError} If the token has expired and could not be refreshed.
     */
    async refreshIfWithinWindow() {
        while (this.inFlightRefresh !== null) {
            await this.inFlightRefresh;
        }
        const nowS = this.nowS();
        if (this.deadlineS !== null && nowS >= this.deadlineS) {
            return;
        }
        if (nowS < this.accessTokenExpiresAtS - this.timings.expiryLeewayS) {
            return;
        }
        if (nowS < this.nextRefreshAttemptAtS) {
            if (nowS < this.accessTokenExpiresAtS) {
                return;
            }
            throw new KeycloakAuthenticationError(`The Keycloak access token has expired and the refresh is backing off after ` +
                `${this.consecutiveRefreshFailures} consecutive failure(s); the next attempt is due in ` +
                `${(this.nextRefreshAttemptAtS - nowS).toFixed(1)}s`);
        }
        const outcome = { failure: null };
        const attempt = this.exchangeRefreshToken().then(() => this.recordRefreshSuccess(), (error) => {
            outcome.failure = error;
            this.recordRefreshFailure(outcome.failure);
        });
        this.inFlightRefresh = attempt;
        try {
            await attempt;
        }
        finally {
            this.inFlightRefresh = null;
        }
        // Re-read the clock: the failed attempt may itself have taken up to the HTTP timeout.
        if (outcome.failure !== null && this.nowS() >= this.accessTokenExpiresAtS) {
            throw outcome.failure;
        }
    }
    /**
     * Count a failed refresh, schedule the next attempt (backoff measured from NOW) and warn once.
     * Deliberately not a fallback to a password grant.
     *
     * @param error - The failure; only its type and message are logged.
     */
    recordRefreshFailure(error) {
        const nowS = this.nowS();
        this.consecutiveRefreshFailures += 1;
        this.lastRefreshFailure = error;
        const delayS = computeRefreshBackoffS(this.consecutiveRefreshFailures, this.randomFraction, this.timings);
        this.nextRefreshAttemptAtS = nowS + delayS;
        const remainingS = this.accessTokenExpiresAtS - nowS;
        const validity = remainingS > 0
            ? `the current access token stays valid for ${remainingS.toFixed(1)}s`
            : 'the current access token has expired';
        this.logger.warn(`Keycloak token refresh failed (attempt ${this.consecutiveRefreshFailures}); retrying in ` +
            `${delayS.toFixed(1)}s, ${validity} (${describeError(error)})`);
    }
    /** Reset the failure backoff after a successful refresh and log the recovery, if any. */
    recordRefreshSuccess() {
        if (this.consecutiveRefreshFailures > 0) {
            this.logger.info(`Keycloak token refresh recovered after ${this.consecutiveRefreshFailures} failed attempt(s)`);
        }
        this.consecutiveRefreshFailures = 0;
        this.nextRefreshAttemptAtS = 0;
    }
    /**
     * Exchange the offline refresh token for a fresh access token.
     *
     * @returns A promise that resolves once the new token is stored.
     * @throws {@link KeycloakAuthenticationError} On any failure.
     */
    async exchangeRefreshToken() {
        const payload = await this.postTokenRequest({
            grant_type: 'refresh_token',
            client_id: this.clientId,
            refresh_token: this.refreshToken
        }, 'refresh');
        this.storeTokens(payload);
    }
    /**
     * POST a form to the token endpoint and return the parsed JSON object. Every failure becomes a
     * {@link KeycloakAuthenticationError} carrying the original error as its cause.
     *
     * @param params - Form fields (grant type, client id, credentials).
     * @param action - `login` or `refresh`, for the messages.
     * @returns The parsed token response.
     * @throws {@link KeycloakAuthenticationError} On a transport error, a non-2xx status or an unusable body.
     */
    async postTokenRequest(params, action) {
        const timeoutInMs = this.timings.httpTimeoutS * 1000;
        let status;
        let text;
        try {
            const response = await this.fetchImpl(this.tokenEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    Accept: 'application/json'
                },
                body: new URLSearchParams(params).toString(),
                signal: AbortSignal.timeout(timeoutInMs),
                timeoutInMs
            });
            status = response.status;
            text = await response.text();
        }
        catch (error) {
            if (isNetworkError(error)) {
                throw new KeycloakAuthenticationError(`Keycloak token ${action} could not reach the token endpoint (${describeError(error)})`, error);
            }
            throw new KeycloakAuthenticationError(`Keycloak token ${action} failed (${describeError(error)})`, error);
        }
        if (status < 200 || status >= 300) {
            throw new KeycloakAuthenticationError(`Keycloak token ${action} failed with status ${status}: ${text.slice(0, this.timings.maxErrorBodyChars)}`, undefined, status);
        }
        let body;
        try {
            body = JSON.parse(text);
        }
        catch (error) {
            throw new KeycloakAuthenticationError(`Keycloak token ${action} returned status ${status} with a body that is not JSON`, error);
        }
        if (typeof body !== 'object' || body === null || Array.isArray(body)) {
            throw new KeycloakAuthenticationError(`Keycloak token ${action} returned a JSON ${jsonTypeWord(body)} instead of an object`);
        }
        return body;
    }
    /**
     * Validate a token response, then store the access token, a rotated refresh token and the expiry.
     * A malformed response changes no state.
     *
     * @param payload - The parsed token response.
     * @throws {@link KeycloakAuthenticationError} If it carries no usable `access_token` or a non-numeric
     *   `expires_in`. The message names the response's FIELDS, never a value.
     */
    storeTokens(payload) {
        const accessToken = payload.access_token;
        if (typeof accessToken !== 'string' || accessToken.length === 0) {
            throw new KeycloakAuthenticationError('Keycloak token response did not contain an access_token; the response carried the fields ' +
                `[${Object.keys(payload).sort().join(', ')}] (values withheld: a token response is credential material)`);
        }
        const expiresInS = parseExpiresIn(payload.expires_in);
        this.accessToken = accessToken;
        // Keycloak may rotate the offline refresh token; keep the newest one when present.
        const refreshToken = payload.refresh_token;
        if (typeof refreshToken === 'string' && refreshToken.length > 0) {
            this.refreshToken = refreshToken;
        }
        this.accessTokenExpiresAtS = this.nowS() + Math.max(expiresInS, 0);
    }
    /**
     * Refresh the access token NOW, whatever its expiry: the explicit "refresh" of the earlier API. It
     * joins a refresh already in flight instead of sending a second one, counts towards the shared
     * failure backoff like any other refresh, and never sends a password grant.
     *
     * @returns A promise that resolves once the refreshed token is stored.
     * @throws {@link OfflineTokenError} If no token was acquired yet.
     * @throws {@link KeycloakAuthenticationError} If the refresh fails.
     */
    async runForcedRefresh() {
        if (this.accessToken === null) {
            throw new OfflineTokenError('No access token available; login() has not completed or has lapsed');
        }
        if (this.inFlightRefresh !== null) {
            await this.inFlightRefresh;
            return;
        }
        const outcome = { failure: null };
        const attempt = this.exchangeRefreshToken().then(() => this.recordRefreshSuccess(), (error) => {
            outcome.failure = error;
            this.recordRefreshFailure(outcome.failure);
        });
        this.inFlightRefresh = attempt;
        try {
            await attempt;
        }
        finally {
            this.inFlightRefresh = null;
        }
        if (outcome.failure !== null) {
            throw outcome.failure;
        }
    }
}
exports.OfflineTokenProvider = OfflineTokenProvider;
/**
 * Parse `expires_in`: missing means 0, a number or a numeric string is accepted.
 *
 * @param value - The raw field.
 * @returns Seconds.
 * @throws {@link KeycloakAuthenticationError} If the value is not numeric (the value is withheld).
 */
function parseExpiresIn(value) {
    if (value === undefined) {
        return 0;
    }
    let parsed = Number.NaN;
    if (typeof value === 'number') {
        parsed = value;
    }
    else if (typeof value === 'string' && value.trim().length > 0) {
        parsed = Number(value);
    }
    if (Number.isNaN(parsed)) {
        throw new KeycloakAuthenticationError('Keycloak token response carried a non-numeric expires_in (value withheld)');
    }
    return parsed;
}
/**
 * Redact a token for rendering: non-empty becomes the marker, empty or unset renders as `''`.
 *
 * @param secret - The token, or `null`.
 * @returns The redacted rendering.
 */
function redact(secret) {
    return secret === null || secret.length === 0 ? "''" : REDACTED_SECRET;
}
/**
 * Validate login options before any network I/O.
 *
 * @param options - The options to check.
 * @throws {@link OfflineTokenError} If `options` is missing, a Keycloak field (`keycloakUrl`, `realm`,
 *   `clientId`) or `username` is absent/empty, or neither `password` nor `refreshToken` is set.
 */
function validateLoginOptions(options) {
    if (options === undefined || options === null) {
        throw new OfflineTokenError('login() requires an options object');
    }
    for (const key of ['keycloakUrl', 'realm', 'clientId']) {
        if (!isNonEmptyString(options[key])) {
            throw new OfflineTokenError(`login() option "${key}" is required and must be a non-empty string; the Keycloak fields ` +
                '`keycloakUrl`, `realm`, and `clientId` must be provided together');
        }
    }
    if (!isNonEmptyString(options.username)) {
        throw new OfflineTokenError('login() option "username" is required and must be a non-empty string');
    }
    if (options.refreshToken !== undefined && typeof options.refreshToken !== 'string') {
        throw new OfflineTokenError('login() option "refreshToken" must be a string');
    }
    if (!isNonEmptyString(options.password) && !isNonEmptyString(options.refreshToken)) {
        throw new OfflineTokenError('login() option "password" is required and must be a non-empty string unless a refresh token is ' +
            'handed off: either the field `password` or the field `refreshToken` (refresh_token) is mandatory');
    }
}
/**
 * @param value - Anything.
 * @returns Whether `value` is a non-empty string.
 */
function isNonEmptyString(value) {
    return typeof value === 'string' && value.length > 0;
}
/**
 * Acquire a Keycloak token against the PUBLIC SDK client and return a live provider whose access token
 * is auto-refreshed until `tokenExpirationInS` elapses. With `refreshToken` set this is one refresh
 * grant (no password is ever sent); otherwise a one-time ROPC + `offline_access` login.
 *
 * Every call builds a NEW provider (one login); share one with {@link getKeycloakTokenProvider}.
 *
 * @param options - The {@link OfflineTokenLoginOptions}; `keycloakUrl`, `realm`, `clientId` and
 *   `username` are required, plus `password` or `refreshToken`.
 * @returns A promise resolving to a bootstrapped {@link OfflineTokenProvider}.
 * @throws {@link OfflineTokenError} If the options are invalid (before any network call).
 * @throws {@link KeycloakAuthenticationError} If the initial token acquisition fails.
 */
async function login(options) {
    return OfflineTokenProvider.create(options);
}
/** Shared providers by credential key; held weakly so an unused provider can be collected. */
const PROVIDER_REGISTRY = new Map();
/** Provider creations in flight, so concurrent first use logs in once. */
const PENDING_PROVIDERS = new Map();
/**
 * The registry key of a credential set: the SHA-256 hex digest of the fields that define the identity,
 * so the key holds no secret and is never an object identity. `refreshToken` takes part: two token-only
 * configs carry an EMPTY password and would otherwise share one provider across tenants.
 *
 * @param options - The Keycloak options.
 * @returns A 64-character hex digest.
 */
function keycloakProviderRegistryKey(options) {
    const fields = [
        options.keycloakUrl ?? '',
        options.realm ?? '',
        options.clientId ?? '',
        options.username ?? '',
        options.password ?? '',
        options.tokenExpirationInS === undefined ? '' : String(options.tokenExpirationInS),
        String(options.keycloakVerifySsl ?? true),
        options.refreshToken ?? ''
    ];
    return (0, crypto_1.createHash)('sha256').update(fields.join('\0'), 'utf8').digest('hex');
}
/**
 * Return the provider shared by every client of one credential set, logging in once.
 *
 * Returns `null` when Keycloak is not configured (none of `keycloakUrl`, `realm`, `clientId` is set):
 * then no authorization metadata is attached at all (plaintext server, or an ingress that injects auth).
 * A closed provider is never handed out; a new one is created instead.
 *
 * @param options - The Keycloak options; the transport seams of the FIRST caller of a key are used.
 * @returns The shared provider, or `null` without a Keycloak configuration.
 * @throws {@link OfflineTokenError} If only some of `keycloakUrl`, `realm`, `clientId` are set, or the other
 *   login options are invalid.
 * @throws {@link KeycloakAuthenticationError} If the initial token acquisition fails.
 */
async function getKeycloakTokenProvider(options) {
    const tripleSet = [options.keycloakUrl, options.realm, options.clientId].filter(isNonEmptyString).length;
    if (tripleSet === 0) {
        return null;
    }
    if (tripleSet < 3) {
        throw new OfflineTokenError('The Keycloak fields `keycloakUrl`, `realm`, and `clientId` must be provided together ' +
            '(keycloak_url, realm, client_id).');
    }
    validateLoginOptions(options);
    const key = keycloakProviderRegistryKey(options);
    for (const [registeredKey, reference] of PROVIDER_REGISTRY) {
        const registered = reference.deref();
        if (registered === undefined || registered.isClosed()) {
            PROVIDER_REGISTRY.delete(registeredKey);
        }
    }
    const pending = PENDING_PROVIDERS.get(key);
    if (pending !== undefined) {
        return pending;
    }
    const existing = PROVIDER_REGISTRY.get(key)?.deref();
    if (existing !== undefined) {
        return existing;
    }
    const creation = login(options);
    PENDING_PROVIDERS.set(key, creation);
    try {
        const provider = await creation;
        PROVIDER_REGISTRY.set(key, new WeakReferenceImpl(provider));
        return provider;
    }
    finally {
        PENDING_PROVIDERS.delete(key);
    }
}
/**
 * Build the default {@link TokenFetch}: delegate to the global `fetch` (Node >= 18).
 *
 * When `verifySsl` is `false`, a cached undici `Agent` with `rejectUnauthorized: false` is attached to
 * every request as its `dispatcher`, so the Keycloak token call skips TLS certificate verification
 * (opt-in insecure; Node-only; never a process-wide switch). The secure default never loads undici.
 *
 * @param verifySsl - Whether to verify the Keycloak server's TLS certificate.
 * @returns A {@link TokenFetch} bound to the chosen TLS-verification behaviour.
 */
function createDefaultFetch(verifySsl) {
    let dispatcher;
    if (!verifySsl) {
        // Lazy require keeps undici out of the default (secure) code path.
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        const { Agent } = require('undici');
        dispatcher = new Agent({ connect: { rejectUnauthorized: false } });
    }
    return (url, init) => {
        const globalFetch = globalThis.fetch;
        return globalFetch(url, dispatcher === undefined ? init : { ...init, dispatcher });
    };
}
