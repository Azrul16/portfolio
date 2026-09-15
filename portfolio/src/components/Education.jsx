import React from 'react';
import { m as motion } from 'framer-motion';
import './Education.css';

const educationList = [
  {
    institution: 'Patuakhali Science and Technology University',
    degree: 'B.Sc. in Computer Science',
    years: '2022 - Present',
    details: ['Focus areas: algorithms, data structures, AI, web systems, mobile app development, and practical software projects']
  },

];

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.045,
      delayChildren: 0.02
    }
  }
};

const itemVariants = {
  hidden: {
    opacity: 1,
    y: 0
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.34,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const lineVariants = {
  hidden: { scaleY: 1, opacity: 1 },
  visible: {
    scaleY: 1,
    opacity: 1,
    transition: {
      duration: 0.32,
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
        initial={false}
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.div className="section-title-block" variants={itemVariants}>
          <h2>Education</h2>
        </motion.div>

        <div className="timeline">
          <motion.div className="timeline-line" variants={lineVariants}></motion.div>
          {educationList.map((edu, index) => (
            <motion.article
              className="timeline-item"
              key={edu.institution}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.18, ease: 'easeOut' }}
            >
              <div className="timeline-marker">
                <motion.span
                  className="timeline-dot"
                  initial={{ scale: 1, opacity: 1 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{
                    duration: 0.24,
                    delay: 0.04 + index * 0.035,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                ></motion.span>
              </div>
              <div className="timeline-body">
                <motion.div
                  className="timeline-year"
                  initial={{ opacity: 1, x: 0 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.7 }}
                  transition={{
                    duration: 0.28,
                    delay: 0.04 + index * 0.035,
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
                        initial={{ opacity: 1, y: 0 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.7 }}
                        transition={{
                          duration: 0.24,
                          delay: 0.06 + index * 0.035,
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
