import React, { useEffect } from 'react';
import './About.css';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const aboutCards = [
  {
    title: 'Software Developer',
    text: 'I am Azrul Amaline, a software developer from Bangladesh focused on building clean, practical, and reliable digital products.',
    tone: 'featured'
  },
  {
    title: 'Mobile Development',
    text: 'My primary focus is cross-platform application development with Flutter, supported by backend integration and product-oriented thinking.',
    tone: 'accent'
  },
  {
    title: 'Technical Interests',
    text: 'I continue to expand my knowledge through work in AI, IoT, and software systems to build better and more adaptable solutions.',
    tone: 'standard'
  },
  {
    title: 'Work Approach',
    text: 'I value clarity in design and code, aiming to create products that are useful, efficient, and easy to maintain.',
    tone: 'standard'
  }
];

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.12, triggerOnce: false });

  useEffect(() => {
    controls.start(inView ? 'visible' : 'hidden');
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { y: 22, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 14
      }
    }
  };

  return (
    <section id="about" className="about-section" ref={ref}>
      <div className="about-orb about-orb-left" aria-hidden="true"></div>
      <div className="about-orb about-orb-right" aria-hidden="true"></div>

      <motion.div className="about-content" initial="hidden" animate={controls} variants={containerVariants}>
        <motion.div className="section-title-block" variants={itemVariants}>
          <h2>Profile Overview</h2>
        </motion.div>

        <motion.div className="about-grid about-grid-reimagined" variants={containerVariants}>
          {aboutCards.map((card) => (
            <motion.article
              key={card.title}
              className={`about-card about-card-${card.tone}`}
              variants={itemVariants}
              whileHover={{ y: -6 }}
            >
              <div className="about-card-inner">
                <h3 className="card-title">{card.title}</h3>
                <p className="card-text">{card.text}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;

