"use strict";
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
//
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrpcClientConfig = exports.DEFAULT_GRPC_CHANNEL_OPTIONS = exports.MAX_MESSAGE_LENGTH = exports.REDACTED = void 0;
exports.hostAndPort = hostAndPort;
exports.createChannelCredentials = createChannelCredentials;
exports.createGrpcClient = createGrpcClient;
/**
 * gRPC channel helper: TLS, mutual TLS and the ONDEWO default channel options for the generated
 * `@grpc/grpc-js` clients of this package.
 *
 * Same contract as every ONDEWO SDK (reference: the Python `ondewo-client-utils`):
 *
 * - `grpcCert`, `grpcClientCert` and `grpcClientKey` hold PEM CONTENT (string or Buffer), never a
 *   path. Reading the files is the caller's job.
 * - A secure channel trusts `grpcCert` when it is set, the system trust store otherwise, and
 *   presents the client identity (`grpcClientCert` + `grpcClientKey`) when BOTH are set.
 * - Exactly one of `grpcClientCert` / `grpcClientKey` is refused with an error before anything
 *   reaches gRPC. Empty on both means plain server-authenticated TLS.
 * - `useSecureChannel: false` with a client identity is refused instead of silently dropping it; an
 *   insecure channel otherwise logs a warning naming `host:port`.
 * - No error message, `toString()`, `util.inspect()` or `JSON.stringify()` output contains a PEM or
 *   the client key (rendered as {@link REDACTED}).
 *
 * @packageDocumentation
 */
const net_1 = require("net");
const util_1 = require("util");
const grpc = __importStar(require("@grpc/grpc-js"));
/** What the redacted renderings show in place of a non-empty secret. */
exports.REDACTED = '***REDACTED***';
/** Largest message size gRPC accepts (2**31 - 1 bytes), used for both directions. */
exports.MAX_MESSAGE_LENGTH = 2147483647;
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
exports.DEFAULT_GRPC_CHANNEL_OPTIONS = Object.freeze({
    'grpc.max_send_message_length': exports.MAX_MESSAGE_LENGTH,
    'grpc.max_receive_message_length': exports.MAX_MESSAGE_LENGTH,
    'grpc.max_reconnect_backoff_ms': 5000,
    'grpc.keepalive_timeout_ms': 20000,
    'grpc.keepalive_permit_without_calls': 0
});
/** The configuration fields that hold PEM content. */
const PEM_FIELDS = [
    'grpcCert',
    'grpcClientCert',
    'grpcClientKey'
];
/**
 * Combine host and port into a gRPC target, bracketing a bare IPv6 literal (`::1` becomes `[::1]:50051`).
 * A host that is already bracketed or carries a scheme (`ipv6:[::1]`, `dns:...`, `unix:...`) is left as it is.
 *
 * @param host - Host name or IP address.
 * @param port - Port.
 * @returns The `host:port` target.
 */
function hostAndPort(host, port) {
    if ((0, net_1.isIP)(host) === 6) {
        return `[${host}]:${port}`;
    }
    return `${host}:${port}`;
}
/**
 * Turn optional PEM content into the Buffer gRPC takes; empty means unset.
 *
 * @param pem - PEM text or bytes, or nothing.
 * @returns The PEM as a non-empty Buffer, or `null` when it is unset or empty.
 */
function toPemBuffer(pem) {
    if (pem === undefined || pem.length === 0) {
        return null;
    }
    if (typeof pem === 'string') {
        return Buffer.from(pem, 'utf8');
    }
    return pem;
}
/**
 * Refuse half a client identity before it can reach gRPC.
 *
 * @param fields - The configuration to check.
 * @param where - What is checking it (class or function name), for the message.
 * @throws {Error} If exactly one of `grpcClientCert` and `grpcClientKey` is set (empty counts as unset).
 */
function assertClientIdentityPair(fields, where) {
    const hasCert = toPemBuffer(fields.grpcClientCert) !== null;
    const hasKey = toPemBuffer(fields.grpcClientKey) !== null;
    if (hasCert !== hasKey) {
        throw new Error(`${where} for ${hostAndPort(fields.host, fields.port)} has only one of grpcClientCert and grpcClientKey; ` +
            'set both to use mutual TLS, or neither.');
    }
}
/**
 * Refuse a PEM field that holds no PEM block, typically a file path passed instead of the file's
 * content (OpenSSL would ignore such a `grpcCert` silently and fail the handshake later).
 *
 * @param fields - The configuration to check.
 * @param where - What is checking it, for the message.
 * @throws {Error} If a non-empty PEM field contains no `-----BEGIN` line.
 */
function assertPemContent(fields, where) {
    for (const name of PEM_FIELDS) {
        const pem = toPemBuffer(fields[name]);
        if (pem !== null && !pem.includes('-----BEGIN')) {
            throw new Error(`${where} for ${hostAndPort(fields.host, fields.port)}: ${name} is not PEM content (no PEM header line); ` +
                "pass the file's content, not its path.");
        }
    }
}
/**
 * Validate the shape of a configuration (types only; never renders a value).
 *
 * @param fields - The configuration to check.
 * @param where - What is checking it, for the message.
 * @throws {TypeError} If `host` is not a non-empty string, `port` is empty, or a PEM field is not a string or Buffer.
 */
function assertConfigShape(fields, where) {
    if (typeof fields.host !== 'string' || fields.host.length === 0) {
        throw new TypeError(`${where}: host must be a non-empty string.`);
    }
    if ((typeof fields.port !== 'string' && typeof fields.port !== 'number') || String(fields.port).length === 0) {
        throw new TypeError(`${where} for host ${fields.host}: port must be a non-empty string or a number.`);
    }
    for (const name of PEM_FIELDS) {
        const value = fields[name];
        if (value !== undefined && typeof value !== 'string' && !Buffer.isBuffer(value)) {
            throw new TypeError(`${where} for ${hostAndPort(fields.host, fields.port)}: ${name} must be PEM content (string or Buffer), not a ${typeof value}.`);
        }
    }
}
/**
 * Connection settings of an ONDEWO gRPC client. Validated on construction (shape and the
 * both-or-neither client identity), immutable, and redacting `grpcClientKey` in `toString()`,
 * `util.inspect()` / `console.log()` and `JSON.stringify()`. There is deliberately no serialization
 * that writes the key: keep PEMs in files or a secret store and pass their content in.
 */
class GrpcClientConfig {
    /**
     * @param fields - Host, port and the optional PEM contents.
     * @throws {TypeError} If a field has the wrong type (see {@link GrpcClientConfigFields}).
     * @throws {Error} If exactly one of `grpcClientCert` and `grpcClientKey` is set, or a PEM field holds no PEM block.
     */
    constructor(fields) {
        assertConfigShape(fields, 'GrpcClientConfig');
        assertClientIdentityPair(fields, 'GrpcClientConfig');
        assertPemContent(fields, 'GrpcClientConfig');
        this.host = fields.host;
        this.port = fields.port;
        this.grpcCert = fields.grpcCert;
        this.grpcClientCert = fields.grpcClientCert;
        this.grpcClientKey = fields.grpcClientKey;
        Object.freeze(this);
    }
    /**
     * The gRPC target, see {@link hostAndPort}.
     *
     * @returns `host:port`, with a bare IPv6 literal bracketed.
     */
    get hostAndPort() {
        return hostAndPort(this.host, this.port);
    }
    /**
     * Loggable form: certificates as their text, the client key as {@link REDACTED} (empty stays empty).
     *
     * @returns A plain object safe to log or `JSON.stringify`.
     */
    toJSON() {
        return {
            host: this.host,
            port: this.port,
            grpcCert: pemToText(this.grpcCert),
            grpcClientCert: pemToText(this.grpcClientCert),
            grpcClientKey: redactSecret(this.grpcClientKey)
        };
    }
    /**
     * Short, redacted description: target and which certificates are set, no PEM content.
     *
     * @returns For example `GrpcClientConfig(host=localhost, port=50051, grpcCert=<set>, grpcClientCert=<set>, grpcClientKey=***REDACTED***)`.
     */
    toString() {
        return (`GrpcClientConfig(host=${this.host}, port=${this.port}, grpcCert=${isSetText(this.grpcCert)}, ` +
            `grpcClientCert=${isSetText(this.grpcClientCert)}, grpcClientKey=${redactSecret(this.grpcClientKey) ?? ''})`);
    }
    /**
     * `util.inspect()` / `console.log()` rendering: the same as {@link toString}.
     *
     * @returns The redacted description.
     */
    [util_1.inspect.custom]() {
        return this.toString();
    }
}
exports.GrpcClientConfig = GrpcClientConfig;
/**
 * Render optional PEM content as text for {@link GrpcClientConfig.toJSON}.
 *
 * @param pem - PEM text or bytes, or nothing.
 * @returns The PEM text, or `undefined` when unset.
 */
function pemToText(pem) {
    if (pem === undefined) {
        return undefined;
    }
    return typeof pem === 'string' ? pem : pem.toString('utf8');
}
/**
 * Redact a secret: non-empty becomes {@link REDACTED}, empty stays empty, unset stays unset.
 *
 * @param secret - The secret, or nothing.
 * @returns The redacted rendering.
 */
function redactSecret(secret) {
    if (secret === undefined) {
        return undefined;
    }
    return secret.length === 0 ? '' : exports.REDACTED;
}
/**
 * Say whether a certificate is set without rendering it.
 *
 * @param pem - PEM text or bytes, or nothing.
 * @returns `<set>` or `<unset>`.
 */
function isSetText(pem) {
    return toPemBuffer(pem) === null ? '<unset>' : '<set>';
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
function createChannelCredentials(config, options = {}) {
    assertConfigShape(config, 'createChannelCredentials');
    // grpc-core aborts the whole process on half an identity; grpc-js throws. Refuse it here either way.
    assertClientIdentityPair(config, 'createChannelCredentials');
    assertPemContent(config, 'createChannelCredentials');
    const target = hostAndPort(config.host, config.port);
    const clientCert = toPemBuffer(config.grpcClientCert);
    const clientKey = toPemBuffer(config.grpcClientKey);
    if (options.useSecureChannel === false) {
        if (clientCert !== null) {
            throw new Error(`createChannelCredentials for ${target}: useSecureChannel is false but a client identity ` +
                '(grpcClientCert/grpcClientKey) is set; mutual TLS needs a secure channel. ' +
                'Use a secure channel or remove the client identity.');
        }
        (options.logger ?? console).warn(`Insecure gRPC channel to ${target}: traffic is NOT encrypted (useSecureChannel=false).`);
        return grpc.credentials.createInsecure();
    }
    try {
        // Empty PEMs were mapped to null: no root certs = system trust store, no identity = plain TLS.
        return grpc.credentials.createSsl(toPemBuffer(config.grpcCert), clientKey, clientCert);
    }
    catch (error) {
        const reason = error instanceof Error ? error.message : String(error);
        throw new Error(`createChannelCredentials for ${target}: gRPC rejected the TLS material: ${reason}`);
    }
}
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
function createGrpcClient(clientConstructor, config, options = {}) {
    assertConfigShape(config, 'createGrpcClient');
    const credentials = options.credentials ?? createChannelCredentials(config, options);
    return new clientConstructor(hostAndPort(config.host, config.port), credentials, {
        ...exports.DEFAULT_GRPC_CHANNEL_OPTIONS,
        ...options.channelOptions
    });
}
