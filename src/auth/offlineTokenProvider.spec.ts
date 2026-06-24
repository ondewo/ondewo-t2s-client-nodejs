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

/**
 * Runs `action` with `globalThis.fetch` temporarily replaced by `fakeFetch` (or
 * deleted when `fakeFetch` is undefined), so the `globalFetch()` fallback path of
 * `create` can be exercised without a real network. Restores the original
 * `globalThis.fetch` afterwards.
 *
 * @param fakeFetch The fetch stub to install, or undefined to remove `fetch`.
 * @param action Async callback run while the stub is installed.
 * @returns Whatever `action` resolves to.
 */
async function withGlobalFetch<T>(fakeFetch: FetchLike | undefined, action: () => Promise<T>): Promise<T> {
	const had: boolean = 'fetch' in globalThis;
	const original: unknown = (globalThis as { fetch?: unknown }).fetch;
	if (fakeFetch === undefined) {
		delete (globalThis as { fetch?: unknown }).fetch;
	} else {
		(globalThis as { fetch?: unknown }).fetch = fakeFetch;
	}
	try {
		return await action();
	} finally {
		if (had) {
			(globalThis as { fetch?: unknown }).fetch = original;
		} else {
			delete (globalThis as { fetch?: unknown }).fetch;
		}
	}
}

/**
 * Runs `action` with `console.warn` temporarily replaced by a recorder and
 * returns the captured argument lists. Restores the original afterwards.
 *
 * @param action Async callback run while `console.warn` is captured.
 * @returns The argument arrays passed to each `console.warn` call.
 */
async function captureConsoleWarn(action: () => Promise<void>): Promise<unknown[][]> {
	const original: typeof console.warn = console.warn;
	const calls: unknown[][] = [];
	console.warn = (...args: unknown[]): void => {
		calls.push(args);
	};
	try {
		await action();
	} finally {
		console.warn = original;
	}
	return calls;
}

/**
 * Yields to the event loop across a real macrotask boundary, flushing every
 * microtask chained off the fire-and-forget `runScheduledRefresh` promise (fetch
 * -> text -> applyToken -> scheduleRefresh). More robust than counting
 * `await Promise.resolve()` turns.
 *
 * @returns A promise that resolves on the next macrotask tick.
 */
function flushAsync(): Promise<void> {
	return new Promise<void>((resolve: () => void): void => {
		setTimeout(resolve, 0);
	});
}

/**
 * Like {@link captureSchedule} but does NOT stop the provider, so the captured
 * scheduled callback can be invoked to drive `runScheduledRefresh`. The caller is
 * responsible for stopping the provider.
 *
 * @param action Async factory that creates and returns an OfflineTokenProvider.
 * @returns The provider and the captured schedule (undefined if none scheduled).
 */
async function captureScheduleKeepAlive(
	action: () => Promise<OfflineTokenProvider>
): Promise<{ provider: OfflineTokenProvider; scheduled: { delayMs: number; run: () => void } | undefined }> {
	const realSetTimeout: typeof setTimeout = global.setTimeout;
	let captured: { delayMs: number; run: () => void } | undefined;
	const stub: unknown = (handler: () => void, delayMs: number): { unref: () => void } => {
		captured = { delayMs, run: handler };
		return { unref: (): void => undefined };
	};
	global.setTimeout = stub as typeof setTimeout;
	try {
		const provider: OfflineTokenProvider = await action();
		return { provider, scheduled: captured };
	} finally {
		global.setTimeout = realSetTimeout;
	}
}

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

	it('rejects a JSON body that is not an object (number)', async () => {
		// JSON.parse('5') -> 5, hitting the `typeof payload !== 'object'` branch.
		const fake: { fetchImpl: FetchLike; requests: CapturedRequest[] } = makeFakeFetch([{ ok: true, status: 200, body: '5' }]);
		await assert.rejects(
			() => login({ ...BASE_OPTIONS, fetchImpl: fake.fetchImpl }),
			(reason: unknown): boolean => {
				assert.ok(reason instanceof OfflineTokenError);
				assert.match(reason.message, /not a JSON object/);
				return true;
			}
		);
	});

	it('rejects a JSON null body', async () => {
		// JSON.parse('null') -> null, hitting the `payload === null` half of the guard.
		const fake: { fetchImpl: FetchLike; requests: CapturedRequest[] } = makeFakeFetch([
			{ ok: true, status: 200, body: 'null' }
		]);
		await assert.rejects(
			() => login({ ...BASE_OPTIONS, fetchImpl: fake.fetchImpl }),
			(reason: unknown): boolean => {
				assert.ok(reason instanceof OfflineTokenError);
				assert.match(reason.message, /not a JSON object/);
				return true;
			}
		);
	});

	it('rejects a response missing the access_token', async () => {
		const fake: { fetchImpl: FetchLike; requests: CapturedRequest[] } = makeFakeFetch([
			jsonResponse({ refresh_token: 'offline-1', expires_in: 300 })
		]);
		await assert.rejects(
			() => login({ ...BASE_OPTIONS, fetchImpl: fake.fetchImpl }),
			(reason: unknown): boolean => {
				assert.ok(reason instanceof OfflineTokenError);
				assert.match(reason.message, /access_token/);
				return true;
			}
		);
	});

	it('defaults expires_in to 0 when it is not a finite number', async () => {
		// A non-number expires_in exercises the false side of the finite-number guard;
		// the resulting 0 lifetime clamps the first refresh delay to MIN_REFRESH_DELAY.
		const fake: { fetchImpl: FetchLike; requests: CapturedRequest[] } = makeFakeFetch([
			{ ok: true, status: 200, body: JSON.stringify({ access_token: 'access-1', refresh_token: 'offline-1', expires_in: 'soon' }) }
		]);
		const clock: { value: number } = { value: 0 };
		const scheduled: { delayMs: number; run: () => void } | undefined = await captureSchedule(async () => {
			return login({ ...BASE_OPTIONS, fetchImpl: fake.fetchImpl, nowMs: () => clock.value });
		});

		assert.ok(scheduled !== undefined, 'a refresh must still be scheduled');
		assert.equal(scheduled.delayMs, 1000, 'a 0 lifetime clamps to MIN_REFRESH_DELAY_IN_MS');
	});
});

describe('offlineTokenProvider global fetch fallback', () => {
	it('uses globalThis.fetch when no fetchImpl is injected', async () => {
		const fake: { fetchImpl: FetchLike; requests: CapturedRequest[] } = makeFakeFetch([
			jsonResponse({ access_token: 'access-1', refresh_token: 'offline-1', expires_in: 300 })
		]);
		const provider: OfflineTokenProvider = await withGlobalFetch(fake.fetchImpl, () =>
			login({ ...BASE_OPTIONS })
		);
		provider.stop();

		assert.equal(provider.getAccessToken(), 'access-1');
		assert.equal(fake.requests.length, 1);
	});

	it('throws OfflineTokenError(status=0) when no fetch is available', async () => {
		await withGlobalFetch(undefined, async () => {
			await assert.rejects(
				() => login({ ...BASE_OPTIONS }),
				(reason: unknown): boolean => {
					assert.ok(reason instanceof OfflineTokenError);
					assert.equal(reason.status, 0);
					assert.match(reason.message, /No fetch implementation/);
					return true;
				}
			);
		});
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

	it('does not reschedule when refresh() is called after stop()', async () => {
		const fake: { fetchImpl: FetchLike; requests: CapturedRequest[] } = makeFakeFetch([
			jsonResponse({ access_token: 'access-1', refresh_token: 'offline-1', expires_in: 300 }),
			jsonResponse({ access_token: 'access-2', refresh_token: 'offline-2', expires_in: 300 })
		]);
		const captured: { provider: OfflineTokenProvider; scheduled: { delayMs: number; run: () => void } | undefined } =
			await captureScheduleKeepAlive(async () => {
				return login({ ...BASE_OPTIONS, fetchImpl: fake.fetchImpl });
			});
		const provider: OfflineTokenProvider = captured.provider;
		provider.stop();

		// An explicit refresh after stop() still mints a token but, because the
		// provider is stopped, scheduleRefresh must take its `if (this.stopped)` path
		// and arm no new timer (verified by capturing setTimeout during the refresh).
		const afterStop: { provider: OfflineTokenProvider; scheduled: { delayMs: number; run: () => void } | undefined } =
			await captureScheduleKeepAlive(async () => {
				await provider.refresh();
				return provider;
			});

		assert.equal(provider.getAccessToken(), 'access-2');
		assert.equal(afterStop.scheduled, undefined, 'a stopped provider must not arm a new refresh timer');
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

describe('offlineTokenProvider scheduled refresh execution', () => {
	it('refreshes the access token when the scheduled callback fires', async () => {
		const fake: { fetchImpl: FetchLike; requests: CapturedRequest[] } = makeFakeFetch([
			jsonResponse({ access_token: 'access-1', refresh_token: 'offline-1', expires_in: 300 }),
			jsonResponse({ access_token: 'access-2', refresh_token: 'offline-2', expires_in: 300 })
		]);
		const clock: { value: number } = { value: 0 };
		const captured: { provider: OfflineTokenProvider; scheduled: { delayMs: number; run: () => void } | undefined } =
			await captureScheduleKeepAlive(async () => {
				return login({ ...BASE_OPTIONS, fetchImpl: fake.fetchImpl, nowMs: () => clock.value });
			});

		assert.ok(captured.scheduled !== undefined, 'a refresh must have been scheduled');
		captured.scheduled.run();
		await flushAsync();

		assert.equal(captured.provider.getAccessToken(), 'access-2');
		assert.equal(fake.requests.length, 2);
		assert.equal(fake.requests[1].form.grant_type, 'refresh_token');
		captured.provider.stop();
	});

	it('is a no-op when the provider was stopped before the callback fires', async () => {
		const fake: { fetchImpl: FetchLike; requests: CapturedRequest[] } = makeFakeFetch([
			jsonResponse({ access_token: 'access-1', refresh_token: 'offline-1', expires_in: 300 })
		]);
		const clock: { value: number } = { value: 0 };
		// captureSchedule stops the provider before returning, so firing the captured
		// callback hits the `if (this.stopped) return;` guard in runScheduledRefresh.
		const scheduled: { delayMs: number; run: () => void } | undefined = await captureSchedule(async () => {
			return login({ ...BASE_OPTIONS, fetchImpl: fake.fetchImpl, nowMs: () => clock.value });
		});

		assert.ok(scheduled !== undefined, 'a refresh must have been scheduled');
		scheduled.run();
		await flushAsync();

		assert.equal(fake.requests.length, 1, 'a stopped provider must not exchange the refresh token');
	});

	it('swallows a background-refresh failure and logs a warning (Error reason)', async () => {
		const fake: { fetchImpl: FetchLike; requests: CapturedRequest[] } = makeFakeFetch([
			jsonResponse({ access_token: 'access-1', refresh_token: 'offline-1', expires_in: 300 }),
			{ ok: false, status: 500, body: 'kaboom' }
		]);
		const clock: { value: number } = { value: 0 };
		const captured: { provider: OfflineTokenProvider; scheduled: { delayMs: number; run: () => void } | undefined } =
			await captureScheduleKeepAlive(async () => {
				return login({ ...BASE_OPTIONS, fetchImpl: fake.fetchImpl, nowMs: () => clock.value });
			});

		assert.ok(captured.scheduled !== undefined, 'a refresh must have been scheduled');
		const warnings: unknown[][] = await captureConsoleWarn(async () => {
			captured.scheduled!.run();
			await flushAsync();
		});

		// The failed refresh must not change the access token, and must be logged.
		assert.equal(captured.provider.getAccessToken(), 'access-1');
		assert.equal(warnings.length, 1);
		assert.match(String(warnings[0][0]), /background refresh failed/);
		captured.provider.stop();
	});

	it('swallows a background-refresh failure with a non-Error reason', async () => {
		// The fake fetch rejects with a plain string, exercising the String(reason)
		// branch of stringifyReason (reason is not an Error instance).
		const requests: CapturedRequest[] = [];
		let call: number = 0;
		const fetchImpl: FetchLike = (url: string, init: FetchInit): Promise<FetchResponseLike> => {
			requests.push({ url, init, form: parseForm(init.body) });
			call += 1;
			if (call === 1) {
				return Promise.resolve(
					makeFakeResponse(jsonResponse({ access_token: 'access-1', refresh_token: 'offline-1', expires_in: 300 }))
				);
			}
			// Rejecting with a plain string (not an Error) is the whole point of this
			// test: it drives the `String(reason)` branch of stringifyReason.
			// eslint-disable-next-line @typescript-eslint/prefer-promise-reject-errors
			return Promise.reject('connection reset');
		};
		const clock: { value: number } = { value: 0 };
		const captured: { provider: OfflineTokenProvider; scheduled: { delayMs: number; run: () => void } | undefined } =
			await captureScheduleKeepAlive(async () => {
				return login({ ...BASE_OPTIONS, fetchImpl, nowMs: () => clock.value });
			});

		assert.ok(captured.scheduled !== undefined, 'a refresh must have been scheduled');
		const warnings: unknown[][] = await captureConsoleWarn(async () => {
			captured.scheduled!.run();
			await flushAsync();
		});

		assert.equal(captured.provider.getAccessToken(), 'access-1');
		assert.equal(warnings.length, 1);
		assert.equal(String(warnings[0][1]), 'connection reset');
		captured.provider.stop();
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
