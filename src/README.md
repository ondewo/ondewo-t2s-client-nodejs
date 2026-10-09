<div align="center">
  <table>
    <tr>
      <td>
        <a href="https://ondewo.com/en/products/natural-language-understanding/">
            <img width="400px" src="https://raw.githubusercontent.com/ondewo/ondewo-logos/master/ondewo_we_automate_your_phone_calls.png"/>
        </a>
      </td>
    </tr>
    <tr>
       <td align="center">
          <a href="https://www.linkedin.com/company/ondewo "><img width="40px" src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png"></a>
          <a href="https://www.facebook.com/ondewo"><img width="40px" src="https://cdn-icons-png.flaticon.com/512/733/733547.png"></a>
          <a href="https://twitter.com/ondewo"><img width="40px" src="https://cdn-icons-png.flaticon.com/512/733/733579.png"> </a>
          <a href="https://www.instagram.com/ondewo.ai/"><img width="40px" src="https://cdn-icons-png.flaticon.com/512/174/174855.png"></a>
          <a href="https://badge.fury.io/js/%40ondewo%2Ft2s-client-nodejs"><img src="https://badge.fury.io/js/%40ondewo%2Ft2s-client-nodejs.svg" alt="npm version" height="32"></a>
       </td>
    </tr>
  </table>
  <h1 align="center">
    ONDEWO T2S Client NodeJS
  </h1>
</div>

## Overview

`@ondewo/t2s-client-nodejs` is a compiled version of the [ONDEWO T2S API](https://github.com/ondewo/ondewo-t2s-api) using the [ONDEWO PROTO COMPILER](https://github.com/ondewo/ondewo-proto-compiler). Here you can find the T2S API [documentation](https://ondewo.github.io).

ONDEWO APIs use [Protocol Buffers](https://github.com/google/protobuf) version 3 (proto3) as their Interface Definition Language (IDL) to define the API interface and the structure of the payload messages. The same interface definition is used for gRPC versions of the API in all languages.

## Setup

Using NPM:

```shell
npm i --save @ondewo/t2s-client-nodejs
```

Using GitHub:

```shell
git clone https://github.com/ondewo/ondewo-t2s-client-nodejs.git ## Clone repository
cd ondewo-t2s-client-nodejs                                      ## Change into repo-directoy
make setup_developer_environment_locally                         ## Install dependencies
```

## Usage

Import the generated stubs and the helpers from the package root:

```js
const { login, Text2SpeechClient, SynthesizeRequest, RequestConfig } = require('@ondewo/t2s-client-nodejs');
```

The Keycloak helper is also reachable by its path, `@ondewo/t2s-client-nodejs/auth/offlineTokenProvider`
(it moved there from `api/auth/offlineTokenProvider`, which the proto compiler's regeneration deletes).

### Authentication — Keycloak offline token

`login()` performs a one-time ROPC login with `scope=offline_access` against the **public** SDK
client (no client secret), then keeps the short-lived access token fresh in the background.
`getAuthorizationMetadata()` returns `{ authorization: 'Bearer <jwt>' }` — the **lowercase** key
native gRPC requires. Always `stop()` the provider: it holds a background refresh timer.

```js
const { credentials, Metadata } = require('@grpc/grpc-js');

const provider = await login({
  keycloakUrl: 'https://keycloak.example.com/auth',
  realm: 'ondewo',
  clientId: 'ondewo-nlu-cai-sdk-public',
  username: 'tech-user@example.com',
  password: '...',
  keycloakVerifySsl: true // set false ONLY for a self-signed certificate
});

const metadata = new Metadata();
const headers = provider.getAuthorizationMetadata();
for (const key of Object.keys(headers)) {
  metadata.set(key, headers[key]);
}

const config = new RequestConfig();
config.setT2sPipelineId('default_pipeline');
const request = new SynthesizeRequest();
request.setText('Hello from the ONDEWO T2S NodeJS client.');
request.setConfig(config);

const client = new Text2SpeechClient('localhost:50055', credentials.createInsecure());
client.synthesize(request, metadata, (error, response) => {
  console.log(response.getAudio_asU8().length, response.getAudioUuid(), response.getSampleRate());
  provider.stop();
});
```

A complete, runnable version — including the TLS channel and `dotenv` configuration — is in
[`examples/synthesizeExample.ts`](examples/synthesizeExample.ts); see [`examples/README.md`](examples/README.md).

## Package structure

```
npm
├── api
│   ├── auth
│   │   ├── offlineTokenProvider.d.ts
│   │   └── offlineTokenProvider.js
│   ├── google
│   │   └── protobuf
│   │       ├── empty_grpc_pb.js
│   │       ├── empty_pb.d.ts
│   │       ├── empty_pb.js
│   │       ├── struct_grpc_pb.js
│   │       ├── struct_pb.d.ts
│   │       └── struct_pb.js
│   └── ondewo
│       └── t2s
│           ├── text-to-speech_grpc_pb.d.ts
│           ├── text-to-speech_grpc_pb.js
│           ├── text-to-speech_pb.d.ts
│           └── text-to-speech_pb.js
├── LICENSE
├── package.json
├── package-lock.json
├── public-api.d.ts
├── public-api.js
└── README.md
```

## TLS, mutual TLS and certificates

gRPC encrypts with **TLS** ("SSL" in names such as `credentials.createSsl` or `grpc.ssl_target_name_override` is legacy naming). The package ships a channel helper, `auth/grpcChannel` (exported from the package root), that builds the `@grpc/grpc-js` credentials and channel options for every generated client:

| Mode                                    | `useSecureChannel` | Config fields                                                   |
|-----------------------------------------|--------------------|-----------------------------------------------------------------|
| Plaintext (not for production)          | `false`            | none                                                            |
| TLS, server verified by the trust store | `true` (default)   | none                                                            |
| TLS, server verified by your CA         | `true` (default)   | `grpcCert` = PEM of the CA that signed the server certificate   |
| Mutual TLS                              | `true` (default)   | `grpcCert` (optional) plus `grpcClientCert` and `grpcClientKey` |

Rules the code enforces:

- The three fields hold **PEM content** (`string` or `Buffer`), **not file paths**. Read the files yourself; a value without a PEM header line is refused.
- `grpcClientCert` and `grpcClientKey` go together: setting only one throws when the `GrpcClientConfig` is built, and `createChannelCredentials` refuses half a pair again before anything reaches gRPC. Empty strings on both mean plain server-authenticated TLS.
- `useSecureChannel: false` with a client certificate throws instead of silently dropping the identity. A plaintext channel otherwise logs a warning naming `host:port` (through `console.warn`, or the `logger` you pass).
- Without `grpcCert` the server is verified against Node's default CA store (Node's bundled Mozilla roots plus `NODE_EXTRA_CA_CERTS`; start Node with `--use-system-ca` to use the operating system's store instead).
- The host you connect to must match a subject alternative name (SAN) of the server certificate. When you connect by IP and the certificate has no IP SAN, pass the name to check as the channel option `'grpc.ssl_target_name_override'`.
- A bare IPv6 host is bracketed for you (`::1` becomes `[::1]:50051`).

```ts
import { readFileSync } from 'fs';

import * as grpc from '@grpc/grpc-js';
import { createChannelCredentials, createGrpcClient, GrpcClientConfig, Text2SpeechClient } from '@ondewo/t2s-client-nodejs';

const config = new GrpcClientConfig({
  host: '10.0.0.5',
  port: 50051,
  grpcCert: readFileSync('certs/ca.pem'),
  grpcClientCert: readFileSync('certs/client.pem'), // leave both out for server-authenticated TLS
  grpcClientKey: readFileSync('certs/client.key')
});

const client: Text2SpeechClient = createGrpcClient(Text2SpeechClient, config, {
  channelOptions: { 'grpc.ssl_target_name_override': 't2s.example.internal' } // only when connecting by IP
});
```

`createGrpcClient` starts from `DEFAULT_GRPC_CHANNEL_OPTIONS` (maximum message size 2³¹-1 bytes in both directions, reconnect backoff capped at 5 s) and applies your `channelOptions` on top. To build credentials only, call `createChannelCredentials(config, { useSecureChannel })` and pass the result to any generated client constructor.

**One connection for several services.** Clients built with the **same credentials object** (and the same target and options) share one connection, so the TLS handshake happens once:

```ts
const credentials: grpc.ChannelCredentials = createChannelCredentials(config);
const first = createGrpcClient(Text2SpeechClient, config, { credentials });
const second = createGrpcClient(Text2SpeechClient, config, { credentials }); // any other generated client works the same way
```

**Keepalive is off by default.** `@grpc/grpc-js` has no `grpc.http2.max_pings_without_data`, so with `grpc.keepalive_time_ms` set it keeps pinging a stream that carries no data, and a grpc-core server (as every ONDEWO server is) answers with `GOAWAY too_many_pings`: the call fails with `RESOURCE_EXHAUSTED` (measured: after 150 s at a 30 s keepalive). The Python SDKs' 30 s keepalive therefore is not copied; set `grpc.keepalive_time_ms` yourself only against a server whose `grpc.http2.min_ping_interval_without_data_ms` allows it. `grpc.keepalive_timeout_ms` is preset to 20 s for that case.

### A test PKI with openssl

A CA, a server certificate with SANs and a client certificate with the `clientAuth` extended key usage. For tests only: the keys are unencrypted.

```bash
openssl req -x509 -newkey ec -pkeyopt ec_paramgen_curve:prime256v1 -nodes -days 365 \
  -subj "/CN=Test CA" -keyout ca.key -out ca.pem

printf 'subjectAltName=DNS:localhost,IP:127.0.0.1\nextendedKeyUsage=serverAuth\n' > server.ext
openssl req -newkey ec -pkeyopt ec_paramgen_curve:prime256v1 -nodes \
  -subj "/CN=localhost" -keyout server.key -out server.csr
openssl x509 -req -in server.csr -CA ca.pem -CAkey ca.key -CAcreateserial -days 365 \
  -extfile server.ext -out server.pem

printf 'extendedKeyUsage=clientAuth\n' > client.ext
openssl req -newkey ec -pkeyopt ec_paramgen_curve:prime256v1 -nodes \
  -subj "/CN=my-client" -keyout client.key -out client.csr
openssl x509 -req -in client.csr -CA ca.pem -CAkey ca.key -CAcreateserial -days 365 \
  -extfile client.ext -out client.pem

chmod 600 *.key
openssl verify -CAfile ca.pem server.pem client.pem
```

The client then uses `ca.pem` / `client.pem` / `client.key`; a server that requires client certificates uses `server.pem` / `server.key` and trusts `ca.pem` for its clients.

### TLS security notes

- Keep the client key out of source control and out of serialized configs: load it from a file (mode `0600`) or a secret store at startup.
- `GrpcClientConfig` renders the key as `***REDACTED***` in `toString()`, `util.inspect()` / `console.log()` and `JSON.stringify()` (an empty key renders empty). There is no serializer that writes the key, so a config cannot be persisted with it. A plain object you pass instead of a `GrpcClientConfig` has none of this protection: do not log it.
- No error message of the helper contains a PEM, a key or a whole config; they name the field and `host:port`.

### TLS troubleshooting

A failed handshake surfaces as gRPC status `UNAVAILABLE` (14); the cause is in the error's `details`:

- **`unable to verify the first certificate`**: the server certificate is not signed by `grpcCert` (or, without `grpcCert`, not by a CA Node trusts). Pass the CA that signed the server certificate.
- **`ERR_TLS_CERT_ALTNAME_INVALID: Hostname/IP does not match certificate's altnames`**: the host you dial is not a SAN of the server certificate. Dial a name in the certificate, or set `'grpc.ssl_target_name_override'`. Some Node releases (seen on 22.23 and 24.18) also reject an IPv6 literal against a matching IP SAN; the override to a DNS SAN works around it.
- **`tlsv13 alert certificate required`**: the server requires mutual TLS and the client sent no certificate. Set `grpcClientCert` and `grpcClientKey`.
- **`Failed to connect`** right after the handshake with a client certificate: the server does not trust the CA that signed `grpcClientCert`.
- **`... grpcCert is not PEM content (no PEM header line)`** (thrown when the config is built): a field holds a file path or other text instead of the file's content. Pass `readFileSync(path)`.
- **`createChannelCredentials for host:port: gRPC rejected the TLS material: ... key values mismatch`** (thrown, not a call error): `grpcClientKey` is not the key of `grpcClientCert`. Other OpenSSL reasons there mean a damaged PEM block.

[comment]: <> (START OF GITHUB README)

## Development

Hand-written code lives in `auth/` (the Keycloak offline-token provider and the TLS channel helper) and `examples/`;
everything under `api/` is generated by the proto compiler and must not be edited.

```shell
npm test                     # compile the hand-written .ts + run every test under the coverage gate
npm run test:examples        # just the example's mock tests
npm run typecheck:examples   # tsc --noEmit over examples/
npm run test:drift           # package.json and .ci-package.json still agree
make eslint                  # type-aware lint
make prettier PRETTIER_WRITE=-w
```

`npm test` enforces **100% statements / lines / branches / functions** on
`auth/offlineTokenProvider.ts`, `auth/grpcChannel.ts` and `examples/synthesizeExample.ts`. c8 runs with `--all`, so a
new hand-written file that no test touches shows up at 0% and fails the gate instead of quietly
vanishing from the report. `.github/workflows/tests.yml` runs the first four of these commands;
`make eslint` and `make prettier` run only from `.husky/pre-commit`, never in CI.

`auth/*.js` / `auth/*.d.ts` are the tsc output of `auth/*.ts` and are COMMITTED because the npm
package ships them — after editing a source, run `npm run build:auth` (or `make compile_auth`) and
commit the regenerated files; CI fails if they drift.

## Build

The `make build` command is dependent on 2 `repositories` and their speciefied `version`:

- [ondewo-t2s-api](https://github.com/ondewo/ondewo-t2s-api) -- `T2S_API_GIT_BRANCH` in `Makefile`
- [ondewo-proto-compiler](https://github.com/ondewo/ondewo-proto-compiler) -- `ONDEWO_PROTO_COMPILER_GIT_BRANCH` in `Makefile`

Other than creating the proto-code, `build` also installs the `dev-dependencies` and changes the owner of the proto-code-files from `root` to the `current user`.

In the case that some `google .protos` were not automatically generated, exists the option of creating a `proto-deps.txt` inside of the `src` folder. There, import statements can be written the same way as they are in `.proto` files.

  ```
  import "google/api/http.proto"; //Example
    <---- New Line
  ```

> :warning: The last line in the `proto-deps.txt` needs to be an empty new line, otherwise the compiler will fail

## GitHub Repository - Release Automation

The repository is published to GitHub and NPM by the Automated Release Process of ONDEWO.

TODO after PR merge:

- checkout master

  ```shell
  git checkout master
  ```

- pull newest state

  ```shell
  git pull
  ```

- Adjust `ONDEWO_T2S_VERSION` in the `Makefile` <br><br>
- Add new Release Notes to `src/RELEASE.md` in following format:

  ```
  ## Release ONDEWO T2S Nodejs Client X.X.X    <----- Beginning of Notes

  ...<NOTES>...

  *****************                             <----- End of Notes
  ```

- release

  ```shell
  make ondewo_release
  ```

<br>
The release process can be divided into 6 Steps:

1. `build` specified version of the `ondewo-t2s-api`
2. `commit and push` all changes in code resulting from the `build`
3. Publish the created `npm` folder to `npmjs.com`
4. Create and push the `release branch` e.g. `release/1.3.20`
5. Create and push the `release tag` e.g. `1.3.20`
6. Create a new `Release` on GitHub

> :warning:  The Release Automation checks if the build has created all the proto-code files, but it does not check the code-integrity. Please build and test the generated code prior to starting the release process.

[comment]: <> (END OF GITHUB README)
