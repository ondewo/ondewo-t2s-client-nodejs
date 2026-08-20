# Release History

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
