import React, { useEffect } from 'react';
import './About.css';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10
      }
    }
  };

  const floatingVariants = {
    float: {
      y: [0, -15, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const highlightVariants = {
    hover: {
      scale: 1.05,
      color: '#9f7aea',
      textShadow: '0 0 8px rgba(159, 122, 234, 0.6)',
      transition: { duration: 0.3 }
    }
  };

  return (
    <section id="about" className="about-section" ref={ref}>
      <div className="floating-shapes">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="shape"
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 80 - 40, 0],
              rotate: [0, Math.random() * 180 - 90],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 12 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 3
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 15 + 5}px`,
              height: `${Math.random() * 15 + 5}px`,
              background: `rgba(159, 122, 234, ${Math.random() * 0.3 + 0.1})`,
              borderRadius: `${Math.random() * 50}%`
            }}
          />
        ))}
      </div>
      
      <motion.div 
        className="about-content"
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        <motion.div className="header-wrapper" variants={itemVariants}>
          <motion.h2 
            className="section-title"
            whileHover={{ scale: 1.02 }}
          >
            <motion.span 
              className="emoji"
              variants={floatingVariants}
              animate="float"
            >
              👋
            </motion.span> 
            About Me
          </motion.h2>
          <motion.div 
            className="title-underline"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        <motion.div className="about-grid">
          <motion.div 
            className="about-card"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <motion.h3 
              className="card-title"
              whileHover="hover"
              variants={highlightVariants}
            >
              Who I Am
            </motion.h3>
            <motion.p className="card-text">
              I'm <motion.span whileHover="hover" variants={highlightVariants}>Azrul Amaline</motion.span>, a passionate Flutter developer and tech enthusiast from Bangladesh, dedicated to creating elegant digital experiences.
            </motion.p>
          </motion.div>

          <motion.div 
            className="about-card"
            variants={itemVariants}
            whileHover={{ y: -5 }}
            transition={{ delay: 0.2 }}
          >
            <motion.h3 
              className="card-title"
              whileHover="hover"
              variants={highlightVariants}
            >
              My Expertise
            </motion.h3>
            <motion.p className="card-text">
              I specialize in <motion.span whileHover="hover" variants={highlightVariants}>cross-platform</motion.span> development with Flutter, crafting beautiful UIs and robust backends that deliver seamless user experiences.
            </motion.p>
          </motion.div>

          <motion.div 
            className="about-card"
            variants={itemVariants}
            whileHover={{ y: -5 }}
            transition={{ delay: 0.4 }}
          >
            <motion.h3 
              className="card-title"
              whileHover="hover"
              variants={highlightVariants}
            >
              Beyond Coding
            </motion.h3>
            <motion.p className="card-text">
              As a Computer Science student, I explore <motion.span whileHover="hover" variants={highlightVariants}>AI</motion.span> and <motion.span whileHover="hover" variants={highlightVariants}>IoT</motion.span>, mentor aspiring developers, and share knowledge through my YouTube channel.
            </motion.p>
          </motion.div>

          <motion.div 
            className="about-card"
            variants={itemVariants}
            whileHover={{ y: -5 }}
            transition={{ delay: 0.6 }}
          >
            <motion.h3 
              className="card-title"
              whileHover="hover"
              variants={highlightVariants}
            >
              My Approach
            </motion.h3>
            <motion.p className="card-text">
              I believe in <motion.span whileHover="hover" variants={highlightVariants}>clean</motion.span>, <motion.span whileHover="hover" variants={highlightVariants}>efficient</motion.span> solutions that solve real problems. Every project is an opportunity to learn and innovate.
            </motion.p>
          </motion.div>
        </motion.div>

        <motion.div 
          className="cta-wrapper"
          variants={itemVariants}
          transition={{ delay: 0.8 }}
        >
          <motion.a
            href="https://drive.usercontent.google.com/download?id=1ZmV67fJUZ1FATBmHdekrqgkw09bmZkX_&export=download&authuser=0&confirm=t&uuid=f6fd6eaf-b097-4fa9-b482-ab647735efa0&at=AN8xHoodmwJNJQf8ZX1YNOvayv4F:1753280649921"
            className="cta-button"
            whileHover={{ 
              y: -3,
              boxShadow: "0 10px 25px rgba(159, 122, 234, 0.5)"
            }}
            whileTap={{ scale: 0.98 }}
            download="Azrul_Amaline_CV.pdf"
          >
            <span>Download CV</span>
            <motion.span
              animate={{
                y: [0, 5, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity
              }}
            >
              ↓
            </motion.span>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;