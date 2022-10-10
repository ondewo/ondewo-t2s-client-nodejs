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

## Package structure

```
npm
├── api
│   ├── google
│   │   └── protobuf
│   │       ├── empty_grpc_pb.js
│   │       ├── empty_pb.d.ts
│   │       └── empty_pb.js
│   └── ondewo
│       └── t2s
│           ├── text-to-speech_grpc_pb.d.ts
│           ├── text-to-speech_grpc_pb.js
│           ├── text-to-speech_pb.d.ts
│           └── text-to-speech_pb.js
├── LICENSE
├── package.json
├── public-api.d.ts
└── README.md
```

[comment]: <> (START OF GITHUB README)

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

> :warning: The Release Automation checks if the build has created all the proto-code files, but it does not check the code-integrity. Please build and test the generated code prior to starting the release process.

[comment]: <> (END OF GITHUB README)
