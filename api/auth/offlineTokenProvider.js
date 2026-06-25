"use strict";
// ONDEWO T2S NodeJS Client — D18 headless-SDK Keycloak offline-token auth helper.
//
// Implements the D18 / Q1 contract from the Keycloak migration plan:
//   - ROPC (grant_type=password) + scope=offline_access against a PUBLIC Keycloak
//     client (no client_secret) to obtain a short-lived access token and a
//     long-lived OFFLINE refresh token.
//   - Auto-refreshes the access token (grant_type=refresh_token) before it expires
//     so the request hot path always has a fresh "Authorization: Bearer <jwt>".
//   - The refresh loop stops after `tokenExpirationInS` seconds (when provided),
//     after which the access token is allowed to lapse and re-login is required.
//
// Headless SDKs only (python/nodejs). Browser SDKs must use Auth-Code + PKCE and
// must never hold an offline token.
Object.defineProperty(exports, "__esModule", { value: true });
exports.OfflineTokenProvider = exports.OfflineTokenError = void 0;
exports.login = login;
/**
 * Raised when the Keycloak token endpoint rejects a credential or refresh-token
 * exchange, or returns a malformed payload.
 */
class OfflineTokenError extends Error {
    /**
     * Creates a new {@link OfflineTokenError}.
     *
     * @param message Human-readable description of the failure.
     * @param status HTTP status from the token endpoint, or `0` if the failure
     *   occurred before an HTTP exchange.
     */
    constructor(message, status) {
        super(message);
        this.name = 'OfflineTokenError';
        this.status = status;
    }
}
exports.OfflineTokenError = OfflineTokenError;
/** Default seconds-before-expiry at which the access token is refreshed. */
const DEFAULT_REFRESH_SKEW_IN_S = 30;
/** Lower bound (ms) on any scheduled refresh delay, so it never fires immediately. */
const MIN_REFRESH_DELAY_IN_MS = 1000;
/**
 * A live offline-token session. Holds the current access token, auto-refreshes it
 * in the background, and exposes it for the `Authorization: Bearer` gRPC metadata.
 *
 * Always call {@link OfflineTokenProvider.stop} when done to clear the refresh
 * timer (otherwise the process may not exit).
 */
class OfflineTokenProvider {
    /**
     * Initializes the provider from an already-obtained token and arms the first
     * auto-refresh. Private: instances are created via
     * {@link OfflineTokenProvider.create} (or {@link login}).
     *
     * @param options Resolved login options (every optional field filled in) except
     *   `tokenExpirationInS`, which is pre-converted to `deadlineMs`.
     * @param initial The token payload from the initial ROPC login.
     * @param deadlineMs Absolute time (ms since epoch) past which refreshes stop, or
     *   `undefined` for no bound.
     */
    constructor(options, initial, deadlineMs) {
        this.keycloakUrl = stripTrailingSlash(options.keycloakUrl);
        this.realm = options.realm;
        this.clientId = options.clientId;
        this.fetchImpl = options.fetchImpl;
        this.nowMs = options.nowMs;
        this.refreshSkewInMs = options.refreshSkewInS * 1000;
        this.deadlineMs = deadlineMs;
        this.accessToken = initial.access_token;
        this.refreshToken = initial.refresh_token;
        this.refreshTimer = undefined;
        this.stopped = false;
        this.scheduleRefresh(initial.expires_in);
    }
    /**
     * Performs the one-time ROPC + `offline_access` login against the PUBLIC SDK
     * client (no client_secret), then returns a started provider that
     * auto-refreshes the access token.
     *
     * @param options Login options; see {@link OfflineTokenLoginOptions}.
     * @returns A started {@link OfflineTokenProvider}.
     * @throws {OfflineTokenError} If the credentials are rejected or the response
     *   is malformed.
     */
    static async create(options) {
        const resolvedFetch = options.fetchImpl ?? globalFetch();
        if (resolvedFetch === undefined) {
            throw new OfflineTokenError('No fetch implementation available; pass options.fetchImpl or run on Node >= 18.', 0);
        }
        const now = options.nowMs ?? Date.now;
        const skewInS = options.refreshSkewInS ?? DEFAULT_REFRESH_SKEW_IN_S;
        const tokenUrl = buildTokenUrl(options.keycloakUrl, options.realm);
        const body = encodeForm({
            grant_type: 'password',
            client_id: options.clientId,
            username: options.username,
            password: options.password,
            scope: 'openid offline_access'
        });
        const token = await postToken(resolvedFetch, tokenUrl, body);
        let deadlineMs;
        if (options.tokenExpirationInS !== undefined) {
            deadlineMs = now() + (options.tokenExpirationInS * 1000);
        }
        return new OfflineTokenProvider({
            keycloakUrl: options.keycloakUrl,
            realm: options.realm,
            clientId: options.clientId,
            username: options.username,
            password: options.password,
            fetchImpl: resolvedFetch,
            nowMs: now,
            refreshSkewInS: skewInS
        }, token, deadlineMs);
    }
    /**
     * Returns the current access token (a JWT) for the `Authorization: Bearer`
     * header / gRPC metadata.
     *
     * @returns The current access token.
     */
    getAccessToken() {
        return this.accessToken;
    }
    /**
     * Returns gRPC metadata key/value pairs carrying the current access token, i.e.
     * `{ authorization: 'Bearer <jwt>' }`.
     *
     * @returns The authorization metadata object.
     */
    getAuthorizationMetadata() {
        return { authorization: `Bearer ${this.accessToken}` };
    }
    /**
     * Forces an immediate access-token refresh from the offline refresh token and
     * reschedules the next automatic refresh. Useful to recover from an
     * `UNAUTHENTICATED` upstream response.
     *
     * @returns The freshly minted access token.
     * @throws {OfflineTokenError} If the refresh-token exchange fails.
     */
    async refresh() {
        const token = await this.exchangeRefreshToken();
        this.applyToken(token);
        this.scheduleRefresh(token.expires_in);
        return this.accessToken;
    }
    /**
     * Stops the background refresh loop and clears the timer. Idempotent. After
     * this the access token is no longer renewed and will eventually lapse.
     *
     * @returns Nothing.
     */
    stop() {
        this.stopped = true;
        if (this.refreshTimer !== undefined) {
            clearTimeout(this.refreshTimer);
            this.refreshTimer = undefined;
        }
    }
    /**
     * Arms a single `setTimeout` to refresh the access token `refreshSkewInMs`
     * before it expires. No-op if the provider is stopped, or if the next refresh
     * would fall past {@link OfflineTokenProvider.deadlineMs}. The delay is clamped
     * to at least {@link MIN_REFRESH_DELAY_IN_MS}, and the timer is `unref`-ed so it
     * does not keep the Node event loop alive on its own.
     *
     * @param expiresInS Lifetime of the just-issued access token, in seconds.
     * @returns Nothing.
     */
    scheduleRefresh(expiresInS) {
        if (this.stopped) {
            return;
        }
        const lifetimeInMs = expiresInS * 1000;
        const refreshAtMs = this.nowMs() + Math.max(lifetimeInMs - this.refreshSkewInMs, MIN_REFRESH_DELAY_IN_MS);
        if (this.deadlineMs !== undefined && refreshAtMs >= this.deadlineMs) {
            // Next refresh would fall past the bound: let the access token lapse.
            return;
        }
        const delayMs = Math.max(refreshAtMs - this.nowMs(), MIN_REFRESH_DELAY_IN_MS);
        const timer = setTimeout(() => {
            void this.runScheduledRefresh();
        }, delayMs);
        this.refreshTimer = timer;
        // Do not keep the event loop alive solely for the refresh timer.
        if (typeof timer.unref === 'function') {
            timer.unref();
        }
    }
    /**
     * Body of the auto-refresh timer: exchanges the refresh token, applies the new
     * token and arms the next refresh. Background-refresh failures are swallowed
     * (and logged via `console.warn`) so a transient outage never throws on the hot
     * path — the current access token stays valid until its own expiry and callers
     * can still trigger an explicit {@link OfflineTokenProvider.refresh}. No-op if
     * the provider was stopped before the timer fired.
     *
     * @returns A promise that resolves once the refresh attempt has settled.
     */
    async runScheduledRefresh() {
        if (this.stopped) {
            return;
        }
        try {
            const token = await this.exchangeRefreshToken();
            this.applyToken(token);
            this.scheduleRefresh(token.expires_in);
        }
        catch (reason) {
            // Swallow background-refresh failures: the access token stays valid until
            // its own exp, and callers can still trigger an explicit refresh().
            if (typeof console !== 'undefined' && typeof console.warn === 'function') {
                console.warn('OfflineTokenProvider background refresh failed:', stringifyReason(reason));
            }
        }
    }
    /**
     * Posts `grant_type=refresh_token` (with the current refresh token and the
     * public client id, no secret) to the Keycloak token endpoint.
     *
     * @returns The parsed token payload from the refresh exchange.
     * @throws {OfflineTokenError} If the endpoint rejects the exchange or returns a
     *   malformed payload.
     */
    async exchangeRefreshToken() {
        const tokenUrl = buildTokenUrl(this.keycloakUrl, this.realm);
        const body = encodeForm({
            grant_type: 'refresh_token',
            client_id: this.clientId,
            refresh_token: this.refreshToken
        });
        return postToken(this.fetchImpl, tokenUrl, body);
    }
    /**
     * Stores the new access token and, honoring Keycloak refresh-token rotation,
     * adopts the rotated refresh token (when the payload carries a non-empty one) so
     * the next exchange uses the latest refresh token.
     *
     * @param token The token payload from a login or refresh exchange.
     * @returns Nothing.
     */
    applyToken(token) {
        this.accessToken = token.access_token;
        // Keycloak refresh-token rotation: adopt the rotated refresh token so the
        // next exchange uses the latest one.
        if (token.refresh_token.length > 0) {
            this.refreshToken = token.refresh_token;
        }
    }
}
exports.OfflineTokenProvider = OfflineTokenProvider;
/**
 * Convenience wrapper around {@link OfflineTokenProvider.create}.
 *
 * Performs the D18 ROPC + `offline_access` login against the public SDK client and
 * returns a started provider that auto-refreshes the access token and exposes it
 * for the `Authorization: Bearer` metadata. The refresh loop stops after
 * `tokenExpirationInS` seconds when provided.
 *
 * @param options Login options; see {@link OfflineTokenLoginOptions}.
 * @returns A started {@link OfflineTokenProvider}.
 * @throws {OfflineTokenError} If the credentials are rejected or the response is
 *   malformed.
 */
async function login(options) {
    return OfflineTokenProvider.create(options);
}
/**
 * Builds the Keycloak OpenID Connect token-endpoint URL for a realm.
 *
 * @param keycloakUrl Base Keycloak URL (a trailing slash is tolerated).
 * @param realm Realm name (URL-encoded into the path).
 * @returns The fully-qualified `.../realms/<realm>/protocol/openid-connect/token` URL.
 */
function buildTokenUrl(keycloakUrl, realm) {
    return `${stripTrailingSlash(keycloakUrl)}/realms/${encodeURIComponent(realm)}/protocol/openid-connect/token`;
}
/**
 * POSTs a form-encoded body to the token endpoint and parses the success payload.
 *
 * @param fetchImpl Fetch implementation to use for the request.
 * @param tokenUrl The token-endpoint URL (see {@link buildTokenUrl}).
 * @param body The `application/x-www-form-urlencoded` request body.
 * @returns The parsed Keycloak token payload.
 * @throws {OfflineTokenError} If the endpoint returns a non-2xx status or a
 *   malformed body.
 */
async function postToken(fetchImpl, tokenUrl, body) {
    const response = await fetchImpl(tokenUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded', Accept: 'application/json' },
        body
    });
    const rawBody = await response.text();
    if (!response.ok) {
        throw new OfflineTokenError(`Keycloak token endpoint returned HTTP ${response.status}: ${rawBody}`, response.status);
    }
    const parsed = parseTokenResponse(rawBody, response.status);
    return parsed;
}
/**
 * Parses and validates a raw token-endpoint body into a {@link KeycloakTokenResponse}.
 *
 * Requires a JSON object carrying a non-empty `access_token` and a non-empty
 * `refresh_token` (the offline token); a non-finite `expires_in` defaults to `0`.
 *
 * @param rawBody The raw response body text.
 * @param status The HTTP status the body came with, propagated onto any error.
 * @returns The validated token payload.
 * @throws {OfflineTokenError} If the body is not JSON, not a JSON object, or is
 *   missing the required token fields.
 */
function parseTokenResponse(rawBody, status) {
    let payload;
    try {
        payload = JSON.parse(rawBody);
    }
    catch (_reason) {
        throw new OfflineTokenError(`Keycloak token endpoint returned non-JSON body: ${rawBody}`, status);
    }
    if (typeof payload !== 'object' || payload === null) {
        throw new OfflineTokenError('Keycloak token response was not a JSON object.', status);
    }
    const record = payload;
    const accessToken = record.access_token;
    const refreshToken = record.refresh_token;
    const expiresIn = record.expires_in;
    if (typeof accessToken !== 'string' || accessToken.length === 0) {
        throw new OfflineTokenError('Keycloak token response missing "access_token".', status);
    }
    if (typeof refreshToken !== 'string' || refreshToken.length === 0) {
        throw new OfflineTokenError('Keycloak token response missing "refresh_token" (offline token); ensure scope=offline_access.', status);
    }
    let expiresInS = 0;
    if (typeof expiresIn === 'number' && Number.isFinite(expiresIn)) {
        expiresInS = expiresIn;
    }
    return { access_token: accessToken, refresh_token: refreshToken, expires_in: expiresInS };
}
/**
 * URL-encodes a flat string map as an `application/x-www-form-urlencoded` body.
 *
 * @param fields Key/value pairs to encode; both keys and values are escaped.
 * @returns The `key=value&...` encoded form body.
 */
function encodeForm(fields) {
    const parts = [];
    for (const key of Object.keys(fields)) {
        parts.push(`${encodeURIComponent(key)}=${encodeURIComponent(fields[key])}`);
    }
    return parts.join('&');
}
/**
 * Removes a single trailing slash from a URL so path segments can be appended
 * without producing a double slash.
 *
 * @param value The URL (or any string) to normalize.
 * @returns `value` without its trailing slash, or `value` unchanged if it had none.
 */
function stripTrailingSlash(value) {
    if (value.endsWith('/')) {
        return value.slice(0, -1);
    }
    return value;
}
/**
 * Renders an unknown rejection reason as a string for logging: the `message` of an
 * `Error`, otherwise `String(reason)`.
 *
 * @param reason The caught rejection reason.
 * @returns A human-readable description of `reason`.
 */
function stringifyReason(reason) {
    if (reason instanceof Error) {
        return reason.message;
    }
    return String(reason);
}
/**
 * Resolves the global `fetch` (Node >= 18 / browsers) as a {@link FetchLike}, used
 * as the default when no `fetchImpl` is injected.
 *
 * @returns The global `fetch` if present and callable, otherwise `undefined`.
 */
function globalFetch() {
    const candidate = globalThis.fetch;
    if (typeof candidate === 'function') {
        return candidate;
    }
    return undefined;
}
