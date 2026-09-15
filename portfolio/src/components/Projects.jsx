import React, { useEffect, useMemo, useRef, useState } from 'react';
import './Projects.css';
import { SiCplusplus, SiFirebase, SiFlutter, SiJavascript, SiNodedotjs, SiPython } from 'react-icons/si';
import { RiFirebaseFill } from 'react-icons/ri';
import { FaExternalLinkAlt, FaGithub, FaGripHorizontal, FaList, FaTimes } from 'react-icons/fa';
import { AnimatePresence, m as motion } from 'framer-motion';
import { springHover, staggerContainer } from './motionConfig';

const projectList = [
  {
    title: 'DevDroid Android Code Editor',
    repoName: 'Azrul16/DevDroid-android-code-editor',
    description: 'A Flutter code editor for writing and managing files on Android.',
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
    description: 'A study app concept for summaries, transcription, and revision quizzes.',
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
    description: 'A Python package for offline Bangla transcription using Whisper.',
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
    description: 'A Node.js payment integration connecting Flutter checkout to SSLCOMMERZ.',
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
    description: 'A responsive food browsing website with a live preview.',
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
  hidden: { opacity: 1, y: 0 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.24,
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
    Packages: () => /package|component/i.test(`${project.category} ${project.status}`),
    AI: () => /\bai\b/.test(searchText) || searchText.includes('whisper') || searchText.includes('detection'),
    Backend: () => searchText.includes('backend') || searchText.includes('server') || searchText.includes('node') || searchText.includes('flask'),
    Tools: () => searchText.includes('tool') || searchText.includes('editor') || searchText.includes('browser') || searchText.includes('utility')
  };

  return filterMatchers[activeFilter]?.() || false;
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');
  const [archiveView, setArchiveView] = useState('carousel');
  const projectCloseButtonRef = useRef(null);
  const caseStudyCarouselRef = useRef(null);
  const dragState = useRef({
    isDragging: false,
    startX: 0,
    scrollLeft: 0,
    suppressClick: false
  });

  const caseStudyProjects = useMemo(
    () => caseStudyTitles.map((title) => projectList.find((project) => project.title === title)).filter(Boolean),
    []
  );
  const moreProjects = useMemo(
    () => projectList.filter((project) => !caseStudyTitles.includes(project.title)),
    []
  );
  const filteredProjects = useMemo(() => {
    return moreProjects.filter((project) => projectMatchesFilter(project, activeFilter));
  }, [activeFilter, moreProjects]);



  const openProject = (project) => setSelectedProject(project);
  const closeProject = () => setSelectedProject(null);

  const handleCarouselPointerDown = (event) => {
    if (event.pointerType !== 'mouse' || event.target.closest('a, button')) return;
    if (event.button !== undefined && event.button !== 0) {
      return;
    }

    const carousel = event.currentTarget;
    dragState.current = {
      isDragging: true,
      startX: event.clientX,
      scrollLeft: carousel.scrollLeft,
      suppressClick: false
    };
    carousel.classList.add('is-dragging');

  };

  const handleCarouselPointerMove = (event) => {
    const state = dragState.current;
    if (!state.isDragging) {
      return;
    }

    const movement = event.clientX - state.startX;
    if (Math.abs(movement) > 6) {
      state.suppressClick = true;
      event.currentTarget.setPointerCapture?.(event.pointerId);
    }

    const carousel = event.currentTarget;
    carousel.scrollLeft = state.scrollLeft - movement;

  };

  const stopCarouselDrag = (event) => {
    const carousel = event.currentTarget;
    carousel.classList.remove('is-dragging');
    carousel.releasePointerCapture?.(event.pointerId);
    dragState.current.isDragging = false;
  };

  const handleCarouselClickCapture = (event) => {
    if (!dragState.current.suppressClick) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();
    window.setTimeout(() => {
      dragState.current.suppressClick = false;
    }, 0);
  };

  useEffect(() => {
    if (!selectedProject) {
      document.body.style.overflow = '';
      return undefined;
    }

    const previousFocus = document.activeElement;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedProject(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      previousFocus?.focus({ preventScroll: true });
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject]);

  useEffect(() => {
    if (!selectedProject) {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => {
      projectCloseButtonRef.current?.focus();
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, [selectedProject]);

  const handleProjectModalKeyDown = (event) => {
    if (event.key !== 'Tab') {
      return;
    }

    const focusableElements = event.currentTarget.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (!firstElement || !lastElement) {
      return;
    }

    if (event.shiftKey && document.activeElement === firstElement) {
      event.preventDefault();
      lastElement.focus();
    } else if (!event.shiftKey && document.activeElement === lastElement) {
      event.preventDefault();
      firstElement.focus();
    }
  };

  return (
    <section id="projects" className="projects-section">
      <div className="projects-shell">
        <motion.div className="section-title-block" initial={false} whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={revealVariants}>
          <h2>Selected Projects</h2>
        </motion.div>

        <motion.div className="case-study-section" initial={false} whileInView="visible" viewport={{ once: true, amount: 0.14 }} variants={revealVariants}>
          <div className="project-subsection-heading case-study-heading">
            <div className="case-study-navigation">
              {[-1, 1].map((direction) => (
                <button type="button" key={direction} aria-label={direction < 0 ? 'Previous case study' : 'Next case study'} onClick={() => {
                  const carousel = caseStudyCarouselRef.current;
                  const card = carousel?.querySelector('.case-study-card');
                  if (card) carousel.scrollBy({ left: direction * (card.getBoundingClientRect().width + 24), behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
                }}><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={direction < 0 ? 'M19 12H5m7-7-7 7 7 7' : 'M5 12h14m-7-7 7 7-7 7'} /></svg></button>
              ))}
            </div>
          </div>

          <div
            className="projects-carousel case-study-carousel"
            ref={caseStudyCarouselRef}
            aria-label="Scrollable case studies"
            onPointerDown={handleCarouselPointerDown}
            onPointerMove={handleCarouselPointerMove}
            onPointerUp={stopCarouselDrag}
            onPointerCancel={stopCarouselDrag}
            onPointerLeave={stopCarouselDrag}
            onClickCapture={handleCarouselClickCapture}
          >
            <div className="projects-track case-study-track">
            {caseStudyProjects.map((project, index) => (
              <CaseStudyCard project={project} key={`${project.title}-${index}`} openProject={openProject} />
            ))}
            </div>
          </div>
        </motion.div>

        <motion.div className="project-subsection-heading more-projects-heading" initial={false} whileInView="visible" viewport={{ once: true, amount: 0.18 }} variants={revealVariants}>
          <h3>More Projects</h3>
        </motion.div>

        <motion.div className="projects-toolbar" initial={false} whileInView="visible" viewport={{ once: true, amount: 0.18 }} variants={revealVariants}>
          <div className="project-filters" aria-label="Filter projects">
            {filterOptions.map((filter) => (
              <motion.button
                type="button"
                key={filter}
                className={`project-filter ${activeFilter === filter ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter)}
                aria-pressed={activeFilter === filter}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.96 }}
                transition={springHover}
              >
                {filter}
              </motion.button>
            ))}
          </div>
          <div className="project-view-toggle" aria-label="Project view mode">
            <button type="button" className={archiveView === 'carousel' ? 'active' : ''} onClick={() => setArchiveView('carousel')} aria-label="Show carousel view" aria-pressed={archiveView === 'carousel'}>
              <FaGripHorizontal /><span>Carousel</span>
            </button>
            <button type="button" className={archiveView === 'grid' ? 'active' : ''} onClick={() => setArchiveView('grid')} aria-label="Show grid view" aria-pressed={archiveView === 'grid'}>
              <FaList /><span>Grid</span>
            </button>
          </div>
        </motion.div>

        <div className="sr-only" role="status">
          <span>{filteredProjects.length} of {moreProjects.length} projects in view</span>
          <span>{activeFilter} filter</span>
        </div>

        {archiveView === 'carousel' ? (
          <motion.div
            className="projects-carousel"
            aria-label="Scrollable project archive"
            onPointerDown={handleCarouselPointerDown}
            onPointerMove={handleCarouselPointerMove}
            onPointerUp={stopCarouselDrag}
            onPointerCancel={stopCarouselDrag}
            onPointerLeave={stopCarouselDrag}
            onClickCapture={handleCarouselClickCapture}
          >
            <div className="projects-track">
              {filteredProjects.map((project, index) => (
                <ProjectArchiveCard project={project} openProject={openProject} key={`${project.title}-${index}`} />
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div className="projects-scan-grid" initial={false} whileInView="visible" viewport={{ once: true, amount: 0.08 }} variants={staggerContainer}>
            {filteredProjects.map((project) => (
              <ProjectArchiveCard project={project} openProject={openProject} key={project.title} />
            ))}
          </motion.div>
        )}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="project-modal-overlay"
            onClick={closeProject}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            aria-describedby="project-modal-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.14 }}
            onKeyDown={handleProjectModalKeyDown}
          >
            <motion.div
              className="project-modal project-modal-simple"
              onClick={(event) => event.stopPropagation()}
              data-pointer-glow
              initial={{ opacity: 0, y: 14, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 14, scale: 0.98 }}
              transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
              style={{ '--project-accent': selectedProject.accent }}
            >
            <button ref={projectCloseButtonRef} type="button" className="project-modal-close" onClick={closeProject} aria-label="Close project details">
              <FaTimes />
            </button>

            <div className="project-modal-copy full-width-copy">
              <div className="project-topline">
                <p className="project-category">{selectedProject.category}</p>
                <span className="project-status">{selectedProject.status}</span>
              </div>
              <p className="project-repo-name modal-repo-name">{selectedProject.repoName}</p>
              <h3 id="project-modal-title">{selectedProject.title}</h3>
              <p className="project-modal-description" id="project-modal-description">{selectedProject.description}</p>

              <div className="project-proof-lists">
                <div className="project-proof-list">
                  <span className="modal-label">Key Features</span>
                  <ul>
                    {(selectedProject.features || selectedProject.highlights).map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="project-proof-list">
                  <span className="modal-label">Tools & Structure</span>
                  <ul>
                    {(selectedProject.architecture || getTechLabels(selectedProject)).map((tool) => (
                      <li key={tool}>{tool}</li>
                    ))}
                  </ul>
                </div>
              </div>

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
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const ProjectArchiveCard = ({ project, openProject }) => (
  <motion.article
    className="project-card compact-project"
    onClick={() => openProject(project)}
    data-pointer-glow
    style={{ '--project-accent': project.accent }}
    variants={revealVariants}
    whileHover={{ y: -4, scale: 1.005 }}
    whileTap={{ scale: 0.99 }}
    transition={springHover}
  >
    <div className="project-card-sheen" aria-hidden="true"></div>
    <div className="project-topline">
      <p className="project-category">{project.category}</p>
      <span className="project-status subtle">{project.status}</span>
    </div>
    <h3><button type="button" className="project-title-button" aria-haspopup="dialog" onClick={(event) => { event.stopPropagation(); openProject(project); }}>{project.title}</button></h3>
    <div className="project-footer">
      <TechStack project={project} />
      <QuickProjectActions project={project} />
    </div>
  </motion.article>
);

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

  return (
    <motion.article
      className={`project-card case-study-card ${isFeatured ? 'case-study-featured' : ''}`}
      onClick={() => openProject(project)}
      data-pointer-glow
      style={{ '--project-accent': project.accent }}
      whileHover={{ y: -4, scale: 1.005 }}
      whileTap={{ scale: 0.99 }}
      transition={springHover}
    >
      <ProjectPreview project={project} />

      <div className="case-study-copy">
        <div className="project-topline">
          <p className="project-category">{project.category}</p>
          <span className="project-status">{project.status}</span>
        </div>
        <h3><button type="button" className="project-title-button" aria-haspopup="dialog" onClick={(event) => { event.stopPropagation(); openProject(project); }}>{project.title}</button></h3>

        <p className="case-study-summary">{project.description}</p>

        <div className="project-highlights">
          {getTechLabels(project).slice(0, 3).map((item) => (
            <span key={item} className="project-highlight-pill">{item}</span>
          ))}
        </div>

        <div className="project-footer">
          <button type="button" className="project-action-link case-study-details" aria-haspopup="dialog" onClick={(event) => { event.stopPropagation(); openProject(project); }}>View Details <span aria-hidden="true">↗</span></button>
          <ProjectLinks project={project} />
        </div>
      </div>
    </motion.article>
  );
};

const ProjectPreview = ({ project }) => {
  const editor = project.title.startsWith('DevDroid');
  const study = project.title === 'Lecturer App';
  const speech = project.title === 'BanglaSpeech2Text';
  const payment = project.title.startsWith('SSLCOMMERZ');
  return (
    <figure className={`project-preview concept-preview ${editor || study ? 'concept-mobile' : 'concept-desktop'}`}>
      <figcaption>Concept preview</figcaption>
      <div className="concept-stage" aria-hidden="true">
        <div className={`concept-device ${editor || study ? 'concept-phone' : 'concept-window'}`}>
          <div className="concept-device-bar"><i /><span>{editor ? 'Workspace' : study ? 'Study space' : speech ? 'Audio → text' : payment ? 'Payment flow' : 'Fresh picks'}</span><i /></div>
          <div className="concept-screen">
            {editor ? <><div className="concept-tabs">main.dart <span>＋</span></div><pre><span>01  // Build something</span>{'\n02  class MyApp {\n03    Widget build() {\n04      return Scaffold(\n05        body: Text(\n06          "Hello, world!"\n07        ),\n08      );\n09    }\n10  }'}</pre><div className="concept-banner">Dart workspace <span>⌘</span></div></>
              : study ? <><small>YOUR NEXT CHAPTER</small><strong>Learn a little.<br />Remember more.</strong><div className="concept-note">Lecture notes<span>Summarize your material</span></div><div className="concept-mini-grid"><span>✦<br />Summary</span><span>✓<br />Practice quiz</span></div><div className="concept-banner">Make room for a new idea</div></>
                : speech ? <><small>OFFLINE TRANSCRIPTION</small><strong>A voice.<br />A written word.</strong><div className="concept-wave">{[16, 32, 22, 48, 34, 56, 28, 42, 18, 36, 50, 24, 38, 16].map((height, index) => <i key={index} style={{ height }} />)}</div><div className="concept-note" lang="bn">বাংলা ভাষার কথা<span>Bangla speech → readable text</span></div></>
                  : payment ? <><small>BACKEND INTEGRATION</small><strong>Connect the checkout.</strong><div className="concept-flow"><span>Order</span><b>↓</b><span>Payment gateway</span><b>↓</b><span>Server verification</span></div></>
                    : <><small>THE MENU IS OPEN</small><strong>Find your next<br />favorite bite.</strong><div className="concept-food-grid"><div><span>🍔</span>Burgers</div><div><span>🍕</span>Pizza</div><div><span>🥗</span>Fresh bowls</div></div><div className="concept-banner">Browse. Choose. Enjoy.</div></>}
          </div>
        </div>
      </div>
    </figure>
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
