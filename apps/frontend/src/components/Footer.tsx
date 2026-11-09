'use client';

import Link from 'next/link';
import { Mic } from 'lucide-react';
import { LIVE_URL } from '../lib/links';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-12 pb-24 px-6 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Company */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <Mic className="text-white" size={16} />
              </div>
              <span className="font-bold text-slate-900 dark:text-white">HeyMarkham</span>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              AI-powered voice assistant for Markham residents.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white mb-4">Product</h4>
            <ul className="space-y-2">
              <li><Link href="/#features" className="text-sm text-slate-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Features</Link></li>
              <li><a href={LIVE_URL} target="_blank" rel="noopener noreferrer" className="text-sm text-slate-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Try it live</a></li>
              <li><Link href="/#try" className="text-sm text-slate-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Get the app</Link></li>
              <li><Link href="/#contact" className="text-sm text-slate-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">For Municipalities</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="https://www.markham.ca" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">City of Markham (official site)</a></li>
              <li><Link href="/#faq" className="text-sm text-slate-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">FAQ</Link></li>
              <li><Link href="/privacy" className="text-sm text-slate-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/app/support" className="text-sm text-slate-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Mobile app help &amp; privacy</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white mb-4">Contact</h4>
            <ul className="space-y-2">
              <li><a href="mailto:contact@aydenait.com" className="text-sm text-slate-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">contact@aydenait.com</a></li>
              <li><a href="tel:+12898599523" className="text-sm text-slate-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">289-859-9523</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            © {currentYear} <a href="https://aydenait.com" target="_blank" rel="noopener noreferrer" className="text-primary-600 dark:text-primary-400 underline hover:no-underline">Aydenait Solutions</a>. All rights reserved.
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Built for Markham residents
          </p>
        </div>

        <p className="mt-6 text-xs text-slate-500 dark:text-slate-400 text-center md:text-left">
          HeyMarkham is an independent service by Aydenait Solutions and is not affiliated with or endorsed by the City of Markham.
          FAQ answers were checked against official sources in October 2026; always confirm current details on the source page.
        </p>
      </div>
    </footer>
  );
};