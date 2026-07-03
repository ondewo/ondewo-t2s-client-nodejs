// Offline unit tests for the T2S synthesize example. No live server and no
// Keycloak: the gRPC client is a hand-written fake and the token source is a
// plain stub. Run with: node --import tsx --test examples/synthesizeExample.spec.ts
// (or the repo's `npm test` / `make test_examples`).

import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import { Metadata, ServiceError, status } from '@grpc/grpc-js';

import { SynthesizeRequest, RequestConfig, SynthesizeResponse } from '../api/ondewo/t2s/text-to-speech_pb';
import {
	AuthorizationMetadataSource,
	SynthesizeUnaryClient,
	buildAuthMetadata,
	buildSynthesizeRequest,
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
	it('sets the Authorization header from the token source', () => {
		const source: AuthorizationMetadataSource = {
			getAuthorizationMetadata(): Record<string, string> {
				return { Authorization: 'Bearer token-1' };
			}
		};

		const metadata: Metadata = buildAuthMetadata(source);

		assert.deepEqual(metadata.get('Authorization'), ['Bearer token-1']);
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
		metadata.set('Authorization', 'Bearer token-1');

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
