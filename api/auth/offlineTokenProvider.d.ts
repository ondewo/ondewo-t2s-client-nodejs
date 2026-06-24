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
    readonly status: number;
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
    private readonly keycloakUrl;
    private readonly realm;
    private readonly clientId;
    private readonly fetchImpl;
    private readonly nowMs;
    private readonly refreshSkewInMs;
    private readonly deadlineMs;
    private accessToken;
    private refreshToken;
    private refreshTimer;
    private stopped;
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
    private scheduleRefresh;
    private runScheduledRefresh;
    private exchangeRefreshToken;
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
