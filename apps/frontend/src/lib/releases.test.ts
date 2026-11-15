// Run with `pnpm test` (Node's built-in test runner; Node 22.18+ strips the types)
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { compareVersions, formatReleaseDate, latestRelease, releaseId, releases } from './releases.ts';

test('every release has a MAJOR.MINOR.PATCH version and a real date', () => {
  for (const r of releases) {
    assert.match(r.version, /^\d+\.\d+\.\d+$/, r.version);
    assert.match(r.date, /^\d{4}-\d{2}-\d{2}$/, `${r.version}: ${r.date}`);
    assert.ok(!Number.isNaN(Date.parse(r.date)), `${r.version}: ${r.date}`);
  }
});

test('newest first, with no repeated versions and dates never going backwards', () => {
  for (let i = 1; i < releases.length; i++) {
    const newer = releases[i - 1];
    const older = releases[i];
    assert.equal(compareVersions(newer.version, older.version), 1, `${newer.version} should be above ${older.version}`);
    assert.ok(newer.date >= older.date, `${newer.version} (${newer.date}) is dated before ${older.version} (${older.date})`);
  }
  assert.equal(latestRelease, releases[0]);
});

test('every release says what changed', () => {
  for (const r of releases) {
    const items = [...(r.new ?? []), ...(r.improved ?? []), ...(r.fixed ?? [])];
    assert.ok(r.title.trim(), `${r.version} has no title`);
    assert.ok(items.length > 0, `${r.version} lists no changes`);
    for (const item of items) assert.ok(item.trim().length > 10, `${r.version}: "${item}"`);
  }
});

test('automatic updates only carry fixes, so they are patch versions', () => {
  for (const r of releases.filter((r) => r.delivery === 'automatic')) {
    assert.notEqual(r.version.split('.')[2], '0', `${r.version} is automatic but not a patch`);
  }
});

test('helpers', () => {
  assert.equal(compareVersions('1.10.0', '1.9.0'), 1);
  assert.equal(compareVersions('1.1.0', '1.1.1'), -1);
  assert.equal(compareVersions('2.0.0', '2.0.0'), 0);
  assert.equal(releaseId('1.1.0'), 'v1.1.0');
  assert.equal(formatReleaseDate('2026-11-15'), 'November 15, 2026');
});
