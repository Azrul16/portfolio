import React from 'react';
import { motion } from 'framer-motion';
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.08
    }
  }
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 34
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.82,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const lineVariants = {
  hidden: { scaleY: 0, opacity: 0.35 },
  visible: {
    scaleY: 1,
    opacity: 1,
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const Education = () => {
  return (
    <section id="education" className="education-section">
      <div className="education-glow education-glow-left" aria-hidden="true"></div>
      <div className="education-glow education-glow-right" aria-hidden="true"></div>

      <motion.div
        className="education-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.div className="section-title-block" variants={itemVariants}>
          <h2>Academic Journey</h2>
        </motion.div>

        <div className="timeline">
          <motion.div className="timeline-line" variants={lineVariants}></motion.div>
          {educationList.map((edu, index) => (
            <motion.article
              className="timeline-item"
              key={edu.institution}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.28, ease: 'easeOut' }}
            >
              <div className="timeline-marker">
                <motion.span
                  className="timeline-dot"
                  initial={{ scale: 0.6, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{
                    duration: 0.45,
                    delay: 0.12 + index * 0.08,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                ></motion.span>
              </div>
              <div className="timeline-body">
                <motion.div
                  className="timeline-year"
                  initial={{ opacity: 0, x: -18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.7 }}
                  transition={{
                    duration: 0.55,
                    delay: 0.14 + index * 0.08,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                >
                  {edu.years}
                </motion.div>
                <div className="timeline-content" data-pointer-glow>
                  <h3>{edu.institution}</h3>
                  <p className="degree">{edu.degree}</p>
                  <ul className="edu-details">
                    {edu.details.map((detail) => (
                      <motion.li
                        key={detail}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.7 }}
                        transition={{
                          duration: 0.4,
                          delay: 0.2 + index * 0.08,
                          ease: [0.22, 1, 0.36, 1]
                        }}
                      >
                        {detail}
                      </motion.li>
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
