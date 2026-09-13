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

| Path                                                     | Owner          | Rule                                                                                |
| -------------------------------------------------------- | -------------- | ----------------------------------------------------------------------------------- |
| `src/auth/offlineTokenProvider.ts` + `.spec.ts`          | hand-written   | the D18 Keycloak offline-token provider; the gated surface                          |
| `examples/synthesizeExample.ts` + `.spec.ts`             | hand-written   | runnable example; also gated at 100%                                                |
| `api/ondewo/**`, `api/google/**`, `public-api.{js,d.ts}` | proto compiler | never edit; `make build` rewrites them                                              |
| `api/auth/offlineTokenProvider.{js,d.ts}`                | `tsc`          | **committed build output** of `src/auth`; regenerate with `make compile_auth`       |
| `src/ondewo-t2s-api`, `ondewo-proto-compiler`            | submodules     | move the gitlink, never edit inside                                                 |
| `README.md`                                              | copy           | verbatim `cp src/README.md .` inside `make build` — edit `src/README.md`, then copy |
| `RELEASE.md`                                             | copy           | same: `cp src/RELEASE.md .`                                                         |

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
- **The gate is `--statements 100 --lines 100 --branches 100 --functions 100`, and it is real.** c8 also runs with
  `--all` over `--src .test-build`, so a NEW hand-written file that no test imports is reported at 0% and fails the
  build instead of disappearing from the table. Verified twice on this base: an untested `src/auth/probeUntested.ts`
  drops the run to 99.32% and exits 1, and an uncovered function appended to the already-gated
  `src/auth/offlineTokenProvider.ts` does the same.
- **The only coverage exclusion is `/* c8 ignore start|stop */` around the `require.main === module` block** at the
  bottom of `examples/synthesizeExample.ts` — it cannot execute under the test runner (the spec imports the module) and
  its `process.exit(1)` cannot run in-process. Do not add blanket ignores anywhere else.
- **`main()` is covered by injection, not by mocking modules.** Its two outside-world boundaries are optional
  parameters: `main({ loginImpl, createClient })`. One test calls `main()` with NO overrides under an empty
  environment, which both selects the real defaults (covering the `??` branches) and stops at the first `requireEnv`
  before any network call.

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
2. `ONDEWO_PROTO_COMPILER_GIT_BRANCH=tags/5.14.0` in the `Makefile`. Anchor every edit on
   `^ONDEWO_PROTO_COMPILER_GIT_BRANCH=`, never on a line number — the variable block shifts whenever a release edits
   `ONDEWO_T2S_VERSION` above it.

```shell
git submodule update --init --recursive
git -C ondewo-proto-compiler fetch --tags origin     # .gitmodules uses an ssh URL; a fetch is required
git -C ondewo-proto-compiler checkout <VERSION>
git add ondewo-proto-compiler
perl -i -pe 's|^ONDEWO_PROTO_COMPILER_GIT_BRANCH=.*|ONDEWO_PROTO_COMPILER_GIT_BRANCH=tags/<VERSION>|' Makefile
```

- **A pin is not a regeneration.** The bump carried here is 5.11.0 → 5.14.0 on BOTH halves of the pin. Master's Makefile
  pin never left `tags/5.11.0` in any of its ten commits, and although master's gitlink did move 5.11.0 → 5.12.0 →
  5.13.0, the release commit `c8c3de1` ("Preparing for Release 6.6.1") reset it to `2cc55c0` = 5.11.0 — so
  `origin/master` ships 5.11.0 on both. Never trust a remembered FROM-version; measure it:
  `for c in origin/master HEAD; do git ls-tree $c ondewo-proto-compiler; git show $c:Makefile | grep ^ONDEWO_PROTO_COMPILER_GIT_BRANCH; done`.
  The already committed `api/` stubs and `public-api.*` are untouched until someone runs `make build`. Never write a
  RELEASE.md line claiming "regenerated with X" for a pin-only bump.
- **This bump is NOT inert for the nodejs generator.** Scope every impact check to the range the pin actually carries —
  `git -C ondewo-proto-compiler diff --stat 5.11.0 5.14.0` — not to 5.13.0..5.14.0. The Angular proto3
  explicit-presence fix (`angular/image-data/fix-proto3-optional-presence.ts` plus its bats fixtures) really is
  Angular-only, but 5.11.0..5.14.0 also changes the generator this repo runs
  (`cd ondewo-proto-compiler/nodejs && sh build.sh`): `nodejs/image-data/append-auth-exports.sh` is NEW (52 lines)
  and `compile-proto-2-nodejs.sh` now invokes it unconditionally after the copy step;
  `nodejs/image-data/make-lib-entry-point.sh` gains 37 lines that append explicit
  `export { Symbol } from './api/…';` lines disambiguating symbols two stubs both declare; and
  `js/image-data/make-lib-entry-point.sh` prunes the barrel's self-reference (+8/-5). The barrel is built in a fresh
  temp dir inside the container, so the `if [ ! -f public-api… ]` guard is always true and the new block DOES run —
  expect the next `make build` to produce a different `public-api.js` / `public-api.d.ts`, and diff them deliberately.
- **`append-auth-exports.sh` does NOT replace `ensure_auth_export`.** The compiler's new script re-exports every
  module in a top-level `auth/` directory **at the output root**. This repo has none: `make compile_auth` emits the
  helper to `api/auth` and runs AFTER `npm_run_build`, so the script takes its
  `No auth/ directory … nothing to re-export` path and exits 0. `ensure_auth_export` (which appends
  `./api/auth/offlineTokenProvider` — a different specifier the compiler's own `grep -Fq "'./auth/…'"` would not
  match) stays the load-bearing step. Re-check `tail public-api.js public-api.d.ts` after the next `make build`
  rather than assuming either way.
- Still no-ops across 5.11.0..5.14.0, so they must NOT appear in a bump diff: `nodejs/image-data/package.json` changes
  only its `version` field (the dependency sync only rewrites keys `src/package.json` already has), and both tags'
  Makefiles ship `NODE_VERSION=24.14.0`, which is what this repo's `Dockerfile.utils` already declares.
- The 6.6.1 RELEASE.md entry says "Regenerated with ondewo-proto-compiler 5.13.0", but `c8c3de1` released with both
  halves of the pin at 5.11.0, and `make check_out_correct_submodule_versions` checks the submodule out at the MAKEFILE
  pin — so that codegen ran against 5.11.0. It is a published inaccuracy: do not cite it as evidence for anything, and
  do not rewrite a released changelog entry to fix it.
- `make check_out_correct_submodule_versions` (run by `make build`) checks the submodule out at the Makefile pin, so a
  Makefile that lags the gitlink actively DOWNGRADES the submodule. Keep the two in sync.

## pre-commit

`uvx pre-commit run --all-files` must pass (`pre-commit` is not on PATH here; use `uvx`).

- **ORDER MATTERS: `conventional-pre-commit` before `giticket`.** Both run at the `commit-msg` stage and pre-commit
  executes repos in declaration order. giticket rewrites the subject to `[OND221-2830] chore: probe`, which is no
  longer a valid Conventional Commit — with giticket first, every commit on a ticket branch fails and only
  `--no-verify` gets through. Master already carries this ordering (`fix(tooling)`, 6.6.1) — never reorder them back.
  Re-verified both ways on this base: from a `feature/OND221-2830-…` branch the hook chain turns `chore: probe` into
  `[OND221-2830] chore: probe` and exits 0, while feeding that decorated subject to `conventional-pre-commit` alone
  exits 1.
- **`.markdownlint-cli2.yaml` must NOT declare `globs:`.** markdownlint-cli2 ADDS config globs to the filenames it is
  given, and pre-commit shards the file list across parallel processes (128 cores here → 2 shards). With
  `globs: ["*.md"]`, every shard also `--fix`-ed every root `*.md` — two concurrent writers on `RELEASE.md` produced a
  torn file: a dropped changelog bullet, `## Release` demoted to `# Release`, and `ONDEWO` truncated to `ONDEW`. This
  is also the real cause of the `TypeError: Cannot read properties of undefined (reading 'slice')` crash seen in
  `applyFix` under markdownlint-cli2 v0.23.0. Pass filenames explicitly when linting by hand:
  `npx markdownlint-cli2 "*.md" "src/*.md"`.
- **`RELEASE.md` is the authoritative changelog and the release tag holds the complete history.** A markdownlint /
  `--all-files` pass rewrites it in place (`fix: true`), and that — or a careless manual dedup — can silently drop
  `## Release … X.Y.Z` headings. If it happens, restore `RELEASE.md` AND `src/RELEASE.md` from the latest release tag
  rather than reconstructing them by hand. Re-check after any run that touched it: `grep -c '^## Release' RELEASE.md`
  and `grep -c '^\*\{5\}' RELEASE.md` are both 14 today, and the two copies must stay byte-identical
  (`cmp RELEASE.md src/RELEASE.md`).
- **`MD053` stays disabled.** Its auto-fix deletes the `[comment]: <> (START/END OF GITHUB README)` reference-definition
  markers that `make build` slices the published README with.
- Hook revs, all at the newest stable release: `markdownlint-cli2 v0.23.2`, `pre-commit-hooks v6.0.0`,
  `conventional-pre-commit v4.4.0`, `giticket '1.92'` — keep giticket **quoted**, an unquoted `1.92` is a YAML float.
  Reject `-preN` tags that `pre-commit autoupdate` proposes for conventional-pre-commit; they are pre-releases of
  versions that are already out.

## prettier, husky and the release

- **Every tracked file must already satisfy `.prettierrc` (`useTabs`, `singleQuote`).** `.husky/pre-commit` runs
  `make prettier PRETTIER_WRITE=-w` before `pre-commit run`, so anything prettier still wants to rewrite is left
  unstaged mid-commit; for `.pre-commit-config.yaml` that is fatal — `pre-commit run` aborts with _"Your pre-commit
  configuration is unstaged"_ and the commit fails. `.ci-package.json`, `.markdownlint-cli2.yaml`,
  `.pre-commit-config.yaml` and `CLAUDE.md` are therefore kept prettier-clean rather than ignored; run
  `npx prettier --check .` after editing any of them.
- **`README.md` and `RELEASE.md` ARE in `.prettierignore`,** for a different reason: prettier re-tabs the fenced code
  blocks that markdownlint's MD010 de-tabs (the two rewrite the file in opposite directions on every commit), and it
  rewrites `[comment]: <> (START OF GITHUB README)` into `[comment]: <> 'START OF GITHUB README'`, which breaks the
  release's README slice. The root `README.md` is only ever a `cp` of `src/README.md`, and `src/` is ignored too, so
  formatting the copy alone guaranteed drift. `coverage/` and `.nyc_output/` are ignored as machine-generated output.
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
- `remove_npm_script` strips scripts from the `npm/` COPY, never from the repo root, and is guarded against both
  a missing `npm/` directory (`@test -f npm/package.json || make create_npm_package`) and an empty scripts block
  (`@if [ -n "$(start)" ] && [ -n "$(end)" ]`). It used to die with `Error 255` when `create_npm_package` had not
  run yet. Keep both guards.
- **The codegen `docker run` must stay TTY-free.** The `build` script in `package.json` / `src/package.json` runs
  plain `docker run` — with `-it` the non-interactive release dies with _"cannot attach stdin to a TTY-enabled
  container because stdin is not a terminal"_. `-it` belongs only on the interactive `--entrypoint /bin/bash`
  `debug` script.

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

## Releasing: preflight and the traps that have actually bitten

Written after a release program across every ONDEWO client in one session. Each item below
cost real time or a broken artefact; every statement is derived from THIS repo's Makefile.

### Before you touch the version, check the released tag is in `master`

Releases here are cut from a `release/<version>` branch and are **not always merged back**, so
`master` can be missing work that is already published — and because a later version number
sorts above the unmerged one, a consumer upgrading silently loses it. The ondewo-nlu-client-python
7.1.0 release was exactly this: it shipped from a `master` that had never seen 7.0.5's
offline-token hand-off, so PyPI's newest release was a regression against its predecessor.

```bash
latest=$(git tag --sort=-v:refname | head -1)
git merge-base --is-ancestor "$latest" master && echo "in master" || echo "NOT in master -- merge first"
```

A fast-forward (`git merge --ff-only <tag>`) is the common case. A true merge needs care: resolve
metadata toward `master` and keep BOTH release-note sections, newest first — a reader upgrading
from the older line still needs the older entry.

### `git add` on a dirty submodule stages the WRONG commit

This repo has submodules (`ondewo-proto-compiler`, `src/ondewo-t2s-api`). If a submodule's working
tree is dirty, `git add <submodule>` stages **its current HEAD**, not the pointer you resolved
during a merge — silently regressing it to an older commit. `git checkout master -- <submodule>`
fixes the index but the next `git add` re-breaks it. Move the working tree instead:

```bash
want=$(git ls-tree master <submodule> | awk '{print $3}')
git -C <submodule> checkout -q "$want" && git add <submodule>
```

### The release notes are sliced by an EXACTLY-CASED heading

`CURRENT_RELEASE_NOTES` slices `RELEASE.md` with a perl range. In THIS repo the opening
pattern is, verbatim:

```text
Release ONDEWO T2S Nodejs Client ${ONDEWO_T2S_VERSION}
```

So the heading of a new entry must read exactly `## Release ONDEWO T2S Nodejs Client <version>`. **This wording is
not consistent across the ONDEWO repos** — some say `... <Name> Client`, some `... Client
<Name>` with the words reversed, the API repos say `... API` with no `Client` at all, and the
casing varies (`Js`, `Nodejs`, `Typescript`, `Survey`). Do not carry a heading over from a
sibling repo. Copy the PREVIOUS entry in this file and change only the version, or read the
pattern above out of the Makefile.

A heading that does not match yields an **empty slice**, and the GitHub release is then
created with empty notes or fails outright. Verify before releasing:

```bash
grep -c '^## Release ONDEWO T2S Nodejs Client ' RELEASE.md     # must be >= 1 for your new version
```

### `src/RELEASE.md` is the source of truth; the root file is GENERATED

The build runs `cp src/RELEASE.md .`, so an edit to the root `RELEASE.md` is **discarded by
the next build**. Write the entry in `src/RELEASE.md` (and copy it to the root if you want to
read it before building). This is silent: the release completes and the notes are simply gone.

### Publish order decides how a partial failure is recovered

`make release` in this repo runs:

1. `publish_npm_via_docker`
2. `create_release_branch`
3. `create_release_tag`
4. `release_to_github_via_docker_image`

The **npm publish happens FIRST**. So a failure in a later step (tag, GitHub release)
leaves the package already published. Do **not** re-run `make ondewo_release` to recover: the
`spc` guard refuses when the branch or tag already exists, and re-publishing the same version
is rejected by the registry. Re-run only the step that failed, passing the credential it needs.

### Verify against the registry, with the REAL package name

This package publishes as **`@ondewo/t2s-client-nodejs`**, which is not always the repository name — the JS client
publishes as `@ondewo/ondewo-nlu-client-js` (doubled `ondewo`), so a lookup by repo name returns
a 404 that reads like a failed release. Check the name in the manifest first, then:

```bash
npm view @ondewo/t2s-client-nodejs versions --json
```

**An npm publish can be STAGED but not yet served.** Immediately after a publish the registry may
answer 404 for the new version while refusing a re-publish with
`409 Cannot publish over previously staged version`. That is not a failure and the version is
not burned — wait and re-check before bumping to a new number.

### The release prints credentials — read the log BEFORE you scrub it

`make ondewo_release` clones `ondewo-devops-accounts` and passes the registry and GitHub tokens on
the make command line, so they are echoed into the console and into any transcript capturing it.
This is a known and accepted property of the shared release path: do **not** re-plumb the recipe.
Redirect the run to a file, read it through a filter, and shred the file afterwards — and read it
**before** shredding, or a genuine failure is lost with the secrets:

```bash
umask 077; make ondewo_release > /tmp/rel.log 2>&1; echo "RC=$?"
grep -avE 'TOKEN|PASSWORD|USERNAME|_authToken' /tmp/rel.log | tail -20   # read FIRST
shred -u /tmp/rel.log; rm -rf ondewo-devops-accounts                     # then scrub
```
