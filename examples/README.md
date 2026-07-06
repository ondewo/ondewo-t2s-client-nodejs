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

Configuration is read from [`environment.env`](./environment.env) (loaded via `dotenv`, path resolved
relative to the script). Fill in the connection details and technical-user credentials there, then run
the file with `tsx`:

```sh
# examples/environment.env (canonical variable names)
ONDEWO_HOST=localhost
ONDEWO_PORT=50055
ONDEWO_USE_SECURE_CHANNEL=false
KEYCLOAK_URL=https://auth.example.com/auth
KEYCLOAK_REALM=ondewo-ccai-platform
KEYCLOAK_CLIENT_ID=ondewo-nlu-cai-sdk-public
KEYCLOAK_USER_NAME=tech-user@example.com
KEYCLOAK_PASSWORD=...
KEYCLOAK_VERIFY_SSL=true
ONDEWO_T2S_PIPELINE_ID=default_pipeline
```

```sh
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
