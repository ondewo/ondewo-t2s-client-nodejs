/**
 * Options for {@link login}.
 */
export interface OfflineTokenLoginOptions {
    /** Base Keycloak URL, e.g. `https://keycloak.example.com/auth`. */
    keycloakUrl: string;
    /** Realm name, e.g. `ondewo-ccai-platform`. */
    realm: string;
    /** Public SDK client id (no secret), e.g. `ondewo-nlu-cai-sdk-public`. */
    clientId: string;
    /** Technical-user username / email. */
    username: string;
    /** Technical-user password. */
    password: string;
    /**
     * Optional bound (seconds) on how long the auto-refresh loop runs. Once this
     * many seconds have elapsed since login the loop stops and the access token is
     * allowed to lapse; omit to run until the offline session itself expires.
     */
    tokenExpirationInS?: number;
    /**
     * Optional fetch implementation, primarily for testing. Defaults to the global
     * `fetch` (Node >= 18). Injecting a stub keeps unit tests fully offline.
     */
    fetchImpl?: FetchLike;
    /**
     * Optional clock, for testing. Returns the current time in milliseconds since
     * the epoch. Defaults to `Date.now`.
     */
    nowMs?: () => number;
    /**
     * Refresh the access token this many seconds *before* it expires, to keep a
     * comfortable margin on the hot path. Defaults to 30 seconds.
     */
    refreshSkewInS?: number;
}
/**
 * Minimal structural type for the subset of the fetch API this helper uses, so a
 * stub can be injected in tests without pulling in DOM lib typings.
 */
export interface FetchLike {
    (url: string, init: FetchInit): Promise<FetchResponseLike>;
}
/**
 * Minimal structural type for the request init this helper passes to fetch.
 */
export interface FetchInit {
    method: string;
    headers: Record<string, string>;
    body: string;
}
/**
 * Minimal structural type for the fetch response this helper consumes.
 */
export interface FetchResponseLike {
    ok: boolean;
    status: number;
    text(): Promise<string>;
}
/**
 * Raised when the Keycloak token endpoint rejects a credential or refresh-token
 * exchange, or returns a malformed payload.
 */
export declare class OfflineTokenError extends Error {
    /**
     * The HTTP status code returned by the Keycloak token endpoint, or `0` when the
     * failure happened before any HTTP exchange (e.g. no fetch implementation).
     */
    readonly status: number;
    /**
     * Creates a new {@link OfflineTokenError}.
     *
     * @param message Human-readable description of the failure.
     * @param status HTTP status from the token endpoint, or `0` if the failure
     *   occurred before an HTTP exchange.
     */
    constructor(message: string, status: number);
}
/**
 * A live offline-token session. Holds the current access token, auto-refreshes it
 * in the background, and exposes it for the `Authorization: Bearer` gRPC metadata.
 *
 * Always call {@link OfflineTokenProvider.stop} when done to clear the refresh
 * timer (otherwise the process may not exit).
 */
export declare class OfflineTokenProvider {
    /** Base Keycloak URL with any trailing slash stripped. */
    private readonly keycloakUrl;
    /** Realm name the token endpoint is scoped to. */
    private readonly realm;
    /** Public SDK client id (no secret) used for every token exchange. */
    private readonly clientId;
    /** Fetch implementation used for token-endpoint requests. */
    private readonly fetchImpl;
    /** Clock returning the current time in milliseconds since the epoch. */
    private readonly nowMs;
    /** How many milliseconds before expiry the access token is refreshed. */
    private readonly refreshSkewInMs;
    /**
     * Absolute time (ms since epoch) past which no further refresh is scheduled, or
     * `undefined` to refresh until the offline session itself expires.
     */
    private readonly deadlineMs;
    /** The current access token (JWT) exposed for `Authorization: Bearer`. */
    private accessToken;
    /** The current offline refresh token used for the next token exchange. */
    private refreshToken;
    /** Handle of the pending auto-refresh timer, or `undefined` when none is armed. */
    private refreshTimer;
    /** Whether {@link OfflineTokenProvider.stop} has been called. */
    private stopped;
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
    private constructor();
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
    static create(options: OfflineTokenLoginOptions): Promise<OfflineTokenProvider>;
    /**
     * Returns the current access token (a JWT) for the `Authorization: Bearer`
     * header / gRPC metadata.
     *
     * @returns The current access token.
     */
    getAccessToken(): string;
    /**
     * Returns gRPC metadata key/value pairs carrying the current access token, i.e.
     * `{ authorization: 'Bearer <jwt>' }`.
     *
     * @returns The authorization metadata object.
     */
    getAuthorizationMetadata(): Record<string, string>;
    /**
     * Forces an immediate access-token refresh from the offline refresh token and
     * reschedules the next automatic refresh. Useful to recover from an
     * `UNAUTHENTICATED` upstream response.
     *
     * @returns The freshly minted access token.
     * @throws {OfflineTokenError} If the refresh-token exchange fails.
     */
    refresh(): Promise<string>;
    /**
     * Stops the background refresh loop and clears the timer. Idempotent. After
     * this the access token is no longer renewed and will eventually lapse.
     *
     * @returns Nothing.
     */
    stop(): void;
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
    private scheduleRefresh;
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
    private runScheduledRefresh;
    /**
     * Posts `grant_type=refresh_token` (with the current refresh token and the
     * public client id, no secret) to the Keycloak token endpoint.
     *
     * @returns The parsed token payload from the refresh exchange.
     * @throws {OfflineTokenError} If the endpoint rejects the exchange or returns a
     *   malformed payload.
     */
    private exchangeRefreshToken;
    /**
     * Stores the new access token and, honoring Keycloak refresh-token rotation,
     * adopts the rotated refresh token (when the payload carries a non-empty one) so
     * the next exchange uses the latest refresh token.
     *
     * @param token The token payload from a login or refresh exchange.
     * @returns Nothing.
     */
    private applyToken;
}
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
export declare function login(options: OfflineTokenLoginOptions): Promise<OfflineTokenProvider>;
