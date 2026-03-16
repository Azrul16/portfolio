import React, { useEffect, useState } from 'react';
import './Skills.css';
import {
  SiFlutter, SiFirebase, SiHtml5, SiCss3, SiJavascript, SiReact, SiFigma,
  SiNodedotjs, SiExpress, SiPython, SiFastapi, SiFlask, SiMongodb,
  SiSocketdotio, SiWebmin, SiUbuntu,
  SiTensorflow, SiCplusplus,
  SiArduino, SiEspressif, SiRaspberrypi
} from 'react-icons/si';
import { RiFirebaseFill } from 'react-icons/ri';
import { FaBrain, FaWindows } from 'react-icons/fa';
import { motion } from 'framer-motion';

const allSkills = [
  { name: 'Flutter', icon: <SiFlutter size="3.5em" />, color: '#02569B' },
  { name: 'React.js', icon: <SiReact size="3.5em" />, color: '#61DAFB' },
  { name: 'Node.js', icon: <SiNodedotjs size="3.5em" />, color: '#339933' },
  { name: 'Python', icon: <SiPython size="3.5em" />, color: '#3776AB' },
  { name: 'JavaScript', icon: <SiJavascript size="3.5em" />, color: '#F7DF1E' },
  { name: 'Firebase', icon: <SiFirebase size="3.5em" />, color: '#FFCA28' },
  { name: 'MongoDB', icon: <SiMongodb size="3.5em" />, color: '#47A248' },
  { name: 'FastAPI', icon: <SiFastapi size="3.5em" />, color: '#009688' },
  { name: 'HTML5', icon: <SiHtml5 size="3.5em" />, color: '#E34F26' },
  { name: 'CSS3', icon: <SiCss3 size="3.5em" />, color: '#1572B6' },
  { name: 'Figma', icon: <SiFigma size="3.5em" />, color: '#F24E1E' },
  { name: 'Express.js', icon: <SiExpress size="3.5em" />, color: '#8F8F8F' },
  { name: 'Flask', icon: <SiFlask size="3.5em" />, color: '#A8B0B9' },
  { name: 'Firestore', icon: <RiFirebaseFill size="3.5em" />, color: '#FFCA28' },
  { name: 'WebSockets', icon: <SiSocketdotio size="3.5em" />, color: '#E6E6E6' },
  { name: 'Webmin', icon: <SiWebmin size="3.5em" />, color: '#4F6474' },
  { name: 'Ubuntu', icon: <SiUbuntu size="3.5em" />, color: '#E95420' },
  { name: 'Windows Server', icon: <FaWindows size="3.5em" />, color: '#00A4EF' },
  { name: 'C++', icon: <SiCplusplus size="3.5em" />, color: '#00599C' },
  { name: 'AI', icon: <FaBrain size="3.5em" />, color: '#FF6F61' },
  { name: 'Machine Learning', icon: <SiTensorflow size="3.5em" />, color: '#FF6F00' },
  { name: 'Arduino', icon: <SiArduino size="3.5em" />, color: '#00979D' },
  { name: 'ESP32-CAM', icon: <SiEspressif size="3.5em" />, color: '#3A4F62' },
  { name: 'Raspberry Pi', icon: <SiRaspberrypi size="3.5em" />, color: '#C51A4A' }
];

const Skills = () => {
  const [isCompactView, setIsCompactView] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    const updateCompactView = (event) => setIsCompactView(event.matches);

    setIsCompactView(mediaQuery.matches);
    mediaQuery.addEventListener('change', updateCompactView);

    return () => mediaQuery.removeEventListener('change', updateCompactView);
  }, []);

  return (
    <section id="skills" className="skills-section">
      {!isCompactView && (
        <div className="floating-shapes" aria-hidden="true">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="shape"
              initial={{
                x: Math.random() * 100,
                y: Math.random() * 100,
                rotate: Math.random() * 360,
                opacity: 0,
                scale: 0.5
              }}
              animate={{
                x: [null, Math.random() * 100],
                y: [null, Math.random() * 100],
                rotate: [null, Math.random() * 360],
                opacity: [0, 0.16, 0],
                scale: [0.5, 0.8, 0.5],
                transition: {
                  duration: 16 + Math.random() * 12,
                  repeat: Infinity,
                  repeatType: 'reverse'
                }
              }}
            />
          ))}
        </div>
      )}

      <div className="skills-shell">
        <motion.div className="section-title-block" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
          <h2>Core Expertise</h2>
        </motion.div>

        <motion.div className="skills-grid skills-grid-single-page" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.25 }}>
          {allSkills.map((skill) => (
            <SkillItem key={skill.name} skill={skill} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const SkillItem = ({ skill }) => {
  return (
    <motion.div
      className="skill-item"
      style={{ '--hover-color': skill.color }}
      whileHover={{ y: -4, boxShadow: `0 0 22px ${skill.color}30` }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 260, damping: 18 }}
    >
      <div className="skill-logo">{skill.icon}</div>
      <span className="skill-name">{skill.name}</span>
    </motion.div>
  );
};

export default Skills;

