import { inspect } from 'util';
/** Timing constants of the token provider; every SDK uses the production values of {@link DEFAULT_KEYCLOAK_TOKEN_TIMINGS}. */
export interface KeycloakTokenTimings {
    /** Refresh this many seconds before the access token expires. */
    expiryLeewayS: number;
    /** Floor (seconds) of any background wait, so an `expires_in` of 0 cannot spin a hot loop. */
    minRefreshDelayS: number;
    /** First retry delay (seconds) after a failed refresh. */
    retryBaseDelayS: number;
    /** Ceiling (seconds) of the failure backoff. */
    retryMaxDelayS: number;
    /** Exponent cap of the backoff (`base * 2 ** cap >= max`), so a huge failure count cannot overflow. */
    maxRetryExponent: number;
    /** Timeout (seconds) of one whole token-endpoint call; must stay below `expiryLeewayS`. */
    httpTimeoutS: number;
    /** Longest slice of an error body quoted in an error message. */
    maxErrorBodyChars: number;
}
/**
 * Production timings, identical in every ONDEWO SDK. A Keycloak outage is retried no faster than every
 * 5 s and backs off to every 300 s: ondewo runs one client per call container, so a 1 Hz retry that is
 * harmless for one process is an amplifier against the realm all of them share.
 */
export declare const DEFAULT_KEYCLOAK_TOKEN_TIMINGS: Readonly<KeycloakTokenTimings>;
/**
 * Minimal structural type of the fetch `Response` fields this helper reads. Keeps the module
 * self-contained (no DOM lib dependency) while still typing the injectable `fetchImpl`.
 */
export interface TokenFetchResponse {
    /** Whether the HTTP status is in the 2xx success range. */
    ok: boolean;
    /** The numeric HTTP status code (e.g. `200`, `401`, `500`). */
    status: number;
    /**
     * Read the full response body as text.
     *
     * @returns A promise resolving to the raw response body.
     */
    text(): Promise<string>;
}
/** Init object passed to the injectable fetch when POSTing to the token endpoint. */
export interface TokenFetchInit {
    /** HTTP method; always `"POST"` for the token endpoint call. */
    method: string;
    /** Request headers (`Content-Type`/`Accept`), keyed by header name. */
    headers: Record<string, string>;
    /** The `application/x-www-form-urlencoded` request body. */
    body: string;
    /**
     * Optional undici dispatcher (Node's non-standard `fetch` extension). Set only
     * on the default transport when `keycloakVerifySsl` is `false`; carries an
     * `Agent({ connect: { rejectUnauthorized: false } })` so the token request skips
     * TLS certificate verification. Left `undefined` on the secure default path.
     */
    dispatcher?: unknown;
    /** Aborts the whole call (connect + body) after {@link TokenFetchInit.timeoutInMs}. */
    signal?: AbortSignal;
    /** The timeout the `signal` enforces, in milliseconds (informational, for injected transports). */
    timeoutInMs?: number;
}
/**
 * Injectable fetch signature (a subset of the global `fetch`) used by the token endpoint call.
 *
 * @param url - The fully-qualified OIDC token endpoint URL.
 * @param init - The request init (method, headers, form-encoded body, abort signal).
 * @returns A promise resolving to the {@link TokenFetchResponse} for the request.
 */
export type TokenFetch = (url: string, init: TokenFetchInit) => Promise<TokenFetchResponse>;
/** The t2s 6.x name of {@link TokenFetch}. */
export type FetchLike = TokenFetch;
/** The t2s 6.x name of {@link TokenFetchInit}. */
export type FetchInit = TokenFetchInit;
/** The t2s 6.x name of {@link TokenFetchResponse}. */
export type FetchResponseLike = TokenFetchResponse;
/** Destination of the provider's log lines; `console` satisfies it. */
export interface KeycloakTokenLogger {
    /**
     * Log a warning (one per failed refresh).
     *
     * @param message - The warning text; never contains a credential.
     */
    warn(message: string): void;
    /**
     * Log an informational line (a refresh that recovered).
     *
     * @param message - The text; never contains a credential.
     */
    info(message: string): void;
    /**
     * Optionally log a debug line (a swallowed background failure that was already warned about).
     *
     * @param message - The text; never contains a credential.
     */
    debug?(message: string): void;
}
/** Arms and cancels the background refresh timer (tests inject a fake one). */
export interface RefreshScheduler {
    /**
     * Run `task` once after `delayInMs`.
     *
     * @param task - The background refresh step; it never rejects.
     * @param delayInMs - Milliseconds to wait.
     * @returns A handle for {@link RefreshScheduler.cancel}.
     */
    schedule(task: () => Promise<void>, delayInMs: number): unknown;
    /**
     * Cancel a scheduled task.
     *
     * @param handle - What {@link RefreshScheduler.schedule} returned.
     */
    cancel(handle: unknown): void;
}
/** Options for the D18 headless-SDK token provider. */
export interface OfflineTokenLoginOptions {
    /** Base Keycloak URL, e.g. "https://auth.example.com/auth" (trailing slash tolerated). */
    keycloakUrl: string;
    /** Realm name, e.g. "ondewo-ccai-platform". */
    realm: string;
    /** Public SDK client id, e.g. "ondewo-t2s-cai-sdk-public". NO client_secret (Q1). */
    clientId: string;
    /** 2FA-exempt technical-user email. */
    username: string;
    /** Technical-user password; may be empty when `refreshToken` is set. SECRET. */
    password: string;
    /** Optional cap (seconds) on how long the auto-refresh runs after the initial token acquisition. */
    tokenExpirationInS?: number;
    /** Optional fetch override (tests inject a mock); defaults to the global fetch. */
    fetchImpl?: TokenFetch;
    /**
     * When `false`, DISABLE TLS certificate verification on the Keycloak token
     * request (opt-in insecure, for a self-signed local Envoy). Defaults to `true`
     * (verify — secure, unchanged behaviour). Ignored when a custom `fetchImpl` is
     * injected. Node-only: implemented via an undici dispatcher scoped to the token request.
     */
    keycloakVerifySsl?: boolean;
    /** Optional MONOTONIC clock override returning milliseconds (tests); defaults to `performance.now`. */
    nowInMs?: () => number;
    /**
     * Optional [0,1) random source for the failure-backoff jitter; defaults to `Math.random`.
     * Tests inject a constant to make the retry delay exact. Consulted only on the failure path.
     */
    randomFraction?: () => number;
    /** Where warnings and recoveries are logged; defaults to `console`. */
    logger?: KeycloakTokenLogger;
    /** Background timer (tests inject a fake one); defaults to an `unref`-ed `setTimeout`. */
    scheduler?: RefreshScheduler;
    /** Test seam: `false` acquires the token without arming the background refresh. Defaults to `true`. */
    startBackgroundRefresh?: boolean;
    /** Test seam: override individual {@link DEFAULT_KEYCLOAK_TOKEN_TIMINGS}. */
    timings?: Partial<KeycloakTokenTimings>;
    /** Deprecated alias (t2s 6.x) of `timings.expiryLeewayS`: refresh this many seconds before expiry. */
    refreshSkewInS?: number;
    /** Deprecated alias (t2s 6.x) of `nowInMs`. */
    nowMs?: () => number;
    /**
     * A handed-off Keycloak OFFLINE refresh token to use instead of the password. When non-empty the
     * provider starts with one `grant_type=refresh_token` exchange and NEVER sends a password grant,
     * not even as a fallback. SECRET.
     */
    refreshToken?: string;
}
/** Error raised on an invalid configuration, and the base class of {@link KeycloakAuthenticationError}. */
export declare class OfflineTokenError extends Error {
    /** The HTTP status of a token request Keycloak refused, or `0` for every other failure. */
    readonly status: number;
    /**
     * Create an {@link OfflineTokenError} with a fixed `name` of `"OfflineTokenError"`.
     *
     * @param message - Human-readable description of the token failure.
     * @param status - The HTTP status of a refused token request; `0` when there is none.
     */
    constructor(message: string, status?: number);
}
export { OfflineTokenError as TokenError };
/**
 * Raised for every failure of a login, a refresh, or the lazy read of an expired token. The original
 * error, if any, is its `cause`. The message never contains a credential.
 */
export declare class KeycloakAuthenticationError extends OfflineTokenError {
    /** The underlying error (network failure, JSON parse error, ...), or `undefined`. */
    readonly cause: unknown;
    /**
     * @param message - Description of the failure; never contains a credential.
     * @param cause - The underlying error, if any.
     * @param status - The HTTP status of a refused token request; `0` when there is none.
     */
    constructor(message: string, cause?: unknown, status?: number);
}
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
export declare function computeRefreshBackoffS(consecutiveFailures: number, randomFraction: () => number, timings?: Readonly<KeycloakTokenTimings>): number;
/**
 * A live access-token holder backed by a bounded, failure-tolerant auto-refresh. Obtain one from
 * {@link login} or {@link getKeycloakTokenProvider}; read {@link getAuthorizationMetadataAsync} for the gRPC
 * metadata of every call and call {@link stop} when done.
 */
export declare class OfflineTokenProvider {
    /** Pre-computed OIDC token endpoint URL for the configured realm. */
    private readonly tokenEndpoint;
    /** Public SDK client id sent on every token request (no `client_secret`). */
    private readonly clientId;
    /** Optional cap (seconds) after which the auto-refresh stops; `undefined` means unbounded. */
    private readonly tokenExpirationInS;
    /** The {@link TokenFetch} used for all token-endpoint calls (injectable for tests). */
    private readonly fetchImpl;
    /** Monotonic clock returning milliseconds. */
    private readonly nowInMs;
    /** [0,1) random source used for the failure-backoff jitter (test-injectable). */
    private readonly randomFraction;
    /** Destination of the WARNING / INFO lines. */
    private readonly logger;
    /** Arms the background refresh timer. */
    private readonly scheduler;
    /** Whether {@link bootstrap} arms the background refresh. */
    private readonly startBackgroundRefresh;
    /** The effective timings. */
    private readonly timings;
    /** Weak self-reference handed to the timer callback. */
    private readonly selfRef;
    /** The current access token, or `null` only until {@link bootstrap} completes; never cleared afterwards. */
    private accessToken;
    /** The current offline refresh token, or `null` before bootstrap (or the handed-off one). */
    private refreshToken;
    /** Monotonic time (seconds) at which the current access token expires. */
    private accessTokenExpiresAtS;
    /** Handle of the armed refresh timer, or `null` when no refresh is scheduled. */
    private timer;
    /** Whether the background refresh has ended (stop() or the bounded deadline). */
    private stopped;
    /** Whether {@link stop} was called by the user; a closed provider is never handed out again. */
    private closed;
    /** Monotonic deadline (seconds) of the bounded refresh, or `null` when unbounded. */
    private deadlineS;
    /** Optional callback invoked with the error of a failed background refresh. */
    private onRefreshErrorHandler;
    /** Consecutive failed refreshes (both paths); drives the backoff, reset on every success. */
    private consecutiveRefreshFailures;
    /** Monotonic time (seconds) before which no refresh request is sent. */
    private nextRefreshAttemptAtS;
    /** The error of the most recent failed refresh. */
    private lastRefreshFailure;
    /** The refresh currently on the wire (single flight), or `null`. It never rejects. */
    private inFlightRefresh;
    /**
     * Construct an inert provider from login options. No network call is made here; call
     * {@link bootstrap} (or use the {@link login} factory) to acquire the first token.
     *
     * @param options - The {@link OfflineTokenLoginOptions}.
     */
    constructor(options: OfflineTokenLoginOptions);
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
    bootstrap(username: string, password: string): Promise<void>;
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
    getAuthorizationMetadataAsync(): Promise<[string, string]>;
    /**
     * Register a callback invoked with the error of a failed background refresh (optional diagnostics).
     * A later call replaces any previously registered handler.
     *
     * @param handler - Callback receiving the {@link KeycloakAuthenticationError} of the failed refresh.
     */
    onRefreshError(handler: (error: unknown) => void): void;
    /**
     * Return the current access token without refreshing it; prefer {@link getAuthorizationMetadataAsync}.
     *
     * @returns The current access token.
     * @throws {@link OfflineTokenError} If no access token is available yet, i.e. login has not completed.
     */
    getAccessToken(): string;
    /**
     * Build the value for an `Authorization` gRPC metadata header WITHOUT refreshing it; prefer
     * {@link getAuthorizationMetadataAsync}, which refreshes on demand.
     *
     * @returns The header value `Bearer <access_token>`.
     * @throws {@link OfflineTokenError} If no access token is available yet, i.e. login has not completed.
     */
    getAuthorizationHeader(): string;
    /**
     * Perform the initial token acquisition and return a started provider (the t2s 6.x entry point that
     * {@link login} delegates to).
     *
     * @param options - The {@link OfflineTokenLoginOptions}.
     * @returns A promise resolving to a bootstrapped provider.
     * @throws {@link OfflineTokenError} If the options are invalid (before any network call).
     * @throws {@link KeycloakAuthenticationError} If the initial token acquisition fails.
     */
    static create(options: OfflineTokenLoginOptions): Promise<OfflineTokenProvider>;
    /**
     * The `authorization` metadata as a plain object, WITHOUT refreshing it (t2s 6.x); prefer
     * {@link getAuthorizationMetadataAsync} or the `tokenProvider` option of `createGrpcClient`, which
     * refresh on demand.
     *
     * @returns `{ authorization: 'Bearer <access_token>' }` (lowercase key, as gRPC requires).
     * @throws {@link OfflineTokenError} If no access token is available yet.
     */
    getAuthorizationMetadata(): Record<string, string>;
    /**
     * Refresh the access token now, whatever its expiry (t2s 6.x).
     *
     * @returns The refreshed access token.
     * @throws {@link KeycloakAuthenticationError} If the refresh fails.
     */
    refresh(): Promise<string>;
    /**
     * Stop the background refresh, interrupting a pending wait (also a backoff wait) so no further
     * request is sent. Idempotent and safe from any state, also from inside an `onRefreshError` handler.
     * The lazy {@link getAuthorizationMetadataAsync} keeps refreshing on demand afterwards.
     */
    stop(): void;
    /** Alias of {@link stop}. */
    close(): void;
    /**
     * Whether {@link stop} / {@link close} was called.
     *
     * @returns `true` once the provider was closed by its user.
     */
    isClosed(): boolean;
    /**
     * Redacted description: no token value, an empty token stays visible as `''`.
     *
     * @returns For example `OfflineTokenProvider(tokenEndpoint=..., clientId=..., accessToken=***REDACTED***, refreshToken=***REDACTED***)`.
     */
    toString(): string;
    /**
     * Loggable form with the tokens redacted.
     *
     * @returns A plain object safe to log or `JSON.stringify`.
     */
    toJSON(): Record<string, string>;
    /**
     * `util.inspect()` / `console.log()` rendering: the same as {@link toString}.
     *
     * @returns The redacted description.
     */
    [inspect.custom](): string;
    /** End the background refresh (user stop or the bounded deadline) and release the armed timer. */
    private halt;
    /**
     * The current monotonic time in seconds.
     *
     * @returns Seconds.
     */
    private nowS;
    /**
     * Arm the background timer for the next refresh: the leeway before expiry, or after a failure the
     * backoff (never the floor alone), floored at the minimum delay and clamped to the bounded deadline.
     * Stops the loop once the deadline has passed.
     */
    private armNextRefresh;
    /**
     * One background step: refresh if due, report a failure, re-arm. A failure never ends the loop.
     *
     * @returns A promise that settles when the step is done; it never rejects.
     */
    private onBackgroundTimer;
    /**
     * The refresh decision shared by the lazy and the background path (single flight).
     *
     * @returns A promise that resolves when the token may be served.
     * @throws {@link KeycloakAuthenticationError} If the token has expired and could not be refreshed.
     */
    private refreshIfWithinWindow;
    /**
     * Count a failed refresh, schedule the next attempt (backoff measured from NOW) and warn once.
     * Deliberately not a fallback to a password grant.
     *
     * @param error - The failure; only its type and message are logged.
     */
    private recordRefreshFailure;
    /** Reset the failure backoff after a successful refresh and log the recovery, if any. */
    private recordRefreshSuccess;
    /**
     * Exchange the offline refresh token for a fresh access token.
     *
     * @returns A promise that resolves once the new token is stored.
     * @throws {@link KeycloakAuthenticationError} On any failure.
     */
    private exchangeRefreshToken;
    /**
     * POST a form to the token endpoint and return the parsed JSON object. Every failure becomes a
     * {@link KeycloakAuthenticationError} carrying the original error as its cause.
     *
     * @param params - Form fields (grant type, client id, credentials).
     * @param action - `login` or `refresh`, for the messages.
     * @returns The parsed token response.
     * @throws {@link KeycloakAuthenticationError} On a transport error, a non-2xx status or an unusable body.
     */
    private postTokenRequest;
    /**
     * Validate a token response, then store the access token, a rotated refresh token and the expiry.
     * A malformed response changes no state.
     *
     * @param payload - The parsed token response.
     * @throws {@link KeycloakAuthenticationError} If it carries no usable `access_token` or a non-numeric
     *   `expires_in`. The message names the response's FIELDS, never a value.
     */
    private storeTokens;
    /**
     * Refresh the access token NOW, whatever its expiry: the explicit "refresh" of the earlier API. It
     * joins a refresh already in flight instead of sending a second one, counts towards the shared
     * failure backoff like any other refresh, and never sends a password grant.
     *
     * @returns A promise that resolves once the refreshed token is stored.
     * @throws {@link OfflineTokenError} If no token was acquired yet.
     * @throws {@link KeycloakAuthenticationError} If the refresh fails.
     */
    private runForcedRefresh;
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
export declare function login(options: OfflineTokenLoginOptions): Promise<OfflineTokenProvider>;
/**
 * The registry key of a credential set: the SHA-256 hex digest of the fields that define the identity,
 * so the key holds no secret and is never an object identity. `refreshToken` takes part: two token-only
 * configs carry an EMPTY password and would otherwise share one provider across tenants.
 *
 * @param options - The Keycloak options.
 * @returns A 64-character hex digest.
 */
export declare function keycloakProviderRegistryKey(options: Partial<OfflineTokenLoginOptions>): string;
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
export declare function getKeycloakTokenProvider(options: Partial<OfflineTokenLoginOptions>): Promise<OfflineTokenProvider | null>;
