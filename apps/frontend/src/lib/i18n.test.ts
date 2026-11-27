// Run with `pnpm test` (Node's built-in test runner; Node 22.18+ strips the types)
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { availableLocales, hasTranslation, isLocale, languageAlternates, localeHome, localeOf, localisePath } from './i18n.ts';

test('home page switches between all three languages and keeps the section', () => {
  assert.equal(localisePath('/', 'zh'), '/zh');
  assert.equal(localisePath('/', 'fr'), '/fr');
  assert.equal(localisePath('/zh', 'en'), '/');
  assert.equal(localisePath('/fr', 'en'), '/');
  assert.equal(localisePath('/zh', 'fr'), '/fr');
  assert.equal(localisePath('/#features', 'zh'), '/zh#features');
  assert.equal(localisePath('/zh#features', 'en'), '/#features');
  assert.equal(localisePath('/fr#trust', 'zh'), '/zh#trust');
});

test('translated pages get a locale path', () => {
  assert.equal(localisePath('/app/support', 'zh'), '/zh/app/support');
  assert.equal(localisePath('/app/support', 'fr'), '/fr/app/support');
  assert.equal(localisePath('/zh/app/support', 'en'), '/app/support');
  assert.equal(localisePath('/fr/app/journey', 'zh'), '/zh/app/journey');
  assert.equal(localisePath('/careers', 'zh'), '/zh/careers');
  assert.equal(localisePath('/careers#ai-rag-engineer', 'fr'), '/fr/careers#ai-rag-engineer');
  assert.equal(localisePath('/about', 'zh'), '/zh/about');
  assert.equal(localisePath('/fr/about', 'en'), '/about');
});

test('pages without a translation stay English instead of a 404', () => {
  assert.equal(localisePath('/privacy', 'zh'), '/privacy');
  assert.equal(localisePath('/privacy', 'fr'), '/privacy');
  assert.equal(localisePath('/app/releases', 'fr'), '/app/releases');
  assert.equal(hasTranslation('/privacy', 'fr'), false);
  assert.equal(hasTranslation('/privacy', 'en'), true);
  assert.equal(hasTranslation('/zh/app/support/', 'fr'), true);
  assert.equal(hasTranslation('/fr#trust', 'zh'), true);
  assert.deepEqual(availableLocales('/privacy'), ['en']);
  assert.deepEqual(availableLocales('/fr/app/support'), ['en', 'zh', 'fr']);
});

test('locale comes from the URL prefix only', () => {
  assert.equal(localeOf('/zh'), 'zh');
  assert.equal(localeOf('/zh/app/support'), 'zh');
  assert.equal(localeOf('/fr'), 'fr');
  assert.equal(localeOf('/fr/app/journey'), 'fr');
  assert.equal(localeOf('/zhongwen'), 'en');
  assert.equal(localeOf('/francais'), 'en');
  assert.equal(localeOf('/'), 'en');
  assert.equal(localeHome('fr'), '/fr');
  assert.equal(localeHome('en'), '/');
});

test('hreflang alternates list every language a page exists in', () => {
  assert.deepEqual(languageAlternates('/fr'), { en: '/', 'zh-Hans': '/zh', 'fr-CA': '/fr', 'x-default': '/' });
  assert.deepEqual(languageAlternates('/zh/app/support'), {
    en: '/app/support', 'zh-Hans': '/zh/app/support', 'fr-CA': '/fr/app/support', 'x-default': '/app/support',
  });
  assert.deepEqual(languageAlternates('/privacy'), { en: '/privacy', 'x-default': '/privacy' });
});

test('isLocale rejects anything else', () => {
  assert.equal(isLocale('fr'), true);
  assert.equal(isLocale('de'), false);
  assert.equal(isLocale(undefined), false);
});
