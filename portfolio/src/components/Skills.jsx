import React, { useState } from 'react';
import './Skills.css';
import {
  SiFlutter, SiFirebase, SiHtml5, SiCss3, SiJavascript, SiReact, SiFigma,
  SiNodedotjs, SiExpress, SiPython, SiFastapi, SiFlask, SiMongodb,
  SiSocketdotio, SiWebmin, SiUbuntu,
  SiTensorflow, SiCplusplus,
  SiArduino, SiEspressif, SiRaspberrypi
} from 'react-icons/si';
import { RiFirebaseFill } from 'react-icons/ri';
import { FaBrain, FaWindows, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

// Top 8 skills to show initially
const topSkills = [
  { name: 'Flutter', icon: <SiFlutter size="5em" />, color: '#02569B' },
  { name: 'React.js', icon: <SiReact size="5em" />, color: '#61DAFB' },
  { name: 'Node.js', icon: <SiNodedotjs size="5em" />, color: '#339933' },
  { name: 'Python', icon: <SiPython size="5em" />, color: '#3776AB' },
  { name: 'JavaScript', icon: <SiJavascript size="5em" />, color: '#F7DF1E' },
  { name: 'Firebase', icon: <SiFirebase size="5em" />, color: '#FFCA28' },
  { name: 'MongoDB', icon: <SiMongodb size="5em" />, color: '#47A248' },
  { name: 'FastAPI', icon: <SiFastapi size="5em" />, color: '#009688' },
];

// All skills organized by category
const skillsByCategory = [
  {
    category: 'Mobile & Frontend',
    items: [
      { name: 'Flutter', icon: <SiFlutter size="5em" />, color: '#02569B' },
      { name: 'Firebase', icon: <SiFirebase size="5em" />, color: '#FFCA28' },
      { name: 'HTML5', icon: <SiHtml5 size="5em" />, color: '#E34F26' },
      { name: 'CSS3', icon: <SiCss3 size="5em" />, color: '#1572B6' },
      { name: 'JavaScript', icon: <SiJavascript size="5em" />, color: '#F7DF1E' },
      { name: 'React.js', icon: <SiReact size="5em" />, color: '#61DAFB' },
      { name: 'Figma', icon: <SiFigma size="5em" />, color: '#F24E1E' },
    ],
  },
  {
    category: 'Backend & Server',
    items: [
      { name: 'Node.js', icon: <SiNodedotjs size="5em" />, color: '#339933' },
      { name: 'Express.js', icon: <SiExpress size="5em" />, color: '#000000' },
      { name: 'Python', icon: <SiPython size="5em" />, color: '#3776AB' },
      { name: 'FastAPI', icon: <SiFastapi size="5em" />, color: '#009688' },
      { name: 'Flask', icon: <SiFlask size="5em" />, color: '#000000' },
      { name: 'MongoDB', icon: <SiMongodb size="5em" />, color: '#47A248' },
      { name: 'Firestore', icon: <RiFirebaseFill size="5em" />, color: '#FFCA28' },
      { name: 'WebSockets', icon: <SiSocketdotio size="5em" />, color: '#010101' },
      { name: 'Webmin', icon: <SiWebmin size="5em" />, color: '#3B3B3B' },
      { name: 'Ubuntu', icon: <SiUbuntu size="5em" />, color: '#E95420' },
      { name: 'Windows Server', icon: <FaWindows size="5em" />, color: '#00A4EF' },
      { name: 'C++', icon: <SiCplusplus size="5em" />, color: '#00599C' },
    ],
  },
  {
    category: 'AI & Digital Forensics',
    items: [
      { name: 'AI', icon: <FaBrain size="5em" />, color: '#FF6F61' },
      { name: 'Machine Learning', icon: <SiTensorflow size="5em" />, color: '#FF6F00' },
    ],
  },
  {
    category: 'Hardware & IoT',
    items: [
      { name: 'Arduino', icon: <SiArduino size="5em" />, color: '#00979D' },
      { name: 'ESP32-CAM', icon: <SiEspressif size="5em" />, color: '#3A4F62' },
      { name: 'Raspberry Pi', icon: <SiRaspberrypi size="5em" />, color: '#C51A4A' },
    ],
  },
];

const Skills = () => {
  const [showAllSkills, setShowAllSkills] = useState(false);

  return (
    <section id="skills" className="skills-section">
      <div className="background-animation">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="floating-shape"
            initial={{
              x: Math.random() * 100,
              y: Math.random() * 100,
              rotate: Math.random() * 360,
              opacity: 0.1,
            }}
            animate={{
              x: [null, Math.random() * 100],
              y: [null, Math.random() * 100],
              rotate: [null, Math.random() * 360],
              transition: {
                duration: 20 + Math.random() * 20,
                repeat: Infinity,
                repeatType: 'reverse',
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
      
      <motion.div 
        className="skills-grid"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {topSkills.map((skill) => (
          <SkillItem key={skill.name} skill={skill} />
        ))}
      </motion.div>
      
      <motion.div 
        className="see-all-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <button 
          className="see-all-btn"
          onClick={() => setShowAllSkills(true)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          See All Skills
          <motion.span
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <FaChevronDown />
          </motion.span>
        </button>
      </motion.div>
      
      <AnimatePresence>
        {showAllSkills && (
          <motion.div 
            className="skills-modal"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ type: 'spring', damping: 25 }}
          >
            <div className="modal-header">
              <h3>All Skills</h3>
              <button 
                className="close-btn"
                onClick={() => setShowAllSkills(false)}
              >
                <FaChevronUp />
              </button>
            </div>
            
            <div className="modal-content">
              {skillsByCategory.map((category) => (
                <div key={category.category} className="skills-category">
                  <h4>{category.category}</h4>
                  <div className="category-skills">
                    {category.items.map((skill) => (
                      <SkillItem key={skill.name} skill={skill} modalView />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const SkillItem = ({ skill, modalView = false }) => {
  return (
    <motion.div
      className={`skill-item ${modalView ? 'modal-view' : ''}`}
      style={{ '--hover-color': skill.color }}
      whileHover={!modalView ? { scale: 1.05 } : {}}
      whileTap={!modalView ? { scale: 0.95 } : {}}
    >
      <div className="skill-logo">
        {skill.icon}
      </div>
      <span className="skill-name">{skill.name}</span>
    </motion.div>
  );
};

export default Skills;