import {
  ArrowRight, Briefcase, CalendarDays, CheckCircle2, Clock, Target, Handshake, MapPin, Megaphone, MessageSquare,
  ShieldCheck, Sparkles, Users, BrainCircuit, Code, Lock
} from 'lucide-react';
import { RevealOnScroll } from '../RevealOnScroll';
import { ApplicationForm } from '../ApplicationForm';
import { CAREER_ROLES } from '../../lib/careers';
import type { Locale } from '../../lib/i18n';

// /careers, /zh/careers and /fr/careers. One structure, every language: strings live in `en` / `zh` /
// `fr`, and the roles line up by position with ROLES below, so keep the order the same everywhere.
//
// Facts confirmed with the team (November 2026): hybrid in Markham/GTA, full-time except the internship
// and the contract advisor, apply through the form (emailed to the hiring inbox, see app/actions/apply.ts),
// applications kept 12 months, no pay shown (fewer than 25 employees).
// Per-role facts still to confirm with the team: the BD travel estimate (about 20%), the internship term
// (4 months, extendable to 8), and the advisor's contract (1 to 2 days a week, 6 months, renewable).
// Experience levels ("3+ years" and so on) are hiring choices; keep them as asks, never "Canadian experience"
// (not allowed in Ontario job postings).
// If the company reaches 25 employees, Ontario requires a pay range on public postings; add it here then.
// The community role mentions the app's opt-in "Offers & ads" inbox category (HeyMarkham-mobile
// src/i18n/inbox.ts): keep it opt-in in the copy, and don't promise features the app doesn't have.
// Stacks named in the engineering roles match the repos: mobile is Expo/React Native, staff tools are
// React (HeyMarkham-admin), the API is FastAPI with PostgreSQL/pgvector.

// Per role: the anchor, the icon and the kind of job. Ids and order match CAREER_ROLES in lib/careers.ts,
// which the form and the server action use.
type RoleKind = 'fullTime' | 'internship' | 'contract';
const ROLES: { id: (typeof CAREER_ROLES)[number]['id']; Icon: typeof Handshake; kind: RoleKind }[] = [
  { id: 'business-development', Icon: Handshake, kind: 'fullTime' },
  { id: 'data-quality-intern', Icon: ShieldCheck, kind: 'internship' },
  { id: 'community-growth', Icon: Megaphone, kind: 'fullTime' },
  { id: 'ai-rag-engineer', Icon: BrainCircuit, kind: 'fullTime' },
  { id: 'full-stack-engineer', Icon: Code, kind: 'fullTime' },
  { id: 'privacy-security-accessibility', Icon: Lock, kind: 'contract' },
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
  bringTitle: 'Qualifications',
  niceTitle: 'Assets',
  successTitle: 'What success looks like',
  apply: 'Apply now',
  roles: [
    {
      team: 'Business development',
      title: 'Business Development Manager, Municipal Partnerships',
      summary:
        'Hey Markham answers residents’ questions about City services, from garbage day to building permits, using official City of Markham information. We want municipalities to offer it to residents as an official channel. You’ll lead that work: open conversations with the City of Markham and other Ontario municipalities, run pilots, and close the agreements that follow.',
      about:
        'You’ll work closely with the people who build the product and help shape how we sell: pricing, packaging and which cities we approach first. Municipal sales take time. Decisions depend on budget cycles, council approval and procurement rules, and several departments have a say. We’re looking for someone who’s patient with that and knows how to keep a deal moving.',
      details: ['Travel within the GTA and Ontario, about 20% of the time'],
      do: [
        {
          heading: 'Pipeline and relationships',
          items: [
            'Identify and qualify prospects across Ontario, starting with the City of Markham and other York Region municipalities',
            'Work out who has a say in each decision (customer service, communications, IT, the clerk’s office and council) and build relationships with each',
            'Run discovery meetings and demos tailored to each city’s services, languages and current contact centre or 311 setup',
            'Track every opportunity in our CRM and keep an accurate forecast',
          ],
        },
        {
          heading: 'Pilots and agreements',
          items: [
            'Scope pilots with success measures both sides agree on, such as answer accuracy, resident adoption or fewer repeat calls',
            'Coordinate pilots with our product and engineering team, and report results to city staff',
            'Negotiate pricing, terms and service levels, working with our legal advisors on contracts',
          ],
        },
        {
          heading: 'Procurement',
          items: [
            'Watch for opportunities on bids&tenders, MERX and municipal procurement portals',
            'Lead responses to RFIs, RFPs and RFQs, bringing in the team for privacy, security and accessibility answers',
            'Know each municipality’s purchasing bylaw, including its thresholds for pilots and non-competitive purchases',
          ],
        },
        {
          heading: 'In the sector',
          items: [
            'Represent Hey Markham at events such as the AMO annual conference and MISA Ontario',
            'Bring what you hear from cities back to the product team, and help decide what we build next',
          ],
        },
      ],
      bring: [
        '5+ years in B2G or B2B sales, partnerships or business development, including at least 2 years selling software or technology services to the public sector',
        'A track record of closing deals with long sales cycles and several decision-makers',
        'Working knowledge of how Ontario municipalities budget and buy: staff reports, council approvals, budget cycles and RFx processes',
        'Excellent written English: your proposals and RFP responses will be read closely and scored',
        'Confidence presenting to senior staff and elected officials',
        'A post-secondary degree or diploma, or equivalent experience',
      ],
      nice: [
        'Existing relationships with municipal staff in York Region, Durham, Peel or the City of Toronto',
        'Experience selling contact centre, 311, CRM or digital service tools to government',
        'Familiarity with the trade agreements that apply to Canadian public procurement, such as CFTA and CETA',
        'Mandarin, Cantonese or French',
      ],
      success: [
        'You’ve met decision-makers at a dozen or more Ontario municipalities, and know which ones to pursue first',
        'At least one pilot is under way or agreed, with its success measures in writing',
        'We have a proposal template, pricing and a library of RFP answers we can reuse',
      ],
    },
    {
      team: 'Data quality',
      title: 'Data Quality Intern, Answer Verification',
      summary:
        'Hey Markham is only useful if its answers are right. When a resident asks when yard waste is picked up or what a deck permit costs, the answer has to match what the City has published, down to the date and the dollar. As our data quality intern, you’ll check answers against official sources, correct what’s wrong and help decide what Hey Markham should learn next.',
      about:
        'You’ll work with our engineers and use the same review tool they do. Your corrections go into the answers residents see, and into the test sets we run before every release. It’s a good fit if you like research and getting details exactly right, and want to see how an AI product is built and tested from the inside.',
      details: ['4-month term, with the option to extend to 8 months', 'Co-op placements welcome'],
      do: [
        {
          heading: 'Verify answers',
          items: [
            'Review answers to real resident questions and check each fact against markham.ca and other official sources: fees, dates, eligibility, phone numbers and links',
            'Flag answers that are wrong, out of date or missing a condition, such as a fee that changed in the new budget or a rule that only applies to some properties',
            'Write corrected answers in plain language, with the source each one comes from',
            'Recheck answers when the City updates a page, a bylaw or its fees',
          ],
        },
        {
          heading: 'Grow what Hey Markham can answer',
          items: [
            'Sort the questions residents ask by topic, and group ones that ask the same thing in different words',
            'Find questions Hey Markham can’t answer well yet, and research the official source for each',
            'Spot questions that belong to another organization, such as York Region or a provincial ministry, and record who handles them',
          ],
        },
        {
          heading: 'Test and document',
          items: [
            'Test answers in English, and in Mandarin, Cantonese or French if you speak them',
            'Add reviewed questions and answers to the test sets engineering runs before each release',
            'Keep clear notes on what you checked, what you changed and why',
          ],
        },
      ],
      bring: [
        'Enrolled in a college or university program, or graduated in the last 12 months, in any field',
        'Close attention to detail: you notice when a date, fee or condition doesn’t match the source',
        'Excellent reading and writing in English, and the ability to explain complicated rules simply',
        'Comfort reading bylaws, policies and government websites',
        'Good judgement about when something is unclear and needs a second opinion',
        'Comfort with spreadsheets and picking up new tools',
      ],
      nice: [
        'Mandarin, Cantonese or French',
        'Studies in public policy, political science, information science, linguistics or journalism',
        'Familiarity with Markham and the City services residents use most',
        'Curiosity about how AI language models work',
      ],
      success: [
        'You’ve reviewed several hundred answers across waste, parking, permits, taxes and recreation',
        'The topics you covered have fewer errors, and every correction is documented with its source',
        'You’ve added new questions to our test sets, so the gaps you found stay fixed',
      ],
    },
    {
      team: 'Community and growth',
      title: 'Community and Growth Specialist',
      summary:
        'Get Hey Markham into the hands of the residents who need it, in the places they already go and the languages they speak. You’ll plan and run outreach, measure what works, and build the base of regular users that shows other cities Hey Markham is worth adopting.',
      about:
        'Markham is one of the most diverse cities in Canada, and most residents don’t find City information by browsing markham.ca. They hear about it from neighbours, community groups, WeChat groups and local media. This role is about earning trust in those places. You’ll work closely with the product team, so what residents tell you shapes the app.',
      details: ['Some evenings and weekends for community events'],
      do: [
        {
          heading: 'Community outreach',
          items: [
            'Build relationships with ratepayer and community associations, libraries, seniors’ centres, cultural organizations, places of worship and school councils',
            'Run demos and information sessions, including sessions for seniors and newcomers',
            'Represent Hey Markham at community events and festivals',
          ],
        },
        {
          heading: 'Campaigns and content',
          items: [
            'Plan and run campaigns on social media, WeChat, Xiaohongshu (RedNote) and local Chinese-language and multicultural media',
            'Write and adapt posts, short videos, flyers and app store text, working with translators where needed',
            'Time campaigns to moments residents care about, such as property tax due dates, the start of yard waste season or winter parking rules',
          ],
        },
        {
          heading: 'Measurement and feedback',
          items: [
            'Track installs, active users and retention by channel, and stop what doesn’t work',
            'Collect residents’ feedback and questions, and bring patterns back to the product team',
            'Later, help start partnerships with local businesses, including the app’s opt-in Offers & ads',
          ],
        },
      ],
      bring: [
        '2+ years in community outreach, marketing, communications or growth',
        'Experience planning campaigns and reporting on them with real numbers',
        'Comfort presenting to groups and talking with residents one on one, including people who aren’t confident with technology',
        'Clear writing in English for different audiences',
        'Strong organization: you can run several events and campaigns at once',
        'Availability for some evening and weekend events',
      ],
      nice: [
        'Mandarin or Cantonese; Tamil, Urdu, Farsi, Gujarati and other languages spoken in Markham are also valued',
        'Existing connections with Markham community organizations',
        'Experience growing a mobile app or digital service',
        'Experience with WeChat, Xiaohongshu or local multicultural media',
      ],
      success: [
        'You’ve run outreach with at least ten community organizations, and several are ongoing partners',
        'We know which channels bring residents who keep using the app, and what each one costs',
        'There’s a year-long calendar of campaigns tied to the City dates residents care about',
      ],
    },
    {
      team: 'Engineering',
      title: 'AI/RAG Engineer',
      summary:
        'Hey Markham answers questions by retrieving official City of Markham pages and documents, then writing a short answer that lists its sources. You’ll own the quality of that pipeline: retrieval, reranking, answer generation and the checks that catch mistakes before a resident sees them.',
      about:
        'The bar is high because the answers are about real fees, deadlines and rules. A wrong collection date or permit fee costs residents time and money, and costs us the City’s trust. You’ll work with full-stack engineers and a data quality team who review answers every day, so you’ll have real data on what’s working and what isn’t.',
      details: [],
      do: [
        {
          heading: 'Retrieval and answers',
          items: [
            'Improve retrieval over markham.ca pages and PDFs: crawling and parsing, chunking, hybrid keyword and vector search, and reranking',
            'Keep the index current as the City updates its pages, fees and bylaws',
            'Improve answer generation so answers stay short, cited and in plain language',
            'Route each question to the right answer layer: reviewed answers, retrieval, structured data such as pickup schedules, or a referral to another organization',
          ],
        },
        {
          heading: 'Accuracy and evaluation',
          items: [
            'Build checks that keep fees, dates, phone numbers and links true to the source page',
            'Build evaluation sets from real resident questions, and track metrics such as retrieval recall, faithfulness and citation accuracy',
            'Make evaluation part of every change, so regressions are caught before release',
          ],
        },
        {
          heading: 'Speed, cost and languages',
          items: [
            'Cut latency and cost with caching, smaller models where they’re good enough, and better routing',
            'Improve answers in English, French, Mandarin and Cantonese, including questions that mix languages',
            'Monitor answer quality in production and dig into failures',
          ],
        },
      ],
      bring: [
        '3+ years of professional software engineering experience, mostly in Python',
        'At least one LLM or RAG feature shipped to production, and kept running',
        'Hands-on experience with embeddings, vector search and rerankers, and a sense of when keyword search does better',
        'Experience building evaluation sets and using metrics to make decisions, rather than spot checks',
        'Experience with FastAPI or a similar framework, PostgreSQL and automated testing',
        'A degree in computer science, engineering or a related field, or equivalent experience',
      ],
      nice: [
        'Experience with pgvector',
        'Running open-weight models yourself, for example with Ollama or vLLM',
        'Experience with LlamaIndex, LangChain or similar, and knowing when not to use them',
        'Multilingual NLP, especially Chinese in both Simplified and Traditional characters',
        'Document parsing experience, especially PDFs and tables',
      ],
      success: [
        'Our evaluation set covers the topics residents ask about most, and runs on every change',
        'You’ve shipped measurable improvements to retrieval and answer accuracy',
        'Answers are faster and cheaper, with the numbers to show it',
      ],
    },
    {
      team: 'Engineering',
      title: 'Full-Stack Engineer, Mobile and Web',
      summary:
        'Build the parts of Hey Markham that residents touch: the iPhone and Android app, the website, and the tools our team uses to review answers. Recent app work includes pickup reminders, reporting a problem with a photo, and having answers read aloud.',
      about:
        'We’re a small team, so you’ll work across the stack, from a React Native screen to a FastAPI endpoint, and take features from design to the app stores. You’ll work with our AI engineers on how answers are shown, and use residents’ feedback to decide what to build next. Every feature has to work with a screen reader and in every language the app supports.',
      details: [],
      do: [
        {
          heading: 'Mobile app',
          items: [
            'Build and improve the app for iPhone and Android with React Native and Expo',
            'Work on features such as address-based pickup schedules, reminders, photo reports with location, and voice questions',
            'Ship releases to the App Store and Google Play, including builds, store review and staged rollouts',
          ],
        },
        {
          heading: 'Website and staff tools',
          items: [
            'Build pages and features on the website (Next.js)',
            'Improve the staff tools used to review and correct answers (React)',
          ],
        },
        {
          heading: 'API, quality and privacy',
          items: [
            'Add and maintain endpoints in the Python API (FastAPI) backed by PostgreSQL',
            'Write automated tests, and keep the app fast and stable on older phones',
            'Make sure every screen works with VoiceOver, TalkBack and larger text sizes',
            'Handle residents’ data with care: their home address stays on their phone, and photo location data is removed before a report is sent',
          ],
        },
      ],
      bring: [
        '3+ years of professional experience building web or mobile apps',
        'Strong TypeScript and React, and at least one React Native app shipped to the App Store or Google Play',
        'Comfort working in a Python backend, or willingness to learn it quickly',
        'Experience writing automated tests and reviewing other people’s code',
        'Working knowledge of mobile accessibility: screen readers, dynamic type and colour contrast',
        'A degree in computer science or a related field, or equivalent experience',
      ],
      nice: [
        'Experience with Expo, EAS builds and over-the-air updates',
        'Next.js experience',
        'Building apps in several languages, including Chinese',
        'Push notifications, background tasks or location features on mobile',
        'Familiarity with WCAG 2.1',
      ],
      success: [
        'You’ve shipped features in at least two app releases',
        'You know your way around the app, website, staff tools and API',
        'You’ve improved something residents notice, such as speed, stability or accessibility',
      ],
    },
    {
      team: 'Trust and compliance',
      title: 'Privacy, Security and Accessibility Advisor',
      summary:
        'Before a city signs on, it needs to know how Hey Markham handles residents’ personal information, how it’s secured, and whether it meets Ontario’s accessibility standards. You’ll review our practices, tell us what to fix first, and help us answer cities’ questions accurately.',
      about:
        'This is a part-time contract for an experienced practitioner. We’re a small team building for the public sector, so we need advice that’s practical and prioritized: what a municipality will ask for, what the law requires, and what can wait.',
      details: ['Part-time, about 1 to 2 days a week to start', '6-month contract, with the option to renew'],
      do: [
        {
          heading: 'Privacy',
          items: [
            'Review how the app, website and API collect, use, disclose, keep and delete personal information',
            'Lead privacy impact assessments, and help us prepare for the ones cities run',
            'Advise on MFIPPA when we act as a service provider to a municipality, and on PIPEDA for our own operations',
            'Help write privacy notices, retention schedules and data protection terms for contracts',
          ],
        },
        {
          heading: 'Security',
          items: [
            'Review our security practices against recognized baselines, such as the Canadian Centre for Cyber Security’s baseline controls, SOC 2 or ISO 27001',
            'Help complete the security questionnaires cities send during procurement',
            'Advise on incident response and breach notification',
          ],
        },
        {
          heading: 'Accessibility',
          items: [
            'Assess the app and website against the AODA and WCAG 2.0 Level AA, and against WCAG 2.1 AA where a city asks for it',
            'Plan accessibility testing, including testing with people who use assistive technology',
            'Help us write an accessibility statement and a process for accessibility feedback',
          ],
        },
      ],
      bring: [
        '5+ years in privacy, information security or accessibility compliance, including work with Ontario public-sector organizations',
        'In-depth knowledge of MFIPPA and PIPEDA, and working knowledge of the AODA and its Integrated Accessibility Standards',
        'Experience leading privacy impact assessments or threat and risk assessments',
        'Clear, practical writing for both technical and non-technical readers',
        'Ability to work independently and set priorities for a small team',
      ],
      nice: [
        'A certification such as CIPP/C, CIPM, CISSP, CISM, or IAAP’s CPACC or WAS',
        'Experience with AI products, including the privacy questions specific to language models',
        'Experience on the municipal side of procurement',
      ],
      success: [
        'We have a prioritized list of privacy, security and accessibility fixes, and the top items are done',
        'A privacy impact assessment of the app is complete',
        'We can answer a city’s privacy, security and accessibility questionnaire accurately and quickly',
      ],
    },
  ],

  applyTitle: 'Apply to Hey Markham',
  applyText:
    'Fill in the form with your résumé and, if you like, a cover letter. It takes a few minutes, and we’ll reply by email.',
  encourage: 'If you meet most of the qualifications but not all, we’d still like to hear from you.',
  applyOther: 'Don’t see your role? Choose “Something else” in the form and tell us how you’d help in your cover letter.',
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
  successTitle: '我们期待的成果',
  apply: '立即申请',
  roles: [
    {
      team: '业务拓展',
      title: '业务拓展经理（市政合作）',
      summary:
        'Hey Markham 根据万锦市官方信息，回答居民关于市政服务的问题，从垃圾收集日到建筑许可都能解答。我们希望各市政机构把它作为面向居民的官方渠道。您将牵头这项工作：与万锦市及安省其他市政机构建立联系，开展试点，并促成后续的正式合作协议。',
      about:
        '您将与产品团队紧密合作，参与制定我们的销售方式：定价、方案组合，以及优先接触哪些城市。市政销售周期较长，决策取决于预算周期、市议会审批和采购规定，而且往往涉及多个部门。我们希望找到一位能耐心应对这些流程、并懂得如何持续推进项目的人。',
      details: ['需在大多伦多地区及安省范围内出差，约占工作时间的 20%'],
      do: [
        {
          heading: '客户开发与关系维护',
          items: [
            '在安省范围内寻找并筛选潜在客户，从万锦市和约克区其他市政机构开始',
            '厘清每项决策涉及哪些部门（客户服务、传讯、IT、市政书记处和市议会），并与各方建立关系',
            '根据各城市的服务、语言以及现有的客服中心或 311 设置，开展需求沟通和定制化产品演示',
            '在 CRM 中跟踪每个商机，保持准确的销售预测',
          ],
        },
        {
          heading: '试点与签约',
          items: [
            '规划试点项目，并与对方商定成功标准，例如答案准确率、居民使用率或重复来电的减少',
            '与产品和工程团队协调试点工作，并向市政工作人员汇报成果',
            '就价格、条款和服务水平进行谈判，并与法律顾问合作完成合同',
          ],
        },
        {
          heading: '政府采购',
          items: [
            '关注 bids&tenders、MERX 及各市政采购平台上的机会',
            '牵头响应 RFI、RFP 和 RFQ，协调团队提供隐私、安全和无障碍方面的答复',
            '熟悉各市政机构的采购条例，包括试点项目和非竞争性采购的金额门槛',
          ],
        },
        {
          heading: '行业活动',
          items: [
            '代表 Hey Markham 参加 AMO 年会、MISA Ontario 等行业活动',
            '把从各城市听到的反馈带回产品团队，参与决定下一步开发什么',
          ],
        },
      ],
      bring: [
        '5 年以上面向政府（B2G）或企业（B2B）的销售、合作或业务拓展经验，其中至少 2 年向公共部门销售软件或技术服务',
        '有在长销售周期、多方决策的项目中成功签约的记录',
        '了解安省市政机构的预算和采购方式：工作报告、市议会审批、预算周期和 RFx 流程',
        '出色的英文写作能力：您撰写的提案和 RFP 答复会被仔细阅读并评分',
        '能够自信地向高级管理人员和民选官员做汇报',
        '大专或以上学历，或同等工作经验',
      ],
      nice: [
        '在约克区、达勒姆区、皮尔区或多伦多市的市政工作人员中有现成人脉',
        '有向政府销售客服中心、311、CRM 或数字服务工具的经验',
        '熟悉适用于加拿大政府采购的贸易协定，例如 CFTA 和 CETA',
        '会说普通话、粤语或法语',
      ],
      success: [
        '您已与安省十几个或更多市政机构的决策者会面，并清楚应优先跟进哪些',
        '至少有一个试点正在进行或已经商定，成功标准已书面确定',
        '我们有了可重复使用的提案模板、定价方案和 RFP 答复库',
      ],
    },
    {
      team: '数据质量',
      title: '数据质量实习生（答案核实）',
      summary:
        'Hey Markham 的价值在于答案准确。当居民问庭院垃圾哪天收、建一个露台要交多少许可费时，答案必须与市政府公布的信息一致，日期和金额都不能错。作为数据质量实习生，您将对照官方来源核实答案，修正错误，并帮助决定 Hey Markham 接下来该学会回答什么。',
      about:
        '您将与我们的工程师一起工作，使用和他们相同的审核工具。您的修正会直接体现在居民看到的答案里，也会加入我们每次发布前运行的测试集。如果您喜欢做研究、追求细节准确，又想从内部了解一款 AI 产品是如何开发和测试的，这个职位很适合您。',
      details: ['为期 4 个月，可延长至 8 个月', '欢迎 co-op 实习'],
      do: [
        {
          heading: '核实答案',
          items: [
            '审核居民真实问题的答案，对照 markham.ca 及其他官方来源逐项核实：费用、日期、申请条件、电话号码和链接',
            '标记错误、过时或遗漏条件的答案，例如新预算中已调整的费用，或只适用于部分房产的规定',
            '用通俗易懂的语言重写答案，并注明每条信息的来源',
            '市政府更新网页、条例或收费标准时，重新核实相关答案',
          ],
        },
        {
          heading: '扩大可回答的范围',
          items: [
            '按主题整理居民提出的问题，把措辞不同但意思相同的问题归为一组',
            '找出 Hey Markham 目前还答不好的问题，并为每个问题查找官方来源',
            '识别属于其他机构的问题，例如约克区或省政府部门，并记录由谁负责',
          ],
        },
        {
          heading: '测试与记录',
          items: [
            '测试英文答案；如果您会说普通话、粤语或法语，也测试这些语言的答案',
            '把审核过的问题和答案加入工程团队每次发布前运行的测试集',
            '清楚记录您核实了什么、改了什么、为什么改',
          ],
        },
      ],
      bring: [
        '目前就读于大专或大学，或在过去 12 个月内毕业，专业不限',
        '非常细心：日期、费用或条件与来源不符时，您能注意到',
        '出色的英文阅读和写作能力，能把复杂的规定讲得简单明白',
        '能够熟练阅读条例、政策和政府网站',
        '判断力好，知道什么时候信息不明确、需要请别人复核',
        '熟悉电子表格，能快速上手新工具',
      ],
      nice: [
        '会说普通话、粤语或法语',
        '主修公共政策、政治学、信息科学、语言学或新闻学',
        '熟悉万锦市以及居民最常用的市政服务',
        '对 AI 语言模型的工作原理感兴趣',
      ],
      success: [
        '您已审核数百条答案，涵盖垃圾收集、停车、许可、税务和康乐等主题',
        '您负责的主题错误明显减少，每一处修正都有记录和来源',
        '您已把新问题加入测试集，让发现的漏洞不再出现',
      ],
    },
    {
      team: '社区与增长',
      title: '社区与增长专员',
      summary:
        '在居民日常所在的地方、用他们熟悉的语言，把 Hey Markham 送到真正需要它的居民手中。您将策划并开展推广，衡量哪些方法有效，并建立稳定的用户群，向其他城市证明 Hey Markham 值得采用。',
      about:
        '万锦市是加拿大最多元化的城市之一，大多数居民并不是通过浏览 markham.ca 来获取市政信息的，而是从邻居、社区团体、微信群和本地媒体那里听说。这个职位的核心是在这些地方赢得信任。您将与产品团队紧密合作，居民告诉您的意见会直接影响应用的发展。',
      details: ['需在部分晚上和周末参加社区活动'],
      do: [
        {
          heading: '社区外展',
          items: [
            '与业主协会和社区协会、图书馆、长者中心、文化团体、宗教场所和学校家长会建立关系',
            '举办产品演示和信息讲座，包括面向长者和新移民的专场',
            '代表 Hey Markham 参加社区活动和节庆',
          ],
        },
        {
          heading: '推广活动与内容',
          items: [
            '在社交媒体、微信、小红书以及本地中文和多元文化媒体上策划并开展推广活动',
            '撰写和改编帖子、短视频、传单和应用商店文案，必要时与翻译人员合作',
            '结合居民关心的时间节点安排推广，例如地税缴纳截止日、庭院垃圾收集季开始或冬季停车规定',
          ],
        },
        {
          heading: '数据衡量与反馈',
          items: [
            '按渠道追踪下载量、活跃用户和留存率，停掉效果不好的做法',
            '收集居民的意见和问题，把共性问题反馈给产品团队',
            '之后协助开展本地商家合作，包括应用中由用户自行开启的“优惠与广告”',
          ],
        },
      ],
      bring: [
        '2 年以上社区外展、市场营销、传讯或用户增长经验',
        '有策划推广活动、并用真实数据汇报效果的经验',
        '能够自如地面向团体演讲，也能与居民一对一交流，包括不太熟悉科技产品的居民',
        '能针对不同受众撰写清晰的英文内容',
        '条理清晰，能同时推进多个活动和推广项目',
        '能在部分晚上和周末参加活动',
      ],
      nice: [
        '会说普通话或粤语；泰米尔语、乌尔都语、波斯语、古吉拉特语等万锦市常用语言也很有帮助',
        '与万锦市社区组织已有联系',
        '有推广移动应用或数字服务的经验',
        '有微信、小红书或本地多元文化媒体的运营经验',
      ],
      success: [
        '您已与至少十个社区组织开展外展合作，其中几个成为长期伙伴',
        '我们清楚哪些渠道带来的居民会持续使用应用，以及每个渠道的成本',
        '已制定一份全年推广日历，与居民关心的市政时间节点相结合',
      ],
    },
    {
      team: '工程',
      title: 'AI／RAG 工程师',
      summary:
        'Hey Markham 的回答方式是：检索万锦市官方网页和文件，再写出一个列明来源的简短答案。您将负责这条流程的质量：检索、重排序、答案生成，以及在居民看到之前发现错误的核查机制。',
      about:
        '要求之所以高，是因为答案涉及真实的费用、截止日期和规定。收集日期或许可费用一旦出错，居民会损失时间和金钱，我们也会失去市政府的信任。您将与全栈工程师以及每天审核答案的数据质量团队合作，因此能拿到真实数据，了解什么有效、什么无效。',
      details: [],
      do: [
        {
          heading: '检索与答案',
          items: [
            '改进对 markham.ca 网页和 PDF 的检索：抓取与解析、分块、关键词与向量混合搜索，以及重排序',
            '在市政府更新网页、费用和条例时，保持索引及时更新',
            '改进答案生成，让答案保持简短、有出处、通俗易懂',
            '把每个问题分配到合适的答案层：已审核答案、检索、收集时间表等结构化数据，或转介给其他机构',
          ],
        },
        {
          heading: '准确性与评测',
          items: [
            '构建核查机制，确保费用、日期、电话号码和链接与来源网页一致',
            '基于居民的真实问题构建评测集，追踪检索召回率、忠实度和引用准确率等指标',
            '让评测成为每次改动的必经环节，在发布前发现性能退化',
          ],
        },
        {
          heading: '速度、成本与语言',
          items: [
            '通过缓存、在效果足够时使用更小的模型以及更好的路由，降低延迟和成本',
            '提升英语、法语、普通话和粤语的答案质量，包括混用多种语言的问题',
            '监控线上答案质量，深入分析失败案例',
          ],
        },
      ],
      bring: [
        '3 年以上专业软件开发经验，主要使用 Python',
        '至少有一个 LLM 或 RAG 功能上线到生产环境，并负责持续运行',
        '有向量嵌入、向量搜索和重排序模型的实战经验，也清楚什么时候关键词搜索效果更好',
        '有构建评测集、用指标而不是抽查来做决策的经验',
        '有 FastAPI 或类似框架、PostgreSQL 和自动化测试的经验',
        '计算机科学、工程或相关专业学位，或同等工作经验',
      ],
      nice: [
        '有 pgvector 使用经验',
        '自己部署过开源权重模型，例如使用 Ollama 或 vLLM',
        '有 LlamaIndex、LangChain 或类似框架的经验，也知道什么时候不该用它们',
        '多语言自然语言处理经验，尤其是简体和繁体中文',
        '有文档解析经验，尤其是 PDF 和表格',
      ],
      success: [
        '评测集已覆盖居民最常问的主题，并在每次改动时运行',
        '您已上线可量化的检索和答案准确率改进',
        '答案更快、成本更低，并有数据为证',
      ],
    },
    {
      team: '工程',
      title: '全栈工程师（移动端与网页）',
      summary:
        '开发 Hey Markham 中居民直接接触的部分：iPhone 和 Android 应用、网站，以及团队用来审核答案的工具。应用最近新增的功能包括收集提醒、拍照报告问题，以及朗读答案。',
      about:
        '我们是一支小团队，您将跨前后端工作，从 React Native 页面到 FastAPI 接口，并把功能从设计一路带到应用商店。您将与 AI 工程师合作决定答案如何呈现，并根据居民反馈决定下一步开发什么。每个功能都必须支持屏幕阅读器，并适用于应用支持的所有语言。',
      details: [],
      do: [
        {
          heading: '移动应用',
          items: [
            '使用 React Native 和 Expo 开发和改进 iPhone 与 Android 应用',
            '开发按地址显示收集时间表、提醒、带位置的拍照报告、语音提问等功能',
            '向 App Store 和 Google Play 发布新版本，包括构建、商店审核和分阶段发布',
          ],
        },
        {
          heading: '网站与内部工具',
          items: [
            '开发网站（Next.js）的页面和功能',
            '改进员工用于审核和修正答案的内部工具（React）',
          ],
        },
        {
          heading: 'API、质量与隐私',
          items: [
            '在基于 PostgreSQL 的 Python API（FastAPI）中新增和维护接口',
            '编写自动化测试，确保应用在旧款手机上也能快速、稳定地运行',
            '确保每个页面都支持 VoiceOver、TalkBack 和放大字体',
            '谨慎处理居民数据：家庭住址只保存在手机上，报告发送前会移除照片中的位置信息',
          ],
        },
      ],
      bring: [
        '3 年以上开发网页或移动应用的专业经验',
        '扎实的 TypeScript 和 React 功底，至少有一个 React Native 应用上架 App Store 或 Google Play',
        '能够在 Python 后端中工作，或愿意快速学习',
        '有编写自动化测试和代码审查的经验',
        '了解移动端无障碍设计：屏幕阅读器、动态字体和颜色对比度',
        '计算机科学或相关专业学位，或同等工作经验',
      ],
      nice: [
        '有 Expo、EAS 构建和 OTA 热更新经验',
        '有 Next.js 经验',
        '开发过多语言应用，包括中文',
        '有移动端推送通知、后台任务或定位功能的开发经验',
        '熟悉 WCAG 2.1',
      ],
      success: [
        '您开发的功能已随至少两个版本发布',
        '您熟悉应用、网站、内部工具和 API 的代码',
        '您改进了居民能感受到的方面，例如速度、稳定性或无障碍体验',
      ],
    },
    {
      team: '信任与合规',
      title: '隐私、安全与无障碍顾问',
      summary:
        '在签约之前，城市需要了解 Hey Markham 如何处理居民的个人信息、如何保障安全，以及是否符合安省的无障碍标准。您将审查我们的做法，告诉我们哪些问题应该先解决，并帮助我们准确回答城市提出的问题。',
      about:
        '这是一份面向资深从业者的兼职合同。我们是一支为公共部门开发产品的小团队，需要务实、分清轻重缓急的建议：市政机构会要求什么、法律规定了什么，以及哪些可以暂缓。',
      details: ['兼职，初期约每周 1 至 2 天', '6 个月合同，可续约'],
      do: [
        {
          heading: '隐私',
          items: [
            '审查应用、网站和 API 如何收集、使用、披露、保存和删除个人信息',
            '主导隐私影响评估，并协助我们准备应对城市开展的评估',
            '就我们作为市政机构服务提供商时的 MFIPPA 义务，以及我们自身运营适用的 PIPEDA 提供建议',
            '协助撰写隐私声明、保留期限表和合同中的数据保护条款',
          ],
        },
        {
          heading: '安全',
          items: [
            '对照公认的基准审查我们的安全措施，例如加拿大网络安全中心的基线控制措施、SOC 2 或 ISO 27001',
            '协助填写城市在采购中发出的安全问卷',
            '就事件响应和数据泄露通知提供建议',
          ],
        },
        {
          heading: '无障碍',
          items: [
            '对照 AODA 和 WCAG 2.0 AA 级评估应用和网站；城市有要求时，对照 WCAG 2.1 AA',
            '规划无障碍测试，包括邀请使用辅助技术的人士参与测试',
            '协助我们撰写无障碍声明，并建立无障碍反馈流程',
          ],
        },
      ],
      bring: [
        '5 年以上隐私、信息安全或无障碍合规经验，包括服务安省公共部门机构的经验',
        '深入了解 MFIPPA 和 PIPEDA，熟悉 AODA 及其《综合无障碍标准》',
        '有主导隐私影响评估或威胁与风险评估的经验',
        '能为技术和非技术读者撰写清晰、务实的文字',
        '能够独立工作，并为小团队排定优先事项',
      ],
      nice: [
        '持有 CIPP/C、CIPM、CISSP、CISM 或 IAAP 的 CPACC、WAS 等认证',
        '有 AI 产品经验，包括语言模型特有的隐私问题',
        '有在市政机构一方参与采购的经验',
      ],
      success: [
        '我们有了一份按优先级排列的隐私、安全和无障碍整改清单，最重要的几项已经完成',
        '应用的隐私影响评估已经完成',
        '我们能够准确、快速地回答城市的隐私、安全和无障碍问卷',
      ],
    },
  ],

  applyTitle: '申请加入 Hey Markham',
  applyText: '在下方表单中上传您的简历，也可以附上求职信。只需几分钟，我们会通过邮件回复您。',
  encourage: '如果您符合大部分要求但并非全部，我们仍然欢迎您申请。',
  applyOther: '没有看到适合您的职位？在表单中选择“其他”，并在求职信中告诉我们您能如何帮忙。',
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
  bringTitle: 'Qualifications',
  niceTitle: 'Atouts',
  successTitle: 'À quoi ressemble la réussite',
  apply: 'Postuler',
  roles: [
    {
      team: 'Développement des affaires',
      title: 'Directeur ou directrice du développement des affaires, partenariats municipaux',
      summary:
        'Hey Markham répond aux questions des résidents sur les services municipaux, de la collecte des ordures aux permis de construire, à partir de l’information officielle de la Ville de Markham. Nous voulons que les municipalités l’offrent à leurs résidents comme canal officiel. Vous mènerez ce travail : nouer le dialogue avec la Ville de Markham et d’autres municipalités ontariennes, mener des projets pilotes et conclure les ententes qui suivent.',
      about:
        'Vous travaillerez de près avec l’équipe qui bâtit le produit et contribuerez à définir notre façon de vendre : tarifs, offres et villes à approcher en premier. La vente aux municipalités prend du temps. Les décisions dépendent des cycles budgétaires, de l’approbation du conseil et des règles d’approvisionnement, et plusieurs services ont leur mot à dire. Nous cherchons une personne patiente face à ces étapes, qui sait faire avancer un dossier.',
      details: ['Déplacements dans la RGT et en Ontario, environ 20 % du temps'],
      do: [
        {
          heading: 'Prospection et relations',
          items: [
            'Repérer et qualifier des clients potentiels en Ontario, en commençant par la Ville de Markham et les autres municipalités de la Région de York',
            'Déterminer qui intervient dans chaque décision (service à la clientèle, communications, TI, greffe et conseil) et bâtir des relations avec chacun',
            'Mener des rencontres exploratoires et des démonstrations adaptées aux services, aux langues et au centre d’appels ou au 311 de chaque ville',
            'Suivre chaque occasion dans notre CRM et tenir des prévisions exactes',
          ],
        },
        {
          heading: 'Projets pilotes et ententes',
          items: [
            'Définir des projets pilotes avec des critères de réussite convenus des deux côtés, comme l’exactitude des réponses, l’adoption par les résidents ou la baisse des appels répétés',
            'Coordonner les projets pilotes avec notre équipe produit et ingénierie, et présenter les résultats au personnel municipal',
            'Négocier les tarifs, les modalités et les niveaux de service, avec l’aide de nos conseillers juridiques pour les contrats',
          ],
        },
        {
          heading: 'Approvisionnement',
          items: [
            'Surveiller les occasions sur bids&tenders, MERX et les portails d’approvisionnement municipaux',
            'Diriger les réponses aux DI, DP et DDP, en mobilisant l’équipe pour les questions de confidentialité, de sécurité et d’accessibilité',
            'Connaître le règlement d’approvisionnement de chaque municipalité, y compris ses seuils pour les projets pilotes et les achats non concurrentiels',
          ],
        },
        {
          heading: 'Présence dans le milieu',
          items: [
            'Représenter Hey Markham lors d’événements comme le congrès annuel de l’AMO et MISA Ontario',
            'Transmettre à l’équipe produit ce que vous entendez des villes, et aider à décider de ce que nous bâtirons ensuite',
          ],
        },
      ],
      bring: [
        'Au moins 5 ans d’expérience en vente, partenariats ou développement des affaires B2G ou B2B, dont au moins 2 ans à vendre des logiciels ou des services technologiques au secteur public',
        'Des ententes conclues malgré de longs cycles de vente et plusieurs décideurs',
        'Une bonne connaissance de la façon dont les municipalités ontariennes budgètent et achètent : rapports du personnel, approbations du conseil, cycles budgétaires et processus d’appel d’offres',
        'Une excellente rédaction en anglais : vos propositions et réponses aux appels d’offres seront lues de près et notées',
        'L’aisance à présenter devant des cadres supérieurs et des élus',
        'Un diplôme d’études postsecondaires, ou une expérience équivalente',
      ],
      nice: [
        'Des relations existantes avec le personnel municipal de la Région de York, de Durham, de Peel ou de la Ville de Toronto',
        'Une expérience de vente d’outils de centre d’appels, de 311, de CRM ou de services numériques aux gouvernements',
        'Une connaissance des accords commerciaux qui s’appliquent aux marchés publics canadiens, comme l’ALEC et l’AECG',
        'Le mandarin, le cantonais ou le français',
      ],
      success: [
        'Vous avez rencontré des décideurs dans une douzaine de municipalités ontariennes ou plus, et savez lesquelles cibler en premier',
        'Au moins un projet pilote est en cours ou convenu, avec ses critères de réussite par écrit',
        'Nous disposons d’un modèle de proposition, d’une grille tarifaire et d’une banque de réponses aux appels d’offres réutilisables',
      ],
    },
    {
      team: 'Qualité des données',
      title: 'Stagiaire en qualité des données, vérification des réponses',
      summary:
        'Hey Markham n’est utile que si ses réponses sont exactes. Quand un résident demande quand les résidus de jardin sont ramassés ou combien coûte un permis pour une terrasse, la réponse doit correspondre à ce que la Ville a publié, à la date et au dollar près. Comme stagiaire en qualité des données, vous vérifierez les réponses à partir des sources officielles, corrigerez ce qui ne va pas et aiderez à décider de ce que Hey Markham doit apprendre ensuite.',
      about:
        'Vous travaillerez avec nos ingénieurs et utiliserez le même outil de révision qu’eux. Vos corrections se retrouvent dans les réponses que voient les résidents, et dans les jeux de tests que nous exécutons avant chaque version. Ce poste vous convient si vous aimez la recherche et l’exactitude, et voulez voir de l’intérieur comment un produit d’IA est bâti et testé.',
      details: ['Stage de 4 mois, prolongeable à 8 mois', 'Stages coopératifs bienvenus'],
      do: [
        {
          heading: 'Vérifier les réponses',
          items: [
            'Réviser les réponses à de vraies questions de résidents et vérifier chaque fait sur markham.ca et d’autres sources officielles : tarifs, dates, admissibilité, numéros de téléphone et liens',
            'Signaler les réponses inexactes, périmées ou qui omettent une condition, comme un tarif modifié dans le nouveau budget ou une règle qui ne s’applique qu’à certaines propriétés',
            'Réécrire les réponses en langage clair, en indiquant la source de chacune',
            'Revérifier les réponses quand la Ville met à jour une page, un règlement ou ses tarifs',
          ],
        },
        {
          heading: 'Élargir ce que Hey Markham peut répondre',
          items: [
            'Classer les questions des résidents par sujet, et regrouper celles qui demandent la même chose en d’autres mots',
            'Trouver les questions auxquelles Hey Markham répond encore mal, et chercher la source officielle de chacune',
            'Repérer les questions qui relèvent d’un autre organisme, comme la Région de York ou un ministère provincial, et noter qui s’en occupe',
          ],
        },
        {
          heading: 'Tester et documenter',
          items: [
            'Tester les réponses en anglais, et en mandarin, en cantonais ou en français si vous les parlez',
            'Ajouter les questions et réponses révisées aux jeux de tests que l’ingénierie exécute avant chaque version',
            'Prendre des notes claires sur ce que vous avez vérifié, ce que vous avez changé et pourquoi',
          ],
        },
      ],
      bring: [
        'Être inscrit à un programme collégial ou universitaire, ou diplômé depuis moins de 12 mois, dans n’importe quel domaine',
        'Un grand souci du détail : vous remarquez quand une date, un tarif ou une condition ne correspond pas à la source',
        'D’excellentes compétences en lecture et en rédaction en anglais, et la capacité d’expliquer simplement des règles complexes',
        'L’aisance à lire des règlements, des politiques et des sites gouvernementaux',
        'Un bon jugement pour reconnaître ce qui est incertain et demande un deuxième avis',
        'L’aisance avec les tableurs et l’apprentissage de nouveaux outils',
      ],
      nice: [
        'Le mandarin, le cantonais ou le français',
        'Des études en politiques publiques, science politique, sciences de l’information, linguistique ou journalisme',
        'Une bonne connaissance de Markham et des services municipaux que les résidents utilisent le plus',
        'De la curiosité pour le fonctionnement des modèles de langage',
      ],
      success: [
        'Vous avez révisé plusieurs centaines de réponses sur les déchets, le stationnement, les permis, les taxes et les loisirs',
        'Les sujets que vous avez couverts comptent moins d’erreurs, et chaque correction est documentée avec sa source',
        'Vous avez ajouté de nouvelles questions à nos jeux de tests, pour que les lacunes trouvées restent corrigées',
      ],
    },
    {
      team: 'Communauté et croissance',
      title: 'Spécialiste de la communauté et de la croissance',
      summary:
        'Mettez Hey Markham entre les mains des résidents qui en ont besoin, là où ils se trouvent déjà et dans les langues qu’ils parlent. Vous planifierez et mènerez des activités de sensibilisation, mesurerez ce qui fonctionne et bâtirez une base d’utilisateurs réguliers qui montrera aux autres villes que Hey Markham vaut la peine d’être adopté.',
      about:
        'Markham est l’une des villes les plus diversifiées au Canada, et la plupart des résidents ne trouvent pas l’information municipale en parcourant markham.ca. Ils l’apprennent de leurs voisins, des groupes communautaires, des groupes WeChat et des médias locaux. Ce poste consiste à gagner la confiance dans ces milieux. Vous travaillerez de près avec l’équipe produit, si bien que ce que vous disent les résidents façonnera l’application.',
      details: ['Certains soirs et fins de semaine pour des événements communautaires'],
      do: [
        {
          heading: 'Action communautaire',
          items: [
            'Bâtir des relations avec les associations de contribuables et communautaires, les bibliothèques, les centres pour aînés, les organismes culturels, les lieux de culte et les conseils d’école',
            'Animer des démonstrations et des séances d’information, y compris pour les aînés et les nouveaux arrivants',
            'Représenter Hey Markham lors d’événements et de festivals communautaires',
          ],
        },
        {
          heading: 'Campagnes et contenu',
          items: [
            'Planifier et mener des campagnes sur les médias sociaux, WeChat, Xiaohongshu (RedNote) et dans les médias locaux sinophones et multiculturels',
            'Rédiger et adapter des publications, de courtes vidéos, des dépliants et les textes des magasins d’applications, avec des traducteurs au besoin',
            'Faire coïncider les campagnes avec les moments qui comptent pour les résidents, comme l’échéance de l’impôt foncier, le début de la collecte des résidus de jardin ou les règles de stationnement d’hiver',
          ],
        },
        {
          heading: 'Mesure et rétroaction',
          items: [
            'Suivre les installations, les utilisateurs actifs et la rétention par canal, et abandonner ce qui ne fonctionne pas',
            'Recueillir les commentaires et les questions des résidents, et transmettre les tendances à l’équipe produit',
            'Plus tard, aider à lancer des partenariats avec les entreprises locales, y compris Offres et publicités, que les résidents activent s’ils le souhaitent',
          ],
        },
      ],
      bring: [
        'Au moins 2 ans d’expérience en action communautaire, marketing, communications ou croissance',
        'Une expérience de la planification de campagnes et de la présentation de leurs résultats avec de vrais chiffres',
        'L’aisance à présenter devant des groupes et à parler en personne avec des résidents, y compris ceux qui sont moins à l’aise avec la technologie',
        'Une rédaction claire en anglais pour différents publics',
        'Un excellent sens de l’organisation : vous pouvez mener plusieurs événements et campagnes à la fois',
        'Des disponibilités pour certains événements en soirée et la fin de semaine',
      ],
      nice: [
        'Le mandarin ou le cantonais; le tamoul, l’ourdou, le farsi, le gujarati et les autres langues parlées à Markham sont aussi appréciés',
        'Des liens existants avec des organismes communautaires de Markham',
        'Une expérience de croissance d’une application mobile ou d’un service numérique',
        'Une expérience de WeChat, de Xiaohongshu ou des médias multiculturels locaux',
      ],
      success: [
        'Vous avez mené des activités avec au moins dix organismes communautaires, dont plusieurs sont devenus des partenaires',
        'Nous savons quels canaux amènent des résidents qui continuent d’utiliser l’application, et ce que chacun coûte',
        'Un calendrier de campagnes sur un an est en place, lié aux dates municipales qui comptent pour les résidents',
      ],
    },
    {
      team: 'Ingénierie',
      title: 'Ingénieur ou ingénieure IA/RAG',
      summary:
        'Hey Markham répond aux questions en récupérant les pages et documents officiels de la Ville de Markham, puis en rédigeant une réponse courte qui indique ses sources. Vous serez responsable de la qualité de cette chaîne : recherche, reclassement, génération des réponses et vérifications qui détectent les erreurs avant qu’un résident ne les voie.',
      about:
        'Les exigences sont élevées parce que les réponses portent sur de vrais tarifs, de vraies échéances et de vraies règles. Une date de collecte ou un tarif de permis erroné coûte du temps et de l’argent aux résidents, et nous coûte la confiance de la Ville. Vous travaillerez avec des développeurs full stack et une équipe de qualité des données qui révise des réponses chaque jour : vous aurez de vraies données sur ce qui fonctionne et ce qui ne fonctionne pas.',
      details: [],
      do: [
        {
          heading: 'Recherche et réponses',
          items: [
            'Améliorer la recherche dans les pages et PDF de markham.ca : exploration et analyse, découpage, recherche hybride par mots-clés et vectorielle, et reclassement',
            'Garder l’index à jour quand la Ville modifie ses pages, ses tarifs et ses règlements',
            'Améliorer la génération pour que les réponses restent courtes, sourcées et en langage clair',
            'Aiguiller chaque question vers la bonne couche de réponse : réponses révisées, recherche, données structurées comme les calendriers de collecte, ou renvoi vers un autre organisme',
          ],
        },
        {
          heading: 'Exactitude et évaluation',
          items: [
            'Bâtir des vérifications qui gardent les tarifs, dates, numéros de téléphone et liens fidèles à la page source',
            'Bâtir des jeux d’évaluation à partir de vraies questions de résidents, et suivre des mesures comme le rappel de la recherche, la fidélité et l’exactitude des citations',
            'Intégrer l’évaluation à chaque changement, pour détecter les régressions avant la mise en production',
          ],
        },
        {
          heading: 'Vitesse, coûts et langues',
          items: [
            'Réduire la latence et les coûts grâce à la mise en cache, à des modèles plus petits quand ils suffisent et à un meilleur aiguillage',
            'Améliorer les réponses en anglais, en français, en mandarin et en cantonais, y compris les questions qui mélangent les langues',
            'Surveiller la qualité des réponses en production et analyser les échecs',
          ],
        },
      ],
      bring: [
        'Au moins 3 ans d’expérience professionnelle en génie logiciel, surtout en Python',
        'Au moins une fonction fondée sur un grand modèle de langage ou la RAG mise en production et maintenue',
        'Une expérience concrète des plongements, de la recherche vectorielle et des modèles de reclassement, et le sens de savoir quand la recherche par mots-clés fait mieux',
        'Une expérience de la création de jeux d’évaluation et de la prise de décisions fondées sur des mesures plutôt que sur des vérifications ponctuelles',
        'Une expérience de FastAPI ou d’un cadre semblable, de PostgreSQL et des tests automatisés',
        'Un diplôme en informatique, en génie ou dans un domaine connexe, ou une expérience équivalente',
      ],
      nice: [
        'Une expérience de pgvector',
        'Avoir déployé vous-même des modèles à poids ouverts, par exemple avec Ollama ou vLLM',
        'Une expérience de LlamaIndex, de LangChain ou d’outils semblables, et savoir quand ne pas s’en servir',
        'Le traitement automatique des langues multilingue, en particulier le chinois en caractères simplifiés et traditionnels',
        'Une expérience de l’analyse de documents, surtout les PDF et les tableaux',
      ],
      success: [
        'Notre jeu d’évaluation couvre les sujets que les résidents abordent le plus, et s’exécute à chaque changement',
        'Vous avez livré des améliorations mesurables de la recherche et de l’exactitude des réponses',
        'Les réponses sont plus rapides et moins coûteuses, chiffres à l’appui',
      ],
    },
    {
      team: 'Ingénierie',
      title: 'Développeur ou développeuse full stack, mobile et Web',
      summary:
        'Bâtissez ce que les résidents utilisent de Hey Markham : l’application pour iPhone et Android, le site Web et les outils dont notre équipe se sert pour réviser les réponses. Parmi les ajouts récents à l’application : les rappels de collecte, le signalement d’un problème avec une photo et la lecture des réponses à voix haute.',
      about:
        'Nous sommes une petite équipe : vous travaillerez sur toute la pile, d’un écran React Native à un point de terminaison FastAPI, et mènerez les fonctions de la conception jusqu’aux magasins d’applications. Vous travaillerez avec nos spécialistes de l’IA sur la présentation des réponses, et vous appuierez sur les commentaires des résidents pour décider de la suite. Chaque fonction doit marcher avec un lecteur d’écran et dans toutes les langues de l’application.',
      details: [],
      do: [
        {
          heading: 'Application mobile',
          items: [
            'Bâtir et améliorer l’application pour iPhone et Android avec React Native et Expo',
            'Travailler sur des fonctions comme les calendriers de collecte selon l’adresse, les rappels, les signalements avec photo et emplacement, et les questions à la voix',
            'Publier les versions dans l’App Store et Google Play, y compris les compilations, l’examen par les magasins et les déploiements progressifs',
          ],
        },
        {
          heading: 'Site Web et outils internes',
          items: [
            'Bâtir des pages et des fonctions sur le site Web (Next.js)',
            'Améliorer les outils internes servant à réviser et corriger les réponses (React)',
          ],
        },
        {
          heading: 'API, qualité et confidentialité',
          items: [
            'Ajouter et maintenir des points de terminaison dans l’API Python (FastAPI) appuyée sur PostgreSQL',
            'Écrire des tests automatisés, et garder l’application rapide et stable sur les téléphones plus anciens',
            'S’assurer que chaque écran fonctionne avec VoiceOver, TalkBack et les grandes tailles de texte',
            'Traiter les données des résidents avec soin : leur adresse reste sur leur téléphone, et les données de localisation des photos sont retirées avant l’envoi d’un signalement',
          ],
        },
      ],
      bring: [
        'Au moins 3 ans d’expérience professionnelle en développement d’applications Web ou mobiles',
        'De solides compétences en TypeScript et React, et au moins une application React Native publiée dans l’App Store ou Google Play',
        'L’aisance à travailler dans un back-end Python, ou la volonté de l’apprendre rapidement',
        'Une expérience des tests automatisés et de la révision du code des autres',
        'Une bonne connaissance de l’accessibilité mobile : lecteurs d’écran, taille de texte dynamique et contraste des couleurs',
        'Un diplôme en informatique ou dans un domaine connexe, ou une expérience équivalente',
      ],
      nice: [
        'Une expérience d’Expo, des compilations EAS et des mises à jour à distance',
        'Une expérience de Next.js',
        'Avoir bâti des applications multilingues, y compris en chinois',
        'Les notifications poussées, les tâches en arrière-plan ou la géolocalisation sur mobile',
        'Une bonne connaissance des WCAG 2.1',
      ],
      success: [
        'Vous avez livré des fonctions dans au moins deux versions de l’application',
        'Vous connaissez bien l’application, le site Web, les outils internes et l’API',
        'Vous avez amélioré quelque chose que les résidents remarquent, comme la vitesse, la stabilité ou l’accessibilité',
      ],
    },
    {
      team: 'Confiance et conformité',
      title: 'Conseiller ou conseillère en confidentialité, sécurité et accessibilité',
      summary:
        'Avant de signer, une ville doit savoir comment Hey Markham traite les renseignements personnels des résidents, comment l’application est sécurisée et si elle respecte les normes d’accessibilité de l’Ontario. Vous examinerez nos pratiques, nous direz quoi corriger en premier et nous aiderez à répondre avec exactitude aux questions des villes.',
      about:
        'Il s’agit d’un contrat à temps partiel pour une personne d’expérience. Nous sommes une petite équipe qui bâtit pour le secteur public : nous avons besoin de conseils pratiques et priorisés sur ce qu’une municipalité exigera, ce que la loi impose et ce qui peut attendre.',
      details: ['Temps partiel, environ 1 à 2 jours par semaine au départ', 'Contrat de 6 mois, renouvelable'],
      do: [
        {
          heading: 'Confidentialité',
          items: [
            'Examiner comment l’application, le site Web et l’API recueillent, utilisent, communiquent, conservent et suppriment les renseignements personnels',
            'Diriger les évaluations des facteurs relatifs à la vie privée, et nous préparer à celles que mènent les villes',
            'Nous conseiller sur la LAIMPVP (MFIPPA) quand nous agissons comme fournisseur de services d’une municipalité, et sur la LPRPDE pour nos propres activités',
            'Aider à rédiger les avis de confidentialité, les calendriers de conservation et les clauses de protection des données des contrats',
          ],
        },
        {
          heading: 'Sécurité',
          items: [
            'Examiner nos pratiques de sécurité au regard de référentiels reconnus, comme les contrôles de cybersécurité de base du Centre canadien pour la cybersécurité, SOC 2 ou ISO 27001',
            'Aider à remplir les questionnaires de sécurité que les villes envoient lors des appels d’offres',
            'Nous conseiller sur la réponse aux incidents et la déclaration des atteintes',
          ],
        },
        {
          heading: 'Accessibilité',
          items: [
            'Évaluer l’application et le site Web au regard de la LAPHO (AODA) et des WCAG 2.0 niveau AA, et des WCAG 2.1 AA quand une ville le demande',
            'Planifier les tests d’accessibilité, y compris avec des personnes qui utilisent des technologies d’assistance',
            'Nous aider à rédiger une déclaration d’accessibilité et un processus de rétroaction sur l’accessibilité',
          ],
        },
      ],
      bring: [
        'Au moins 5 ans d’expérience en conformité en matière de confidentialité, de sécurité de l’information ou d’accessibilité, y compris auprès d’organismes publics ontariens',
        'Une connaissance approfondie de la LAIMPVP et de la LPRPDE, et une bonne connaissance de la LAPHO et de ses normes d’accessibilité intégrées',
        'Une expérience de la direction d’évaluations des facteurs relatifs à la vie privée ou d’évaluations des menaces et des risques',
        'Une rédaction claire et pratique, pour des lecteurs techniques comme non techniques',
        'La capacité de travailler de façon autonome et d’établir les priorités d’une petite équipe',
      ],
      nice: [
        'Une certification comme CIPP/C, CIPM, CISSP, CISM, ou CPACC ou WAS de l’IAAP',
        'Une expérience des produits d’IA, y compris des enjeux de confidentialité propres aux modèles de langage',
        'Une expérience de l’approvisionnement du côté municipal',
      ],
      success: [
        'Nous avons une liste priorisée de correctifs en confidentialité, sécurité et accessibilité, et les premiers sont faits',
        'Une évaluation des facteurs relatifs à la vie privée de l’application est terminée',
        'Nous pouvons répondre avec exactitude et rapidité au questionnaire d’une ville sur la confidentialité, la sécurité et l’accessibilité',
      ],
    },
  ],

  applyTitle: 'Postuler chez Hey Markham',
  applyText:
    'Remplissez le formulaire avec votre CV et, si vous le souhaitez, une lettre de présentation. Cela prend quelques minutes, et nous vous répondrons par courriel.',
  encourage: 'Si vous répondez à la plupart des qualifications sans les remplir toutes, nous aimerions quand même avoir de vos nouvelles.',
  applyOther: 'Vous ne voyez pas votre poste? Choisissez «\u00a0Autre\u00a0» dans le formulaire et dites-nous dans votre lettre comment vous pourriez aider.',
  accommodation: 'Des mesures d’adaptation sont offertes sur demande aux candidats à toutes les étapes du processus de sélection.',
  employer: 'Hey Markham est conçu par Aydenait Solutions.',
};

const copy: Record<Locale, CareersCopy> = { en, zh, fr };

const factIcons = [MapPin, Users, Sparkles];
const howIcons = [ShieldCheck, MessageSquare, MapPin];


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
                        {r.details.map(detail => (
                          <li key={detail} className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                            <CalendarDays className="w-3.5 h-3.5" aria-hidden="true" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-3 mb-7 text-slate-700 dark:text-slate-300 leading-relaxed">
                    <p>{r.summary}</p>
                    <p>{r.about}</p>
                  </div>

                  <h4 className="text-base font-semibold text-slate-900 dark:text-white mb-4">{t.doTitle}</h4>
                  <div className="grid md:grid-cols-2 gap-x-8 gap-y-6 mb-8">
                    {r.do.map(group => (
                      <RoleList key={group.heading} title={group.heading} items={group.items} level="h5" />
                    ))}
                  </div>

                  <div className="grid md:grid-cols-2 gap-x-8 gap-y-6 pt-6 border-t border-slate-200 dark:border-slate-800">
                    <RoleList title={t.bringTitle} items={r.bring} />
                    <RoleList title={t.niceTitle} items={r.nice} muted />
                  </div>

                  <div className="mt-7 rounded-xl bg-slate-50 dark:bg-slate-800/60 p-5">
                    <RoleList title={t.successTitle} items={r.success} icon={Target} />
                  </div>

                  {/* Picks this role in the form below and scrolls to it (see ApplicationForm) */}
                  <a
                    href={`#apply-${role.id}`}
                    aria-describedby={`${role.id}-title`}
                    className="mt-7 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary-600 hover:bg-primary-700 text-white text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-primary-300"
                  >
                    {t.apply}
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* The application form; each role's Apply link lands here with that role chosen */}
      <section id="apply" className="scroll-mt-20 pb-16 md:pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6 text-center">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 dark:text-white mb-3">{t.applyTitle}</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">{t.applyText}</p>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">{t.encourage} {t.applyOther}</p>
          </div>
          <ApplicationForm locale={locale} roleTitles={t.roles.map(r => r.title)} />
          <p className="mt-6 text-sm text-slate-500 dark:text-slate-400">{t.accommodation}</p>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{t.employer}</p>
        </div>
      </section>
    </div>
  );
}

function RoleList({ title, items, muted = false, level = 'h4', icon: Icon = CheckCircle2 }: {
  title: string;
  items: string[];
  muted?: boolean;
  level?: 'h4' | 'h5';
  icon?: typeof CheckCircle2;
}) {
  const Heading = level;
  return (
    <div>
      <Heading className={`text-sm font-semibold mb-3 ${level === 'h5' ? 'text-primary-700 dark:text-primary-300' : 'text-slate-900 dark:text-white'}`}>{title}</Heading>
      <ul className="space-y-2">
        {items.map(item => (
          <li key={item} className="flex gap-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            <Icon
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
