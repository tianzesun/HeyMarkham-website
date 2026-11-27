import type { Locale } from '../lib/i18n';

const copy: Record<Locale, { checked: (host: string) => string; view: string }> = {
  en: { checked: (host) => `Checked against ${host}.`, view: 'View source' },
  zh: { checked: (host) => `已对照 ${host} 核对。`, view: '查看来源' },
  fr: { checked: (host) => `Vérifié sur ${host}.`, view: 'Voir la source' },
};

// Names the official site an answer was checked against and links to the exact page
export const AnswerSource = ({
  source,
  linkClassName = '',
  locale = 'en',
}: {
  source: string;
  linkClassName?: string;
  locale?: Locale;
}) => (
  <>
    {copy[locale].checked(new URL(source).hostname.replace(/^www\./, ''))}{' '}
    <a href={source} target="_blank" rel="noopener noreferrer" className={`underline ${linkClassName}`}>
      {copy[locale].view}
    </a>
  </>
);
