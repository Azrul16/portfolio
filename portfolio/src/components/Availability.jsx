import { FaMobileAlt, FaServer, FaPlug, FaArrowRight } from 'react-icons/fa';
import './Availability.css';

const capabilities = [
  {
    icon: <FaMobileAlt />,
    title: 'Apps that move with you.',
    label: 'Mobile development',
    detail: 'From live bus tracking to a code editor in your pocket. Mobile tools built around real tasks.',
    tags: ['Flutter', 'Dart', 'Firebase'],
    project: 'Explore DevDroid',
    repoName: 'Azrul16/DevDroid-android-code-editor',
    accent: 'violet',
  },
  {
    icon: <FaServer />,
    title: 'The systems behind the screen.',
    label: 'Backend engineering',
    detail: 'APIs that connect data, permissions, and business workflows, with real-time updates where they matter.',
    tags: ['Python', 'Django', 'FastAPI'],
    project: 'Explore Syncora',
    repoName: 'Azrul16/syncora-django-realtime-business-management-api',
    accent: 'blue',
  },
  {
    icon: <FaPlug />,
    title: 'Software meets the real world.',
    label: 'Platform integration',
    detail: 'Connecting interfaces to cameras, native Android services, and Raspberry Pi hardware.',
    tags: ['Native Android', 'IoT', 'Live video'],
    project: 'Explore ROV Commander',
    repoName: 'Azrul16/ROV-Commander-Flutter-App',
    accent: 'mint',
  },
];

export default function Availability({ onViewProject }) {
  return (
    <section id="about" className="availability-section" aria-labelledby="availability-title">
      <div className="availability-shell">
        <div className="availability-heading">
          <span className="capability-eyebrow">Ideas into working software</span>
          <h2 id="availability-title">What I Build</h2>
          <p>Useful on the surface. Thoughtful underneath.</p>
        </div>
        <div className="capability-grid">
          {capabilities.map((item, index) => (
            <article className={`capability-card capability-${item.accent}`} key={item.label}>
              <div className="capability-card-top">
                <span className="capability-icon" aria-hidden="true">{item.icon}</span>
                <span className="capability-index" aria-hidden="true">0{index + 1}</span>
              </div>
              <p className="capability-label">{item.label}</p>
              <h3>{item.title}</h3>
              <p className="capability-description">{item.detail}</p>
              <ul className="capability-tags" aria-label={`${item.label} technologies`}>
                {item.tags.map((tag) => <li key={tag}>{tag}</li>)}
              </ul>
              <button type="button" className="capability-project" aria-haspopup="dialog"
                onClick={() => onViewProject(item.repoName)}>
                {item.project}<FaArrowRight aria-hidden="true" />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
