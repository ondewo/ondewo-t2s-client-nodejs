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
// directly (`node --import tsx examples/synthesizeExample.ts`).

import { credentials, Metadata } from '@grpc/grpc-js';
import type { ServiceError } from '@grpc/grpc-js';

import { SynthesizeRequest, RequestConfig, SynthesizeResponse } from '../api/ondewo/t2s/text-to-speech_pb';
import { Text2SpeechClient } from '../api/ondewo/t2s/text-to-speech_grpc_pb';
import { login, OfflineTokenProvider } from '../api/auth/offlineTokenProvider';

/**
 * Anything that can supply gRPC authorization headers, e.g. the package's
 * {@link OfflineTokenProvider}. Kept structural so a stub can be injected in
 * tests without a live Keycloak.
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
 * Runs the full example against a real T2S server. All endpoints and credentials
 * are read from environment variables so nothing sensitive is hard-coded.
 *
 * @returns Resolves once the audio has been synthesized and logged.
 */
export async function main(): Promise<void> {
	const provider: OfflineTokenProvider = await login({
		keycloakUrl: process.env.ONDEWO_T2S_KEYCLOAK_URL ?? 'https://keycloak.example.com/auth',
		realm: process.env.ONDEWO_T2S_KEYCLOAK_REALM ?? 'ondewo',
		clientId: process.env.ONDEWO_T2S_KEYCLOAK_CLIENT_ID ?? 'ondewo-nlu-cai-sdk-public',
		username: process.env.ONDEWO_T2S_USER_NAME ?? 'tech-user@example.com',
		password: process.env.ONDEWO_T2S_PASSWORD ?? 'change-me'
	});
	try {
		const metadata: Metadata = buildAuthMetadata(provider);
		const target: string = process.env.ONDEWO_T2S_GRPC_TARGET ?? 'localhost:50055';
		const client: Text2SpeechClient = new Text2SpeechClient(target, credentials.createInsecure());
		const request: SynthesizeRequest = buildSynthesizeRequest({
			text: 'Hello from the ONDEWO T2S NodeJS client.',
			t2sPipelineId: process.env.ONDEWO_T2S_PIPELINE_ID ?? 'default_pipeline'
		});
		const response: SynthesizeResponse = await synthesizeUnary(client, request, metadata);
		console.log(
			`Synthesized ${response.getAudio_asU8().length} bytes of audio ` +
				`(uuid=${response.getAudioUuid()}, sampleRate=${response.getSampleRate()}).`
		);
	} finally {
		provider.stop();
	}
}

if (typeof require !== 'undefined' && require.main === module) {
	main().catch((reason: unknown): void => {
		console.error('T2S synthesize example failed:', reason);
		process.exitCode = 1;
	});
}
