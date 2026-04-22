import React from 'react';
import './About.css';
import { motion } from 'framer-motion';

const highlights = [
  {
    eyebrow: 'Core Focus',
    title: 'Software Developer',
    text: 'I build clean, practical, and reliable digital products with an emphasis on usability and long-term maintainability.',
    tone: 'featured'
  },
  {
    eyebrow: 'Specialty',
    title: 'Mobile Development',
    text: 'Flutter is my main tool for shaping cross-platform experiences that feel polished, fast, and consistent.',
    tone: 'accent'
  },
  {
    eyebrow: 'Exploration',
    title: 'AI, IoT, and Systems',
    text: 'I keep expanding into adjacent technologies so the products I build can be more adaptive, connected, and useful.',
    tone: 'standard'
  }
];

const values = [
  'Product-focused thinking',
  'Clear interface decisions',
  'Reliable implementation',
  'Fast learning mindset'
];

const stats = [
  { value: 'Flutter', label: 'Primary stack' },
  { value: 'Backend', label: 'Practical systems' },
  { value: 'UX', label: 'Clarity first' }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-orb about-orb-left" aria-hidden="true"></div>
      <div className="about-orb about-orb-right" aria-hidden="true"></div>
      <div className="about-grid-glow about-grid-glow-top" aria-hidden="true"></div>
      <div className="about-grid-glow about-grid-glow-bottom" aria-hidden="true"></div>

      <motion.div
        className="about-content"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div className="section-title-block" variants={itemVariants}>
          <h2>Profile Overview</h2>
        </motion.div>

        <div className="about-shell">
          <motion.article className="about-hero-card" variants={itemVariants} data-pointer-glow>
            <div className="about-hero-noise" aria-hidden="true"></div>
            <p className="about-kicker">Developer from Bangladesh</p>
            <h3>Building mobile products and software experiences that feel calm, capable, and intentional.</h3>
            <p className="about-lead">
              My work blends product thinking, interface clarity, and dependable engineering. I care about making software not just functional, but easy to trust and enjoyable to use.
            </p>

            <div className="about-values">
              {values.map((item) => (
                <span key={item} className="about-value-pill">{item}</span>
              ))}
            </div>

            <div className="about-stats">
              {stats.map((stat) => (
                <div key={stat.label} className="about-stat">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.article>

          <motion.div className="about-cards-grid" variants={containerVariants}>
            {highlights.map((card) => (
              <motion.article
                key={card.title}
                className={`about-card about-card-${card.tone}`}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.01 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                data-pointer-glow
              >
                <div className="about-card-inner">
                  <p className="about-card-eyebrow">{card.eyebrow}</p>
                  <h3 className="card-title">{card.title}</h3>
                  <p className="card-text">{card.text}</p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
