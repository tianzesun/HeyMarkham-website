import {
  Mic, Search, ShieldCheck, Mail, Phone, CheckCircle2, Clock, AlertCircle,
  MessageSquare, Users, MousePointer, Link2, Home, Zap, CreditCard, BookOpen,
  Car, Droplets, Leaf, Waves, Trees, CalendarDays, Camera, Navigation,
  Languages, LayoutGrid, Bell, ArrowRight, ArrowUpRight, Signpost, ClipboardCheck, Recycle,
  Wrench, FileText, Receipt, Snowflake, Landmark, Bus, Sun, MapPin,
  Lock, Compass, ListChecks
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { HeroTryLive, StoreButton } from '../components/HeroTryLive';
import { ContactForm } from '../components/ContactForm';
import { FAQSection } from '../components/FAQSection';
import { RevealOnScroll } from '../components/RevealOnScroll';
import { faqDatabase } from '../lib/faq-data';
import { APP_STORE_URL, GOOGLE_PLAY_URL, LIVE_URL } from '../lib/links';
import { latestRelease } from '../lib/releases';
import { AnswerSource } from '../components/AnswerSource';

// Server-rendered; only FAQSection and ContactForm hydrate in the browser
export default function HomePage() {
  // Counted from the data, so it stays true as more answers are checked
  const checkedAnswerCount = faqDatabase.filter(item => item.source).length;

  // The three jobs Hey Markham does. Every example must be something the app or live assistant
  // really does today (see lib/releases.ts); keep them in step when features change
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

  const clickProblemStats = [
    { value: "4", label: "Clicks", description: "From the homepage to the fence rules in the example above" },
    { value: "Several", label: "Separate Systems", description: "Waste, recreation, libraries and transit each have their own" },
    { value: "Office hours", label: "Phone Support", description: "Questions don’t stop when lines close" },
    { value: "1", label: "Question", description: "All Hey Markham needs" },
  ];

  // How an answer is made, in residents' words. Each step mirrors the answer layers in the
  // HeyMarkham API (docs/ANSWER_LAYERS.md, app/rag/fact_support.py, app/services/referrals.py);
  // don't promise more than those do
  const answerSteps = [
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Understands what you mean",
      description: "Your own words, by voice or text, in four languages. Follow-ups work too: “and on weekends?”",
    },
    {
      icon: <Compass className="w-6 h-6" />,
      title: "Knows where to look",
      description: "Common questions get answers people have checked. Your ward, pickup day and nearby places come from your address. Events, closures and road work come from the City’s own listings. Everything else, from markham.ca.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Checks before it answers",
      description: "Fees, times, phone numbers and links must appear in the official pages it read. Any it can’t find there are left out: a wrong fee is worse than none.",
    },
    {
      icon: <AlertCircle className="w-6 h-6" />,
      title: "Says so when it can’t",
      description: "If the answer isn’t there, Hey Markham says so and tells you who can help: the City’s Contact Centre at 905-477-5530, or the agency that handles it.",
    },
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
                A search box hands you pages to read. Hey Markham starts with what you need and does three jobs for you.
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
                A city assistant is only useful if it&rsquo;s right. Hey Markham is built not to make answers up.
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
                  <li className="flex gap-2 sm:col-span-2">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary-600 dark:text-primary-400" aria-hidden="true" />
                    {checkedAnswerCount} answers in the FAQ below checked against official sources
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 1: Why not just search markham.ca? */}
        <section className="py-16 px-6 bg-slate-50 dark:bg-slate-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 data-reveal className="text-2xl md:text-3xl font-serif font-bold text-slate-900 dark:text-white mb-4 text-balance">
                Why Not Just Search markham.ca?
              </h2>
              <p data-reveal className="text-lg text-slate-600 dark:text-slate-400 text-pretty" style={{ transitionDelay: '0.1s' }}>
                The answers are on markham.ca. Finding them is the hard part.
              </p>
            </div>

            {/* The click path: real menus on markham.ca */}
            <div className="mb-12">
              <div className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-sm border border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                    <MousePointer className="w-6 h-6 text-red-600 dark:text-red-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">The &ldquo;Multiple-Click&rdquo; Problem</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">Finding simple info shouldn&rsquo;t be this hard</p>
                  </div>
                </div>

                <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-6 mb-6">
                  <p className="text-slate-700 dark:text-slate-300 mb-4">
                    <strong>Example:</strong> &ldquo;How tall can my backyard fence be?&rdquo;
                  </p>
                  <div className="flex flex-wrap items-center gap-2 text-sm">
                    <span className="px-3 py-1 bg-slate-200 dark:bg-slate-700 rounded-full">Home</span>
                    <span className="text-slate-400">→</span>
                    <span className="px-3 py-1 bg-slate-200 dark:bg-slate-700 rounded-full">About the City of Markham</span>
                    <span className="text-slate-400">→</span>
                    <span className="px-3 py-1 bg-slate-200 dark:bg-slate-700 rounded-full">City Hall</span>
                    <span className="text-slate-400">→</span>
                    <span className="px-3 py-1 bg-slate-200 dark:bg-slate-700 rounded-full">By-Laws</span>
                    <span className="text-slate-400">→</span>
                    <span className="px-3 py-1 bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-300 rounded-full font-medium">Fences &amp; Swimming Pools</span>
                  </div>
                  <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
                    Fence rules sit under &ldquo;About the City&rdquo;, and the link is about 100 links down the By-Laws page, after a long list of by-law PDFs. Searching markham.ca for the question finds nothing.
                  </p>

                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {clickProblemStats.map((stat, i) => (
                    <div key={i} className="text-center">
                      <div className="text-2xl md:text-3xl font-bold text-red-600 dark:text-red-400 mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm font-semibold text-slate-900 dark:text-white mb-1">
                        {stat.label}
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">
                        {stat.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Search box vs. Hey Markham */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-sm border border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                  <Search className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">The Search Box Problem</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">Search matches words, not what you mean</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="border border-red-200 dark:border-red-800 rounded-lg p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-300 rounded-full text-sm font-medium">
                      markham.ca search
                    </span>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-slate-50 dark:bg-slate-900 rounded p-3">
                      <p className="text-sm text-slate-600 dark:text-slate-400">User asks:</p>
                      <p className="text-sm font-medium text-slate-900 dark:text-white">&ldquo;Can my visitor park on the street tonight?&rdquo;</p>
                    </div>
                    <div className="flex justify-center">
                      <div className="text-2xl">↓</div>
                    </div>
                    <div className="bg-red-50 dark:bg-red-900/20 rounded p-3">
                      <p className="text-sm text-slate-600 dark:text-slate-400">Search results:</p>
                      <p className="text-sm text-red-700 dark:text-red-300">No results found.</p>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Search just &ldquo;park&rdquo; instead and you get 1,976 results, from Parks to Parking. Checked November 15, 2026.
                    </p>
                  </div>
                </div>

                <div className="border border-green-200 dark:border-green-800 rounded-lg p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">
                      Hey Markham
                    </span>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-slate-50 dark:bg-slate-900 rounded p-3">
                      <p className="text-sm text-slate-600 dark:text-slate-400">User asks:</p>
                      <p className="text-sm font-medium text-slate-900 dark:text-white">&ldquo;Can my visitor park on the street tonight?&rdquo;</p>
                    </div>
                    <div className="flex justify-center">
                      <div className="text-2xl">↓</div>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 rounded p-3">
                      <p className="text-sm text-slate-600 dark:text-slate-400">Hey Markham response:</p>
                      <p className="text-sm text-green-700 dark:text-green-300">&ldquo;Street parking isn&rsquo;t allowed from 2:30 AM to 6 AM unless signs say otherwise, but you can request an overnight exemption online for $6 a night, up to 10 a year per licence plate.&rdquo;</p>
                      <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                        <AnswerSource source="https://www.markham.ca/permits-licences-taxes/parking/overnight-street-parking-request" linkClassName="hover:text-primary-600 dark:hover:text-primary-300" />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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

        <FAQSection />

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
