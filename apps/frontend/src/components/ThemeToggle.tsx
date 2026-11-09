'use client';

import { useEffect, useSyncExternalStore } from 'react';
import { Sun, Moon } from 'lucide-react';

type Theme = 'light' | 'dark';

// The "dark" class on <html> is the source of truth (theme-init.js sets it before React loads),
// so the toggle reads it directly and re-renders whenever it changes.
const subscribe = (onChange: () => void) => {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
  return () => observer.disconnect();
};
const currentTheme = (): Theme => (document.documentElement.classList.contains('dark') ? 'dark' : 'light');
const serverTheme = (): Theme => 'light';

export const ThemeToggle = () => {
  const theme = useSyncExternalStore(subscribe, currentTheme, serverTheme);

  // Follow the system setting until the visitor picks a theme
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('theme')) document.documentElement.classList.toggle('dark', e.matches);
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleTheme = () => {
    const newTheme: Theme = theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-white/10 text-slate-200 transition-all hover:bg-white/20 hover:text-white hover:scale-105 active:scale-95"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <Moon className="w-5 h-5" />
      ) : (
        <Sun className="w-5 h-5" />
      )}
    </button>
  );
};