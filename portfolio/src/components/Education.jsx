import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import './Education.css';

const educationList = [
  {
    institution: 'Patuakhali Science and Technology University',
    degree: 'B.Sc. in Computer Science',
    years: '2022 - Present',
    details: [

      'Coursework: Algorithms, Data Structures, AI, Web Development'
    ],
  },
  {
    institution: 'Maheshpur Govt Degree College',
    degree: 'Passed HSC (Science)',
    years: '2018 - 2020',
    details: [

      'Activities: Science Club, Debate Team'
    ],
  },
  {
    institution: 'Maheshpur Govt Pilot Model High School',
    degree: 'Passed SSC (Science)',
    years: '2013 - 2018',
    details: [

      'Activities: Math Olympiad, Science Fair'
    ],
  },
];

const Education = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  // Floating shapes for background
  const shapes = Array(12).fill().map((_, i) => ({
    id: i,
    type: ['circle', 'square', 'triangle'][Math.floor(Math.random() * 3)],
    size: Math.random() * 30 + 20,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 30 + 20,
    delay: Math.random() * 5,
    opacity: Math.random() * 0.3 + 0.1,
    color: `rgba(${Math.floor(Math.random() * 50 + 150)}, ${Math.floor(Math.random() * 50 + 100)}, ${Math.floor(Math.random() * 50 + 200)}, ${Math.random() * 0.3 + 0.1})`
  }));

  return (
    <section id="education" className="education-section" ref={ref}>
      {/* Animated Background Elements */}
      <div className="education-background">
        {shapes.map((shape) => (
          <motion.div
            key={shape.id}
            className={`bg-shape bg-${shape.type}`}
            style={{
              width: shape.size,
              height: shape.size,
              background: shape.color,
              left: `${shape.x}%`,
              top: `${shape.y}%`,
              opacity: shape.opacity
            }}
            animate={{
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: shape.duration,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
              delay: shape.delay
            }}
          />
        ))}
      </div>

      <motion.div
        className="education-container"
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        <motion.h2 variants={itemVariants}>
          <motion.span 
            className="emoji"
            animate={{
              y: [0, -10, 0],
              rotate: [0, 10, -10, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            🎓
          </motion.span> 
          <span className="title-text">Education Journey</span>
        </motion.h2>
        
        <div className="timeline">
          {educationList.map((edu, index) => (
            <motion.div 
              className="timeline-item" 
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 15px 35px rgba(0, 0, 0, 0.4)"
              }}
            >
              <div className="timeline-dot">
                <motion.div 
                  className="inner-dot"
                  whileHover={{ scale: 1.5 }}
                />
                <div className="pulse-effect"></div>
              </div>
              <motion.div 
                className="timeline-content"
                whileHover={{
                  background: "rgba(13, 6, 21, 0.9)",
                  borderLeftColor: "#6d28d9"
                }}
              >
                <div className="timeline-year">{edu.years}</div>
                <h3>{edu.institution}</h3>
                <p className="degree">{edu.degree}</p>
                {edu.details.length > 0 && (
                  <ul className="edu-details">
                    {edu.details.map((d, i) => (
                      <motion.li 
                        key={i}
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: i * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <span className="detail-bullet">•</span> {d}
                      </motion.li>
                    ))}
                  </ul>
                )}
                <div className="card-corner"></div>
              </motion.div>
            </motion.div>
          ))}
          <div className="timeline-line"></div>
        </div>
      </motion.div>
    </section>
  );
}

export default Education;