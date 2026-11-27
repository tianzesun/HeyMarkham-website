'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { Check, ChevronDown, Globe } from 'lucide-react';
import { availableLocales, htmlLang, localeName, localisePath, type Locale } from '../lib/i18n';

// Short labels for the phone header, where a full "Français" doesn't fit beside the menu button
const shortName: Record<Locale, string> = { en: 'EN', zh: '中文', fr: 'FR' };

// What the button is called for screen readers, in every language, so it's findable whatever the page is in
const buttonLabel: Record<Locale, string> = {
  en: 'Language: English',
  zh: '语言：中文',
  fr: 'Langue : français',
};

/**
 * The language menu at the top right: a button showing the current language, opening a list of the
 * languages this page exists in. A disclosure (button + list of links), not an ARIA menu, so it works
 * with plain Tab and Enter. Hidden on pages that only exist in English.
 */
export function LanguageSwitcher({ pathname, locale, compact = false }: {
  pathname: string;
  locale: Locale;
  compact?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const button = useRef<HTMLButtonElement>(null);
  const listId = useId();
  const locales = availableLocales(pathname);

  // Close on a click outside or on Escape (which also hands focus back to the button)
  useEffect(() => {
    if (!open) return;
    const onPointer = (e: PointerEvent) => {
      if (!root.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        button.current?.focus();
      }
    };
    document.addEventListener('pointerdown', onPointer);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('pointerdown', onPointer);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  if (locales.length < 2) return null;

  // Keep the section the visitor is reading (#app, #trust) when they switch
  const follow = (href: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!window.location.hash) return;
    e.preventDefault();
    window.location.href = href + window.location.hash;
  };

  return (
    <div ref={root} className="relative">
      <button
        ref={button}
        type="button"
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
        aria-controls={listId}
        aria-label={buttonLabel[locale]}
        className={`inline-flex items-center gap-1.5 rounded-lg border border-white/20 text-sm font-medium text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-300 ${
          compact ? 'px-2.5 py-1.5' : 'px-3 py-2'
        }`}
      >
        <Globe size={16} aria-hidden="true" />
        <span>{compact ? shortName[locale] : localeName[locale]}</span>
        <ChevronDown size={14} aria-hidden="true" className={`transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <ul
          id={listId}
          className="absolute right-0 mt-2 min-w-[10rem] rounded-xl border border-slate-700 bg-slate-900 py-1.5 shadow-xl"
        >
          {locales.map(option => {
            const href = localisePath(pathname, option);
            const current = option === locale;
            return (
              <li key={option}>
                <a
                  href={href}
                  onClick={follow(href)}
                  lang={htmlLang[option]}
                  hrefLang={htmlLang[option]}
                  aria-current={current ? 'page' : undefined}
                  className={`flex items-center justify-between gap-4 px-4 py-2 text-sm transition-colors focus:outline-none focus-visible:bg-white/10 ${
                    current ? 'text-white font-semibold' : 'text-slate-300 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {localeName[option]}
                  {current && <Check size={16} aria-hidden="true" className="text-primary-300" />}
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
