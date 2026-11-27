// Chinese pages live under /zh and French pages under /fr; tell <html> before first paint so screen
// readers and no-JS crawlers see the right language (the root layout always renders lang="en-CA").
// Keep in step with htmlLang in src/lib/i18n.ts.
(function () {
  var langs = { zh: 'zh-Hans', fr: 'fr-CA' };
  var first = location.pathname.split('/')[1];
  if (langs[first]) document.documentElement.lang = langs[first];
})();
