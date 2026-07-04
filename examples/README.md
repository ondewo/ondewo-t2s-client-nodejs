# Examples

Minimal, runnable examples for the `@ondewo/t2s-client-nodejs` SDK.

## `synthesizeExample.ts`

Authenticates with the Keycloak **offline-token** flow and calls the T2S `Text2Speech.Synthesize` RPC.

Authentication uses the current bearer convention (post-Keycloak migration): `login(...)` from
[`../src/auth/offlineTokenProvider.ts`](../src/auth/offlineTokenProvider.ts) returns a provider whose
`getAuthorizationMetadata()` yields the `{ authorization: 'Bearer <token>' }` gRPC metadata pairs
(unlike the NLU client's `getAuthorizationHeader()`, which returns the header value as a plain string).
The legacy per-request token / HTTP-basic credentials no longer exist.

The flow is factored into small, injectable helpers — `buildAuthMetadata(source)`,
`buildSynthesizeRequest(options)` and `synthesizeUnary(client, request, metadata)` — so it can be unit
tested against a **mocked** gRPC client and a **mocked** token source with no live server; `main()`
wires the real `Text2SpeechClient` and `login()` together.

### Run against a server

Set the connection + technical-user credentials in the environment, then execute the file with `tsx`:

```sh
export ONDEWO_T2S_KEYCLOAK_URL=https://auth.example.com/auth
export ONDEWO_T2S_KEYCLOAK_REALM=ondewo-ccai-platform
export ONDEWO_T2S_KEYCLOAK_CLIENT_ID=ondewo-nlu-cai-sdk-public
export ONDEWO_T2S_USER_NAME=tech-user@example.com
export ONDEWO_T2S_PASSWORD=...
export ONDEWO_T2S_GRPC_TARGET=localhost:50055
export ONDEWO_T2S_PIPELINE_ID=default_pipeline

node --import tsx examples/synthesizeExample.ts
```

## Tests (no live server)

The example ships a mock-based unit test (`synthesizeExample.spec.ts`) using Node's built-in test
runner — the same convention as the auth provider. Both the gRPC client and the token source are
mocked, so the tests need no network:

```sh
make test_examples
# or directly:
node --import tsx --test examples/*.spec.ts
```
