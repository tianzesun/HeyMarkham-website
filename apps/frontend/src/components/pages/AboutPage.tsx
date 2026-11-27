import Link from 'next/link';
import {
  ArrowRight, ArrowUpRight, BarChart3, Blocks, CalendarCheck, CheckCircle2, ClipboardCheck, MessagesSquare,
  ScanSearch, Workflow
} from 'lucide-react';
import { RevealOnScroll } from '../RevealOnScroll';
import { localisePath, type Locale } from '../../lib/i18n';

// /about, /zh/about and /fr/about: the company behind Hey Markham. Facts come from the company site
// (aydenait-website.vercel.app: home, /about, /services, /products, read November 27, 2026): Toronto-based,
// AI for education, civic services and finance, six products, the services below, and a free 30-minute
// first consultation. Keep to what that site says; no client names, awards or figures it doesn't state.

const COMPANY_SITE = 'https://aydenait-website.vercel.app';
const BOOKING_URL = 'https://calendly.com/aydenait/';
const EMAIL = 'contact@aydenait.com';

// Products in the order the company site lists them; Hey Markham is flagged as this site
const PRODUCTS: { name: string; sector: 'education' | 'civic' | 'finance'; current?: boolean }[] = [
  { name: 'Faculty Workload Management System', sector: 'education' },
  { name: 'CodeProvenance', sector: 'education' },
  { name: 'DeepRubric', sector: 'education' },
  { name: 'ExamFlowPilot', sector: 'education' },
  { name: 'Hey Markham', sector: 'civic', current: true },
  { name: 'AlphOpt', sector: 'finance' },
];

const en = {
  eyebrow: 'About us',
  title: 'Aydenait Solutions',
  lead:
    'Hey Markham is made by Aydenait Solutions, a Toronto-based AI company. We design, build and support AI systems for education, civic services and finance, and we build our own products too.',
  leadLink: 'Visit our company website',

  servicesTitle: 'What we build for organizations',
  servicesIntro: 'From a first pilot to a system your staff use every day, with the reasoning and sources visible.',
  services: [
    { title: 'AI assistants and chatbots', description: 'Assistants that answer questions from your documents, policies or data, and show the source for every answer.' },
    { title: 'AI-assisted review and scoring', description: 'Score, grade or sort submissions against your own criteria, with a person approving every result.' },
    { title: 'Detection and risk analysis', description: 'Find similarities, anomalies and risks in large volumes of documents, code or records.' },
    { title: 'Planning and workflow automation', description: 'Replace spreadsheets and manual steps with rule-based systems your staff can trust.' },
    { title: 'Analytics and decision support', description: 'Turn data, news and signals into analysis your team can act on, with the reasoning shown.' },
    { title: 'AI inside the systems you already use', description: 'Add AI to your website, learning platform, CRM or internal apps.' },
  ],

  productsTitle: 'Our products',
  sectors: { education: 'Higher education', civic: 'Civic services', finance: 'Financial services' },
  productLines: [
    'Course assignments, workload tracking and term planning for academic departments.',
    'Code similarity and AI-authorship detection that produces evidence, not just a score.',
    'AI-assisted, rubric-based grading for programming courses, with a person in the loop.',
    'Exam administration: rosters, seating and personalized exam documents.',
    'Answers residents’ questions about City of Markham services, by voice or text, with the official sources.',
    'Options-strategy analysis and risk management with news and sentiment AI. It doesn’t place trades.',
  ],
  youreHere: 'You’re here',
  allProducts: 'All products',

  proofTitle: 'Hey Markham, in practice',
  proof: [
    'Answers from official markham.ca pages, with every source listed',
    'Says so when it doesn’t know, instead of guessing',
    'Tells residents who to contact when something isn’t run by the City',
    'Finds your pickup day from your address and reminds you the night before',
  ],
  proofLink: 'See what Hey Markham does',

  ctaTitle: 'Have a project in mind?',
  ctaText: 'Book a free 30-minute consultation, or email us about what you’d like AI to do for your organization.',
  ctaBook: 'Book a free consultation',
  ctaEmail: 'Or email',
  careers: 'Want to build with us? See open roles',
  disclaimer: 'Hey Markham is an independent service and is not affiliated with or endorsed by the City of Markham.',
};

type AboutCopy = typeof en;

const zh: AboutCopy = {
  eyebrow: '关于我们',
  title: 'Aydenait Solutions',
  lead: 'Hey Markham 由 Aydenait Solutions 开发。我们是一家总部位于多伦多的 AI 公司，为教育、市政服务和金融领域设计、开发并维护 AI 系统，同时也打造自己的产品。',
  leadLink: '访问公司官网',

  servicesTitle: '我们为机构打造的方案',
  servicesIntro: '从第一个试点到员工每天使用的系统，推理过程和信息来源都清晰可见。',
  services: [
    { title: 'AI 助手与聊天机器人', description: '根据您的文件、政策或数据回答问题，并为每个答案注明来源。' },
    { title: 'AI 辅助审核与评分', description: '按照您自己的标准为提交内容评分、打分或分类，每个结果都由人工确认。' },
    { title: '检测与风险分析', description: '在大量文件、代码或记录中发现相似之处、异常和风险。' },
    { title: '规划与流程自动化', description: '用员工信得过的规则化系统，取代电子表格和手工步骤。' },
    { title: '数据分析与决策支持', description: '把数据、新闻和各类信号转化为团队可以据此行动的分析，并展示推理过程。' },
    { title: '在现有系统中加入 AI', description: '为您的网站、学习平台、CRM 或内部应用加入 AI 功能。' },
  ],

  productsTitle: '我们的产品',
  sectors: { education: '高等教育', civic: '市政服务', finance: '金融服务' },
  productLines: [
    '为院系提供课程分配、工作量追踪和学期规划。',
    '代码相似度和 AI 代写检测，提供证据，而不只是一个分数。',
    '面向编程课程的 AI 辅助评分量表批改，由人工把关。',
    '考试管理：考生名单、座位安排和个性化考试文件。',
    '用语音或文字回答居民关于万锦市服务的问题，并附上官方来源。',
    '结合新闻和情绪 AI 的期权策略分析与风险管理。不代为下单交易。',
  ],
  youreHere: '当前网站',
  allProducts: '全部产品',

  proofTitle: 'Hey Markham 的实际应用',
  proof: [
    '答案来自万锦市官方网页 markham.ca，并列出所有来源',
    '不知道时如实说明，而不是乱猜',
    '不归市政府管的事，会告诉居民该联系谁',
    '根据地址查出您的垃圾收集日，并在前一晚提醒您',
  ],
  proofLink: '了解 Hey Markham 的功能',

  ctaTitle: '有项目想法？',
  ctaText: '预约 30 分钟免费咨询，或发邮件告诉我们您希望 AI 为您的机构做些什么。',
  ctaBook: '预约免费咨询',
  ctaEmail: '或发邮件至',
  careers: '想和我们一起打造产品？查看招聘职位',
  disclaimer: 'Hey Markham 是独立服务，与万锦市没有隶属关系，也未获得万锦市的背书。',
};

const fr: AboutCopy = {
  eyebrow: 'À propos',
  title: 'Aydenait Solutions',
  lead:
    'Hey Markham est conçu par Aydenait Solutions, une entreprise d’IA établie à Toronto. Nous concevons, bâtissons et soutenons des systèmes d’IA pour l’éducation, les services municipaux et la finance, et nous bâtissons aussi nos propres produits.',
  leadLink: 'Visiter le site de l’entreprise (en anglais)',

  servicesTitle: 'Ce que nous bâtissons pour les organismes',
  servicesIntro: 'Du premier projet pilote jusqu’au système que votre personnel utilise chaque jour, avec le raisonnement et les sources à la vue.',
  services: [
    { title: 'Assistants d’IA et robots conversationnels', description: 'Des assistants qui répondent à partir de vos documents, de vos politiques ou de vos données, et indiquent la source de chaque réponse.' },
    { title: 'Révision et notation assistées par l’IA', description: 'Noter, évaluer ou trier des soumissions selon vos propres critères, avec une personne qui approuve chaque résultat.' },
    { title: 'Détection et analyse des risques', description: 'Repérer les similitudes, les anomalies et les risques dans de grands volumes de documents, de code ou de dossiers.' },
    { title: 'Planification et automatisation des processus', description: 'Remplacer les tableurs et les étapes manuelles par des systèmes fondés sur des règles, auxquels votre personnel peut se fier.' },
    { title: 'Analyse et aide à la décision', description: 'Transformer des données, des nouvelles et des signaux en analyses exploitables, avec le raisonnement visible.' },
    { title: 'L’IA dans vos systèmes existants', description: 'Ajouter l’IA à votre site Web, à votre plateforme d’apprentissage, à votre CRM ou à vos applications internes.' },
  ],

  productsTitle: 'Nos produits',
  sectors: { education: 'Enseignement supérieur', civic: 'Services municipaux', finance: 'Services financiers' },
  productLines: [
    'Attribution des cours, suivi de la charge de travail et planification des sessions pour les départements.',
    'Détection des similitudes de code et du code rédigé par l’IA, qui fournit des preuves, pas seulement une note.',
    'Correction assistée par l’IA selon une grille, pour les cours de programmation, avec une personne dans la boucle.',
    'Administration des examens : listes, places et documents d’examen personnalisés.',
    'Répond aux questions des résidents sur les services de la Ville de Markham, à voix haute ou par écrit, avec les sources officielles.',
    'Analyse de stratégies d’options et gestion des risques, avec l’IA appliquée aux nouvelles et au sentiment. Ne passe aucun ordre.',
  ],
  youreHere: 'Vous êtes ici',
  allProducts: 'Tous les produits (en anglais)',

  proofTitle: 'Hey Markham, concrètement',
  proof: [
    'Des réponses tirées des pages officielles de markham.ca, avec toutes leurs sources',
    'Le dit quand il ne sait pas, au lieu de deviner',
    'Indique aux résidents qui joindre quand un service ne relève pas de la Ville',
    'Trouve votre jour de collecte selon votre adresse et vous le rappelle la veille',
  ],
  proofLink: 'Découvrir ce que fait Hey Markham',

  ctaTitle: 'Vous avez un projet?',
  ctaText: 'Réservez une consultation gratuite de 30 minutes, ou écrivez-nous pour nous dire ce que vous aimeriez que l’IA fasse pour votre organisme.',
  ctaBook: 'Réserver une consultation gratuite',
  ctaEmail: 'Ou écrivez à',
  careers: 'Envie de bâtir avec nous? Voir les postes ouverts',
  disclaimer: 'Hey Markham est un service indépendant, qui n’est ni affilié à la Ville de Markham ni approuvé par celle-ci.',
};

const copy: Record<Locale, AboutCopy> = { en, zh, fr };
const serviceIcons = [MessagesSquare, ClipboardCheck, ScanSearch, Workflow, BarChart3, Blocks];

export function AboutPage({ locale }: { locale: Locale }) {
  const t = copy[locale];

  return (
    <div className="min-h-screen w-full bg-white dark:bg-slate-950">
      <RevealOnScroll />

      {/* Who we are */}
      <section className="relative px-6 pt-14 pb-16 md:pt-20 md:pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 w-[700px] h-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(98,125,152,0.18)_0%,transparent_65%)]" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="animate-fade-up text-sm font-semibold uppercase tracking-wider text-primary-300 mb-3">{t.eyebrow}</p>
          <h1 className="animate-rise text-3xl md:text-5xl font-serif font-bold text-white mb-5 text-balance">{t.title}</h1>
          <p className="animate-rise [animation-delay:100ms] text-lg md:text-xl text-slate-300 text-pretty">{t.lead}</p>
          <a
            href={COMPANY_SITE}
            target="_blank" rel="noopener noreferrer"
            className="animate-fade-up [animation-delay:150ms] mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-200 hover:text-white transition-colors"
          >
            {t.leadLink}
            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>
      </section>

      {/* Services */}
      <section className="py-14 md:py-20 px-6 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 data-reveal className="text-2xl md:text-3xl font-serif font-bold text-slate-900 dark:text-white mb-3 text-balance">{t.servicesTitle}</h2>
            <p data-reveal className="text-slate-600 dark:text-slate-400 text-pretty">{t.servicesIntro}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {t.services.map((item, i) => {
              const Icon = serviceIcons[i];
              return (
                <div data-reveal key={item.title} className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700" style={{ transitionDelay: `${(i % 3) * 0.08}s` }}>
                  <span className="w-10 h-10 mb-4 rounded-lg bg-primary-50 dark:bg-primary-900/50 flex items-center justify-center text-primary-600 dark:text-primary-400">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </span>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Products, with Hey Markham marked */}
      <section className="py-14 md:py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 data-reveal className="text-2xl md:text-3xl font-serif font-bold text-slate-900 dark:text-white mb-8 text-center">{t.productsTitle}</h2>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PRODUCTS.map((product, i) => (
              <li
                data-reveal
                key={product.name}
                className={`p-5 rounded-2xl border ${product.current ? 'bg-primary-50 dark:bg-primary-900/30 border-primary-200 dark:border-primary-800' : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800'}`}
                style={{ transitionDelay: `${(i % 3) * 0.08}s` }}
              >
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400">{t.sectors[product.sector]}</p>
                  {product.current && (
                    <span className="px-2 py-0.5 rounded-full bg-primary-600 text-white text-[11px] font-semibold">{t.youreHere}</span>
                  )}
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-1">{product.name}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{t.productLines[i]}</p>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-center">
            <a href={`${COMPANY_SITE}/products`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 dark:text-primary-400 hover:underline">
              {t.allProducts}
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </p>
        </div>
      </section>

      {/* Hey Markham as the working example */}
      <section className="py-14 md:py-16 px-6 bg-slate-50 dark:bg-slate-900">
        <div data-reveal className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 dark:text-white mb-6 text-balance">{t.proofTitle}</h2>
          <ul className="space-y-3">
            {t.proof.map(item => (
              <li key={item} className="flex gap-3 text-slate-700 dark:text-slate-300 leading-relaxed">
                <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0 text-green-600 dark:text-green-400" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
          <Link href={localisePath('/#features', locale)} className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 dark:text-primary-400 hover:underline">
            {t.proofLink}
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* Get in touch */}
      <section className="py-14 md:py-20 px-6">
        <div data-reveal className="max-w-3xl mx-auto rounded-2xl bg-slate-900 border border-slate-800 px-6 py-8 md:px-10 text-center">
          <h2 className="text-xl md:text-2xl font-semibold text-white mb-2">{t.ctaTitle}</h2>
          <p className="text-slate-400 mb-6 text-pretty">{t.ctaText}</p>
          <a
            href={BOOKING_URL}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary-600 hover:bg-primary-700 text-white text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-primary-300"
          >
            <CalendarCheck className="w-4 h-4" aria-hidden="true" />
            {t.ctaBook}
            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </a>
          <p className="mt-4 text-sm text-slate-400">
            {t.ctaEmail}{' '}
            <a href={`mailto:${EMAIL}`} className="text-primary-200 hover:text-white underline">{EMAIL}</a>
          </p>
          <p className="mt-6 text-sm">
            <Link href={localisePath('/careers', locale)} className="inline-flex items-center gap-1 text-primary-300 hover:underline">
              {t.careers}
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </p>
        </div>
        <p className="max-w-3xl mx-auto mt-6 text-xs text-slate-500 dark:text-slate-400 text-center">{t.disclaimer}</p>
      </section>
    </div>
  );
}
