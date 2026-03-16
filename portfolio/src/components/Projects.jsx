import React, { useMemo, useState } from 'react';
import './Projects.css';
import { SiFlutter, SiFirebase, SiNodedotjs } from 'react-icons/si';
import { RiFirebaseFill } from 'react-icons/ri';
import { FaArrowRight, FaTimes } from 'react-icons/fa';

const projectList = [
  {
    title: 'SafeHer',
    description: 'A women safety mobile experience with emergency-focused flows, supportive UI, and a mobile-first product direction.',
    details: 'SafeHer focuses on safety-first interactions, clearer emergency actions, and accessible mobile patterns for fast use under pressure.',
    tech: [<SiFlutter key="flutter" />, <SiFirebase key="firebase" />],
    category: 'Safety App',
    featured: true
  },
  {
    title: 'Lecturer App',
    description: 'AI-powered study assistant with summarization, transcription, and quiz features designed to make course content easier to review.',
    details: 'Built around learning workflows like extracting notes, simplifying study material, and keeping revision more structured for students.',
    tech: [<SiFlutter key="flutter" />, <SiFirebase key="firebase" />],
    category: 'AI Study Tool'
  },
  {
    title: 'Schedula',
    description: 'A calm daily planner focused on task flow, reminders, and productivity habits.',
    details: 'Designed as a cleaner task planning experience with soft visuals, habit-friendly structure, and less friction in daily planning.',
    tech: [<SiFlutter key="flutter" />, <SiFirebase key="firebase" />],
    category: 'Productivity'
  },
  {
    title: 'QuizzApp',
    description: 'A real-time quiz experience powered by Firestore for live sessions and instant scoring.',
    details: 'The focus here is responsiveness, quick feedback, and multiplayer-style interaction using real-time backend updates.',
    tech: [<SiFlutter key="flutter" />, <RiFirebaseFill key="firestore" />],
    category: 'Realtime App'
  },
  {
    title: 'Daily Expense Tracker',
    description: 'An offline-first expense manager with Google Drive sync for dependable personal finance tracking.',
    details: 'This project emphasizes practical use, offline reliability, and a simple interface for entering and reviewing spending data.',
    tech: [<SiFlutter key="flutter" />],
    category: 'Finance Utility'
  },
  {
    title: 'Food Delivery App',
    description: 'A Firebase-backed ordering workflow with real-time updates for both admins and customers.',
    details: 'Created to support ordering, status tracking, and streamlined communication between customer and admin sides of the product.',
    tech: [<SiFlutter key="flutter" />, <SiFirebase key="firebase" />],
    category: 'Commerce'
  },
  {
    title: 'SSLCOMMERZ Payment Integration',
    description: 'A full Node.js and Flutter Web/Desktop payment integration built for production-oriented checkout flows.',
    details: 'Focused on connecting payment gateway logic cleanly across frontend and backend while keeping the checkout process reliable.',
    tech: [<SiNodedotjs key="nodejs" />, <SiFlutter key="flutter" />],
    category: 'Integration'
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [featuredProject, ...otherProjects] = useMemo(() => projectList, []);

  const openProject = (project) => setSelectedProject(project);
  const closeProject = () => setSelectedProject(null);

  return (
    <section id="projects" className="projects-section">
      <div className="projects-shell">
        <div className="section-title-block">
          <h2>Selected Projects</h2>
        </div>

        <article className="project-card featured-project" onClick={() => openProject(featuredProject)} role="button" tabIndex={0} onKeyDown={(event) => event.key === 'Enter' && openProject(featuredProject)}>
          <div className="project-copy featured-copy">
            <p className="project-category">{featuredProject.category}</p>
            <h3>{featuredProject.title}</h3>
            <p>{featuredProject.description}</p>
            <div className="project-meta-row">
              <div className="project-tech">
                {featuredProject.tech.map((icon, index) => (
                  <span key={index} className="project-tech-icon">{icon}</span>
                ))}
              </div>
            </div>
            <button type="button" className="project-open-btn">View details <FaArrowRight /></button>
          </div>
        </article>

        <div className="projects-grid">
          {otherProjects.map((project) => (
            <article className="project-card compact-project" key={project.title} onClick={() => openProject(project)} role="button" tabIndex={0} onKeyDown={(event) => event.key === 'Enter' && openProject(project)}>
              <p className="project-category">{project.category}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-footer">
                <div className="project-tech">
                  {project.tech.map((icon, i) => (
                    <span key={i} className="project-tech-icon">{icon}</span>
                  ))}
                </div>
              </div>
              <div className="project-link-row">
                <span className="project-link">View details</span>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="project-modal-overlay" onClick={closeProject}>
          <div className="project-modal project-modal-simple" onClick={(event) => event.stopPropagation()}>
            <button type="button" className="project-modal-close" onClick={closeProject} aria-label="Close project details">
              <FaTimes />
            </button>
            <div className="project-modal-copy full-width-copy">
              <p className="project-category">{selectedProject.category}</p>
              <h3>{selectedProject.title}</h3>
              <p className="project-modal-description">{selectedProject.details}</p>
              <div className="project-footer modal-footer">
                <div className="project-tech">
                  {selectedProject.tech.map((icon, index) => (
                    <span key={index} className="project-tech-icon">{icon}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;

