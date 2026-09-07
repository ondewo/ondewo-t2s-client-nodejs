# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Working Principles

Behavioral guidelines to reduce common mistakes. They bias toward caution over speed; for trivial tasks, use judgment.

### Think before coding

Don't assume. Don't hide confusion. Surface tradeoffs.

Before implementing:

- State your assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them — don't pick silently.
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop. Name what's confusing. Ask.

### Simplicity first

Minimum code that solves the problem. Nothing speculative.

- No features beyond what was asked.
- No abstractions for single-use code.
- No "flexibility" or "configurability" that wasn't requested.
- No error handling for impossible scenarios.
- If you write 200 lines and it could be 50, rewrite it.

Ask yourself: "Would a senior engineer say this is overcomplicated?" If yes, simplify.

### Surgical changes

Touch only what you must. Clean up only your own mess.

When editing existing code:

- Don't "improve" adjacent code, comments, or formatting.
- Don't refactor things that aren't broken.
- Match existing style, even if you'd do it differently.
- If you notice unrelated dead code, mention it — don't delete it.

When your changes create orphans:

- Remove imports/variables/functions that _your_ changes made unused.
- Don't remove pre-existing dead code unless asked.

The test: every changed line should trace directly to the user's request.

### Goal-driven execution

Define success criteria. Loop until verified.

Transform tasks into verifiable goals:

- "Add validation" → "Write tests for invalid inputs, then make them pass"
- "Fix the bug" → "Write a test that reproduces it, then make it pass"
- "Refactor X" → "Ensure tests pass before and after"

For multi-step tasks, state a brief plan:

```text
1. [Step] → verify: [check]
2. [Step] → verify: [check]
3. [Step] → verify: [check]
```

Strong success criteria let you loop independently. Weak criteria ("make it work") require constant clarification.

These guidelines are working if: fewer unnecessary changes in diffs, fewer rewrites due to overcomplication, and
clarifying questions come before implementation rather than after mistakes.

## Git Commits

- **Never include Claude as author or co-author** in commit messages, PR descriptions, or any other text. Do not add
  `Co-Authored-By: Claude…` trailers, "Generated with Claude Code" footers, or any similar attribution.
- The user's own git author identity (already configured in git) is the only identity that should appear on commits.
- This rule overrides the default Claude Code commit-template guidance.
- **Never prepend the JIRA ticket ID** (e.g. `[OND231-624]`) to the commit subject yourself. The `giticket` pre-commit
  hook reads the ticket from the branch name (`(feature|bugfix|support|hotfix)/<TICKET>-…`) and prepends `[<ticket>]`
  automatically. Writing the prefix manually produces a duplicate. Write the subject as plain Conventional Commits
  (`feat: …`, `fix(scope): …`, `build(compiler): …`) and let the hook add the prefix.

## What is hand-written and what is generated

| Path | Owner | Rule |
| --- | --- | --- |
| `src/auth/offlineTokenProvider.ts` + `.spec.ts` | hand-written | the D18 Keycloak offline-token provider; the gated surface |
| `examples/synthesizeExample.ts` + `.spec.ts` | hand-written | runnable example; also gated at 100% |
| `api/ondewo/**`, `api/google/**`, `public-api.{js,d.ts}` | proto compiler | never edit; `make build` rewrites them |
| `api/auth/offlineTokenProvider.{js,d.ts}` | `tsc` | **committed build output** of `src/auth`; regenerate with `make compile_auth` |
| `src/ondewo-t2s-api`, `ondewo-proto-compiler` | submodules | move the gitlink, never edit inside |
| `README.md` | copy | verbatim `cp src/README.md .` inside `make build` — edit `src/README.md`, then copy |
| `RELEASE.md` | copy | same: `cp src/RELEASE.md .` |

`api/auth/*` is shipped in the npm package, so after touching `src/auth/offlineTokenProvider.ts` run
`make compile_auth` and commit the regenerated `.js` + `.d.ts` in the same commit. Nothing in CI catches that drift yet.

## Toolchain and tests

Node 24 locally, Node 20 in CI (`actions/setup-node`). No python, no `uv`, no Jenkinsfile —
`.github/workflows/tests.yml` is the only CI this repo has.

```shell
npm test                     # pretest -> build:tests, then c8 + node --test with the coverage gate
npm run test:examples        # just examples/synthesizeExample.spec.js
npm run typecheck:examples   # tsc --noEmit over examples/
npm run test:drift           # package.json and .ci-package.json still agree
make eslint                  # type-aware eslint over the repo
make prettier PRETTIER_WRITE=-w
```

- **`build:tests` compiles `src/auth/*.ts examples/*.ts` into `.test-build/`.** tsc derives the root from the common
  prefix of those inputs — the repo root — so the output is `.test-build/src/auth/…` and `.test-build/examples/…`, one
  level deep. `ln -sfn ../api .test-build/api` is what makes the compiled example's `require('../api/…')` resolve.
  The two `test -f` guards at the end fail loudly if a rename silently changed that layout.
- **The gate is `--statements 100 --lines 100 --branches 100 --functions 100`, and it is real.** It runs with `--all
  --src .test-build`, so a NEW hand-written file that no test imports is reported at 0% and fails the build instead of
  disappearing from the table. Verified by dropping an untested `src/auth/probeUntested.ts` in: the run went to 99.66%
  and exited 1.
- **The only coverage exclusion is `/* c8 ignore start|stop */` around the `require.main === module` block** at the
  bottom of `examples/synthesizeExample.ts` — it cannot execute under the test runner (the spec imports the module) and
  its `process.exit(1)` cannot run in-process. Do not add blanket ignores anywhere else.
- **`main()` is covered by injection, not by mocking modules.** Its two outside-world boundaries are optional
  parameters: `main({ loginImpl, createClient })`. One test calls `main()` with NO overrides under an empty
  environment, which both selects the real defaults (covering the `??` branches) and stops at the first `requireEnv`
  before any network call.
- **`INSECURE_AGENT_OPTIONS` is exported so a test pins it.** `assert.deepEqual(INSECURE_AGENT_OPTIONS, { connect: {
  rejectUnauthorized: false } })` fails if the literal is flipped to `true`; verified by mutating it (`npm test` exits 1).

## CI — `.github/workflows/tests.yml`

Four `run:` steps, all of which must exit 0. It goes red when:

1. `npm install --no-audit --no-fund` fails.
2. `npm run test:drift` — a script or devDependency exists in `package.json` and `.ci-package.json` with different
   values. This is the guard against the release codegen silently reverting a test-script edit (see below).
3. `npm test` — a failing test, or ANY of the four coverage metrics below 100 on the hand-written surface.
4. `npm run typecheck:examples && npm run test:examples` — the example stopped compiling against the generated stubs,
   or its mock tests fail.

There is no lint/format step in CI; `make eslint` and prettier run from `.husky/pre-commit` only.

## proto-compiler pin (currently 5.14.0)

The pin is exactly **two** things, and neither of them regenerates code:

1. the `ondewo-proto-compiler` submodule gitlink — `b71f8ed4575ecc4ee8084389a075514acac61ff4` = tag `5.14.0`;
2. `ONDEWO_PROTO_COMPILER_GIT_BRANCH=tags/5.14.0` in the `Makefile` (line 21 — this Makefile has one extra leading
   comment line compared with its sibling clients, so anchor edits on `^ONDEWO_PROTO_COMPILER_GIT_BRANCH=`, not on a
   line number).

```shell
git submodule update --init --recursive
git -C ondewo-proto-compiler fetch --tags origin     # .gitmodules uses an ssh URL; a fetch is required
git -C ondewo-proto-compiler checkout <VERSION>
git add ondewo-proto-compiler
perl -i -pe 's|^ONDEWO_PROTO_COMPILER_GIT_BRANCH=.*|ONDEWO_PROTO_COMPILER_GIT_BRANCH=tags/<VERSION>|' Makefile
```

- **A pin is not a regeneration.** Everything 5.12.0 → 5.14.0 fixed (Angular proto3 explicit presence, the JS
  `public-api` self-reference, the nodejs/typescript `append-auth-exports.sh`) is emitted at codegen time. The already
  committed `api/` stubs and `public-api.*` are untouched until someone runs `make build`. Never write a RELEASE.md
  line claiming "regenerated with X" for a pin-only bump.
- Verified no-ops for this repo, so they must NOT appear in a bump diff: `nodejs/image-data/package.json` changes only
  its `version` field between 5.11.0 and 5.14.0 (the dependency sync only rewrites keys `src/package.json` already
  has), and `Dockerfile.utils` already declares `ENV NODE_VERSION=24.14.0`, which is what 5.14.0 wants.
- `make check_out_correct_submodule_versions` (run by `make build`) checks the submodule out at the Makefile pin, so a
  Makefile that lags the gitlink actively DOWNGRADES the submodule. Keep the two in sync.

## pre-commit

`uvx pre-commit run --all-files` must pass (`pre-commit` is not on PATH here; use `uvx`).

- **ORDER MATTERS: `conventional-pre-commit` before `giticket`.** Both run at the `commit-msg` stage and pre-commit
  executes repos in declaration order. giticket rewrites the subject to `[OND231-624] chore: probe`, which is no longer
  a valid Conventional Commit — with giticket first, every commit on a ticket branch fails and only `--no-verify` gets
  through. Verified both ways: in the current order a `feature/OND231-624-…` branch produces
  `[OND231-624] chore: probe` and exits 0; feeding that decorated subject to `conventional-pre-commit` alone exits 1.
- **`.markdownlint-cli2.yaml` must NOT declare `globs:`.** markdownlint-cli2 ADDS config globs to the filenames it is
  given, and pre-commit shards the file list across parallel processes (128 cores here → 2 shards). With
  `globs: ["*.md"]`, every shard also `--fix`-ed every root `*.md` — two concurrent writers on `RELEASE.md` produced a
  torn file: a dropped changelog bullet, `## Release` demoted to `# Release`, and `ONDEWO` truncated to `ONDEW`. This
  is also the real cause of the `TypeError: Cannot read properties of undefined (reading 'slice')` crash seen in
  `applyFix` under markdownlint-cli2 v0.23.0. Pass filenames explicitly when linting by hand:
  `npx markdownlint-cli2 "*.md" "src/*.md"`.
- **`MD053` stays disabled.** Its auto-fix deletes the `[comment]: <> (START/END OF GITHUB README)` reference-definition
  markers that `make build` slices the published README with.
- Hook revs, all at the newest stable release: `markdownlint-cli2 v0.23.2`, `pre-commit-hooks v6.0.0`,
  `conventional-pre-commit v4.4.0`, `giticket '1.92'` — keep giticket **quoted**, an unquoted `1.92` is a YAML float.
  Reject `-preN` tags that `pre-commit autoupdate` proposes for conventional-pre-commit; they are pre-releases of
  versions that are already out.

## prettier, husky and the release

- **Config files and generated markdown are in `.prettierignore`.** `.husky/pre-commit` runs
  `make prettier PRETTIER_WRITE=-w` before `pre-commit run`; a prettier rewrite of `.pre-commit-config.yaml` leaves it
  unstaged and `pre-commit run` then aborts with _"Your pre-commit configuration is unstaged"_. `README.md` is in there
  for a second reason: prettier rewrites `[comment]: <> (START OF GITHUB README)` into `[comment]: <> 'START OF GITHUB
  README'`, which breaks the release's README slice — and the root README is only ever a `cp` of the (already ignored)
  `src/README.md`, so formatting the copy guaranteed drift. Both were true when this was fixed: the committed root
  README carried the corrupted markers.
- **`.husky/pre-commit` skips `pre-commit run` while `.pre-commit-config.yaml` is unstaged.** `make release` invokes the
  hook DIRECTLY through `make run_precommit_hooks`, not through a git commit.
- **`.husky/pre-push` runs `npm test`,** and skips itself for the three pushes `make release` performs (recognised by
  the `refs/tags/*` / `refs/heads/release/*` remote ref, or by a `Preparing for Release …` subject). It is deliberately
  not in `pre-commit`, which the release executes directly.
- **Hooks are NOT installed by `npm i`** — there is no `prepare` script. `make install_precommit_hooks`
  (`npx husky install`) sets `core.hooksPath`; in a fresh clone neither husky nor pre-commit runs on commit.
- The release `git commit` uses `--no-verify` AND a leading `-` in the recipe, so a build that staged nothing does not
  abort the whole release.
- `CURRENT_RELEASE_NOTES` slices `RELEASE.md` from the `Release ONDEWO T2S Nodejs Client <VERSION>` heading to the next
  `^\*{5}` separator. It used to terminate on any line containing `**`, which a bold word in a release note would have
  truncated silently.
- `make TEST` masks `GITHUB_GH_TOKEN` / `NPM_PASSWORD` as `<set>`/`<unset>`, and every token-bearing `docker run` line
  is `@`-prefixed. Keep it that way.

## The release regenerates root `package.json` — CI scripts survive via `.ci-package.json`

The proto-compiler codegen (`cd src && npm run build`, whose output volume is the **repo root**) regenerates the ROOT
`package.json` on every release, overwriting the test scripts and stripping the test-only devDeps.

- **`.ci-package.json`** holds those scripts + devDeps and is immune to the codegen.
- **`make restore_ci_test_setup`** merges it back into `package.json` inside `build`, before `create_npm_package`. It is
  an inline `node -e` on purpose — a helper `.js` file gets caught by the release's type-checked eslint and fails.
- **`npm run test:drift`** (a CI step) fails the build when the two copies disagree, which is what turns a one-sided
  edit into a red build instead of a silent revert at the next release.
- Runtime deps the shipped auth helper needs (`undici`, `dotenv`) must be declared in `src/package.json`, the codegen's
  source of truth, or the published package loses them.
- `remove_npm_script` strips scripts from the `npm/` COPY, never from the repo root.

## Sharp edges

- **`public-api.js` does not work as an entry point.** It is generated with extensionless
  `export * from './api/…'` — ESM syntax in a CommonJS package — so both `require('@ondewo/t2s-client-nodejs')` and
  `import` fail with `ERR_MODULE_NOT_FOUND`. The deep paths work:
  `require('@ondewo/t2s-client-nodejs/api/auth/offlineTokenProvider')`. Fixing the barrel means changing the proto
  compiler; hand-editing it is pointless because `make build` overwrites it.
- **The generated `*_grpc_pb.d.ts` imports the LEGACY `grpc` package**, which is not installed, so TypeScript sees no
  inherited members on `Text2SpeechClient` (`getChannel`, `close`, …). Tests that need them cast through a small
  hand-written `InspectableClient` interface.
- **`tsx` is not a devDependency.** `make test_auth` / `make test_examples` used to run `node --import tsx` and always
  failed; they now call the npm scripts. Running the example against a live server still needs `npx tsx`, which fetches
  it on demand.
- **eslint's `ignores` covers `.test-build/` and `coverage/` as directories.** It previously named two exact compiled
  filenames, which stopped matching the moment the build layout changed.

## General Principles

- Follow existing patterns before introducing new abstractions.
- Keep changes minimal and consistent with surrounding code.
- Validate inputs early with descriptive, context-rich error messages.
- End edited Markdown and YAML files with a trailing newline.
