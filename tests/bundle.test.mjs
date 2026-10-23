import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdir, readFile, writeFile, unlink } from 'node:fs/promises';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { basename } from 'node:path';
const exec = promisify(execFile);
test('bundle selects the current version even when an older archive sorts first', async () => {
  await mkdir('.work/packages', { recursive: true });
  const fixture = '.work/packages/000-stale-artemis-fixture.tgz';
  await writeFile(fixture, 'old archive fixture', { flag: 'wx' });
  try {
    const pkg = JSON.parse(await readFile('package.json', 'utf8'));
    const { stdout } = await exec(process.execPath, ['scripts/bundle.mjs']);
    const result = JSON.parse(stdout);
    assert.equal(basename(result.archive), `${pkg.name}-${pkg.version}.tgz`);
    assert((await readFile(result.archive)).length > 1000);
  } finally {
    await unlink(fixture);
  }
});
