import type { Locale } from '../lib/i18n';

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
    {locale === 'zh' ? (
      <>已对照 {new URL(source).hostname.replace(/^www\./, '')} 核对。</>
    ) : (
      <>Checked against {new URL(source).hostname.replace(/^www\./, '')}.</>
    )}{' '}
    <a href={source} target="_blank" rel="noopener noreferrer" className={`underline ${linkClassName}`}>
      {locale === 'zh' ? '查看来源' : 'View source'}
    </a>
  </>
);
