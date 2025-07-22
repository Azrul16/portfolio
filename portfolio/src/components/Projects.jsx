import React from 'react';
import './Projects.css';
import { SiFlutter, SiFirebase, SiReact, SiNodedotjs, SiPython, SiMongodb, SiGooglecloudfirestore } from 'react-icons/si';

const projectList = [
  {
    title: 'Lecturer App',
    description: 'AI-powered study assistant with summarization, transcription, and quiz features.',
    tech: [<SiFlutter key="flutter" />, <SiFirebase key="firebase" />],
    link: '#',
  },
  {
    title: 'Schedula',
    description: 'Daily planner and productivity app.',
    tech: [<SiFlutter key="flutter" />, <SiFirebase key="firebase" />],
    link: '#',
  },
  {
    title: 'QuizzApp',
    description: 'Real-time quiz app using Firestore.',
    tech: [<SiFlutter key="flutter" />, <SiGooglecloudfirestore key="firestore" />],
    link: '#',
  },
  {
    title: 'Daily Expense Tracker',
    description: 'Offline & Google Drive-synced expense app.',
    tech: [<SiFlutter key="flutter" />],
    link: '#',
  },
  {
    title: 'Food Delivery App',
    description: 'Firebase-based admin/customer app with real-time updates.',
    tech: [<SiFlutter key="flutter" />, <SiFirebase key="firebase" />],
    link: '#',
  },
  {
    title: 'SSLCOMMERZ Payment Integration',
    description: 'Full Node.js + Flutter Web/Desktop implementation.',
    tech: [<SiNodedotjs key="nodejs" />, <SiFlutter key="flutter" />],
    link: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>🚀 Highlight Projects</h2>
      <div className="projects-grid">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tech">
              {project.tech.map((icon, i) => (
                <span key={i} className="project-tech-icon">{icon}</span>
              ))}
            </div>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects; 