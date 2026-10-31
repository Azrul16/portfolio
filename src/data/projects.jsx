import {
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
    evidenceUrl: "https://github.com/Azrul16/boredom-buster/commit/a2615471a40dd086d24f4df8cf9295532ecb196c",
    role: "Contributed additional games, responsive layouts, and offline support.",
    projectStatus: "Offline use requires an initial online download. Scores stay in the same browser and origin; cloud sync and backup import are not available.",
    outcome: "A browser game collection with 20 games, local scores, difficulty settings, and offline caching.",
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
    evidenceUrl: "https://github.com/Azrul16/researchlens-ai-rag-assistant/commit/4bb2e6e6b7ce0f9454bb92034e495adc3c7bff48",
    projectStatus: "MVP for text-based PDFs. OCR, multi-user authentication, distributed workers, and streaming are outside the current scope. AI generation requires a provider key; citations still need human review.",
    role: "Contributed the research workspace implementation, including backend, frontend, migrations, and CI configuration.",
    challenge: 'Connecting questions about academic PDFs to relevant source passages and page citations.',
    approach: 'Retrieve passages with local Sentence Transformers embeddings and persistent FAISS indexes, then use generation adapters to support cited research chat.',
    outcome: 'A research workspace with a PDF library, semantic search, cited answers, structured analysis, and multi-paper comparison.',
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
    evidenceUrl: "https://github.com/Azrul16/DevDroid-android-code-editor/commit/1ade7e50d7939dce41ec5c77805c89aeec697bb6",
    approach: 'Combine a tabbed Flutter editor and project explorer with native Android integration for Termux commands and SSH-backed terminal sessions.',
    projectStatus: "Under active development. Commands require Termux and installed runtimes; interactive terminal sessions require SSH setup. Preview images are UI mockups.",
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
    role: "Contributed Flutter UI and native Android integration changes.",
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
    category: 'Developer Tool',
    status: 'Featured Repo',
    tech: [<SiFlutter key="flutter" />],
    highlights: ['Code editor', 'Mobile utility', 'Developer workflow'],
    repoUrl: 'https://github.com/Azrul16/DevDroid-android-code-editor',
    accent: 'rgba(122, 140, 255, 0.2)',
  },
  {
    title: 'Lecturer App',
    evidenceUrl: "https://github.com/Azrul16/Lecturer-AI_Powered_Study_App/commit/597ad8d1afc69a7426ed741fb1f85dc537eac56f",
    projectStatus: "Prototype. The README includes a broad feature vision; complete transcription, summarization, OCR, and quiz workflows have not been validated in this review.",
    repoName: 'Azrul16/Lecturer-AI_Powered_Study_App',
    description:
      'A study app concept for summaries, transcription, and revision quizzes.',
    details: "A study-app prototype exploring accounts and audio-based study workflows. The repository also describes planned AI-assisted study features; those descriptions do not establish completed functionality.",
    challenge:
      'Keeping AI features practical and helpful inside real student workflows.',
    outcome: "A Flutter study-app prototype with account and audio-related implementation.",
    problem:
      'Students often have long notes, lectures, and study material but need faster ways to summarize, review, and test themselves before exams.',
    role: "Contributed Flutter application code, login screens, and microphone-related functionality.",
    features: ["Flutter study interface", "Account and login screens", "Audio and microphone-related workflows"],
    architecture: ["Flutter / Dart", "Firebase authentication dependencies", "Audio recording and speech-to-text dependencies"],
    category: 'AI Study Tool',
    status: 'Featured Concept',
    tech: [<SiFlutter key="flutter" />, <SiFirebase key="firebase" />],
    highlights: ["Study prototype", "Audio workflows", "Flutter"],
    repoUrl: 'https://github.com/Azrul16/Lecturer-AI_Powered_Study_App',
    accent: 'rgba(121, 194, 255, 0.2)',
  },
  {
    title: 'Smart Home Mobile App',
    evidenceUrl: "https://github.com/Azrul16/Smart-Home-Mobile-app/commit/3d8a64763eac755126ca10f9697743737c523b76",
    technologyLabels: ["Flutter", "Dart", "GetX"],
    projectStatus: "UI prototype. Live device control and Firebase integration are not established by the reviewed sources.",
    role: "Contributed smart-home interface and asset changes.",
    repoName: 'Azrul16/Smart-Home-Mobile-app',
    description: "A Flutter smart-home interface prototype.",
    details: "A mobile interface study for smart-home controls. The dependency manifest includes GetX, charts, and local preferences.",
    challenge:
      'Turning device control into an interface that feels clear and approachable.',
    outcome: "A Flutter UI prototype for smart-home screens.",
    category: 'IoT App',
    status: "UI Prototype",
    tech: [<SiFlutter key="flutter" />],
    highlights: ["Smart home UI", "Charts", "Local preferences"],
    repoUrl: 'https://github.com/Azrul16/Smart-Home-Mobile-app',
    accent: 'rgba(152, 212, 120, 0.18)',
  },
  {
    title: 'BanglaSpeech2Text',
    projectStatus: "Upstream attribution: shhossain/BanglaSpeech2Text. Any personal modifications need a specific diff before being presented as contributions.",
    repoName: 'Azrul16/BanglaSpeech2Text',
    description: "A fork of shhossain/BanglaSpeech2Text, an offline Bangla transcription package.",
    details: "The upstream project provides a Whisper-based Bangla speech-to-text package. This repository is a fork; package and model authorship belong to the upstream project.",
    challenge:
      'Making speech recognition useful for Bangla while keeping the package practical for offline use.',
    outcome: "A fork of the existing upstream transcription package; no original package or model-training contribution is claimed.",
    problem:
      'Bangla speech-to-text support is harder to access offline, especially for developers who want language-focused transcription tools.',
    role: "Maintains a fork of the upstream repository. No commits matched the Azrul16 author search during this review.",
    features: ["Upstream offline Bangla transcription", "Upstream Whisper model integration"],
    architecture: ["Python", "Upstream Whisper-based transcription pipeline"],
    category: 'AI Package',
    status: "Fork",
    tech: [<SiPython key="python" />],
    highlights: ["Upstream fork", "Bangla STT", "Python"],
    repoUrl: 'https://github.com/Azrul16/BanglaSpeech2Text',
    accent: 'rgba(121, 194, 255, 0.2)',
  },
  {
    title: 'Notisaver Flutter App',
    evidenceUrl: "https://github.com/Azrul16/Notisaver-Flutter-app/commit/e41a4277096ad9059165e7bb68f85375536b44c9",
    projectStatus: "Android-only prototype. Notification access and vendor-specific background permissions are required; data is local by default.",
    role: "Contributed Android notification-listener integration and application logic.",
    repoName: 'Azrul16/Notisaver-Flutter-app',
    description:
      'A Flutter utility app focused on saving and reviewing notifications in a simple mobile interface.',
    details:
      'Notisaver is a mobile utility project that demonstrates practical Android-focused workflows and notification-oriented UX.',
    challenge:
      'Designing a utility app that keeps saved information organized without adding friction.',
    outcome: "An Android notification-history prototype with local storage and settings.",
    category: 'Utility App',
    status: 'Public Repo',
    tech: [<SiFlutter key="flutter" />],
    highlights: ['Notification utility', 'Flutter UI', 'Mobile workflow'],
    repoUrl: 'https://github.com/Azrul16/Notisaver-Flutter-app',
    accent: 'rgba(85, 204, 168, 0.18)',
  },
  {
    title: 'AnySQL',
    evidenceUrl: "https://github.com/Azrul16/anysql/commit/41443630b81cdddabea852563a7a90681ca8d5e3",
    projectStatus: "Direct database access is intended for trusted environments. Mobile applications should use a secure backend rather than embed database credentials.",
    role: "Contributed database drivers, configuration generation, and the interactive setup command.",
    repoName: 'Azrul16/anysql',
    description:
      'A Flutter/Dart package-style project for working with SQL-oriented app data through a reusable utility layer.',
    details:
      'AnySQL adds package-focused work to the portfolio, showing reusable Dart development beyond full app screens.',
    challenge:
      'Designing a data utility that stays simple enough to reuse across different Flutter projects.',
    outcome: "A Dart database package with a Firebase-style query API, direct drivers, and backend proxy connections.",
    category: 'Flutter Package',
    status: 'Package Repo',
    tech: [<SiFlutter key="flutter" />],
    highlights: ['Dart utility', 'SQL workflow', 'Reusable package'],
    repoUrl: 'https://github.com/Azrul16/anysql',
    accent: 'rgba(122, 140, 255, 0.18)',
  },
  {
    title: 'Form Flutter',
    evidenceUrl: "https://github.com/Azrul16/form_flutter/commit/f3e3c528339089895a86530ccaa9da62d3c95317",
    role: "Contributed form builders, field catalogs, widgets, examples, and package tests.",
    repoName: 'Azrul16/form_flutter',
    description:
      'A Flutter form package/demo project focused on reusable form fields and cleaner input workflows.',
    details:
      'Form Flutter demonstrates reusable UI and form-handling patterns that can be carried into larger Flutter apps.',
    challenge:
      'Making form UI reusable while keeping validation and input structure easy to follow.',
    outcome: "A reusable Flutter form package with controllers, field widgets, validation, and serialization support.",
    category: 'Flutter Package',
    status: 'Package Repo',
    tech: [<SiFlutter key="flutter" />],
    highlights: ['Reusable forms', 'Input UI', 'Flutter patterns'],
    repoUrl: 'https://github.com/Azrul16/form_flutter',
    accent: 'rgba(121, 194, 255, 0.2)',
  },
  {
    title: 'Form Validator',
    evidenceUrl: "https://github.com/Azrul16/form_validator/commit/94642369934d9fb8a173405bc035baad41c910a0",
    role: "Contributed validation package code and examples.",
    repoName: 'Azrul16/form_validator',
    description:
      'A Dart/Flutter validation utility for keeping form input checks clean and reusable.',
    details:
      'Form Validator complements the form UI work with validation-focused logic that can be reused across Flutter projects.',
    challenge:
      'Separating validation rules from UI so forms remain easier to maintain.',
    outcome: "Composable field validators and a reusable password input widget for Flutter.",
    category: 'Flutter Package',
    status: 'Package Repo',
    tech: [<SiFlutter key="flutter" />],
    highlights: ['Validation rules', 'Reusable logic', 'Dart utility'],
    repoUrl: 'https://github.com/Azrul16/form_validator',
    accent: 'rgba(85, 204, 168, 0.18)',
  },
  {
    title: 'Animated Status Card',
    evidenceUrl: "https://github.com/Azrul16/animated_status_card/commit/0b4b88cda968e4d09cf691c13e8cbf4db4be2bf7",
    role: "Contributed package release preparation, metadata, and changelog changes.",
    repoName: 'Azrul16/animated_status_card',
    description:
      'A Flutter UI component project for animated status cards and polished state presentation.',
    details:
      'Animated Status Card is a component-focused repo that highlights UI animation and reusable Flutter widget thinking.',
    challenge:
      'Creating animation that adds clarity without making the component feel heavy.',
    outcome: "A Flutter package for configurable animated status-card widgets.",
    category: 'Flutter Component',
    status: 'Package Repo',
    tech: [<SiFlutter key="flutter" />],
    highlights: ['Animated widget', 'Status UI', 'Reusable component'],
    repoUrl: 'https://github.com/Azrul16/animated_status_card',
    accent: 'rgba(255, 204, 87, 0.2)',
  },
  {
    title: 'OneSignal Push Notification',
    evidenceUrl: "https://github.com/Azrul16/push-notification-flutter-using-OneSignal/commit/50b662335cca881ffae4f366cbc8d2af9e1dc00b",
    projectStatus: "Practice integration. Production REST credentials must stay on a trusted backend, rather than in the Flutter client.",
    role: "Contributed changes to the Flutter notification example.",
    repoName: 'Azrul16/push-notification-flutter-using-OneSignal',
    description:
      'A Flutter push notification implementation example using OneSignal integration.',
    details:
      'This repo shows notification integration work, useful for demonstrating mobile app infrastructure beyond UI.',
    challenge:
      'Connecting push notification setup with a Flutter app in a clear and reproducible way.',
    outcome: "A practice app that initializes OneSignal and sends notification requests.",
    category: 'Flutter Integration',
    status: 'Public Repo',
    tech: [<SiFlutter key="flutter" />],
    highlights: ['Push notifications', 'OneSignal', 'Flutter setup'],
    repoUrl:
      'https://github.com/Azrul16/push-notification-flutter-using-OneSignal',
    accent: 'rgba(255, 120, 133, 0.22)',
  },
  {
    title: 'Researcher Web Browser',
    evidenceUrl: "https://github.com/Azrul16/Researcher-WebBrowser/commit/11e4acd9e740ff79732888b45c4bf0faabe17db8",
    projectStatus: "AI functionality requires Groq access through a backend proxy or trusted local credential storage. Browser screenshots use a separate demo profile.",
    role: "Contributed the desktop browser, assistant integration, bookmarks, history, and session-management implementation.",
    approach: 'Use PyQt6 and Qt WebEngine for tabbed browsing and saved sessions, with a floating assistant and backend proxy or OS credential-store access to Groq.',
    repoName: 'Azrul16/Researcher-WebBrowser',
    description:
      'A desktop academic browser with Google Scholar search, saved research sources, and a floating AI assistant.',
    details:
      'Built with PyQt6 and Qt WebEngine, Researcher combines tabbed paper browsing, bookmarks, history, and session restore. Its AI assistant can search Scholar, summarize pages, and act on browser tabs, with backend proxy or OS credential-store access to Groq.',
    challenge:
      'Creating a focused browsing workflow that supports research tasks without overcomplicating the tool.',
    outcome:
      'A desktop research browser combining Scholar search, bookmarks, browsing history, session restore, and an AI assistant.',
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
    evidenceUrl: "https://github.com/Azrul16/GJSWA-website/commit/6e8522132e66538aba0a2444b576b73e5a1a230e",
    projectStatus: "Firebase and Cloudinary configuration are required. Portfolio screenshots were captured locally without live Firebase content.",
    outcome: "An association website with member profiles, district pages, and publishing flows.",
    role: "Contributed story-publishing behavior, home-page code, and styles.",
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
    evidenceUrl: "https://github.com/Azrul16/Schedula/commit/ee56ef21d2ca9e30422ee3d644f68abd0e9cfcaa",
    projectStatus: "Requires Firebase configuration and a Gemini key for AI chat. Portfolio previews use sample-content mockups; they are not proof of a live deployment.",
    role: "Contributed account, login, application startup, and schedule-screen changes.",
    approach: 'Organize academic workflows in Flutter with Firebase authentication, Firestore data, Cloud Storage files, messaging, and a Gemini-powered assistant.',
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
    evidenceUrl: "https://github.com/Azrul16/Meal-Monkey/commit/9e209a093fa75daee859f287f014cd084a47a472",
    projectStatus: "Checkout uses cash on delivery; no integrated payment gateway is established. Google and Facebook login flows are not configured. Included Firebase configuration targets Android.",
    role: "Contributed customer screens, administration screens, and Firebase application setup.",
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
    outcome: "A Flutter food-ordering app with menu browsing, cart, order, and administration workflows.",
    category: 'Food App',
    status: 'GitHub Project',
    tech: [<SiFlutter key="flutter" />, <SiFirebase key="firebase" />],
    highlights: ['Flutter UI', 'Ordering flow', 'Mobile product'],
    repoUrl: 'https://github.com/Azrul16/Meal-Monkey',
    accent: 'rgba(255, 159, 113, 0.2)',
  },
  {
    title: 'Med Reminder',
    evidenceUrl: "https://github.com/Azrul16/med-reminder/commit/11c5cd22f9b600964df76712c04ba07f568cba1f",
    projectStatus: "Medicine entries do not sync between devices. Reminder delivery depends on device permissions and background restrictions; desktop Firebase options are unconfigured.",
    role: "Contributed the Flutter medicine-reminder application implementation.",
    ...androidMockups['med-reminder'],
    repoName: 'Azrul16/med-reminder',
    description:
      'A Flutter reminder app for medicine schedules and health-oriented daily routines.',
    details:
      'A Flutter medicine organizer with scheduled dose notifications, local medicine storage, Firebase sign-in, an openFDA medicine browser, and a BMI calculator.',
    features: ['Medicine name, dosage, type, and reminder intervals', 'Scheduled local notifications with per-medicine controls', 'On-device medicine storage', 'Medicine search and openFDA drug-label information', 'BMI calculator and Firebase account access'],
    architecture: ['Flutter / Dart', 'Firebase Authentication', 'SharedPreferences', 'Flutter Local Notifications / timezone scheduling', 'Provider / RxDart', 'openFDA API'],
    challenge: 'Making reminder setup easy enough for everyday use.',
    outcome: "A medicine organizer with local entries, reminder scheduling, authentication, and a BMI calculator.",
    category: 'Health Utility',
    status: 'Public Repo',
    tech: [<SiFlutter key="flutter" />],
    highlights: ['Medicine reminders', 'Health utility', 'Flutter app'],
    repoUrl: 'https://github.com/Azrul16/med-reminder',
    accent: 'rgba(255, 120, 133, 0.22)',
  },
  {
    title: 'QuizzApp',
    evidenceUrl: "https://github.com/Azrul16/QuizzApp/commit/cc5532c91b143d91b8601082f0fc4f18136278bd",
    projectStatus: "Requires Firebase setup and question data. No production usage or learning-outcome measurements were verified.",
    role: "Contributed quiz-category and administrator question-list changes.",
    repoName: 'Azrul16/QuizzApp',
    description:
      'A quiz solving app built with Flutter for structured practice and interactive learning.',
    details:
      'QuizzApp focuses on quiz interaction, question flow, and learning-oriented mobile screens.',
    challenge:
      'Keeping quiz interaction simple while preserving a clear practice flow.',
    outcome: "A Firestore-backed quiz app with timed questions and a score screen.",
    category: 'Learning App',
    status: 'Public Repo',
    tech: [<SiFlutter key="flutter" />, <RiFirebaseFill key="firestore" />],
    highlights: ['Quiz flow', 'Learning utility', 'Flutter UI'],
    repoUrl: 'https://github.com/Azrul16/QuizzApp',
    accent: 'rgba(255, 204, 87, 0.2)',
  },
  {
    title: 'Hospital Management',
    evidenceUrl: "https://github.com/Azrul16/hospital-management/commit/0d11a89a0a482f51c2d0f3bc9e6ed8420dcfdbee",
    projectStatus: "Requires locally supplied Firebase configuration. Clinical deployment and real-world hospital use were not verified.",
    role: "Contributed Flutter project organization, account screens, and patient and doctor screens.",
    ...androidMockups['hospital-management'],
    repoName: 'Azrul16/hospital-management',
    description:
      'MedEase connects patients, doctors, and administrators through appointment requests, prescriptions, and healthcare profiles.',
    details:
      'A Flutter and Firebase hospital management app with patient doctor discovery, appointment tracking, doctor approval and prescription workflows, and administrative oversight. The Android device mockups showcase the repository\'s sample UI screens.',
    challenge:
      'Organizing healthcare information clearly across multiple user and data flows.',
    outcome: "A Flutter hospital-management app with patient, doctor, and administrator interfaces.",
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
    evidenceUrl: "https://github.com/Azrul16/youtube-video-downloader/commit/f5378afeaef0da9a194cdbdbdec45d93e79104e7",
    projectStatus: "Requires runtime dependencies including ffmpeg for relevant media operations. Live download compatibility was not tested.",
    role: "Contributed changes to the Flask download application.",
    repoName: 'Azrul16/youtube-video-downloader',
    description:
      'A Python utility for downloading YouTube videos through a focused scripting workflow.',
    details:
      'YouTube Video Downloader demonstrates Python automation and practical command/tool building.',
    challenge:
      'Wrapping media download logic in a straightforward utility workflow.',
    outcome: "A Flask and yt-dlp web app with metadata lookup, background downloads, progress polling, and file delivery.",
    category: 'Python Utility',
    status: 'Public Repo',
    tech: [<SiPython key="python" />],
    highlights: ['Python script', 'Automation', 'Media utility'],
    repoUrl: 'https://github.com/Azrul16/youtube-video-downloader',
    accent: 'rgba(122, 140, 255, 0.18)',
  },
  {
    title: 'File Sharing Server',
    evidenceUrl: "https://github.com/Azrul16/file_shareing_server_using_python-flask/commit/5a0e1cfc2dc542795390333b587421d5b16d50dc",
    projectStatus: "Intended for trusted local networks. Authentication, upload validation, size limits, and safer filename handling are needed before public exposure.",
    role: "Contributed Flask chat and file-sharing server code and browser UI.",
    repoName: 'Azrul16/file_shareing_server_using_python-flask',
    description:
      'A Flask-based file sharing server for moving files through a lightweight web interface.',
    details:
      'This project shows backend fundamentals with Flask, routing, uploads, and a practical local sharing use case.',
    challenge:
      'Keeping file upload and sharing flows simple while maintaining clear server behavior.',
    outcome: "A LAN chat and file-sharing app using Flask-SocketIO and browser uploads.",
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
    evidenceUrl: "https://github.com/Azrul16/HTTP_proxy_server/commit/139bd77a4c07e25fa9b27d8b95eb2aef470a438b",
    projectStatus: "Learning project. HTTPS tunneling, caching, authentication, and production-grade request parsing are not implemented.",
    role: "Contributed Python proxy, test client, and sample response files.",
    repoName: 'Azrul16/HTTP_proxy_server',
    description:
      'A Python networking project that implements proxy server behavior and request handling.',
    details:
      'HTTP Proxy Server is a networking-focused project that fits the cybersecurity and systems side of the portfolio.',
    challenge:
      'Handling network requests in a way that is clear enough to study and extend.',
    outcome: "A multithreaded socket-based proxy that forwards plain HTTP traffic.",
    category: 'Networking',
    status: 'Public Repo',
    tech: [<SiPython key="python" />],
    highlights: ['Proxy logic', 'Networking', 'Python server'],
    repoUrl: 'https://github.com/Azrul16/HTTP_proxy_server',
    accent: 'rgba(85, 204, 168, 0.18)',
  },
  {
    title: 'SSLCOMMERZ Payment Integration',
    evidenceUrl: "https://github.com/Azrul16/sslc-backend/commit/507c73f58dbbb866e23f5e6b08208797ec055a96",
    technologyLabels: ["Node.js", "JavaScript"],
    projectStatus: "Sandbox only. Transaction status is stored in memory, and the IPN handler trusts the submitted status without gateway validation. This is not a verified production payment system.",
    repoName: 'Azrul16/sslc-backend',
    description: "A Node.js sandbox example for SSLCOMMERZ payment initiation and status callbacks.",
    details: "An Express server sends sandbox payment-initiation requests and exposes callback and status routes. The reviewed repository does not include a Flutter checkout client.",
    challenge: 'Coordinating sandbox payment initiation, callbacks, and status lookup.',
    outcome: "A sandbox payment-server prototype with initiation, callback handling, and in-memory transaction status.",
    problem:
      'Payment flows need careful coordination between frontend checkout states and backend gateway communication so transactions remain understandable and reliable.',
    role: "Contributed changes to the Node.js payment server.",
    features: ["Sandbox payment initiation", "IPN callback endpoint", "In-memory payment-status lookup", "Success, failure, and cancellation pages"],
    architecture: ["Node.js / Express", "Axios", "SSLCOMMERZ sandbox API"],
    category: 'Integration',
    status: 'Integration Demo',
    tech: [
      <SiNodedotjs key="nodejs" />,
      <SiJavascript key="javascript" />,
    ],
    highlights: ["Sandbox payments", "Express API", "Callback handling"],
    repoUrl: 'https://github.com/Azrul16/sslc-backend',
    accent: 'rgba(122, 140, 255, 0.18)',
  },
  {
    title: 'Online Food Website',
    evidenceUrl: "https://github.com/Azrul16/onlinefood/commit/d88b1afde2842ed6a45c2680416d13c6a79a32da",
    technologyLabels: ["PHP", "MySQL", "JavaScript"],
    projectStatus: "Requires a PHP runtime and MySQL setup. A working hosted deployment has not been verified.",
    repoName: 'Azrul16/onlinefood',
    description: "A PHP food-ordering website with restaurant, menu, and order pages.",
    details: "The repository contains PHP pages, session-based cart handling, and MySQL order queries.",
    challenge:
      'Creating a polished food site experience that feels usable and easy to scan.',
    outcome: "A PHP/MySQL food-ordering codebase with account, cart, checkout, and administration pages.",
    problem:
      'Restaurant and food-ordering sites need a fast, visual browsing experience that helps visitors move from menu discovery to action.',
    role: "Recorded contributions include project-information updates; original application authorship is not established by those commits.",
    features: ["Restaurant and dish pages", "Session-based cart", "Account and checkout pages", "Administrator pages"],
    architecture: ["PHP", "MySQL / MySQLi", "HTML / CSS / JavaScript"],
    category: 'Web Project',
    status: "Public Repo",
    tech: [<SiJavascript key="javascript" />],
    highlights: ["PHP / MySQL", "Food ordering", "Session cart"],
    repoUrl: 'https://github.com/Azrul16/onlinefood',
    accent: 'rgba(255, 159, 113, 0.2)',
  },
  {
    title: 'Object Detection App',
    evidenceUrl: "https://github.com/Azrul16/object-detection-app/commit/2f92d4fb105fb97e2081dbd4657cf030accd9e35",
    projectStatus: "Prototype repository with sparse documentation. Detection accuracy, device support, and integrated end-to-end behavior were not verified.",
    role: "Contributed Flutter application code across the repository application folders.",
    repoName: 'Azrul16/object-detection-app',
    description:
      'A computer vision app project exploring object detection through a Flutter/mobile implementation path.',
    details:
      'Object Detection App adds AI and computer vision flavor to the portfolio through a mobile-facing project.',
    challenge:
      'Connecting detection logic with an interface that users can understand quickly.',
    outcome: "A collection of Flutter prototypes with camera, ML Kit object-detection, Bluetooth, and location dependencies.",
    category: 'Computer Vision',
    status: 'Public Repo',
    tech: [<SiFlutter key="flutter" />],
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
  'Mama Bus Koi',
  'DevDroid Android Code Editor',
  'Syncora',
  'ResearchLens AI',
  'ROV Commander',
  'Schedula',
  'Researcher Web Browser',
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
