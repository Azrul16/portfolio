import { useState } from 'react';
import { m as motion } from 'framer-motion';
import {
  FaBug,
  FaCodeBranch,
  FaServer,
  FaFire,
  FaMobileAlt,
  FaPlug,
} from 'react-icons/fa';
import { fadeUp, staggerContainer, viewportOnce } from './motionConfig';
import './Availability.css';

const availabilityItems = [
  {
    icon: <FaMobileAlt />,
    title: 'Flutter Applications',
    detail:
      'Cross-platform apps, responsive interfaces, navigation, state management, and app flows.',
  },
  {
    icon: <FaServer />,
    title: 'Backend APIs',
    detail:
      'REST APIs, authentication, business logic, and services with Django, FastAPI, and Python.',
  },
  {
    icon: <FaFire />,
    title: 'Firebase & Real-Time Systems',
    detail:
      'Authentication, Firestore, cloud messaging, storage, and real-time features.',
  },
  {
    icon: <FaCodeBranch />,
    title: 'Deployment & DevOps',
    detail:
      'Dockerized apps, Linux servers, CI/CD workflows, and Nginx reverse proxy configuration.',
  },
  {
    icon: <FaPlug />,
    title: 'Application Integration',
    detail:
      'Connecting mobile apps, APIs, databases, payments, notifications, and third-party services.',
  },
  {
    icon: <FaBug />,
    title: 'Maintenance & Optimization',
    detail:
      'Debugging, performance improvements, deployment troubleshooting, and code cleanup.',
  },
];

const Availability = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePointerMove = (event) => {
    if (
      event.pointerType &&
      event.pointerType !== 'mouse' &&
      event.pointerType !== 'pen'
    ) {
      return;
    }

    const row = event.target.closest?.('.availability-row');
    const rowIndex = Number(row?.dataset.index);

    if (Number.isInteger(rowIndex)) {
      setActiveIndex((current) => (current === rowIndex ? current : rowIndex));
    }
  };

  return (
    <section
      id="about"
      className="availability-section"
      aria-labelledby="availability-title"
    >
      <motion.div
        className="availability-shell"
        initial={false}
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
      >
        <motion.div className="availability-heading" variants={fadeUp}>
          <h2 id="availability-title">What I Build</h2>
          <p>
            I’m Azrul Amaline, a Computer Science and Engineering graduate from
            Patuakhali Science and Technology University (PSTU), Bangladesh. Flutter and backend
            development are my core focus, with practical experience in
            deployment and Linux servers and a growing interest in cloud
            infrastructure.
          </p>
        </motion.div>

        <motion.div
          className="availability-list"
          variants={staggerContainer}
          onPointerMove={handlePointerMove}
        >
          {availabilityItems.map((item, index) => (
            <motion.article
              className={`availability-row ${index === activeIndex ? 'active' : ''}`}
              key={item.title}
              data-index={index}
              variants={fadeUp}
              tabIndex={0}
              onFocus={() => setActiveIndex(index)}
            >
              <span className="availability-number">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3>{item.title}</h3>
              <div>
                <span className="availability-icon">{item.icon}</span>
                <p>{item.detail}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Availability;
