import React from 'react';
import './About.css';
import { motion } from 'framer-motion';

const highlights = [
  {
    eyebrow: 'Core Focus',
    title: 'Software Developer',
    text: 'I build practical apps, backend utilities, and reusable tools with an emphasis on clear flows and maintainable implementation.',
    tone: 'featured'
  },
  {
    eyebrow: 'Specialty',
    title: 'Mobile Development',
    text: 'Flutter and Dart are my main tools for shaping mobile apps, UI components, and package-style projects.',
    tone: 'accent'
  },
  {
    eyebrow: 'Exploration',
    title: 'AI, IoT, and Systems',
    text: 'I explore AI, IoT, networking, and automation through focused repos like BanglaSpeech2Text and smart home apps.',
    tone: 'standard'
  }
];

const values = [
  'Flutter app development',
  'Reusable package thinking',
  'Backend and automation tools',
  'AI and IoT exploration'
];

const stats = [
  { value: 'Flutter', label: 'Primary stack' },
  { value: '22+', label: 'Curated GitHub projects' },
  { value: 'AI + IoT', label: 'Active exploration' }
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
              I am a Computer Science student at Patuakhali Science and Technology University, focused on Flutter apps, backend utilities, AI experiments, and tools that solve real user problems.
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
