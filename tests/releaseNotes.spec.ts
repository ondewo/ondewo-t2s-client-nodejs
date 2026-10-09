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

// The GitHub release body is sliced out of RELEASE.md by the Makefile's CURRENT_RELEASE_NOTES:
// perl -ne 'print if /Release ONDEWO T2S Nodejs Client ${ONDEWO_T2S_VERSION}/../^\*{5}/'
// The slice starts at the heading naming the version and ends at the next `*****` line. A heading
// spelled any other way gives an EMPTY slice, and `gh release create -n ""` then publishes a release
// without notes and without an error; a section without its separator runs into the next release.

import { strict as assert } from 'assert';
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
const MAKEFILE: string = readFileSync(join(REPO_ROOT, 'Makefile'), 'utf8');
const RELEASE_NOTES: string = readFileSync(join(REPO_ROOT, 'RELEASE.md'), 'utf8');
const SLICE_TEXT: string = 'Release ONDEWO T2S Nodejs Client';
const HEADING_PREFIX: string = `## ${SLICE_TEXT} `;
const SEPARATOR: RegExp = /^\*{5}/;
const LINES: string[] = RELEASE_NOTES.split('\n');

/**
 * Reproduce the Makefile's perl flip-flop range `/<SLICE_TEXT> <version>/../^\*{5}/` (the version's
 * dots stay regex wildcards, exactly as perl sees them).
 *
 * @param version - The release version.
 * @returns The lines perl prints.
 */
function releaseNotesSlice(version: string): string[] {
	const start: RegExp = new RegExp(`${SLICE_TEXT} ${version}`);
	const printed: string[] = [];
	let inRange: boolean = false;
	for (const line of LINES) {
		if (!inRange && start.test(line)) {
			inRange = true;
		}
		if (inRange) {
			printed.push(line);
			if (SEPARATOR.test(line)) {
				inRange = false;
			}
		}
	}
	return printed;
}

/** Every line that looks like a release heading, whatever its spelling. */
const HEADINGS: string[] = LINES.filter((line: string): boolean => /Release ONDEWO/i.test(line));

/** The versions named by the correctly spelled headings, in file order. */
const VERSIONS: string[] = HEADINGS.map((line: string): string => line.slice(HEADING_PREFIX.length).trim());

describe('RELEASE.md and the release-notes slice', () => {
	it('the Makefile slices the heading spelling pinned here, up to the ***** separator', () => {
		assert.ok(
			MAKEFILE.includes(`perl -ne 'print if /${SLICE_TEXT} \${ONDEWO_T2S_VERSION}/../^\\*{5}/'`),
			'CURRENT_RELEASE_NOTES must slice RELEASE.md with the pinned perl range'
		);
	});

	it('the build copies src/RELEASE.md over RELEASE.md, so the two are identical', () => {
		assert.ok(MAKEFILE.includes('cp src/RELEASE.md .'));
		assert.equal(readFileSync(join(REPO_ROOT, 'src', 'RELEASE.md'), 'utf8'), RELEASE_NOTES);
	});

	it('every release heading uses the spelling the Makefile slices', () => {
		assert.ok(HEADINGS.length > 0);
		const misspelled: string[] = HEADINGS.filter(
			(line: string): boolean => !new RegExp(`^${HEADING_PREFIX}\\d+\\.\\d+\\.\\d+\\s*$`).test(line)
		);
		assert.deepEqual(misspelled, []);
	});

	it('no version has two sections', () => {
		const duplicates: string[] = VERSIONS.filter(
			(version: string, index: number): boolean => VERSIONS.indexOf(version) !== index
		);
		assert.deepEqual(duplicates, []);
	});

	it('every section ends at its ***** separator, and its slice holds exactly that section', () => {
		for (const version of VERSIONS) {
			const slice: string[] = releaseNotesSlice(version);
			assert.ok(slice.length > 0, `${version}: empty slice`);
			assert.ok(SEPARATOR.test(slice[slice.length - 1]), `${version}: section does not end at a ***** separator`);
			const headings: string[] = slice.filter((line: string): boolean => /Release ONDEWO/i.test(line));
			assert.deepEqual(headings.length, 1, `${version}: slice runs into another release section`);
			const content: string[] = slice.slice(1, -1).filter((line: string): boolean => line.trim() !== '');
			assert.ok(content.length > 0, `${version}: section has no content`);
		}
	});

	it('the version the Makefile releases has non-empty release notes', () => {
		const match: RegExpMatchArray | null = MAKEFILE.match(/^ONDEWO_T2S_VERSION\s*=\s*(\S+)\s*$/m);
		assert.ok(match !== null, 'ONDEWO_T2S_VERSION not found in the Makefile');
		const content: string[] = releaseNotesSlice(match[1])
			.slice(1, -1)
			.filter((line: string): boolean => line.trim() !== '');
		assert.ok(content.length > 1, `no release notes for ${match[1]}`);
	});
});
