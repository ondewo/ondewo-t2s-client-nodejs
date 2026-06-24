// Unit tests for the D18 offline-token auth helper. Fully offline: the Keycloak
// token endpoint is replaced by an injected fake fetch, and time is driven by a
// fake clock. Run with: node --import tsx --test src/auth/offlineTokenProvider.spec.ts
// (or the repo's `make test` target).

import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import {
	FetchInit,
	FetchLike,
	FetchResponseLike,
	login,
	OfflineTokenError,
	OfflineTokenProvider
} from './offlineTokenProvider';

interface CapturedRequest {
	url: string;
	init: FetchInit;
	form: Record<string, string>;
}

interface StubResponse {
	ok: boolean;
	status: number;
	body: string;
}

function jsonResponse(payload: Record<string, unknown>, status: number = 200): StubResponse {
	return { ok: status >= 200 && status < 300, status, body: JSON.stringify(payload) };
}

function makeFakeResponse(stub: StubResponse): FetchResponseLike {
	return {
		ok: stub.ok,
		status: stub.status,
		text: (): Promise<string> => Promise.resolve(stub.body)
	};
}

function parseForm(body: string): Record<string, string> {
	const result: Record<string, string> = {};
	for (const pair of body.split('&')) {
		if (pair.length === 0) {
			continue;
		}
		const eq: number = pair.indexOf('=');
		let rawKey: string = pair;
		let rawVal: string = '';
		if (eq >= 0) {
			rawKey = pair.slice(0, eq);
			rawVal = pair.slice(eq + 1);
		}
		result[decodeURIComponent(rawKey)] = decodeURIComponent(rawVal);
	}
	return result;
}

/**
 * Builds a fake fetch that returns the queued stub responses in order and records
 * every request it received.
 */
function makeFakeFetch(responses: StubResponse[]): { fetchImpl: FetchLike; requests: CapturedRequest[] } {
	const requests: CapturedRequest[] = [];
	let index: number = 0;
	const fetchImpl: FetchLike = (url: string, init: FetchInit): Promise<FetchResponseLike> => {
		requests.push({ url, init, form: parseForm(init.body) });
		const stub: StubResponse | undefined = responses[index];
		index += 1;
		if (stub === undefined) {
			return Promise.reject(new Error('fake fetch ran out of queued responses'));
		}
		return Promise.resolve(makeFakeResponse(stub));
	};
	return { fetchImpl, requests };
}

const BASE_OPTIONS: { keycloakUrl: string; realm: string; clientId: string; username: string; password: string } = {
	keycloakUrl: 'https://kc.example.com/auth',
	realm: 'ondewo-ccai-platform',
	clientId: 'ondewo-nlu-cai-sdk-public',
	username: 'tech-user@example.com',
	password: 's3cr3t'
};

describe('offlineTokenProvider.login (ROPC + offline_access)', () => {
	it('posts grant_type=password with offline_access scope and no client_secret', async () => {
		const fake: { fetchImpl: FetchLike; requests: CapturedRequest[] } = makeFakeFetch([
			jsonResponse({ access_token: 'access-1', refresh_token: 'offline-1', expires_in: 300 })
		]);
		const provider: OfflineTokenProvider = await login({ ...BASE_OPTIONS, fetchImpl: fake.fetchImpl });
		provider.stop();

		assert.equal(fake.requests.length, 1);
		const request: CapturedRequest = fake.requests[0];
		assert.equal(
			request.url,
			'https://kc.example.com/auth/realms/ondewo-ccai-platform/protocol/openid-connect/token'
		);
		assert.equal(request.init.method, 'POST');
		assert.equal(request.init.headers['Content-Type'], 'application/x-www-form-urlencoded');
		assert.equal(request.form.grant_type, 'password');
		assert.equal(request.form.client_id, 'ondewo-nlu-cai-sdk-public');
		assert.equal(request.form.username, 'tech-user@example.com');
		assert.equal(request.form.password, 's3cr3t');
		assert.equal(request.form.scope, 'openid offline_access');
		assert.equal(request.form.client_secret, undefined, 'public client must not send a client_secret');
	});

	it('exposes the access token as Authorization: Bearer metadata', async () => {
		const fake: { fetchImpl: FetchLike; requests: CapturedRequest[] } = makeFakeFetch([
			jsonResponse({ access_token: 'access-1', refresh_token: 'offline-1', expires_in: 300 })
		]);
		const provider: OfflineTokenProvider = await login({ ...BASE_OPTIONS, fetchImpl: fake.fetchImpl });
		provider.stop();

		assert.equal(provider.getAccessToken(), 'access-1');
		assert.deepEqual(provider.getAuthorizationMetadata(), { authorization: 'Bearer access-1' });
	});

	it('normalizes a trailing slash in keycloakUrl', async () => {
		const fake: { fetchImpl: FetchLike; requests: CapturedRequest[] } = makeFakeFetch([
			jsonResponse({ access_token: 'access-1', refresh_token: 'offline-1', expires_in: 300 })
		]);
		const provider: OfflineTokenProvider = await login({
			...BASE_OPTIONS,
			keycloakUrl: 'https://kc.example.com/auth/',
			fetchImpl: fake.fetchImpl
		});
		provider.stop();

		assert.equal(
			fake.requests[0].url,
			'https://kc.example.com/auth/realms/ondewo-ccai-platform/protocol/openid-connect/token'
		);
	});

	it('throws OfflineTokenError with the status on invalid credentials', async () => {
		const fake: { fetchImpl: FetchLike; requests: CapturedRequest[] } = makeFakeFetch([
			{ ok: false, status: 401, body: '{"error":"invalid_grant"}' }
		]);
		await assert.rejects(
			() => login({ ...BASE_OPTIONS, fetchImpl: fake.fetchImpl }),
			(reason: unknown): boolean => {
				assert.ok(reason instanceof OfflineTokenError);
				assert.equal(reason.status, 401);
				return true;
			}
		);
	});

	it('rejects a response missing the offline refresh_token', async () => {
		const fake: { fetchImpl: FetchLike; requests: CapturedRequest[] } = makeFakeFetch([
			jsonResponse({ access_token: 'access-1', expires_in: 300 })
		]);
		await assert.rejects(
			() => login({ ...BASE_OPTIONS, fetchImpl: fake.fetchImpl }),
			(reason: unknown): boolean => {
				assert.ok(reason instanceof OfflineTokenError);
				assert.match(reason.message, /offline_access/);
				return true;
			}
		);
	});

	it('rejects a non-JSON token body', async () => {
		const fake: { fetchImpl: FetchLike; requests: CapturedRequest[] } = makeFakeFetch([
			{ ok: true, status: 200, body: 'not-json' }
		]);
		await assert.rejects(
			() => login({ ...BASE_OPTIONS, fetchImpl: fake.fetchImpl }),
			(reason: unknown): boolean => reason instanceof OfflineTokenError
		);
	});
});

describe('offlineTokenProvider.refresh (grant_type=refresh_token)', () => {
	it('exchanges the offline refresh token for a new access token', async () => {
		const fake: { fetchImpl: FetchLike; requests: CapturedRequest[] } = makeFakeFetch([
			jsonResponse({ access_token: 'access-1', refresh_token: 'offline-1', expires_in: 300 }),
			jsonResponse({ access_token: 'access-2', refresh_token: 'offline-2', expires_in: 300 })
		]);
		const provider: OfflineTokenProvider = await login({ ...BASE_OPTIONS, fetchImpl: fake.fetchImpl });
		const refreshed: string = await provider.refresh();
		provider.stop();

		assert.equal(refreshed, 'access-2');
		assert.equal(provider.getAccessToken(), 'access-2');
		assert.equal(fake.requests.length, 2);
		const refreshRequest: CapturedRequest = fake.requests[1];
		assert.equal(refreshRequest.form.grant_type, 'refresh_token');
		assert.equal(refreshRequest.form.refresh_token, 'offline-1');
		assert.equal(refreshRequest.form.client_id, 'ondewo-nlu-cai-sdk-public');
		assert.equal(refreshRequest.form.client_secret, undefined);
	});

	it('adopts the rotated refresh token for the next exchange', async () => {
		const fake: { fetchImpl: FetchLike; requests: CapturedRequest[] } = makeFakeFetch([
			jsonResponse({ access_token: 'access-1', refresh_token: 'offline-1', expires_in: 300 }),
			jsonResponse({ access_token: 'access-2', refresh_token: 'offline-2', expires_in: 300 }),
			jsonResponse({ access_token: 'access-3', refresh_token: 'offline-3', expires_in: 300 })
		]);
		const provider: OfflineTokenProvider = await login({ ...BASE_OPTIONS, fetchImpl: fake.fetchImpl });
		await provider.refresh();
		await provider.refresh();
		provider.stop();

		assert.equal(provider.getAccessToken(), 'access-3');
		assert.equal(fake.requests[2].form.refresh_token, 'offline-2');
	});
});

describe('offlineTokenProvider auto-refresh scheduling', () => {
	it('schedules a refresh before the access token expires', async () => {
		const fake: { fetchImpl: FetchLike; requests: CapturedRequest[] } = makeFakeFetch([
			jsonResponse({ access_token: 'access-1', refresh_token: 'offline-1', expires_in: 300 }),
			jsonResponse({ access_token: 'access-2', refresh_token: 'offline-2', expires_in: 300 })
		]);
		const clock: { value: number } = { value: 0 };
		const scheduled: { delayMs: number; run: () => void } | undefined = await captureSchedule(async () => {
			const provider: OfflineTokenProvider = await login({
				...BASE_OPTIONS,
				fetchImpl: fake.fetchImpl,
				nowMs: () => clock.value,
				refreshSkewInS: 30
			});
			return provider;
		});

		assert.ok(scheduled !== undefined, 'a refresh must have been scheduled');
		// expires_in 300s, skew 30s -> refresh at ~270s.
		assert.equal(scheduled.delayMs, 270 * 1000);
	});

	it('does NOT schedule past the tokenExpirationInS bound', async () => {
		const fake: { fetchImpl: FetchLike; requests: CapturedRequest[] } = makeFakeFetch([
			jsonResponse({ access_token: 'access-1', refresh_token: 'offline-1', expires_in: 300 })
		]);
		const clock: { value: number } = { value: 0 };
		const scheduled: { delayMs: number; run: () => void } | undefined = await captureSchedule(async () => {
			// Bound of 100s < the ~270s first refresh, so no refresh should be scheduled.
			const provider: OfflineTokenProvider = await login({
				...BASE_OPTIONS,
				fetchImpl: fake.fetchImpl,
				nowMs: () => clock.value,
				refreshSkewInS: 30,
				tokenExpirationInS: 100
			});
			return provider;
		});

		assert.equal(scheduled, undefined, 'no refresh should be scheduled past the bound');
		assert.equal(fake.requests.length, 1, 'only the initial login call should have happened');
	});
});

/**
 * Runs `action` with `setTimeout` temporarily stubbed so the first scheduled
 * callback is captured (and not actually fired). Restores the global afterwards
 * and stops the returned provider.
 *
 * @param action Async factory that creates and returns an OfflineTokenProvider.
 * @returns The captured schedule, or undefined if nothing was scheduled.
 */
async function captureSchedule(
	action: () => Promise<OfflineTokenProvider>
): Promise<{ delayMs: number; run: () => void } | undefined> {
	const realSetTimeout: typeof setTimeout = global.setTimeout;
	let captured: { delayMs: number; run: () => void } | undefined;
	const stub: unknown = (handler: () => void, delayMs: number): { unref: () => void } => {
		captured = { delayMs, run: handler };
		return { unref: (): void => undefined };
	};
	global.setTimeout = stub as typeof setTimeout;
	try {
		const provider: OfflineTokenProvider = await action();
		provider.stop();
	} finally {
		global.setTimeout = realSetTimeout;
	}
	return captured;
}
