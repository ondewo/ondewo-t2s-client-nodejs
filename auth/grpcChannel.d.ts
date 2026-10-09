import { inspect } from 'util';
import * as grpc from '@grpc/grpc-js';
/** PEM content, as text or bytes. */
export type PemContent = string | Buffer;
/** What the redacted renderings show in place of a non-empty secret. */
export declare const REDACTED: string;
/** Largest message size gRPC accepts (2**31 - 1 bytes), used for both directions. */
export declare const MAX_MESSAGE_LENGTH: number;
/**
 * Channel options every channel built here starts from; caller options override them key by key.
 *
 * The same values as the Python SDKs, as far as `@grpc/grpc-js` exposes them:
 * - `grpc.max_reconnect_backoff_ms` 5000 (gRPC default 120 s): a client reconnects within seconds
 *   once the server is back instead of waiting up to two minutes.
 * - `grpc.keepalive_timeout_ms` 20000 and `grpc.keepalive_permit_without_calls` 0: in grpc-js the
 *   keepalive timeout IS the ping-ack timeout (Python's `grpc.http2.ping_timeout_ms`). They only take
 *   effect once a caller sets `grpc.keepalive_time_ms`.
 *
 * `grpc.keepalive_time_ms` is deliberately NOT set: grpc-js has no `grpc.http2.max_pings_without_data`,
 * so it keeps pinging a silent stream, and a grpc-core server (every ONDEWO server) answers with
 * GOAWAY `too_many_pings`, failing the call with RESOURCE_EXHAUSTED (measured: after 50 s at a 10 s
 * keepalive, 150 s at 30 s). Set it only for servers that allow it (`grpc.http2.min_ping_interval_without_data_ms`).
 */
export declare const DEFAULT_GRPC_CHANNEL_OPTIONS: Readonly<grpc.ChannelOptions>;
/** Connection and certificate fields of a gRPC client configuration. */
export interface GrpcClientConfigFields {
    /** Server host name or IP address; a bare IPv6 literal is bracketed by {@link hostAndPort}. */
    host: string;
    /** Server port. */
    port: string | number;
    /** PEM content of the CA (or server certificate) to trust; empty/unset = the system trust store. */
    grpcCert?: PemContent;
    /** PEM content of the client certificate chain for mutual TLS; set together with `grpcClientKey`. */
    grpcClientCert?: PemContent;
    /** PEM content of the client private key for mutual TLS; set together with `grpcClientCert`. */
    grpcClientKey?: PemContent;
}
/** Destination of the insecure-channel warning; `console` satisfies it. */
export interface GrpcChannelLogger {
    /**
     * Log a warning.
     *
     * @param message - The warning text.
     */
    warn(message: string): void;
}
/** Options of {@link createChannelCredentials}. */
export interface ChannelCredentialsOptions {
    /** `true` (default) for TLS / mutual TLS, `false` for a plaintext channel. */
    useSecureChannel?: boolean;
    /** Receives the insecure-channel warning; defaults to `console`. */
    logger?: GrpcChannelLogger;
}
/** Options of {@link createGrpcClient}. */
export interface CreateGrpcClientOptions extends ChannelCredentialsOptions {
    /** Channel options, applied over {@link DEFAULT_GRPC_CHANNEL_OPTIONS}. */
    channelOptions?: grpc.ClientOptions;
    /**
     * Credentials from {@link createChannelCredentials} to reuse. Clients built with the SAME credentials
     * object, target and options share one connection; when given, `useSecureChannel` and `logger`
     * are not consulted.
     */
    credentials?: grpc.ChannelCredentials;
}
/** Constructor of a generated gRPC client (every `*Client` class in `api/`, or `grpc.Client`). */
export type GrpcClientConstructor<T> = new (address: string, credentials: grpc.ChannelCredentials, options?: grpc.ClientOptions) => T;
/**
 * Combine host and port into a gRPC target, bracketing a bare IPv6 literal (`::1` becomes `[::1]:50051`).
 * A host that is already bracketed or carries a scheme (`ipv6:[::1]`, `dns:...`, `unix:...`) is left as it is.
 *
 * @param host - Host name or IP address.
 * @param port - Port.
 * @returns The `host:port` target.
 */
export declare function hostAndPort(host: string, port: string | number): string;
/**
 * Connection settings of an ONDEWO gRPC client. Validated on construction (shape and the
 * both-or-neither client identity), immutable, and redacting `grpcClientKey` in `toString()`,
 * `util.inspect()` / `console.log()` and `JSON.stringify()`. There is deliberately no serialization
 * that writes the key: keep PEMs in files or a secret store and pass their content in.
 */
export declare class GrpcClientConfig implements GrpcClientConfigFields {
    readonly host: string;
    readonly port: string | number;
    readonly grpcCert?: PemContent;
    readonly grpcClientCert?: PemContent;
    readonly grpcClientKey?: PemContent;
    /**
     * @param fields - Host, port and the optional PEM contents.
     * @throws {TypeError} If a field has the wrong type (see {@link GrpcClientConfigFields}).
     * @throws {Error} If exactly one of `grpcClientCert` and `grpcClientKey` is set, or a PEM field holds no PEM block.
     */
    constructor(fields: GrpcClientConfigFields);
    /**
     * The gRPC target, see {@link hostAndPort}.
     *
     * @returns `host:port`, with a bare IPv6 literal bracketed.
     */
    get hostAndPort(): string;
    /**
     * Loggable form: certificates as their text, the client key as {@link REDACTED} (empty stays empty).
     *
     * @returns A plain object safe to log or `JSON.stringify`.
     */
    toJSON(): Record<string, string | number | undefined>;
    /**
     * Short, redacted description: target and which certificates are set, no PEM content.
     *
     * @returns For example `GrpcClientConfig(host=localhost, port=50051, grpcCert=<set>, grpcClientCert=<set>, grpcClientKey=***REDACTED***)`.
     */
    toString(): string;
    /**
     * `util.inspect()` / `console.log()` rendering: the same as {@link toString}.
     *
     * @returns The redacted description.
     */
    [inspect.custom](): string;
}
/**
 * Build the channel credentials for a configuration.
 *
 * Secure (default): trusts `grpcCert` if set, the system trust store otherwise, and presents the
 * client identity when both `grpcClientCert` and `grpcClientKey` are set. Insecure: plaintext, with a
 * warning naming `host:port`.
 *
 * @param config - A {@link GrpcClientConfig} or any object with its fields.
 * @param options - `useSecureChannel` (default `true`) and the warning `logger` (default `console`).
 * @returns The credentials to pass to a generated client.
 * @throws {TypeError} If a field has the wrong type.
 * @throws {Error} If exactly one of `grpcClientCert` / `grpcClientKey` is set; if a PEM field holds no
 *   PEM block (e.g. a file path); if `useSecureChannel`
 *   is `false` while a client identity is set; or if gRPC rejects a PEM (the message names the target
 *   and carries the TLS library's reason, never the PEM).
 */
export declare function createChannelCredentials(config: GrpcClientConfigFields, options?: ChannelCredentialsOptions): grpc.ChannelCredentials;
/**
 * Construct a generated gRPC client for a configuration, with {@link DEFAULT_GRPC_CHANNEL_OPTIONS}
 * under the caller's `channelOptions`. Nothing connects until the first call.
 *
 * @param clientConstructor - The generated client class, e.g. a `*Client` from `api/`.
 * @param config - A {@link GrpcClientConfig} or any object with its fields.
 * @param options - See {@link CreateGrpcClientOptions}.
 * @returns The client.
 * @throws {Error} See {@link createChannelCredentials}.
 */
export declare function createGrpcClient<T>(clientConstructor: GrpcClientConstructor<T>, config: GrpcClientConfigFields, options?: CreateGrpcClientOptions): T;
