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

Import the generated stubs and the auth helper by their **path inside the package**:

```js
const { login } = require('@ondewo/t2s-client-nodejs/api/auth/offlineTokenProvider');
const { Text2SpeechClient } = require('@ondewo/t2s-client-nodejs/api/ondewo/t2s/text-to-speech_grpc_pb');
const { SynthesizeRequest, RequestConfig } = require('@ondewo/t2s-client-nodejs/api/ondewo/t2s/text-to-speech_pb');
```

> :warning: The package's `main` / `typings` entry point (`public-api.js` / `public-api.d.ts`) is
> generated with extensionless `export * from './api/…'` specifiers — ESM syntax in a CommonJS
> package — so a bare `require('@ondewo/t2s-client-nodejs')` fails with `ERR_MODULE_NOT_FOUND`.
> Use the paths above.

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

[comment]: <> (START OF GITHUB README)

## Development

Hand-written code lives in `src/auth/` (the Keycloak offline-token provider) and `examples/`;
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
`src/auth/offlineTokenProvider.ts` and `examples/synthesizeExample.ts`. c8 runs with `--all`, so a
new hand-written file that no test touches shows up at 0% and fails the gate instead of quietly
vanishing from the report. `.github/workflows/tests.yml` runs exactly these commands.

`api/auth/offlineTokenProvider.{js,d.ts}` are the tsc output of `src/auth/offlineTokenProvider.ts`
and are COMMITTED because the npm package ships them — after editing the source, run
`make compile_auth` and commit the regenerated pair.

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
