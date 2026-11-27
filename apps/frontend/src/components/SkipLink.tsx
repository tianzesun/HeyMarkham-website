'use client';

import { usePathname } from 'next/navigation';
import { localeOf, type Locale } from '../lib/i18n';

const label: Record<Locale, string> = {
  en: 'Skip to main content',
  zh: '跳到主要内容',
  fr: 'Passer au contenu principal',
};

// Rendered by the root layout, which doesn't know the route, so the locale
// comes from the pathname like it does in Header and Footer.
export function SkipLink() {
  const pathname = usePathname();

  return (
    <a
      href="#main-content"
      className="fixed top-0 left-0 z-[10000] bg-primary-600 text-white px-4 py-3 -translate-y-full focus:translate-y-0 transition-transform"
    >
      {label[localeOf(pathname)]}
    </a>
  );
}
