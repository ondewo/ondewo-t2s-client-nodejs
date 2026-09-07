// Minimal, idiomatic example for the ONDEWO T2S NodeJS client.
//
// It shows the end-to-end flow a headless SDK consumer follows:
//   1. Obtain a bearer access token via the D18 Keycloak offline-token helper
//      (ROPC + offline_access) shipped in this package as `login` /
//      `OfflineTokenProvider`.
//   2. Turn that token into gRPC `Authorization: Bearer <jwt>` metadata.
//   3. Build a `SynthesizeRequest` (text + `RequestConfig` selecting the T2S
//      pipeline) and call the unary `Synthesize` RPC on `Text2SpeechClient`.
//   4. Handle the `SynthesizeResponse` (the generated PCM/audio bytes).
//
// The small, injectable helpers (`buildAuthMetadata`, `buildSynthesizeRequest`,
// `synthesizeUnary`) are what the accompanying `synthesizeExample.spec.ts`
// exercises with a mocked client and a mocked token source — so the example is
// proven correct without ever reaching a live T2S server. `main()` wires them
// against the real generated client and only runs when the file is executed
// directly (`npx tsx examples/synthesizeExample.ts`); its two
// outside-world boundaries (the Keycloak login and the gRPC client factory) are
// injectable too, so the spec covers `main()` itself without a server.

import { readFileSync } from 'fs';
import * as path from 'path';

import * as dotenv from 'dotenv';

import { credentials, Metadata } from '@grpc/grpc-js';
import type { ChannelCredentials, ServiceError } from '@grpc/grpc-js';

import { SynthesizeRequest, RequestConfig, SynthesizeResponse } from '../api/ondewo/t2s/text-to-speech_pb';
import { Text2SpeechClient } from '../api/ondewo/t2s/text-to-speech_grpc_pb';
import { login, OfflineTokenLoginOptions } from '../api/auth/offlineTokenProvider';

// Configuration is loaded ONCE, at module load, from the environment.env next to this
// file (the path is resolved relative to the script, so the working directory does not
// matter). dotenv never overwrites an already-set variable, so an exported shell value
// still wins — and a test that scripts `process.env` is not undone by a later `main()`.
dotenv.config({ path: path.join(__dirname, 'environment.env') });

/**
 * Anything that can supply gRPC authorization headers, e.g. the package's
 * `OfflineTokenProvider`. Kept structural so a stub can be injected in tests
 * without a live Keycloak.
 */
export interface AuthorizationMetadataSource {
	/** Returns header key/value pairs, e.g. `{ authorization: 'Bearer <jwt>' }`. */
	getAuthorizationMetadata(): Record<string, string>;
}

/**
 * The single unary RPC this example needs from the generated
 * {@link Text2SpeechClient}. Declared structurally so a mock client satisfies it
 * without importing the (untyped) `grpc` shim the generated stubs reference.
 */
export interface SynthesizeUnaryClient {
	/**
	 * Invokes the unary `Synthesize` RPC, delivering the result to `onResult`.
	 *
	 * @param request The synthesize request to send.
	 * @param metadata Per-call gRPC metadata (carries the bearer token).
	 * @param onResult Node-style callback: `(error, response)`.
	 */
	synthesize(
		request: SynthesizeRequest,
		metadata: Metadata,
		onResult: (error: ServiceError | null, response: SynthesizeResponse) => void
	): void;
}

/**
 * The part of the package's `OfflineTokenProvider` this example depends on: the bearer
 * metadata for each call, plus the `stop()` that clears the background refresh timer.
 * Structural, so a test injects a stub instead of a live Keycloak session.
 */
export interface SynthesizeTokenProvider extends AuthorizationMetadataSource {
	/** Stops the provider's background access-token refresh loop. */
	stop(): void;
}

/**
 * The Keycloak-login boundary of {@link main}; defaults to the package's own `login`.
 */
export type LoginFunction = (options: OfflineTokenLoginOptions) => Promise<SynthesizeTokenProvider>;

/**
 * The client-construction boundary of {@link main}; defaults to
 * {@link createText2SpeechClient}.
 */
export type Text2SpeechClientFactory = (
	address: string,
	channelCredentials: ChannelCredentials
) => SynthesizeUnaryClient;

/**
 * Replacements for the two boundaries of {@link main} that touch the outside world. Both
 * default to the real implementations, so running this file directly is unaffected; a unit
 * test injects mocks instead.
 */
export interface SynthesizeExampleOverrides {
	/** Replacement for the Keycloak login. */
	loginImpl?: LoginFunction;
	/** Replacement for the generated-gRPC-client factory. */
	createClient?: Text2SpeechClientFactory;
}

/**
 * Parameters for {@link buildSynthesizeRequest}.
 */
export interface SynthesizeOptions {
	/** The text to synthesize into speech. */
	text: string;
	/** Id of the T2S pipeline that renders the audio. */
	t2sPipelineId: string;
	/** Optional length scale (< 1 speeds speech up, > 1 slows it down). */
	lengthScale?: number;
}

/**
 * Builds gRPC metadata carrying the current `Authorization: Bearer <jwt>` header
 * from an {@link AuthorizationMetadataSource}.
 *
 * @param source The token source (typically an {@link OfflineTokenProvider}).
 * @returns Metadata with every header from `source` set on it.
 */
export function buildAuthMetadata(source: AuthorizationMetadataSource): Metadata {
	const metadata: Metadata = new Metadata();
	const headers: Record<string, string> = source.getAuthorizationMetadata();
	for (const key of Object.keys(headers)) {
		metadata.set(key, headers[key]);
	}
	return metadata;
}

/**
 * Builds a {@link SynthesizeRequest} for the given text and pipeline.
 *
 * @param options Text, pipeline id and optional tuning; see {@link SynthesizeOptions}.
 * @returns The populated request.
 */
export function buildSynthesizeRequest(options: SynthesizeOptions): SynthesizeRequest {
	const config: RequestConfig = new RequestConfig();
	config.setT2sPipelineId(options.t2sPipelineId);
	if (options.lengthScale !== undefined) {
		config.setLengthScale(options.lengthScale);
	}
	const request: SynthesizeRequest = new SynthesizeRequest();
	request.setText(options.text);
	request.setConfig(config);
	return request;
}

/**
 * Promise-wraps the callback-based unary `Synthesize` RPC.
 *
 * @param client The (real or mocked) synthesize-capable client.
 * @param request The request to send.
 * @param metadata Per-call metadata (bearer token).
 * @returns Resolves with the {@link SynthesizeResponse}; rejects with the
 *   {@link ServiceError} the server returned.
 */
export function synthesizeUnary(
	client: SynthesizeUnaryClient,
	request: SynthesizeRequest,
	metadata: Metadata
): Promise<SynthesizeResponse> {
	return new Promise<SynthesizeResponse>(
		(resolve: (value: SynthesizeResponse) => void, reject: (reason: ServiceError) => void): void => {
			client.synthesize(request, metadata, (error: ServiceError | null, response: SynthesizeResponse): void => {
				if (error !== null) {
					reject(error);
					return;
				}
				resolve(response);
			});
		}
	);
}

/**
 * Reads a required environment variable, throwing a descriptive error when it is
 * absent or blank so misconfiguration fails fast with actionable context.
 *
 * @param name The environment variable name to read.
 * @returns The variable's value.
 * @throws {Error} If the variable is unset or empty.
 */
export function requireEnv(name: string): string {
	const value: string | undefined = process.env[name];
	if (value === undefined || value.trim().length === 0) {
		throw new Error(`Missing required environment variable ${name}; set it in examples/environment.env.`);
	}
	return value;
}

/**
 * Reads an optional boolean environment variable (`true`/`false`, case-insensitive),
 * falling back to `fallback` when unset or blank.
 *
 * @param name The environment variable name to read.
 * @param fallback The value to use when the variable is unset or blank.
 * @returns The parsed boolean.
 */
export function readBooleanEnv(name: string, fallback: boolean): boolean {
	const value: string | undefined = process.env[name];
	if (value === undefined || value.trim().length === 0) {
		return fallback;
	}
	return value.trim().toLowerCase() === 'true';
}

/**
 * Builds the gRPC channel credentials from the canonical connection env vars:
 * insecure unless `ONDEWO_USE_SECURE_CHANNEL` is `true`, in which case TLS is used
 * with the root certificate at `ONDEWO_GRPC_CERT` (or the system trust store when
 * that is unset).
 *
 * @returns The channel credentials to open the T2S client with.
 */
export function buildChannelCredentials(): ChannelCredentials {
	const useSecureChannel: boolean = readBooleanEnv('ONDEWO_USE_SECURE_CHANNEL', false);
	if (!useSecureChannel) {
		return credentials.createInsecure();
	}
	const certPath: string | undefined = process.env.ONDEWO_GRPC_CERT;
	if (certPath !== undefined && certPath.trim().length > 0) {
		const rootCert: Buffer = readFileSync(certPath.trim());
		return credentials.createSsl(rootCert);
	}
	return credentials.createSsl();
}

/**
 * Narrows an unknown rejection reason to a gRPC {@link ServiceError} when it carries
 * the `code`/`details` fields, so RPC failures can be logged with their status.
 *
 * @param reason The caught rejection reason.
 * @returns The reason as a {@link ServiceError}, or `undefined` if it is not one.
 */
export function asServiceError(reason: unknown): ServiceError | undefined {
	if (reason !== null && typeof reason === 'object' && 'code' in reason && 'details' in reason) {
		return reason as ServiceError;
	}
	return undefined;
}

/**
 * Constructs the real generated gRPC client — the default {@link Text2SpeechClientFactory}
 * of {@link main}. Constructing a client opens no connection: gRPC-js dials lazily, on the
 * first RPC.
 *
 * @param address The `host:port` of the ONDEWO T2S server.
 * @param channelCredentials The credentials to dial with (see {@link buildChannelCredentials}).
 * @returns The generated {@link Text2SpeechClient} bound to `address`.
 */
export function createText2SpeechClient(
	address: string,
	channelCredentials: ChannelCredentials
): SynthesizeUnaryClient {
	return new Text2SpeechClient(address, channelCredentials);
}

/**
 * Runs the full example against a real T2S server. All endpoints and credentials
 * are read from `examples/environment.env` (canonical ONDEWO/KEYCLOAK vars) so
 * nothing sensitive is hard-coded.
 *
 * @param overrides Optional replacements for the two outside-world boundaries; see
 *   {@link SynthesizeExampleOverrides}. Both default to the real implementations.
 * @returns Resolves once the audio has been synthesized and logged.
 */
export async function main(overrides: SynthesizeExampleOverrides = {}): Promise<void> {
	console.log('START: ONDEWO T2S synthesize example');

	// The two boundaries that touch the outside world; a unit test replaces them, the example does not.
	const loginImpl: LoginFunction = overrides.loginImpl ?? login;
	const createClient: Text2SpeechClientFactory = overrides.createClient ?? createText2SpeechClient;

	console.log('Authenticating against Keycloak (ROPC + offline_access)...');
	const provider: SynthesizeTokenProvider = await loginImpl({
		keycloakUrl: requireEnv('KEYCLOAK_URL'),
		realm: requireEnv('KEYCLOAK_REALM'),
		clientId: requireEnv('KEYCLOAK_CLIENT_ID'),
		username: requireEnv('KEYCLOAK_USER_NAME'),
		password: requireEnv('KEYCLOAK_PASSWORD'),
		keycloakVerifySsl: readBooleanEnv('KEYCLOAK_VERIFY_SSL', true)
	});
	console.log('Keycloak authentication succeeded; access token acquired.');
	try {
		const metadata: Metadata = buildAuthMetadata(provider);
		const target: string = `${requireEnv('ONDEWO_HOST')}:${requireEnv('ONDEWO_PORT')}`;
		const channelCredentials: ChannelCredentials = buildChannelCredentials();
		console.log(`Connecting to ONDEWO T2S server at ${target}.`);
		const client: SynthesizeUnaryClient = createClient(target, channelCredentials);
		const pipelineId: string = requireEnv('ONDEWO_T2S_PIPELINE_ID');
		const request: SynthesizeRequest = buildSynthesizeRequest({
			text: 'Hello from the ONDEWO T2S NodeJS client.',
			t2sPipelineId: pipelineId
		});
		console.log(`Sending Synthesize RPC (t2sPipelineId=${pipelineId}).`);
		const response: SynthesizeResponse = await synthesizeUnary(client, request, metadata);
		console.log(
			`DONE: synthesized ${response.getAudio_asU8().length} bytes of audio ` +
				`(uuid=${response.getAudioUuid()}, sampleRate=${response.getSampleRate()}).`
		);
	} finally {
		provider.stop();
	}
}

/* c8 ignore start -- direct-run entrypoint: the spec imports this module, so `require.main === module` is false under the test runner, and `process.exit(1)` cannot run in-process */
if (typeof require !== 'undefined' && require.main === module) {
	main().catch((reason: unknown): void => {
		const serviceError: ServiceError | undefined = asServiceError(reason);
		if (serviceError !== undefined) {
			console.error(`ERROR: T2S Synthesize RPC failed (code=${serviceError.code}, details=${serviceError.details}).`);
		} else {
			console.error('ERROR: T2S synthesize example failed:', reason);
		}
		process.exit(1);
	});
}
/* c8 ignore stop */
