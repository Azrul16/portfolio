import React, { useState, useEffect, useRef } from 'react';
import './Skills.css';
import {
  SiFlutter, SiFirebase, SiHtml5, SiCss3, SiJavascript, SiReact, SiFigma,
  SiNodedotjs, SiExpress, SiPython, SiFastapi, SiFlask, SiMongodb,
  SiSocketdotio, SiWebmin, SiUbuntu,
  SiTensorflow, SiCplusplus,
  SiArduino, SiEspressif, SiRaspberrypi
} from 'react-icons/si';
import { RiFirebaseFill } from 'react-icons/ri';
import { FaBrain, FaWindows, FaChevronDown } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const allSkills = [
  { name: 'Flutter', icon: <SiFlutter size="5em" />, color: '#02569B' },
  { name: 'React.js', icon: <SiReact size="5em" />, color: '#61DAFB' },
  { name: 'Node.js', icon: <SiNodedotjs size="5em" />, color: '#339933' },
  { name: 'Python', icon: <SiPython size="5em" />, color: '#3776AB' },
  { name: 'JavaScript', icon: <SiJavascript size="5em" />, color: '#F7DF1E' },
  { name: 'Firebase', icon: <SiFirebase size="5em" />, color: '#FFCA28' },
  { name: 'MongoDB', icon: <SiMongodb size="5em" />, color: '#47A248' },
  { name: 'FastAPI', icon: <SiFastapi size="5em" />, color: '#009688' },
  { name: 'HTML5', icon: <SiHtml5 size="5em" />, color: '#E34F26' },
  { name: 'CSS3', icon: <SiCss3 size="5em" />, color: '#1572B6' },
  { name: 'Figma', icon: <SiFigma size="5em" />, color: '#F24E1E' },
  { name: 'Express.js', icon: <SiExpress size="5em" />, color: '#000000' },
  { name: 'Flask', icon: <SiFlask size="5em" />, color: '#000000' },
  { name: 'Firestore', icon: <RiFirebaseFill size="5em" />, color: '#FFCA28' },
  { name: 'WebSockets', icon: <SiSocketdotio size="5em" />, color: '#010101' },
  { name: 'Webmin', icon: <SiWebmin size="5em" />, color: '#3B3B3B' },
  { name: 'Ubuntu', icon: <SiUbuntu size="5em" />, color: '#E95420' },
  { name: 'Windows Server', icon: <FaWindows size="5em" />, color: '#00A4EF' },
  { name: 'C++', icon: <SiCplusplus size="5em" />, color: '#00599C' },
  { name: 'AI', icon: <FaBrain size="5em" />, color: '#FF6F61' },
  { name: 'Machine Learning', icon: <SiTensorflow size="5em" />, color: '#FF6F00' },
  { name: 'Arduino', icon: <SiArduino size="5em" />, color: '#00979D' },
  { name: 'ESP32-CAM', icon: <SiEspressif size="5em" />, color: '#3A4F62' },
  { name: 'Raspberry Pi', icon: <SiRaspberrypi size="5em" />, color: '#C51A4A' },
];

const Skills = () => {
  const [showAllSkills, setShowAllSkills] = useState(false);
  const modalRef = useRef();

  useEffect(() => {
    if (showAllSkills) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.body.style.overflow = 'auto';
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.body.style.overflow = 'auto';
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showAllSkills]);

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setShowAllSkills(false);
    }
  };

  return (
    <section id="skills" className="skills-section">
      {/* Floating animated shapes */}
      <div className="floating-shapes">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="shape"
            initial={{
              x: Math.random() * 100,
              y: Math.random() * 100,
              rotate: Math.random() * 360,
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              x: [null, Math.random() * 100],
              y: [null, Math.random() * 100],
              rotate: [null, Math.random() * 360],
              opacity: [0, 0.2, 0],
              scale: [0.5, 0.8, 0.5],
              transition: {
                duration: 15 + Math.random() * 15,
                repeat: Infinity,
                repeatType: 'reverse',
              },
            }}
          />
        ))}
      </div>

      {/* Glowing particles */}
      <div className="particles">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            initial={{
              x: Math.random() * 100,
              y: Math.random() * 100,
              opacity: 0,
              scale: 0,
            }}
            animate={{
              x: [null, Math.random() * 100],
              y: [null, Math.random() * 100],
              opacity: [0, 0.8, 0],
              scale: [0, Math.random() * 0.5 + 0.5, 0],
              transition: {
                duration: 5 + Math.random() * 10,
                repeat: Infinity,
                repeatDelay: Math.random() * 5,
              },
            }}
          />
        ))}
      </div>

      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Professional <span className="highlight">Skills</span>
      </motion.h2>

      <div className="skills-container">
        <motion.div 
          className="skills-grid"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {allSkills.slice(0, 10).map((skill, index) => (
            <SkillItem key={skill.name} skill={skill} index={index} />
          ))}
        </motion.div>

        <motion.div 
          className="see-all-container"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.button 
            className="see-all-btn"
            onClick={() => setShowAllSkills(true)}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 20px rgba(108, 99, 255, 0.7)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              animate={{ 
                y: [0, 5, 0],
                transition: { 
                  duration: 1.5, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            >
              Explore All Skills
            </motion.span>
            <motion.span
              animate={{ 
                y: [0, 5, 0],
                transition: { 
                  duration: 1.5, 
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.2
                }
              }}
            >
              <FaChevronDown />
            </motion.span>
          </motion.button>
        </motion.div>
      </div>

      <AnimatePresence>
        {showAllSkills && (
          <motion.div 
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <motion.div 
              ref={modalRef}
              className="skills-modal"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                transition: {
                  type: "spring",
                  stiffness: 400,
                  damping: 30
                }
              }}
              exit={{ 
                opacity: 0, 
                scale: 0.9,
                transition: {
                  duration: 0.2,
                  ease: "easeIn"
                }
              }}
            >
              <motion.div 
                className="modal-content"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: 1,
                  transition: { delay: 0.2 }
                }}
              >
                <div className="skills-list">
                  {allSkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ 
                        opacity: 1, 
                        y: 0,
                        transition: {
                          delay: 0.3 + index * 0.02,
                          type: "spring",
                          stiffness: 300
                        }
                      }}
                    >
                      <SkillItem skill={skill} modalView index={index} />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const SkillItem = ({ skill, modalView = false, index }) => {
  return (
    <motion.div
      className={`skill-item ${modalView ? 'modal-view' : ''}`}
      style={{ '--hover-color': skill.color }}
      whileHover={{ 
        scale: 1.1,
        boxShadow: `0 0 20px ${skill.color}80`,
        zIndex: 10
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <motion.div 
        className="skill-logo"
        animate={modalView ? {
          rotate: [0, 10, -10, 0],
          transition: {
            delay: 0.5 + index * 0.03,
            duration: 0.5
          }
        } : {}}
      >
        {skill.icon}
      </motion.div>
      <motion.span 
        className="skill-name"
        animate={modalView ? {
          opacity: [0, 1],
          y: [10, 0],
          transition: {
            delay: 0.7 + index * 0.03
          }
        } : {}}
      >
        {skill.name}
      </motion.span>
    </motion.div>
  );
};

export default Skills;