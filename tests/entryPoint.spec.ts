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

// `require('@ondewo/t2s-client-nodejs')` must work. Up to ondewo-proto-compiler 5.15.4 the generated
// public-api.js (the package `main`) was a list of `export * from` lines in a CommonJS package, so
// Node loaded it as an ES module and failed with ERR_MODULE_NOT_FOUND. The package root is loaded
// in a child process exactly the way a consumer does it, on every Node version CI runs.

import { strict as assert } from 'assert';
import { execFileSync } from 'child_process';
import { existsSync, readFileSync } from 'fs';
import { dirname, join } from 'path';
import { describe, it } from 'node:test';

/**
 * Walk up from the compiled spec to the repository root (the directory holding the Makefile).
 *
 * @param start - Directory to start from.
 * @returns The repository root.
 */
function findRepoRoot(start: string): string {
	let dir: string = start;
	while (!existsSync(join(dir, 'Makefile'))) {
		const parent: string = dirname(dir);
		assert.notEqual(parent, dir, 'no Makefile above the test build');
		dir = parent;
	}
	return dir;
}

const REPO_ROOT: string = findRepoRoot(__dirname);

/**
 * `require()` the package root (its `main`) in a fresh Node process.
 *
 * @returns The names the entry point exports.
 */
function exportedNames(): string[] {
	const script: string = `process.stdout.write(JSON.stringify(Object.keys(require(${JSON.stringify(REPO_ROOT)}))))`;
	// The child loads the SHIPPED auth/*.js; keep it out of the parent's c8 coverage, which measures the test build.
	const env: NodeJS.ProcessEnv = { ...process.env };
	env.NODE_V8_COVERAGE = '';
	return JSON.parse(execFileSync(process.execPath, ['-e', script], { encoding: 'utf8', env })) as string[];
}

describe('package entry point', () => {
	it('package.json main is the CommonJS public-api.js', () => {
		const manifest: { main?: string } = JSON.parse(readFileSync(join(REPO_ROOT, 'package.json'), 'utf8')) as {
			main?: string;
		};
		assert.equal(manifest.main, 'public-api.js');
		const lines: string[] = readFileSync(join(REPO_ROOT, 'public-api.js'), 'utf8').split('\n');
		assert.deepEqual(
			lines.filter((line: string): boolean => line.startsWith('export ')),
			[]
		);
	});

	it('require() of the package root loads and exports the generated clients and the helpers', () => {
		const names: string[] = exportedNames();
		for (const name of [
			'Text2SpeechClient',
			'SynthesizeRequest',
			'login',
			'OfflineTokenProvider',
			'createGrpcClient',
			'createChannelCredentials',
			'GrpcClientConfig'
		]) {
			assert.ok(names.includes(name), `${name} is not exported from the package root`);
		}
	});
});
