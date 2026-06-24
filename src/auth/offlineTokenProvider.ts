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
 * Shape of the Keycloak token-endpoint success payload (subset).
 */
interface KeycloakTokenResponse {
	access_token: string;
	refresh_token: string;
	expires_in: number;
}

/**
 * Raised when the Keycloak token endpoint rejects a credential or refresh-token
 * exchange, or returns a malformed payload.
 */
export class OfflineTokenError extends Error {
	public readonly status: number;

	public constructor(message: string, status: number) {
		super(message);
		this.name = 'OfflineTokenError';
		this.status = status;
	}
}

const DEFAULT_REFRESH_SKEW_IN_S: number = 30;
const MIN_REFRESH_DELAY_IN_MS: number = 1000;

/**
 * A live offline-token session. Holds the current access token, auto-refreshes it
 * in the background, and exposes it for the `Authorization: Bearer` gRPC metadata.
 *
 * Always call {@link OfflineTokenProvider.stop} when done to clear the refresh
 * timer (otherwise the process may not exit).
 */
export class OfflineTokenProvider {
	private readonly keycloakUrl: string;
	private readonly realm: string;
	private readonly clientId: string;
	private readonly fetchImpl: FetchLike;
	private readonly nowMs: () => number;
	private readonly refreshSkewInMs: number;
	private readonly deadlineMs: number | undefined;

	private accessToken: string;
	private refreshToken: string;
	private refreshTimer: ReturnType<typeof setTimeout> | undefined;
	private stopped: boolean;

	private constructor(options: Required<Omit<OfflineTokenLoginOptions, 'tokenExpirationInS'>>, initial: KeycloakTokenResponse, deadlineMs: number | undefined) {
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
	public static async create(options: OfflineTokenLoginOptions): Promise<OfflineTokenProvider> {
		const resolvedFetch: FetchLike | undefined = options.fetchImpl ?? globalFetch();
		if (resolvedFetch === undefined) {
			throw new OfflineTokenError('No fetch implementation available; pass options.fetchImpl or run on Node >= 18.', 0);
		}
		const now: () => number = options.nowMs ?? Date.now;
		const skewInS: number = options.refreshSkewInS ?? DEFAULT_REFRESH_SKEW_IN_S;

		const tokenUrl: string = buildTokenUrl(options.keycloakUrl, options.realm);
		const body: string = encodeForm({
			grant_type: 'password',
			client_id: options.clientId,
			username: options.username,
			password: options.password,
			scope: 'openid offline_access'
		});
		const token: KeycloakTokenResponse = await postToken(resolvedFetch, tokenUrl, body);

		let deadlineMs: number | undefined;
		if (options.tokenExpirationInS !== undefined) {
			deadlineMs = now() + (options.tokenExpirationInS * 1000);
		}

		return new OfflineTokenProvider(
			{
				keycloakUrl: options.keycloakUrl,
				realm: options.realm,
				clientId: options.clientId,
				username: options.username,
				password: options.password,
				fetchImpl: resolvedFetch,
				nowMs: now,
				refreshSkewInS: skewInS
			},
			token,
			deadlineMs
		);
	}

	/**
	 * Returns the current access token (a JWT) for the `Authorization: Bearer`
	 * header / gRPC metadata.
	 *
	 * @returns The current access token.
	 */
	public getAccessToken(): string {
		return this.accessToken;
	}

	/**
	 * Returns gRPC metadata key/value pairs carrying the current access token, i.e.
	 * `{ authorization: 'Bearer <jwt>' }`.
	 *
	 * @returns The authorization metadata object.
	 */
	public getAuthorizationMetadata(): Record<string, string> {
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
	public async refresh(): Promise<string> {
		const token: KeycloakTokenResponse = await this.exchangeRefreshToken();
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
	public stop(): void {
		this.stopped = true;
		if (this.refreshTimer !== undefined) {
			clearTimeout(this.refreshTimer);
			this.refreshTimer = undefined;
		}
	}

	private scheduleRefresh(expiresInS: number): void {
		if (this.stopped) {
			return;
		}
		const lifetimeInMs: number = expiresInS * 1000;
		const refreshAtMs: number = this.nowMs() + Math.max(lifetimeInMs - this.refreshSkewInMs, MIN_REFRESH_DELAY_IN_MS);
		if (this.deadlineMs !== undefined && refreshAtMs >= this.deadlineMs) {
			// Next refresh would fall past the bound: let the access token lapse.
			return;
		}
		const delayMs: number = Math.max(refreshAtMs - this.nowMs(), MIN_REFRESH_DELAY_IN_MS);
		const timer: ReturnType<typeof setTimeout> = setTimeout(() => {
			void this.runScheduledRefresh();
		}, delayMs);
		this.refreshTimer = timer;
		// Do not keep the event loop alive solely for the refresh timer.
		if (typeof timer.unref === 'function') {
			timer.unref();
		}
	}

	private async runScheduledRefresh(): Promise<void> {
		if (this.stopped) {
			return;
		}
		try {
			const token: KeycloakTokenResponse = await this.exchangeRefreshToken();
			this.applyToken(token);
			this.scheduleRefresh(token.expires_in);
		} catch (reason: unknown) {
			// Swallow background-refresh failures: the access token stays valid until
			// its own exp, and callers can still trigger an explicit refresh().
			if (typeof console !== 'undefined' && typeof console.warn === 'function') {
				console.warn('OfflineTokenProvider background refresh failed:', stringifyReason(reason));
			}
		}
	}

	private async exchangeRefreshToken(): Promise<KeycloakTokenResponse> {
		const tokenUrl: string = buildTokenUrl(this.keycloakUrl, this.realm);
		const body: string = encodeForm({
			grant_type: 'refresh_token',
			client_id: this.clientId,
			refresh_token: this.refreshToken
		});
		return postToken(this.fetchImpl, tokenUrl, body);
	}

	private applyToken(token: KeycloakTokenResponse): void {
		this.accessToken = token.access_token;
		// Keycloak refresh-token rotation: adopt the rotated refresh token so the
		// next exchange uses the latest one.
		if (token.refresh_token.length > 0) {
			this.refreshToken = token.refresh_token;
		}
	}
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
export async function login(options: OfflineTokenLoginOptions): Promise<OfflineTokenProvider> {
	return OfflineTokenProvider.create(options);
}

function buildTokenUrl(keycloakUrl: string, realm: string): string {
	return `${stripTrailingSlash(keycloakUrl)}/realms/${encodeURIComponent(realm)}/protocol/openid-connect/token`;
}

async function postToken(fetchImpl: FetchLike, tokenUrl: string, body: string): Promise<KeycloakTokenResponse> {
	const response: FetchResponseLike = await fetchImpl(tokenUrl, {
		method: 'POST',
		headers: { 'Content-Type': 'application/x-www-form-urlencoded', Accept: 'application/json' },
		body
	});
	const rawBody: string = await response.text();
	if (!response.ok) {
		throw new OfflineTokenError(`Keycloak token endpoint returned HTTP ${response.status}: ${rawBody}`, response.status);
	}
	const parsed: KeycloakTokenResponse = parseTokenResponse(rawBody, response.status);
	return parsed;
}

function parseTokenResponse(rawBody: string, status: number): KeycloakTokenResponse {
	let payload: unknown;
	try {
		payload = JSON.parse(rawBody);
	} catch (_reason: unknown) {
		throw new OfflineTokenError(`Keycloak token endpoint returned non-JSON body: ${rawBody}`, status);
	}
	if (typeof payload !== 'object' || payload === null) {
		throw new OfflineTokenError('Keycloak token response was not a JSON object.', status);
	}
	const record: Record<string, unknown> = payload as Record<string, unknown>;
	const accessToken: unknown = record.access_token;
	const refreshToken: unknown = record.refresh_token;
	const expiresIn: unknown = record.expires_in;
	if (typeof accessToken !== 'string' || accessToken.length === 0) {
		throw new OfflineTokenError('Keycloak token response missing "access_token".', status);
	}
	if (typeof refreshToken !== 'string' || refreshToken.length === 0) {
		throw new OfflineTokenError('Keycloak token response missing "refresh_token" (offline token); ensure scope=offline_access.', status);
	}
	let expiresInS: number = 0;
	if (typeof expiresIn === 'number' && Number.isFinite(expiresIn)) {
		expiresInS = expiresIn;
	}
	return { access_token: accessToken, refresh_token: refreshToken, expires_in: expiresInS };
}

function encodeForm(fields: Record<string, string>): string {
	const parts: string[] = [];
	for (const key of Object.keys(fields)) {
		parts.push(`${encodeURIComponent(key)}=${encodeURIComponent(fields[key])}`);
	}
	return parts.join('&');
}

function stripTrailingSlash(value: string): string {
	if (value.endsWith('/')) {
		return value.slice(0, -1);
	}
	return value;
}

function stringifyReason(reason: unknown): string {
	if (reason instanceof Error) {
		return reason.message;
	}
	return String(reason);
}

function globalFetch(): FetchLike | undefined {
	const candidate: unknown = (globalThis as { fetch?: unknown }).fetch;
	if (typeof candidate === 'function') {
		return candidate as FetchLike;
	}
	return undefined;
}
