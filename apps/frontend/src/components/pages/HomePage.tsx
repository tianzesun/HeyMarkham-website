import {
  Mic, Search, ShieldCheck, Mail, Phone, CheckCircle2, Clock, AlertCircle,
  MessageSquare, Users, Link2, Home, Zap, CreditCard, BookOpen,
  Car, Droplets, Leaf, Waves, Trees, CalendarDays, Camera, Navigation,
  Languages, LayoutGrid, Bell, ArrowRight, ArrowUpRight, Signpost, ClipboardCheck, Recycle,
  Wrench, FileText, Receipt, Snowflake, Landmark, Bus, Sun, MapPin,
  Lock, Compass, ListChecks, Briefcase
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { HeroTryLive, StoreButton } from '../HeroTryLive';
import { ContactForm } from '../ContactForm';
import { RevealOnScroll } from '../RevealOnScroll';
import { AnswerSource } from '../AnswerSource';
import { APP_STORE_URL, GOOGLE_PLAY_URL, LIVE_URL } from '../../lib/links';
import { latestRelease } from '../../lib/releases';
import { localeHome, type Locale } from '../../lib/i18n';

// / and /zh. One structure, both languages: every string lives in `en` / `zh` below, and icons,
// links and layout stay in the JSX. List items line up by position with the icon lists in the
// component, so keep the order the same in both languages.
//
// Claims must match what the app and live assistant really do today (see lib/releases.ts), and
// the answer steps mirror the HeyMarkham API's answer layers (docs/ANSWER_LAYERS.md,
// app/rag/fact_support.py, app/services/referrals.py); don't promise more than those do.
// When the English changes, change the Chinese with it.

const en = {
  // Positioning: not a search box but an assistant, shown as the three jobs it does
  pillarsEyebrow: 'Not a search box. An assistant.',
  pillarsTitle: 'You say what you’re trying to do. Hey Markham does the rest.',
  pillarsSubtitle:
    'Finding municipal information shouldn’t be difficult. City websites contain thousands of pages, documents, policies and service details, and finding the exact information you need can take time. Hey Markham makes it easier: simply ask a question in your own words, with no need to know which department to contact or which webpage to visit first.',
  pillars: [
    {
      verb: 'Finds out',
      title: 'The answer, and where it came from',
      description: 'Answers come from official City of Markham information, with every page they used. It knows your Markham too.',
      examples: [
        'Your pickup day, from your address',
        'Your ward, councillor and mayor',
        'The closest library, park, community centre or depot',
      ],
    },
    {
      verb: 'Points you the right way',
      title: 'Who actually handles it',
      description: 'Not everything in Markham is run by the City. Hey Markham tells you who handles it, with their page and a number to tap and call.',
      examples: [
        'Missed blue box? Miller Waste',
        'Property assessment? MPAC',
        'Regional roads and buses? York Region and YRT',
      ],
    },
    {
      verb: 'Helps you get it done',
      title: 'From question to done',
      description: 'Not just a link to read. The next step, ready to take.',
      examples: [
        'Report a pothole with a photo',
        'Reminders for pickup and property tax',
        'Directions, or straight to the page to apply',
      ],
    },
  ],

  // The topics residents ask about, as a short index; the scenarios below go deep on three of them
  topicsEyebrow: 'The topics',
  topicsTitle: 'What Can You Ask?',
  topicsSubtitle:
    'The everyday things residents need from the City. Ask in your own words, by voice or text, and get the answer with the page it came from.',
  askTopics: [
    { title: 'Garbage & recycling', description: 'Collection schedules, missed pickups, recycling and waste disposal.' },
    { title: 'Parking & traffic', description: 'Parking regulations, permits, tickets and road restrictions.' },
    { title: 'Building permits', description: 'Renovations, decks, basement finishing and zoning requirements.' },
    { title: 'Property & taxes', description: 'Property taxes, property-related services and municipal responsibilities.' },
    { title: 'Parks & recreation', description: 'Facilities, programs, registrations and community activities.' },
    { title: 'Business services', description: 'Business licensing, zoning and operating requirements.' },
  ],

  // The everyday jobs residents come back for. Keep each "does" item to what a release note says
  featuresEyebrow: 'What it does',
  featuresTitle: 'Built for the Things You Do Every Week',
  featuresSubtitle:
    'Bins, repairs and permits are where residents need the City most. So that’s where Hey Markham goes furthest.',
  scenarios: [
    {
      title: 'Garbage & recycling',
      ask: '“Does this go in the blue box? And when is my next pickup?”',
      does: [
        'Finds your exact pickup day from your address, with a calendar of the coming months',
        'Reminds you the night before or the morning of, and warns you when a holiday moves your pickup',
        'Names an item from a photo and shows where it goes, from the City’s sorting guide',
        'Missed blue box pickup? Tells you it’s Miller Waste now, and how to reach them',
      ],
    },
    {
      title: 'Report & repair',
      ask: '“There’s a pothole on my street.”',
      does: [
        'Take a photo: Hey Markham suggests the type of problem and drafts the details',
        'Use where I am adds the exact spot and street address; say the details instead of typing',
        'You check it and send it to the City from your own email; photo location data is removed first',
        'My reports keeps what you sent, so you can follow up, track it or call in one tap',
      ],
    },
    {
      title: 'Permits & licences',
      ask: '“Do I need a permit to build a deck?”',
      does: [
        'Building permits: decks, basement second suites and the documents a permit needs',
        'Business licences and renewals, home businesses, and lottery and raffle licences',
        'Pet licences and overnight street parking exemptions',
        'Then straight to the City page to apply',
      ],
    },
  ],
  moreLifeTitle: 'And the rest of life in Markham',
  moreLife: [
    { title: 'Property tax', description: 'The due dates the City has published, with a reminder a week or a day before.' },
    { title: 'Winter', description: 'Winter parking rules, the plow tracker and windrow clearing for seniors, with a heads-up when snow is coming.' },
    { title: 'Parks & places', description: 'The nearest park, splash pads and trails, and directions to libraries and community centres. Or ask by neighbourhood: “parks in Cornell”.' },
    { title: 'Events', description: 'What’s on at the City this week, with dates, times and places.' },
    { title: 'Your ward', description: 'Your ward, your councillor, the mayor and your regional councillors.' },
    { title: 'School buses', description: 'Bus delays and cancellations, and your bus stop, with the team that runs them.' },
  ],
  appOnlyStart: 'Reminders, photos, My Markham and reports are in the app. Anyone can ask questions ',
  appOnlyLink: 'in a web browser',
  appOnlyEnd: '.',

  trustBar: ['No account needed', 'Answers link to official sources', 'Powered by public city data', 'Available 24/7'],

  // App section: each spotlight pairs a screenshot with the feature it shows; keep in step with lib/releases.ts
  appEyebrow: 'The Hey Markham app',
  appTitle: 'Your Markham, in Your Pocket',
  appSubtitle:
    'For iPhone and Android. Set your address once, and Hey Markham knows your pickup day, your ward and what’s happening near home.',
  spotlights: {
    answer: {
      title: 'Answers you can check',
      description: 'Ask by voice or text and get a short answer, with every official markham.ca page it came from. Tap Listen to hear it read aloud.',
      alt: 'Hey Markham answering "When is yard waste picked up?", with five official markham.ca sources and a Listen button',
    },
    report: {
      title: 'Report a problem with a photo',
      description: 'Snap a pothole, graffiti or a missed pickup. Hey Markham suggests the type of problem and drafts the details; you check them and send the report to the City from your own email.',
      alt: 'Hey Markham Report a problem screen with Take a photo, a problem type, details and Use where I am',
    },
    events: {
      title: 'What’s on around the city',
      description: 'Upcoming City events from markham.ca, with dates, times and places.',
      alt: 'Hey Markham Events screen listing upcoming City events with dates, times and places',
    },
    inbox: {
      title: 'Service updates in your inbox',
      description: 'Closures, road work and City news, and you choose which notifications you get.',
      alt: 'Hey Markham Inbox with service updates such as a facility closure and road work, and City news',
    },
  },
  appExtras: [
    { title: 'Today, on your home screen', description: 'The few things worth knowing today: a weather warning, your next pickup, tax due, road work near home.' },
    { title: 'My Markham', description: 'Add your home address once, and “nearest park” or “who is my councillor” is answered for your home. It’s saved on your phone, not in your account.' },
    { title: 'Ask out loud, hear it back', description: 'Speak your question and hear the answer read aloud in a natural voice you choose.' },
    { title: 'Four languages', description: 'English, French, Mandarin or Cantonese, for menus, answers and reading aloud. City messages are translated too.' },
    { title: 'Directions to nearby places', description: 'Parks, libraries, community centres and recycling depots, in Apple Maps or Google Maps.' },
    { title: 'You choose what it remembers', description: 'Turn memory of earlier chats on or off, or use a temporary chat that isn’t saved to your chats or remembered.' },
    { title: 'Widgets & shortcuts', description: 'Your next pickup on an Android home-screen widget, and app icon shortcuts.' },
    { title: 'Use it as a guest', description: 'Ask without an account, or sign in with Apple, Google or email to keep your chats and settings.' },
  ],

  // The City's own app, as its markham.ca page describes it (checked November 15, 2026). Only list
  // what that page says, and keep it fair: the two apps do different jobs
  accessTitle: 'Already use Access Markham?',
  accessIntro:
    'Access Markham is the City of Markham’s official app, organized by feature. Hey Markham starts with your question. They do different jobs, so many residents will want both.',
  accessHeading: 'Access Markham, from the City',
  accessFeatures: [
    'Recycling and garbage collection schedule with personalized notifications',
    'What Goes Where search for disposing of items',
    'Winter maintenance',
    'Bikeways, parks and paths',
    'Report a problem',
  ],
  accessNote: 'The City’s own app, organized by feature.',
  heyHeading: 'Hey Markham',
  heyDifferences: [
    'Ask any City question in your own words, by voice or text',
    'Short answers with the markham.ca pages they come from',
    'Tells you who to contact when it isn’t the City',
    'English, French, Mandarin or Cantonese, with answers read aloud',
    'Report a problem with a photo that drafts the details for you',
  ],
  heyNote: 'Best when you have a question and don’t know where on markham.ca the answer is.',
  accessDisclaimerStart: 'Hey Markham is independent and isn’t affiliated with the City of Markham. Access Markham features as listed on ',
  accessDisclaimerLink: 'the City’s Access Markham page',
  accessDisclaimerEnd: ', November 2026.',

  downloadTitle: 'Get the Hey Markham app',
  downloadText: 'Use it as a guest, or sign in with Apple, Google or email to keep your questions and settings.',
  whatsNew: 'What’s new in version {version}',
  googlePlayLead: 'Get it on',
  appStoreLead: 'Download on',
  appStore: 'the App Store',
  comingSoon: 'Coming soon to',

  // How an answer is made, in residents' words
  trustEyebrow: 'Why you can trust it',
  trustTitle: 'It Knows Where to Look, and Says When It Doesn’t Know',
  trustSubtitle:
    'A useful answer must be more than a confident-sounding response. Hey Markham prioritizes official and traceable information, in clear everyday language, and would rather tell you it can’t confirm something than guess.',
  answerSteps: [
    {
      title: 'Understands what you mean',
      description: 'Ask the same question in different words: Hey Markham understands the meaning behind your question rather than exact keyword matches. Your own words, by voice or text, in four languages, with follow-ups like “and on weekends?”',
    },
    {
      title: 'Knows where to look',
      description: 'Official information first: answers come from City of Markham pages and other official sources, with the pages they used. Common questions get answers people have checked; your ward, pickup day and nearby places come from your address; events, closures and road work come from the City’s own listings.',
    },
    {
      title: 'Checks before it answers',
      description: 'New knowledge is researched and reviewed before it’s added: AI assists with research and organization, and human review keeps answer quality up. At answer time, fees, times, phone numbers and links must appear in the pages it read, or they’re left out: a wrong fee is worse than none.',
    },
    {
      title: 'Says so when it can’t',
      description: 'If the answer isn’t there, Hey Markham says so and tells you who can help: the City’s Contact Centre at 905-477-5530, or the agency that handles it.',
    },
  ],
  exampleLabel: 'A real example',
  // A real worked example for the three steps; every fact is on the City's pet licence page
  workedExample: {
    question: 'Does my cat need a licence if it’s microchipped?',
    answer: 'Yes. Dogs and cats in Markham need a licence, even if they have a microchip. You can register online, and licences expire on December 31 each year.',
    action: 'Register your pet online',
  },
  trustPoints: [
    'Every page an answer used, one tap away',
    'Answers not from City pages are marked',
    'The conditions and exceptions that apply',
  ],
  step: 'Step {n}',

  // "Why not just search markham.ca?" runs one real question through three paths.
  // The menu path and the search results were checked on markham.ca on November 15, 2026; the
  // answer and its source come from lib/faq-data.ts, which cites the City's page for it
  hardEyebrow: 'The hard part',
  hardTitle: 'Why Not Just Search markham.ca?',
  hardSubtitle:
    'The answers are on markham.ca. Reaching them is the hard part: long menus, separate systems, and a search box that matches words rather than what you mean.',
  realQuestionLabel: 'A real question',
  realQuestion: '“How tall can my backyard fence be?”',
  menusTitle: 'Click through the menus',
  menusNote: 'Fence rules sit under “About the City”, and the link is about 100 links down the By-Laws page, after a long list of by-law PDFs.',
  menusResult: '4 clicks, then a long scroll',
  searchTitle: 'Search the site',
  searchYouSearch: 'You search for',
  searchReturns: 'markham.ca returns',
  searchNoResults: 'No results found.',
  searchNote: 'Search one word instead and you get everything it can mean: “park” alone returns 1,976 results, from Parks to Parking.',
  searchResult: 'Nothing for the question you actually asked',
  askTitle: 'Ask Hey Markham',
  fenceAnswer:
    'Front-yard fences can be up to 1.2 m (4 ft) high, and fences along rear and interior side property lines up to 1.8 m (6 ft). On corner lots, the side facing the street is limited to 1.2 m. Pools deeper than 0.6 m need a 1.2 m fence and a pool enclosure permit before filling.',
  askResult: 'One question, answered with the page it came from',
  hardChecked: 'The menu path and the search results above were checked on markham.ca on November 15, 2026.',
  payoffTitle: 'Don’t search for it. Ask for it.',
  payoffText:
    'Hey Markham reads the page, gives you the answer, and links the page it came from. Four clicks and a long scroll become one question.',
  tryLive: 'Try it live',
  seeHowItChecks: 'See how it checks its answers',

  // How a new question becomes a verified answer, in the order the team does it
  improveEyebrow: 'Always improving',
  improveTitle: 'Answers That Keep Getting Better',
  improveSubtitle:
    'Every question helps us understand what Markham residents need, and how they ask it. When a question our knowledge base doesn’t adequately cover comes in, it becomes an opportunity to improve the system.',
  improvementSteps: [
    { title: 'Collect new questions', description: 'Every question we can’t answer well is collected, and the gaps in what we know are identified.' },
    { title: 'Organize and group', description: 'Similar questions are grouped together, so one round of research covers them all.' },
    { title: 'Research official sources', description: 'Relevant official municipal sources are found and read for the real requirements.' },
    { title: 'Prepare answers with AI', description: 'AI assists with research and organization, drafting the answer from those sources.' },
    { title: 'Review and verify', description: 'New information is reviewed and verified before it’s approved.' },
    { title: 'Add to the knowledge base', description: 'Approved answers join a growing, structured collection of municipal questions, verified answers and the different ways residents ask them.' },
  ],
  improveClosing: 'The result is a knowledge system that evolves with the needs of the community.',

  // Roadmap stages, from what works today to what's planned; Now must match what the app and site really do
  roadmapEyebrow: 'Roadmap',
  roadmapTitle: 'A City Assistant for Every Resident',
  roadmapSubtitle:
    'Our goal: every Markham resident has an assistant they can ask any time, that understands what they need and helps them get it done. We get there by doing the everyday jobs well first, then adding more.',
  roadmapStages: [
    {
      label: 'Live now',
      theme: 'Find out, route & report',
      description: 'Answers from official City information, the right contact when it isn’t the City, and the everyday jobs done in the app.',
      items: [
        { title: 'Garbage & Recycling', description: 'Your pickup day, reminders, what goes where from a photo' },
        { title: 'Report a Problem', description: 'Potholes, graffiti, missed pickups, with a photo' },
        { title: 'Permits & Licences', description: 'What you need, what it costs, where to apply' },
        { title: 'My Markham', description: 'Your ward, councillor, pickup day and closest places' },
        { title: 'Who Handles It', description: 'The right agency when it isn’t the City' },
      ],
    },
    {
      label: 'Next',
      theme: 'Step by step, then book & apply',
      description: 'Every City service mapped to the department that runs it, the steps and what you need, then connected to City systems so you can act without leaving the conversation.',
      items: [
        { title: 'Service Guides', description: 'Who runs it, the steps, what to bring' },
        { title: 'Library System', description: 'Check books, renew items' },
        { title: 'Recreation Booking', description: 'Book pools, courts' },
        { title: 'Permit Applications', description: 'Parking, building permits' },
      ],
    },
    {
      label: 'Later',
      theme: 'Pay',
      description: 'Bills and payments in the same place you ask your questions.',
      items: [
        { title: 'Property Tax', description: 'View, pay, payment plans' },
        { title: 'Water Bills', description: 'View and pay water bills' },
        { title: 'Fines & Fees', description: 'Parking tickets' },
      ],
    },
  ],
  roadmapNote: 'Next and Later are plans, and may change.',

  // Closing pitch for residents, before the municipal contact form
  closingEyebrow: 'For every resident',
  closingTitle: 'Better Access to City Information. Less Time Searching.',
  closingText:
    'Whether you are a homeowner, tenant, business owner or simply exploring community services, Hey Markham is here to help you navigate municipal information more easily.',
  closingTagline: 'Ask Hey Markham. Get to know your city.',
  closingAsk: 'Ask Hey Markham',
  closingContact: 'Get in touch',

  contactEyebrow: 'For the City of Markham and other municipalities',
  contactTitle: 'Bring Hey Markham to Your Residents',
  contactSubtitle: 'Start with a pilot. See the results. Then decide.',
  contactResidents: 'Residents: have feedback or a question about Hey Markham? Use the same form.',
  whyTitle: 'Why Choose Hey Markham?',
  why: [
    { title: 'Quick Implementation', description: 'Starts from the information already on your public website. No system replacement needed.' },
    { title: 'Fewer Calls in the Wrong Place', description: 'Sends residents to the department or agency that handles their request, including the ones that aren’t the City.' },
    { title: 'Answers You Can Audit', description: 'Every answer traces back to the pages it came from, and staff review the answers to the most common questions.' },
    { title: 'Ease the Load on Staff', description: 'Answers routine questions around the clock, so staff can focus on the complex ones.' },
    { title: 'Privacy and Accessibility First', description: 'Designed around Canadian privacy law and accessibility standards. We’ll walk your team through our approach during the pilot.' },
  ],
  getInTouchTitle: 'Get in Touch',
};

type HomeCopy = typeof en;

// Chinese: see the translation notes in lib/i18n.ts. Menu names and search text on markham.ca stay
// in English, because that's what residents will see there.
const zh: HomeCopy = {
  pillarsEyebrow: '不是搜索框，而是助手。',
  pillarsTitle: '您说想办什么事，剩下的交给 Hey Markham。',
  pillarsSubtitle:
    '查找市政信息不该这么难。市政府网站有成千上万的网页、文件、政策和服务说明，要找到您需要的那一条往往很费时间。Hey Markham 让这件事变得简单：用您自己的话提问就行，不必先弄清该联系哪个部门、该打开哪个网页。',
  pillars: [
    {
      verb: '查清楚',
      title: '答案，以及答案的出处',
      description: '答案来自万锦市官方信息，并附上用到的每一个网页。它也了解您所在的万锦市。',
      examples: [
        '根据您的地址查到收垃圾的日子',
        '您的选区、市议员和市长',
        '离您最近的图书馆、公园、社区中心或回收站',
      ],
    },
    {
      verb: '指对方向',
      title: '这件事到底归谁管',
      description: '万锦市的事务并非都由市政府负责。Hey Markham 会告诉您该找谁，附上对方的网页和一键拨打的电话。',
      examples: [
        '蓝色回收箱漏收？找 Miller Waste',
        '物业评估？找 MPAC',
        '区域道路和公交？找约克区和 YRT',
      ],
    },
    {
      verb: '帮您办成',
      title: '从提问到办妥',
      description: '不只是给您一个链接去读，而是把下一步准备好，等您去做。',
      examples: [
        '拍照报告路面坑洼',
        '收垃圾和缴地税的提醒',
        '路线导航，或直达申请页面',
      ],
    },
  ],

  topicsEyebrow: '常见话题',
  topicsTitle: '可以问些什么？',
  topicsSubtitle: '居民日常需要市政府帮忙的各种事情。用您自己的话提问，语音或文字都可以，答案会附上出处网页。',
  askTopics: [
    { title: '垃圾与回收', description: '收集时间表、漏收、回收和废物处理。' },
    { title: '停车与交通', description: '停车规定、许可证、罚单和道路限制。' },
    { title: '建筑许可证', description: '装修、露台、地下室装修和分区要求。' },
    { title: '物业与税务', description: '地税、物业相关服务和市政职责。' },
    { title: '公园与康乐', description: '设施、课程、报名和社区活动。' },
    { title: '商业服务', description: '营业执照、分区和经营要求。' },
  ],

  featuresEyebrow: '功能介绍',
  featuresTitle: '为您每周都要办的事而打造',
  featuresSubtitle: '垃圾桶、维修和许可证，是居民最需要市政府的地方。所以 Hey Markham 在这些方面做得最深入。',
  scenarios: [
    {
      title: '垃圾与回收',
      ask: '“这个能放进蓝色回收箱吗？下次什么时候收？”',
      does: [
        '根据您的地址查到准确的收集日，并显示未来几个月的日历',
        '在前一晚或当天早上提醒您，节假日收集日变动时也会提前告知',
        '拍张照片就能认出物品，并按照市政府的分类指南告诉您该放哪里',
        '蓝色回收箱漏收？告诉您现在由 Miller Waste 负责，以及如何联系他们',
      ],
    },
    {
      title: '报告与维修',
      ask: '“我家街上有个坑洼。”',
      does: [
        '拍张照片：Hey Markham 会判断问题类型并帮您起草详细说明',
        '“使用我的位置”会加上准确地点和街道地址；详细说明可以直接说，不用打字',
        '您确认后，用自己的电子邮件发送给市政府；照片中的位置信息会先被删除',
        '“我的报告”会保存您发送的内容，方便您跟进、查看进度或一键致电',
      ],
    },
    {
      title: '许可证与执照',
      ask: '“建露台需要许可证吗？”',
      does: [
        '建筑许可证：露台、地下室第二居住单元，以及申请许可证所需的文件',
        '营业执照及续期、家庭经营业务，以及彩票和抽奖执照',
        '宠物执照和夜间路边停车豁免',
        '然后直达市政府的申请页面',
      ],
    },
  ],
  moreLifeTitle: '以及万锦市生活的方方面面',
  moreLife: [
    { title: '地税', description: '市政府公布的缴税截止日期，并在到期前一周或一天提醒您。' },
    { title: '冬季', description: '冬季停车规定、铲雪车追踪和长者车道口积雪清理，下雪前还会提醒您。' },
    { title: '公园与场所', description: '最近的公园、戏水池和步道，以及前往图书馆和社区中心的路线。也可以按社区提问：“Cornell 的公园”。' },
    { title: '活动', description: '本周市政府举办的活动，附日期、时间和地点。' },
    { title: '您的选区', description: '您的选区、市议员、市长和区域议员。' },
    { title: '校车', description: '校车延误和取消信息、您的校车站，以及负责运营的团队。' },
  ],
  appOnlyStart: '提醒、拍照、“我的万锦”和报告功能在应用中提供。任何人都可以',
  appOnlyLink: '在网页浏览器中',
  appOnlyEnd: '提问。',

  trustBar: ['无需注册账户', '答案附官方来源链接', '基于市政府公开数据', '全天候服务'],

  appEyebrow: 'Hey Markham 应用',
  appTitle: '把万锦市装进口袋',
  appSubtitle: '支持 iPhone 和 Android。设置一次地址，Hey Markham 就知道您的收垃圾日、所在选区和家附近的动态。',
  spotlights: {
    answer: {
      title: '可以核对的答案',
      description: '用语音或文字提问，得到简短的答案，并附上它参考的每一个 markham.ca 官方网页。点击“朗读”即可收听。',
      alt: 'Hey Markham 回答“庭院垃圾什么时候收？”，附五个 markham.ca 官方来源和朗读按钮',
    },
    report: {
      title: '拍照报告问题',
      description: '拍下路面坑洼、涂鸦或漏收的垃圾。Hey Markham 会判断问题类型并起草详细说明；您确认后，用自己的电子邮件把报告发送给市政府。',
      alt: 'Hey Markham 的报告问题页面，包含拍照、问题类型、详细说明和使用我的位置',
    },
    events: {
      title: '城中活动一览',
      description: '来自 markham.ca 的市政府近期活动，附日期、时间和地点。',
      alt: 'Hey Markham 的活动页面，列出市政府近期活动的日期、时间和地点',
    },
    inbox: {
      title: '服务动态直达收件箱',
      description: '设施关闭、道路施工和市政新闻，接收哪些通知由您决定。',
      alt: 'Hey Markham 收件箱，显示设施关闭、道路施工等服务动态和市政新闻',
    },
  },
  appExtras: [
    { title: '今日要闻，就在首页', description: '今天值得知道的几件事：天气警报、下次收垃圾、地税到期、家附近的道路施工。' },
    { title: '我的万锦', description: '添加一次家庭住址，“最近的公园”或“我的市议员是谁”就会按您家的位置回答。地址保存在您的手机上，不在您的账户里。' },
    { title: '开口提问，听取回答', description: '说出您的问题，用您选择的自然语音朗读答案。' },
    { title: '四种语言', description: '菜单、答案和朗读均支持英语、法语、普通话或粤语。市政府的消息也会翻译。' },
    { title: '附近场所导航', description: '公园、图书馆、社区中心和回收站，可在 Apple 地图或 Google 地图中打开。' },
    { title: '记住什么由您决定', description: '可以开启或关闭对过往对话的记忆，也可以使用不保存、不被记住的临时对话。' },
    { title: '小组件与快捷方式', description: '在 Android 主屏幕小组件上查看下次收垃圾时间，还有应用图标快捷方式。' },
    { title: '以访客身份使用', description: '无需账户即可提问，也可以用 Apple、Google 或电子邮件登录，保存您的对话和设置。' },
  ],

  accessTitle: '已经在用 Access Markham？',
  accessIntro:
    'Access Markham 是万锦市的官方应用，按功能分类。Hey Markham 则从您的问题出发。两者各有分工，很多居民会两个都用。',
  accessHeading: 'Access Markham（市政府官方）',
  accessFeatures: [
    '垃圾和回收收集时间表，附个性化通知',
    '“What Goes Where”物品分类搜索',
    '冬季道路维护',
    '自行车道、公园和步道',
    '报告问题',
  ],
  accessNote: '市政府自己的应用，按功能分类。',
  heyHeading: 'Hey Markham',
  heyDifferences: [
    '用自己的话问任何市政问题，语音或文字均可',
    '简短的答案，附上出处的 markham.ca 网页',
    '不归市政府管的事，告诉您该联系谁',
    '支持英语、法语、普通话或粤语，答案可朗读',
    '拍照报告问题，自动帮您起草详细说明',
  ],
  heyNote: '当您有问题、却不知道答案在 markham.ca 哪个角落时，最为好用。',
  accessDisclaimerStart: 'Hey Markham 是独立服务，与万锦市没有隶属关系。Access Markham 的功能以',
  accessDisclaimerLink: '市政府 Access Markham 页面',
  accessDisclaimerEnd: '所列为准（2026 年 11 月）。',

  downloadTitle: '下载 Hey Markham 应用',
  downloadText: '以访客身份使用，或用 Apple、Google 或电子邮件登录，保存您的提问和设置。',
  whatsNew: '{version} 版更新内容',
  googlePlayLead: '立即下载',
  appStoreLead: '前往下载',
  appStore: 'App Store',
  comingSoon: '即将登陆',

  trustEyebrow: '为何可信',
  trustTitle: '知道去哪里找，不知道时会直说',
  trustSubtitle:
    '有用的答案，不能只是听起来很有把握。Hey Markham 优先采用官方、可追溯的信息，用清楚的日常语言表达；无法确认的事，它宁可告诉您，也不会去猜。',
  answerSteps: [
    {
      title: '理解您的意思',
      description: '同一个问题换种说法也没关系：Hey Markham 理解的是问题背后的意思，而不是逐字匹配关键词。用您自己的话，语音或文字，四种语言都可以，还能接着追问，比如“那周末呢？”',
    },
    {
      title: '知道去哪里找',
      description: '官方信息优先：答案来自万锦市网页和其他官方来源，并附上用到的网页。常见问题的答案经过人工核对；您的选区、收垃圾日和附近场所根据您的地址查找；活动、设施关闭和道路施工来自市政府自己发布的信息。',
    },
    {
      title: '回答前先核实',
      description: '新知识在加入之前都会经过研究和审核：AI 协助研究和整理，人工审核保证答案质量。回答时，费用、时间、电话号码和链接必须出现在它读过的网页中，否则一律不写：错误的费用比没有更糟。',
    },
    {
      title: '答不了就直说',
      description: '如果找不到答案，Hey Markham 会直说，并告诉您谁能帮忙：万锦市客服中心 905-477-5530，或负责此事的机构。',
    },
  ],
  exampleLabel: '真实示例',
  workedExample: {
    question: '我的猫已经植入芯片了，还需要办执照吗？',
    answer: '需要。万锦市的狗和猫都必须办理执照，即使已植入芯片也一样。可以在线登记，执照每年 12 月 31 日到期。',
    action: '在线登记宠物',
  },
  trustPoints: [
    '答案用到的每个网页，一键即可打开',
    '并非来自市政府网页的答案会特别标注',
    '列出适用的条件和例外情况',
  ],
  step: '第 {n} 步',

  hardEyebrow: '难在哪里',
  hardTitle: '为什么不直接搜索 markham.ca？',
  hardSubtitle: '答案都在 markham.ca 上，难的是找到它们：冗长的菜单、各自独立的系统，还有只匹配字词、不理解意思的搜索框。',
  realQuestionLabel: '一个真实的问题',
  realQuestion: '“我家后院的围栏最高可以建多高？”',
  menusTitle: '逐层点击菜单',
  menusNote: '围栏规定放在“About the City”下面，而且链接位于 By-Laws 页面往下约 100 个链接处，排在一长串附例 PDF 之后。',
  menusResult: '点击 4 次，再往下滚动很久',
  searchTitle: '搜索网站',
  searchYouSearch: '您在搜索框输入',
  searchReturns: 'markham.ca 返回',
  searchNoResults: 'No results found.（未找到结果）',
  searchNote: '改搜一个词，就会得到它所有可能的意思：单搜“park”就返回 1,976 条结果，从公园（Parks）到停车（Parking）都有。',
  searchResult: '您真正想问的问题，一条结果也没有',
  askTitle: '问 Hey Markham',
  fenceAnswer:
    '前院围栏最高 1.2 米（4 英尺），后院及内侧边界的围栏最高 1.8 米（6 英尺）。转角地块临街一侧限高 1.2 米。深度超过 0.6 米的泳池需要 1.2 米高的围栏，并须在注水前取得泳池围栏许可证。',
  askResult: '一个问题，答案附上出处网页',
  hardChecked: '以上菜单路径和搜索结果于 2026 年 11 月 15 日在 markham.ca 上核实。',
  payoffTitle: '不用搜，直接问。',
  payoffText: 'Hey Markham 替您读网页、给出答案，并附上出处网页。四次点击加一长段滚动，变成一个问题。',
  tryLive: '在线体验',
  seeHowItChecks: '看看它如何核实答案',

  improveEyebrow: '持续改进',
  improveTitle: '越来越好的答案',
  improveSubtitle:
    '每一个问题都帮助我们了解万锦市居民需要什么、会怎么问。当知识库还不能很好回答的问题出现时，它就成了改进系统的机会。',
  improvementSteps: [
    { title: '收集新问题', description: '收集每一个我们还答不好的问题，找出知识上的空白。' },
    { title: '整理归类', description: '把相似的问题归为一组，一轮研究就能全部覆盖。' },
    { title: '研究官方来源', description: '找到相关的市政官方来源，读清楚实际要求。' },
    { title: '借助 AI 准备答案', description: 'AI 协助研究和整理，根据这些来源起草答案。' },
    { title: '审核与核实', description: '新信息在批准前都要经过审核和核实。' },
    { title: '加入知识库', description: '获批的答案会加入一个不断扩充、结构化的知识库，收录市政问题、经过核实的答案，以及居民提问的各种说法。' },
  ],
  improveClosing: '最终形成一个随社区需求不断进化的知识系统。',

  roadmapEyebrow: '发展路线图',
  roadmapTitle: '人人都有的城市助手',
  roadmapSubtitle:
    '我们的目标：每一位万锦市居民都有一个随时可以提问的助手，它理解您的需要，并帮您把事情办好。我们会先把日常事务做好，再逐步增加更多功能。',
  roadmapStages: [
    {
      label: '现已上线',
      theme: '查询、转介与报告',
      description: '来自市政府官方信息的答案，不归市政府管时告诉您该找谁，以及在应用中办好日常事务。',
      items: [
        { title: '垃圾与回收', description: '您的收垃圾日、提醒，拍照识别物品该放哪里' },
        { title: '报告问题', description: '路面坑洼、涂鸦、漏收垃圾，附照片' },
        { title: '许可证与执照', description: '需要什么、费用多少、去哪里申请' },
        { title: '我的万锦', description: '您的选区、市议员、收垃圾日和最近的场所' },
        { title: '归谁负责', description: '不归市政府管时，指向正确的机构' },
      ],
    },
    {
      label: '下一步',
      theme: '分步指引，然后预订与申请',
      description: '把每项市政服务对应到负责的部门，列出步骤和所需材料，再接入市政府系统，让您不用离开对话就能办理。',
      items: [
        { title: '服务指南', description: '谁负责、有哪些步骤、要带什么' },
        { title: '图书馆系统', description: '查询图书、续借' },
        { title: '康乐设施预订', description: '预订泳池、球场' },
        { title: '许可证申请', description: '停车许可、建筑许可证' },
      ],
    },
    {
      label: '以后',
      theme: '缴费',
      description: '在提问的同一个地方查看账单、完成缴费。',
      items: [
        { title: '地税', description: '查看、缴纳、分期付款计划' },
        { title: '水费', description: '查看并缴纳水费账单' },
        { title: '罚款与费用', description: '停车罚单' },
      ],
    },
  ],
  roadmapNote: '“下一步”和“以后”是计划，可能会有调整。',

  closingEyebrow: '为每一位居民',
  closingTitle: '更方便获取市政信息，更少时间在搜索上。',
  closingText: '无论您是屋主、租客、企业主，还是只是想了解社区服务，Hey Markham 都能帮您更轻松地找到市政信息。',
  closingTagline: '问问 Hey Markham，更了解您的城市。',
  closingAsk: '问 Hey Markham',
  closingContact: '联系我们',

  contactEyebrow: '面向万锦市及其他市政机构',
  contactTitle: '为您的居民引入 Hey Markham',
  contactSubtitle: '从试点开始。看到成效，再做决定。',
  contactResidents: '居民朋友：对 Hey Markham 有意见或疑问？也请使用同一个表单。',
  whyTitle: '为什么选择 Hey Markham？',
  why: [
    { title: '快速部署', description: '直接利用您公共网站上已有的信息，无需更换任何系统。' },
    { title: '减少打错电话', description: '把居民引导到负责其事务的部门或机构，包括不属于市政府的机构。' },
    { title: '答案可以审计', description: '每个答案都能追溯到出处网页，最常见问题的答案由工作人员审核。' },
    { title: '减轻员工负担', description: '全天候回答常规问题，让员工专注处理复杂的事务。' },
    { title: '隐私与无障碍优先', description: '依照加拿大隐私法律和无障碍标准设计。试点期间，我们会向您的团队详细介绍我们的做法。' },
  ],
  getInTouchTitle: '联系方式',
};

const copy: Record<Locale, HomeCopy> = { en, zh };

// Icons line up by position with the lists in `copy`
const pillarIcons = [<Search key="s" className="w-6 h-6" />, <Signpost key="p" className="w-6 h-6" />, <ClipboardCheck key="c" className="w-6 h-6" />];
const topicIcons = [Recycle, Car, FileText, Receipt, Trees, Briefcase];
const scenarioStyles = [
  { key: 'waste', Icon: Recycle, tone: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300' },
  { key: 'report', Icon: Wrench, tone: 'bg-sky-50 text-sky-700 dark:bg-sky-900/40 dark:text-sky-300' },
  { key: 'permits', Icon: FileText, tone: 'bg-amber-50 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300' },
];
const moreLifeIcons = [Receipt, Snowflake, Trees, CalendarDays, Landmark, Bus];
const appExtraIcons = [Sun, MapPin, Mic, Languages, Navigation, Lock, LayoutGrid, Users];
const answerStepIcons = [MessageSquare, Compass, ShieldCheck, AlertCircle];
const trustPointIcons = [Link2, AlertCircle, ListChecks];
const whyIcons = [Zap, Signpost, Link2, Users, ShieldCheck];
const roadmapStyles = [
  { key: 'now', Icon: CheckCircle2, itemIcons: [Leaf, Camera, FileText, MapPin, Signpost] },
  { key: 'next', Icon: Clock, itemIcons: [ListChecks, BookOpen, Waves, Car] },
  { key: 'later', Icon: CreditCard, itemIcons: [Home, Droplets, CreditCard] },
];

// Per-stage colours: Now is live (green), Next is in progress (amber), Later is planned (slate)
const roadmapTones: Record<string, { node: string; badge: string; card: string; icon: string }> = {
  now: {
    node: 'bg-green-500 text-white ring-green-100 dark:ring-green-900/60',
    badge: 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300',
    card: 'border-green-300 dark:border-green-700 shadow-lg shadow-green-900/5',
    icon: 'bg-green-50 text-green-700 dark:bg-green-900/40 dark:text-green-300',
  },
  next: {
    node: 'bg-amber-400 text-white ring-amber-100 dark:ring-amber-900/60',
    badge: 'bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-300',
    card: 'border-slate-200 dark:border-slate-700',
    icon: 'bg-amber-50 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300',
  },
  later: {
    node: 'bg-white text-slate-500 ring-slate-200 border-2 border-slate-300 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-600 dark:ring-slate-800',
    badge: 'bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-300',
    card: 'border-slate-200 dark:border-slate-700 border-dashed',
    icon: 'bg-slate-100 text-slate-600 dark:bg-slate-700/60 dark:text-slate-300',
  },
};

// Examples in the app section were checked on markham.ca on November 15, 2026; recheck before changing them
const ACCESS_MARKHAM_URL = 'https://www.markham.ca/about-city-markham/access-markham-mobile-app';
const FENCE_URL = 'https://www.markham.ca/about-city-markham/city-hall/bylaw/fences-swimming-pools';
const PET_LICENCE_URL = 'https://www.markham.ca/permits-licences-taxes/animal-services/pet-licence';
// The real menu labels and search text on markham.ca, which is in English
const CLICK_PATH = ['Home', 'About the City of Markham', 'City Hall', 'By-Laws', 'Fences & Swimming Pools'];
const SEARCHED_FOR = '“How tall can my backyard fence be?”';

// Server-rendered; only ContactForm and RevealOnScroll hydrate in the browser
export function HomePage({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const home = localeHome(locale);
  const answerSource = (source: string) => (
    <AnswerSource source={source} locale={locale} linkClassName="hover:text-primary-600 dark:hover:text-primary-300" />
  );

  const spotlights = {
    answer: { ...t.spotlights.answer, icon: <CheckCircle2 className="w-5 h-5" />, src: '/screenshots/app-answer.png' },
    report: { ...t.spotlights.report, icon: <Camera className="w-5 h-5" />, src: '/screenshots/app-report.png' },
    events: { ...t.spotlights.events, icon: <CalendarDays className="w-5 h-5" />, src: '/screenshots/app-events.png' },
    inbox: { ...t.spotlights.inbox, icon: <Bell className="w-5 h-5" />, src: '/screenshots/app-inbox.png' },
  };

  return (
    <div className="min-h-screen w-full flex flex-col bg-white dark:bg-slate-950">
      <RevealOnScroll />
      <div className="flex-grow">
        <HeroTryLive locale={locale} />

        {/* Positioning: not a search box but an assistant, shown as the three jobs it does */}
        <section className="py-16 md:py-20 px-6 bg-slate-900 dark:bg-slate-950 border-t border-slate-800">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <p data-reveal className="text-sm font-semibold uppercase tracking-wider text-primary-300 mb-3">
                {t.pillarsEyebrow}
              </p>
              <h2 data-reveal className="text-2xl md:text-4xl font-serif font-bold text-white mb-4 text-balance">
                {t.pillarsTitle}
              </h2>
              <p data-reveal className="text-lg text-slate-300 text-pretty" style={{ transitionDelay: '0.1s' }}>
                {t.pillarsSubtitle}
              </p>
            </div>

            <ol className="grid lg:grid-cols-3 gap-6">
              {t.pillars.map((pillar, i) => (
                <li data-reveal key={pillar.verb} className="flex flex-col p-6 md:p-8 rounded-2xl bg-slate-800/60 border border-slate-700" style={{ transitionDelay: `${i * 0.1}s` }}>
                  <div className="flex items-center gap-3 mb-5">
                    <span className="w-12 h-12 rounded-xl bg-primary-600/30 text-primary-200 flex items-center justify-center flex-shrink-0">
                      {pillarIcons[i]}
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-primary-300">{i + 1}. {pillar.verb}</p>
                      <h3 className="text-lg font-semibold text-white">{pillar.title}</h3>
                    </div>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed mb-5">{pillar.description}</p>
                  <ul className="mt-auto space-y-2">
                    {pillar.examples.map(example => (
                      <li key={example} className="flex gap-2 text-sm text-slate-200">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-400" aria-hidden="true" />
                        {example}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* The topics residents ask about, an index before the three deep scenarios below */}
        <section className="py-16 md:py-20 px-6 bg-slate-50 dark:bg-slate-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <p data-reveal className="text-sm font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400 mb-3">
                {t.topicsEyebrow}
              </p>
              <h2 data-reveal className="text-2xl md:text-3xl font-serif font-bold text-slate-900 dark:text-white mb-4 text-balance">
                {t.topicsTitle}
              </h2>
              <p data-reveal className="text-lg text-slate-600 dark:text-slate-400 text-pretty" style={{ transitionDelay: '0.1s' }}>
                {t.topicsSubtitle}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {t.askTopics.map((topic, i) => {
                const Icon = topicIcons[i];
                return (
                  <div data-reveal key={topic.title} className="flex gap-4 p-5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700" style={{ transitionDelay: `${i * 0.06}s` }}>
                    <span className="w-10 h-10 rounded-lg bg-primary-50 dark:bg-primary-900/50 flex items-center justify-center text-primary-600 dark:text-primary-400 flex-shrink-0">
                      <Icon className="w-5 h-5" />
                    </span>
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-white">{topic.title}</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{topic.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* The everyday jobs: three scenarios in depth, then the rest of city life in short */}
        <section id="features" className="py-16 md:py-20 px-6 bg-white dark:bg-slate-950 scroll-mt-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <p data-reveal className="text-sm font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400 mb-3">
                {t.featuresEyebrow}
              </p>
              <h2 data-reveal className="text-2xl md:text-3xl font-serif font-bold text-slate-900 dark:text-white mb-4 text-balance">
                {t.featuresTitle}
              </h2>
              <p data-reveal className="text-lg text-slate-600 dark:text-slate-400 text-pretty" style={{ transitionDelay: '0.1s' }}>
                {t.featuresSubtitle}
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {t.scenarios.map((scenario, i) => {
                const { key, Icon, tone } = scenarioStyles[i];
                return (
                  <article data-reveal key={key} className="flex flex-col rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 md:p-8" style={{ transitionDelay: `${i * 0.1}s` }}>
                    <span className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${tone}`}>
                      <Icon className="w-6 h-6" />
                    </span>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">{scenario.title}</h3>
                    <p className="text-primary-700 dark:text-primary-300 text-sm italic mb-5">{scenario.ask}</p>
                    <ul className="space-y-3">
                      {scenario.does.map(item => (
                        <li key={item} className="flex gap-2 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600 dark:text-green-400" aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </article>
                );
              })}
            </div>

            <h3 data-reveal className="mt-14 mb-6 text-center text-lg font-semibold text-slate-900 dark:text-white">
              {t.moreLifeTitle}
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {t.moreLife.map((item, i) => {
                const Icon = moreLifeIcons[i];
                return (
                  <div data-reveal key={item.title} className="flex gap-4 p-5 rounded-xl border border-slate-200 dark:border-slate-800" style={{ transitionDelay: `${i * 0.06}s` }}>
                    <span className="w-10 h-10 rounded-lg bg-primary-50 dark:bg-primary-900/50 flex items-center justify-center text-primary-600 dark:text-primary-400 flex-shrink-0">
                      <Icon className="w-5 h-5" />
                    </span>
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-white">{item.title}</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <p className="mt-6 text-center text-sm text-slate-500 dark:text-slate-400">
              {t.appOnlyStart}
              <a href={LIVE_URL} target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">{t.appOnlyLink}</a>
              {t.appOnlyEnd}
            </p>
          </div>
        </section>

        {/* Trust Bar */}
        <section className="py-6 bg-primary-800 dark:bg-primary-950 border-b border-primary-700">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-wrap justify-center gap-8 text-primary-200 text-sm">
              {t.trustBar.map(item => (
                <div key={item} className="flex items-center gap-2">
                  <ShieldCheck size={18} className="text-green-400" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* In the App: a bento grid, each screenshot in the tile for its feature */}
        <section id="app" className="py-16 md:py-20 px-6 bg-gradient-to-b from-white to-primary-50 dark:from-slate-950 dark:to-slate-900 scroll-mt-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <p data-reveal className="text-sm font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400 mb-3">
                {t.appEyebrow}
              </p>
              <h2 data-reveal className="text-2xl md:text-3xl font-serif font-bold text-slate-900 dark:text-white mb-4 text-balance">
                {t.appTitle}
              </h2>
              <p data-reveal className="text-lg text-slate-600 dark:text-slate-400 text-pretty" style={{ transitionDelay: '0.1s' }}>
                {t.appSubtitle}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {/* Answers: the tall tile */}
              <SpotlightTile
                feature={spotlights.answer}
                tone="bg-primary-100/70 dark:bg-primary-900/40 border-primary-200 dark:border-primary-800"
                chip="bg-white text-primary-700 dark:bg-primary-800 dark:text-primary-200"
                className="sm:col-span-2 lg:row-span-2"
                peek="min-h-[22rem] lg:min-h-0 flex-1"
                phone="w-56 sm:w-64"
              />
              {/* Report: wide tile, phone beside the text on larger screens */}
              <SpotlightTile
                feature={spotlights.report}
                tone="bg-sky-50 dark:bg-sky-950/40 border-sky-100 dark:border-sky-900"
                chip="bg-white text-sky-700 dark:bg-sky-900 dark:text-sky-200"
                className="sm:col-span-2 sm:flex-row"
                body="sm:w-1/2 sm:pr-0"
                peek="h-64 sm:h-auto sm:w-1/2"
                phone="w-44 sm:top-8"
              />
              <SpotlightTile
                feature={spotlights.events}
                tone="bg-rose-50 dark:bg-rose-950/40 border-rose-100 dark:border-rose-900"
                chip="bg-white text-rose-700 dark:bg-rose-900 dark:text-rose-200"
                peek="h-52"
                phone="w-44"
              />
              <SpotlightTile
                feature={spotlights.inbox}
                tone="bg-emerald-50 dark:bg-emerald-950/40 border-emerald-100 dark:border-emerald-900"
                chip="bg-white text-emerald-700 dark:bg-emerald-900 dark:text-emerald-200"
                peek="h-52"
                phone="w-44"
              />

              {t.appExtras.map((extra, i) => {
                const Icon = appExtraIcons[i];
                return (
                  <div data-reveal key={extra.title} className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800" style={{ transitionDelay: `${i * 0.08}s` }}>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="w-9 h-9 rounded-lg bg-primary-50 dark:bg-primary-900/50 flex items-center justify-center text-primary-600 dark:text-primary-400 flex-shrink-0">
                        <Icon className="w-5 h-5" />
                      </span>
                      <h3 className="font-semibold text-slate-900 dark:text-white">{extra.title}</h3>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{extra.description}</p>
                  </div>
                );
              })}
            </div>

            {/* How Hey Markham differs from the City's Access Markham app */}
            <div data-reveal className="mt-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 md:p-8">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">{t.accessTitle}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 max-w-3xl">
                {t.accessIntro}
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="rounded-xl bg-slate-50 dark:bg-slate-800/60 p-5">
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-3">{t.accessHeading}</h4>
                  <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                    {t.accessFeatures.map((item) => (
                      <li key={item} className="flex gap-2">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-slate-400" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
                    {t.accessNote}
                  </p>
                </div>
                <div className="rounded-xl bg-primary-50 dark:bg-primary-900/30 border border-primary-100 dark:border-primary-800 p-5">
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-3">{t.heyHeading}</h4>
                  <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                    {t.heyDifferences.map((item) => (
                      <li key={item} className="flex gap-2">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary-600 dark:text-primary-400" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
                    {t.heyNote}
                  </p>
                </div>
              </div>
              <p className="mt-5 text-xs text-slate-500 dark:text-slate-400">
                {t.accessDisclaimerStart}
                <a href={ACCESS_MARKHAM_URL} target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">{t.accessDisclaimerLink}</a>
                {t.accessDisclaimerEnd}
              </p>
            </div>

            {/* Download band, dark because the store buttons are styled for the hero's dark background */}
            <div data-reveal className="mt-8 rounded-2xl bg-slate-900 border border-slate-800 px-6 py-8 md:px-10 flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
              <div>
                <h3 className="text-xl font-semibold text-white mb-1">{t.downloadTitle}</h3>
                <p className="text-sm text-slate-400">
                  {t.downloadText}
                </p>
                {/* The release notes are English-only, so both languages link to the same page */}
                <Link href="/app/releases" className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-primary-300 hover:underline">
                  {t.whatsNew.replace('{version}', latestRelease.version)}
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
              <div className="flex flex-wrap justify-center gap-3 flex-shrink-0">
                <StoreButton href={GOOGLE_PLAY_URL} store="Google Play" lead={t.googlePlayLead} soon={t.comingSoon} />
                <StoreButton href={APP_STORE_URL} store={t.appStore} lead={t.appStoreLead} soon={t.comingSoon} />
              </div>
            </div>
          </div>
        </section>

        {/* How it answers: the steps beside a real worked example */}
        <section id="trust" className="relative py-16 md:py-20 px-6 bg-white dark:bg-slate-950 scroll-mt-16">
          {/* Old links to /#solution land here too */}
          <span id="solution" className="absolute top-0 scroll-mt-16" aria-hidden="true" />
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <p data-reveal className="text-sm font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400 mb-3">
                {t.trustEyebrow}
              </p>
              <h2 data-reveal className="text-2xl md:text-3xl font-serif font-bold text-slate-900 dark:text-white mb-4 text-balance">
                {t.trustTitle}
              </h2>
              <p data-reveal className="text-lg text-slate-600 dark:text-slate-400 text-pretty" style={{ transitionDelay: '0.1s' }}>
                {t.trustSubtitle}
              </p>
            </div>

            <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* The steps, joined by a line */}
              <ol className="lg:col-span-6 relative space-y-8">
                {t.answerSteps.map((step, i) => {
                  const Icon = answerStepIcons[i];
                  return (
                    <li data-reveal key={step.title} className="relative flex gap-5" style={{ transitionDelay: `${i * 0.1}s` }}>
                      {i < t.answerSteps.length - 1 && (
                        <span className="absolute left-6 top-12 -bottom-8 w-0.5 -translate-x-1/2 bg-primary-200 dark:bg-primary-800" aria-hidden="true" />
                      )}
                      <span className="relative z-10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ring-8 ring-white dark:ring-slate-950 bg-primary-600 text-white">
                        <Icon className="w-6 h-6" />
                      </span>
                      <div className="pt-1">
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">{step.title}</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{step.description}</p>
                      </div>
                    </li>
                  );
                })}
              </ol>

              {/* Ask, answer with its source, then the next step, on a real question */}
              <div data-reveal className="lg:col-span-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl p-5 sm:p-8" style={{ transitionDelay: '0.15s' }}>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-5">{t.exampleLabel}</p>

                <div className="flex justify-end items-start gap-3 mb-5">
                  <p className="max-w-[85%] rounded-2xl rounded-tr-sm bg-primary-700 text-white px-4 py-3 text-sm sm:text-base">
                    {t.workedExample.question}
                  </p>
                  <StepBadge n={1} label={t.step} />
                </div>

                <div className="flex items-start gap-3 mb-5">
                  <StepBadge n={2} label={t.step} />
                  <div className="flex-1 rounded-2xl rounded-tl-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-4 py-3">
                    <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">Hey Markham</p>
                    <p className="text-sm sm:text-base text-slate-800 dark:text-slate-200 leading-relaxed">{t.workedExample.answer}</p>
                    <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
                      {answerSource(PET_LICENCE_URL)}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <StepBadge n={3} label={t.step} done />
                  <a
                    href={PET_LICENCE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-5 py-2.5 transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-green-300"
                  >
                    {t.workedExample.action}
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  </a>
                </div>

                <ul className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700 grid sm:grid-cols-2 gap-3 text-sm text-slate-600 dark:text-slate-400">
                  {t.trustPoints.map((point, i) => {
                    const Icon = trustPointIcons[i];
                    return (
                      <li key={point} className="flex gap-2">
                        <Icon className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary-600 dark:text-primary-400" aria-hidden="true" />
                        {point}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why not just search markham.ca? One real question, then the three ways residents try to answer it */}
        <section className="py-16 px-6 bg-slate-50 dark:bg-slate-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <p data-reveal className="text-sm font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400 mb-3">
                {t.hardEyebrow}
              </p>
              <h2 data-reveal className="text-2xl md:text-3xl font-serif font-bold text-slate-900 dark:text-white mb-4 text-balance">
                {t.hardTitle}
              </h2>
              <p data-reveal className="text-lg text-slate-600 dark:text-slate-400 text-pretty" style={{ transitionDelay: '0.1s' }}>
                {t.hardSubtitle}
              </p>
            </div>

            {/* The one question every path below starts from */}
            <div data-reveal className="max-w-3xl mx-auto mb-8 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-6 py-6 md:px-8 text-center shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                {t.realQuestionLabel}
              </p>
              <p className="text-xl md:text-2xl font-medium text-slate-900 dark:text-white text-balance">
                {t.realQuestion}
              </p>
            </div>

            {/* Three ways to answer it, in the order most residents try them */}
            <ol className="grid lg:grid-cols-3 gap-6">
              {/* Path 1: the menus on markham.ca */}
              <li data-reveal className="flex flex-col rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-sm font-semibold flex items-center justify-center flex-shrink-0">
                    1
                  </span>
                  <h3 className="font-semibold text-slate-900 dark:text-white">{t.menusTitle}</h3>
                </div>

                <ul className="space-y-1.5 text-sm mb-4" lang="en-CA">
                  {CLICK_PATH.map((step, i) => (
                    <li key={step} className="flex gap-2">
                      <span className="w-4 flex-shrink-0 text-slate-400 dark:text-slate-500" aria-hidden="true">{i > 0 ? '→' : ''}</span>
                      <span className={i === CLICK_PATH.length - 1 ? 'font-medium text-slate-900 dark:text-white' : 'text-slate-600 dark:text-slate-300'}>
                        {step}
                      </span>
                    </li>
                  ))}
                </ul>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {t.menusNote}
                </p>

                <p className="mt-auto pt-4 text-xs font-semibold text-red-600 dark:text-red-400">
                  {t.menusResult}
                </p>
              </li>

              {/* Path 2: the site's search box */}
              <li data-reveal className="flex flex-col rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6" style={{ transitionDelay: '0.1s' }}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-sm font-semibold flex items-center justify-center flex-shrink-0">
                    2
                  </span>
                  <h3 className="font-semibold text-slate-900 dark:text-white">{t.searchTitle}</h3>
                </div>

                <div className="space-y-3 mb-4 text-sm">
                  <div className="rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-700 px-3 py-2.5">
                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">{t.searchYouSearch}</p>
                    <p className="text-slate-900 dark:text-white" lang="en-CA">{SEARCHED_FOR}</p>
                  </div>
                  <div className="rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-900/40 px-3 py-2.5">
                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">{t.searchReturns}</p>
                    <p className="text-red-700 dark:text-red-300 font-medium">{t.searchNoResults}</p>
                  </div>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {t.searchNote}
                </p>

                <p className="mt-auto pt-4 text-xs font-semibold text-red-600 dark:text-red-400">
                  {t.searchResult}
                </p>
              </li>

              {/* Path 3: the answer, with the page it came from */}
              <li data-reveal className="flex flex-col rounded-2xl border-2 border-primary-600 dark:border-primary-500 bg-white dark:bg-slate-800 p-6 shadow-xl" style={{ transitionDelay: '0.2s' }}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 rounded-full bg-primary-600 text-white text-sm font-semibold flex items-center justify-center flex-shrink-0">
                    3
                  </span>
                  <h3 className="font-semibold text-slate-900 dark:text-white">{t.askTitle}</h3>
                </div>

                <div className="rounded-lg bg-primary-50 dark:bg-primary-900/30 border border-primary-100 dark:border-primary-800 px-3 py-2.5 text-sm text-slate-800 dark:text-slate-100 leading-relaxed">
                  {t.fenceAnswer}
                </div>

                <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
                  {answerSource(FENCE_URL)}
                </p>

                <p className="mt-auto pt-4 text-xs font-semibold text-green-700 dark:text-green-400">
                  {t.askResult}
                </p>
              </li>
            </ol>

            <p className="mt-6 text-center text-xs text-slate-500 dark:text-slate-400">
              {t.hardChecked}
            </p>

            {/* The payoff: the section's own question, answered */}
            <div data-reveal className="mt-8 rounded-2xl bg-slate-900 dark:bg-slate-800 border border-slate-800 dark:border-slate-700 px-6 py-8 md:px-10 text-center">
              <h3 className="text-xl md:text-2xl font-serif font-bold text-white mb-2 text-balance">
                {t.payoffTitle}
              </h3>
              <p className="text-slate-300 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
                {t.payoffText}
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <a
                  href={LIVE_URL}
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium text-sm transition-all shadow-sm hover:-translate-y-0.5 focus:outline-none focus-visible:ring-4 focus-visible:ring-primary-300"
                >
                  {t.tryLive}
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </a>
                <Link
                  href={`${home}#trust`}
                  className="inline-flex items-center gap-2 px-6 py-3 border border-slate-700 hover:border-slate-500 text-slate-200 rounded-lg font-medium text-sm transition-colors"
                >
                  {t.seeHowItChecks}
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* How the answer collection grows: every new question becomes verified knowledge */}
        <section className="py-16 md:py-20 px-6 bg-white dark:bg-slate-950">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <p data-reveal className="text-sm font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400 mb-3">
                {t.improveEyebrow}
              </p>
              <h2 data-reveal className="text-2xl md:text-3xl font-serif font-bold text-slate-900 dark:text-white mb-4 text-balance">
                {t.improveTitle}
              </h2>
              <p data-reveal className="text-lg text-slate-600 dark:text-slate-400 text-pretty" style={{ transitionDelay: '0.1s' }}>
                {t.improveSubtitle}
              </p>
            </div>

            <ol className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {t.improvementSteps.map((step, i) => (
                <li data-reveal key={step.title} className="flex gap-4 p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800" style={{ transitionDelay: `${i * 0.06}s` }}>
                  <span className="w-8 h-8 rounded-full bg-primary-600 text-white text-sm font-semibold flex items-center justify-center flex-shrink-0">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-1">{step.title}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>

            <p data-reveal className="mt-8 text-center text-lg text-slate-600 dark:text-slate-300 text-balance">
              {t.improveClosing}
            </p>
          </div>
        </section>

        {/* Roadmap: a journey from Now to Later; a rail across the top on desktop, down the left on phones */}
        <section className="py-16 md:py-20 px-6 bg-slate-100 dark:bg-slate-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
              <p data-reveal className="text-sm font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400 mb-3">
                {t.roadmapEyebrow}
              </p>
              <h2 data-reveal className="text-2xl md:text-3xl font-serif font-bold text-slate-900 dark:text-white mb-4 text-balance">
                {t.roadmapTitle}
              </h2>
              <p data-reveal className="text-lg text-slate-600 dark:text-slate-400 text-pretty" style={{ transitionDelay: '0.1s' }}>
                {t.roadmapSubtitle}
              </p>
            </div>

            <div className="relative">
              {/* Desktop rail through the stage nodes: live, then in progress, then planned */}
              <div className="hidden lg:block absolute top-6 left-[16.66%] right-[16.66%] h-1 rounded-full bg-gradient-to-r from-green-500 via-amber-400 to-slate-300 dark:to-slate-600" aria-hidden="true" />

              <ol className="relative grid lg:grid-cols-3 lg:items-start gap-8 lg:gap-6">
                {t.roadmapStages.map((stage, i) => {
                  const { key, Icon, itemIcons } = roadmapStyles[i];
                  const tone = roadmapTones[key];
                  const last = i === t.roadmapStages.length - 1;
                  return (
                    <li data-reveal key={key} className="relative pl-16 lg:pl-0" style={{ transitionDelay: `${i * 0.12}s` }}>
                      {/* Phone rail down to the next stage */}
                      {!last && <div className="lg:hidden absolute left-6 top-12 -bottom-8 w-1 -translate-x-1/2 rounded-full bg-slate-300 dark:bg-slate-700" aria-hidden="true" />}

                      <div className="absolute left-0 top-0 lg:static lg:flex lg:justify-center lg:mb-6">
                        <span className={`relative z-10 w-12 h-12 rounded-full ring-8 flex items-center justify-center ${tone.node}`}>
                          <Icon className="w-5 h-5" />
                        </span>
                      </div>

                      <div className={`rounded-2xl bg-white dark:bg-slate-800 border p-6 ${tone.card}`}>
                        <div className="flex items-center justify-between gap-3 mb-1">
                          <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{stage.theme}</h3>
                          <span className={`text-xs font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full flex-shrink-0 ${tone.badge}`}>
                            {stage.label}
                          </span>
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-5">{stage.description}</p>
                        <ul className="space-y-3">
                          {stage.items.map((item, j) => {
                            const ItemIcon = itemIcons[j];
                            return (
                              <li key={item.title} className="flex gap-3">
                                <span className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${tone.icon}`}>
                                  <ItemIcon className="w-4 h-4" />
                                </span>
                                <div>
                                  <p className="text-sm font-medium text-slate-900 dark:text-white">{item.title}</p>
                                  <p className="text-xs text-slate-500 dark:text-slate-400">{item.description}</p>
                                </div>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </div>

            <p className="mt-10 text-center text-sm text-slate-500 dark:text-slate-400">
              {t.roadmapNote}
            </p>
          </div>
        </section>

        {/* Closing pitch for residents, before the municipal contact form */}
        <section className="py-16 px-6 bg-slate-900 dark:bg-slate-950 border-t border-slate-800">
          <div className="max-w-3xl mx-auto text-center">
            <p data-reveal className="text-sm font-semibold uppercase tracking-wider text-primary-300 mb-3">
              {t.closingEyebrow}
            </p>
            <h2 data-reveal className="text-2xl md:text-4xl font-serif font-bold text-white mb-4 text-balance">
              {t.closingTitle}
            </h2>
            <p data-reveal className="text-lg text-slate-300 text-pretty" style={{ transitionDelay: '0.1s' }}>
              {t.closingText}
            </p>
            <p data-reveal className="mt-4 text-lg font-medium text-primary-300" style={{ transitionDelay: '0.2s' }}>
              {t.closingTagline}
            </p>
            <div data-reveal className="mt-7 flex flex-wrap justify-center gap-3" style={{ transitionDelay: '0.3s' }}>
              <a
                href={LIVE_URL}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium text-sm transition-all shadow-sm hover:-translate-y-0.5 focus:outline-none focus-visible:ring-4 focus-visible:ring-primary-300"
              >
                {t.closingAsk}
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>
              <Link
                href={`${home}#contact`}
                className="inline-flex items-center gap-2 px-6 py-3 border border-slate-700 hover:border-slate-500 text-slate-200 rounded-lg font-medium text-sm transition-colors"
              >
                {t.closingContact}
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-20 px-6 bg-primary-700 dark:bg-primary-900">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary-200 mb-3">
                {t.contactEyebrow}
              </p>
              <h2 data-reveal className="text-2xl md:text-3xl font-serif font-bold text-white mb-4 text-balance">
                {t.contactTitle}
              </h2>
              <p data-reveal className="text-primary-100" style={{ transitionDelay: '0.1s' }}>
                {t.contactSubtitle}
              </p>
              <p className="mt-3 text-sm text-primary-200">
                {t.contactResidents}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div data-reveal className="space-y-8">
                <div className="text-left">
                  <h3 className="text-xl font-bold text-white mb-4">{t.whyTitle}</h3>
                  <div className="space-y-4">
                    {t.why.map((reason, i) => {
                      const Icon = whyIcons[i];
                      return (
                        <div key={reason.title} className="flex gap-4">
                          <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Icon className="w-5 h-5 text-primary-200" />
                          </div>
                          <div>
                            <h4 className="text-white font-medium">{reason.title}</h4>
                            <p className="text-primary-200 text-sm">{reason.description}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="pt-6">
                  <h3 className="text-xl font-bold text-white mb-4">{t.getInTouchTitle}</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-primary-200">
                      <Mail className="w-5 h-5" />
                      <a href="mailto:contact@aydenait.com" className="hover:text-white transition-colors">contact@aydenait.com</a>
                    </div>
                    <div className="flex items-center gap-3 text-primary-200">
                      <Phone className="w-5 h-5" />
                      <a href="tel:+12898599523" className="hover:text-white transition-colors">289-859-9523</a>
                    </div>
                  </div>
                </div>
              </div>

              <ContactForm locale={locale} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

interface SpotlightFeature {
  icon: React.ReactNode
  title: string
  description: string
  src: string
  alt: string
}

// An app feature with its screenshot rising from the bottom edge of the tile
function SpotlightTile({ feature, tone, chip, className = '', body = '', peek, phone }: {
  feature: SpotlightFeature
  tone: string
  chip: string
  className?: string
  body?: string
  peek: string
  phone: string
}) {
  return (
    <div data-reveal className={`flex flex-col overflow-hidden rounded-2xl border ${tone} ${className}`}>
      <div className={`p-6 md:p-8 ${body}`}>
        <span className={`inline-flex w-10 h-10 rounded-xl items-center justify-center shadow-sm mb-4 ${chip}`}>
          {feature.icon}
        </span>
        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">{feature.title}</h3>
        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{feature.description}</p>
      </div>
      <div className={`relative ${peek}`}>
        <div className={`absolute left-1/2 top-0 -translate-x-1/2 ${phone} bg-slate-900 rounded-t-[2rem] p-2 pb-0 border-4 border-b-0 border-slate-700 shadow-2xl`}>
          <Image
            src={feature.src}
            alt={feature.alt}
            width={1080}
            height={2424}
            sizes="256px"
            className="w-full h-auto rounded-t-[1.5rem]"
          />
        </div>
      </div>
    </div>
  )
}

// Ties a part of the worked example to its numbered step; label is "Step {n}" in the page's language
function StepBadge({ n, label, done = false }: { n: number; label: string; done?: boolean }) {
  return (
    <span
      className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold ${
        done ? 'bg-green-500 text-white' : 'bg-primary-600 text-white'
      }`}
      aria-label={label.replace('{n}', String(n))}
    >
      {n}
    </span>
  )
}
