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
import { HeroTryLive, StoreButton } from '../components/HeroTryLive';
import { ContactForm } from '../components/ContactForm';
import { RevealOnScroll } from '../components/RevealOnScroll';
import { APP_STORE_URL, GOOGLE_PLAY_URL, LIVE_URL } from '../lib/links';
import { latestRelease } from '../lib/releases';
import { AnswerSource } from '../components/AnswerSource';
import type { Locale } from '../lib/i18n';

// Translation copy for home page in both languages
const copy: Record<Locale, {
  heroTitle: string;
  heroSubtitle: string;
  getAppStore: string;
  getGooglePlay: string;
  pillar1Verb: string;
  pillar1TitleEn: string;
  pillar1TitleZh: string;
  pillar1Description: string;
  pillar2Verb: string;
  pillar2TitleEn: string;
  pillar2TitleZh: string;
  pillar2Description: string;
  pillar3Verb: string;
  pillar3TitleEn: string;
  pillar3TitleZh: string;
  pillar3Description: string;
  askTitle: string;
  askSubtitle: string;
  recycleTitle: string;
  recycleDescription: string;
  reportTitle: string;
  reportDescription: string;
  permitsTitle: string;
  permitsDescription: string;
  propertyTaxTitle: string;
  propertyTaxDescription: string;
  parksTitle: string;
  parksDescription: string;
  eventsTitle: string;
  eventsDescription: string;
  wardTitle: string;
  wardDescription: string;
  schoolBusesTitle: string;
  schoolBusesDescription: string;
  builtTitle: string;
  builtSubtitle: string;
  binsRepairsPermitsSubtitle: string;
  garbageTitle: string;
  garbageAsk: string;
  garbageDoes1: string;
  garbageDoes2: string;
  garbageDoes3: string;
  garbageDoes4: string;
  reportTitleScenario: string;
  reportAsk: string;
  reportDoes1: string;
  reportDoes2: string;
  reportDoes3: string;
  reportDoes4: string;
  permitsTitleScenario: string;
  permitsAsk: string;
  permitsDoes1: string;
  permitsDoes2: string;
  permitsDoes3: string;
  permitsDoes4: string;
  restOfLifeTitle: string;
  propertyTaxRest: string;
  winterRest: string;
  parksPlacesRest: string;
  eventsRest: string;
  wardRest: string;
  schoolBusesRest: string;
  trustTitle: string;
  understandTitle: string;
  understandDescription: string;
  knowsTitle: string;
  knowsDescription: string;
  checksTitle: string;
  checksDescription: string;
  saysTitle: string;
  saysDescription: string;
  collectTitle: string;
  organizeTitle: string;
  researchTitle: string;
  prepareTitle: string;
  reviewTitle: string;
  addTitle: string;
  nowLabel: string;
  nextLabel: string;
  laterLabel: string;
  fenceQuestion: string;
  fenceAnswer: string;
  appTitle: string;
  appSubtitle: string;
  answerFeatureTitle: string;
  answerFeatureDescription: string;
  reportFeatureTitle: string;
  reportFeatureDescription: string;
  eventsFeatureTitle: string;
  eventsFeatureDescription: string;
  inboxFeatureTitle: string;
  inboxFeatureDescription: string;
  getAppTitle: string;
  appDescription: string;
  accessMarkhamTitle: string;
  accessMarkhamSubtitle: string;
  heyMarkhamTitle: string;
  heyMarkhamSubtitle: string;
  heyMarkhamDifference1: string;
  heyMarkhamDifference2: string;
  heyMarkhamDifference3: string;
  heyMarkhamDifference4: string;
  heyMarkhamDifference5: string;
  hardPartTitle: string;
  searchTitle: string;
  menuPath1: string;
  menuPath2: string;
  menuPath3: string;
  menuPath4: string;
  menuPath5: string;
  answerFromCity: string;
  answerFromHeyMarkham: string;
  justSearchTitle: string;
} = {
  en: {
    heroTitle: 'You say what you&rsquo;re trying to do. Hey Markham does the rest.',
    heroSubtitle: 'Finding municipal information shouldn&rsquo;t be difficult. City websites contain thousands of pages, documents, policies and service details, and finding the exact information you need can take time. Hey Markham makes it easier: simply ask a question in your own words, with no need to know which department to contact or which webpage to visit first.',
    getAppStore: 'Get it on the App Store',
    getGooglePlay: 'Get it on Google Play',
    pillar2Verb: 'Points you the right way',
    pillar2TitleEn: 'Who actually handles it',
    pillar2TitleZh: 'Who actually handles it',
    pillar2Description: 'Not everything in Markham is run by the City. Hey Markham tells you who handles it',
    pillar3Verb: 'Helps you get it done',
    pillar3TitleEn: 'From question to done',
    pillar3TitleZh: 'From question to done',
    pillar3Description: 'Not just a link to read. The next step, ready to take.',
    askTitle: 'What Can You Ask?',
    askSubtitle: 'The everyday things residents need from the City. Ask in your own words, by voice or text',
  },
  },
  const pillars = [
    {
      icon: <Search className="w-6 h-6" />,
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
      icon: <Signpost className="w-6 h-6" />,
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
      icon: <ClipboardCheck className="w-6 h-6" />,
      verb: 'Helps you get it done',
      title: 'From question to done',
      description: 'Not just a link to read. The next step, ready to take.',
      examples: [
        'Report a pothole with a photo',
        'Reminders for pickup and property tax',
        'Directions, or straight to the page to apply',
      ],
    },
  ];

  // The everyday jobs residents come back for. Claims follow lib/releases.ts; the app does all of
  // these today. Keep each "does" item to what a release note says
  const scenarios = [
    {
      key: 'waste',
      icon: <Recycle className="w-6 h-6" />,
      title: 'Garbage & recycling',
      ask: '“Does this go in the blue box? And when is my next pickup?”',
      does: [
        'Finds your exact pickup day from your address, with a calendar of the coming months',
        'Reminds you the night before or the morning of, and warns you when a holiday moves your pickup',
        'Names an item from a photo and shows where it goes, from the City’s sorting guide',
        'Missed blue box pickup? Tells you it’s Miller Waste now, and how to reach them',
      ],
      tone: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300',
    },
    {
      key: 'report',
      icon: <Wrench className="w-6 h-6" />,
      title: 'Report & repair',
      ask: '“There’s a pothole on my street.”',
      does: [
        'Take a photo: Hey Markham suggests the type of problem and drafts the details',
        'Use where I am adds the exact spot and street address; say the details instead of typing',
        'You check it and send it to the City from your own email; photo location data is removed first',
        'My reports keeps what you sent, so you can follow up, track it or call in one tap',
      ],
      tone: 'bg-sky-50 text-sky-700 dark:bg-sky-900/40 dark:text-sky-300',
    },
    {
      key: 'permits',
      icon: <FileText className="w-6 h-6" />,
      title: 'Permits & licences',
      ask: '“Do I need a permit to build a deck?”',
      does: [
        'Building permits: decks, basement second suites and the documents a permit needs',
        'Business licences and renewals, home businesses, and lottery and raffle licences',
        'Pet licences and overnight street parking exemptions',
        'Then straight to the City page to apply',
      ],
      tone: 'bg-amber-50 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300',
    },
  ];

  // The rest of city life, in short; same rule as scenarios
  const moreLife = [
    { icon: <Receipt className="w-5 h-5" />, title: 'Property tax', description: 'The due dates the City has published, with a reminder a week or a day before.' },
    { icon: <Snowflake className="w-5 h-5" />, title: 'Winter', description: 'Winter parking rules, the plow tracker and windrow clearing for seniors, with a heads-up when snow is coming.' },
    { icon: <Trees className="w-5 h-5" />, title: 'Parks & places', description: 'The nearest park, splash pads and trails, and directions to libraries and community centres. Or ask by neighbourhood: “parks in Cornell”.' },
    { icon: <CalendarDays className="w-5 h-5" />, title: 'Events', description: 'What’s on at the City this week, with dates, times and places.' },
    { icon: <Landmark className="w-5 h-5" />, title: 'Your ward', description: 'Your ward, your councillor, the mayor and your regional councillors.' },
    { icon: <Bus className="w-5 h-5" />, title: 'School buses', description: 'Bus delays and cancellations, and your bus stop, with the team that runs them.' },
  ];

  // The topics residents ask about, as a short index; the scenarios below go deep on three of them
  const askTopics = [
    { icon: <Recycle className="w-5 h-5" />, title: 'Garbage & recycling', description: 'Collection schedules, missed pickups, recycling and waste disposal.' },
    { icon: <Car className="w-5 h-5" />, title: 'Parking & traffic', description: 'Parking regulations, permits, tickets and road restrictions.' },
    { icon: <FileText className="w-5 h-5" />, title: 'Building permits', description: 'Renovations, decks, basement finishing and zoning requirements.' },
    { icon: <Receipt className="w-5 h-5" />, title: 'Property & taxes', description: 'Property taxes, property-related services and municipal responsibilities.' },
    { icon: <Trees className="w-5 h-5" />, title: 'Parks & recreation', description: 'Facilities, programs, registrations and community activities.' },
    { icon: <Briefcase className="w-5 h-5" />, title: 'Business services', description: 'Business licensing, zoning and operating requirements.' },
  ];

  // App section: each spotlight pairs a screenshot with the feature it shows; keep in step with lib/releases.ts
  const appSpotlights = {
    answer: {
      icon: <CheckCircle2 className="w-5 h-5" />,
      title: "Answers you can check",
      description: "Ask by voice or text and get a short answer, with every official markham.ca page it came from. Tap Listen to hear it read aloud.",
      src: '/screenshots/app-answer.png',
      alt: 'Hey Markham answering "When is yard waste picked up?", with five official markham.ca sources and a Listen button',
    },
    report: {
      icon: <Camera className="w-5 h-5" />,
      title: "Report a problem with a photo",
      description: "Snap a pothole, graffiti or a missed pickup. Hey Markham suggests the type of problem and drafts the details; you check them and send the report to the City from your own email.",
      src: '/screenshots/app-report.png',
      alt: 'Hey Markham Report a problem screen with Take a photo, a problem type, details and Use where I am',
    },
    events: {
      icon: <CalendarDays className="w-5 h-5" />,
      title: "What’s on around the city",
      description: "Upcoming City events from markham.ca, with dates, times and places.",
      src: '/screenshots/app-events.png',
      alt: 'Hey Markham Events screen listing upcoming City events with dates, times and places',
    },
    inbox: {
      icon: <Bell className="w-5 h-5" />,
      title: "Service updates in your inbox",
      description: "Closures, road work and City news, and you choose which notifications you get.",
      src: '/screenshots/app-inbox.png',
      alt: 'Hey Markham Inbox with service updates such as a facility closure and road work, and City news',
    },
  };

  const appExtras = [
    {
      icon: <Sun className="w-5 h-5" />,
      title: "Today, on your home screen",
      description: "The few things worth knowing today: a weather warning, your next pickup, tax due, road work near home.",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "My Markham",
      description: "Add your home address once, and “nearest park” or “who is my councillor” is answered for your home. It’s saved on your phone, not in your account.",
    },
    {
      icon: <Mic className="w-5 h-5" />,
      title: "Ask out loud, hear it back",
      description: "Speak your question and hear the answer read aloud in a natural voice you choose.",
    },
    {
      icon: <Languages className="w-5 h-5" />,
      title: "Four languages",
      description: "English, French, Mandarin or Cantonese, for menus, answers and reading aloud. City messages are translated too.",
    },
    {
      icon: <Navigation className="w-5 h-5" />,
      title: "Directions to nearby places",
      description: "Parks, libraries, community centres and recycling depots, in Apple Maps or Google Maps.",
    },
    {
      icon: <Lock className="w-5 h-5" />,
      title: "You choose what it remembers",
      description: "Turn memory of earlier chats on or off, or use a temporary chat that isn’t saved to your chats or remembered.",
    },
    {
      icon: <LayoutGrid className="w-5 h-5" />,
      title: "Widgets & shortcuts",
      description: "Your next pickup on an Android home-screen widget, and app icon shortcuts.",
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Use it as a guest",
      description: "Ask without an account, or sign in with Apple, Google or email to keep your chats and settings.",
    },
  ];

  // Examples in this section were checked on markham.ca on November 15, 2026; recheck before changing them
  // The City's own app, as its markham.ca page describes it (checked November 15, 2026). Only list
  // what that page says, and keep it fair: the two apps do different jobs
  const ACCESS_MARKHAM_URL = 'https://www.markham.ca/about-city-markham/access-markham-mobile-app';
  const accessMarkhamFeatures = [
    "Recycling and garbage collection schedule with personalized notifications",
    "What Goes Where search for disposing of items",
    "Winter maintenance",
    "Bikeways, parks and paths",
    "Report a problem",
  ];
  const heyMarkhamDifferences = [
    "Ask any City question in your own words, by voice or text",
    "Short answers with the markham.ca pages they come from",
    "Tells you who to contact when it isn’t the City",
    "English, French, Mandarin or Cantonese, with answers read aloud",
    "Report a problem with a photo that drafts the details for you",
  ];

  // Roadmap stages, from what works today to what's planned; Now must match what the app and site really do
  const roadmapStages = [
    {
      key: 'now',
      label: 'Now',
      theme: 'Find out, route & report',
      description: 'Answers from official City information, the right contact when it isn’t the City, and the everyday jobs done in the app.',
      icon: <CheckCircle2 className="w-5 h-5" />,
      items: [
        { icon: <Leaf className="w-4 h-4" />, title: 'Garbage & Recycling', description: 'Your pickup day, reminders, what goes where from a photo' },
        { icon: <Camera className="w-4 h-4" />, title: 'Report a Problem', description: 'Potholes, graffiti, missed pickups, with a photo' },
        { icon: <FileText className="w-4 h-4" />, title: 'Permits & Licences', description: 'What you need, what it costs, where to apply' },
        { icon: <MapPin className="w-4 h-4" />, title: 'My Markham', description: 'Your ward, councillor, pickup day and closest places' },
        { icon: <Signpost className="w-4 h-4" />, title: 'Who Handles It', description: 'The right agency when it isn’t the City' },
      ],
    },
    {
      key: 'next',
      label: 'Next',
      theme: 'Step by step, then book & apply',
      description: 'Every City service mapped to the department that runs it, the steps and what you need, then connected to City systems so you can act without leaving the conversation.',
      icon: <Clock className="w-5 h-5" />,
      items: [
        { icon: <ListChecks className="w-4 h-4" />, title: 'Service Guides', description: 'Who runs it, the steps, what to bring' },
        { icon: <BookOpen className="w-4 h-4" />, title: 'Library System', description: 'Check books, renew items' },
        { icon: <Waves className="w-4 h-4" />, title: 'Recreation Booking', description: 'Book pools, courts' },
        { icon: <Car className="w-4 h-4" />, title: 'Permit Applications', description: 'Parking, building permits' },
      ],
    },
    {
      key: 'later',
      label: 'Later',
      theme: 'Pay',
      description: 'Bills and payments in the same place you ask your questions.',
      icon: <CreditCard className="w-5 h-5" />,
      items: [
        { icon: <Home className="w-4 h-4" />, title: 'Property Tax', description: 'View, pay, payment plans' },
        { icon: <Droplets className="w-4 h-4" />, title: 'Water Bills', description: 'View and pay water bills' },
        { icon: <CreditCard className="w-4 h-4" />, title: 'Fines & Fees', description: 'Parking tickets' },
      ],
    },
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

  // "Why not just search markham.ca?" runs one real question through three paths.
  // The menu path and the search results were checked on markham.ca on November 15, 2026; the
  // answer and its source come from lib/faq-data.ts, which cites the City's page for it
  const FENCE_URL = 'https://www.markham.ca/about-city-markham/city-hall/bylaw/fences-swimming-pools';
  const clickPath = ['Home', 'About the City of Markham', 'City Hall', 'By-Laws', 'Fences & Swimming Pools'];
  const fenceAnswer =
    'Front-yard fences can be up to 1.2 m (4 ft) high, and fences along rear and interior side property lines up to 1.8 m (6 ft). On corner lots, the side facing the street is limited to 1.2 m. Pools deeper than 0.6 m need a 1.2 m fence and a pool enclosure permit before filling.';

  // How an answer is made, in residents' words. Each step mirrors the answer layers in the
  // HeyMarkham API (docs/ANSWER_LAYERS.md, app/rag/fact_support.py, app/services/referrals.py);
  // don't promise more than those do
  const answerSteps = [
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Understands what you mean",
      description: "Ask the same question in different words: Hey Markham understands the meaning behind your question rather than exact keyword matches. Your own words, by voice or text, in four languages, with follow-ups like “and on weekends?”",
    },
    {
      icon: <Compass className="w-6 h-6" />,
      title: "Knows where to look",
      description: "Official information first: answers come from City of Markham pages and other official sources, with the pages they used. Common questions get answers people have checked; your ward, pickup day and nearby places come from your address; events, closures and road work come from the City’s own listings.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Checks before it answers",
      description: "New knowledge is researched and reviewed before it’s added: AI assists with research and organization, and human review keeps answer quality up. At answer time, fees, times, phone numbers and links must appear in the pages it read, or they’re left out: a wrong fee is worse than none.",
    },
    {
      icon: <AlertCircle className="w-6 h-6" />,
      title: "Says so when it can’t",
      description: "If the answer isn’t there, Hey Markham says so and tells you who can help: the City’s Contact Centre at 905-477-5530, or the agency that handles it.",
    },
  ];

  // How a new question becomes a verified answer, in the order the team does it
  const improvementSteps = [
    { title: 'Collect new questions', description: 'Every question we can’t answer well is collected, and the gaps in what we know are identified.' },
    { title: 'Organize and group', description: 'Similar questions are grouped together, so one round of research covers them all.' },
    { title: 'Research official sources', description: 'Relevant official municipal sources are found and read for the real requirements.' },
    { title: 'Prepare answers with AI', description: 'AI assists with research and organization, drafting the answer from those sources.' },
    { title: 'Review and verify', description: 'New information is reviewed and verified before it’s approved.' },
    { title: 'Add to the knowledge base', description: 'Approved answers join a growing, structured collection of municipal questions, verified answers and the different ways residents ask them.' },
  ];

  // A real worked example for the three steps; every fact is on the City's pet licence page
  const PET_LICENCE_URL = 'https://www.markham.ca/permits-licences-taxes/animal-services/pet-licence';
  const workedExample = {
    question: "Does my cat need a licence if it’s microchipped?",
    answer: "Yes. Dogs and cats in Markham need a licence, even if they have a microchip. You can register online, and licences expire on December 31 each year.",
    action: "Register your pet online",
  };


  return (
    <div className="min-h-screen w-full flex flex-col bg-white dark:bg-slate-950">
      <RevealOnScroll />
      <div className="flex-grow">
        <HeroTryLive />

        {/* Positioning: not a search box but an assistant, shown as the three jobs it does */}
        <section className="py-16 md:py-20 px-6 bg-slate-900 dark:bg-slate-950 border-t border-slate-800">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <p data-reveal className="text-sm font-semibold uppercase tracking-wider text-primary-300 mb-3">
                Not a search box. An assistant.
              </p>
              <h2 data-reveal className="text-2xl md:text-4xl font-serif font-bold text-white mb-4 text-balance">
                You say what you&rsquo;re trying to do. Hey Markham does the rest.
              </h2>
              <p data-reveal className="text-lg text-slate-300 text-pretty" style={{ transitionDelay: '0.1s' }}>
                Finding municipal information shouldn&rsquo;t be difficult. City websites contain thousands of pages,
                documents, policies and service details, and finding the exact information you need can take time.
                Hey Markham makes it easier: simply ask a question in your own words, with no need to know which
                department to contact or which webpage to visit first.
              </p>
            </div>

            <ol className="grid lg:grid-cols-3 gap-6">
              {pillars.map((pillar, i) => (
                <li data-reveal key={pillar.verb} className="flex flex-col p-6 md:p-8 rounded-2xl bg-slate-800/60 border border-slate-700" style={{ transitionDelay: `${i * 0.1}s` }}>
                  <div className="flex items-center gap-3 mb-5">
                    <span className="w-12 h-12 rounded-xl bg-primary-600/30 text-primary-200 flex items-center justify-center flex-shrink-0">
                      {pillar.icon}
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
                The topics
              </p>
              <h2 data-reveal className="text-2xl md:text-3xl font-serif font-bold text-slate-900 dark:text-white mb-4 text-balance">
                What Can You Ask?
              </h2>
              <p data-reveal className="text-lg text-slate-600 dark:text-slate-400 text-pretty" style={{ transitionDelay: '0.1s' }}>
                The everyday things residents need from the City. Ask in your own words, by voice or text, and get the
                answer with the page it came from.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {askTopics.map((topic, i) => (
                <div data-reveal key={topic.title} className="flex gap-4 p-5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700" style={{ transitionDelay: `${i * 0.06}s` }}>
                  <span className="w-10 h-10 rounded-lg bg-primary-50 dark:bg-primary-900/50 flex items-center justify-center text-primary-600 dark:text-primary-400 flex-shrink-0">
                    {topic.icon}
                  </span>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">{topic.title}</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{topic.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The everyday jobs: three scenarios in depth, then the rest of city life in short */}
        <section id="features" className="py-16 md:py-20 px-6 bg-white dark:bg-slate-950 scroll-mt-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <p data-reveal className="text-sm font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400 mb-3">
                What it does
              </p>
              <h2 data-reveal className="text-2xl md:text-3xl font-serif font-bold text-slate-900 dark:text-white mb-4 text-balance">
                Built for the Things You Do Every Week
              </h2>
              <p data-reveal className="text-lg text-slate-600 dark:text-slate-400 text-pretty" style={{ transitionDelay: '0.1s' }}>
                Bins, repairs and permits are where residents need the City most. So that&rsquo;s where Hey Markham goes
                furthest.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {scenarios.map((scenario, i) => (
                <article data-reveal key={scenario.key} className="flex flex-col rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 md:p-8" style={{ transitionDelay: `${i * 0.1}s` }}>
                  <span className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${scenario.tone}`}>
                    {scenario.icon}
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
              ))}
            </div>

            <h3 data-reveal className="mt-14 mb-6 text-center text-lg font-semibold text-slate-900 dark:text-white">
              And the rest of life in Markham
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {moreLife.map((item, i) => (
                <div data-reveal key={item.title} className="flex gap-4 p-5 rounded-xl border border-slate-200 dark:border-slate-800" style={{ transitionDelay: `${i * 0.06}s` }}>
                  <span className="w-10 h-10 rounded-lg bg-primary-50 dark:bg-primary-900/50 flex items-center justify-center text-primary-600 dark:text-primary-400 flex-shrink-0">
                    {item.icon}
                  </span>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">{item.title}</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-6 text-center text-sm text-slate-500 dark:text-slate-400">
              Reminders, photos, My Markham and reports are in the app. Anyone can ask questions{' '}
              <a href={LIVE_URL} target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">in a web browser</a>.
            </p>
          </div>
        </section>

        {/* Trust Bar */}
        <section className="py-6 bg-primary-800 dark:bg-primary-950 border-b border-primary-700">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-wrap justify-center gap-8 text-primary-200 text-sm">
              <div className="flex items-center gap-2">
                <ShieldCheck size={18} className="text-green-400" />
                <span>No account needed</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={18} className="text-green-400" />
                <span>Answers link to official sources</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={18} className="text-green-400" />
                <span>Powered by public city data</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={18} className="text-green-400" />
                <span>Available 24/7</span>
              </div>
            </div>
          </div>
        </section>

        {/* In the App: a bento grid, each screenshot in the tile for its feature */}
        <section id="app" className="py-16 md:py-20 px-6 bg-gradient-to-b from-white to-primary-50 dark:from-slate-950 dark:to-slate-900 scroll-mt-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <p data-reveal className="text-sm font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400 mb-3">
                The Hey Markham app
              </p>
              <h2 data-reveal className="text-2xl md:text-3xl font-serif font-bold text-slate-900 dark:text-white mb-4 text-balance">
                Your Markham, in Your Pocket
              </h2>
              <p data-reveal className="text-lg text-slate-600 dark:text-slate-400 text-pretty" style={{ transitionDelay: '0.1s' }}>
                For iPhone and Android. Set your address once, and Hey Markham knows your pickup day, your ward and
                what&rsquo;s happening near home.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {/* Answers: the tall tile */}
              <SpotlightTile
                feature={appSpotlights.answer}
                tone="bg-primary-100/70 dark:bg-primary-900/40 border-primary-200 dark:border-primary-800"
                chip="bg-white text-primary-700 dark:bg-primary-800 dark:text-primary-200"
                className="sm:col-span-2 lg:row-span-2"
                peek="min-h-[22rem] lg:min-h-0 flex-1"
                phone="w-56 sm:w-64"
              />
              {/* Report: wide tile, phone beside the text on larger screens */}
              <SpotlightTile
                feature={appSpotlights.report}
                tone="bg-sky-50 dark:bg-sky-950/40 border-sky-100 dark:border-sky-900"
                chip="bg-white text-sky-700 dark:bg-sky-900 dark:text-sky-200"
                className="sm:col-span-2 sm:flex-row"
                body="sm:w-1/2 sm:pr-0"
                peek="h-64 sm:h-auto sm:w-1/2"
                phone="w-44 sm:top-8"
              />
              <SpotlightTile
                feature={appSpotlights.events}
                tone="bg-rose-50 dark:bg-rose-950/40 border-rose-100 dark:border-rose-900"
                chip="bg-white text-rose-700 dark:bg-rose-900 dark:text-rose-200"
                peek="h-52"
                phone="w-44"
              />
              <SpotlightTile
                feature={appSpotlights.inbox}
                tone="bg-emerald-50 dark:bg-emerald-950/40 border-emerald-100 dark:border-emerald-900"
                chip="bg-white text-emerald-700 dark:bg-emerald-900 dark:text-emerald-200"
                peek="h-52"
                phone="w-44"
              />

              {appExtras.map((extra, i) => (
                <div data-reveal key={extra.title} className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800" style={{ transitionDelay: `${i * 0.08}s` }}>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-9 h-9 rounded-lg bg-primary-50 dark:bg-primary-900/50 flex items-center justify-center text-primary-600 dark:text-primary-400 flex-shrink-0">
                      {extra.icon}
                    </span>
                    <h3 className="font-semibold text-slate-900 dark:text-white">{extra.title}</h3>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{extra.description}</p>
                </div>
              ))}
            </div>

            {/* How Hey Markham differs from the City's Access Markham app */}
            <div data-reveal className="mt-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 md:p-8">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Already use Access Markham?</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 max-w-3xl">
                Access Markham is the City of Markham&rsquo;s official app, organized by feature. Hey Markham starts with your question. They do different jobs, so many residents will want both.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="rounded-xl bg-slate-50 dark:bg-slate-800/60 p-5">
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Access Markham, from the City</h4>
                  <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                    {accessMarkhamFeatures.map((item) => (
                      <li key={item} className="flex gap-2">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-slate-400" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
                    The City&rsquo;s own app, organized by feature.
                  </p>
                </div>
                <div className="rounded-xl bg-primary-50 dark:bg-primary-900/30 border border-primary-100 dark:border-primary-800 p-5">
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Hey Markham</h4>
                  <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                    {heyMarkhamDifferences.map((item) => (
                      <li key={item} className="flex gap-2">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary-600 dark:text-primary-400" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
                    Best when you have a question and don&rsquo;t know where on markham.ca the answer is.
                  </p>
                </div>
              </div>
              <p className="mt-5 text-xs text-slate-500 dark:text-slate-400">
                Hey Markham is independent and isn&rsquo;t affiliated with the City of Markham. Access Markham features as listed on{' '}
                <a href={ACCESS_MARKHAM_URL} target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">the City&rsquo;s Access Markham page</a>, November 2026.
              </p>
            </div>

            {/* Download band, dark because the store buttons are styled for the hero's dark background */}
            <div data-reveal className="mt-8 rounded-2xl bg-slate-900 border border-slate-800 px-6 py-8 md:px-10 flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
              <div>
                <h3 className="text-xl font-semibold text-white mb-1">Get the Hey Markham app</h3>
                <p className="text-sm text-slate-400">
                  Use it as a guest, or sign in with Apple, Google or email to keep your questions and settings.
                </p>
                <Link href="/app/releases" className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-primary-300 hover:underline">
                  What&rsquo;s new in version {latestRelease.version}
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
              <div className="flex flex-wrap justify-center gap-3 flex-shrink-0">
                <StoreButton href={GOOGLE_PLAY_URL} store="Google Play" lead="Get it on" />
                <StoreButton href={APP_STORE_URL} store="the App Store" lead="Download on" />
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
                Why you can trust it
              </p>
              <h2 data-reveal className="text-2xl md:text-3xl font-serif font-bold text-slate-900 dark:text-white mb-4 text-balance">
                It Knows Where to Look, and Says When It Doesn&rsquo;t Know
              </h2>
              <p data-reveal className="text-lg text-slate-600 dark:text-slate-400 text-pretty" style={{ transitionDelay: '0.1s' }}>
                A useful answer must be more than a confident-sounding response. Hey Markham prioritizes official and
                traceable information, in clear everyday language, and would rather tell you it can&rsquo;t confirm
                something than guess.
              </p>
            </div>

            <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* The steps, joined by a line */}
              <ol className="lg:col-span-6 relative space-y-8">
                {answerSteps.map((step, i) => (
                  <li data-reveal key={step.title} className="relative flex gap-5" style={{ transitionDelay: `${i * 0.1}s` }}>
                    {i < answerSteps.length - 1 && (
                      <span className="absolute left-6 top-12 -bottom-8 w-0.5 -translate-x-1/2 bg-primary-200 dark:bg-primary-800" aria-hidden="true" />
                    )}
                    <span className="relative z-10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ring-8 ring-white dark:ring-slate-950 bg-primary-600 text-white">
                      {step.icon}
                    </span>
                    <div className="pt-1">
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">{step.title}</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{step.description}</p>
                    </div>
                  </li>
                ))}
              </ol>

              {/* Ask, answer with its source, then the next step, on a real question */}
              <div data-reveal className="lg:col-span-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl p-5 sm:p-8" style={{ transitionDelay: '0.15s' }}>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-5">A real example</p>

                <div className="flex justify-end items-start gap-3 mb-5">
                  <p className="max-w-[85%] rounded-2xl rounded-tr-sm bg-primary-700 text-white px-4 py-3 text-sm sm:text-base">
                    {workedExample.question}
                  </p>
                  <StepBadge n={1} />
                </div>

                <div className="flex items-start gap-3 mb-5">
                  <StepBadge n={2} />
                  <div className="flex-1 rounded-2xl rounded-tl-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-4 py-3">
                    <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">Hey Markham</p>
                    <p className="text-sm sm:text-base text-slate-800 dark:text-slate-200 leading-relaxed">{workedExample.answer}</p>
                    <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
                      <AnswerSource source={PET_LICENCE_URL} linkClassName="hover:text-primary-600 dark:hover:text-primary-300" />
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <StepBadge n={3} done />
                  <a
                    href={PET_LICENCE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-5 py-2.5 transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-green-300"
                  >
                    {workedExample.action}
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  </a>
                </div>

                <ul className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700 grid sm:grid-cols-2 gap-3 text-sm text-slate-600 dark:text-slate-400">
                  <li className="flex gap-2">
                    <Link2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary-600 dark:text-primary-400" aria-hidden="true" />
                    Every page an answer used, one tap away
                  </li>
                  <li className="flex gap-2">
                    <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary-600 dark:text-primary-400" aria-hidden="true" />
                    Answers not from City pages are marked
                  </li>
                  <li className="flex gap-2">
                    <ListChecks className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary-600 dark:text-primary-400" aria-hidden="true" />
                    The conditions and exceptions that apply
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 1: Why not just search markham.ca? One real question, then the three ways residents try to answer it */}
        <section className="py-16 px-6 bg-slate-50 dark:bg-slate-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <p data-reveal className="text-sm font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400 mb-3">
                The hard part
              </p>
              <h2 data-reveal className="text-2xl md:text-3xl font-serif font-bold text-slate-900 dark:text-white mb-4 text-balance">
                Why Not Just Search markham.ca?
              </h2>
              <p data-reveal className="text-lg text-slate-600 dark:text-slate-400 text-pretty" style={{ transitionDelay: '0.1s' }}>
                The answers are on markham.ca. Reaching them is the hard part: long menus, separate systems,
                and a search box that matches words rather than what you mean.
              </p>
            </div>

            {/* The one question every path below starts from */}
            <div data-reveal className="max-w-3xl mx-auto mb-8 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-6 py-6 md:px-8 text-center shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                A real question
              </p>
              <p className="text-xl md:text-2xl font-medium text-slate-900 dark:text-white text-balance">
                &ldquo;How tall can my backyard fence be?&rdquo;
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
                  <h3 className="font-semibold text-slate-900 dark:text-white">Click through the menus</h3>
                </div>

                <ul className="space-y-1.5 text-sm mb-4">
                  {clickPath.map((step, i) => (
                    <li key={step} className="flex gap-2">
                      <span className="w-4 flex-shrink-0 text-slate-400 dark:text-slate-500" aria-hidden="true">{i > 0 ? '→' : ''}</span>
                      <span className={i === clickPath.length - 1 ? 'font-medium text-slate-900 dark:text-white' : 'text-slate-600 dark:text-slate-300'}>
                        {step}
                      </span>
                    </li>
                  ))}
                </ul>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Fence rules sit under &ldquo;About the City&rdquo;, and the link is about 100 links down the By-Laws page, after a long list of by-law PDFs.
                </p>

                <p className="mt-auto pt-4 text-xs font-semibold text-red-600 dark:text-red-400">
                  4 clicks, then a long scroll
                </p>
              </li>

              {/* Path 2: the site's search box */}
              <li data-reveal className="flex flex-col rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6" style={{ transitionDelay: '0.1s' }}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-sm font-semibold flex items-center justify-center flex-shrink-0">
                    2
                  </span>
                  <h3 className="font-semibold text-slate-900 dark:text-white">Search the site</h3>
                </div>

                <div className="space-y-3 mb-4 text-sm">
                  <div className="rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-700 px-3 py-2.5">
                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">You search for</p>
                    <p className="text-slate-900 dark:text-white">&ldquo;How tall can my backyard fence be?&rdquo;</p>
                  </div>
                  <div className="rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-900/40 px-3 py-2.5">
                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">markham.ca returns</p>
                    <p className="text-red-700 dark:text-red-300 font-medium">No results found.</p>
                  </div>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Search one word instead and you get everything it can mean: &ldquo;park&rdquo; alone returns 1,976 results, from Parks to Parking.
                </p>

                <p className="mt-auto pt-4 text-xs font-semibold text-red-600 dark:text-red-400">
                  Nothing for the question you actually asked
                </p>
              </li>

              {/* Path 3: the answer, with the page it came from */}
              <li data-reveal className="flex flex-col rounded-2xl border-2 border-primary-600 dark:border-primary-500 bg-white dark:bg-slate-800 p-6 shadow-xl" style={{ transitionDelay: '0.2s' }}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 rounded-full bg-primary-600 text-white text-sm font-semibold flex items-center justify-center flex-shrink-0">
                    3
                  </span>
                  <h3 className="font-semibold text-slate-900 dark:text-white">Ask Hey Markham</h3>
                </div>

                <div className="rounded-lg bg-primary-50 dark:bg-primary-900/30 border border-primary-100 dark:border-primary-800 px-3 py-2.5 text-sm text-slate-800 dark:text-slate-100 leading-relaxed">
                  {fenceAnswer}
                </div>

                <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
                  <AnswerSource source={FENCE_URL} linkClassName="hover:text-primary-600 dark:hover:text-primary-300" />
                </p>

                <p className="mt-auto pt-4 text-xs font-semibold text-green-700 dark:text-green-400">
                  One question, answered with the page it came from
                </p>
              </li>
            </ol>

            <p className="mt-6 text-center text-xs text-slate-500 dark:text-slate-400">
              The menu path and the search results above were checked on markham.ca on November 15, 2026.
            </p>

            {/* The payoff: the section's own question, answered */}
            <div data-reveal className="mt-8 rounded-2xl bg-slate-900 dark:bg-slate-800 border border-slate-800 dark:border-slate-700 px-6 py-8 md:px-10 text-center">
              <h3 className="text-xl md:text-2xl font-serif font-bold text-white mb-2 text-balance">
                Don&rsquo;t search for it. Ask for it.
              </h3>
              <p className="text-slate-300 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
                Hey Markham reads the page, gives you the answer, and links the page it came from.
                Four clicks and a long scroll become one question.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <a
                  href={LIVE_URL}
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium text-sm transition-all shadow-sm hover:-translate-y-0.5 focus:outline-none focus-visible:ring-4 focus-visible:ring-primary-300"
                >
                  Try it live
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </a>
                <Link
                  href="/#trust"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-slate-700 hover:border-slate-500 text-slate-200 rounded-lg font-medium text-sm transition-colors"
                >
                  See how it checks its answers
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
                Always improving
              </p>
              <h2 data-reveal className="text-2xl md:text-3xl font-serif font-bold text-slate-900 dark:text-white mb-4 text-balance">
                Answers That Keep Getting Better
              </h2>
              <p data-reveal className="text-lg text-slate-600 dark:text-slate-400 text-pretty" style={{ transitionDelay: '0.1s' }}>
                Every question helps us understand what Markham residents need, and how they ask it. When a question
                our knowledge base doesn&rsquo;t adequately cover comes in, it becomes an opportunity to improve the
                system.
              </p>
            </div>

            <ol className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {improvementSteps.map((step, i) => (
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
              The result is a knowledge system that evolves with the needs of the community.
            </p>
          </div>
        </section>

        {/* Roadmap: a journey from Now to Later; a rail across the top on desktop, down the left on phones */}
        <section className="py-16 md:py-20 px-6 bg-slate-100 dark:bg-slate-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
              <p data-reveal className="text-sm font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400 mb-3">
                Roadmap
              </p>
              <h2 data-reveal className="text-2xl md:text-3xl font-serif font-bold text-slate-900 dark:text-white mb-4 text-balance">
                A City Assistant for Every Resident
              </h2>
              <p data-reveal className="text-lg text-slate-600 dark:text-slate-400 text-pretty" style={{ transitionDelay: '0.1s' }}>
                Our goal: every Markham resident has an assistant they can ask any time, that understands what they need
                and helps them get it done. We get there by doing the everyday jobs well first, then adding more.
              </p>
            </div>

            <div className="relative">
              {/* Desktop rail through the stage nodes: live, then in progress, then planned */}
              <div className="hidden lg:block absolute top-6 left-[16.66%] right-[16.66%] h-1 rounded-full bg-gradient-to-r from-green-500 via-amber-400 to-slate-300 dark:to-slate-600" aria-hidden="true" />

              <ol className="relative grid lg:grid-cols-3 lg:items-start gap-8 lg:gap-6">
                {roadmapStages.map((stage, i) => {
                  const tone = roadmapTones[stage.key];
                  const last = i === roadmapStages.length - 1;
                  return (
                    <li data-reveal key={stage.key} className="relative pl-16 lg:pl-0" style={{ transitionDelay: `${i * 0.12}s` }}>
                      {/* Phone rail down to the next stage */}
                      {!last && <div className="lg:hidden absolute left-6 top-12 -bottom-8 w-1 -translate-x-1/2 rounded-full bg-slate-300 dark:bg-slate-700" aria-hidden="true" />}

                      <div className="absolute left-0 top-0 lg:static lg:flex lg:justify-center lg:mb-6">
                        <span className={`relative z-10 w-12 h-12 rounded-full ring-8 flex items-center justify-center ${tone.node}`}>
                          {stage.icon}
                        </span>
                      </div>

                      <div className={`rounded-2xl bg-white dark:bg-slate-800 border p-6 ${tone.card}`}>
                        <div className="flex items-center justify-between gap-3 mb-1">
                          <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{stage.theme}</h3>
                          <span className={`text-xs font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full ${tone.badge}`}>
                            {stage.key === 'now' ? 'Live now' : stage.label}
                          </span>
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-5">{stage.description}</p>
                        <ul className="space-y-3">
                          {stage.items.map((item) => (
                            <li key={item.title} className="flex gap-3">
                              <span className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${tone.icon}`}>
                                {item.icon}
                              </span>
                              <div>
                                <p className="text-sm font-medium text-slate-900 dark:text-white">{item.title}</p>
                                <p className="text-xs text-slate-500 dark:text-slate-400">{item.description}</p>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </div>

            <p className="mt-10 text-center text-sm text-slate-500 dark:text-slate-400">
              Next and Later are plans, and may change.
            </p>
          </div>
        </section>

        {/* Closing pitch for residents, before the municipal contact form */}
        <section className="py-16 px-6 bg-slate-900 dark:bg-slate-950 border-t border-slate-800">
          <div className="max-w-3xl mx-auto text-center">
            <p data-reveal className="text-sm font-semibold uppercase tracking-wider text-primary-300 mb-3">
              For every resident
            </p>
            <h2 data-reveal className="text-2xl md:text-4xl font-serif font-bold text-white mb-4 text-balance">
              Better Access to City Information. Less Time Searching.
            </h2>
            <p data-reveal className="text-lg text-slate-300 text-pretty" style={{ transitionDelay: '0.1s' }}>
              Whether you are a homeowner, tenant, business owner or simply exploring community services, Hey Markham
              is here to help you navigate municipal information more easily.
            </p>
            <p data-reveal className="mt-4 text-lg font-medium text-primary-300" style={{ transitionDelay: '0.2s' }}>
              Ask Hey Markham. Get to know your city.
            </p>
            <div data-reveal className="mt-7 flex flex-wrap justify-center gap-3" style={{ transitionDelay: '0.3s' }}>
              <a
                href={LIVE_URL}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium text-sm transition-all shadow-sm hover:-translate-y-0.5 focus:outline-none focus-visible:ring-4 focus-visible:ring-primary-300"
              >
                Ask Hey Markham
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-slate-700 hover:border-slate-500 text-slate-200 rounded-lg font-medium text-sm transition-colors"
              >
                Get in touch
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
                 For the City of Markham and other municipalities
               </p>
               <h2 data-reveal className="text-2xl md:text-3xl font-serif font-bold text-white mb-4 text-balance">
                 Bring Hey Markham to Your Residents
               </h2>
               <p data-reveal className="text-primary-100" style={{ transitionDelay: '0.1s' }}>
                 Start with a pilot. See the results. Then decide.
               </p>
               <p className="mt-3 text-sm text-primary-200">
                 Residents: have feedback or a question about Hey Markham? Use the same form.
               </p>
             </div>

             <div className="grid md:grid-cols-2 gap-12">
               {/* Contact Info */}
               <div data-reveal className="space-y-8">
                 <div className="text-left">
                   <h3 className="text-xl font-bold text-white mb-4">Why Choose Hey Markham?</h3>
                   <div className="space-y-4">
                     <div className="flex gap-4">
                       <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                         <Zap className="w-5 h-5 text-primary-200" />
                       </div>
                       <div>
                         <h4 className="text-white font-medium">Quick Implementation</h4>
                         <p className="text-primary-200 text-sm">Starts from the information already on your public website. No system replacement needed.</p>
                       </div>
                     </div>
                     <div className="flex gap-4">
                       <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                         <Signpost className="w-5 h-5 text-primary-200" />
                       </div>
                       <div>
                         <h4 className="text-white font-medium">Fewer Calls in the Wrong Place</h4>
                         <p className="text-primary-200 text-sm">Sends residents to the department or agency that handles their request, including the ones that aren&rsquo;t the City.</p>
                       </div>
                     </div>
                     <div className="flex gap-4">
                       <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                         <Link2 className="w-5 h-5 text-primary-200" />
                       </div>
                       <div>
                         <h4 className="text-white font-medium">Answers You Can Audit</h4>
                         <p className="text-primary-200 text-sm">Every answer traces back to the pages it came from, and staff review the answers to the most common questions.</p>
                       </div>
                     </div>
                     <div className="flex gap-4">
                       <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                         <Users className="w-5 h-5 text-primary-200" />
                       </div>
                       <div>
                         <h4 className="text-white font-medium">Ease the Load on Staff</h4>
                         <p className="text-primary-200 text-sm">Answers routine questions around the clock, so staff can focus on the complex ones.</p>
                       </div>
                     </div>
                     <div className="flex gap-4">
                       <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                         <ShieldCheck className="w-5 h-5 text-primary-200" />
                       </div>
                       <div>
                         <h4 className="text-white font-medium">Privacy and Accessibility First</h4>
                         <p className="text-primary-200 text-sm">Designed around Canadian privacy law and accessibility standards. We&rsquo;ll walk your team through our approach during the pilot.</p>
                       </div>
                     </div>
                   </div>
                 </div>

                 <div className="pt-6">
                   <h3 className="text-xl font-bold text-white mb-4">Get in Touch</h3>
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

               <ContactForm />
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

// Ties a part of the worked example to its numbered step
function StepBadge({ n, done = false }: { n: number; done?: boolean }) {
  return (
    <span
      className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold ${
        done ? 'bg-green-500 text-white' : 'bg-primary-600 text-white'
      }`}
      aria-label={`Step ${n}`}
    >
      {n}
    </span>
  )
}
