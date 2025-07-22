import React from 'react';
import './Skills.css';
import {
  SiFlutter, SiFirebase, SiHtml5, SiCss3, SiJavascript, SiReact, SiFigma,
  SiNodedotjs, SiExpress, SiPython, SiFastapi, SiFlask, SiMongodb, SiGooglecloudfirestore, SiSocketdotio, SiOnesignal, SiFirebase as SiFcm, SiWebmin, SiUbuntu, SiWindows, SiTensorflow, SiScikitlearn, SiMatplotlib, SiSeaborn, SiArduino, SiEspressif, SiRaspberrypi
} from 'react-icons/si';
import { FaBrain, FaServer, FaMicrochip } from 'react-icons/fa';

const skills = [
  {
    category: 'Mobile & Frontend',
    items: [
      { name: 'Flutter', icon: <SiFlutter /> },
      { name: 'Firebase', icon: <SiFirebase /> },
      { name: 'HTML5', icon: <SiHtml5 /> },
      { name: 'CSS3', icon: <SiCss3 /> },
      { name: 'JavaScript', icon: <SiJavascript /> },
      { name: 'React.js', icon: <SiReact /> },
      { name: 'Figma', icon: <SiFigma /> },
    ],
  },
  {
    category: 'Backend & Server',
    items: [
      { name: 'Node.js', icon: <SiNodedotjs /> },
      { name: 'Express.js', icon: <SiExpress /> },
      { name: 'Python', icon: <SiPython /> },
      { name: 'FastAPI', icon: <SiFastapi /> },
      { name: 'Flask', icon: <SiFlask /> },
      { name: 'MongoDB', icon: <SiMongodb /> },
      { name: 'Firestore', icon: <SiGooglecloudfirestore /> },
      { name: 'WebSockets', icon: <SiSocketdotio /> },
      { name: 'OneSignal', icon: <SiOnesignal /> },
      { name: 'FCM', icon: <SiFcm /> },
      { name: 'Webmin', icon: <SiWebmin /> },
      { name: 'Ubuntu', icon: <SiUbuntu /> },
      { name: 'Windows Server', icon: <SiWindows /> },
    ],
  },
  {
    category: 'AI & Digital Forensics',
    items: [
      { name: 'AI', icon: <FaBrain /> },
      { name: 'Machine Learning', icon: <SiTensorflow /> },
      { name: 'Scikit-learn', icon: <SiScikitlearn /> },
      { name: 'Matplotlib', icon: <SiMatplotlib /> },
      { name: 'Seaborn', icon: <SiSeaborn /> },
    ],
  },
  {
    category: 'Hardware & IoT',
    items: [
      { name: 'Arduino', icon: <SiArduino /> },
      { name: 'ESP32-CAM', icon: <SiEspressif /> },
      { name: 'Raspberry Pi', icon: <SiRaspberrypi /> },
      { name: 'Embedded Systems', icon: <FaMicrochip /> },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2>Technical Skills</h2>
      <div className="skills-categories">
        {skills.map((cat) => (
          <div className="skills-category" key={cat.category}>
            <h3>{cat.category}</h3>
            <div className="skills-list">
              {cat.items.map((skill) => (
                <div className="skill-item" key={skill.name}>
                  <span className="skill-logo">{skill.icon}</span>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills; 