import React from 'react';
import './Skills.css';
import {
  SiFlutter, SiFirebase, SiPython, SiFastapi, SiFlask,
  SiSocketdotio, SiWebmin, SiUbuntu, SiKalilinux, SiWireshark,
  SiTensorflow, SiCplusplus,
  SiArduino, SiEspressif, SiRaspberrypi
} from 'react-icons/si';
import { RiFirebaseFill } from 'react-icons/ri';
import { FaBrain, FaWindows, FaFingerprint, FaSkull, FaNetworkWired, FaDatabase, FaKey, FaUserSecret } from 'react-icons/fa';
import { motion } from 'framer-motion';

const allSkills = [
  { name: 'Flutter', icon: <SiFlutter size="3.5em" />, color: '#02569B' },
  { name: 'Python', icon: <SiPython size="3.5em" />, color: '#3776AB' },
  { name: 'Firebase', icon: <SiFirebase size="3.5em" />, color: '#FFCA28' },
  { name: 'FastAPI', icon: <SiFastapi size="3.5em" />, color: '#009688' },
  { name: 'Flask', icon: <SiFlask size="3.5em" />, color: '#A8B0B9' },
  { name: 'Firestore', icon: <RiFirebaseFill size="3.5em" />, color: '#FFCA28' },
  { name: 'WebSockets', icon: <SiSocketdotio size="3.5em" />, color: '#E6E6E6' },
  { name: 'Forensics', icon: <FaFingerprint size="3.5em" />, color: '#8AD1FF' },
  { name: 'Autopsy', icon: <FaSkull size="3.5em" />, color: '#B5B5B5' },
  { name: 'SQL Injection', icon: <FaDatabase size="3.5em" />, color: '#4DB6AC' },
  { name: 'Hashcat', icon: <FaKey size="3.5em" />, color: '#FFC857' },
  { name: 'John the Ripper', icon: <FaUserSecret size="3.5em" />, color: '#C084FC' },
  { name: 'Nmap', icon: <FaNetworkWired size="3.5em" />, color: '#3B82F6' },
  { name: 'Wireshark', icon: <SiWireshark size="3.5em" />, color: '#1679C5' },
  { name: 'Webmin', icon: <SiWebmin size="3.5em" />, color: '#4F6474' },
  { name: 'Kali Linux', icon: <SiKalilinux size="3.5em" />, color: '#557CDA' },
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
  return (
    <section id="skills" className="skills-section">
      <div className="skills-shell">
        <motion.div
          className="section-title-block"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2>Core Expertise</h2>
        </motion.div>

        <motion.div
          className="skills-grid skills-grid-single-page"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.1 }}
        >
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
      style={{ '--hover-color': skill.color, '--pointer-glow-color': `${skill.color}33` }}
      whileHover={{ y: -4, boxShadow: `0 0 22px ${skill.color}30` }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 260, damping: 18 }}
      data-pointer-glow
    >
      <div className="skill-logo">{skill.icon}</div>
      <span className="skill-name">{skill.name}</span>
    </motion.div>
  );
};

export default Skills;

