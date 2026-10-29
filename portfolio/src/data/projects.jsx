import {
  SiCplusplus,
  SiFirebase,
  SiFlutter,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
} from 'react-icons/si';
import { RiFirebaseFill } from 'react-icons/ri';
import { androidMockups } from './androidMockups';
import { additionalSelectedProjects } from './selectedProjects';
import researchLensScreenshot from '../assets/images/projects/researchlens/overview.webp';
import researchLensChat from '../assets/images/projects/researchlens/chat.webp';
import researchLensPapers from '../assets/images/projects/researchlens/papers.webp';
import researchLensSearch from '../assets/images/projects/researchlens/semantic-search.webp';
import researchLensAnalysis from '../assets/images/projects/researchlens/analysis.webp';
import researchLensComparison from '../assets/images/projects/researchlens/comparison.webp';
import researchLensCitation from '../assets/images/projects/researchlens/source-citation.webp';
import researchLensMobile from '../assets/images/projects/researchlens/mobile.webp';
import boredomLibrary from '../assets/images/projects/boredom-buster/library-desktop.webp';
import boredomPenFight from '../assets/images/projects/boredom-buster/pen-fight.webp';
import boredomConnectFour from '../assets/images/projects/boredom-buster/connect-four.webp';
import boredomCustomization from '../assets/images/projects/boredom-buster/customization.webp';
import boredomMobile from '../assets/images/projects/boredom-buster/library-mobile.webp';
import researcherHome from '../assets/images/projects/researcher-browser/01-scholar-home.webp';
import researcherPaper from '../assets/images/projects/researcher-browser/02-paper-reading.webp';
import researcherBookmarks from '../assets/images/projects/researcher-browser/03-bookmark-library.webp';
import researcherHistory from '../assets/images/projects/researcher-browser/04-browsing-history.webp';
import gjswaHome from '../assets/images/projects/gjswa/home-desktop.webp';
import gjswaDistricts from '../assets/images/projects/gjswa/districts-desktop.webp';
import gjswaLogin from '../assets/images/projects/gjswa/login-desktop.webp';
import gjswaMobile from '../assets/images/projects/gjswa/home-mobile.webp';

export const projectList = [
  ...additionalSelectedProjects,
  {
    title: 'Boredom Buster',
    repoName: 'Azrul16/boredom-buster',
    description:
      'Twenty free browser games with Ziggy, three difficulty modes, and offline play.',
    details:
      'A Next.js game collection with local scores, daily challenges, and customizable arenas, built for keyboard and touch controls.',
    category: 'Browser Games',
    status: 'Live Demo',
    tech: [<SiNextdotjs key="nextjs" />, <SiJavascript key="javascript" />],
    technologyLabels: ['Next.js', 'React', 'TypeScript', 'Matter.js'],
    highlights: ['20 games', 'Offline play', 'Daily challenges'],
    features: [
      '20 games with Easy, Medium, and Hard difficulty modes',
      'Offline play after the first download finishes',
      'Local scores, difficulty records, result sharing, and JSON backup downloads',
      'Favorites, recent games, and daily challenges',
      'Five palettes, three arenas, per-game colors, light/dark themes, and focus mode',
      'Keyboard, touch, sound controls, and automatic or manual rematches',
    ],
    architecture: [
      'Next.js / React / TypeScript',
      'Matter.js game physics',
      'Browser-local scores and settings',
      'Static export hosted on Netlify',
    ],
    repoUrl: 'https://github.com/Azrul16/boredom-buster',
    demoUrl: 'https://regal-valkyrie-a10d6b.netlify.app/',
    image: boredomLibrary,
    imageAlt: 'Boredom Buster desktop game library in dark mode',
    imageWidth: 1440,
    imageHeight: 1100,
    screenshots: [
      { src: boredomLibrary, alt: 'Desktop game library', width: 1440, height: 1100 },
      { src: boredomPenFight, alt: 'Pen Fight game', width: 1440, height: 1100 },
      { src: boredomConnectFour, alt: 'Connect Four game', width: 1440, height: 1100 },
      { src: boredomCustomization, alt: 'Dark-mode customization panel', width: 1440, height: 1100 },
      { src: boredomMobile, alt: 'Dark-mode mobile game library', width: 390, height: 844 },
    ],
    accent: 'rgba(167, 139, 250, 0.2)',
  },
  {
    title: 'ResearchLens AI',
    repoName: 'Azrul16/researchlens-ai-rag-assistant',
    description:
      'A research workspace for searching academic PDFs, asking questions with page citations, and comparing papers.',
    details:
      'ResearchLens combines a Next.js interface and FastAPI backend with local embeddings and persistent FAISS indexes for retrieval-augmented research.',
    category: 'AI Research Tool',
    status: 'Open Source',
    tech: [<SiNextdotjs key="nextjs" />, <SiPython key="python" />],
    technologyLabels: [
      'Next.js',
      'Python',
      'FastAPI',
      'Docker',
      'GitHub Actions / CI',
    ],
    highlights: [
      'Semantic search',
      'Cited research chat',
      'Multi-paper comparison',
    ],
    features: [
      'Persistent research workspaces and PDF libraries',
      'Semantic search with local embeddings',
      'Research chat with paper and page citations',
      'Structured analysis and multi-paper comparisons',
    ],
    architecture: [
      'Next.js / React / TypeScript',
      'FastAPI / Python',
      'Sentence Transformers / FAISS',
      'SQLAlchemy / PostgreSQL or SQLite',
      'Groq and Gemini generation adapters',
      'Docker Compose services with health checks',
      'GitHub Actions: backend tests, frontend checks, Docker smoke checks',
    ],
    repoUrl: 'https://github.com/Azrul16/researchlens-ai-rag-assistant',
    image: researchLensScreenshot,
    imageAlt:
      'ResearchLens AI workspace with indexed papers and research actions',
    imageWidth: 1440,
    imageHeight: 1478,
    screenshots: [
      { src: researchLensScreenshot, alt: 'Research workspace overview', width: 1440, height: 1478 },
      { src: researchLensChat, alt: 'Ask Papers chat with cited answers', width: 1440, height: 1000 },
      { src: researchLensPapers, alt: 'PDF library and upload workflow', width: 1440, height: 1000 },
      { src: researchLensSearch, alt: 'Semantic search results with page references', width: 1440, height: 1898 },
      { src: researchLensAnalysis, alt: 'Structured research paper analysis', width: 1440, height: 1317 },
      { src: researchLensComparison, alt: 'Side-by-side research paper comparison', width: 1440, height: 1407 },
      { src: researchLensCitation, alt: 'Source citation and supporting passage', width: 1440, height: 1000 },
      { src: researchLensMobile, alt: 'ResearchLens responsive mobile view', width: 390, height: 1940 },
    ],
    accent: 'rgba(121, 194, 255, 0.2)',
  },
  {
    title: 'DevDroid Android Code Editor',
    ...androidMockups['DevDroid-android-code-editor'],
    repoName: 'Azrul16/DevDroid-android-code-editor',
    description:
      'An Android coding workspace with a tabbed editor, project explorer, terminal, and Git controls.',
    details:
      'A Flutter development workspace for local projects, syntax-highlighted editing, and Termux-backed commands and Git. The interactive terminal connects to Termux over SSH; the app is under active development.',
    challenge:
      'Designing a compact coding environment that still feels usable on a small screen.',
    outcome:
      'An Android development workspace combining project files, code editing, terminal sessions, and Git workflows.',
    problem:
      'Mobile developers and learners often need a lightweight way to inspect and edit code when they are away from a desktop setup.',
    role: 'Solo developer responsible for product direction, Flutter UI structure, editor workflow, and repository implementation.',
    features: [
      'Local projects, recent workspaces, and file explorer',
      'Tabbed code editing with syntax highlighting and language detection',
      'Run, save, format, and terminal actions',
      'Termux command execution and SSH-backed interactive terminal',
      'Git status, pull, push, and stage-all commits through Termux',
      'Editor, appearance, and terminal preferences',
    ],
    architecture: [
      'Flutter / Dart / Provider',
      're_editor / re_highlight',
      'xterm / dartssh2',
      'Termux through an Android native platform channel',
      'SharedPreferences',
    ],
    learning:
      'Improved my ability to design dense mobile interfaces where navigation, editing, and file context need to stay understandable on a small screen.',
    category: 'Developer Tool',
    status: 'Featured Repo',
    tech: [<SiFlutter key="flutter" />],
    highlights: ['Code editor', 'Mobile utility', 'Developer workflow'],
    repoUrl: 'https://github.com/Azrul16/DevDroid-android-code-editor',
    accent: 'rgba(122, 140, 255, 0.2)',
  },
  {
    title: 'Lecturer App',
    repoName: 'Azrul16/Lecturer-AI_Powered_Study_App',
    description:
      'A study app concept for summaries, transcription, and revision quizzes.',
    details:
      'The product centers on making course material easier to revisit through note extraction, simplified study content, and interactive review loops.',
    challenge:
      'Keeping AI features practical and helpful inside real student workflows.',
    outcome:
      'A study tool that turns dense content into clearer revision experiences.',
    problem:
      'Students often have long notes, lectures, and study material but need faster ways to summarize, review, and test themselves before exams.',
    role: 'Built the product concept, mobile app structure, AI-assisted study flows, and Firebase-backed feature direction.',
    features: [
      'AI summaries',
      'Transcription-oriented study flow',
      'Quiz and revision support',
      'Student-friendly content organization',
    ],
    architecture: [
      'Flutter',
      'Dart',
      'Firebase',
      'AI-assisted content workflows',
    ],
    learning:
      'Learned how to shape AI features around real study habits instead of treating AI as a standalone gimmick.',
    category: 'AI Study Tool',
    status: 'Featured Concept',
    tech: [<SiFlutter key="flutter" />, <SiFirebase key="firebase" />],
    highlights: ['AI summaries', 'Revision support', 'Learning workflows'],
    repoUrl: 'https://github.com/Azrul16/Lecturer-AI_Powered_Study_App',
    accent: 'rgba(121, 194, 255, 0.2)',
  },
  {
    title: 'Smart Home Mobile App',
    repoName: 'Azrul16/Smart-Home-Mobile-app',
    description:
      'A Flutter mobile app for controlling and monitoring smart home flows from a clean mobile interface.',
    details:
      'Smart Home Mobile App shows IoT-oriented product thinking through a mobile control surface for connected home interactions.',
    challenge:
      'Turning device control into an interface that feels clear and approachable.',
    outcome:
      'A mobile-first smart home app concept that connects Flutter UI work with practical IoT use cases.',
    category: 'IoT App',
    status: 'Public Repo',
    tech: [<SiFlutter key="flutter" />, <SiFirebase key="firebase" />],
    highlights: ['Smart home UI', 'IoT workflow', 'Mobile controls'],
    repoUrl: 'https://github.com/Azrul16/Smart-Home-Mobile-app',
    accent: 'rgba(152, 212, 120, 0.18)',
  },
  {
    title: 'BanglaSpeech2Text',
    repoName: 'Azrul16/BanglaSpeech2Text',
    description:
      'A Python package for offline Bangla transcription using Whisper.',
    details:
      'BanglaSpeech2Text is a language-focused AI project that packages offline speech-to-text support for Bangla using a fine-tuned Whisper model.',
    challenge:
      'Making speech recognition useful for Bangla while keeping the package practical for offline use.',
    outcome:
      'An open-source AI package with a clear local-language purpose and stronger technical credibility.',
    problem:
      'Bangla speech-to-text support is harder to access offline, especially for developers who want language-focused transcription tools.',
    role: 'Created the package direction, repository structure, documentation angle, and Whisper-based transcription focus.',
    features: [
      'Offline Bangla transcription',
      'Whisper-based model direction',
      'Package-style developer usage',
      'Local-language AI utility',
    ],
    architecture: [
      'Python',
      'Whisper model workflow',
      'Speech-to-text pipeline',
      'Package-oriented structure',
    ],
    learning:
      'Deepened my understanding of turning AI experiments into reusable developer tools with a specific language and user need.',
    category: 'AI Package',
    status: 'Open Source',
    tech: [<SiPython key="python" />],
    highlights: ['Bangla STT', 'Whisper model', 'Offline package'],
    repoUrl: 'https://github.com/Azrul16/BanglaSpeech2Text',
    accent: 'rgba(121, 194, 255, 0.2)',
  },
  {
    title: 'Notisaver Flutter App',
    repoName: 'Azrul16/Notisaver-Flutter-app',
    description:
      'A Flutter utility app focused on saving and reviewing notifications in a simple mobile interface.',
    details:
      'Notisaver is a mobile utility project that demonstrates practical Android-focused workflows and notification-oriented UX.',
    challenge:
      'Designing a utility app that keeps saved information organized without adding friction.',
    outcome:
      'A focused Flutter utility app that shows everyday problem-solving through mobile development.',
    category: 'Utility App',
    status: 'Public Repo',
    tech: [<SiFlutter key="flutter" />],
    highlights: ['Notification utility', 'Flutter UI', 'Mobile workflow'],
    repoUrl: 'https://github.com/Azrul16/Notisaver-Flutter-app',
    accent: 'rgba(85, 204, 168, 0.18)',
  },
  {
    title: 'AnySQL',
    repoName: 'Azrul16/anysql',
    description:
      'A Flutter/Dart package-style project for working with SQL-oriented app data through a reusable utility layer.',
    details:
      'AnySQL adds package-focused work to the portfolio, showing reusable Dart development beyond full app screens.',
    challenge:
      'Designing a data utility that stays simple enough to reuse across different Flutter projects.',
    outcome:
      'A reusable Flutter package project that strengthens the portfolio with library-style engineering work.',
    category: 'Flutter Package',
    status: 'Package Repo',
    tech: [<SiFlutter key="flutter" />],
    highlights: ['Dart utility', 'SQL workflow', 'Reusable package'],
    repoUrl: 'https://github.com/Azrul16/anysql',
    accent: 'rgba(122, 140, 255, 0.18)',
  },
  {
    title: 'Form Flutter',
    repoName: 'Azrul16/form_flutter',
    description:
      'A Flutter form package/demo project focused on reusable form fields and cleaner input workflows.',
    details:
      'Form Flutter demonstrates reusable UI and form-handling patterns that can be carried into larger Flutter apps.',
    challenge:
      'Making form UI reusable while keeping validation and input structure easy to follow.',
    outcome:
      'A Flutter form utility project that shows attention to everyday app building patterns.',
    category: 'Flutter Package',
    status: 'Package Repo',
    tech: [<SiFlutter key="flutter" />],
    highlights: ['Reusable forms', 'Input UI', 'Flutter patterns'],
    repoUrl: 'https://github.com/Azrul16/form_flutter',
    accent: 'rgba(121, 194, 255, 0.2)',
  },
  {
    title: 'Form Validator',
    repoName: 'Azrul16/form_validator',
    description:
      'A Dart/Flutter validation utility for keeping form input checks clean and reusable.',
    details:
      'Form Validator complements the form UI work with validation-focused logic that can be reused across Flutter projects.',
    challenge:
      'Separating validation rules from UI so forms remain easier to maintain.',
    outcome:
      'A small package-style repo that shows clean reusable logic for common Flutter app needs.',
    category: 'Flutter Package',
    status: 'Package Repo',
    tech: [<SiFlutter key="flutter" />],
    highlights: ['Validation rules', 'Reusable logic', 'Dart utility'],
    repoUrl: 'https://github.com/Azrul16/form_validator',
    accent: 'rgba(85, 204, 168, 0.18)',
  },
  {
    title: 'Animated Status Card',
    repoName: 'Azrul16/animated_status_card',
    description:
      'A Flutter UI component project for animated status cards and polished state presentation.',
    details:
      'Animated Status Card is a component-focused repo that highlights UI animation and reusable Flutter widget thinking.',
    challenge:
      'Creating animation that adds clarity without making the component feel heavy.',
    outcome:
      'A reusable UI component project that adds visual polish and widget-level craft to the portfolio.',
    category: 'Flutter Component',
    status: 'Package Repo',
    tech: [<SiFlutter key="flutter" />],
    highlights: ['Animated widget', 'Status UI', 'Reusable component'],
    repoUrl: 'https://github.com/Azrul16/animated_status_card',
    accent: 'rgba(255, 204, 87, 0.2)',
  },
  {
    title: 'OneSignal Push Notification',
    repoName: 'Azrul16/push-notification-flutter-using-OneSignal',
    description:
      'A Flutter push notification implementation example using OneSignal integration.',
    details:
      'This repo shows notification integration work, useful for demonstrating mobile app infrastructure beyond UI.',
    challenge:
      'Connecting push notification setup with a Flutter app in a clear and reproducible way.',
    outcome:
      'A practical integration example that supports real-world notification features in Flutter projects.',
    category: 'Flutter Integration',
    status: 'Public Repo',
    tech: [<SiFlutter key="flutter" />, <SiCplusplus key="cplusplus" />],
    highlights: ['Push notifications', 'OneSignal', 'Flutter setup'],
    repoUrl:
      'https://github.com/Azrul16/push-notification-flutter-using-OneSignal',
    accent: 'rgba(255, 120, 133, 0.22)',
  },
  {
    title: 'Researcher Web Browser',
    repoName: 'Azrul16/Researcher-WebBrowser',
    description:
      'A desktop academic browser with Google Scholar search, saved research sources, and a floating AI assistant.',
    details:
      'Built with PyQt6 and Qt WebEngine, Researcher combines tabbed paper browsing, bookmarks, history, and session restore. Its AI assistant can search Scholar, summarize pages, and act on browser tabs, with backend proxy or OS credential-store access to Groq.',
    challenge:
      'Creating a focused browsing workflow that supports research tasks without overcomplicating the tool.',
    outcome:
      'A Python utility project that broadens the portfolio beyond Flutter and shows experimentation with desktop-style tooling.',
    category: 'Desktop Research Tool',
    status: 'Open Source',
    tech: [<SiPython key="python" />],
    technologyLabels: ['Python', 'PyQt6', 'Qt WebEngine', 'JavaScript', 'Groq'],
    highlights: ['Scholar search', 'AI assistant', 'Saved research sources'],
    features: [
      'Tabbed browsing with pinned tabs and session restore',
      'Google Scholar homepage and search-or-URL omnibox',
      'Bookmark library and browsing history',
      'Floating AI commands for search, page summaries, and tab actions',
      'Optional PSTU proxy support and research mode',
    ],
    architecture: ['Python / PyQt6 / Qt WebEngine', 'HTML / CSS / JavaScript browser controls', 'QWebChannel bridge to Python actions', 'Groq via backend proxy or OS credential store', 'Local settings, bookmarks, history, and session persistence'],
    image: researcherHome,
    imageAlt: 'Researcher desktop browser showing Google Scholar and its floating AI assistant',
    imageWidth: 1440,
    imageHeight: 960,
    screenshots: [
      { src: researcherHome, alt: 'Google Scholar workspace and AI assistant', width: 1440, height: 960 },
      { src: researcherPaper, alt: 'Reading an arXiv research paper', width: 1440, height: 960 },
      { src: researcherBookmarks, alt: 'Saved research bookmark library', width: 1440, height: 960 },
      { src: researcherHistory, alt: 'Research browsing history', width: 1440, height: 960 },
    ],
    repoUrl: 'https://github.com/Azrul16/Researcher-WebBrowser',
    accent: 'rgba(255, 204, 87, 0.2)',
  },
  {
    title: 'GJSWA Website',
    repoName: 'Azrul16/GJSWA-website',
    description:
      'A student association website connecting members through profiles, notices, stories, and regional information.',
    details:
      'The Greater Jashore Student Welfare Association website at PSTU includes district showcases, committee information, teacher and alumni directories, and member publishing flows. The repository screenshots were captured locally without Firebase configuration, so the home views display a configuration message in place of live stories and notices.',
    category: 'Community Website',
    status: 'Open Source',
    tech: [<SiJavascript key="javascript" />, <SiFirebase key="firebase" />],
    technologyLabels: ['JavaScript', 'Firebase', 'HTML', 'CSS', 'Vite', 'Cloudinary'],
    highlights: ['Member profiles', 'Stories and notices', 'District showcase'],
    features: [
      'Responsive home page and district showcases',
      'Committee, teacher, staff, and alumni directories',
      'Firebase authentication and member profile editing',
      'Story and notice publishing flows',
      'Cloudinary image handling',
    ],
    architecture: ['HTML / CSS / vanilla JavaScript / Vite', 'Firebase Authentication / Cloud Firestore', 'Page modules, service helpers, and data models', 'Cloudinary media uploads', 'Firebase Hosting / Cloud Functions / Firestore rules'],
    repoUrl: 'https://github.com/Azrul16/GJSWA-website',
    image: gjswaDistricts,
    imageAlt: 'GJSWA district showcase with regional photography and information',
    imageWidth: 1440,
    imageHeight: 1100,
    screenshots: [
      { src: gjswaDistricts, alt: 'District showcase with regional photography', width: 1440, height: 1100 },
      { src: gjswaHome, alt: 'Desktop home page (local preview)', width: 1440, height: 1000 },
      { src: gjswaLogin, alt: 'Member sign-in page', width: 1440, height: 1450 },
      { src: gjswaMobile, alt: 'Mobile home page (local preview)', width: 390, height: 844 },
    ],
    accent: 'rgba(85, 204, 168, 0.2)',
  },
  {
    title: 'Schedula',
    ...androidMockups.Schedula,
    repoName: 'Azrul16/Schedula',
    description:
      'A class management app for schedules, assignments, class notes, and academic coordination.',
    details:
      'A Flutter academic workspace with class timelines, semester notes, assignment tracking, announcements, student profiles, and a Gemini-powered assistant.',
    features: ['Class schedules and assignment deadlines', 'Semester notes with file uploads and downloads', 'Academic announcements and student profiles', 'Gemini-powered chat assistant', 'Semester and student administration'],
    architecture: ['Flutter / Dart', 'Firebase Authentication / Cloud Firestore / Cloud Storage', 'Firebase Cloud Messaging', 'Gemini API', 'Provider / GetX'],
    challenge:
      'Making academic coordination easier without turning the app into a heavy admin system.',
    outcome:
      'A schedule and classroom utility app that helps organize academic routines in one place.',
    category: 'Education App',
    status: 'Public Repo',
    tech: [<SiFlutter key="flutter" />, <SiFirebase key="firebase" />],
    highlights: ['Class schedule', 'Assignments', 'Notes'],
    repoUrl: 'https://github.com/Azrul16/Schedula',
    accent: 'rgba(152, 212, 120, 0.18)',
  },
  {
    title: 'Meal Monkey',
    ...androidMockups['Meal-Monkey'],
    repoName: 'Azrul16/Meal-Monkey',
    description:
      'A Flutter food ordering experience focused on menu browsing, cart flow, and mobile-first ordering interactions.',
    details:
      'A Flutter food-ordering app with Firebase-backed menus, a persistent cart, cash-on-delivery checkout, and an admin dashboard for menu and order management.',
    features: ['Food search, categories, sorting, and dish details', 'Persistent cart with quantity controls', 'Delivery address and cash-on-delivery checkout', 'Order status updates and inbox messages', 'Admin menu management and order tracking'],
    architecture: ['Flutter / Dart', 'Firebase Authentication', 'Cloud Firestore', 'Customer and admin interfaces'],
    challenge:
      'Keeping the ordering journey simple while still supporting the screens users expect from a food app.',
    outcome:
      'A focused food ordering mobile build with a clear product structure and reusable Flutter UI patterns.',
    category: 'Food App',
    status: 'GitHub Project',
    tech: [<SiFlutter key="flutter" />, <SiFirebase key="firebase" />],
    highlights: ['Flutter UI', 'Ordering flow', 'Mobile product'],
    repoUrl: 'https://github.com/Azrul16/Meal-Monkey',
    accent: 'rgba(255, 159, 113, 0.2)',
  },
  {
    title: 'Med Reminder',
    ...androidMockups['med-reminder'],
    repoName: 'Azrul16/med-reminder',
    description:
      'A Flutter reminder app for medicine schedules and health-oriented daily routines.',
    details:
      'A Flutter medicine organizer with scheduled dose notifications, local medicine storage, Firebase sign-in, an openFDA medicine browser, and a BMI calculator.',
    features: ['Medicine name, dosage, type, and reminder intervals', 'Scheduled local notifications with per-medicine controls', 'On-device medicine storage', 'Medicine search and openFDA drug-label information', 'BMI calculator and Firebase account access'],
    architecture: ['Flutter / Dart', 'Firebase Authentication', 'SharedPreferences', 'Flutter Local Notifications / timezone scheduling', 'Provider / RxDart', 'openFDA API'],
    challenge: 'Making reminder setup easy enough for everyday use.',
    outcome:
      'A mobile health utility that demonstrates practical Flutter app structure and user-centered reminders.',
    category: 'Health Utility',
    status: 'Public Repo',
    tech: [<SiFlutter key="flutter" />],
    highlights: ['Medicine reminders', 'Health utility', 'Flutter app'],
    repoUrl: 'https://github.com/Azrul16/med-reminder',
    accent: 'rgba(255, 120, 133, 0.22)',
  },
  {
    title: 'QuizzApp',
    repoName: 'Azrul16/QuizzApp',
    description:
      'A quiz solving app built with Flutter for structured practice and interactive learning.',
    details:
      'QuizzApp focuses on quiz interaction, question flow, and learning-oriented mobile screens.',
    challenge:
      'Keeping quiz interaction simple while preserving a clear practice flow.',
    outcome:
      'A compact learning utility that supports quiz practice through a Flutter mobile interface.',
    category: 'Learning App',
    status: 'Public Repo',
    tech: [<SiFlutter key="flutter" />, <RiFirebaseFill key="firestore" />],
    highlights: ['Quiz flow', 'Learning utility', 'Flutter UI'],
    repoUrl: 'https://github.com/Azrul16/QuizzApp',
    accent: 'rgba(255, 204, 87, 0.2)',
  },
  {
    title: 'Hospital Management',
    ...androidMockups['hospital-management'],
    repoName: 'Azrul16/hospital-management',
    description:
      'MedEase connects patients, doctors, and administrators through appointment requests, prescriptions, and healthcare profiles.',
    details:
      'A Flutter and Firebase hospital management app with patient doctor discovery, appointment tracking, doctor approval and prescription workflows, and administrative oversight. The Android device mockups showcase the repository\'s sample UI screens.',
    challenge:
      'Organizing healthcare information clearly across multiple user and data flows.',
    outcome:
      'A domain-focused Flutter project that shows comfort with more complex app structures.',
    category: 'Healthcare App',
    status: 'Public Repo',
    tech: [<SiFlutter key="flutter" />, <SiFirebase key="firebase" />],
    technologyLabels: ['Flutter', 'Firebase', 'Dart', 'Cloud Firestore'],
    highlights: ['Patient and doctor roles', 'Appointment requests', 'Prescription workflows'],
    features: [
      'Patient, doctor, and administrator workflows',
      'Doctor directory and appointment requests with symptoms',
      'Appointment acceptance, rejection, and status tracking',
      'Doctor prescription management and appointment details',
      'Patient and doctor profiles',
      'Administrative doctor, patient, appointment, and prescription views',
    ],
    architecture: [
      'Flutter / Dart / Material UI',
      'Firebase Authentication',
      'Cloud Firestore streams for doctors and appointments',
      'Shared Firebase service with patient and doctor models',
      'Separate patient, doctor, and administrator screen modules',
    ],
    repoUrl: 'https://github.com/Azrul16/hospital-management',
    accent: 'rgba(85, 204, 168, 0.18)',
  },
  {
    title: 'YouTube Video Downloader',
    repoName: 'Azrul16/youtube-video-downloader',
    description:
      'A Python utility for downloading YouTube videos through a focused scripting workflow.',
    details:
      'YouTube Video Downloader demonstrates Python automation and practical command/tool building.',
    challenge:
      'Wrapping media download logic in a straightforward utility workflow.',
    outcome:
      'A small but practical Python tool that shows scripting and automation capability.',
    category: 'Python Utility',
    status: 'Public Repo',
    tech: [<SiPython key="python" />],
    highlights: ['Python script', 'Automation', 'Media utility'],
    repoUrl: 'https://github.com/Azrul16/youtube-video-downloader',
    accent: 'rgba(122, 140, 255, 0.18)',
  },
  {
    title: 'File Sharing Server',
    repoName: 'Azrul16/file_shareing_server_using_python-flask',
    description:
      'A Flask-based file sharing server for moving files through a lightweight web interface.',
    details:
      'This project shows backend fundamentals with Flask, routing, uploads, and a practical local sharing use case.',
    challenge:
      'Keeping file upload and sharing flows simple while maintaining clear server behavior.',
    outcome:
      'A Python backend utility that demonstrates server-side implementation and web workflow basics.',
    category: 'Backend Tool',
    status: 'Flask Project',
    tech: [<SiPython key="python" />],
    highlights: ['Flask server', 'File sharing', 'Backend basics'],
    repoUrl:
      'https://github.com/Azrul16/file_shareing_server_using_python-flask',
    accent: 'rgba(121, 194, 255, 0.2)',
  },
  {
    title: 'HTTP Proxy Server',
    repoName: 'Azrul16/HTTP_proxy_server',
    description:
      'A Python networking project that implements proxy server behavior and request handling.',
    details:
      'HTTP Proxy Server is a networking-focused project that fits the cybersecurity and systems side of the portfolio.',
    challenge:
      'Handling network requests in a way that is clear enough to study and extend.',
    outcome:
      'A systems-oriented Python project showing networking fundamentals and server-side thinking.',
    category: 'Networking',
    status: 'Public Repo',
    tech: [<SiPython key="python" />],
    highlights: ['Proxy logic', 'Networking', 'Python server'],
    repoUrl: 'https://github.com/Azrul16/HTTP_proxy_server',
    accent: 'rgba(85, 204, 168, 0.18)',
  },
  {
    title: 'SSLCOMMERZ Payment Integration',
    repoName: 'Azrul16/sslc-backend',
    description:
      'A Node.js payment integration connecting Flutter checkout to SSLCOMMERZ.',
    details:
      'This work focused on connecting payment gateway logic across frontend and backend while keeping checkout states easier to understand.',
    challenge: 'Coordinating frontend and backend payment logic cleanly.',
    outcome:
      'A checkout flow prototype built around clearer transaction handling and frontend/backend coordination.',
    problem:
      'Payment flows need careful coordination between frontend checkout states and backend gateway communication so transactions remain understandable and reliable.',
    role: 'Implemented the backend integration direction and connected the payment flow with Flutter/Web or desktop-facing checkout behavior.',
    features: [
      'Payment gateway integration',
      'Checkout request handling',
      'Transaction-oriented backend flow',
      'Frontend/backend coordination',
    ],
    architecture: [
      'Node.js',
      'JavaScript',
      'Flutter',
      'SSLCOMMERZ gateway flow',
    ],
    learning:
      'Improved my understanding of payment integrations where errors, redirects, and transaction state matter as much as the happy path.',
    category: 'Integration',
    status: 'Integration Demo',
    tech: [
      <SiNodedotjs key="nodejs" />,
      <SiFlutter key="flutter" />,
      <SiJavascript key="javascript" />,
    ],
    highlights: ['Gateway integration', 'Checkout logic', 'Payment flow'],
    repoUrl: 'https://github.com/Azrul16/sslc-backend',
    accent: 'rgba(122, 140, 255, 0.18)',
  },
  {
    title: 'Online Food Website',
    repoName: 'Azrul16/onlinefood',
    description: 'A responsive food browsing website with a live preview.',
    details:
      'Online Food is a web project for presenting food items and ordering-oriented content with a public Vercel deployment.',
    challenge:
      'Creating a polished food site experience that feels usable and easy to scan.',
    outcome:
      'A live food website that visitors can open directly from the portfolio.',
    problem:
      'Restaurant and food-ordering sites need a fast, visual browsing experience that helps visitors move from menu discovery to action.',
    role: 'Built the web experience, responsive layout, public deployment, and GitHub project presentation.',
    features: [
      'Responsive food browsing pages',
      'Hosted live demo',
      'Restaurant-style visual presentation',
      'Menu-oriented user flow',
    ],
    architecture: [
      'JavaScript',
      'Responsive web UI',
      'Vercel deployment',
      'Static frontend structure',
    ],
    learning:
      'Improved my deployment workflow and practiced turning a simple web concept into something visitors can open and evaluate immediately.',
    category: 'Web Project',
    status: 'Live Demo',
    tech: [<SiJavascript key="javascript" />],
    highlights: ['Hosted on Vercel', 'Food browsing', 'Responsive web'],
    repoUrl: 'https://github.com/Azrul16/onlinefood',
    demoUrl: 'https://onlinefood-rho.vercel.app',
    accent: 'rgba(255, 159, 113, 0.2)',
  },
  {
    title: 'Object Detection App',
    repoName: 'Azrul16/object-detection-app',
    description:
      'A computer vision app project exploring object detection through a Flutter/mobile implementation path.',
    details:
      'Object Detection App adds AI and computer vision flavor to the portfolio through a mobile-facing project.',
    challenge:
      'Connecting detection logic with an interface that users can understand quickly.',
    outcome:
      'A practical AI app concept that shows experimentation with vision features and mobile UI.',
    category: 'Computer Vision',
    status: 'Public Repo',
    tech: [<SiFlutter key="flutter" />, <SiCplusplus key="cplusplus" />],
    highlights: ['Object detection', 'AI app', 'Mobile UI'],
    repoUrl: 'https://github.com/Azrul16/object-detection-app',
    accent: 'rgba(255, 204, 87, 0.2)',
  },
];

export const filterOptions = [
  'All',
  'Flutter',
  'Packages',
  'AI',
  'Backend',
  'Tools',
];
export const caseStudyTitles = [
  // Recruiter-facing priority: engineering depth, distinctiveness, and demo evidence.
  'ResearchLens AI',
  'Mama Bus Koi',
  'Syncora',
  'ROV Commander',
  'DevDroid Android Code Editor',
  'Boredom Buster',
  'Schedula',
  'Researcher Web Browser',
  'Hospital Management',
  'Meal Monkey',
  'Med Reminder',
  'GJSWA Website',
];

export const getTechLabels = (project) => {
  const labelMap = {
    cplusplus: 'C++',
    firebase: 'Firebase',
    firestore: 'Firestore',
    flutter: 'Flutter',
    javascript: 'JavaScript',
    nodejs: 'Node.js',
    nextjs: 'Next.js',
    python: 'Python',
  };

  return (
    project.technologyLabels ||
    project.tech.map((icon) => labelMap[icon.key] || icon.key).filter(Boolean)
  );
};

export const projectMatchesFilter = (project, activeFilter) => {
  if (activeFilter === 'All') {
    return true;
  }

  const searchText = [
    project.title,
    project.repoName,
    project.category,
    project.status,
    project.description,
    project.details,
    ...project.highlights,
    ...getTechLabels(project),
  ]
    .join(' ')
    .toLowerCase();

  const filterMatchers = {
    Flutter: () => searchText.includes('flutter'),
    Packages: () =>
      /package|component/i.test(`${project.category} ${project.status}`),
    AI: () =>
      /\bai\b/.test(searchText) ||
      searchText.includes('whisper') ||
      searchText.includes('detection'),
    Backend: () =>
      searchText.includes('backend') ||
      searchText.includes('server') ||
      searchText.includes('node') ||
      searchText.includes('flask'),
    Tools: () =>
      searchText.includes('tool') ||
      searchText.includes('editor') ||
      searchText.includes('browser') ||
      searchText.includes('utility'),
  };

  return filterMatchers[activeFilter]?.() || false;
};
