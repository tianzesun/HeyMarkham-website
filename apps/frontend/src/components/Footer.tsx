'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Mic } from 'lucide-react';
import { LIVE_URL } from '../lib/links';
import { localeOf, localisePath, type Locale } from '../lib/i18n';

const copy: Record<Locale, {
  tagline: string;
  explore: string;
  features: string;
  tryItLive: string;
  getApp: string;
  whatsNew: string;
  forMunicipalities: string;
  careers: string;
  about: string;
  resources: string;
  citySite: string;
  privacy: string;
  appHelp: string;
  contact: string;
  rights: string;
  builtFor: string;
  disclaimer: string;
}> = {
  en: {
    tagline: 'Quick answers about City of Markham services, by voice or text.',
    explore: 'Explore',
    features: 'Features',
    tryItLive: 'Try it live',
    getApp: 'Get the app',
    whatsNew: 'What’s new in the app',
    forMunicipalities: 'For Municipalities',
    careers: 'Careers',
    about: 'About Aydenait Solutions',
    resources: 'Resources',
    citySite: 'City of Markham (official site)',
    privacy: 'Privacy Policy',
    appHelp: 'Mobile app help & privacy',
    contact: 'Contact',
    rights: 'All rights reserved.',
    builtFor: 'Built for Markham residents',
    disclaimer: 'Hey Markham is an independent service by Aydenait Solutions and is not affiliated with or endorsed by the City of Markham.',
  },
  zh: {
    tagline: '用语音或文字，快速获取万锦市服务信息。',
    explore: '快速链接',
    features: '功能介绍',
    tryItLive: '在线体验',
    getApp: '下载应用',
    whatsNew: '应用更新日志',
    forMunicipalities: '面向市政机构',
    careers: '加入我们',
    about: '关于 Aydenait Solutions',
    resources: '相关资源',
    citySite: '万锦市官网',
    privacy: '隐私政策',
    appHelp: '应用帮助与隐私',
    contact: '联系我们',
    rights: '版权所有。',
    builtFor: '为万锦市居民打造',
    disclaimer: 'Hey Markham 是 Aydenait Solutions 提供的独立服务，与万锦市没有隶属关系，也未获得万锦市的背书。',
  },
  fr: {
    tagline: 'Des réponses rapides sur les services de la Ville de Markham, à voix haute ou par écrit.',
    explore: 'Explorer',
    features: 'Fonctionnalités',
    tryItLive: 'Essayer en ligne',
    getApp: 'Télécharger l’application',
    whatsNew: 'Nouveautés de l’application (en anglais)',
    forMunicipalities: 'Pour les municipalités',
    careers: 'Carrières',
    about: 'À propos d’Aydenait Solutions',
    resources: 'Ressources',
    citySite: 'Ville de Markham (site officiel)',
    privacy: 'Politique de confidentialité (en anglais)',
    appHelp: 'Aide et confidentialité de l’application mobile',
    contact: 'Nous joindre',
    rights: 'Tous droits réservés.',
    builtFor: 'Conçu pour les résidents de Markham',
    disclaimer: 'Hey Markham est un service indépendant d’Aydenait Solutions, qui n’est ni affilié à la Ville de Markham ni approuvé par celle-ci.',
  },
};

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const locale = localeOf(usePathname());
  const t = copy[locale];

  // Internal links follow the locale; external ones never change
  const internal = (path: string) => localisePath(path, locale);

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
              <span className="font-bold text-slate-900 dark:text-white">Hey Markham</span>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              {t.tagline}
            </p>
          </div>

          {/* Explore: the app, then the company */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white mb-4">{t.explore}</h4>
            <ul className="space-y-2">
              <li><Link href={internal('/#features')} className="text-sm text-slate-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">{t.features}</Link></li>
              <li><a href={LIVE_URL} target="_blank" rel="noopener noreferrer" className="text-sm text-slate-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">{t.tryItLive}</a></li>
              <li><Link href={internal('/#app')} className="text-sm text-slate-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">{t.getApp}</Link></li>
              <li><Link href={internal('/app/releases')} className="text-sm text-slate-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">{t.whatsNew}</Link></li>
              <li><Link href={internal('/#contact')} className="text-sm text-slate-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">{t.forMunicipalities}</Link></li>
              <li><Link href={internal('/about')} className="text-sm text-slate-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">{t.about}</Link></li>
              <li><Link href={internal('/careers')} className="text-sm text-slate-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">{t.careers}</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white mb-4">{t.resources}</h4>
            <ul className="space-y-2">
              <li><a href="https://www.markham.ca" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">{t.citySite}</a></li>
              <li><Link href={internal('/privacy')} className="text-sm text-slate-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">{t.privacy}</Link></li>
              <li><Link href={internal('/app/support')} className="text-sm text-slate-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">{t.appHelp}</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white mb-4">{t.contact}</h4>
            <ul className="space-y-2">
              <li><a href="mailto:contact@aydenait.com" className="text-sm text-slate-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">contact@aydenait.com</a></li>
              <li><a href="tel:+12898599523" className="text-sm text-slate-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">289-859-9523</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            © {currentYear} <a href="https://aydenait.com" target="_blank" rel="noopener noreferrer" className="text-primary-600 dark:text-primary-400 underline hover:no-underline">Aydenait Solutions</a>. {t.rights}
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            {t.builtFor}
          </p>
        </div>

        <p className="mt-6 text-xs text-slate-500 dark:text-slate-400 text-center md:text-left">
          {t.disclaimer}
        </p>
      </div>
    </footer>
  );
};
