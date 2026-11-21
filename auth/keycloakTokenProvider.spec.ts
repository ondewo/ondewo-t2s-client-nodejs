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

/**
 * The cross-SDK Keycloak test catalogue (T01-T62), mirrored from the python SDK's
 * `test_keycloak_refresh_resilience.py` / `test_client_config_refresh_token.py`. A fake transport
 * scripts the token endpoint, a fake MONOTONIC clock starts at 1000 s, a fixed jitter fraction makes
 * every backoff exact, and a fake scheduler runs the background loop one wait at a time. No network.
 *
 * T55 (positional surfaces) does not apply: every surface here takes an options object.
 */

import assert from 'node:assert/strict';
import { describe, it, mock } from 'node:test';
import { createHash } from 'node:crypto';
import { inspect } from 'util';

import {
	computeRefreshBackoffS,
	DEFAULT_KEYCLOAK_TOKEN_TIMINGS,
	getKeycloakTokenProvider,
	KeycloakAuthenticationError,
	keycloakProviderRegistryKey,
	type KeycloakTokenLogger,
	login,
	OfflineTokenProvider,
	type OfflineTokenLoginOptions,
	type RefreshScheduler,
	TokenError,
	type TokenFetch,
	type TokenFetchInit,
	type TokenFetchResponse
} from './offlineTokenProvider';

/** One scripted answer of the fake token endpoint. */
interface Step {
	/** HTTP status; defaults to 200. */
	status?: number;
	/** Body: a string is sent verbatim, anything else is JSON-encoded. */
	body?: unknown;
	/** Thrown by the transport instead of answering. */
	error?: unknown;
	/** Seconds the fake clock advances while the request is "on the wire". */
	advanceS?: number;
	/** Real milliseconds the answer is delayed. */
	delayMs?: number;
}

/** One request the fake endpoint received. */
interface Recorded {
	/** The URL. */
	url: string;
	/** The init. */
	init: TokenFetchInit;
	/** The parsed form. */
	form: URLSearchParams;
}

/** Fake monotonic clock (seconds). */
class FakeClock {
	public nowS: number = 1000;

	public readonly nowInMs: () => number = (): number => this.nowS * 1000;

	/**
	 * @param seconds - How far to advance.
	 */
	public advance(seconds: number): void {
		this.nowS += seconds;
	}
}

/** Scripted token endpoint that records every form; the last step repeats once the script is used up. */
class FakeTransport {
	public readonly calls: Recorded[] = [];

	/**
	 * @param steps - The scripted answers, in order.
	 * @param clock - Advanced by a step's `advanceS`.
	 */
	public constructor(
		private readonly steps: Step[],
		private readonly clock: FakeClock
	) {}

	public readonly fetchImpl: TokenFetch = async (url: string, init: TokenFetchInit): Promise<TokenFetchResponse> => {
		this.calls.push({ url, init, form: new URLSearchParams(init.body) });
		const step: Step = this.steps.length > 1 ? (this.steps.shift() as Step) : this.steps[0];
		if (step.delayMs !== undefined) {
			await new Promise<void>((resolve: () => void): void => {
				setTimeout(resolve, step.delayMs);
			});
		}
		this.clock.advance(step.advanceS ?? 0);
		if (step.error !== undefined) {
			// Scripted failures include non-Error values on purpose (a buggy transport may throw anything).
			// eslint-disable-next-line @typescript-eslint/only-throw-error
			throw step.error;
		}
		const status: number = step.status ?? 200;
		const text: string = typeof step.body === 'string' ? step.body : JSON.stringify(step.body);
		return { ok: status >= 200 && status < 300, status, text: (): Promise<string> => Promise.resolve(text) };
	};

	/**
	 * @returns The `grant_type` of every request, in order.
	 */
	public grants(): (string | null)[] {
		return this.calls.map((call: Recorded): string | null => call.form.get('grant_type'));
	}
}

/** A scheduled background step. */
interface Pending {
	/** The step. */
	task: () => Promise<void>;
	/** Its delay. */
	delayMs: number;
	/** Its handle. */
	handle: object;
}

/** Fake scheduler: each {@link FakeScheduler.wait} is one timed-out wait of the background loop. */
class FakeScheduler implements RefreshScheduler {
	public pending: Pending | null = null;
	public readonly waitsS: number[] = [];
	public cancelled: number = 0;

	/**
	 * @param clock - Advanced by each wait.
	 */
	public constructor(private readonly clock: FakeClock) {}

	/**
	 * @param task - The step.
	 * @param delayMs - Its delay.
	 * @returns The handle.
	 */
	public schedule(task: () => Promise<void>, delayMs: number): unknown {
		const handle: object = {};
		this.pending = { task, delayMs, handle };
		return handle;
	}

	/**
	 * @param handle - The handle to cancel.
	 */
	public cancel(handle: unknown): void {
		if (this.pending !== null && this.pending.handle === handle) {
			this.pending = null;
		}
		this.cancelled += 1;
	}

	/**
	 * Let the pending wait time out: advance the clock by its delay and run the step.
	 *
	 * @returns `false` when nothing was armed (the loop has stopped).
	 */
	public async wait(): Promise<boolean> {
		const pending: Pending | null = this.pending;
		if (pending === null) {
			return false;
		}
		this.pending = null;
		this.waitsS.push(pending.delayMs / 1000);
		this.clock.advance(pending.delayMs / 1000);
		await pending.task();
		return true;
	}
}

/** Logger that records each level. */
class RecordingLogger implements KeycloakTokenLogger {
	public readonly warnings: string[] = [];
	public readonly infos: string[] = [];
	public readonly debugs: string[] = [];

	/**
	 * @param message - The text.
	 */
	public warn(message: string): void {
		this.warnings.push(message);
	}

	/**
	 * @param message - The text.
	 */
	public info(message: string): void {
		this.infos.push(message);
	}

	/**
	 * @param message - The text.
	 */
	public debug(message: string): void {
		this.debugs.push(message);
	}

	/**
	 * @returns Every line.
	 */
	public all(): string[] {
		return [...this.warnings, ...this.infos, ...this.debugs];
	}
}

/** Private state a test inspects. */
interface ProviderInternals {
	accessTokenExpiresAtS: number;
	consecutiveRefreshFailures: number;
	deadlineS: number | null;
	stopped: boolean;
	timer: unknown;
	armNextRefresh(): void;
}

/**
 * @param provider - The provider.
 * @returns Its private state.
 */
function internals(provider: OfflineTokenProvider): ProviderInternals {
	return provider as unknown as ProviderInternals;
}

/**
 * @param access - Access token.
 * @param expiresIn - `expires_in`.
 * @param refresh - Refresh token, or `undefined` for none.
 * @returns A 200 token response step.
 */
function token(access: string, expiresIn: unknown = 300, refresh: string | undefined = 'off-1'): Step {
	const body: Record<string, unknown> = { access_token: access, expires_in: expiresIn };
	if (refresh !== undefined) {
		body.refresh_token = refresh;
	}
	return { body };
}

const REFUSED: Step = {
	status: 400,
	body: { error: 'invalid_grant', error_description: 'Offline user session not found' }
};
const UNAVAILABLE: Step = { status: 503, body: { error: 'temporarily_unavailable' } };

const BASE: OfflineTokenLoginOptions = {
	keycloakUrl: 'https://kc.example.com/auth',
	realm: 'ondewo-ccai-platform',
	clientId: 'ondewo-t2s-cai-sdk-public',
	username: 'tech@example.com',
	password: 'pw-1'
};

/** A provider wired to the fakes. */
interface Harness {
	provider: OfflineTokenProvider;
	transport: FakeTransport;
	clock: FakeClock;
	scheduler: FakeScheduler;
	logger: RecordingLogger;
}

/**
 * Build a provider on the fakes.
 *
 * @param steps - The token-endpoint script (the first answers the start-up).
 * @param overrides - Option overrides.
 * @param jitter - The fixed jitter fraction.
 * @returns The harness.
 */
async function build(
	steps: Step[],
	overrides: Partial<OfflineTokenLoginOptions> = {},
	jitter: number = 1
): Promise<Harness> {
	const clock: FakeClock = new FakeClock();
	const transport: FakeTransport = new FakeTransport(steps, clock);
	const scheduler: FakeScheduler = new FakeScheduler(clock);
	const logger: RecordingLogger = new RecordingLogger();
	const provider: OfflineTokenProvider = await login({
		...BASE,
		fetchImpl: transport.fetchImpl,
		nowInMs: clock.nowInMs,
		randomFraction: (): number => jitter,
		logger,
		scheduler,
		...overrides
	});
	return { provider, transport, clock, scheduler, logger };
}

/**
 * @param action - What should reject.
 * @returns The rejection.
 */
async function rejection(action: () => Promise<unknown>): Promise<KeycloakAuthenticationError> {
	try {
		await action();
	} catch (error: unknown) {
		assert.ok(error instanceof KeycloakAuthenticationError, `not a KeycloakAuthenticationError: ${String(error)}`);
		return error;
	}
	throw new Error('expected a rejection');
}

describe('Keycloak token provider catalogue', () => {
	describe('A. backoff ladder', () => {
		it('T01 the ceiling doubles up to the maximum', () => {
			const ladder: number[] = [];
			for (let failures: number = 1; failures <= 10; failures += 1) {
				ladder.push(computeRefreshBackoffS(failures, (): number => 1));
			}
			assert.deepEqual(ladder, [5, 10, 20, 40, 80, 160, 300, 300, 300, 300]);
		});

		it('T02 fraction 0 always waits the base', () => {
			for (let failures: number = 1; failures <= 19; failures += 1) {
				assert.equal(
					computeRefreshBackoffS(failures, (): number => 0),
					5
				);
			}
		});

		it('T03 a fraction inside the window', () => {
			assert.equal(
				computeRefreshBackoffS(2, (): number => 0.5),
				7.5
			);
			assert.equal(
				computeRefreshBackoffS(3, (): number => 0.25),
				8.75
			);
		});

		it('T04 a faulty jitter source is clamped', () => {
			for (const fraction of [-1, -0.001, 1.5, 1e9]) {
				const delay: number = computeRefreshBackoffS(4, (): number => fraction);
				assert.ok(delay >= 5 && delay <= 40, `delay ${delay} for fraction ${fraction}`);
			}
		});

		it('T05 a non-positive failure count behaves as one', () => {
			assert.equal(
				computeRefreshBackoffS(0, (): number => 1),
				5
			);
			assert.equal(
				computeRefreshBackoffS(-3, (): number => 1),
				5
			);
		});

		it('T06 a huge failure count never overflows', () => {
			assert.equal(
				computeRefreshBackoffS(10 ** 9, (): number => 1),
				300
			);
			assert.equal(
				computeRefreshBackoffS(Number.MAX_SAFE_INTEGER, (): number => 1),
				300
			);
		});

		it('T07 the production constants and their relations', () => {
			assert.deepEqual(
				{ ...DEFAULT_KEYCLOAK_TOKEN_TIMINGS },
				{
					expiryLeewayS: 30,
					minRefreshDelayS: 1,
					retryBaseDelayS: 5,
					retryMaxDelayS: 300,
					maxRetryExponent: 6,
					httpTimeoutS: 10,
					maxErrorBodyChars: 500
				}
			);
			const timings: typeof DEFAULT_KEYCLOAK_TOKEN_TIMINGS = DEFAULT_KEYCLOAK_TOKEN_TIMINGS;
			assert.ok(timings.retryBaseDelayS > timings.minRefreshDelayS);
			assert.ok(timings.retryBaseDelayS * 2 ** timings.maxRetryExponent >= timings.retryMaxDelayS);
			assert.ok(timings.httpTimeoutS < timings.expiryLeewayS);
			assert.ok(Object.isFrozen(DEFAULT_KEYCLOAK_TOKEN_TIMINGS));
		});
	});

	describe('B. the background loop survives every failure', () => {
		it('T08 refused, then success', async () => {
			const h: Harness = await build([token('acc-1'), REFUSED, token('acc-3')]);
			assert.ok(await h.scheduler.wait());
			assert.ok(await h.scheduler.wait());
			assert.deepEqual(h.transport.grants(), ['password', 'refresh_token', 'refresh_token']);
			assert.equal(h.provider.getAccessToken(), 'acc-3');
			assert.equal(internals(h.provider).consecutiveRefreshFailures, 0);
			h.provider.stop();
		});

		const failures: [string, Step][] = [
			['a network error', { error: Object.assign(new TypeError('fetch failed'), { cause: new Error('socket') }) }],
			['a refused connection', { error: Object.assign(new Error('connect ECONNREFUSED'), { code: 'ECONNREFUSED' }) }],
			['a timeout', { error: new DOMException('The operation was aborted due to timeout', 'TimeoutError') }],
			['an abort', { error: new DOMException('This operation was aborted', 'AbortError') }],
			['a non-auth error thrown by the transport (bug)', { error: new RangeError('bug in the transport') }],
			['a non-Error thrown by the transport', { error: 'a bare string' }],
			['HTTP 503 with a JSON body', UNAVAILABLE],
			['HTTP 502 with an empty body', { status: 502, body: '' }],
			['200 with a non-JSON body', { body: '<html>bad gateway</html>' }],
			['200 with a JSON array', { body: [1, 2] }],
			['200 without an access_token', { body: { expires_in: 300 } }],
			['200 with a non-numeric expires_in', { body: { access_token: 'x', expires_in: 'soon' } }]
		];
		for (const [name, failure] of failures) {
			it(`T09 the loop survives ${name}`, async () => {
				const h: Harness = await build([token('acc-1'), failure, token('acc-ok')]);
				assert.ok(await h.scheduler.wait());
				assert.ok(await h.scheduler.wait());
				assert.equal(h.transport.calls.length, 3);
				assert.equal(h.provider.getAccessToken(), 'acc-ok');
				assert.notEqual(h.scheduler.pending, null, 'the loop must still be armed');
				h.provider.stop();
			});
		}

		it('T10 a persistent failure keeps the loop retrying', async () => {
			const h: Harness = await build([token('acc-1'), UNAVAILABLE]);
			for (let wait: number = 0; wait < 6; wait += 1) {
				assert.ok(await h.scheduler.wait());
			}
			assert.deepEqual(h.transport.grants(), ['password', ...Array<string>(6).fill('refresh_token')]);
			assert.equal(h.provider.getAccessToken(), 'acc-1');
			assert.equal(internals(h.provider).consecutiveRefreshFailures, 6);
			h.provider.stop();
		});

		it('T11 never a password fallback', async () => {
			const h: Harness = await build([token('acc-1'), { status: 401, body: { error: 'invalid_client' } }]);
			for (let wait: number = 0; wait < 10; wait += 1) {
				await h.scheduler.wait();
			}
			assert.equal(h.transport.grants().filter((grant: string | null): boolean => grant === 'password').length, 1);
			h.provider.stop();
		});
	});

	describe('C. the background loop backs off', () => {
		it('T12 the first wait is the leeway, the wait after a failure the base', async () => {
			const h: Harness = await build([token('acc-1'), UNAVAILABLE]);
			await h.scheduler.wait();
			await h.scheduler.wait();
			assert.deepEqual(h.scheduler.waitsS, [270, 5]);
			h.provider.stop();
		});

		it('T13 the waits follow the ladder', async () => {
			const h: Harness = await build([token('acc-1'), UNAVAILABLE]);
			for (let wait: number = 0; wait < 10; wait += 1) {
				await h.scheduler.wait();
			}
			assert.deepEqual(h.scheduler.waitsS.slice(1), [5, 10, 20, 40, 80, 160, 300, 300, 300]);
			h.provider.stop();
		});

		it('T14 a success resets the backoff and logs the recovery once', async () => {
			const h: Harness = await build([token('acc-1'), UNAVAILABLE, UNAVAILABLE, token('acc-4', 120), UNAVAILABLE]);
			for (let wait: number = 0; wait < 5; wait += 1) {
				await h.scheduler.wait();
			}
			assert.deepEqual(h.scheduler.waitsS, [270, 5, 10, 90, 5]);
			assert.deepEqual(
				h.logger.infos.filter((line: string): boolean => line.includes('recovered after 2 failed attempt(s)')).length,
				1
			);
			assert.equal(h.logger.infos.length, 1);
			h.provider.stop();
		});

		it('T15 the backoff is measured from when the failure is recorded', async () => {
			const h: Harness = await build([token('acc-1'), { ...UNAVAILABLE, advanceS: 10 }]);
			await h.scheduler.wait();
			await h.scheduler.wait();
			assert.deepEqual(h.scheduler.waitsS, [270, 5]);
			h.provider.stop();
		});

		it('T16 the deadline ends the loop during a backoff', async () => {
			const h: Harness = await build([token('acc-1', 30), UNAVAILABLE], { tokenExpirationInS: 100 });
			let waits: number = 0;
			while (await h.scheduler.wait()) {
				waits += 1;
				assert.ok(waits < 100, 'the loop never stopped');
			}
			assert.ok(h.clock.nowS <= 1000 + 100 + 1);
			assert.equal(internals(h.provider).stopped, true);
			assert.equal(h.provider.isClosed(), false, 'the deadline stops the loop, it does not close the provider');
			assert.ok(h.scheduler.waitsS.every((wait: number): boolean => wait <= 100));
		});

		it('T17 stop during a backoff wait sends nothing more', async () => {
			const h: Harness = await build([token('acc-1'), UNAVAILABLE]);
			await h.scheduler.wait();
			assert.notEqual(h.scheduler.pending, null);
			h.provider.stop();
			assert.equal(h.scheduler.pending, null);
			assert.equal(await h.scheduler.wait(), false);
			assert.deepEqual(h.transport.grants(), ['password', 'refresh_token']);
		});

		it('T18 a closed provider ends the loop without a request', async () => {
			const h: Harness = await build([token('acc-1', 30), token('acc-2')]);
			const pending: Pending | null = h.scheduler.pending;
			assert.ok(pending !== null);
			h.provider.stop();
			await pending.task();
			assert.equal(h.transport.calls.length, 1);
			assert.equal(h.scheduler.pending, null);
		});
	});

	describe('D. the lazy path shares the backoff', () => {
		it('T19 a token inside the leeway is served when the refresh fails', async () => {
			const h: Harness = await build([token('acc-1'), UNAVAILABLE], { startBackgroundRefresh: false });
			h.clock.advance(271);
			assert.deepEqual(await h.provider.getAuthorizationMetadataAsync(), ['authorization', 'Bearer acc-1']);
			assert.equal(h.logger.warnings.length, 1);
			assert.match(h.logger.warnings[0], /refresh failed \(attempt 1\)/);
			assert.match(h.logger.warnings[0], /stays valid for 29\.0s/);
		});

		it('T20 no request while backing off', async () => {
			const h: Harness = await build([token('acc-1'), UNAVAILABLE], { startBackgroundRefresh: false });
			h.clock.advance(275);
			for (let call: number = 0; call < 100; call += 1) {
				await h.provider.getAuthorizationMetadataAsync();
				h.clock.advance(0.04);
			}
			assert.deepEqual(h.transport.grants(), ['password', 'refresh_token']);
		});

		it('T21 an expired token during the backoff raises', async () => {
			const h: Harness = await build([token('acc-1'), UNAVAILABLE], { startBackgroundRefresh: false });
			h.clock.advance(299);
			await h.provider.getAuthorizationMetadataAsync();
			h.clock.advance(2);
			const error: KeycloakAuthenticationError = await rejection(() => h.provider.getAuthorizationMetadataAsync());
			assert.match(error.message, /backing off after 1 consecutive failure/);
			assert.match(error.message, /next attempt is due in 3\.0s/);
			assert.equal(h.transport.calls.length, 2);
		});

		it('T22 an expired token whose refresh is refused raises the refusal', async () => {
			const h: Harness = await build([token('acc-1'), REFUSED], { startBackgroundRefresh: false });
			h.clock.advance(400);
			const error: KeycloakAuthenticationError = await rejection(() => h.provider.getAuthorizationMetadataAsync());
			assert.match(error.message, /status 400/);
			assert.match(error.message, /Offline user session not found/);
			assert.match(h.logger.warnings[0], /the current access token has expired/);
		});

		it('T23 a non-auth transport error with an expired token is typed and carries the cause', async () => {
			const bug: Error = new Error('generic transport bug');
			const h: Harness = await build([token('acc-1'), { error: bug }], { startBackgroundRefresh: false });
			h.clock.advance(400);
			const error: KeycloakAuthenticationError = await rejection(() => h.provider.getAuthorizationMetadataAsync());
			assert.equal(error.cause, bug);
			assert.ok(error instanceof TokenError);
			assert.match(error.message, /Keycloak token refresh failed \(Error: generic transport bug\)/);
		});

		it('T24 the lazy path recovers', async () => {
			const h: Harness = await build([token('acc-1'), UNAVAILABLE, token('acc-3')], {
				startBackgroundRefresh: false
			});
			h.clock.advance(280);
			await h.provider.getAuthorizationMetadataAsync();
			h.clock.advance(5);
			assert.deepEqual(await h.provider.getAuthorizationMetadataAsync(), ['authorization', 'Bearer acc-3']);
			assert.equal(internals(h.provider).consecutiveRefreshFailures, 0);
			assert.deepEqual(h.logger.infos, ['Keycloak token refresh recovered after 1 failed attempt(s)']);
		});

		it('T25 a lazy failure schedules the background loop', async () => {
			const h: Harness = await build([token('acc-1'), UNAVAILABLE, token('acc-3')], {
				startBackgroundRefresh: false
			});
			h.clock.advance(280);
			await h.provider.getAuthorizationMetadataAsync();
			h.clock.advance(2);
			internals(h.provider).armNextRefresh();
			assert.ok(await h.scheduler.wait());
			assert.ok(Math.abs(h.scheduler.waitsS[0] - 3) < 1e-6, `first wait ${h.scheduler.waitsS[0]}`);
			assert.equal(h.provider.getAccessToken(), 'acc-3');
		});

		it('T26 sixteen concurrent callers share one refresh and none fails', async () => {
			const networkError: Error = Object.assign(new Error('connect ECONNRESET'), { code: 'ECONNRESET' });
			const h: Harness = await build([token('acc-1', 20), { error: networkError, delayMs: 50 }], {
				startBackgroundRefresh: false
			});
			const caller: () => Promise<string[]> = async (): Promise<string[]> => {
				const seen: string[] = [];
				for (let call: number = 0; call < 20; call += 1) {
					seen.push((await h.provider.getAuthorizationMetadataAsync())[1]);
				}
				return seen;
			};
			const results: string[][] = await Promise.all(Array.from({ length: 16 }, caller));
			const values: string[] = results.flat();
			assert.equal(values.length, 320);
			assert.ok(values.every((value: string): boolean => value === 'Bearer acc-1'));
			assert.deepEqual(h.transport.grants(), ['password', 'refresh_token']);
		});

		it('raises before the first token was acquired', async () => {
			const provider: OfflineTokenProvider = new OfflineTokenProvider({ ...BASE });
			await assert.rejects(() => provider.getAuthorizationMetadataAsync(), { name: 'OfflineTokenError' });
		});
	});

	describe('E. response validation', () => {
		const unreachable: [string, unknown][] = [
			['a generic network error', Object.assign(new TypeError('fetch failed'), { cause: new Error('dns') })],
			['a refused connection', Object.assign(new Error('connect ECONNREFUSED'), { code: 'ECONNREFUSED' })],
			['a timeout', new DOMException('timed out', 'TimeoutError')]
		];
		for (const [name, failure] of unreachable) {
			it(`T27 ${name} at construction`, async () => {
				const error: KeycloakAuthenticationError = await rejection(() => build([{ error: failure }]));
				assert.match(error.message, /^Keycloak token login could not reach the token endpoint \(/);
				assert.equal(error.cause, failure);
			});
		}

		it('a non-network transport error at construction is wrapped', async () => {
			const bug: Error = new SyntaxError('broken transport');
			const error: KeycloakAuthenticationError = await rejection(() => build([{ error: bug }]));
			assert.equal(error.message, 'Keycloak token login failed (SyntaxError: broken transport)');
			assert.equal(error.cause, bug);
			const thrownValue: KeycloakAuthenticationError = await rejection(() => build([{ error: 42 }]));
			assert.equal(thrownValue.message, 'Keycloak token login failed (number: 42)');
		});

		it('T28 a 200 that is not JSON', async () => {
			const error: KeycloakAuthenticationError = await rejection(() => build([{ body: 'not json' }]));
			assert.equal(error.message, 'Keycloak token login returned status 200 with a body that is not JSON');
			assert.ok(error.cause instanceof SyntaxError);
		});

		for (const [body, word] of [
			[[1], 'array'],
			['"text"', 'string'],
			['7', 'number'],
			['null', 'null'],
			['true', 'boolean']
		] as [unknown, string][]) {
			it(`T29 a 200 JSON ${word} instead of an object`, async () => {
				const error: KeycloakAuthenticationError = await rejection(() => build([{ body }]));
				assert.equal(error.message, `Keycloak token login returned a JSON ${word} instead of an object`);
			});
		}

		it('T30 a huge error page is truncated', async () => {
			const error: KeycloakAuthenticationError = await rejection(() =>
				build([{ status: 502, body: `<html>${'x'.repeat(10_000)}</html>` }])
			);
			assert.ok(error.message.length < 500 + 200, `length ${error.message.length}`);
			assert.match(error.message, /^Keycloak token login failed with status 502: <html>x/);
		});

		it('T31 a response without an access_token names its fields, never its values', async () => {
			const error: KeycloakAuthenticationError = await rejection(() =>
				build([{ body: { refresh_token: 'secret-offline-token-77', expires_in: 300 } }])
			);
			assert.match(error.message, /refresh_token/);
			assert.ok(!error.message.includes('secret-offline-token-77'));
			assert.match(error.message, /\['expires_in', 'refresh_token'\]/);
		});

		it('T32 a non-numeric expires_in on refresh changes nothing', async () => {
			const h: Harness = await build([token('acc-1'), token('acc-2', 'soon')], { startBackgroundRefresh: false });
			h.clock.advance(280);
			await h.provider.getAuthorizationMetadataAsync();
			assert.equal(h.provider.getAccessToken(), 'acc-1');
			assert.equal(internals(h.provider).accessTokenExpiresAtS, 1300);
			assert.match(h.logger.warnings[0], /non-numeric expires_in \(value withheld\)/);
		});

		it('S3 a password login without a refresh_token is accepted, and the refresh then sends an empty one', async () => {
			const h: Harness = await build([{ body: { access_token: 'acc-1', expires_in: 300 } }, token('acc-2')], {
				startBackgroundRefresh: false
			});
			h.clock.advance(280);
			assert.deepEqual(await h.provider.getAuthorizationMetadataAsync(), ['authorization', 'Bearer acc-2']);
			assert.equal(h.transport.calls.length, 2);
			assert.equal(h.transport.calls[1].form.get('grant_type'), 'refresh_token');
			assert.equal(h.transport.calls[1].form.get('refresh_token'), '');
			assert.ok(!h.transport.calls[1].form.has('password'));
		});

		it('S3 an empty refresh_token in the login response is not adopted', async () => {
			const h: Harness = await build([token('acc-1', 300, ''), token('acc-2', 300, 'off-new'), token('acc-3')], {
				startBackgroundRefresh: false
			});
			h.clock.advance(280);
			await h.provider.getAuthorizationMetadataAsync();
			assert.equal(h.transport.calls[1].form.get('refresh_token'), '');
			h.clock.advance(280);
			await h.provider.getAuthorizationMetadataAsync();
			assert.equal(h.transport.calls[2].form.get('refresh_token'), 'off-new');
		});

		it('the explicit refresh() sends no request after the login lifetime elapsed', async () => {
			const h: Harness = await build([token('acc-1')], { tokenExpirationInS: 60, startBackgroundRefresh: false });
			h.clock.advance(61);
			const error: KeycloakAuthenticationError = await rejection(() => h.provider.refresh());
			assert.match(error.message, /login lifetime \(tokenExpirationInS\) has elapsed/);
			assert.equal(h.transport.calls.length, 1);
		});

		it('the explicit refresh() sends no request while the shared backoff is pending', async () => {
			const h: Harness = await build([token('acc-1'), UNAVAILABLE, token('acc-2')], { startBackgroundRefresh: false });
			h.clock.advance(280);
			assert.deepEqual(await h.provider.getAuthorizationMetadataAsync(), ['authorization', 'Bearer acc-1']);
			const error: KeycloakAuthenticationError = await rejection(() => h.provider.refresh());
			assert.match(error.message, /backing off after 1 consecutive failure\(s\); the next attempt is due in 5\.0s/);
			assert.equal(h.transport.calls.length, 2);
			h.clock.advance(5);
			await h.provider.refresh();
			assert.equal(h.transport.calls.length, 3);
			assert.deepEqual(await h.provider.getAuthorizationMetadataAsync(), ['authorization', 'Bearer acc-2']);
		});

		it('T33 a numeric string expires_in is accepted', async () => {
			const h: Harness = await build([token('acc-1', '300')], { startBackgroundRefresh: false });
			assert.equal(internals(h.provider).accessTokenExpiresAtS, 1300);
		});

		for (const value of ['', '   ', null, true, {}]) {
			it(`a non-numeric expires_in ${JSON.stringify(value)} is refused`, async () => {
				const error: KeycloakAuthenticationError = await rejection(() => build([token('acc-1', value)]));
				assert.equal(error.message, 'Keycloak token response carried a non-numeric expires_in (value withheld)');
			});
		}

		it('T34 a negative expires_in is already expired', async () => {
			const h: Harness = await build([token('acc-1', -50)], { startBackgroundRefresh: false });
			assert.equal(internals(h.provider).accessTokenExpiresAtS, 1000);
		});

		it('a missing expires_in counts as 0', async () => {
			const h: Harness = await build([{ body: { access_token: 'acc-1', refresh_token: 'off-1' } }], {
				startBackgroundRefresh: false
			});
			assert.equal(internals(h.provider).accessTokenExpiresAtS, 1000);
		});

		it('T35 a refresh without a new refresh token keeps the previous one', async () => {
			const h: Harness = await build([token('acc-1', 300, 'off-1'), token('acc-2', 300, undefined), token('acc-3')], {
				startBackgroundRefresh: false
			});
			h.clock.advance(280);
			await h.provider.getAuthorizationMetadataAsync();
			h.clock.advance(280);
			await h.provider.getAuthorizationMetadataAsync();
			assert.deepEqual(
				h.transport.calls.slice(1).map((call: Recorded): string | null => call.form.get('refresh_token')),
				['off-1', 'off-1']
			);
			assert.equal(h.provider.getAccessToken(), 'acc-3');
		});

		it('T36 the grant forms, the URL and the timeout are exact', async () => {
			const h: Harness = await build([token('acc-1'), token('acc-2')], {
				keycloakUrl: 'https://kc.example.com/auth/',
				startBackgroundRefresh: false
			});
			h.clock.advance(280);
			await h.provider.getAuthorizationMetadataAsync();
			const [loginCall, refreshCall] = h.transport.calls;
			assert.equal(
				loginCall.url,
				'https://kc.example.com/auth/realms/ondewo-ccai-platform/protocol/openid-connect/token'
			);
			assert.equal(refreshCall.url, loginCall.url);
			assert.deepEqual([...loginCall.form.keys()].sort(), ['client_id', 'grant_type', 'password', 'scope', 'username']);
			assert.equal(loginCall.form.get('scope'), 'offline_access');
			assert.deepEqual([...refreshCall.form.keys()].sort(), ['client_id', 'grant_type', 'refresh_token']);
			for (const call of h.transport.calls) {
				assert.equal(call.init.method, 'POST');
				assert.equal(call.init.headers['Content-Type'], 'application/x-www-form-urlencoded');
				assert.equal(call.init.timeoutInMs, 10_000);
				assert.ok(call.init.signal instanceof AbortSignal);
			}
		});
	});

	describe('F. no credential in logs or errors', () => {
		it('T37 a fail-then-recover run logs and raises no secret', async () => {
			const secrets: string[] = ['pw-never-logged-5d1c', 'acc-secret-1', 'off-secret-1', 'acc-secret-2'];
			const h: Harness = await build(
				[token('acc-secret-1', 300, 'off-secret-1'), REFUSED, token('acc-secret-2', 300, 'off-secret-1')],
				{ password: 'pw-never-logged-5d1c' }
			);
			await h.scheduler.wait();
			await h.scheduler.wait();
			const log: string = h.logger.all().join('\n');
			assert.match(log, /refresh failed \(attempt 1\)/);
			assert.match(log, /recovered/);
			const errors: string[] = [];
			for (const steps of [
				[REFUSED],
				[{ body: { refresh_token: 'off-secret-1', access_token: '' } }],
				[{ body: { access_token: 'acc-secret-1', expires_in: 'acc-secret-2' } }],
				[{ body: 'acc-secret-1' }],
				[{ error: new Error('down') }]
			] as Step[][]) {
				errors.push((await rejection(() => build(steps, { password: 'pw-never-logged-5d1c' }))).message);
			}
			const rendered: string = [log, ...errors, h.provider.toString(), JSON.stringify(h.provider)].join('\n');
			for (const secret of secrets) {
				assert.ok(!rendered.includes(secret), `${secret} leaked`);
			}
			h.provider.stop();
		});
	});

	describe('G. stop / close', () => {
		it('T38 stop twice without a worker', () => {
			const provider: OfflineTokenProvider = new OfflineTokenProvider({ ...BASE });
			provider.stop();
			provider.close();
			assert.equal(provider.isClosed(), true);
		});

		it('T39 stop from inside the worker (an onRefreshError handler), and again after close', async () => {
			const h: Harness = await build([token('acc-1'), UNAVAILABLE]);
			let seen: unknown = null;
			h.provider.onRefreshError((error: unknown): void => {
				seen = error;
				h.provider.stop();
			});
			await h.scheduler.wait();
			assert.ok(seen instanceof KeycloakAuthenticationError);
			assert.equal(h.scheduler.pending, null, 'a stop from inside the worker must not be re-armed over');
			h.provider.close();
			assert.equal(await h.scheduler.wait(), false);
		});

		it('T40 a scheduler that refuses the cancel does not make stop throw', async () => {
			const h: Harness = await build([token('acc-1'), token('acc-2')], {
				scheduler: {
					schedule: (): unknown => ({}),
					cancel: (): void => {
						throw new Error('cancel refused');
					}
				}
			});
			h.provider.stop();
			h.provider.stop();
			assert.equal(internals(h.provider).timer, null);
		});

		it('after stop the lazy path still refreshes on demand', async () => {
			const h: Harness = await build([token('acc-1'), token('acc-2')]);
			h.provider.stop();
			h.clock.advance(280);
			assert.deepEqual(await h.provider.getAuthorizationMetadataAsync(), ['authorization', 'Bearer acc-2']);
		});

		it('a swallowed background failure is a debug line, never a second warning', async () => {
			const h: Harness = await build([token('acc-1', 0), UNAVAILABLE]);
			await h.scheduler.wait();
			assert.equal(h.logger.warnings.length, 1);
			assert.equal(h.logger.debugs.length, 1);
			assert.match(h.logger.debugs[0], /^Keycloak background refresh will be retried \(KeycloakAuthenticationError: /);
			h.provider.stop();
		});

		it('a logger without debug is fine, and the default logger is console', async (context: { mock: typeof mock }) => {
			const warn: ReturnType<typeof context.mock.method> = context.mock.method(console, 'warn', (): void => {});
			const info: ReturnType<typeof context.mock.method> = context.mock.method(console, 'info', (): void => {});
			const clock: FakeClock = new FakeClock();
			const transport: FakeTransport = new FakeTransport([token('acc-1', 0), UNAVAILABLE, token('acc-2')], clock);
			const scheduler: FakeScheduler = new FakeScheduler(clock);
			const provider: OfflineTokenProvider = await login({
				...BASE,
				fetchImpl: transport.fetchImpl,
				nowInMs: clock.nowInMs,
				scheduler
			});
			await scheduler.wait();
			await scheduler.wait();
			assert.equal(warn.mock.callCount(), 1);
			assert.equal(info.mock.callCount(), 1);
			provider.stop();
		});
	});

	describe('H. the real timer end to end', () => {
		it('T41 the real worker survives four failures and recovers', async () => {
			const transport: FakeTransport = new FakeTransport(
				[
					token('acc-1', 0.1),
					{ error: Object.assign(new TypeError('fetch failed'), { cause: new Error('reset') }) },
					UNAVAILABLE,
					{ error: new Error('generic') },
					token('acc-ok', 3600)
				],
				new FakeClock()
			);
			const logger: RecordingLogger = new RecordingLogger();
			const provider: OfflineTokenProvider = await login({
				...BASE,
				fetchImpl: transport.fetchImpl,
				logger,
				timings: { expiryLeewayS: 0.05, minRefreshDelayS: 0.01, retryBaseDelayS: 0.05, retryMaxDelayS: 0.05 }
			});
			const startedAt: number = Date.now();
			while (provider.getAccessToken() !== 'acc-ok' && Date.now() - startedAt < 10_000) {
				await new Promise<void>((resolve: () => void): void => {
					setTimeout(resolve, 10);
				});
			}
			assert.equal(provider.getAccessToken(), 'acc-ok');
			assert.notEqual(internals(provider).timer, null, 'the worker must still be armed');
			assert.deepEqual(transport.grants(), ['password', ...Array<string>(4).fill('refresh_token')]);
			provider.stop();
			assert.equal(internals(provider).timer, null);
		});
	});

	describe('I. offline-token start-up', () => {
		it('T42 the start-up is one refresh grant with the handed-off token', async () => {
			const h: Harness = await build([token('acc-1')], { password: '', refreshToken: 'off-handed-0' });
			assert.deepEqual(h.transport.grants(), ['refresh_token']);
			assert.equal(h.transport.calls[0].form.get('refresh_token'), 'off-handed-0');
			assert.equal(h.transport.calls[0].form.has('password'), false);
			assert.equal(h.provider.getAccessToken(), 'acc-1');
			h.provider.stop();
		});

		it('T43 a password alongside the token is never sent', async () => {
			const h: Harness = await build([token('acc-1'), UNAVAILABLE, token('acc-3')], {
				refreshToken: 'off-handed-0',
				startBackgroundRefresh: false
			});
			h.clock.advance(280);
			await h.provider.getAuthorizationMetadataAsync();
			h.clock.advance(6);
			await h.provider.getAuthorizationMetadataAsync();
			assert.deepEqual(h.transport.grants(), ['refresh_token', 'refresh_token', 'refresh_token']);
			assert.ok(h.transport.calls.every((call: Recorded): boolean => !call.form.has('password')));
		});

		it('T44 a refused start-up token raises, with no password fallback', async () => {
			const clock: FakeClock = new FakeClock();
			const transport: FakeTransport = new FakeTransport([REFUSED], clock);
			const error: KeycloakAuthenticationError = await rejection(() =>
				login({ ...BASE, fetchImpl: transport.fetchImpl, nowInMs: clock.nowInMs, refreshToken: 'off-handed-0' })
			);
			assert.match(error.message, /^Keycloak token refresh failed with status 400/);
			assert.deepEqual(transport.grants(), ['refresh_token']);
		});

		it('T45 a rotated start-up token is the one the next refresh sends', async () => {
			const h: Harness = await build([token('acc-1', 300, 'off-rotated'), token('acc-2')], {
				refreshToken: 'off-handed-0',
				startBackgroundRefresh: false
			});
			h.clock.advance(280);
			await h.provider.getAuthorizationMetadataAsync();
			assert.equal(h.transport.calls[1].form.get('refresh_token'), 'off-rotated');
		});

		it('T46 the deadline is armed on the token path too', async () => {
			const h: Harness = await build([token('acc-1')], { refreshToken: 'off-handed-0', tokenExpirationInS: 200 });
			assert.equal(internals(h.provider).deadlineS, 1200);
			while (await h.scheduler.wait()) {
				// the loop stops by itself
			}
			assert.ok(h.clock.nowS <= 1201);
			assert.equal(internals(h.provider).stopped, true);
			assert.equal(h.transport.calls.length, 1);
		});

		it('T47 the loop survives a failing offline token', async () => {
			const h: Harness = await build([token('acc-1'), REFUSED, REFUSED, token('acc-4')], {
				refreshToken: 'off-handed-0'
			});
			for (let wait: number = 0; wait < 3; wait += 1) {
				await h.scheduler.wait();
			}
			assert.deepEqual(h.transport.grants(), Array<string>(4).fill('refresh_token'));
			assert.equal(h.provider.getAccessToken(), 'acc-4');
			h.provider.stop();
		});

		it('a non-positive deadline lapses the loop at once', async () => {
			const h: Harness = await build([token('acc-1')], { tokenExpirationInS: 0 });
			assert.equal(h.scheduler.pending, null);
			assert.equal(internals(h.provider).stopped, true);
			assert.deepEqual(await h.provider.getAuthorizationMetadataAsync(), ['authorization', 'Bearer acc-1']);
		});
	});

	describe('J. registry', () => {
		/**
		 * @param overrides - Credential overrides.
		 * @returns Options wired to a fresh transport, and that transport.
		 */
		function registryOptions(overrides: Partial<OfflineTokenLoginOptions>): {
			options: Partial<OfflineTokenLoginOptions>;
			transport: FakeTransport;
		} {
			const clock: FakeClock = new FakeClock();
			const transport: FakeTransport = new FakeTransport([token('acc-1')], clock);
			return {
				options: { ...BASE, fetchImpl: transport.fetchImpl, nowInMs: clock.nowInMs, ...overrides },
				transport
			};
		}

		it('T48 the same credentials share one provider, constructed once', async () => {
			const { options, transport } = registryOptions({ username: 'registry-t48' });
			const first: OfflineTokenProvider | null = await getKeycloakTokenProvider(options);
			const second: OfflineTokenProvider | null = await getKeycloakTokenProvider({ ...options });
			assert.ok(first !== null);
			assert.equal(first, second);
			assert.equal(transport.calls.length, 1);
			first.stop();
		});

		it('concurrent first use logs in once', async () => {
			const { options, transport } = registryOptions({ username: 'registry-concurrent' });
			const providers: (OfflineTokenProvider | null)[] = await Promise.all(
				Array.from({ length: 5 }, (): Promise<OfflineTokenProvider | null> => getKeycloakTokenProvider(options))
			);
			assert.ok(providers.every((provider: OfflineTokenProvider | null): boolean => provider === providers[0]));
			assert.equal(transport.calls.length, 1);
			providers[0]?.stop();
		});

		it('a failed creation is not cached', async () => {
			const clock: FakeClock = new FakeClock();
			const transport: FakeTransport = new FakeTransport([REFUSED, token('acc-1')], clock);
			const options: Partial<OfflineTokenLoginOptions> = {
				...BASE,
				username: 'registry-failed',
				fetchImpl: transport.fetchImpl,
				nowInMs: clock.nowInMs
			};
			await rejection(() => getKeycloakTokenProvider(options));
			const provider: OfflineTokenProvider | null = await getKeycloakTokenProvider(options);
			assert.equal(provider?.getAccessToken(), 'acc-1');
			provider?.stop();
		});

		for (const field of ['username', 'password', 'realm', 'keycloakUrl'] as const) {
			it(`T49 a different ${field} gets a different provider`, async () => {
				const base: Partial<OfflineTokenLoginOptions> = registryOptions({ username: `registry-t49-${field}` }).options;
				const first: OfflineTokenProvider | null = await getKeycloakTokenProvider(base);
				const changed: string =
					field === 'keycloakUrl' ? 'https://other.example.com/auth' : `${String(base[field])}-other`;
				const second: OfflineTokenProvider | null = await getKeycloakTokenProvider({
					...registryOptions({ username: `registry-t49-${field}` }).options,
					[field]: changed
				});
				assert.ok(first !== null && second !== null);
				assert.notEqual(first, second);
				first.stop();
				second.stop();
			});
		}

		it('T50 fifty configs with distinct usernames are fifty constructions, in order', async () => {
			const clock: FakeClock = new FakeClock();
			const transport: FakeTransport = new FakeTransport([token('acc-1')], clock);
			const expected: string[] = [];
			for (let index: number = 0; index < 50; index += 1) {
				const username: string = `registry-t50-user-${index}`;
				expected.push(username);
				const provider: OfflineTokenProvider | null = await getKeycloakTokenProvider({
					...BASE,
					username,
					fetchImpl: transport.fetchImpl,
					nowInMs: clock.nowInMs
				});
				provider?.stop();
			}
			assert.deepEqual(
				transport.calls.map((call: Recorded): string | null => call.form.get('username')),
				expected
			);
		});

		it('T51 two token-only configs with empty passwords get different providers', async () => {
			const a: { options: Partial<OfflineTokenLoginOptions>; transport: FakeTransport } = registryOptions({
				username: 'registry-t51',
				password: '',
				refreshToken: 'off-tenant-a'
			});
			const b: { options: Partial<OfflineTokenLoginOptions>; transport: FakeTransport } = registryOptions({
				username: 'registry-t51',
				password: '',
				refreshToken: 'off-tenant-b'
			});
			const first: OfflineTokenProvider | null = await getKeycloakTokenProvider(a.options);
			const second: OfflineTokenProvider | null = await getKeycloakTokenProvider(b.options);
			assert.ok(first !== null && second !== null);
			assert.notEqual(first, second);
			assert.equal(a.transport.calls[0].form.get('refresh_token'), 'off-tenant-a');
			assert.equal(b.transport.calls[0].form.get('refresh_token'), 'off-tenant-b');
			first.stop();
			second.stop();
		});

		it('the key renders verify_ssl as True / False, exactly like the python SDK', () => {
			const fields: string[] = [BASE.keycloakUrl, BASE.realm, BASE.clientId, BASE.username, String(BASE.password), ''];
			const digest: (verify: string) => string = (verify: string): string =>
				createHash('sha256')
					.update([...fields, verify, ''].join('\0'), 'utf8')
					.digest('hex');
			assert.equal(keycloakProviderRegistryKey({ ...BASE }), digest('True'));
			assert.equal(keycloakProviderRegistryKey({ ...BASE, keycloakVerifySsl: true }), digest('True'));
			assert.equal(keycloakProviderRegistryKey({ ...BASE, keycloakVerifySsl: false }), digest('False'));
		});

		it('T52 / T53 the key holds neither the refresh token nor the password and is 64 hex characters', () => {
			const key: string = keycloakProviderRegistryKey({
				...BASE,
				password: 'pw-in-key-check',
				refreshToken: 'off-in-key-check'
			});
			assert.match(key, /^[0-9a-f]{64}$/);
			assert.ok(!key.includes('off-in-key-check') && !key.includes('pw-in-key-check'));
			assert.notEqual(key, keycloakProviderRegistryKey({ ...BASE, password: 'pw-in-key-check' }));
			assert.notEqual(key, keycloakProviderRegistryKey({ ...BASE, refreshToken: 'off-in-key-check' }));
			assert.notEqual(
				keycloakProviderRegistryKey({ ...BASE, tokenExpirationInS: 60 }),
				keycloakProviderRegistryKey({ ...BASE })
			);
			assert.notEqual(
				keycloakProviderRegistryKey({ ...BASE, keycloakVerifySsl: false }),
				keycloakProviderRegistryKey({ ...BASE })
			);
			assert.match(keycloakProviderRegistryKey({}), /^[0-9a-f]{64}$/);
		});

		it('T54 a closed provider is never returned for a new client', async () => {
			const { options, transport } = registryOptions({ username: 'registry-t54' });
			const first: OfflineTokenProvider | null = await getKeycloakTokenProvider(options);
			first?.close();
			const second: OfflineTokenProvider | null = await getKeycloakTokenProvider(options);
			assert.ok(second !== null);
			assert.notEqual(first, second);
			assert.equal(second.isClosed(), false);
			assert.equal(transport.calls.length, 2);
			second.stop();
		});
	});

	describe('K. configuration', () => {
		it('T56 a token-only config constructs and is Keycloak-configured', async () => {
			const h: Harness = await build([token('acc-1')], { password: '', refreshToken: 'off-only' });
			assert.equal(h.provider.getAccessToken(), 'acc-1');
			h.provider.stop();
		});

		it('T57 a Keycloak triple with neither password nor token is refused before any request', async () => {
			const clock: FakeClock = new FakeClock();
			const transport: FakeTransport = new FakeTransport([token('acc-1')], clock);
			for (const action of [
				(): Promise<unknown> => login({ ...BASE, password: '', fetchImpl: transport.fetchImpl }),
				(): Promise<unknown> => getKeycloakTokenProvider({ ...BASE, password: '', fetchImpl: transport.fetchImpl })
			]) {
				await assert.rejects(action, (error: unknown): boolean => {
					assert.ok(error instanceof TokenError && !(error instanceof KeycloakAuthenticationError));
					assert.match(error.message, /refresh_token/);
					assert.match(error.message, /`password`/);
					return true;
				});
			}
			assert.equal(transport.calls.length, 0);
		});

		it('a refreshToken that is not a string is refused', async () => {
			await assert.rejects(() => login({ ...BASE, refreshToken: 7 as unknown as string }), {
				name: 'OfflineTokenError',
				message: /"refreshToken" must be a string/
			});
		});

		it('T58 a password config is unchanged', async () => {
			const h: Harness = await build([token('acc-1')]);
			assert.deepEqual(h.transport.grants(), ['password']);
			h.provider.stop();
		});

		it('T59 renderings redact the tokens and leave an empty secret empty', async () => {
			const h: Harness = await build([token('acc-render-1', 300, 'off-render-1')]);
			for (const rendering of [
				h.provider.toString(),
				inspect(h.provider),
				JSON.stringify(h.provider),
				String(h.provider)
			]) {
				assert.ok(rendering.includes('***REDACTED***'), rendering);
				assert.ok(!rendering.includes('acc-render-1') && !rendering.includes('off-render-1'), rendering);
			}
			h.provider.stop();
			const fresh: OfflineTokenProvider = new OfflineTokenProvider({ ...BASE, refreshToken: '' });
			assert.ok(!fresh.toString().includes('***REDACTED***'));
			assert.deepEqual(fresh.toJSON(), {
				tokenEndpoint: 'https://kc.example.com/auth/realms/ondewo-ccai-platform/protocol/openid-connect/token',
				clientId: 'ondewo-t2s-cai-sdk-public',
				accessToken: "''",
				refreshToken: "''"
			});
			const handedOff: OfflineTokenProvider = new OfflineTokenProvider({ ...BASE, refreshToken: 'off-render-2' });
			assert.match(handedOff.toString(), /accessToken='', refreshToken=\*\*\*REDACTED\*\*\*/);
		});

		it('T60 a token-only config reaches the provider with that token and no password', async () => {
			const clock: FakeClock = new FakeClock();
			const transport: FakeTransport = new FakeTransport([token('acc-1')], clock);
			const provider: OfflineTokenProvider | null = await getKeycloakTokenProvider({
				...BASE,
				username: 'registry-t60',
				password: '',
				refreshToken: 'off-t60',
				fetchImpl: transport.fetchImpl,
				nowInMs: clock.nowInMs
			});
			assert.ok(provider !== null);
			assert.equal(transport.calls[0].form.get('refresh_token'), 'off-t60');
			assert.equal(transport.calls[0].form.has('password'), false);
			provider.stop();
		});

		const partials: Partial<OfflineTokenLoginOptions>[] = [
			{ keycloakUrl: BASE.keycloakUrl },
			{ realm: BASE.realm },
			{ clientId: BASE.clientId },
			{ keycloakUrl: BASE.keycloakUrl, realm: BASE.realm },
			{ keycloakUrl: BASE.keycloakUrl, clientId: BASE.clientId },
			{ realm: BASE.realm, clientId: BASE.clientId }
		];
		for (const partial of partials) {
			it(`T61 a partial triple ${Object.keys(partial).join('+')} is refused naming the three fields`, async () => {
				await assert.rejects(
					() => getKeycloakTokenProvider({ username: 'u', password: 'p', ...partial }),
					(error: unknown): boolean => {
						assert.ok(error instanceof TokenError);
						for (const name of ['keycloakUrl', 'realm', 'clientId']) {
							assert.ok(error.message.includes(`\`${name}\``), error.message);
						}
						return true;
					}
				);
			});
		}

		it('T62 without a Keycloak triple no provider is built', async () => {
			assert.equal(await getKeycloakTokenProvider({ username: 'u', password: 'p' }), null);
			assert.equal(await getKeycloakTokenProvider({}), null);
		});

		it('login() names the three Keycloak fields for a missing one', async () => {
			await assert.rejects(() => login({ ...BASE, realm: '' }), {
				name: 'OfflineTokenError',
				message: /"realm".*`keycloakUrl`, `realm`, and `clientId` must be provided together/
			});
		});
	});
});
