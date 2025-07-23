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
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 15,
        mass: 0.5
      }
    }
  };

  const floatVariants = {
    float: {
      y: [0, -15, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="about" className="about-section" ref={ref}>
      <div className="floating-particles">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              background: `rgba(159, 122, 234, ${Math.random() * 0.4 + 0.1})`,
              borderRadius: '50%'
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
        <motion.h2 variants={itemVariants}>
          <motion.span 
            className="emoji-wrapper"
            variants={floatVariants}
            animate="float"
          >
            👤
          </motion.span> 
          <span className="title-text">About Me</span>
        </motion.h2>

        <motion.div 
          className="paragraph-container left"
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
        >
          <motion.p 
            className="about-paragraph"
            animate={{
              y: [0, -5, 0],
              boxShadow: [
                "0 4px 15px rgba(0, 0, 0, 0.2)",
                "0 8px 25px rgba(159, 122, 234, 0.4)",
                "0 4px 15px rgba(0, 0, 0, 0.2)"
              ]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Hi! I'm <span className="highlight">Azrul Amaline</span>, a <span className="font-fancy">versatile</span> and <span className="font-fancy">passionate</span> Flutter developer and tech enthusiast from <span className="highlight">Bangladesh</span>. I love creating digital experiences that are clean, engaging, and efficient.
          </motion.p>
        </motion.div>

        <motion.div 
          className="paragraph-container right"
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
        >
          <motion.p 
            className="about-paragraph"
            animate={{
              y: [0, -5, 0],
              boxShadow: [
                "0 4px 15px rgba(0, 0, 0, 0.2)",
                "0 8px 25px rgba(159, 122, 234, 0.4)",
                "0 4px 15px rgba(0, 0, 0, 0.2)"
              ]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          >
            I specialize in building <span className="font-fancy">cross-platform</span> mobile and web applications with <span className="font-fancy">elegant UIs</span> and <span className="font-fancy">solid backends</span>. My focus lies in developing apps that are both functional and user-centric.
          </motion.p>
        </motion.div>

        <motion.div 
          className="paragraph-container left"
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
        >
          <motion.p 
            className="about-paragraph"
            animate={{
              y: [0, -5, 0],
              boxShadow: [
                "0 4px 15px rgba(0, 0, 0, 0.2)",
                "0 8px 25px rgba(159, 122, 234, 0.4)",
                "0 4px 15px rgba(0, 0, 0, 0.2)"
              ]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          >
            With a strong foundation in <span className="font-fancy">software development</span>, <span className="font-fancy">IoT</span>, and <span className="font-fancy">AI research</span>, I have led and contributed to several projects involving Flutter, Firebase, Node.js, and real-time systems.
          </motion.p>
        </motion.div>

        <motion.div 
          className="paragraph-container right"
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
        >
          <motion.p 
            className="about-paragraph"
            animate={{
              y: [0, -5, 0],
              boxShadow: [
                "0 4px 15px rgba(0, 0, 0, 0.2)",
                "0 8px 25px rgba(159, 122, 234, 0.4)",
                "0 4px 15px rgba(0, 0, 0, 0.2)"
              ]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3
            }}
          >
            I'm also a Computer Science student who actively engages in <span className="font-fancy">AI</span>, <span className="font-fancy">cybersecurity</span>, and <span className="font-fancy">cloud computing</span> research. I regularly participate in tech events and contribute to the open-source community through my projects on <span className="highlight">GitHub</span>.
          </motion.p>
        </motion.div>

        <motion.div 
          className="paragraph-container left"
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
        >
          <motion.p 
            className="about-paragraph"
            animate={{
              y: [0, -5, 0],
              boxShadow: [
                "0 4px 15px rgba(0, 0, 0, 0.2)",
                "0 8px 25px rgba(159, 122, 234, 0.4)",
                "0 4px 15px rgba(0, 0, 0, 0.2)"
              ]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4
            }}
          >
            Besides coding, I mentor aspiring developers, take part in hackathons, and share tech tutorials on my <span className="highlight">YouTube channel "Thirsty Bot"</span>. I'm driven by curiosity, and I believe in building things that make life easier and smarter.
          </motion.p>
        </motion.div>

        <motion.div 
          className="cta-container"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
        >
          <motion.a 
            href="#" 
            className="cv-btn" 
            download
            whileHover={{ 
              scale: 1.1,
              boxShadow: "0 12px 30px rgba(159, 122, 234, 0.8)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="btn-text">Download CV</span>
            <motion.span 
              className="btn-icon"
              animate={{
                y: [0, 5, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
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