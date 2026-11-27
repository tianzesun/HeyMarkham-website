// Run with `pnpm test` (Node's built-in test runner; Node 22.18+ strips the types)
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { hasTranslation, localeOf, localisePath } from './i18n.ts';

test('home page switches both ways and keeps the section', () => {
  assert.equal(localisePath('/', 'zh'), '/zh');
  assert.equal(localisePath('/zh', 'en'), '/');
  assert.equal(localisePath('/#features', 'zh'), '/zh#features');
  assert.equal(localisePath('/zh#features', 'en'), '/#features');
});

test('translated pages get a /zh path', () => {
  assert.equal(localisePath('/app/support', 'zh'), '/zh/app/support');
  assert.equal(localisePath('/zh/app/support', 'en'), '/app/support');
  assert.equal(localisePath('/app/journey', 'zh'), '/zh/app/journey');
});

test('pages without a Chinese version stay English instead of a /zh 404', () => {
  assert.equal(localisePath('/privacy', 'zh'), '/privacy');
  assert.equal(localisePath('/app/releases', 'zh'), '/app/releases');
  assert.equal(localisePath('/app/delete-account', 'zh'), '/app/delete-account');
  assert.equal(hasTranslation('/privacy'), false);
  assert.equal(hasTranslation('/zh/app/support/'), true);
  assert.equal(hasTranslation('/zh#trust'), true);
});

test('locale comes from the /zh prefix only', () => {
  assert.equal(localeOf('/zh'), 'zh');
  assert.equal(localeOf('/zh/app/support'), 'zh');
  assert.equal(localeOf('/zhongwen'), 'en');
  assert.equal(localeOf('/'), 'en');
});
