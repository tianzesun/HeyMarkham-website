// Chinese pages live under /zh; tell <html> before first paint so screen readers
// and no-JS crawlers see the right language (the root layout always renders lang="en-CA").
(function () {
  if (location.pathname === '/zh' || location.pathname.indexOf('/zh/') === 0) {
    document.documentElement.lang = 'zh-Hans';
  }
})();
