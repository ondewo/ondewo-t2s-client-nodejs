# Release History

*****************

## Release ONDEWO T2S Nodejs Client 6.6.2

### Improvements

* [[OND211-2443]](https://ondewo.atlassian.net/browse/OND211-2443) New TLS / mutual TLS helper `auth/grpcChannel`, exported from the package root: `GrpcClientConfig`, `createChannelCredentials` and `createGrpcClient` build `@grpc/grpc-js` credentials and channel options from PEM **content** (`grpcCert`, `grpcClientCert`, `grpcClientKey`), never a file path. An empty `grpcCert` trusts the system roots. Same contract as the Python SDKs (ondewo-client-utils 4.1.x).
* [[OND211-2443]](https://ondewo.atlassian.net/browse/OND211-2443) Refused before gRPC sees them: half a client identity (certificate without key or key without certificate), a value that is not PEM content (e.g. a path), and `useSecureChannel: false` together with a client identity. Empty strings on both mean plain TLS. Error messages name the field and `host:port`, never a PEM, a key or the config object.
* [[OND211-2443]](https://ondewo.atlassian.net/browse/OND211-2443) A plaintext channel logs a warning naming `host:port`; bare IPv6 hosts are bracketed (`[::1]:50051`); CRLF PEMs work; the client key renders as `***REDACTED***` in `toString`, `util.inspect` and `JSON.stringify`.
* [[OND211-2443]](https://ondewo.atlassian.net/browse/OND211-2443) Channel defaults: max message length `2**31 - 1` in both directions, `grpc.max_reconnect_backoff_ms` 5000, `grpc.keepalive_timeout_ms` 20000, `grpc.keepalive_permit_without_calls` 0. `grpc.keepalive_time_ms` is deliberately left unset: grpc-js has no `grpc.http2.max_pings_without_data`, so keepalive pings on a silent stream make a grpc-core server answer GOAWAY `too_many_pings`.
* [[OND211-2443]](https://ondewo.atlassian.net/browse/OND211-2443) README section "TLS, mutual TLS and certificates": modes, loading PEMs from files, a test PKI with openssl, security notes and troubleshooting.
* [[OND211-2443]](https://ondewo.atlassian.net/browse/OND211-2443) Tests: real handshakes against an in-process grpc-js server with an openssl test PKI generated at test time (TLS, mutual TLS, missing or foreign client identity rejected, wrong CA, CRLF PEMs, IPv6 where available), plus the refusal and redaction cases. CI runs on Node 20, 22 and 24 with `npm ci`, and fails when the committed `auth/` build output drifts from its source.

### Bug Fixes

* [[OND211-2443]](https://ondewo.atlassian.net/browse/OND211-2443) Regenerated with ondewo-proto-compiler 5.15.5: `public-api.js` (the package `main`) is now a CommonJS barrel, so `require('@ondewo/t2s-client-nodejs')` works. With earlier compilers it contained `export * from` lines and failed with `ERR_MODULE_NOT_FOUND`. CI now `require()`s the package root.
* [[OND211-2443]](https://ondewo.atlassian.net/browse/OND211-2443) RELEASE.md gains the missing 1.4.0 section and the last section's `*****` separator.
* [[OND211-2443]](https://ondewo.atlassian.net/browse/OND211-2443) `tests/releaseNotes.spec.ts` pins the release-notes slice: every heading's spelling, every section's `*****` separator, `src/RELEASE.md` == `RELEASE.md` and non-empty notes for the current version.

**Note:** the Keycloak offline-token helper moved from `src/auth` (published as `api/auth/offlineTokenProvider`) to `auth/offlineTokenProvider`, next to `grpcChannel`. A deep import of `@ondewo/t2s-client-nodejs/api/auth/offlineTokenProvider` must change to `@ondewo/t2s-client-nodejs/auth/offlineTokenProvider`; importing from the package root (`require('@ondewo/t2s-client-nodejs')`) is unchanged.

API unchanged: tracking API Version [6.6.0](https://github.com/ondewo/ondewo-t2s-api/releases/tag/6.6.0) ( [Documentation](https://ondewo.github.io/ondewo-t2s-api/) )

*****************

## Release ONDEWO T2S Nodejs Client 6.6.1

### Bug Fixes

* [[OND221-2830]](https://ondewo.atlassian.net/browse/OND221-2830) Regenerated with [ondewo-proto-compiler 5.13.0](https://github.com/ondewo/ondewo-proto-compiler/releases/tag/5.13.0).
* [[OND221-2830]](https://ondewo.atlassian.net/browse/OND221-2830) The hand-written auth helper stays re-exported from the generated public-api barrel across the regeneration, via this repo's own `compile_auth` + `ensure_auth_export` build steps. It keeps `src/auth`, which the compiler's generic re-export does not cover.
* [[OND221-2830]](https://ondewo.atlassian.net/browse/OND221-2830) Tooling: `conventional-pre-commit` now runs before `giticket` at the commit-msg stage - with giticket first, its `[OND221-2830] fix: ...` rewrite was no longer valid Conventional Commits and every commit on a ticket branch failed. `README.md` is prettier-ignored where `.prettierrc` sets `useTabs` and markdownlint's MD010 de-tabs the same blocks, and the codegen `docker run` invocations no longer pass `-it`, which fails outside a TTY.

*****************

## Release ONDEWO T2S Nodejs Client 6.6.0

### Improvements

* Tracking API Version [6.6.0](https://github.com/ondewo/ondewo-t2s-api/releases/tag/6.6.0) ( [Documentation](https://ondewo.github.io/ondewo-t2s-api/) )

*****************

## Release ONDEWO T2S Nodejs Client 6.5.0

### Improvements

* Tracking API Version [6.5.0](https://github.com/ondewo/ondewo-t2s-api/releases/tag/6.5.0) ( [Documentation](https://ondewo.github.io/ondewo-t2s-api/) )

*****************

## Release ONDEWO T2S Nodejs Client 6.4.2

### Improvements

* Tracking API Version [6.4.2](https://github.com/ondewo/ondewo-t2s-api/releases/tag/6.4.2) ( [Documentation](https://ondewo.github.io/ondewo-t2s-api/) )

*****************

## Release ONDEWO T2S Nodejs Client 6.4.1

### Improvements

* Tracking API Version [6.4.1](https://github.com/ondewo/ondewo-t2s-api/releases/tag/6.4.1) ( [Documentation](https://ondewo.github.io/ondewo-t2s-api/) )

*****************

## Release ONDEWO T2S Nodejs Client 6.4.0

### Improvements

* Tracking API Version [6.4.0](https://github.com/ondewo/ondewo-t2s-api/releases/tag/6.4.0) ( [Documentation](https://ondewo.github.io/ondewo-t2s-api/) )

*****************

## Release ONDEWO T2S Nodejs Client 6.2.0

### Improvements

* Tracking API Version [6.2.0](https://github.com/ondewo/ondewo-t2s-api/releases/tag/6.2.0) ( [Documentation](https://ondewo.github.io/ondewo-t2s-api/) )

*****************

## Release ONDEWO T2S Nodejs Client 6.1.0

### Improvements

* Tracking API Version [6.1.0](https://github.com/ondewo/ondewo-t2s-api/releases/tag/6.1.0) ( [Documentation](https://ondewo.github.io/ondewo-t2s-api/) )

*****************

## Release ONDEWO T2S Nodejs Client 6.0.0

### Improvements

* Tracking API Version [6.0.0](https://github.com/ondewo/ondewo-t2s-api/releases/tag/6.0.0) ( [Documentation](https://ondewo.github.io/ondewo-t2s-api/) )

*****************

## Release ONDEWO T2S Nodejs Client 5.3.0

### Improvements

* Tracking API Version [5.3.0](https://github.com/ondewo/ondewo-t2s-api/releases/tag/5.3.0) ( [Documentation](https://ondewo.github.io/ondewo-t2s-api/) )

*****************

## Release ONDEWO T2S Nodejs Client 5.2.0

### Improvements

* Tracking API Version [5.2.0](https://github.com/ondewo/ondewo-t2s-api/releases/tag/5.2.0) ( [Documentation](https://ondewo.github.io/ondewo-t2s-api/) )

*****************

## Release ONDEWO T2S Nodejs Client 5.0.0

### Improvements

* Tracking API Version [5.0.0](https://github.com/ondewo/ondewo-t2s-api/releases/tag/5.0.0) ( [Documentation](https://ondewo.github.io/ondewo-t2s-api/) )

*****************

## Release ONDEWO T2S Nodejs Client 4.3.0

### Improvements

* Tracking API Version 4.3.0

*****************

## Release ONDEWO T2S Nodejs Client 4.2.0

### New Features

* Track version 4.3.0 of [ONDEWO T2S API](https://github.com/ondewo/ondewo-t2s-api/releases/4.3.0)
* [[OND211-2039]](https://ondewo.atlassian.net/browse/OND211-2039) - Implemented automated release for GitHub and NPM
* [[OND211-2039]](https://ondewo.atlassian.net/browse/OND211-2039) - Added pre-commit hooks and adjusted files to them

*****************

## Release ONDEWO T2S Nodejs Client 1.4.0

### New Features

* Added first public release
* Javascript and Typescript clients
* Uses version 1.4.0 from <a href="https://github.com/ondewo/ondewo-t2s-api">ONDEWO T2S APIs</a>

*****************
