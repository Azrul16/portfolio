import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBug, FaCodeBranch, FaDatabase, FaFire, FaMobileAlt, FaUsers } from 'react-icons/fa';
import { fadeUp, staggerContainer, viewportOnce } from './motionConfig';
import './Availability.css';

const availabilityItems = [
  { icon: <FaMobileAlt />, title: 'Flutter apps', detail: 'Mobile UI, screens, navigation, app flows' },
  { icon: <FaFire />, title: 'Firebase integration', detail: 'Auth, Firestore, storage, app backend setup' },
  { icon: <FaDatabase />, title: 'Django / Python APIs', detail: 'Backend endpoints, admin workflows, data logic' },
  { icon: <FaBug />, title: 'Bug fixing', detail: 'UI fixes, app cleanup, broken flow repair' },
  { icon: <FaCodeBranch />, title: 'Student projects', detail: 'Academic tools, prototypes, practical builds' },
  { icon: <FaUsers />, title: 'Collaboration', detail: 'Open-source ideas and product experiments' }
];

const Availability = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePointerMove = (event) => {
    if (event.pointerType && event.pointerType !== 'mouse' && event.pointerType !== 'pen') {
      return;
    }

    const row = event.target.closest?.('.availability-row');
    const rowIndex = Number(row?.dataset.index);

    if (Number.isInteger(rowIndex)) {
      setActiveIndex((current) => (current === rowIndex ? current : rowIndex));
    }
  };

  return (
    <section id="about" className="availability-section" aria-labelledby="availability-title">
      <motion.div className="availability-shell" initial="hidden" whileInView="visible" viewport={viewportOnce} variants={staggerContainer}>
        <motion.div className="availability-heading" variants={fadeUp}>
          <h2 id="availability-title">My Professional Services</h2>
          <p>I bring ideas to life with cross-platform mobile apps, optimized backends, and practical software support.</p>
        </motion.div>

        <motion.div className="availability-list" variants={staggerContainer} onPointerMove={handlePointerMove}>
          {availabilityItems.map((item, index) => (
            <motion.article
              className={`availability-row ${index === activeIndex ? 'active' : ''}`}
              key={item.title}
              data-index={index}
              variants={fadeUp}
              tabIndex={0}
              onFocus={() => setActiveIndex(index)}
            >
              <span className="availability-number">{String(index + 1).padStart(2, '0')}</span>
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
