import './Skills.css';
import {
  SiFlutter,
  SiDocker,
  SiFirebase,
  SiPython,
  SiDjango,
  SiFastapi,
  SiFlask,
  SiSocketdotio,
  SiWebmin,
  SiUbuntu,
  SiKalilinux,
  SiWireshark,
  SiTensorflow,
  SiCplusplus,
  SiArduino,
  SiEspressif,
  SiRaspberrypi,
} from 'react-icons/si';
import { RiFirebaseFill } from 'react-icons/ri';
import {
  FaWindows,
  FaSkull,
  FaNetworkWired,
  FaDatabase,
  FaKey,
  FaUserSecret,
} from 'react-icons/fa';
import { m as motion } from 'framer-motion';
import { fadeUp, staggerContainer, viewportOnce } from './motionConfig';

const skillDefinitions = [
  { name: 'Docker', icon: <SiDocker size="3.5em" />, color: '#2496ed', lightColor: '#0969aa' },
  {
    name: 'Flutter',
    icon: <SiFlutter size="3.5em" />,
    color: '#02569B',
    darkColor: '#54c5f8',
  },
  {
    name: 'Firebase',
    icon: <SiFirebase size="3.5em" />,
    color: '#FFCA28',
    lightColor: '#956000',
  },
  {
    name: 'Firestore',
    icon: <RiFirebaseFill size="3.5em" />,
    color: '#FFCA28',
    lightColor: '#956000',
  },
  { name: 'Python', icon: <SiPython size="3.5em" />, color: '#3776AB' },
  {
    name: 'Django',
    icon: <SiDjango size="3.5em" />,
    color: '#44B78B',
    lightColor: '#19734f',
  },
  { name: 'FastAPI', icon: <SiFastapi size="3.5em" />, color: '#009688' },
  {
    name: 'Flask',
    icon: <SiFlask size="3.5em" />,
    color: '#A8B0B9',
    lightColor: '#526274',
  },
  {
    name: 'WebSockets',
    icon: <SiSocketdotio size="3.5em" />,
    color: '#E6E6E6',
    lightColor: '#453452',
  },
  {
    name: 'C++',
    icon: <SiCplusplus size="3.5em" />,
    color: '#00599C',
    darkColor: '#70b9ef',
  },
  {
    name: 'Machine Learning',
    icon: <SiTensorflow size="3.5em" />,
    color: '#FF6F00',
  },
  { name: 'Ubuntu', icon: <SiUbuntu size="3.5em" />, color: '#E95420' },
  {
    name: 'Windows Server',
    icon: <FaWindows size="3.5em" />,
    color: '#00A4EF',
    lightColor: '#0074aa',
  },
  {
    name: 'Webmin',
    icon: <SiWebmin size="3.5em" />,
    color: '#4F6474',
    darkColor: '#97b1c6',
  },
  { name: 'Kali Linux', icon: <SiKalilinux size="3.5em" />, color: '#557CDA' },
  { name: 'Nmap', icon: <FaNetworkWired size="3.5em" />, color: '#3B82F6' },
  { name: 'Wireshark', icon: <SiWireshark size="3.5em" />, color: '#1679C5' },
  {
    name: 'Autopsy',
    icon: <FaSkull size="3.5em" />,
    color: '#B5B5B5',
    lightColor: '#626262',
  },
  {
    name: 'SQL Injection',
    icon: <FaDatabase size="3.5em" />,
    color: '#4DB6AC',
    lightColor: '#24776f',
  },
  {
    name: 'Hashcat',
    icon: <FaKey size="3.5em" />,
    color: '#FFC857',
    lightColor: '#956000',
  },
  {
    name: 'John the Ripper',
    icon: <FaUserSecret size="3.5em" />,
    color: '#C084FC',
    lightColor: '#8444b5',
  },
  { name: 'Arduino', icon: <SiArduino size="3.5em" />, color: '#00979D' },
  {
    name: 'ESP32-CAM',
    icon: <SiEspressif size="3.5em" />,
    color: '#3A4F62',
    darkColor: '#93b1cc',
  },
  {
    name: 'Raspberry Pi',
    icon: <SiRaspberrypi size="3.5em" />,
    color: '#C51A4A',
  },
];

// Keep the compact grid, ordered by the primary mobile/backend focus.
const skillCategories = [
  {
    id: 'mobile',
    label: 'Mobile & Firebase',
    skills: ['Flutter', 'Firebase', 'Firestore'],
  },
  {
    id: 'backend',
    label: 'Backend',
    skills: ['Python', 'Django', 'FastAPI', 'Flask', 'WebSockets'],
  },
  {
    id: 'infrastructure',
    label: 'Servers & Deployment',
    skills: ['Docker', 'Ubuntu', 'Webmin', 'Windows Server'],
  },
  { id: 'ai', label: 'AI / Machine Learning', skills: ['Machine Learning'] },
  {
    id: 'systems',
    label: 'Systems & IoT',
    skills: ['C++', 'Arduino', 'ESP32-CAM', 'Raspberry Pi'],
  },
  {
    id: 'security',
    label: 'Security & Networking',
    skills: [
      'Kali Linux',
      'Nmap',
      'Wireshark',
      'Autopsy',
      'SQL Injection',
      'Hashcat',
      'John the Ripper',
    ],
  },
];
const skillsByName = new Map(
  skillDefinitions.map((skill) => [skill.name, skill])
);
const allSkills = skillCategories.flatMap((category) =>
  category.skills.map((name) => ({
    ...skillsByName.get(name),
    category: category.id,
    categoryLabel: category.label,
  }))
);

const skillEvidence = [
  {
    skill: 'Flutter',
    detail: 'Android editor, file explorer, and Termux terminal integration.',
    project: 'DevDroid',
    repoName: 'Azrul16/DevDroid-android-code-editor',
  },
  {
    skill: 'Python',
    detail: 'FastAPI services for PDF processing, semantic search, and cited research chat.',
    project: 'ResearchLens AI',
    repoName: 'Azrul16/researchlens-ai-rag-assistant',
  },
  {
    skill: 'Firebase',
    detail: 'Authentication and Firestore data for menus, persistent carts, and order updates.',
    project: 'Meal Monkey',
    repoName: 'Azrul16/Meal-Monkey',
  },
  {
    skill: 'Docker',
    detail: 'Dockerfiles and Compose configuration for the frontend, API, and PostgreSQL services.',
    project: 'ResearchLens AI',
    repoName: 'Azrul16/researchlens-ai-rag-assistant',
  },
];

const Skills = ({ onViewProject }) => {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-shell">
        <motion.div
          className="section-title-block"
          initial={false}
          whileInView="visible"
          transition={{ duration: 0.28 }}
          viewport={viewportOnce}
          variants={fadeUp}
        >
          <h2>Skills & Technologies</h2>
        </motion.div>

        <ul
          className="skill-category-legend"
          aria-label="Skill categories in display order"
        >
          {skillCategories.map((category) => (
            <li key={category.id} data-category={category.id}>
              <span aria-hidden="true" />
              {category.label}
            </li>
          ))}
        </ul>

        <motion.div
          className="skills-grid skills-grid-single-page"
          initial={false}
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          variants={staggerContainer}
        >
          {allSkills.map((skill) => (
            <SkillItem key={skill.name} skill={skill} />
          ))}
        </motion.div>
        <div className="skill-evidence" aria-labelledby="skill-evidence-title">
          <h3 id="skill-evidence-title">See these skills in practice</h3>
          <div className="skill-evidence-grid">
            {skillEvidence.map((item) => (
              <article className="skill-evidence-card" key={item.skill}>
                <h4 className="skill-evidence-icon" aria-label={item.skill} title={item.skill}>
                  {item.skill === 'Flutter' && <SiFlutter aria-hidden="true" />}
                  {item.skill === 'Python' && <SiPython aria-hidden="true" />}
                  {item.skill === 'Firebase' && <SiFirebase aria-hidden="true" />}
                  {item.skill === 'Docker' && <SiDocker aria-hidden="true" />}
                </h4>
                <p>{item.detail}</p>
                <button type="button" onClick={() => onViewProject(item.repoName)} aria-haspopup="dialog" aria-label={`View ${item.project} project demonstrating ${item.skill}`}>
                  {item.project} <span aria-hidden="true">↗</span>
                </button>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillItem = ({ skill }) => {
  return (
    <motion.div
      className="skill-item"
      data-category={skill.category}
      title={`${skill.name} — ${skill.categoryLabel}`}
      style={{
        '--hover-color': skill.color,
        '--dark-icon-color': skill.darkColor || skill.color,
        '--light-icon-color': skill.lightColor || skill.color,
        '--pointer-glow-color': `${skill.color}33`,
      }}
      variants={fadeUp}
      data-pointer-glow
    >
      <div className="skill-logo">{skill.icon}</div>
      <span className="skill-name">{skill.name}</span>
      <span className="skill-category-description">{skill.categoryLabel}</span>
    </motion.div>
  );
};

export default Skills;
