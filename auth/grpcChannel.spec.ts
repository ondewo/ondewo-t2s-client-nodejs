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

// Tests of auth/grpcChannel.ts: the TLS / mutual-TLS contract shared by every ONDEWO SDK, with real
// handshakes against an in-process @grpc/grpc-js server. The test PKI (two unrelated CAs, a server
// certificate for localhost / 127.0.0.1 / ::1, client certificates) is generated with the openssl
// CLI into a temporary directory at test time and deleted afterwards; no key is ever committed.

import { strict as assert } from 'assert';
import { execFileSync } from 'child_process';
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'fs';
import * as net from 'net';
import { tmpdir } from 'os';
import { join } from 'path';
import { inspect } from 'util';
import { after, before, describe, it, mock, Mock } from 'node:test';

import * as grpc from '@grpc/grpc-js';

import {
	createChannelCredentials,
	createGrpcClient,
	DEFAULT_GRPC_CHANNEL_OPTIONS,
	GrpcChannelLogger,
	GrpcClientConfig,
	GrpcClientConfigFields,
	hostAndPort,
	MAX_MESSAGE_LENGTH,
	REDACTED
} from './grpcChannel';

/** PEMs of the test PKI, read back from the openssl output. */
interface TestPki {
	caCert: string;
	serverCert: string;
	serverKey: string;
	clientCert: string;
	clientKey: string;
	otherCaCert: string;
	otherClientCert: string;
	otherClientKey: string;
}

/** Outcome of one unary call: `null` on success, the gRPC error otherwise. */
type CallOutcome = grpc.ServiceError | null;

/** Recording logger. */
interface RecordingLogger extends GrpcChannelLogger {
	messages: string[];
}

const PEM_MARKER: string = '-----BEGIN';
const NOT_REALLY_PEM: string = '-----BEGIN CERTIFICATE-----\nnot base64\n-----END CERTIFICATE-----\n';
const PING_PATH: string = '/ondewo.test.TlsProbe/Ping';

/**
 * Generate the test PKI with the openssl CLI.
 *
 * @param dir - Scratch directory for the key and certificate files.
 * @returns The PEM contents.
 */
function generatePki(dir: string): TestPki {
	const openssl: (...args: string[]) => void = (...args: string[]): void => {
		execFileSync('openssl', args, { cwd: dir, stdio: 'pipe' });
	};
	const newKeyArgs: string[] = ['-newkey', 'ec', '-pkeyopt', 'ec_paramgen_curve:prime256v1', '-nodes'];
	const makeCa: (name: string) => void = (name: string): void => {
		openssl(
			'req',
			'-x509',
			...newKeyArgs,
			'-days',
			'2',
			'-subj',
			`/CN=${name}`,
			'-keyout',
			`${name}.key`,
			'-out',
			`${name}.pem`
		);
	};
	const makeLeaf: (name: string, ca: string, extensions: string) => void = (
		name: string,
		ca: string,
		extensions: string
	): void => {
		writeFileSync(join(dir, `${name}.ext`), extensions);
		openssl('req', ...newKeyArgs, '-subj', `/CN=${name}`, '-keyout', `${name}.key`, '-out', `${name}.csr`);
		openssl(
			'x509',
			'-req',
			'-in',
			`${name}.csr`,
			'-CA',
			`${ca}.pem`,
			'-CAkey',
			`${ca}.key`,
			'-CAcreateserial',
			'-days',
			'2',
			'-extfile',
			`${name}.ext`,
			'-out',
			`${name}.pem`
		);
	};
	makeCa('ca');
	makeCa('otherca');
	makeLeaf('server', 'ca', 'subjectAltName=DNS:localhost,IP:127.0.0.1,IP:::1\nextendedKeyUsage=serverAuth\n');
	makeLeaf('client', 'ca', 'extendedKeyUsage=clientAuth\n');
	makeLeaf('otherclient', 'otherca', 'extendedKeyUsage=clientAuth\n');
	const read: (file: string) => string = (file: string): string => readFileSync(join(dir, file), 'utf8');
	return {
		caCert: read('ca.pem'),
		serverCert: read('server.pem'),
		serverKey: read('server.key'),
		clientCert: read('client.pem'),
		clientKey: read('client.key'),
		otherCaCert: read('otherca.pem'),
		otherClientCert: read('otherclient.pem'),
		otherClientKey: read('otherclient.key')
	};
}

/**
 * Start an in-process gRPC server answering `Ping`.
 *
 * @param host - Address to bind (`127.0.0.1`, `[::1]`).
 * @param credentials - Server credentials (TLS, mutual TLS or insecure).
 * @returns The server and its port.
 */
async function startServer(
	host: string,
	credentials: grpc.ServerCredentials
): Promise<{ server: grpc.Server; port: number }> {
	const server: grpc.Server = new grpc.Server();
	const identity: (value: Buffer) => Buffer = (value: Buffer): Buffer => value;
	server.addService(
		{
			Ping: {
				path: PING_PATH,
				requestStream: false,
				responseStream: false,
				requestSerialize: identity,
				requestDeserialize: identity,
				responseSerialize: identity,
				responseDeserialize: identity
			}
		},
		{
			Ping: (_call: grpc.ServerUnaryCall<Buffer, Buffer>, done: grpc.sendUnaryData<Buffer>): void => {
				done(null, Buffer.from('pong'));
			}
		}
	);
	const port: number = await new Promise<number>(
		(resolve: (value: number) => void, reject: (reason: Error) => void): void => {
			server.bindAsync(`${host}:0`, credentials, (error: Error | null, boundPort: number): void => {
				if (error !== null) {
					reject(error);
					return;
				}
				resolve(boundPort);
			});
		}
	);
	return { server, port };
}

/**
 * Issue one `Ping` (an RPC reaching the server proves the handshake).
 *
 * @param client - The client to call on.
 * @returns `null` on success, the gRPC error otherwise.
 */
function ping(client: grpc.Client): Promise<CallOutcome> {
	const identity: (value: Buffer) => Buffer = (value: Buffer): Buffer => value;
	return new Promise<CallOutcome>((resolve: (outcome: CallOutcome) => void): void => {
		client.makeUnaryRequest(
			PING_PATH,
			identity,
			identity,
			Buffer.alloc(0),
			{ deadline: Date.now() + 10000 },
			(error: grpc.ServiceError | null): void => resolve(error)
		);
	});
}

/**
 * Build a client with the helper, ping once, close it.
 *
 * @param fields - The configuration.
 * @param useSecureChannel - Secure (default) or plaintext.
 * @param channelOptions - Extra channel options.
 * @returns The outcome of the ping.
 */
async function pingWith(
	fields: GrpcClientConfigFields,
	useSecureChannel: boolean = true,
	channelOptions: grpc.ClientOptions = {}
): Promise<CallOutcome> {
	const client: grpc.Client = createGrpcClient(grpc.Client, fields, {
		useSecureChannel,
		channelOptions,
		logger: recordingLogger()
	});
	try {
		return await ping(client);
	} finally {
		client.close();
	}
}

/**
 * @returns A logger that records every warning.
 */
function recordingLogger(): RecordingLogger {
	const messages: string[] = [];
	return { messages, warn: (message: string): number => messages.push(message) };
}

/**
 * @param text - PEM text with LF line endings.
 * @returns The same PEM with CRLF line endings.
 */
function toCrlf(text: string): string {
	return text.replace(/\r?\n/g, '\r\n');
}

/**
 * Assert that a text renders no PEM, no key and no other secret of the test PKI.
 *
 * @param text - Error message or rendering.
 * @param pki - The test PKI.
 */
function assertNoSecrets(text: string, pki: TestPki): void {
	assert.ok(!text.includes(PEM_MARKER), `must not contain a PEM: ${text}`);
	for (const pem of [pki.clientKey, pki.clientCert, pki.caCert]) {
		const body: string = pem.split('\n')[1];
		assert.ok(!text.includes(body), 'must not contain PEM content');
	}
}

/**
 * Capture the error a function throws.
 *
 * @param action - The function expected to throw.
 * @returns The thrown error.
 */
function thrownBy(action: () => unknown): Error {
	try {
		action();
	} catch (error: unknown) {
		assert.ok(error instanceof Error);
		return error;
	}
	assert.fail('expected an error');
}

describe('grpcChannel', () => {
	let pkiDir: string;
	let pki: TestPki;

	before(() => {
		pkiDir = mkdtempSync(join(tmpdir(), 'ondewo-tls-test-'));
		pki = generatePki(pkiDir);
	});

	after(() => {
		rmSync(pkiDir, { recursive: true, force: true });
	});

	describe('hostAndPort', () => {
		it('joins host names and IPv4 addresses as they are', () => {
			assert.equal(hostAndPort('localhost', 50051), 'localhost:50051');
			assert.equal(hostAndPort('10.0.0.5', '50051'), '10.0.0.5:50051');
		});

		it('brackets bare IPv6 literals', () => {
			assert.equal(hostAndPort('::1', 50051), '[::1]:50051');
			assert.equal(hostAndPort('2001:db8::7', '443'), '[2001:db8::7]:443');
		});

		it('leaves bracketed hosts and scheme targets alone', () => {
			assert.equal(hostAndPort('[::1]', 50051), '[::1]:50051');
			assert.equal(hostAndPort('ipv6:[::1]', 50051), 'ipv6:[::1]:50051');
			assert.equal(hostAndPort('dns:nlu.example.com', 443), 'dns:nlu.example.com:443');
		});
	});

	describe('GrpcClientConfig', () => {
		it('accepts no certificates, a CA only, and a full identity', () => {
			assert.equal(new GrpcClientConfig({ host: 'localhost', port: 1 }).hostAndPort, 'localhost:1');
			assert.equal(new GrpcClientConfig({ host: '::1', port: 1, grpcCert: pki.caCert }).hostAndPort, '[::1]:1');
			const config: GrpcClientConfig = new GrpcClientConfig({
				host: 'localhost',
				port: '50051',
				grpcCert: Buffer.from(pki.caCert),
				grpcClientCert: pki.clientCert,
				grpcClientKey: Buffer.from(pki.clientKey)
			});
			assert.ok(Object.isFrozen(config));
		});

		for (const field of ['grpcCert', 'grpcClientCert', 'grpcClientKey'] as const) {
			it(`refuses a file path in ${field} instead of PEM content`, () => {
				const fields: GrpcClientConfigFields = {
					host: 'localhost',
					port: 50051,
					grpcCert: pki.caCert,
					grpcClientCert: pki.clientCert,
					grpcClientKey: pki.clientKey,
					[field]: 'certs/some-file.pem'
				};
				for (const build of [
					(): unknown => new GrpcClientConfig(fields),
					(): unknown => createChannelCredentials(fields)
				]) {
					const error: Error = thrownBy(build);
					assert.match(error.message, new RegExp(`localhost:50051: ${field} is not PEM content`));
					assert.ok(!error.message.includes('certs/some-file.pem'));
				}
			});
		}

		it('treats empty strings on both identity fields as no identity', () => {
			assert.doesNotThrow(() => new GrpcClientConfig({ host: 'h', port: 1, grpcClientCert: '', grpcClientKey: '' }));
		});

		for (const [name, half] of [
			['certificate only', { grpcClientCert: 'cert' }],
			['key only', { grpcClientKey: 'key' }],
			['certificate with an empty key', { grpcClientKey: Buffer.alloc(0) }]
		] as const) {
			it(`refuses half a client identity (${name}) without rendering it`, () => {
				const fields: GrpcClientConfigFields = {
					host: 'nlu.example.com',
					port: 443,
					...(name === 'certificate with an empty key' ? { grpcClientCert: pki.clientCert } : {}),
					...half
				};
				const error: Error = thrownBy(() => new GrpcClientConfig(fields));
				assert.match(
					error.message,
					/GrpcClientConfig for nlu\.example\.com:443 has only one of grpcClientCert and grpcClientKey/
				);
				assertNoSecrets(error.message, pki);
			});
		}

		it('refuses a missing host, an empty port and a PEM that is not text or bytes', () => {
			assert.throws(() => new GrpcClientConfig({ host: '', port: 1 }), /host must be a non-empty string/);
			assert.throws(
				() => new GrpcClientConfig({ host: 1 as unknown as string, port: 1 }),
				/host must be a non-empty string/
			);
			assert.throws(() => new GrpcClientConfig({ host: 'h', port: '' }), /port must be a non-empty string or a number/);
			assert.throws(
				() => new GrpcClientConfig({ host: 'h', port: {} as unknown as number }),
				/port must be a non-empty string or a number/
			);
			assert.throws(
				() => new GrpcClientConfig({ host: 'h', port: 1, grpcClientKey: 42 as unknown as string }),
				/grpcClientKey must be PEM content \(string or Buffer\), not a number/
			);
		});

		it('redacts the client key in toString, util.inspect, console formatting and JSON.stringify', () => {
			const config: GrpcClientConfig = new GrpcClientConfig({
				host: 'localhost',
				port: 50051,
				grpcCert: pki.caCert,
				grpcClientCert: Buffer.from(pki.clientCert),
				grpcClientKey: pki.clientKey
			});
			const text: string = config.toString();
			assert.equal(
				text,
				`GrpcClientConfig(host=localhost, port=50051, grpcCert=<set>, grpcClientCert=<set>, grpcClientKey=${REDACTED})`
			);
			assert.equal(inspect(config), text);
			assert.equal(`${String(config)}`, text);
			assertNoSecrets(text, pki);

			const json: Record<string, unknown> = JSON.parse(JSON.stringify(config)) as Record<string, unknown>;
			assert.equal(json.grpcClientKey, REDACTED);
			assert.equal(json.grpcCert, pki.caCert);
			assert.equal(json.grpcClientCert, pki.clientCert);
			assert.ok(!JSON.stringify(config).includes(pki.clientKey.split('\n')[1]));
		});

		it('renders an empty key as empty and an unset key as absent', () => {
			const empty: GrpcClientConfig = new GrpcClientConfig({
				host: 'h',
				port: 1,
				grpcClientCert: '',
				grpcClientKey: ''
			});
			assert.equal(
				empty.toString(),
				'GrpcClientConfig(host=h, port=1, grpcCert=<unset>, grpcClientCert=<unset>, grpcClientKey=)'
			);
			assert.equal(empty.toJSON().grpcClientKey, '');
			const unset: GrpcClientConfig = new GrpcClientConfig({ host: 'h', port: 1 });
			assert.equal(unset.toJSON().grpcClientKey, undefined);
			assert.equal(
				unset.toString(),
				'GrpcClientConfig(host=h, port=1, grpcCert=<unset>, grpcClientCert=<unset>, grpcClientKey=)'
			);
			assert.equal(JSON.stringify(unset), '{"host":"h","port":1}');
		});
	});

	describe('createChannelCredentials', () => {
		it('refuses half an identity BEFORE gRPC sees it, also for plain objects', (context: { mock: typeof mock }) => {
			const createSsl: Mock<typeof grpc.credentials.createSsl> = context.mock.method(grpc.credentials, 'createSsl');
			for (const half of [{ grpcClientCert: pki.clientCert }, { grpcClientKey: pki.clientKey }]) {
				const error: Error = thrownBy(() => createChannelCredentials({ host: '::1', port: 7, ...half }));
				assert.match(
					error.message,
					/createChannelCredentials for \[::1\]:7 has only one of grpcClientCert and grpcClientKey/
				);
				assertNoSecrets(error.message, pki);
			}
			assert.equal(createSsl.mock.callCount(), 0);
		});

		it('passes no identity (not empty buffers) for empty strings, and the system roots for an empty CA', (context: {
			mock: typeof mock;
		}) => {
			const createSsl: Mock<typeof grpc.credentials.createSsl> = context.mock.method(grpc.credentials, 'createSsl');
			createChannelCredentials({ host: 'h', port: 1, grpcCert: '', grpcClientCert: '', grpcClientKey: '' });
			createChannelCredentials({ host: 'h', port: 1 });
			assert.deepEqual(createSsl.mock.calls[0].arguments, [null, null, null]);
			assert.deepEqual(createSsl.mock.calls[1].arguments, [null, null, null]);
		});

		it('hands CA, key and certificate to gRPC as buffers', (context: { mock: typeof mock }) => {
			const createSsl: Mock<typeof grpc.credentials.createSsl> = context.mock.method(grpc.credentials, 'createSsl');
			createChannelCredentials(
				{
					host: 'h',
					port: 1,
					grpcCert: pki.caCert,
					grpcClientCert: pki.clientCert,
					grpcClientKey: Buffer.from(pki.clientKey)
				},
				{ useSecureChannel: true }
			);
			const [root, key, chain] = createSsl.mock.calls[0].arguments as Buffer[];
			assert.equal(root.toString(), pki.caCert);
			assert.equal(key.toString(), pki.clientKey);
			assert.equal(chain.toString(), pki.clientCert);
		});

		it('refuses an insecure channel with a client identity instead of dropping it', () => {
			const logger: RecordingLogger = recordingLogger();
			const error: Error = thrownBy(() =>
				createChannelCredentials(
					{ host: 'nlu.example.com', port: 50051, grpcClientCert: pki.clientCert, grpcClientKey: pki.clientKey },
					{ useSecureChannel: false, logger }
				)
			);
			assert.match(error.message, /nlu\.example\.com:50051: useSecureChannel is false but a client identity/);
			assertNoSecrets(error.message, pki);
			assert.deepEqual(logger.messages, []);
		});

		it('warns about an insecure channel, naming host:port, through the given logger', () => {
			const logger: RecordingLogger = recordingLogger();
			createChannelCredentials({ host: '::1', port: 50051, grpcCert: pki.caCert }, { useSecureChannel: false, logger });
			assert.deepEqual(logger.messages, [
				'Insecure gRPC channel to [::1]:50051: traffic is NOT encrypted (useSecureChannel=false).'
			]);
		});

		it('warns through console.warn when no logger is given', (context: { mock: typeof mock }) => {
			const warn: Mock<typeof console.warn> = context.mock.method(console, 'warn', (): void => undefined);
			createChannelCredentials({ host: 'localhost', port: 1 }, { useSecureChannel: false });
			assert.equal(warn.mock.callCount(), 1);
			assert.match(String(warn.mock.calls[0].arguments[0]), /Insecure gRPC channel to localhost:1/);
		});

		it('reports a PEM gRPC rejects with the target and the TLS reason, never the PEM', () => {
			const mismatched: Error = thrownBy(() =>
				createChannelCredentials({
					host: 'localhost',
					port: 1,
					grpcCert: pki.caCert,
					grpcClientCert: pki.clientCert,
					grpcClientKey: pki.otherClientKey
				})
			);
			assert.match(mismatched.message, /^createChannelCredentials for localhost:1: gRPC rejected the TLS material: /);
			assertNoSecrets(mismatched.message, pki);
			const garbage: Error = thrownBy(() =>
				createChannelCredentials({
					host: 'localhost',
					port: 1,
					grpcClientCert: NOT_REALLY_PEM,
					grpcClientKey: NOT_REALLY_PEM
				})
			);
			assert.match(garbage.message, /gRPC rejected the TLS material/);
		});

		it('reports a non-Error thrown by gRPC as text', (context: { mock: typeof mock }) => {
			context.mock.method(grpc.credentials, 'createSsl', (): never => {
				throw 'boom'; // eslint-disable-line @typescript-eslint/only-throw-error
			});
			assert.throws(() => createChannelCredentials({ host: 'h', port: 1 }), /gRPC rejected the TLS material: boom$/);
		});

		it('validates the shape of a plain object', () => {
			assert.throws(() => createChannelCredentials({ host: '', port: 1 }), /createChannelCredentials: host must be/);
		});
	});

	describe('createGrpcClient', () => {
		it('applies the default channel options under the caller options', () => {
			const seen: unknown[][] = [];
			class FakeClient {
				public constructor(...args: unknown[]) {
					seen.push(args);
				}
			}
			const credentials: grpc.ChannelCredentials = grpc.credentials.createInsecure();
			createGrpcClient(
				FakeClient,
				{ host: '::1', port: 9 },
				{ credentials, channelOptions: { 'grpc.max_reconnect_backoff_ms': 1 } }
			);
			createGrpcClient(FakeClient, { host: 'h', port: 9 }, { useSecureChannel: false, logger: recordingLogger() });
			assert.equal(seen[0][0], '[::1]:9');
			assert.equal(seen[0][1], credentials);
			assert.deepEqual(seen[0][2], { ...DEFAULT_GRPC_CHANNEL_OPTIONS, 'grpc.max_reconnect_backoff_ms': 1 });
			assert.deepEqual(seen[1][2], DEFAULT_GRPC_CHANNEL_OPTIONS);
		});

		it('pins the default channel options', () => {
			assert.deepEqual(DEFAULT_GRPC_CHANNEL_OPTIONS, {
				'grpc.max_send_message_length': 2147483647,
				'grpc.max_receive_message_length': 2147483647,
				'grpc.max_reconnect_backoff_ms': 5000,
				'grpc.keepalive_timeout_ms': 20000,
				'grpc.keepalive_permit_without_calls': 0
			});
			assert.equal(MAX_MESSAGE_LENGTH, 2147483647);
			// Keepalive pings stay off by default: see DEFAULT_GRPC_CHANNEL_OPTIONS for why.
			assert.ok(!('grpc.keepalive_time_ms' in DEFAULT_GRPC_CHANNEL_OPTIONS));
			assert.ok(Object.isFrozen(DEFAULT_GRPC_CHANNEL_OPTIONS));
		});

		it('validates the configuration before building credentials', () => {
			assert.throws(() => createGrpcClient(grpc.Client, { host: 'h', port: '' }), /createGrpcClient for host h: port/);
		});

		it('builds secure credentials by default', (context: { mock: typeof mock }) => {
			const createSsl: Mock<typeof grpc.credentials.createSsl> = context.mock.method(grpc.credentials, 'createSsl');
			createGrpcClient(grpc.Client, new GrpcClientConfig({ host: 'localhost', port: 1 })).close();
			assert.equal(createSsl.mock.callCount(), 1);
		});
	});

	describe('real handshakes', () => {
		let tlsServer: { server: grpc.Server; port: number };
		let mtlsServer: { server: grpc.Server; port: number };
		let insecureServer: { server: grpc.Server; port: number };

		before(async () => {
			const keyCertPairs: grpc.KeyCertPair[] = [
				{ private_key: Buffer.from(pki.serverKey), cert_chain: Buffer.from(pki.serverCert) }
			];
			tlsServer = await startServer('127.0.0.1', grpc.ServerCredentials.createSsl(null, keyCertPairs, false));
			mtlsServer = await startServer(
				'127.0.0.1',
				grpc.ServerCredentials.createSsl(Buffer.from(pki.caCert), keyCertPairs, true)
			);
			insecureServer = await startServer('127.0.0.1', grpc.ServerCredentials.createInsecure());
		});

		after(() => {
			for (const running of [tlsServer, mtlsServer, insecureServer]) {
				running.server.forceShutdown();
			}
		});

		it('plain TLS with a custom CA', async () => {
			assert.equal(await pingWith({ host: '127.0.0.1', port: tlsServer.port, grpcCert: pki.caCert }), null);
		});

		it('plain TLS with empty strings for the client identity', async () => {
			const outcome: CallOutcome = await pingWith({
				host: 'localhost',
				port: tlsServer.port,
				grpcCert: pki.caCert,
				grpcClientCert: '',
				grpcClientKey: ''
			});
			assert.equal(outcome, null);
		});

		it('mutual TLS', async () => {
			const config: GrpcClientConfig = new GrpcClientConfig({
				host: '127.0.0.1',
				port: mtlsServer.port,
				grpcCert: pki.caCert,
				grpcClientCert: pki.clientCert,
				grpcClientKey: pki.clientKey
			});
			assert.equal(await pingWith(config), null);
		});

		it('mutual TLS with CRLF PEMs', async () => {
			const outcome: CallOutcome = await pingWith({
				host: '127.0.0.1',
				port: mtlsServer.port,
				grpcCert: toCrlf(pki.caCert),
				grpcClientCert: toCrlf(pki.clientCert),
				grpcClientKey: Buffer.from(toCrlf(pki.clientKey))
			});
			assert.equal(outcome, null);
		});

		it('a server that requires a client certificate rejects a client without one', async () => {
			const outcome: CallOutcome = await pingWith({ host: '127.0.0.1', port: mtlsServer.port, grpcCert: pki.caCert });
			assert.equal(outcome?.code, grpc.status.UNAVAILABLE);
		});

		it('a client identity signed by an unrelated CA is rejected', async () => {
			const outcome: CallOutcome = await pingWith({
				host: '127.0.0.1',
				port: mtlsServer.port,
				grpcCert: pki.caCert,
				grpcClientCert: pki.otherClientCert,
				grpcClientKey: pki.otherClientKey
			});
			assert.equal(outcome?.code, grpc.status.UNAVAILABLE);
		});

		it('the wrong CA fails the handshake with UNAVAILABLE instead of crashing', async () => {
			const outcome: CallOutcome = await pingWith({
				host: '127.0.0.1',
				port: tlsServer.port,
				grpcCert: pki.otherCaCert
			});
			assert.equal(outcome?.code, grpc.status.UNAVAILABLE);
			assertNoSecrets(outcome?.details ?? '', pki);
		});

		it('without grpcCert the system trust store is used (and does not trust the test CA)', async () => {
			const outcome: CallOutcome = await pingWith({ host: '127.0.0.1', port: tlsServer.port });
			assert.equal(outcome?.code, grpc.status.UNAVAILABLE);
		});

		it('an insecure channel reaches an insecure server', async () => {
			assert.equal(await pingWith({ host: '127.0.0.1', port: insecureServer.port }, false), null);
		});

		it('mutual TLS over IPv6 [::1] (skipped when the host has no IPv6 loopback)', async (context: {
			skip: (message: string) => void;
		}) => {
			let ipv6Server: { server: grpc.Server; port: number };
			try {
				ipv6Server = await startServer(
					'[::1]',
					grpc.ServerCredentials.createSsl(
						Buffer.from(pki.caCert),
						[{ private_key: Buffer.from(pki.serverKey), cert_chain: Buffer.from(pki.serverCert) }],
						true
					)
				);
			} catch {
				context.skip('no IPv6 loopback');
				return;
			}
			try {
				// The target is bracketed ([::1]:port). The certificate is checked against its DNS name:
				// some Node releases (22.23, 24.18) reject an IPv6 literal against an IP SAN in
				// tls.checkServerIdentity, which is a Node issue, not part of what this test pins.
				const outcome: CallOutcome = await pingWith(
					{
						host: '::1',
						port: ipv6Server.port,
						grpcCert: pki.caCert,
						grpcClientCert: pki.clientCert,
						grpcClientKey: pki.clientKey
					},
					true,
					{ 'grpc.ssl_target_name_override': 'localhost' }
				);
				assert.equal(outcome, null);
			} finally {
				ipv6Server.server.forceShutdown();
			}
		});

		it('clients built with the same credentials share one connection', async () => {
			let connections: number = 0;
			const proxy: net.Server = net.createServer((socket: net.Socket): void => {
				connections += 1;
				const upstream: net.Socket = net.connect(mtlsServer.port, '127.0.0.1');
				socket.pipe(upstream).pipe(socket);
				socket.on('error', (): void => {
					upstream.destroy();
				});
				upstream.on('error', (): void => {
					socket.destroy();
				});
			});
			await new Promise<void>((resolve: () => void): void => {
				proxy.listen(0, '127.0.0.1', resolve);
			});
			const config: GrpcClientConfig = new GrpcClientConfig({
				host: '127.0.0.1',
				port: (proxy.address() as net.AddressInfo).port,
				grpcCert: pki.caCert,
				grpcClientCert: pki.clientCert,
				grpcClientKey: pki.clientKey
			});
			const credentials: grpc.ChannelCredentials = createChannelCredentials(config);
			const first: grpc.Client = createGrpcClient(grpc.Client, config, { credentials });
			const second: grpc.Client = createGrpcClient(grpc.Client, config, { credentials });
			try {
				assert.equal(await ping(first), null);
				assert.equal(await ping(second), null);
				assert.equal(connections, 1);
			} finally {
				first.close();
				second.close();
				proxy.close();
			}
		});
	});
});
