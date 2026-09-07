// Offline unit tests for the T2S synthesize example. No live server and no
// Keycloak: the gRPC client is a hand-written fake, the token source is a plain
// stub, and `main()`'s two outside-world boundaries are injected. Run with the
// repo's `npm test` (the coverage gate) or `make test_examples`.

import { describe, it, mock } from 'node:test';
import assert from 'node:assert/strict';
import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';

import { ChannelCredentials, Metadata, ServiceError, credentials, status } from '@grpc/grpc-js';

import { SynthesizeRequest, RequestConfig, SynthesizeResponse } from '../api/ondewo/t2s/text-to-speech_pb';
import { Text2SpeechClient } from '../api/ondewo/t2s/text-to-speech_grpc_pb';
import { OfflineTokenLoginOptions } from '../api/auth/offlineTokenProvider';
import {
	AuthorizationMetadataSource,
	LoginFunction,
	SynthesizeTokenProvider,
	SynthesizeUnaryClient,
	Text2SpeechClientFactory,
	asServiceError,
	buildAuthMetadata,
	buildChannelCredentials,
	buildSynthesizeRequest,
	createText2SpeechClient,
	main,
	readBooleanEnv,
	requireEnv,
	synthesizeUnary
} from './synthesizeExample';

/** The request and metadata a call to the fake client was invoked with. */
interface CapturedCall {
	/** The request the example passed to `synthesize`. */
	request: SynthesizeRequest;
	/** The per-call metadata the example passed to `synthesize`. */
	metadata: Metadata;
}

/** The canned outcome a fake client delivers to its callback. */
interface FakeOutcome {
	/** The error to report, or `null` for success. */
	error: ServiceError | null;
	/** The response to report on success. */
	response: SynthesizeResponse;
}

/**
 * Builds a {@link SynthesizeUnaryClient} that records every call and replays a
 * fixed outcome to the callback, standing in for the real gRPC client.
 *
 * @param outcome The error/response the fake replays to each callback.
 * @returns The fake client and the list it records calls into.
 */
function makeFakeClient(outcome: FakeOutcome): { client: SynthesizeUnaryClient; calls: CapturedCall[] } {
	const calls: CapturedCall[] = [];
	const client: SynthesizeUnaryClient = {
		synthesize(
			request: SynthesizeRequest,
			metadata: Metadata,
			onResult: (error: ServiceError | null, response: SynthesizeResponse) => void
		): void {
			calls.push({ request, metadata });
			onResult(outcome.error, outcome.response);
		}
	};
	return { client, calls };
}

/**
 * Builds a minimal {@link ServiceError} for the rejection path.
 *
 * @param message The error message / details.
 * @returns A service error carrying `status.INTERNAL`.
 */
function makeServiceError(message: string): ServiceError {
	return Object.assign(new Error(message), {
		code: status.INTERNAL,
		details: message,
		metadata: new Metadata()
	});
}

/** Covers {@link buildSynthesizeRequest}. */
describe('buildSynthesizeRequest', () => {
	/** Sets the text and pipeline id, and the length scale when provided. */
	it('populates text, pipeline id and length scale', () => {
		const pipelineId: string = 'pipeline-en-us';
		const text: string = 'Good morning.';
		const request: SynthesizeRequest = buildSynthesizeRequest({
			text,
			t2sPipelineId: pipelineId,
			lengthScale: 1.25
		});

		assert.equal(request.getText(), text);
		const config: RequestConfig | undefined = request.getConfig();
		assert.ok(config !== undefined);
		assert.equal(config.getT2sPipelineId(), pipelineId);
		assert.equal(config.hasLengthScale(), true);
		assert.equal(config.getLengthScale(), 1.25);
	});

	/** Leaves the optional length scale unset when it is omitted. */
	it('omits the length scale when not provided', () => {
		const request: SynthesizeRequest = buildSynthesizeRequest({
			text: 'Hello.',
			t2sPipelineId: 'pipeline-en-us'
		});

		const config: RequestConfig | undefined = request.getConfig();
		assert.ok(config !== undefined);
		assert.equal(config.hasLengthScale(), false);
	});
});

/** Covers {@link buildAuthMetadata}. */
describe('buildAuthMetadata', () => {
	/** Copies every header from the source onto the gRPC metadata. */
	it('sets the authorization header from the token source', () => {
		const source: AuthorizationMetadataSource = {
			getAuthorizationMetadata(): Record<string, string> {
				return { authorization: 'Bearer token-1' };
			}
		};

		const metadata: Metadata = buildAuthMetadata(source);

		assert.deepEqual(metadata.get('authorization'), ['Bearer token-1']);
	});
});

/** Covers {@link synthesizeUnary}. */
describe('synthesizeUnary', () => {
	/** Forwards the request and metadata to the client and resolves with the response. */
	it('resolves with the response and forwards request + metadata', async () => {
		const response: SynthesizeResponse = new SynthesizeResponse();
		response.setAudioUuid('uuid-42');
		response.setAudio(new Uint8Array([1, 2, 3, 4]));
		response.setSampleRate(22050);
		const fake: { client: SynthesizeUnaryClient; calls: CapturedCall[] } = makeFakeClient({ error: null, response });

		const request: SynthesizeRequest = buildSynthesizeRequest({
			text: 'Hello.',
			t2sPipelineId: 'pipeline-en-us'
		});
		const metadata: Metadata = new Metadata();
		metadata.set('authorization', 'Bearer token-1');

		const resolved: SynthesizeResponse = await synthesizeUnary(fake.client, request, metadata);

		assert.equal(resolved.getAudioUuid(), 'uuid-42');
		assert.equal(resolved.getAudio_asU8().length, 4);
		assert.equal(fake.calls.length, 1);
		assert.equal(fake.calls[0].request, request);
		assert.equal(fake.calls[0].metadata, metadata);
	});

	/** Rejects with the ServiceError the client reports. */
	it('rejects with the ServiceError from the client', async () => {
		const serviceError: ServiceError = makeServiceError('synthesis failed');
		const fake: { client: SynthesizeUnaryClient; calls: CapturedCall[] } = makeFakeClient({
			error: serviceError,
			response: new SynthesizeResponse()
		});

		const request: SynthesizeRequest = buildSynthesizeRequest({
			text: 'Hello.',
			t2sPipelineId: 'pipeline-en-us'
		});

		await assert.rejects(
			() => synthesizeUnary(fake.client, request, new Metadata()),
			(reason: unknown): boolean => {
				assert.equal(reason, serviceError);
				return true;
			}
		);
	});
});

/**
 * Every environment variable `synthesizeExample.ts` reads. {@link withEnv} deletes all of
 * them before applying a scripted set, so no ambient value — a shell export, or the
 * `examples/environment.env` the module loads at import time — can influence a test case.
 */
const MANAGED_ENV_KEYS: string[] = [
	'ONDEWO_HOST',
	'ONDEWO_PORT',
	'ONDEWO_USE_SECURE_CHANNEL',
	'ONDEWO_GRPC_CERT',
	'ONDEWO_T2S_PIPELINE_ID',
	'KEYCLOAK_URL',
	'KEYCLOAK_REALM',
	'KEYCLOAK_CLIENT_ID',
	'KEYCLOAK_USER_NAME',
	'KEYCLOAK_PASSWORD',
	'KEYCLOAK_VERIFY_SSL'
];

/**
 * A complete, valid environment for {@link main}: every REQUIRED variable and no optional
 * one, so the optional-variable defaults (`KEYCLOAK_VERIFY_SSL`, the secure-channel pair)
 * are the ones under test.
 */
const MAIN_ENV: Record<string, string> = {
	ONDEWO_HOST: 't2s.example.com',
	ONDEWO_PORT: '50055',
	ONDEWO_T2S_PIPELINE_ID: 'pipeline-en-us',
	KEYCLOAK_URL: 'https://auth.example.com/auth',
	KEYCLOAK_REALM: 'ondewo-ccai-platform',
	KEYCLOAK_CLIENT_ID: 'ondewo-nlu-cai-sdk-public',
	KEYCLOAK_USER_NAME: 'tech-user@example.com',
	KEYCLOAK_PASSWORD: 'super-secret'
};

/**
 * Runs `body` under a scripted environment: every key in {@link MANAGED_ENV_KEYS} is deleted,
 * `overrides` is applied, and the previous values (including "was unset") are reinstated
 * afterwards.
 *
 * `body` is AWAITED inside the `try` on purpose — {@link main} reads most variables only
 * after awaiting the login, so restoring as soon as `body` returned its promise would put the
 * real environment back before that code runs.
 *
 * @param overrides Variables to set for the duration of `body`.
 * @param body The scenario to run; may be synchronous or async.
 * @returns Resolves once `body` has settled and the environment has been reinstated.
 */
async function withEnv(overrides: Record<string, string>, body: () => void | Promise<void>): Promise<void> {
	const saved: Record<string, string | undefined> = {};
	for (const key of MANAGED_ENV_KEYS) {
		saved[key] = process.env[key];
		delete process.env[key];
	}
	for (const key of Object.keys(overrides)) {
		process.env[key] = overrides[key];
	}
	try {
		await body();
	} finally {
		for (const key of MANAGED_ENV_KEYS) {
			const previous: string | undefined = saved[key];
			if (previous === undefined) {
				delete process.env[key];
			} else {
				process.env[key] = previous;
			}
		}
	}
}

/** The console output a test case captured, in call order, one entry per `console` call. */
interface ConsoleRecorder {
	/** The messages passed to `console.log`. */
	logLines: string[];
}

/**
 * Replaces `console.log` with a recording no-op, so the example's chatter stays out of the
 * test report and the printed output can be asserted exactly. The caller MUST undo this with
 * `mock.restoreAll()` in a `finally` block.
 *
 * @returns A {@link ConsoleRecorder} whose array fills up while the mock is installed.
 */
function captureConsole(): ConsoleRecorder {
	const logLines: string[] = [];
	mock.method(console, 'log', (...args: unknown[]): void => {
		logLines.push(args.map((argument: unknown): string => String(argument)).join(' '));
	});
	return { logLines };
}

/** The root-certificate arguments a `credentials.createSsl` spy observed, in call order. */
interface CreateSslSpy {
	/** The `rootCerts` argument of each `createSsl` call (`undefined` means "system trust store"). */
	rootCertsSeen: (Buffer | null | undefined)[];
}

/**
 * Spies on `credentials.createSsl` while still building the real TLS credentials, so a test
 * can assert exactly which root-certificate bytes reached gRPC. The caller MUST undo this
 * with `mock.restoreAll()` in a `finally` block.
 *
 * @returns A {@link CreateSslSpy} whose array fills up while the spy is installed.
 */
function spyOnCreateSsl(): CreateSslSpy {
	const rootCertsSeen: (Buffer | null | undefined)[] = [];
	const createRealSsl: typeof credentials.createSsl = credentials.createSsl;
	mock.method(credentials, 'createSsl', (rootCerts?: Buffer | null): ChannelCredentials => {
		rootCertsSeen.push(rootCerts);
		return createRealSsl(rootCerts);
	});
	return { rootCertsSeen };
}

/** A recording stand-in for the example's Keycloak login boundary. */
interface LoginRecorder {
	/** The injectable {@link LoginFunction} to hand to {@link main}. */
	loginImpl: LoginFunction;
	/** The login options every call received, in call order. */
	optionsSeen: OfflineTokenLoginOptions[];
	/** How many times the returned provider's `stop()` was called. */
	getStopCalls(): number;
}

/**
 * Builds a {@link LoginFunction} that records its options and returns a token-provider stub
 * issuing `Bearer <token>`, counting the `stop()` calls the example makes.
 *
 * @param token The bearer token the stub provider hands out.
 * @returns The recorder; see {@link LoginRecorder}.
 */
function makeLoginRecorder(token: string): LoginRecorder {
	const optionsSeen: OfflineTokenLoginOptions[] = [];
	const stopCalls: number[] = [];
	const provider: SynthesizeTokenProvider = {
		getAuthorizationMetadata(): Record<string, string> {
			return { authorization: `Bearer ${token}` };
		},
		stop(): void {
			stopCalls.push(1);
		}
	};
	const loginImpl: LoginFunction = (options: OfflineTokenLoginOptions): Promise<SynthesizeTokenProvider> => {
		optionsSeen.push(options);
		return Promise.resolve(provider);
	};
	return {
		loginImpl,
		optionsSeen,
		getStopCalls(): number {
			return stopCalls.length;
		}
	};
}

/** A recording stand-in for the example's gRPC-client-construction boundary. */
interface ClientFactoryRecorder {
	/** The injectable {@link Text2SpeechClientFactory} to hand to {@link main}. */
	createClient: Text2SpeechClientFactory;
	/** The addresses the factory was asked for, in call order. */
	addressesSeen: string[];
	/** The channel credentials the factory was asked for, in call order. */
	credentialsSeen: ChannelCredentials[];
	/** The calls the fake client recorded. */
	calls: CapturedCall[];
}

/**
 * Builds a {@link Text2SpeechClientFactory} that records what it was asked to build and hands
 * back a fake client replaying `outcome`.
 *
 * @param outcome The error/response the fake client replays to each callback.
 * @returns The recorder; see {@link ClientFactoryRecorder}.
 */
function makeClientFactoryRecorder(outcome: FakeOutcome): ClientFactoryRecorder {
	const addressesSeen: string[] = [];
	const credentialsSeen: ChannelCredentials[] = [];
	const fake: { client: SynthesizeUnaryClient; calls: CapturedCall[] } = makeFakeClient(outcome);
	const createClient: Text2SpeechClientFactory = (
		address: string,
		channelCredentials: ChannelCredentials
	): SynthesizeUnaryClient => {
		addressesSeen.push(address);
		credentialsSeen.push(channelCredentials);
		return fake.client;
	};
	return { createClient, addressesSeen, credentialsSeen, calls: fake.calls };
}

/** Covers {@link requireEnv}. */
describe('requireEnv', () => {
	/** A configured value is returned verbatim — surrounding whitespace is NOT trimmed away. */
	it('returns a configured value verbatim', async () => {
		await withEnv({ ONDEWO_HOST: 't2s.example.com', ONDEWO_PORT: '  50055  ' }, (): void => {
			assert.equal(requireEnv('ONDEWO_HOST'), 't2s.example.com');
			assert.equal(requireEnv('ONDEWO_PORT'), '  50055  ');
		});
	});

	/** Unset, empty and whitespace-only all fail, naming the variable and the env file. */
	it('throws for an unset, empty or blank variable, naming it and the env file', async () => {
		const expectedMessage: string =
			'Missing required environment variable ONDEWO_HOST; set it in examples/environment.env.';
		await withEnv({}, (): void => {
			assert.throws(() => requireEnv('ONDEWO_HOST'), { message: expectedMessage });
		});
		await withEnv({ ONDEWO_HOST: '' }, (): void => {
			assert.throws(() => requireEnv('ONDEWO_HOST'), { message: expectedMessage });
		});
		await withEnv({ ONDEWO_HOST: '   ' }, (): void => {
			assert.throws(() => requireEnv('ONDEWO_HOST'), { message: expectedMessage });
		});
	});
});

/** Covers {@link readBooleanEnv}. */
describe('readBooleanEnv', () => {
	/** An unset or blank variable yields the caller's fallback, whichever way it points. */
	it('falls back when the variable is unset or blank', async () => {
		await withEnv({}, (): void => {
			assert.equal(readBooleanEnv('KEYCLOAK_VERIFY_SSL', true), true);
			assert.equal(readBooleanEnv('KEYCLOAK_VERIFY_SSL', false), false);
		});
		await withEnv({ KEYCLOAK_VERIFY_SSL: '   ' }, (): void => {
			assert.equal(readBooleanEnv('KEYCLOAK_VERIFY_SSL', true), true);
		});
	});

	/** Only the literal `true` (case- and whitespace-insensitive) is true; anything else is false. */
	it('parses true case-insensitively and treats every other value as false', async () => {
		await withEnv({ KEYCLOAK_VERIFY_SSL: ' TRUE ' }, (): void => {
			assert.equal(readBooleanEnv('KEYCLOAK_VERIFY_SSL', false), true);
		});
		await withEnv({ KEYCLOAK_VERIFY_SSL: 'false' }, (): void => {
			assert.equal(readBooleanEnv('KEYCLOAK_VERIFY_SSL', true), false);
		});
		await withEnv({ KEYCLOAK_VERIFY_SSL: 'yes' }, (): void => {
			assert.equal(readBooleanEnv('KEYCLOAK_VERIFY_SSL', true), false);
		});
	});
});

/** Covers {@link buildChannelCredentials}. */
describe('buildChannelCredentials', () => {
	/** Plaintext unless ONDEWO_USE_SECURE_CHANNEL is `true` — even with a cert path set. */
	it('builds a plaintext channel when ONDEWO_USE_SECURE_CHANNEL is unset or false', async () => {
		const environments: Record<string, string>[] = [
			{},
			{ ONDEWO_USE_SECURE_CHANNEL: 'false', ONDEWO_GRPC_CERT: '/nonexistent/root.pem' }
		];
		for (const environment of environments) {
			await withEnv(environment, (): void => {
				const createSslSpy: CreateSslSpy = spyOnCreateSsl();
				try {
					const channelCredentials: ChannelCredentials = buildChannelCredentials();
					assert.equal(channelCredentials._isSecure(), false);
					// A plaintext channel must never build TLS credentials, cert path or not.
					assert.deepEqual(createSslSpy.rootCertsSeen, []);
				} finally {
					mock.restoreAll();
				}
			});
		}
	});

	/** A secure channel with no usable cert path falls back to the system trust store. */
	it('builds a TLS channel from the system trust store when no cert is set', async () => {
		const environments: Record<string, string>[] = [
			{ ONDEWO_USE_SECURE_CHANNEL: 'true' },
			{ ONDEWO_USE_SECURE_CHANNEL: 'true', ONDEWO_GRPC_CERT: '   ' }
		];
		for (const environment of environments) {
			await withEnv(environment, (): void => {
				const createSslSpy: CreateSslSpy = spyOnCreateSsl();
				try {
					const channelCredentials: ChannelCredentials = buildChannelCredentials();
					assert.equal(channelCredentials._isSecure(), true);
					// No root certificate => gRPC uses the system trust store.
					assert.deepEqual(createSslSpy.rootCertsSeen, [undefined]);
				} finally {
					mock.restoreAll();
				}
			});
		}
	});

	/** The exact ONDEWO_GRPC_CERT file BYTES reach gRPC — not the path, and not `undefined`. */
	it('builds a TLS channel from the exact ONDEWO_GRPC_CERT file bytes', async () => {
		const certDirectory: string = fs.mkdtempSync(path.join(os.tmpdir(), 'ondewo-t2s-cert-'));
		const certPath: string = path.join(certDirectory, 'root.pem');
		const certBytes: Buffer = Buffer.from(
			'-----BEGIN CERTIFICATE-----\nsynthesizeExample-spec-root\n-----END CERTIFICATE-----\n'
		);
		fs.writeFileSync(certPath, certBytes);
		try {
			// A padded path also proves the value is trimmed before being read.
			await withEnv({ ONDEWO_USE_SECURE_CHANNEL: 'true', ONDEWO_GRPC_CERT: ` ${certPath} ` }, (): void => {
				const createSslSpy: CreateSslSpy = spyOnCreateSsl();
				try {
					const channelCredentials: ChannelCredentials = buildChannelCredentials();
					assert.equal(channelCredentials._isSecure(), true);
					assert.deepEqual(createSslSpy.rootCertsSeen, [certBytes]);
				} finally {
					mock.restoreAll();
				}
			});
		} finally {
			fs.rmSync(certDirectory, { recursive: true, force: true });
		}
	});

	/** An unreadable cert fails loudly instead of silently degrading to the trust store. */
	it('propagates the read error when ONDEWO_GRPC_CERT is unreadable', async () => {
		const certDirectory: string = fs.mkdtempSync(path.join(os.tmpdir(), 'ondewo-t2s-nocert-'));
		const missingCertPath: string = path.join(certDirectory, 'root.pem');
		try {
			await withEnv({ ONDEWO_USE_SECURE_CHANNEL: 'true', ONDEWO_GRPC_CERT: missingCertPath }, (): void => {
				assert.throws(() => buildChannelCredentials(), { code: 'ENOENT' });
			});
		} finally {
			fs.rmSync(certDirectory, { recursive: true, force: true });
		}
	});
});

/** Covers {@link asServiceError}. */
describe('asServiceError', () => {
	/** An object carrying both `code` and `details` is narrowed to a ServiceError. */
	it('narrows a value carrying code and details', () => {
		const serviceError: ServiceError = makeServiceError('synthesis failed');

		assert.equal(asServiceError(serviceError), serviceError);
	});

	/** Everything else — null, a primitive, or a partial shape — is not a ServiceError. */
	it('returns undefined for null, a primitive and a partial shape', () => {
		assert.equal(asServiceError(null), undefined);
		assert.equal(asServiceError('boom'), undefined);
		assert.equal(asServiceError({ code: status.INTERNAL }), undefined);
		assert.equal(asServiceError({ details: 'boom' }), undefined);
	});
});

/**
 * The `@grpc/grpc-js` client internals this test inspects. Reached through a cast: the
 * generated `Text2SpeechClient` declares its base class as the LEGACY `grpc` package, which is
 * not installed, so TypeScript sees no inherited members on it at all.
 */
interface InspectableClient {
	/** The channel the client dials on. */
	getChannel(): InspectableChannel;
	/** Releases the channel so no handle outlives the test case. */
	close(): void;
}

/** The channel internals this test inspects; see {@link InspectableClient}. */
interface InspectableChannel {
	/** The resolved dial target, e.g. `dns:t2s.example.com:50055`. */
	getTarget(): string;
	/** gRPC-js keeps the channel credentials here. */
	internalChannel?: { credentials?: ChannelCredentials };
}

/** Covers {@link createText2SpeechClient}, the default client factory of {@link main}. */
describe('createText2SpeechClient', () => {
	/**
	 * The generated client must be bound to BOTH the requested address and the requested
	 * credentials. TLS credentials are used because they are distinguishable from the
	 * plaintext default, so a factory that dropped the argument would fail here. gRPC-js dials
	 * lazily, so constructing the client opens no connection; it is closed again anyway.
	 */
	it('binds the generated client to the given address and credentials', () => {
		const secureCredentials: ChannelCredentials = credentials.createSsl();
		const created: SynthesizeUnaryClient = createText2SpeechClient('t2s.example.com:50055', secureCredentials);
		assert.ok(created instanceof Text2SpeechClient);
		const client: InspectableClient = created as unknown as InspectableClient;
		try {
			const channel: InspectableChannel = client.getChannel();
			assert.equal(channel.getTarget(), 'dns:t2s.example.com:50055');
			const boundCredentials: ChannelCredentials | undefined = channel.internalChannel?.credentials;
			assert.ok(
				boundCredentials !== undefined,
				'@grpc/grpc-js no longer keeps the channel credentials on channel.internalChannel.credentials'
			);
			// The credentials must arrive at the client unchanged — same object, and still SECURE.
			assert.equal(boundCredentials, secureCredentials);
			assert.equal(boundCredentials._isSecure(), true);
		} finally {
			client.close();
		}
	});
});

/** Covers {@link main} end to end against injected boundaries — no Keycloak, no server. */
describe('main', () => {
	/** The happy path: login options from the env, one RPC with the bearer token, provider stopped. */
	it('logs in, dials host:port, synthesizes and stops the token provider exactly once', async () => {
		await withEnv(MAIN_ENV, async (): Promise<void> => {
			const response: SynthesizeResponse = new SynthesizeResponse();
			response.setAudioUuid('uuid-42');
			response.setAudio(new Uint8Array([1, 2, 3, 4]));
			response.setSampleRate(22050);
			const loginRecorder: LoginRecorder = makeLoginRecorder('token-main');
			const factory: ClientFactoryRecorder = makeClientFactoryRecorder({ error: null, response });
			const recorder: ConsoleRecorder = captureConsole();
			try {
				await main({ loginImpl: loginRecorder.loginImpl, createClient: factory.createClient });

				// The Keycloak options come from the KEYCLOAK_* variables; verify-SSL defaults to true.
				assert.deepEqual(loginRecorder.optionsSeen, [
					{
						keycloakUrl: MAIN_ENV.KEYCLOAK_URL,
						realm: MAIN_ENV.KEYCLOAK_REALM,
						clientId: MAIN_ENV.KEYCLOAK_CLIENT_ID,
						username: MAIN_ENV.KEYCLOAK_USER_NAME,
						password: MAIN_ENV.KEYCLOAK_PASSWORD,
						keycloakVerifySsl: true
					}
				]);
				// The channel is dialled at <host>:<port> with the plaintext default.
				assert.deepEqual(factory.addressesSeen, ['t2s.example.com:50055']);
				assert.equal(factory.credentialsSeen.length, 1);
				assert.equal(factory.credentialsSeen[0]._isSecure(), false);
				// One RPC, carrying the pipeline id from the env and the fresh bearer token.
				assert.equal(factory.calls.length, 1);
				const config: RequestConfig | undefined = factory.calls[0].request.getConfig();
				assert.ok(config !== undefined);
				assert.equal(config.getT2sPipelineId(), 'pipeline-en-us');
				assert.equal(factory.calls[0].request.getText(), 'Hello from the ONDEWO T2S NodeJS client.');
				assert.deepEqual(factory.calls[0].metadata.get('authorization'), ['Bearer token-main']);
				// The background refresh timer is always released.
				assert.equal(loginRecorder.getStopCalls(), 1);
				assert.deepEqual(recorder.logLines, [
					'START: ONDEWO T2S synthesize example',
					'Authenticating against Keycloak (ROPC + offline_access)...',
					'Keycloak authentication succeeded; access token acquired.',
					'Connecting to ONDEWO T2S server at t2s.example.com:50055.',
					'Sending Synthesize RPC (t2sPipelineId=pipeline-en-us).',
					'DONE: synthesized 4 bytes of audio (uuid=uuid-42, sampleRate=22050).'
				]);
			} finally {
				mock.restoreAll();
			}
		});
	});

	/** KEYCLOAK_VERIFY_SSL=false is forwarded to the login (the self-signed-TLS opt-out). */
	it('forwards KEYCLOAK_VERIFY_SSL=false to the login', async () => {
		await withEnv({ ...MAIN_ENV, KEYCLOAK_VERIFY_SSL: 'false' }, async (): Promise<void> => {
			const loginRecorder: LoginRecorder = makeLoginRecorder('token-insecure');
			const factory: ClientFactoryRecorder = makeClientFactoryRecorder({
				error: null,
				response: new SynthesizeResponse()
			});
			captureConsole();
			try {
				await main({ loginImpl: loginRecorder.loginImpl, createClient: factory.createClient });

				assert.equal(loginRecorder.optionsSeen[0].keycloakVerifySsl, false);
			} finally {
				mock.restoreAll();
			}
		});
	});

	/** A failed RPC propagates, and the token provider is still stopped by the `finally`. */
	it('rejects with the ServiceError and still stops the token provider', async () => {
		await withEnv(MAIN_ENV, async (): Promise<void> => {
			const serviceError: ServiceError = makeServiceError('synthesis failed');
			const loginRecorder: LoginRecorder = makeLoginRecorder('token-failing');
			const factory: ClientFactoryRecorder = makeClientFactoryRecorder({
				error: serviceError,
				response: new SynthesizeResponse()
			});
			captureConsole();
			try {
				await assert.rejects(
					() => main({ loginImpl: loginRecorder.loginImpl, createClient: factory.createClient }),
					(reason: unknown): boolean => {
						assert.equal(reason, serviceError);
						return true;
					}
				);

				assert.equal(loginRecorder.getStopCalls(), 1);
			} finally {
				mock.restoreAll();
			}
		});
	});

	/**
	 * Called with NO overrides — so the REAL login and the REAL client factory are selected —
	 * and an empty environment, `main` rejects with the {@link requireEnv} error for the first
	 * missing variable, having printed only its banner: no Keycloak call and no gRPC dial were
	 * attempted.
	 */
	it('propagates the requireEnv error before contacting anything, with no overrides', async () => {
		await withEnv({}, async (): Promise<void> => {
			const recorder: ConsoleRecorder = captureConsole();
			try {
				await assert.rejects(() => main(), {
					message: 'Missing required environment variable KEYCLOAK_URL; set it in examples/environment.env.'
				});

				assert.deepEqual(recorder.logLines, [
					'START: ONDEWO T2S synthesize example',
					'Authenticating against Keycloak (ROPC + offline_access)...'
				]);
			} finally {
				mock.restoreAll();
			}
		});
	});
});
