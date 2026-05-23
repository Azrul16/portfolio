import React, { useEffect, useMemo, useState } from 'react';
import './Projects.css';
import { SiCplusplus, SiFirebase, SiFlutter, SiJavascript, SiNodedotjs, SiPython } from 'react-icons/si';
import { RiFirebaseFill } from 'react-icons/ri';
import { FaArrowRight, FaExternalLinkAlt, FaGithub, FaSearch, FaTimes } from 'react-icons/fa';
import { AnimatePresence, motion } from 'framer-motion';

const projectList = [
  {
    title: 'DevDroid Android Code Editor',
    repoName: 'Azrul16/DevDroid-android-code-editor',
    description: 'A Flutter-based Android code editor built for writing and managing code directly from a mobile device.',
    details: 'DevDroid is one of the strongest mobile utility projects in the repository list: a code editor experience shaped around developer workflows on Android.',
    challenge: 'Designing a compact coding environment that still feels usable on a small screen.',
    outcome: 'A practical developer tool concept that highlights Flutter UI structure, file-oriented workflows, and mobile productivity thinking.',
    problem: 'Mobile developers and learners often need a lightweight way to inspect and edit code when they are away from a desktop setup.',
    role: 'Solo developer responsible for product direction, Flutter UI structure, editor workflow, and repository implementation.',
    features: ['Mobile-first code editing flow', 'File-oriented workspace structure', 'Developer utility interface', 'Android-focused interaction patterns'],
    architecture: ['Flutter', 'Dart', 'Android build target', 'Reusable screen and widget structure'],
    learning: 'Improved my ability to design dense mobile interfaces where navigation, editing, and file context need to stay understandable on a small screen.',
    category: 'Developer Tool',
    status: 'Featured Repo',
    tech: [<SiFlutter key="flutter" />],
    highlights: ['Code editor', 'Mobile utility', 'Developer workflow'],
    repoUrl: 'https://github.com/Azrul16/DevDroid-android-code-editor',
    accent: 'rgba(122, 140, 255, 0.2)'
  },
  {
    title: 'Lecturer App',
    repoName: 'Azrul16/Lecturer-AI_Powered_Study_App',
    description: 'An AI-supported study assistant with summarization, transcription, and quiz features for more structured revision.',
    details: 'The product centers on making course material easier to revisit through note extraction, simplified study content, and interactive review loops.',
    challenge: 'Keeping AI features practical and helpful inside real student workflows.',
    outcome: 'A study tool that turns dense content into clearer revision experiences.',
    problem: 'Students often have long notes, lectures, and study material but need faster ways to summarize, review, and test themselves before exams.',
    role: 'Built the product concept, mobile app structure, AI-assisted study flows, and Firebase-backed feature direction.',
    features: ['AI summaries', 'Transcription-oriented study flow', 'Quiz and revision support', 'Student-friendly content organization'],
    architecture: ['Flutter', 'Dart', 'Firebase', 'AI-assisted content workflows'],
    learning: 'Learned how to shape AI features around real study habits instead of treating AI as a standalone gimmick.',
    category: 'AI Study Tool',
    status: 'Featured Concept',
    tech: [<SiFlutter key="flutter" />, <SiFirebase key="firebase" />],
    highlights: ['AI summaries', 'Revision support', 'Learning workflows'],
    repoUrl: 'https://github.com/Azrul16/Lecturer-AI_Powered_Study_App',
    accent: 'rgba(121, 194, 255, 0.2)'
  },
  {
    title: 'Smart Home Mobile App',
    repoName: 'Azrul16/Smart-Home-Mobile-app',
    description: 'A Flutter mobile app for controlling and monitoring smart home flows from a clean mobile interface.',
    details: 'Smart Home Mobile App shows IoT-oriented product thinking through a mobile control surface for connected home interactions.',
    challenge: 'Turning device control into an interface that feels clear and approachable.',
    outcome: 'A mobile-first smart home app concept that connects Flutter UI work with practical IoT use cases.',
    category: 'IoT App',
    status: 'Public Repo',
    tech: [<SiFlutter key="flutter" />, <SiFirebase key="firebase" />],
    highlights: ['Smart home UI', 'IoT workflow', 'Mobile controls'],
    repoUrl: 'https://github.com/Azrul16/Smart-Home-Mobile-app',
    accent: 'rgba(152, 212, 120, 0.18)'
  },
  {
    title: 'BanglaSpeech2Text',
    repoName: 'Azrul16/BanglaSpeech2Text',
    description: 'An offline Bangla speech-to-text package fine-tuned on Whisper for Bangla language transcription.',
    details: 'BanglaSpeech2Text is a language-focused AI project that packages offline speech-to-text support for Bangla using a fine-tuned Whisper model.',
    challenge: 'Making speech recognition useful for Bangla while keeping the package practical for offline use.',
    outcome: 'An open-source AI package with a clear local-language purpose and stronger technical credibility.',
    problem: 'Bangla speech-to-text support is harder to access offline, especially for developers who want language-focused transcription tools.',
    role: 'Created the package direction, repository structure, documentation angle, and Whisper-based transcription focus.',
    features: ['Offline Bangla transcription', 'Whisper-based model direction', 'Package-style developer usage', 'Local-language AI utility'],
    architecture: ['Python', 'Whisper model workflow', 'Speech-to-text pipeline', 'Package-oriented structure'],
    learning: 'Deepened my understanding of turning AI experiments into reusable developer tools with a specific language and user need.',
    category: 'AI Package',
    status: 'Open Source',
    tech: [<SiPython key="python" />],
    highlights: ['Bangla STT', 'Whisper model', 'Offline package'],
    repoUrl: 'https://github.com/Azrul16/BanglaSpeech2Text',
    accent: 'rgba(121, 194, 255, 0.2)'
  },
  {
    title: 'Notisaver Flutter App',
    repoName: 'Azrul16/Notisaver-Flutter-app',
    description: 'A Flutter utility app focused on saving and reviewing notifications in a simple mobile interface.',
    details: 'Notisaver is a mobile utility project that demonstrates practical Android-focused workflows and notification-oriented UX.',
    challenge: 'Designing a utility app that keeps saved information organized without adding friction.',
    outcome: 'A focused Flutter utility app that shows everyday problem-solving through mobile development.',
    category: 'Utility App',
    status: 'Public Repo',
    tech: [<SiFlutter key="flutter" />],
    highlights: ['Notification utility', 'Flutter UI', 'Mobile workflow'],
    repoUrl: 'https://github.com/Azrul16/Notisaver-Flutter-app',
    accent: 'rgba(85, 204, 168, 0.18)'
  },
  {
    title: 'AnySQL',
    repoName: 'Azrul16/anysql',
    description: 'A Flutter/Dart package-style project for working with SQL-oriented app data through a reusable utility layer.',
    details: 'AnySQL adds package-focused work to the portfolio, showing reusable Dart development beyond full app screens.',
    challenge: 'Designing a data utility that stays simple enough to reuse across different Flutter projects.',
    outcome: 'A reusable Flutter package project that strengthens the portfolio with library-style engineering work.',
    category: 'Flutter Package',
    status: 'Package Repo',
    tech: [<SiFlutter key="flutter" />],
    highlights: ['Dart utility', 'SQL workflow', 'Reusable package'],
    repoUrl: 'https://github.com/Azrul16/anysql',
    accent: 'rgba(122, 140, 255, 0.18)'
  },
  {
    title: 'Form Flutter',
    repoName: 'Azrul16/form_flutter',
    description: 'A Flutter form package/demo project focused on reusable form fields and cleaner input workflows.',
    details: 'Form Flutter demonstrates reusable UI and form-handling patterns that can be carried into larger Flutter apps.',
    challenge: 'Making form UI reusable while keeping validation and input structure easy to follow.',
    outcome: 'A Flutter form utility project that shows attention to everyday app building patterns.',
    category: 'Flutter Package',
    status: 'Package Repo',
    tech: [<SiFlutter key="flutter" />],
    highlights: ['Reusable forms', 'Input UI', 'Flutter patterns'],
    repoUrl: 'https://github.com/Azrul16/form_flutter',
    accent: 'rgba(121, 194, 255, 0.2)'
  },
  {
    title: 'Form Validator',
    repoName: 'Azrul16/form_validator',
    description: 'A Dart/Flutter validation utility for keeping form input checks clean and reusable.',
    details: 'Form Validator complements the form UI work with validation-focused logic that can be reused across Flutter projects.',
    challenge: 'Separating validation rules from UI so forms remain easier to maintain.',
    outcome: 'A small package-style repo that shows clean reusable logic for common Flutter app needs.',
    category: 'Flutter Package',
    status: 'Package Repo',
    tech: [<SiFlutter key="flutter" />],
    highlights: ['Validation rules', 'Reusable logic', 'Dart utility'],
    repoUrl: 'https://github.com/Azrul16/form_validator',
    accent: 'rgba(85, 204, 168, 0.18)'
  },
  {
    title: 'Animated Status Card',
    repoName: 'Azrul16/animated_status_card',
    description: 'A Flutter UI component project for animated status cards and polished state presentation.',
    details: 'Animated Status Card is a component-focused repo that highlights UI animation and reusable Flutter widget thinking.',
    challenge: 'Creating animation that adds clarity without making the component feel heavy.',
    outcome: 'A reusable UI component project that adds visual polish and widget-level craft to the portfolio.',
    category: 'Flutter Component',
    status: 'Package Repo',
    tech: [<SiFlutter key="flutter" />],
    highlights: ['Animated widget', 'Status UI', 'Reusable component'],
    repoUrl: 'https://github.com/Azrul16/animated_status_card',
    accent: 'rgba(255, 204, 87, 0.2)'
  },
  {
    title: 'OneSignal Push Notification',
    repoName: 'Azrul16/push-notification-flutter-using-OneSignal',
    description: 'A Flutter push notification implementation example using OneSignal integration.',
    details: 'This repo shows notification integration work, useful for demonstrating mobile app infrastructure beyond UI.',
    challenge: 'Connecting push notification setup with a Flutter app in a clear and reproducible way.',
    outcome: 'A practical integration example that supports real-world notification features in Flutter projects.',
    category: 'Flutter Integration',
    status: 'Public Repo',
    tech: [<SiFlutter key="flutter" />, <SiCplusplus key="cplusplus" />],
    highlights: ['Push notifications', 'OneSignal', 'Flutter setup'],
    repoUrl: 'https://github.com/Azrul16/push-notification-flutter-using-OneSignal',
    accent: 'rgba(255, 120, 133, 0.22)'
  },
  {
    title: 'Researcher Web Browser',
    repoName: 'Azrul16/Researcher-WebBrowser',
    description: 'A Python browser/research utility exploring focused information lookup and browsing workflows.',
    details: 'Researcher Web Browser is a Python project around research-oriented browsing, useful for showing tool-building outside mobile app work.',
    challenge: 'Creating a focused browsing workflow that supports research tasks without overcomplicating the tool.',
    outcome: 'A Python utility project that broadens the portfolio beyond Flutter and shows experimentation with desktop-style tooling.',
    category: 'Python Tool',
    status: 'Public Repo',
    tech: [<SiPython key="python" />],
    highlights: ['Research workflow', 'Python utility', 'Tool building'],
    repoUrl: 'https://github.com/Azrul16/Researcher-WebBrowser',
    accent: 'rgba(255, 204, 87, 0.2)'
  },
  {
    title: 'Schedula',
    repoName: 'Azrul16/Schedula',
    description: 'A class management app for schedules, assignments, class notes, and academic coordination.',
    details: 'Schedula contains class schedules, assignments, class notes, and management flows for class representatives or teachers.',
    challenge: 'Making academic coordination easier without turning the app into a heavy admin system.',
    outcome: 'A schedule and classroom utility app that helps organize academic routines in one place.',
    category: 'Education App',
    status: 'Public Repo',
    tech: [<SiFlutter key="flutter" />, <SiFirebase key="firebase" />],
    highlights: ['Class schedule', 'Assignments', 'Notes'],
    repoUrl: 'https://github.com/Azrul16/Schedula',
    accent: 'rgba(152, 212, 120, 0.18)'
  },
  {
    title: 'Meal Monkey',
    repoName: 'Azrul16/Meal-Monkey',
    description: 'A Flutter food ordering experience focused on menu browsing, cart flow, and mobile-first ordering interactions.',
    details: 'Meal Monkey is a Dart and Flutter project that turns a food ordering idea into a practical mobile product with clean browsing and checkout-oriented flows.',
    challenge: 'Keeping the ordering journey simple while still supporting the screens users expect from a food app.',
    outcome: 'A focused food ordering mobile build with a clear product structure and reusable Flutter UI patterns.',
    category: 'Food App',
    status: 'GitHub Project',
    tech: [<SiFlutter key="flutter" />, <SiFirebase key="firebase" />],
    highlights: ['Flutter UI', 'Ordering flow', 'Mobile product'],
    repoUrl: 'https://github.com/Azrul16/Meal-Monkey',
    accent: 'rgba(255, 159, 113, 0.2)'
  },
  {
    title: 'Med Reminder',
    repoName: 'Azrul16/med-reminder',
    description: 'A Flutter reminder app for medicine schedules and health-oriented daily routines.',
    details: 'Med Reminder shows a practical reminder product built around recurring health needs and simple notification-style flows.',
    challenge: 'Making reminder setup easy enough for everyday use.',
    outcome: 'A mobile health utility that demonstrates practical Flutter app structure and user-centered reminders.',
    category: 'Health Utility',
    status: 'Public Repo',
    tech: [<SiFlutter key="flutter" />],
    highlights: ['Medicine reminders', 'Health utility', 'Flutter app'],
    repoUrl: 'https://github.com/Azrul16/med-reminder',
    accent: 'rgba(255, 120, 133, 0.22)'
  },
  {
    title: 'QuizzApp',
    repoName: 'Azrul16/QuizzApp',
    description: 'A quiz solving app built with Flutter for structured practice and interactive learning.',
    details: 'QuizzApp focuses on quiz interaction, question flow, and learning-oriented mobile screens.',
    challenge: 'Keeping quiz interaction simple while preserving a clear practice flow.',
    outcome: 'A compact learning utility that supports quiz practice through a Flutter mobile interface.',
    category: 'Learning App',
    status: 'Public Repo',
    tech: [<SiFlutter key="flutter" />, <RiFirebaseFill key="firestore" />],
    highlights: ['Quiz flow', 'Learning utility', 'Flutter UI'],
    repoUrl: 'https://github.com/Azrul16/QuizzApp',
    accent: 'rgba(255, 204, 87, 0.2)'
  },
  {
    title: 'Hospital Management',
    repoName: 'Azrul16/hospital-management',
    description: 'A Flutter hospital management project exploring healthcare records and operational workflows.',
    details: 'Hospital Management adds a larger domain app to the portfolio, showing how Flutter can be used for structured healthcare workflows.',
    challenge: 'Organizing healthcare information clearly across multiple user and data flows.',
    outcome: 'A domain-focused Flutter project that shows comfort with more complex app structures.',
    category: 'Healthcare App',
    status: 'Public Repo',
    tech: [<SiFlutter key="flutter" />, <SiFirebase key="firebase" />],
    highlights: ['Healthcare flow', 'Records UI', 'Flutter structure'],
    repoUrl: 'https://github.com/Azrul16/hospital-management',
    accent: 'rgba(85, 204, 168, 0.18)'
  },
  {
    title: 'YouTube Video Downloader',
    repoName: 'Azrul16/youtube-video-downloader',
    description: 'A Python utility for downloading YouTube videos through a focused scripting workflow.',
    details: 'YouTube Video Downloader demonstrates Python automation and practical command/tool building.',
    challenge: 'Wrapping media download logic in a straightforward utility workflow.',
    outcome: 'A small but practical Python tool that shows scripting and automation capability.',
    category: 'Python Utility',
    status: 'Public Repo',
    tech: [<SiPython key="python" />],
    highlights: ['Python script', 'Automation', 'Media utility'],
    repoUrl: 'https://github.com/Azrul16/youtube-video-downloader',
    accent: 'rgba(122, 140, 255, 0.18)'
  },
  {
    title: 'File Sharing Server',
    repoName: 'Azrul16/file_shareing_server_using_python-flask',
    description: 'A Flask-based file sharing server for moving files through a lightweight web interface.',
    details: 'This project shows backend fundamentals with Flask, routing, uploads, and a practical local sharing use case.',
    challenge: 'Keeping file upload and sharing flows simple while maintaining clear server behavior.',
    outcome: 'A Python backend utility that demonstrates server-side implementation and web workflow basics.',
    category: 'Backend Tool',
    status: 'Flask Project',
    tech: [<SiPython key="python" />],
    highlights: ['Flask server', 'File sharing', 'Backend basics'],
    repoUrl: 'https://github.com/Azrul16/file_shareing_server_using_python-flask',
    accent: 'rgba(121, 194, 255, 0.2)'
  },
  {
    title: 'HTTP Proxy Server',
    repoName: 'Azrul16/HTTP_proxy_server',
    description: 'A Python networking project that implements proxy server behavior and request handling.',
    details: 'HTTP Proxy Server is a networking-focused project that fits the cybersecurity and systems side of the portfolio.',
    challenge: 'Handling network requests in a way that is clear enough to study and extend.',
    outcome: 'A systems-oriented Python project showing networking fundamentals and server-side thinking.',
    category: 'Networking',
    status: 'Public Repo',
    tech: [<SiPython key="python" />],
    highlights: ['Proxy logic', 'Networking', 'Python server'],
    repoUrl: 'https://github.com/Azrul16/HTTP_proxy_server',
    accent: 'rgba(85, 204, 168, 0.18)'
  },
  {
    title: 'SSLCOMMERZ Payment Integration',
    repoName: 'Azrul16/sslc-backend',
    description: 'A Node.js and Flutter Web/Desktop payment integration focused on checkout flow structure and gateway communication.',
    details: 'This work focused on connecting payment gateway logic across frontend and backend while keeping checkout states easier to understand.',
    challenge: 'Coordinating frontend and backend payment logic cleanly.',
    outcome: 'A checkout flow prototype built around clearer transaction handling and frontend/backend coordination.',
    problem: 'Payment flows need careful coordination between frontend checkout states and backend gateway communication so transactions remain understandable and reliable.',
    role: 'Implemented the backend integration direction and connected the payment flow with Flutter/Web or desktop-facing checkout behavior.',
    features: ['Payment gateway integration', 'Checkout request handling', 'Transaction-oriented backend flow', 'Frontend/backend coordination'],
    architecture: ['Node.js', 'JavaScript', 'Flutter', 'SSLCOMMERZ gateway flow'],
    learning: 'Improved my understanding of payment integrations where errors, redirects, and transaction state matter as much as the happy path.',
    category: 'Integration',
    status: 'Integration Demo',
    tech: [<SiNodedotjs key="nodejs" />, <SiFlutter key="flutter" />, <SiJavascript key="javascript" />],
    highlights: ['Gateway integration', 'Checkout logic', 'Payment flow'],
    repoUrl: 'https://github.com/Azrul16/sslc-backend',
    accent: 'rgba(122, 140, 255, 0.18)'
  },
  {
    title: 'Online Food Website',
    repoName: 'Azrul16/onlinefood',
    description: 'A deployed food ordering website with a restaurant-style browsing experience and hosted live preview.',
    details: 'Online Food is a web project for presenting food items and ordering-oriented content with a public Vercel deployment.',
    challenge: 'Creating a polished food site experience that feels usable and easy to scan.',
    outcome: 'A live food website that visitors can open directly from the portfolio.',
    problem: 'Restaurant and food-ordering sites need a fast, visual browsing experience that helps visitors move from menu discovery to action.',
    role: 'Built the web experience, responsive layout, public deployment, and GitHub project presentation.',
    features: ['Responsive food browsing pages', 'Hosted live demo', 'Restaurant-style visual presentation', 'Menu-oriented user flow'],
    architecture: ['JavaScript', 'Responsive web UI', 'Vercel deployment', 'Static frontend structure'],
    learning: 'Improved my deployment workflow and practiced turning a simple web concept into something visitors can open and evaluate immediately.',
    category: 'Web Project',
    status: 'Live Demo',
    tech: [<SiJavascript key="javascript" />],
    highlights: ['Hosted on Vercel', 'Food browsing', 'Responsive web'],
    repoUrl: 'https://github.com/Azrul16/onlinefood',
    demoUrl: 'https://onlinefood-rho.vercel.app',
    accent: 'rgba(255, 159, 113, 0.2)'
  },
  {
    title: 'Object Detection App',
    repoName: 'Azrul16/object-detection-app',
    description: 'A computer vision app project exploring object detection through a Flutter/mobile implementation path.',
    details: 'Object Detection App adds AI and computer vision flavor to the portfolio through a mobile-facing project.',
    challenge: 'Connecting detection logic with an interface that users can understand quickly.',
    outcome: 'A practical AI app concept that shows experimentation with vision features and mobile UI.',
    category: 'Computer Vision',
    status: 'Public Repo',
    tech: [<SiFlutter key="flutter" />, <SiCplusplus key="cplusplus" />],
    highlights: ['Object detection', 'AI app', 'Mobile UI'],
    repoUrl: 'https://github.com/Azrul16/object-detection-app',
    accent: 'rgba(255, 204, 87, 0.2)'
  },
];

const revealVariants = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.72,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const filterOptions = ['All', 'Flutter', 'Packages', 'AI', 'Backend', 'Tools'];
const caseStudyTitles = [
  'DevDroid Android Code Editor',
  'Lecturer App',
  'BanglaSpeech2Text',
  'SSLCOMMERZ Payment Integration',
  'Online Food Website'
];

const getTechLabels = (project) => {
  const labelMap = {
    cplusplus: 'C++',
    firebase: 'Firebase',
    firestore: 'Firestore',
    flutter: 'Flutter',
    javascript: 'JavaScript',
    nodejs: 'Node.js',
    python: 'Python'
  };

  return project.tech.map((icon) => labelMap[icon.key] || icon.key).filter(Boolean);
};

const projectMatchesFilter = (project, activeFilter) => {
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
    ...getTechLabels(project)
  ].join(' ').toLowerCase();

  const filterMatchers = {
    Flutter: () => searchText.includes('flutter'),
    Packages: () => searchText.includes('package') || searchText.includes('component') || searchText.includes('utility'),
    AI: () => searchText.includes('ai') || searchText.includes('whisper') || searchText.includes('detection'),
    Backend: () => searchText.includes('backend') || searchText.includes('server') || searchText.includes('node') || searchText.includes('flask'),
    Tools: () => searchText.includes('tool') || searchText.includes('editor') || searchText.includes('browser') || searchText.includes('utility')
  };

  return filterMatchers[activeFilter]?.() || false;
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const caseStudyProjects = useMemo(
    () => caseStudyTitles.map((title) => projectList.find((project) => project.title === title)).filter(Boolean),
    []
  );
  const moreProjects = useMemo(
    () => projectList.filter((project) => !caseStudyTitles.includes(project.title)),
    []
  );
  const filteredProjects = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    return moreProjects.filter((project) => {
      const matchesFilter = projectMatchesFilter(project, activeFilter);
      const matchesSearch = !normalizedSearch || [
        project.title,
        project.repoName,
        project.category,
        project.status,
        project.description,
        project.details,
        ...project.highlights,
        ...getTechLabels(project)
      ].join(' ').toLowerCase().includes(normalizedSearch);

      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, moreProjects, searchTerm]);

  const stats = useMemo(() => {
    const repoCount = projectList.length;
    const flutterCount = projectList.filter((project) => getTechLabels(project).includes('Flutter')).length;
    const caseStudyCount = caseStudyProjects.length;

    return [
      { value: caseStudyCount, label: 'Case studies' },
      { value: flutterCount, label: 'Flutter builds' },
      { value: repoCount - caseStudyCount, label: 'More projects' }
    ];
  }, [caseStudyProjects.length]);

  const openProject = (project) => setSelectedProject(project);
  const closeProject = () => setSelectedProject(null);

  useEffect(() => {
    if (!selectedProject) {
      document.body.style.overflow = '';
      return undefined;
    }

    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedProject(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="projects-section">
      <div className="projects-shell">
        <motion.div className="section-title-block" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={revealVariants}>
          <h2>Selected Projects</h2>
        </motion.div>

        <motion.div className="projects-header" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={revealVariants}>
          <div className="projects-copy">
            <p className="projects-kicker">GitHub Portfolio</p>
            <p className="projects-intro">
              Five focused case studies first, followed by a searchable project archive for the rest of my apps, packages, backend tools, AI experiments, and integrations.
            </p>
          </div>

          <div className="projects-stats">
            {stats.map((stat, index) => (
              <div className={`stat-card ${index === 0 ? 'accent' : ''}`} data-pointer-glow key={stat.label}>
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div className="case-study-section" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.14 }} variants={revealVariants}>
          <div className="project-subsection-heading">
            <p className="projects-kicker">Case Studies</p>
            <h3>Best work to review first</h3>
          </div>

          <div className="case-study-grid">
            {caseStudyProjects.map((project, index) => (
              <CaseStudyCard project={project} key={project.title} openProject={openProject} isFeatured={index === 0} />
            ))}
          </div>
        </motion.div>

        <motion.div className="project-subsection-heading more-projects-heading" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.18 }} variants={revealVariants}>
          <p className="projects-kicker">More Projects</p>
          <h3>Additional builds and experiments</h3>
        </motion.div>

        <motion.div className="projects-toolbar" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.18 }} variants={revealVariants}>
          <div className="project-search">
            <FaSearch />
            <input
              type="search"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search repos, stacks, categories..."
              aria-label="Search projects"
            />
          </div>

          <div className="project-filters" aria-label="Filter projects">
            {filterOptions.map((filter) => (
              <button
                type="button"
                key={filter}
                className={`project-filter ${activeFilter === filter ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="projects-result-row">
          <span>{filteredProjects.length} of {moreProjects.length} more projects shown</span>
          <span>{activeFilter} filter</span>
        </div>

        <motion.div className="projects-grid" layout>
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
            <motion.article
              className="project-card compact-project"
              key={project.title}
              onClick={() => openProject(project)}
              role="button"
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  openProject(project);
                }
              }}
              data-pointer-glow
              layout
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 14, scale: 0.98 }}
              transition={{ duration: 0.24, delay: Math.min(index * 0.015, 0.08) }}
              style={{ '--project-accent': project.accent }}
            >
              <div className="project-card-sheen" aria-hidden="true"></div>
              <div className="project-topline">
                <p className="project-category">{project.category}</p>
                <span className="project-status subtle">{project.status}</span>
              </div>
              <p className="project-repo-name">{project.repoName}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="project-footer">
                <TechStack project={project} />
                <QuickProjectActions project={project} />
              </div>
            </motion.article>
          ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {selectedProject && (
        <div className="project-modal-overlay" onClick={closeProject} role="presentation">
          <motion.div
            className="project-modal project-modal-simple"
            onClick={(event) => event.stopPropagation()}
            data-pointer-glow
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            style={{ '--project-accent': selectedProject.accent }}
          >
            <button type="button" className="project-modal-close" onClick={closeProject} aria-label="Close project details">
              <FaTimes />
            </button>

            <div className="project-modal-copy full-width-copy">
              <div className="project-topline">
                <p className="project-category">{selectedProject.category}</p>
                <span className="project-status">{selectedProject.status}</span>
              </div>
              <p className="project-repo-name modal-repo-name">{selectedProject.repoName}</p>
              <h3>{selectedProject.title}</h3>
              <p className="project-modal-description">{selectedProject.details}</p>

              {selectedProject.problem && (
                <div className="project-proof-block">
                  <div className="project-proof-card project-proof-wide">
                    <span className="modal-label">Problem Solved</span>
                    <p>{selectedProject.problem}</p>
                  </div>
                  <div className="project-proof-card">
                    <span className="modal-label">My Role</span>
                    <p>{selectedProject.role}</p>
                  </div>
                  <div className="project-proof-card">
                    <span className="modal-label">What I Improved</span>
                    <p>{selectedProject.learning}</p>
                  </div>
                </div>
              )}

              <div className="project-modal-grid">
                <div className="project-modal-card">
                  <span className="modal-label">Challenge</span>
                  <p>{selectedProject.challenge}</p>
                </div>
                <div className="project-modal-card">
                  <span className="modal-label">Outcome</span>
                  <p>{selectedProject.outcome}</p>
                </div>
              </div>

              {selectedProject.features && (
                <div className="project-proof-lists">
                  <div className="project-proof-list">
                    <span className="modal-label">Key Features</span>
                    <ul>
                      {selectedProject.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="project-proof-list">
                    <span className="modal-label">Architecture / Tools</span>
                    <ul>
                      {selectedProject.architecture.map((tool) => (
                        <li key={tool}>{tool}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              <div className="project-highlights modal-highlights">
                {selectedProject.highlights.map((item) => (
                  <span key={item} className="project-highlight-pill">{item}</span>
                ))}
              </div>

              <div className="project-footer modal-footer">
                <TechStack project={selectedProject} />
                <ProjectLinks project={selectedProject} />
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

const TechStack = ({ project }) => {
  return (
    <div className="project-tech" aria-label={`${project.title} tech stack`}>
      {project.tech.map((icon, index) => (
        <span key={index} className="project-tech-icon" title={getTechLabels(project)[index]}>
          {icon}
        </span>
      ))}
    </div>
  );
};

const CaseStudyCard = ({ project, openProject, isFeatured }) => {
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openProject(project);
    }
  };

  return (
    <article
      className={`project-card case-study-card ${isFeatured ? 'case-study-featured' : ''}`}
      onClick={() => openProject(project)}
      role="button"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      data-pointer-glow
      style={{ '--project-accent': project.accent }}
    >
      <ProjectPreview project={project} />

      <div className="case-study-copy">
        <div className="project-topline">
          <p className="project-category">{project.category}</p>
          <span className="project-status">{project.status}</span>
        </div>
        <p className="project-repo-name">{project.repoName}</p>
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <div className="case-study-outcome">
          <span>Outcome</span>
          <p>{project.outcome}</p>
        </div>

        <div className="project-highlights">
          {project.highlights.map((item) => (
            <span key={item} className="project-highlight-pill">{item}</span>
          ))}
        </div>

        <div className="project-footer">
          <TechStack project={project} />
          <ProjectLinks project={project} />
        </div>
      </div>
    </article>
  );
};

const ProjectPreview = ({ project }) => {
  const labels = getTechLabels(project).slice(0, 3);

  return (
    <div className="project-preview" aria-label={`${project.title} project preview`}>
      <div className="preview-window">
        <div className="preview-window-bar" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="preview-content">
          <span className="preview-category">{project.category}</span>
          <strong>{project.title}</strong>
          <div className="preview-lines" aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="preview-chip-row">
            {labels.map((label) => (
              <span key={label}>{label}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const QuickProjectActions = ({ project }) => {
  const stopAction = (event) => event.stopPropagation();

  return (
    <div className="project-quick-actions">
      {project.repoUrl && (
        <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title} on GitHub`} onClick={stopAction}>
          <FaGithub />
        </a>
      )}
      {project.demoUrl && (
        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title} live demo`} onClick={stopAction}>
          <FaExternalLinkAlt />
        </a>
      )}
      <span className="project-link">Details</span>
    </div>
  );
};

const ProjectLinks = ({ project }) => {
  const stopAction = (event) => event.stopPropagation();

  return (
    <div className="project-actions">
      {project.repoUrl && (
        <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="project-action-link" onClick={stopAction}>
          <FaGithub />
          GitHub
        </a>
      )}
      {project.demoUrl && (
        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="project-action-link project-action-link-accent" onClick={stopAction}>
          <FaExternalLinkAlt />
          Live Demo
        </a>
      )}
    </div>
  );
};

export default Projects;
