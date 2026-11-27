import {
  ArrowRight, Briefcase, CheckCircle2, Clock, Handshake, Mail, MapPin, Megaphone, MessageSquare,
  ShieldCheck, Sparkles, Users, BrainCircuit, Code, Lock
} from 'lucide-react';
import { RevealOnScroll } from '../RevealOnScroll';
import type { Locale } from '../../lib/i18n';

// /careers, /zh/careers and /fr/careers. One structure, every language: strings live in `en` / `zh` /
// `fr`, and the roles line up by position with ROLES below, so keep the order the same everywhere.
//
// Facts confirmed with the team (November 2026): hybrid in Markham/GTA, full-time except the internship
// and the contract advisor, apply by email to contact@aydenait.com, no pay shown (fewer than 25 employees).
// If the company reaches 25 employees, Ontario requires a pay range on public postings; add it here then.
// The community role mentions the app's opt-in "Offers & ads" inbox category (HeyMarkham-mobile
// src/i18n/inbox.ts): keep it opt-in in the copy, and don't promise features the app doesn't have.
// Stacks named in the engineering roles match the repos: mobile is Expo/React Native, staff tools are
// React (HeyMarkham-admin), the API is FastAPI with PostgreSQL/pgvector.

const APPLY_EMAIL = 'contact@aydenait.com';

// Per role: the anchor, the icon, the kind of job, and the English title used in the email subject
// (so applications sort the same whatever language the page was in)
type RoleKind = 'fullTime' | 'internship' | 'contract';
const ROLES: { id: string; Icon: typeof Handshake; kind: RoleKind; subject: string }[] = [
  { id: 'business-development', Icon: Handshake, kind: 'fullTime', subject: 'Business Development Manager, Municipal Partnerships' },
  { id: 'data-quality-intern', Icon: ShieldCheck, kind: 'internship', subject: 'Data Quality Intern, Answer Verification' },
  { id: 'community-growth', Icon: Megaphone, kind: 'fullTime', subject: 'Community and Growth Specialist' },
  { id: 'ai-rag-engineer', Icon: BrainCircuit, kind: 'fullTime', subject: 'AI/RAG Engineer' },
  { id: 'full-stack-engineer', Icon: Code, kind: 'fullTime', subject: 'Full-Stack Engineer, Mobile and Web' },
  { id: 'privacy-security-accessibility', Icon: Lock, kind: 'contract', subject: 'Privacy, Security and Accessibility Advisor' },
];

const en = {
  eyebrow: 'Careers',
  title: 'Help Every Resident Get Answers From Their City',
  subtitle:
    'Hey Markham is a small team building a city assistant for Markham residents. We’re hiring for six roles to bring it to more residents and more cities.',
  facts: ['Hybrid: Markham and the GTA', 'Small team, real ownership', 'Work residents use every day'],
  jumpLabel: 'Open roles',

  howTitle: 'How We Work',
  how: [
    { title: 'Official sources first', description: 'We’d rather say “I don’t know” than guess. Everyone on the team helps keep answers accurate and traceable.' },
    { title: 'Close to residents', description: 'What residents ask, and what city staff tell us, decides what we build next.' },
    { title: 'Hybrid in Markham', description: 'Some days together in Markham or the GTA, the rest remote. We plan in-person time around the work.' },
  ],

  rolesTitle: 'Open Roles',
  fullTime: 'Full-time',
  internship: 'Internship',
  contract: 'Contract',
  location: 'Hybrid, Markham/GTA',
  doTitle: 'What you’ll do',
  bringTitle: 'What you’ll bring',
  niceTitle: 'Nice to have',
  apply: 'Apply by email',
  roles: [
    {
      team: 'Business development',
      title: 'Business Development Manager, Municipal Partnerships',
      summary:
        'Bring Hey Markham to the City of Markham and other municipalities. You’ll build relationships with city staff and councils, run pilots and turn them into signed agreements.',
      do: [
        'Build relationships with municipal staff, departments and elected officials, starting with the City of Markham',
        'Find the right people, understand their goals and budget cycles, and set up meetings and demos',
        'Plan and run pilot projects with clear goals, then turn successful pilots into contracts',
        'Prepare proposals and respond to municipal procurement: RFIs, RFPs and RFQs',
        'Represent Hey Markham at municipal events and conferences',
        'Bring what you hear from cities back to the product team',
      ],
      bring: [
        'Experience in B2G or B2B sales, partnerships or business development',
        'An understanding of how Ontario municipalities make decisions and buy services, or the drive to learn it quickly',
        'Clear, confident writing and presenting in English',
        'Comfort owning a pipeline from the first conversation to a signed agreement',
      ],
      nice: [
        'Existing relationships with York Region or GTA municipalities',
        'Mandarin, Cantonese or French',
        'Experience selling software or digital services to the public sector',
      ],
    },
    {
      team: 'Data quality',
      title: 'Data Quality Intern, Answer Verification',
      summary:
        'Make sure Hey Markham’s answers are right. You’ll check answers against official City sources, fix what’s wrong and help the answer collection grow.',
      do: [
        'Check answers against official City of Markham pages and other official sources',
        'Flag and correct answers that are wrong, out of date or missing an important condition',
        'Review the questions residents ask, and group similar ones together',
        'Research official sources for questions we can’t answer well yet',
        'Test answers in English, and in Mandarin, Cantonese or French if you speak them',
        'Keep clear notes on what you checked and why',
      ],
      bring: [
        'A careful eye: you notice when a fee, a date or a condition doesn’t match the source',
        'Strong reading and writing in English',
        'Comfort working through official documents and websites',
        'Currently studying or recently graduated, in any field',
      ],
      nice: [
        'Mandarin, Cantonese or French',
        'Interest in local government, public policy or information management',
        'Familiarity with Markham and its services',
      ],
    },
    {
      team: 'Community and growth',
      title: 'Community and Growth Specialist',
      summary:
        'Get Markham residents using Hey Markham. You’ll reach residents where they already are, in their languages, and turn that into the usage that helps bring Hey Markham to more cities.',
      do: [
        'Reach residents through community associations, libraries, seniors’ centres, school councils and local events',
        'Grow Hey Markham in Chinese-language community media and groups, and in Markham’s other communities',
        'Plan and run campaigns, and track which ones bring residents who keep using the app',
        'Gather what residents say about the app and bring it back to the team',
        'Later, help start partnerships with local businesses, including the app’s opt-in Offers & ads',
      ],
      bring: [
        'Experience in community outreach, marketing or growth',
        'Comfort speaking with residents and community groups in person',
        'Organization and strong follow-through, with an eye on results',
        'Clear writing in English',
      ],
      nice: [
        'Mandarin or Cantonese: many Markham residents prefer to get information in Chinese',
        'Knowledge of Markham’s neighbourhoods and community organizations',
        'Experience with social media, WeChat or local media',
      ],
    },
    {
      team: 'Engineering',
      title: 'AI/RAG Engineer',
      summary:
        'Improve how Hey Markham finds and writes answers. You’ll work on retrieval, reranking and answer checking, so answers are accurate, cited and fast.',
      do: [
        'Improve retrieval over City of Markham pages and documents: hybrid search, chunking and reranking',
        'Build checks that keep fees, dates, phone numbers and links true to the source pages',
        'Build evaluation sets, measure answer quality, and use them before every change ships',
        'Make answers faster and cheaper with caching and better routing between answer layers',
        'Improve answers in English, French, Mandarin and Cantonese',
        'Work with the data quality team to turn reviewed answers into better data and models',
      ],
      bring: [
        'Solid Python, and experience building production services (we use FastAPI)',
        'Hands-on experience with retrieval-augmented generation: embeddings, vector search and reranking',
        'Experience evaluating LLM output with real metrics, not just spot checks',
        'Comfort with PostgreSQL and pgvector, or similar',
      ],
      nice: [
        'Running open-weight models yourself, for example with Ollama',
        'Experience with LlamaIndex or LangChain',
        'Multilingual NLP, especially Chinese',
        'Interest in public-sector or civic technology',
      ],
    },
    {
      team: 'Engineering',
      title: 'Full-Stack Engineer, Mobile and Web',
      summary:
        'Build the Hey Markham app, website and staff tools. You’ll ship features residents use every day, so our AI engineers can focus on answer quality.',
      do: [
        'Build and improve the Hey Markham app for iPhone and Android (React Native with Expo)',
        'Work on the website (Next.js) and the staff tools used to review answers (React)',
        'Add and maintain endpoints in the Python API (FastAPI)',
        'Keep the app accessible, fast and reliable, in four languages',
        'Ship releases to the App Store and Google Play',
      ],
      bring: [
        'Strong TypeScript and React, and experience shipping a React Native app',
        'Comfort working across the stack, including a Python API',
        'Care for accessibility and for the details residents notice',
        'Experience with automated testing',
      ],
      nice: [
        'Experience with Expo and app store releases',
        'Next.js experience',
        'Building apps in several languages, including Chinese',
        'Interest in public-sector or civic technology',
      ],
    },
    {
      team: 'Trust and compliance',
      title: 'Privacy, Security and Accessibility Advisor',
      summary:
        'Help Hey Markham meet what cities need before they sign. You’ll review how the app handles personal information, security and accessibility, and help us answer cities’ questions with confidence.',
      do: [
        'Review how the app and its services collect, use, store and keep personal information',
        'Help prepare the privacy, security and accessibility answers cities ask for in pilots and procurement',
        'Guide us on Ontario requirements, including MFIPPA and AODA (WCAG 2.0 AA)',
        'Recommend and prioritize fixes, and help write clear policies',
        'Plan accessibility testing of the app and website',
      ],
      bring: [
        'Experience with privacy, security or accessibility compliance, ideally for the Ontario public sector',
        'Familiarity with MFIPPA, PIPEDA and AODA',
        'Clear, practical advice for a small team',
      ],
      nice: [
        'Experience preparing privacy impact assessments',
        'A privacy or security certification, such as CIPP/C or CISSP',
        'Experience with AI products',
      ],
    },
  ],

  applyTitle: 'How to Apply',
  applyText:
    'Email your résumé to contact@aydenait.com with the role in the subject line, and tell us in a few lines why it interests you. The buttons above fill in the subject for you.',
  applyOther: 'Don’t see your role? Write to us anyway and tell us how you’d help.',
  accommodation: 'Accommodations are available on request for candidates taking part in all aspects of the selection process.',
  employer: 'Hey Markham is built by Aydenait Solutions.',
};

type CareersCopy = typeof en;

const zh: CareersCopy = {
  eyebrow: '加入我们',
  title: '让每位居民都能从市政府得到答案',
  subtitle: 'Hey Markham 是一支小团队，正在为万锦市居民打造城市助手。我们正在招聘六个职位，把它带给更多居民和更多城市。',
  facts: ['混合办公：万锦市及大多伦多地区', '小团队，真正的主人翁', '您的工作，居民每天都在用'],
  jumpLabel: '招聘职位',

  howTitle: '我们的工作方式',
  how: [
    { title: '官方来源优先', description: '我们宁可说“不知道”，也不去猜。团队每个人都会帮忙确保答案准确、可追溯。' },
    { title: '贴近居民', description: '居民问什么、市政府工作人员告诉我们什么，决定了我们下一步做什么。' },
    { title: '万锦市混合办公', description: '部分时间在万锦市或大多伦多地区一起办公，其余时间远程。线下时间根据工作安排。' },
  ],

  rolesTitle: '招聘职位',
  fullTime: '全职',
  internship: '实习',
  contract: '合同制',
  location: '混合办公，万锦市／大多伦多地区',
  doTitle: '工作内容',
  bringTitle: '任职要求',
  niceTitle: '加分项',
  apply: '发邮件申请',
  roles: [
    {
      team: '业务拓展',
      title: '业务拓展经理（市政合作）',
      summary: '把 Hey Markham 带给万锦市和其他市政机构。您将与市政府工作人员和市议会建立关系，开展试点项目，并推动试点转化为正式合同。',
      do: [
        '与市政工作人员、各部门和民选官员建立关系，从万锦市开始',
        '找到合适的联系人，了解他们的目标和预算周期，安排会议和产品演示',
        '规划并执行目标明确的试点项目，再把成功的试点转化为合同',
        '撰写提案，响应市政采购：RFI、RFP 和 RFQ',
        '代表 Hey Markham 参加市政活动和会议',
        '把从各城市听到的反馈带回产品团队',
      ],
      bring: [
        '有面向政府（B2G）或企业（B2B）的销售、合作或业务拓展经验',
        '了解安省市政机构如何决策和采购服务，或有快速学习的意愿',
        '英文书面表达和演讲清晰、自信',
        '能够独立负责从首次接触到签约的完整流程',
      ],
      nice: [
        '在约克区或大多伦多地区市政机构有现成的人脉',
        '会说普通话、粤语或法语',
        '有向公共部门销售软件或数字服务的经验',
      ],
    },
    {
      team: '数据质量',
      title: '数据质量实习生（答案核实）',
      summary: '确保 Hey Markham 的答案准确无误。您将对照市政府官方来源核实答案，修正错误，并帮助答案库不断扩充。',
      do: [
        '对照万锦市官方网页和其他官方来源核实答案',
        '标记并修正错误、过时或遗漏重要条件的答案',
        '整理居民提出的问题，把相似的问题归为一组',
        '为我们还答不好的问题查找官方来源',
        '测试英文答案；如果您会说普通话、粤语或法语，也测试这些语言的答案',
        '清楚记录您核实了什么、为什么',
      ],
      bring: [
        '细心：费用、日期或条件与来源不符时，您能注意到',
        '英文阅读和写作能力强',
        '能够熟练查阅官方文件和网站',
        '在读学生或应届毕业生，专业不限',
      ],
      nice: [
        '会说普通话、粤语或法语',
        '对地方政府、公共政策或信息管理感兴趣',
        '熟悉万锦市及其各项服务',
      ],
    },
    {
      team: '社区与增长',
      title: '社区与增长专员',
      summary: '让更多万锦市居民用上 Hey Markham。您将在居民日常所在的地方、用他们的语言接触他们，并把这些努力转化为实际使用量，帮助 Hey Markham 走进更多城市。',
      do: [
        '通过社区协会、图书馆、长者中心、学校家长会和本地活动接触居民',
        '在中文社区媒体和群组中，以及万锦市其他社区中推广 Hey Markham',
        '策划并执行推广活动，追踪哪些活动带来了持续使用应用的居民',
        '收集居民对应用的意见，反馈给团队',
        '之后协助开展本地商家合作，包括应用中由用户自行开启的“优惠与广告”',
      ],
      bring: [
        '有社区外展、市场营销或用户增长经验',
        '能够自如地当面与居民和社区团体交流',
        '条理清晰，执行力强，注重结果',
        '英文书面表达清晰',
      ],
      nice: [
        '会说普通话或粤语：很多万锦市居民更习惯用中文获取信息',
        '熟悉万锦市各社区和社区组织',
        '有社交媒体、微信或本地媒体经验',
      ],
    },
    {
      team: '工程',
      title: 'AI／RAG 工程师',
      summary: '改进 Hey Markham 查找和撰写答案的方式。您将负责检索、重排序和答案核查，让答案准确、有出处、速度快。',
      do: [
        '改进对万锦市网页和文件的检索：混合搜索、分块和重排序',
        '构建核查机制，确保费用、日期、电话号码和链接与来源网页一致',
        '构建评测集，衡量答案质量，并在每次改动上线前使用',
        '通过缓存和更好的分层路由，让答案更快、成本更低',
        '提升英语、法语、普通话和粤语的答案质量',
        '与数据质量团队合作，把审核过的答案转化为更好的数据和模型',
      ],
      bring: [
        '扎实的 Python 功底，有构建生产级服务的经验（我们使用 FastAPI）',
        '有检索增强生成（RAG）的实战经验：向量嵌入、向量搜索和重排序',
        '有用真实指标评估大语言模型输出的经验，而不只是抽查',
        '熟悉 PostgreSQL 和 pgvector 或类似技术',
      ],
      nice: [
        '自己部署过开源权重模型，例如使用 Ollama',
        '有 LlamaIndex 或 LangChain 使用经验',
        '多语言自然语言处理经验，尤其是中文',
        '对公共部门或公民科技感兴趣',
      ],
    },
    {
      team: '工程',
      title: '全栈工程师（移动端与网页）',
      summary: '开发 Hey Markham 应用、网站和员工工具。您交付的功能居民每天都在用，也让我们的 AI 工程师能专注于答案质量。',
      do: [
        '开发和改进 iPhone 与 Android 版 Hey Markham 应用（React Native 与 Expo）',
        '开发网站（Next.js）和员工审核答案用的内部工具（React）',
        '在 Python API（FastAPI）中新增和维护接口',
        '确保应用无障碍、快速、可靠，并支持四种语言',
        '向 App Store 和 Google Play 发布新版本',
      ],
      bring: [
        '扎实的 TypeScript 和 React 功底，有上线 React Native 应用的经验',
        '能够跨前后端工作，包括 Python API',
        '重视无障碍设计和居民能注意到的细节',
        '有自动化测试经验',
      ],
      nice: [
        '有 Expo 和应用商店发布经验',
        '有 Next.js 经验',
        '开发过多语言应用，包括中文',
        '对公共部门或公民科技感兴趣',
      ],
    },
    {
      team: '信任与合规',
      title: '隐私、安全与无障碍顾问',
      summary: '帮助 Hey Markham 达到城市签约前的要求。您将审查应用在个人信息、安全和无障碍方面的做法，并帮助我们有把握地回答城市提出的问题。',
      do: [
        '审查应用及其服务如何收集、使用、存储和保留个人信息',
        '协助准备城市在试点和采购中要求的隐私、安全和无障碍答复',
        '就安省相关要求提供指导，包括 MFIPPA 和 AODA（WCAG 2.0 AA）',
        '提出整改建议并排定优先级，协助撰写清晰的政策',
        '规划应用和网站的无障碍测试',
      ],
      bring: [
        '有隐私、安全或无障碍合规经验，最好服务过安省公共部门',
        '熟悉 MFIPPA、PIPEDA 和 AODA',
        '能为小团队提供清晰、务实的建议',
      ],
      nice: [
        '有撰写隐私影响评估的经验',
        '持有隐私或安全认证，例如 CIPP/C 或 CISSP',
        '有 AI 产品相关经验',
      ],
    },
  ],

  applyTitle: '如何申请',
  applyText: '请把您的简历发送至 contact@aydenait.com，邮件主题注明申请职位，并简单说明您为什么对这个职位感兴趣。点击上方按钮会自动填好邮件主题。',
  applyOther: '没有看到适合您的职位？也欢迎来信，告诉我们您能如何帮忙。',
  accommodation: '在招聘流程的各个环节，候选人均可申请无障碍便利安排。',
  employer: 'Hey Markham 由 Aydenait Solutions 开发。',
};

const fr: CareersCopy = {
  eyebrow: 'Carrières',
  title: 'Aidez chaque résident à obtenir des réponses de sa ville',
  subtitle:
    'Hey Markham est une petite équipe qui bâtit un assistant municipal pour les résidents de Markham. Nous recrutons pour six postes afin de l’offrir à plus de résidents et plus de villes.',
  facts: ['Mode hybride : Markham et la RGT', 'Petite équipe, vraies responsabilités', 'Un travail que les résidents utilisent chaque jour'],
  jumpLabel: 'Postes ouverts',

  howTitle: 'Notre façon de travailler',
  how: [
    { title: 'Les sources officielles d’abord', description: 'Nous préférons dire « je ne sais pas » plutôt que deviner. Toute l’équipe contribue à garder les réponses exactes et traçables.' },
    { title: 'Près des résidents', description: 'Ce que demandent les résidents, et ce que nous dit le personnel municipal, décide de ce que nous bâtissons ensuite.' },
    { title: 'Hybride à Markham', description: 'Certains jours ensemble à Markham ou dans la RGT, les autres à distance. Nous planifions le temps en personne selon le travail.' },
  ],

  rolesTitle: 'Postes ouverts',
  fullTime: 'Temps plein',
  internship: 'Stage',
  contract: 'Contrat',
  location: 'Hybride, Markham/RGT',
  doTitle: 'Ce que vous ferez',
  bringTitle: 'Ce que vous apportez',
  niceTitle: 'Atouts',
  apply: 'Postuler par courriel',
  roles: [
    {
      team: 'Développement des affaires',
      title: 'Directeur ou directrice du développement des affaires, partenariats municipaux',
      summary:
        'Faites connaître Hey Markham à la Ville de Markham et à d’autres municipalités. Vous bâtirez des relations avec le personnel et les conseils municipaux, mènerez des projets pilotes et les transformerez en ententes signées.',
      do: [
        'Bâtir des relations avec le personnel municipal, les services et les élus, en commençant par la Ville de Markham',
        'Trouver les bonnes personnes, comprendre leurs objectifs et leurs cycles budgétaires, et organiser rencontres et démonstrations',
        'Planifier et mener des projets pilotes aux objectifs clairs, puis transformer les réussites en contrats',
        'Préparer des propositions et répondre aux appels d’offres municipaux : DI, DP et DDP',
        'Représenter Hey Markham lors d’événements et de congrès municipaux',
        'Transmettre à l’équipe produit ce que vous entendez des villes',
      ],
      bring: [
        'Une expérience en vente, partenariats ou développement des affaires auprès du gouvernement (B2G) ou d’entreprises (B2B)',
        'Une compréhension de la façon dont les municipalités ontariennes prennent leurs décisions et achètent des services, ou l’envie de l’apprendre rapidement',
        'Une communication écrite et orale claire et assurée en anglais',
        'L’aisance à mener un dossier de la première conversation jusqu’à la signature',
      ],
      nice: [
        'Des relations existantes avec des municipalités de la Région de York ou de la RGT',
        'Le mandarin, le cantonais ou le français',
        'Une expérience de vente de logiciels ou de services numériques au secteur public',
      ],
    },
    {
      team: 'Qualité des données',
      title: 'Stagiaire en qualité des données, vérification des réponses',
      summary:
        'Assurez-vous que les réponses de Hey Markham sont exactes. Vous vérifierez les réponses à partir des sources officielles de la Ville, corrigerez ce qui ne va pas et aiderez la collection de réponses à grandir.',
      do: [
        'Vérifier les réponses à partir des pages officielles de la Ville de Markham et d’autres sources officielles',
        'Signaler et corriger les réponses inexactes, périmées ou qui omettent une condition importante',
        'Passer en revue les questions des résidents et regrouper celles qui se ressemblent',
        'Chercher des sources officielles pour les questions auxquelles nous répondons encore mal',
        'Tester les réponses en anglais, et en mandarin, en cantonais ou en français si vous les parlez',
        'Prendre des notes claires sur ce que vous avez vérifié et pourquoi',
      ],
      bring: [
        'Un sens aigu du détail : vous remarquez quand un tarif, une date ou une condition ne correspond pas à la source',
        'De solides compétences en lecture et en rédaction en anglais',
        'L’aisance à consulter des documents et des sites officiels',
        'Être aux études ou nouvellement diplômé, dans n’importe quel domaine',
      ],
      nice: [
        'Le mandarin, le cantonais ou le français',
        'Un intérêt pour l’administration municipale, les politiques publiques ou la gestion de l’information',
        'Une bonne connaissance de Markham et de ses services',
      ],
    },
    {
      team: 'Communauté et croissance',
      title: 'Spécialiste de la communauté et de la croissance',
      summary:
        'Amenez les résidents de Markham à utiliser Hey Markham. Vous joindrez les résidents là où ils sont déjà, dans leur langue, et transformerez ces efforts en utilisation réelle, qui aidera à offrir Hey Markham à d’autres villes.',
      do: [
        'Joindre les résidents par les associations communautaires, les bibliothèques, les centres pour aînés, les conseils d’école et les événements locaux',
        'Faire connaître Hey Markham dans les médias et groupes communautaires sinophones, et dans les autres communautés de Markham',
        'Planifier et mener des campagnes, et suivre celles qui amènent des résidents qui continuent d’utiliser l’application',
        'Recueillir ce que les résidents disent de l’application et le transmettre à l’équipe',
        'Plus tard, aider à lancer des partenariats avec les entreprises locales, y compris Offres et publicités, que les résidents activent s’ils le souhaitent',
      ],
      bring: [
        'Une expérience en action communautaire, en marketing ou en croissance',
        'L’aisance à parler en personne avec des résidents et des groupes communautaires',
        'Un bon sens de l’organisation et du suivi, axé sur les résultats',
        'Une rédaction claire en anglais',
      ],
      nice: [
        'Le mandarin ou le cantonais : beaucoup de résidents de Markham préfèrent s’informer en chinois',
        'Une connaissance des quartiers et des organismes communautaires de Markham',
        'Une expérience des médias sociaux, de WeChat ou des médias locaux',
      ],
    },
    {
      team: 'Ingénierie',
      title: 'Ingénieur ou ingénieure IA/RAG',
      summary:
        'Améliorez la façon dont Hey Markham trouve et rédige ses réponses. Vous travaillerez sur la recherche, le reclassement et la vérification des réponses, pour qu’elles soient exactes, sourcées et rapides.',
      do: [
        'Améliorer la recherche dans les pages et documents de la Ville de Markham : recherche hybride, découpage et reclassement',
        'Bâtir des vérifications qui gardent les tarifs, dates, numéros de téléphone et liens fidèles aux pages sources',
        'Bâtir des jeux d’évaluation, mesurer la qualité des réponses et les utiliser avant chaque mise en production',
        'Rendre les réponses plus rapides et moins coûteuses grâce à la mise en cache et à un meilleur aiguillage entre les couches de réponse',
        'Améliorer les réponses en anglais, en français, en mandarin et en cantonais',
        'Travailler avec l’équipe de qualité des données pour transformer les réponses révisées en meilleures données et meilleurs modèles',
      ],
      bring: [
        'De solides compétences en Python et une expérience de services en production (nous utilisons FastAPI)',
        'Une expérience concrète de la génération augmentée par récupération (RAG) : plongements, recherche vectorielle et reclassement',
        'Une expérience de l’évaluation des sorties de grands modèles de langage avec de vraies mesures, pas seulement des vérifications ponctuelles',
        'L’aisance avec PostgreSQL et pgvector, ou l’équivalent',
      ],
      nice: [
        'Avoir déployé vous-même des modèles à poids ouverts, par exemple avec Ollama',
        'Une expérience de LlamaIndex ou de LangChain',
        'Le traitement automatique des langues multilingue, en particulier le chinois',
        'Un intérêt pour les technologies civiques ou le secteur public',
      ],
    },
    {
      team: 'Ingénierie',
      title: 'Développeur ou développeuse full stack, mobile et Web',
      summary:
        'Bâtissez l’application, le site Web et les outils internes de Hey Markham. Vous livrerez des fonctions que les résidents utilisent chaque jour, pour que nos spécialistes de l’IA puissent se concentrer sur la qualité des réponses.',
      do: [
        'Bâtir et améliorer l’application Hey Markham pour iPhone et Android (React Native avec Expo)',
        'Travailler sur le site Web (Next.js) et les outils internes servant à réviser les réponses (React)',
        'Ajouter et maintenir des points de terminaison dans l’API Python (FastAPI)',
        'Garder l’application accessible, rapide et fiable, en quatre langues',
        'Publier les versions dans l’App Store et Google Play',
      ],
      bring: [
        'De solides compétences en TypeScript et React, et une expérience de publication d’une application React Native',
        'L’aisance à travailler sur toute la pile, y compris une API Python',
        'Le souci de l’accessibilité et des détails que remarquent les résidents',
        'Une expérience des tests automatisés',
      ],
      nice: [
        'Une expérience d’Expo et des publications dans les magasins d’applications',
        'Une expérience de Next.js',
        'Avoir bâti des applications multilingues, y compris en chinois',
        'Un intérêt pour les technologies civiques ou le secteur public',
      ],
    },
    {
      team: 'Confiance et conformité',
      title: 'Conseiller ou conseillère en confidentialité, sécurité et accessibilité',
      summary:
        'Aidez Hey Markham à répondre aux exigences des villes avant la signature. Vous examinerez la façon dont l’application traite les renseignements personnels, la sécurité et l’accessibilité, et nous aiderez à répondre avec assurance aux questions des villes.',
      do: [
        'Examiner comment l’application et ses services recueillent, utilisent, stockent et conservent les renseignements personnels',
        'Aider à préparer les réponses en matière de confidentialité, de sécurité et d’accessibilité que demandent les villes lors des projets pilotes et des appels d’offres',
        'Nous guider sur les exigences ontariennes, dont la LAIMPVP (MFIPPA) et la LAPHO (AODA, WCAG 2.0 AA)',
        'Recommander et prioriser les correctifs, et aider à rédiger des politiques claires',
        'Planifier les tests d’accessibilité de l’application et du site Web',
      ],
      bring: [
        'Une expérience de la conformité en matière de confidentialité, de sécurité ou d’accessibilité, idéalement dans le secteur public ontarien',
        'Une bonne connaissance de la LAIMPVP, de la LPRPDE et de la LAPHO',
        'Des conseils clairs et pratiques pour une petite équipe',
      ],
      nice: [
        'Une expérience de la préparation d’évaluations des facteurs relatifs à la vie privée',
        'Une certification en confidentialité ou en sécurité, comme CIPP/C ou CISSP',
        'Une expérience des produits d’IA',
      ],
    },
  ],

  applyTitle: 'Comment postuler',
  applyText:
    'Envoyez votre CV à contact@aydenait.com en indiquant le poste dans l’objet, et dites-nous en quelques lignes pourquoi il vous intéresse. Les boutons ci-dessus remplissent l’objet pour vous.',
  applyOther: 'Vous ne voyez pas votre poste? Écrivez-nous quand même et dites-nous comment vous pourriez aider.',
  accommodation: 'Des mesures d’adaptation sont offertes sur demande aux candidats à toutes les étapes du processus de sélection.',
  employer: 'Hey Markham est conçu par Aydenait Solutions.',
};

const copy: Record<Locale, CareersCopy> = { en, zh, fr };

const factIcons = [MapPin, Users, Sparkles];
const howIcons = [ShieldCheck, MessageSquare, MapPin];

const mailto = (subject: string) => `mailto:${APPLY_EMAIL}?subject=${encodeURIComponent(`Application: ${subject}`)}`;

export function CareersPage({ locale }: { locale: Locale }) {
  const t = copy[locale];

  return (
    <div className="min-h-screen w-full bg-white dark:bg-slate-950">
      <RevealOnScroll />

      {/* Intro, with the open roles one tap away */}
      <section className="relative px-6 pt-14 pb-16 md:pt-20 md:pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 w-[700px] h-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(98,125,152,0.18)_0%,transparent_65%)]" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="animate-fade-up text-sm font-semibold uppercase tracking-wider text-primary-300 mb-3">{t.eyebrow}</p>
          <h1 className="animate-rise text-3xl md:text-5xl font-serif font-bold text-white mb-5 text-balance">{t.title}</h1>
          <p className="animate-rise [animation-delay:100ms] text-lg md:text-xl text-slate-300 max-w-3xl mx-auto text-pretty">{t.subtitle}</p>

          <ul className="animate-fade-up [animation-delay:150ms] mt-8 flex flex-wrap justify-center gap-3">
            {t.facts.map((fact, i) => {
              const Icon = factIcons[i];
              return (
                <li key={fact} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-slate-200">
                  <Icon className="w-4 h-4 text-primary-300" aria-hidden="true" />
                  {fact}
                </li>
              );
            })}
          </ul>

          <nav aria-label={t.jumpLabel} className="animate-fade-up [animation-delay:200ms] mt-10">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">{t.jumpLabel}</p>
            <ul className="flex flex-wrap justify-center gap-2">
              {ROLES.map((role, i) => (
                <li key={role.id}>
                  <a
                    href={`#${role.id}`}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-600/20 border border-primary-500/30 text-sm font-medium text-primary-100 hover:bg-primary-600/40 transition-colors"
                  >
                    <role.Icon className="w-4 h-4" aria-hidden="true" />
                    {t.roles[i].title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      {/* How we work */}
      <section className="py-14 md:py-16 px-6 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <h2 data-reveal className="text-2xl md:text-3xl font-serif font-bold text-slate-900 dark:text-white mb-8 text-center text-balance">{t.howTitle}</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {t.how.map((item, i) => {
              const Icon = howIcons[i];
              return (
                <div data-reveal key={item.title} className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700" style={{ transitionDelay: `${i * 0.08}s` }}>
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

      {/* The roles, each with its own anchor so a posting can be linked directly */}
      <section className="py-14 md:py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 data-reveal className="text-2xl md:text-3xl font-serif font-bold text-slate-900 dark:text-white mb-8 text-center">{t.rolesTitle}</h2>
          <div className="space-y-8">
            {ROLES.map((role, i) => {
              const r = t.roles[i];
              return (
                <article
                  key={role.id}
                  id={role.id}
                  aria-labelledby={`${role.id}-title`}
                  className="scroll-mt-20 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 md:p-8 shadow-sm"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-5">
                    <span className="w-12 h-12 rounded-xl bg-primary-50 dark:bg-primary-900/50 flex items-center justify-center text-primary-600 dark:text-primary-400 flex-shrink-0">
                      <role.Icon className="w-6 h-6" aria-hidden="true" />
                    </span>
                    <div className="flex-1">
                      <p className="text-xs font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400 mb-1">{r.team}</p>
                      <h3 id={`${role.id}-title`} className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white text-balance">{r.title}</h3>
                      <ul className="mt-3 flex flex-wrap gap-2 text-xs font-medium">
                        <li className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                          {role.kind === 'fullTime' ? <Clock className="w-3.5 h-3.5" aria-hidden="true" /> : <Briefcase className="w-3.5 h-3.5" aria-hidden="true" />}
                          {t[role.kind]}
                        </li>
                        <li className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                          <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                          {t.location}
                        </li>
                      </ul>
                    </div>
                  </div>

                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">{r.summary}</p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <RoleList title={t.doTitle} items={r.do} />
                    <div className="space-y-6">
                      <RoleList title={t.bringTitle} items={r.bring} />
                      <RoleList title={t.niceTitle} items={r.nice} muted />
                    </div>
                  </div>

                  <a
                    href={mailto(role.subject)}
                    className="mt-7 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary-600 hover:bg-primary-700 text-white text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-primary-300"
                  >
                    <Mail className="w-4 h-4" aria-hidden="true" />
                    {t.apply}
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* How to apply */}
      <section className="pb-16 md:pb-20 px-6">
        <div data-reveal className="max-w-4xl mx-auto rounded-2xl bg-slate-900 dark:bg-slate-800 border border-slate-800 dark:border-slate-700 px-6 py-8 md:px-10">
          <h2 className="text-xl md:text-2xl font-serif font-bold text-white mb-3">{t.applyTitle}</h2>
          <p className="text-slate-300 leading-relaxed">{t.applyText}</p>
          <p className="mt-3 text-slate-300 leading-relaxed">
            {t.applyOther}{' '}
            <a href={`mailto:${APPLY_EMAIL}`} className="text-primary-300 underline hover:no-underline">{APPLY_EMAIL}</a>
          </p>
          <p className="mt-6 pt-5 border-t border-slate-700 text-sm text-slate-400">{t.accommodation}</p>
          <p className="mt-2 text-sm text-slate-400">{t.employer}</p>
        </div>
      </section>
    </div>
  );
}

function RoleList({ title, items, muted = false }: { title: string; items: string[]; muted?: boolean }) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-3">{title}</h4>
      <ul className="space-y-2">
        {items.map(item => (
          <li key={item} className="flex gap-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            <CheckCircle2
              className={`w-4 h-4 mt-0.5 flex-shrink-0 ${muted ? 'text-slate-400 dark:text-slate-500' : 'text-green-600 dark:text-green-400'}`}
              aria-hidden="true"
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
