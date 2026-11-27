'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Mic, Menu, X, ArrowUpRight } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { LIVE_URL } from '../lib/links';
import { localeHome, localeName, localeOf, localisePath, otherLocale, type Locale } from '../lib/i18n';

const copy: Record<Locale, {
  nav: { name: string; href: string }[];
  tryItLive: string;
  openMenu: string;
  closeMenu: string;
  switchAria: string;
}> = {
  en: {
    nav: [
      { name: 'What It Does', href: '#features' },
      { name: 'The App', href: '#app' },
      { name: 'Why Trust It', href: '#trust' },
      { name: 'For Municipalities', href: '#contact' },
    ],
    tryItLive: 'Try it live',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    switchAria: '切换到中文',
  },
  zh: {
    nav: [
      { name: '功能介绍', href: '#features' },
      { name: '手机应用', href: '#app' },
      { name: '为何可信', href: '#trust' },
      { name: '面向市政机构', href: '#contact' },
    ],
    tryItLive: '在线体验',
    openMenu: '打开菜单',
    closeMenu: '关闭菜单',
    switchAria: 'Switch to English',
  },
};

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // The root layout renders the Header without knowing the route, so locale comes from the pathname
  const pathname = usePathname();
  const locale = localeOf(pathname);
  const t = copy[locale];
  const home = localeHome(locale);
  const navigation = t.nav.map((item) => ({ name: item.name, href: `${home}${item.href}` }));

  // Shadow and border appear once the page scrolls under the header
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // The other language's URL for this page (keeps the section when one is in the URL bar)
  const switchHref = localisePath(pathname, otherLocale(locale));
  const followHash = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!window.location.hash) return;
    e.preventDefault();
    window.location.href = switchHref + window.location.hash;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] border-b bg-slate-900/[0.97] transition-[box-shadow,border-color] duration-300 ${
        isScrolled ? 'border-slate-700/80 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.25)]' : 'border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="animate-fade-up flex items-center gap-3">
            <div className="w-9 h-9 bg-primary-600 rounded-lg flex items-center justify-center">
              <Mic className="text-white" size={18} />
            </div>
            <Link href={home} className="flex items-center">
              <span className="text-lg font-bold text-white">
                Hey Markham
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className="animate-fade-up text-sm font-medium text-white hover:text-primary-200 transition-colors"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="animate-fade-up hidden md:flex items-center gap-3 [animation-delay:300ms]">
            <ThemeToggle locale={locale} />
            <a
              href={switchHref}
              onClick={followHash}
              lang={locale === 'en' ? 'zh-Hans' : 'en-CA'}
              title={locale === 'en' ? '切换到中文' : 'Switch to English'}
              aria-label={t.switchAria}
              className="inline-flex items-center justify-center px-3 py-2 rounded-lg border border-white/20 text-sm font-medium text-white hover:bg-white/10 transition-colors"
            >
              {localeName[otherLocale(locale)]}
            </a>
            <a
              href={LIVE_URL}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium text-sm transition-all shadow-sm hover:-translate-y-0.5"
            >
              {t.tryItLive}
              <ArrowUpRight size={16} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle locale={locale} />
            <a
              href={switchHref}
              onClick={followHash}
              lang={locale === 'en' ? 'zh-Hans' : 'en-CA'}
              title={locale === 'en' ? '切换到中文' : 'Switch to English'}
              aria-label={t.switchAria}
              className="px-3 py-1.5 rounded-lg border border-white/20 text-sm font-medium text-white"
            >
              {localeName[otherLocale(locale)]}
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? t.closeMenu : t.openMenu}
              aria-expanded={isMenuOpen}
              className="p-2 text-slate-300 hover:text-white transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation: grid row height animates from 0 to content height */}
        <div
          className={`md:hidden grid transition-[grid-template-rows,opacity] duration-300 ${
            isMenuOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
          }`}
          inert={!isMenuOpen}
        >
          <div className="overflow-hidden">
            <div className="py-4 space-y-1 border-t border-slate-800">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-2.5 text-sm font-medium text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-3 mt-3 border-t border-slate-800">
                <a
                  href={LIVE_URL}
                  target="_blank" rel="noopener noreferrer"
                  className="block mx-4 bg-primary-600 hover:bg-primary-700 text-white px-5 py-2.5 rounded-lg font-medium text-sm text-center transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t.tryItLive}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
