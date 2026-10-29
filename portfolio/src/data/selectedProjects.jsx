import { SiDjango, SiFlutter, SiPython } from 'react-icons/si';
import busShowcase from '../assets/images/projects/mama-bus-koi/ios-showcase.webp';
import rovShowcase from '../assets/images/projects/rov-commander/ios-showcase.webp';
import syncoraWorkspace from '../assets/images/projects/syncora/api-workspace.svg';

const mobileScreens = import.meta.glob('../assets/images/projects/{mama-bus-koi,rov-commander}/*.webp', { eager: true, query: '?url', import: 'default' });
const gallery = (slug, image, title, screens) => [
  { src: image, alt: `${title} iPhone presentation mockups`, width: 1440, height: 1080 },
  ...screens.map(([file, label]) => ({
    src: mobileScreens[`../assets/images/projects/${slug}/${file}.webp`],
    alt: `${label} — iPhone presentation mockup`, width: 396, height: 900,
  })),
];

export const additionalSelectedProjects = [
  {
    title: 'Mama Bus Koi',
    repoName: 'Azrul16/Mama-Bus-Koi-AFlutterBusTrackingMobileApp',
    repoUrl: 'https://github.com/Azrul16/Mama-Bus-Koi-AFlutterBusTrackingMobileApp',
    description: 'Organization bus tracking with crowdsourced locations, routes, departure schedules, and member chat.',
    details: 'An Android-first Flutter MVP with organization-scoped fleets, explicit onboard location sharing, and offline route data. Repository UI previews are presented in iPhone frames for this portfolio; live tracking requires Firebase configuration and trusted membership synchronization.',
    category: 'Transport App',
    status: 'MVP',
    tech: [<SiFlutter key="flutter" />],
    technologyLabels: ['Flutter', 'Dart', 'Firebase', 'Firestore'],
    highlights: ['Crowdsourced tracking', 'Organization workspaces', 'Offline routes'],
    features: [
      'Organization discovery, memberships, and fleet management',
      'Bus search, favorites, coarse status, and eligible exact tracking',
      'Onboard GPS contribution with primary-source lease and standby takeover',
      'Routes, ordered stops, departure schedules, and local reminders',
      'Organization chat, test-token wallet, and admin tools',
    ],
    architecture: ['Flutter / Dart / BLoC / Cubit', 'Firebase Authentication / Firestore / Realtime Database', 'Drift / SQLite offline cache', 'MapLibre GL / OpenFreeMap', 'Native Kotlin foreground location service'],
    image: busShowcase,
    imageAlt: 'Mama Bus Koi bus list, live tracking, and routes in iPhone presentation mockups',
    imageWidth: 1440, imageHeight: 1080,
    previewLabel: 'iPhone UI mockups',
    screenshots: gallery('mama-bus-koi', busShowcase, 'Mama Bus Koi', [
      ['03_buses_home', 'Bus list and status'], ['05_premium_live_tracking', 'Premium live tracking'],
      ['06_routes', 'Routes and stops'], ['07_schedules', 'Departure schedules'],
      ['08_chat', 'Organization chat'], ['10_admin_dashboard', 'Admin dashboard'],
    ]),
    accent: 'rgba(69, 203, 162, 0.2)',
  },
  {
    title: 'Syncora',
    repoName: 'Azrul16/syncora-django-realtime-business-management-api',
    repoUrl: 'https://github.com/Azrul16/syncora-django-realtime-business-management-api',
    description: 'A multi-tenant business backend for inventory, sales, purchases, finance, and real-time activity.',
    details: 'A Django REST backend with organization and branch isolation, role-based permissions, transactional stock and payment workflows, and Django Channels event broadcasts. The API explorer artwork illustrates repository routes with sample response data.',
    category: 'Business Management API',
    status: 'Open Source',
    tech: [<SiDjango key="django" />, <SiPython key="python" />],
    technologyLabels: ['Python', 'Django', 'Django REST Framework', 'PostgreSQL', 'Django Channels'],
    highlights: ['Tenant isolation', 'Transactional workflows', 'WebSocket events'],
    features: [
      'Organization and branch-scoped access with role-based permissions',
      'Products, variants, stock movements, purchases, and sales workflows',
      'Payments, expense approvals, financial summaries, and dashboard analytics',
      'Real-time notifications, activity events, and append-only audit logs',
      'JWT authentication, refresh rotation, throttling, and OpenAPI documentation',
    ],
    architecture: ['Django / Django REST Framework / PostgreSQL', 'Django Channels / WebSockets / Daphne ASGI', 'Simple JWT / django-filter / drf-spectacular', 'Centralized event dispatch and transactional business operations', 'GitHub Actions backend checks, migrations, schema validation, and tests'],
    image: syncoraWorkspace,
    imageAlt: 'Syncora API explorer illustration showing business endpoints and a sample dashboard response',
    imageWidth: 1440, imageHeight: 1080,
    previewLabel: 'API explorer illustration',
    screenshots: [{ src: syncoraWorkspace, alt: 'Illustrative Syncora API explorer with sample response data', width: 1440, height: 1080 }],
    accent: 'rgba(165, 138, 233, 0.2)',
  },
  {
    title: 'ROV Commander',
    repoName: 'Azrul16/ROV-Commander-Flutter-App',
    repoUrl: 'https://github.com/Azrul16/ROV-Commander-Flutter-App',
    description: 'A Flutter operator dashboard for live video, vehicle controls, and Raspberry Pi ROV telemetry.',
    details: 'Connects to a companion Raspberry Pi 5 FastAPI server to stream MJPEG video, send vehicle commands, switch operating modes, and monitor sensor and system status. Repository UI previews are shown in iPhone presentation frames.',
    category: 'Robotics & IoT App',
    status: 'Public Repo',
    tech: [<SiFlutter key="flutter" />],
    technologyLabels: ['Flutter', 'Dart', 'FastAPI'],
    highlights: ['Live camera feed', 'Vehicle controls', 'Sensor telemetry'],
    features: [
      'MJPEG live camera stream with full-screen viewing',
      'Press-and-hold manual driving with stop on release or cancellation',
      'Manual and server-managed autopilot mode selection',
      'Emergency stop and clear commands',
      'Sonar, environment, vehicle, camera, and Arduino status',
      'Connection monitoring and locally saved server address',
    ],
    architecture: ['Flutter / Dart / BLoC', 'Dio / Retrofit HTTP client', 'Companion Raspberry Pi 5 / FastAPI server', 'flutter_mjpeg camera streaming', 'SharedPreferences / connectivity_plus'],
    image: rovShowcase,
    imageAlt: 'ROV Commander live dashboard, vehicle controls, and telemetry in iPhone presentation mockups',
    imageWidth: 1440, imageHeight: 1080,
    previewLabel: 'iPhone UI mockups',
    screenshots: gallery('rov-commander', rovShowcase, 'ROV Commander', [
      ['03_live_dashboard', 'Live camera dashboard'], ['04_control', 'Vehicle controls'],
      ['05_telemetry', 'Sensor telemetry'], ['06_systems', 'System status'],
      ['02_connection', 'Server connection'], ['08_settings', 'Connection settings'],
    ]),
    accent: 'rgba(69, 188, 233, 0.2)',
  },
];
