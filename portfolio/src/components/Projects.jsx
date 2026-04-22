import React, { useMemo, useState } from 'react';
import './Projects.css';
import { SiFlutter, SiFirebase, SiNodedotjs } from 'react-icons/si';
import { RiFirebaseFill } from 'react-icons/ri';
import { FaArrowRight, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';

const projectList = [
  {
    title: 'SafeHer',
    description: 'A women safety mobile experience built around fast emergency actions, supportive guidance, and confident mobile-first product decisions.',
    details: 'SafeHer focuses on reducing friction during high-stress moments with clearer actions, stronger interface hierarchy, and safety-first mobile flows.',
    challenge: 'Designing for urgency without making the experience feel chaotic.',
    outcome: 'A calmer emergency-focused interface that helps users reach key actions faster.',
    category: 'Safety App',
    status: 'Featured Build',
    tech: [<SiFlutter key="flutter" />, <SiFirebase key="firebase" />],
    highlights: ['Mobile-first flows', 'Emergency UX', 'Faster key actions'],
    accent: 'rgba(255, 120, 133, 0.22)'
  },
  {
    title: 'Lecturer App',
    description: 'An AI-supported study assistant with summarization, transcription, and quiz features for more structured revision.',
    details: 'The product centers on making course material easier to revisit through note extraction, simplified learning content, and interactive review loops.',
    challenge: 'Keeping AI features practical and helpful inside real student workflows.',
    outcome: 'A study tool that turns dense content into clearer revision experiences.',
    category: 'AI Study Tool',
    status: 'Product Concept',
    tech: [<SiFlutter key="flutter" />, <SiFirebase key="firebase" />],
    highlights: ['AI summaries', 'Revision support', 'Learning workflows'],
    accent: 'rgba(121, 194, 255, 0.2)'
  },
  {
    title: 'Schedula',
    description: 'A calm daily planner focused on task flow, reminders, and habit-friendly productivity.',
    details: 'Schedula emphasizes lower-friction daily planning with a softer interface and a more approachable task management structure.',
    challenge: 'Making productivity tools feel lighter instead of overwhelming.',
    outcome: 'A more relaxed planner experience that supports everyday consistency.',
    category: 'Productivity',
    status: 'UX Build',
    tech: [<SiFlutter key="flutter" />, <SiFirebase key="firebase" />],
    highlights: ['Task flow', 'Reminder structure', 'Habit-friendly UI'],
    accent: 'rgba(152, 212, 120, 0.18)'
  },
  {
    title: 'QuizzApp',
    description: 'A real-time quiz platform powered by Firestore for live sessions, instant updates, and responsive gameplay.',
    details: 'This project focuses on live interaction, immediate feedback, and multiplayer-like responsiveness through real-time backend updates.',
    challenge: 'Preserving responsiveness while keeping the experience simple.',
    outcome: 'A faster and more engaging quiz flow for live use cases.',
    category: 'Realtime App',
    status: 'Realtime System',
    tech: [<SiFlutter key="flutter" />, <RiFirebaseFill key="firestore" />],
    highlights: ['Realtime updates', 'Instant scoring', 'Live interaction'],
    accent: 'rgba(255, 204, 87, 0.2)'
  },
  {
    title: 'Daily Expense Tracker',
    description: 'An offline-first expense manager with Google Drive sync for dependable personal finance tracking.',
    details: 'The product was designed around practical daily use, with offline reliability, clean entry patterns, and less friction in reviewing spending.',
    challenge: 'Balancing simplicity with trustworthy everyday utility.',
    outcome: 'A stable personal finance tool that works even without constant connectivity.',
    category: 'Finance Utility',
    status: 'Utility App',
    tech: [<SiFlutter key="flutter" />],
    highlights: ['Offline-first', 'Clean entry flow', 'Drive sync'],
    accent: 'rgba(85, 204, 168, 0.18)'
  },
  {
    title: 'Food Delivery App',
    description: 'A Firebase-backed ordering flow with real-time updates for both admins and customers.',
    details: 'The system supports order management, status updates, and cleaner communication between customer and admin sides of the product.',
    challenge: 'Making status updates feel immediate and trustworthy for both sides.',
    outcome: 'A more transparent ordering experience with better live progress visibility.',
    category: 'Commerce',
    status: 'Full Workflow',
    tech: [<SiFlutter key="flutter" />, <SiFirebase key="firebase" />],
    highlights: ['Ordering flow', 'Live status', 'Admin support'],
    accent: 'rgba(255, 159, 113, 0.2)'
  },
  {
    title: 'SSLCOMMERZ Payment Integration',
    description: 'A Node.js and Flutter Web/Desktop payment integration for production-oriented checkout flows.',
    details: 'This work focused on connecting payment gateway logic across frontend and backend while keeping checkout reliable and easy to complete.',
    challenge: 'Coordinating frontend and backend payment logic cleanly.',
    outcome: 'A checkout flow built around reliability, production readiness, and clearer transaction handling.',
    category: 'Integration',
    status: 'Production Ready',
    tech: [<SiNodedotjs key="nodejs" />, <SiFlutter key="flutter" />],
    highlights: ['Gateway integration', 'Checkout logic', 'Production flow'],
    accent: 'rgba(122, 140, 255, 0.18)'
  }
];

const revealVariants = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.72,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [featuredProject, ...otherProjects] = useMemo(() => projectList, []);

  const openProject = (project) => setSelectedProject(project);
  const closeProject = () => setSelectedProject(null);

  return (
    <section id="projects" className="projects-section">
      <div className="projects-shell">
        <motion.div className="section-title-block" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={revealVariants}>
          <h2>Selected Projects</h2>
        </motion.div>

        <motion.div className="projects-header" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={revealVariants}>
          <div className="projects-copy">
            <p className="projects-kicker">Product Work</p>
            <p className="projects-intro">
              These projects show how I think about interfaces, product flow, and implementation quality across mobile apps, realtime systems, utilities, and production integrations.
            </p>
          </div>

          <div className="projects-stats">
            <div className="stat-card" data-pointer-glow>
              <span className="stat-value">{projectList.length}</span>
              <span className="stat-label">Projects showcased</span>
            </div>
            <div className="stat-card accent" data-pointer-glow>
              <span className="stat-value">Mobile + Backend</span>
              <span className="stat-label">Main delivery focus</span>
            </div>
          </div>
        </motion.div>

        <motion.article
          className="project-card featured-project"
          onClick={() => openProject(featuredProject)}
          role="button"
          tabIndex={0}
          onKeyDown={(event) => event.key === 'Enter' && openProject(featuredProject)}
          data-pointer-glow
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={revealVariants}
          style={{ '--project-accent': featuredProject.accent }}
        >
          <div className="project-copy featured-copy">
            <div className="project-topline">
              <p className="project-category">{featuredProject.category}</p>
              <span className="project-status">{featuredProject.status}</span>
            </div>
            <h3>{featuredProject.title}</h3>
            <p>{featuredProject.description}</p>

            <div className="project-highlights">
              {featuredProject.highlights.map((item) => (
                <span key={item} className="project-highlight-pill">{item}</span>
              ))}
            </div>

            <div className="project-meta-row">
              <div className="project-tech">
                {featuredProject.tech.map((icon, index) => (
                  <span key={index} className="project-tech-icon">{icon}</span>
                ))}
              </div>
            </div>

            <button type="button" className="project-open-btn">
              View details <FaArrowRight />
            </button>
          </div>

          <div className="project-spotlight">
            <div className="spotlight-panel">
              <span className="spotlight-label">Featured Focus</span>
              <p className="spotlight-copy">{featuredProject.challenge}</p>
              <div className="spotlight-outcome">
                <span>Outcome</span>
                <p>{featuredProject.outcome}</p>
              </div>
            </div>
          </div>
        </motion.article>

        <div className="projects-grid">
          {otherProjects.map((project, index) => (
            <motion.article
              className="project-card compact-project"
              key={project.title}
              onClick={() => openProject(project)}
              role="button"
              tabIndex={0}
              onKeyDown={(event) => event.key === 'Enter' && openProject(project)}
              data-pointer-glow
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.14 }}
              variants={revealVariants}
              transition={{ delay: Math.min(index * 0.04, 0.16) }}
              style={{ '--project-accent': project.accent }}
            >
              <div className="project-topline">
                <p className="project-category">{project.category}</p>
                <span className="project-status subtle">{project.status}</span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="project-footer">
                <div className="project-tech">
                  {project.tech.map((icon, i) => (
                    <span key={i} className="project-tech-icon">{icon}</span>
                  ))}
                </div>
                <span className="project-link">View details</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="project-modal-overlay" onClick={closeProject}>
          <motion.div
            className="project-modal project-modal-simple"
            onClick={(event) => event.stopPropagation()}
            data-pointer-glow
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            style={{ '--project-accent': selectedProject.accent }}
          >
            <button type="button" className="project-modal-close" onClick={closeProject} aria-label="Close project details">
              <FaTimes />
            </button>

            <div className="project-modal-copy full-width-copy">
              <div className="project-topline">
                <p className="project-category">{selectedProject.category}</p>
                <span className="project-status">{selectedProject.status}</span>
              </div>
              <h3>{selectedProject.title}</h3>
              <p className="project-modal-description">{selectedProject.details}</p>

              <div className="project-modal-grid">
                <div className="project-modal-card">
                  <span className="modal-label">Challenge</span>
                  <p>{selectedProject.challenge}</p>
                </div>
                <div className="project-modal-card">
                  <span className="modal-label">Outcome</span>
                  <p>{selectedProject.outcome}</p>
                </div>
              </div>

              <div className="project-highlights modal-highlights">
                {selectedProject.highlights.map((item) => (
                  <span key={item} className="project-highlight-pill">{item}</span>
                ))}
              </div>

              <div className="project-footer modal-footer">
                <div className="project-tech">
                  {selectedProject.tech.map((icon, index) => (
                    <span key={index} className="project-tech-icon">{icon}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Projects;
