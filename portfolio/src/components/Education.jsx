import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import './Education.css';

const educationList = [
  {
    institution: 'Patuakhali Science and Technology University',
    degree: 'B.Sc. in Computer Science',
    years: '2022 - Present',
    details: ['Coursework: Algorithms, Data Structures, AI, Web Development']
  },
  {
    institution: 'Maheshpur Govt Degree College',
    degree: 'Higher Secondary Certificate, Science',
    years: '2018 - 2020',
    details: ['Activities: Science Club, Debate Team']
  },
  {
    institution: 'Maheshpur Govt Pilot Model High School',
    degree: 'Secondary School Certificate, Science',
    years: '2013 - 2018',
    details: ['Activities: Math Olympiad, Science Fair']
  }
];

const Education = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.14,
        delayChildren: 0.12
      }
    }
  };

  const itemVariants = {
    hidden: { y: 28, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 95,
        damping: 14
      }
    }
  };

  return (
    <section id="education" className="education-section" ref={ref}>
      <div className="education-glow education-glow-left" aria-hidden="true"></div>
      <div className="education-glow education-glow-right" aria-hidden="true"></div>

      <motion.div className="education-container" initial="hidden" animate={controls} variants={containerVariants}>
        <motion.div className="section-title-block" variants={itemVariants}>
          <h2>Academic Journey</h2>
        </motion.div>

        <div className="timeline">
          <div className="timeline-line"></div>
          {educationList.map((edu) => (
            <motion.article className="timeline-item" key={edu.institution} variants={itemVariants} whileHover={{ y: -5 }}>
              <div className="timeline-marker">
                <span className="timeline-dot"></span>
              </div>
              <div className="timeline-body">
                <div className="timeline-year">{edu.years}</div>
                <div className="timeline-content">
                  <h3>{edu.institution}</h3>
                  <p className="degree">{edu.degree}</p>
                  <ul className="edu-details">
                    {edu.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Education;

