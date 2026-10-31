import { createElement, useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import './Projects.css';
import ProjectPlaceholder from './ProjectPlaceholder';
import {
  SiNextdotjs, SiReact, SiTypescript, SiJavascript, SiPython, SiFastapi,
  SiDocker, SiGithubactions, SiFlutter, SiDart, SiFirebase, SiPostgresql,
  SiHtml5, SiCss3, SiVite, SiCloudinary, SiQt, SiCplusplus,
  SiNodedotjs, SiMatterdotjs, SiDjango,
} from 'react-icons/si';

const technologyIcons = {
  Django: SiDjango,
  'Django REST Framework': SiDjango,
  'Django Channels': SiDjango,
  'Next.js': SiNextdotjs,
  React: SiReact,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  Python: SiPython,
  FastAPI: SiFastapi,
  Docker: SiDocker,
  'GitHub Actions / CI': SiGithubactions,
  Flutter: SiFlutter,
  Dart: SiDart,
  Firebase: SiFirebase,
  Firestore: SiFirebase,
  'Cloud Firestore': SiFirebase,
  PostgreSQL: SiPostgresql,
  HTML: SiHtml5,
  CSS: SiCss3,
  Vite: SiVite,
  Cloudinary: SiCloudinary,
  PyQt6: SiQt,
  'Qt WebEngine': SiQt,
  Groq: FaMicrochip,
  'C++': SiCplusplus,
  'Node.js': SiNodedotjs,
  'Matter.js': SiMatterdotjs,
};

const technologyColors = {
  Django: ['#77d5ad', '#0c4b33'],
  'Django REST Framework': ['#e58787', '#a53030'],
  'Django Channels': ['#77d5ad', '#0c4b33'],
  'Next.js': ['#f5f5f5', '#111111'],
  React: ['#61dafb', '#087ea4'],
  TypeScript: ['#60a5fa', '#3178c6'],
  JavaScript: ['#f7df1e', '#806900'],
  Python: ['#75b9ec', '#3776ab'],
  FastAPI: ['#35d0ba', '#008577'],
  Docker: ['#54b7ff', '#0969aa'],
  'GitHub Actions / CI': ['#73b4ff', '#2088ff'],
  Flutter: ['#54c5f8', '#02569b'],
  Dart: ['#55d5e5', '#0175c2'],
  Firebase: ['#ffca28', '#a65b00'],
  Firestore: ['#ffca28', '#a65b00'],
  'Cloud Firestore': ['#ffca28', '#a65b00'],
  PostgreSQL: ['#80b7e0', '#336791'],
  HTML: ['#ff825f', '#c43e1c'],
  CSS: ['#68aaff', '#1572b6'],
  Vite: ['#bd8fff', '#7542c8'],
  Cloudinary: ['#85a3ff', '#3448c5'],
  PyQt6: ['#70dc82', '#217a32'],
  'Qt WebEngine': ['#70dc82', '#217a32'],
  Groq: ['#ff977a', '#bf4828'],
  'C++': ['#79b7ff', '#00599c'],
  'Node.js': ['#8bd775', '#417e38'],
  'Matter.js': ['#74d8b5', '#217959'],
};
import {
  FaExternalLinkAlt,
  FaGithub,
  FaMicrochip,
  FaCode,
  FaInfoCircle,
  FaLightbulb,
  FaTimes,
} from 'react-icons/fa';
import { AnimatePresence, m as motion } from 'framer-motion';
import { springHover } from './motionConfig';
import {
  projectList,
  caseStudyTitles,
  getTechLabels,
} from '../data/projects';

const revealVariants = {
  hidden: { opacity: 1, y: 0 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.24,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const Projects = ({ projectRequest }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [archiveOpen, setArchiveOpen] = useState(false);
  const projectCloseButtonRef = useRef(null);
  const caseStudyCarouselRef = useRef(null);
  const dragState = useRef({
    isDragging: false,
    startX: 0,
    scrollLeft: 0,
    suppressClick: false,
  });

  const caseStudyProjects = useMemo(
    () =>
      caseStudyTitles
        .map((title) => projectList.find((project) => project.title === title))
        .filter(Boolean).concat({ title: 'Show More Projects', isArchiveLink: true }),
    []
  );
  const moreProjects = useMemo(
    () =>
      projectList.filter((project) => !caseStudyTitles.includes(project.title)),
    []
  );
  const openProject = (project) => setSelectedProject(project);
  const closeProject = () => setSelectedProject(null);

  useEffect(() => {
    if (!projectRequest) return;
    const project = projectList.find((item) => item.repoName === projectRequest.repoName);
    if (project) setSelectedProject(project);
  }, [projectRequest]);

  const handleCarouselPointerDown = (event) => {
    if (event.pointerType !== 'mouse' && event.pointerType !== 'pen')
      return;
    if (event.button !== undefined && event.button !== 0) {
      return;
    }

    const carousel = event.currentTarget;
    dragState.current = {
      isDragging: true,
      startX: event.clientX,
      scrollLeft: carousel.scrollLeft,
      suppressClick: false,
    };
    carousel.classList.add('is-dragging');
  };

  const handleCarouselPointerMove = (event) => {
    const state = dragState.current;
    if (!state.isDragging) {
      return;
    }

    const movement = event.clientX - state.startX;
    if (Math.abs(movement) <= 6 && !state.suppressClick) return;
    if (Math.abs(movement) > 6) {
      state.suppressClick = true;
      event.currentTarget.setPointerCapture?.(event.pointerId);
    }

    const carousel = event.currentTarget;
    event.preventDefault();
    carousel.scrollLeft = state.scrollLeft - movement;
  };

  const stopCarouselDrag = (event) => {
    const carousel = event.currentTarget;
    if (event.type === 'pointerleave' && carousel.hasPointerCapture?.(event.pointerId)) return;
    carousel.classList.remove('is-dragging');
    if (carousel.hasPointerCapture?.(event.pointerId))
      carousel.releasePointerCapture(event.pointerId);
    dragState.current.isDragging = false;
    window.setTimeout(() => {
      dragState.current.suppressClick = false;
    }, 0);
  };

  const handleCarouselClickCapture = (event) => {
    if (!dragState.current.suppressClick) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();
    window.setTimeout(() => {
      dragState.current.suppressClick = false;
    }, 0);
  };

  useEffect(() => {
    if (!selectedProject && !archiveOpen) {
      document.body.style.overflow = '';
      return undefined;
    }

    const previousFocus = document.activeElement;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        if (selectedProject) setSelectedProject(null);
        else setArchiveOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      previousFocus?.focus({ preventScroll: true });
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject, archiveOpen]);

  useEffect(() => {
    if (!selectedProject && !archiveOpen) {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => {
      projectCloseButtonRef.current?.focus();
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, [selectedProject, archiveOpen]);

  const handleProjectModalKeyDown = (event) => {
    if (event.key !== 'Tab') {
      return;
    }

    const focusableElements = event.currentTarget.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (!firstElement || !lastElement) {
      return;
    }

    if (event.shiftKey && document.activeElement === firstElement) {
      event.preventDefault();
      lastElement.focus();
    } else if (!event.shiftKey && document.activeElement === lastElement) {
      event.preventDefault();
      firstElement.focus();
    }
  };

  return (
    <section id="projects" className="projects-section">
      <div className="projects-shell">
        <motion.div
          className="section-title-block"
          initial={false}
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={revealVariants}
        >
          <h2>Selected Projects</h2>
        </motion.div>

        <motion.div
          className="case-study-section"
          initial={false}
          whileInView="visible"
          viewport={{ once: true, amount: 0.14 }}
          variants={revealVariants}
        >
          <div className="project-subsection-heading case-study-heading">
            <div className="case-study-navigation">
              {[-1, 1].map((direction) => (
                <button
                  type="button"
                  key={direction}
                  aria-label={
                    direction < 0 ? 'Previous case study' : 'Next case study'
                  }
                  onClick={() => {
                    const carousel = caseStudyCarouselRef.current;
                    const card = carousel?.querySelector('.case-study-card');
                    if (card)
                      carousel.scrollBy({
                        left:
                          direction * (card.offsetWidth + parseFloat(getComputedStyle(card.closest('.projects-track')).gap)),
                        behavior: window.matchMedia(
                          '(prefers-reduced-motion: reduce)'
                        ).matches
                          ? 'instant'
                          : 'smooth',
                      });
                  }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path
                      d={
                        direction < 0
                          ? 'M19 12H5m7-7-7 7 7 7'
                          : 'M5 12h14m-7-7 7 7-7 7'
                      }
                    />
                  </svg>
                </button>
              ))}
            </div>
          </div>

          <div
            className="projects-carousel case-study-carousel"
            role="region"
            tabIndex={0}
            ref={caseStudyCarouselRef}
            aria-label="Scrollable case studies"
            onPointerDown={handleCarouselPointerDown}
            onPointerMove={handleCarouselPointerMove}
            onPointerUp={stopCarouselDrag}
            onPointerCancel={stopCarouselDrag}
            onPointerLeave={stopCarouselDrag}
            onClickCapture={handleCarouselClickCapture}
            onDragStart={(event) => event.preventDefault()}
          >
            <LoopingProjectTrack projects={caseStudyProjects} className="case-study-track" dragState={dragState}>
              {(project) => project.isArchiveLink ? (
                <article className="project-card case-study-card show-more-projects-card"
                  onClick={() => setArchiveOpen(true)}>
                  <div className="show-more-preview" aria-hidden="true">
                    {moreProjects.filter((item) => item.image).slice(0, 3).map((item) => (
                      <img key={item.title} src={item.image} alt="" loading="lazy" decoding="async" draggable={false} />
                    ))}
                    <span className="show-more-preview-count">+{moreProjects.length} projects</span>
                  </div>
                  <div className="case-study-copy">
                    <h3><button type="button" className="project-title-button" aria-haspopup="dialog"
                      onClick={(event) => { event.stopPropagation(); setArchiveOpen(true); }}>Show More Projects</button></h3>
                    <p className="case-study-summary">Explore more apps, tools, and experiments.</p>
                    <div className="project-footer">
                      <button type="button" className="project-action-link" aria-haspopup="dialog"
                        onClick={(event) => { event.stopPropagation(); setArchiveOpen(true); }}>Browse projects ↗</button>
                    </div>
                  </div>
                </article>
              ) : (
                <CaseStudyCard
                  project={project}
                  openProject={openProject}
                />
              )}
            </LoopingProjectTrack>
          </div>
        </motion.div>

        {archiveOpen && !selectedProject && createPortal(
          <div className="projects-section project-modal-root">
          <div className="project-modal-overlay" role="dialog" aria-modal="true"
            aria-labelledby="archive-dialog-title" onClick={() => setArchiveOpen(false)}
            onKeyDown={handleProjectModalKeyDown}>
            <div className="project-modal project-modal-simple project-archive-modal" onClick={(event) => event.stopPropagation()}>
              <button ref={projectCloseButtonRef} type="button" className="project-modal-close"
                onClick={() => setArchiveOpen(false)} aria-label="Close more projects"><FaTimes /></button>
              <h3 id="archive-dialog-title">More Projects</h3>
              <p>Press and drag or swipe to browse. Select a project for details.</p>

              <div className="projects-carousel simple-project-carousel" role="region"
                tabIndex={0} aria-label="More project cards"
                onPointerDown={handleCarouselPointerDown}
                onPointerMove={handleCarouselPointerMove}
                onPointerUp={stopCarouselDrag}
                onPointerCancel={stopCarouselDrag}
                onPointerLeave={stopCarouselDrag}
                onClickCapture={handleCarouselClickCapture}
                onDragStart={(event) => event.preventDefault()}>
                <div className="simple-project-track">
                  {moreProjects.map((project) => (
                    <ProjectArchiveCard key={project.title} project={project} openProject={openProject} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          </div>, document.body
        )}
      </div>

      {typeof document !== 'undefined' && createPortal(
      <div className="projects-section project-modal-root">
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="project-modal-overlay"
            onClick={closeProject}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            aria-describedby="project-modal-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.14 }}
            onKeyDown={handleProjectModalKeyDown}
          >
            <motion.div
              className="project-modal project-modal-simple project-case-study-dialog"
              onClick={(event) => event.stopPropagation()}
              initial={{ opacity: 0, y: 14, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 14, scale: 0.98 }}
              transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
              style={{ '--project-accent': selectedProject.accent }}
            >
              <button
                ref={projectCloseButtonRef}
                type="button"
                className="project-modal-close"
                onClick={closeProject}
                aria-label="Close project details"
              >
                <FaTimes />
              </button>

              <div className="project-modal-copy full-width-copy">
                <header className="project-case-study-header">
                  <h3 id="project-modal-title">{selectedProject.title}</h3>
                </header>
                <div className="project-dialog-layout">
                  <div className="project-dialog-visual">
                    {selectedProject.screenshots?.length ? (
                      <ProjectGallery key={selectedProject.repoName} project={selectedProject} />
                    ) : (
                      <ProjectPreview project={selectedProject} />
                    )}
                    <div className="project-gallery-technologies" aria-label="Technologies used">
                      {getTechLabels(selectedProject).map((label) => (
                        <span key={label} style={{ '--tech-accent': technologyColors[label]?.[0], '--tech-light': technologyColors[label]?.[1] }}>
                          {technologyIcons[label] && <span aria-hidden="true">{createElement(technologyIcons[label])}</span>}
                          {label}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="project-dialog-information">
                    <p className="project-modal-description" id="project-modal-description">
                      {selectedProject.description}
                    </p>
                    <div className="project-dialog-actions">
                      <ProjectLinks project={selectedProject} />
                      <span className="project-status">{selectedProject.status}</span>
                    </div>
                    {[
                      ['role', 'My contribution', <FaGithub key="role" />],
                      ['challenge', 'The challenge', <FaLightbulb key="challenge" />],
                      ['approach', 'How it works', <FaCode key="approach" />],
                      ['projectStatus', 'Good to know', <FaInfoCircle key="status" />],
                    ].filter(([field]) => selectedProject[field]).map(([field, label, icon]) => (
                      <section className="project-case-study-section" key={field}>
                        <h4 className="modal-label"><span className="project-section-icon" aria-hidden="true">{icon}</span>{label}</h4>
                        <p>{selectedProject[field]}</p>
                        {field === 'role' && selectedProject.evidenceUrl && (
                          <a className="project-contribution-evidence" href={selectedProject.evidenceUrl}
                            target="_blank" rel="noopener noreferrer"><FaGithub aria-hidden="true" /> View commit ↗</a>
                        )}
                      </section>
                    ))}
                    <div className="project-proof-lists">
                      <div className="project-proof-list">
                        <h4 className="modal-label">Key features</h4>
                        <ul>
                          {(
                            selectedProject.features || selectedProject.highlights
                          ).map((feature) => (
                            <li key={feature}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                      <details className="project-proof-list project-architecture-details">
                        <summary>Technical details</summary>
                        <ul>
                          {(
                            selectedProject.architecture ||
                            getTechLabels(selectedProject)
                          ).map((tool) => (
                            <li key={tool}>{tool}</li>
                          ))}
                        </ul>
                      </details>
                    </div>

                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      </div>, document.body)}
    </section>
  );
};

const LoopingProjectTrack = ({ projects, className = '', dragState, children }) => {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    const carousel = track.parentElement;
    const copies = track.querySelectorAll('[data-loop-copy]');
    // Copies remain clickable, while keyboard and screen-reader navigation
    // visit each project only once in the middle set.
    copies.forEach((copy) => {
      copy.querySelectorAll('a, button, [tabindex]').forEach((element) => {
        element.tabIndex = -1;
      });
    });
    let span = 0;
    const measure = () => {
      const cards = track.querySelectorAll('.project-card');
      if (!projects.length || !cards[projects.length]) return;
      const nextSpan = cards[projects.length].offsetLeft - cards[0].offsetLeft;
      const relative = span ? (carousel.scrollLeft - span) / span : 0;
      span = nextSpan;
      carousel.scrollTo({ left: span * (1 + relative), behavior: 'instant' });
    };
    const wrap = () => {
      if (!span) return;
      const left = carousel.scrollLeft;
      if (left >= span && left < span * 2) return;
      const target = span + ((left - span) % span + span) % span;
      carousel.scrollTo({ left: target, behavior: 'instant' });
      // Preserve the mouse anchor when a drag crosses the loop boundary.
      if (dragState.current.isDragging) {
        dragState.current.scrollLeft += target - left;
      }
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(carousel);
    carousel.addEventListener('scroll', wrap, { passive: true });
    return () => {
      observer.disconnect();
      carousel.removeEventListener('scroll', wrap);
    };
  }, [projects, dragState]);

  return (
    <div ref={trackRef} className={`projects-track ${className}`}>
      {[0, 1, 2].map((copy) => (
        <div key={copy} className="projects-loop-copy" data-loop-copy={copy === 1 ? undefined : copy} aria-hidden={copy === 1 ? undefined : true}>
          {projects.map((project) => <div className="projects-loop-item" key={project.title}>{children(project)}</div>)}
        </div>
      ))}
    </div>
  );
};

const ProjectArchiveCard = ({ project, openProject }) => (
  <article
    className="project-card compact-project"
    onClick={() => openProject(project)}
    style={{ '--project-accent': project.accent }}
  >
    <div className="project-card-sheen" aria-hidden="true"></div>
    <ProjectPreview project={project} />
    <div className="project-topline">
      <span className="project-status subtle">{project.status}</span>
    </div>
    <h3>
      <button
        type="button"
        className="project-title-button"
        aria-haspopup="dialog"
        onClick={(event) => {
          event.stopPropagation();
          openProject(project);
        }}
      >
        {project.title}
      </button>
    </h3>
    <div className="project-footer">
      <TechStack project={project} />
      <QuickProjectActions project={project} openProject={openProject} />
    </div>
  </article>
);

const TechStack = ({ project }) => {
  return (
    <div className="project-tech" aria-label={`${project.title} tech stack`}>
      {project.tech.map((icon, index) => (
        <span
          key={index}
          className="project-tech-icon"
          title={getTechLabels(project)[index]}
        >
          {icon}
        </span>
      ))}
    </div>
  );
};

const CaseStudyCard = ({ project, openProject, isFeatured }) => {
  return (
    <motion.article
      className={`project-card case-study-card ${isFeatured ? 'case-study-featured' : ''}`}
      onClick={() => openProject(project)}
      data-pointer-glow
      style={{ '--project-accent': project.accent }}
      whileHover={{ y: -4, scale: 1.005 }}
      whileTap={{ scale: 0.99 }}
      transition={springHover}
    >
      <ProjectPreview project={project} />

      <div className="case-study-copy">
        <div className="project-topline">
              <span className="project-status">{project.status}</span>
        </div>
        <h3>
          <button
            type="button"
            className="project-title-button"
            aria-haspopup="dialog"
            onClick={(event) => {
              event.stopPropagation();
              openProject(project);
            }}
          >
            {project.title}
          </button>
        </h3>

        <p className="case-study-summary">{project.description}</p>

        <div className="project-highlights">
          {getTechLabels(project).map((item) => {
            const Icon = technologyIcons[item];
            return Icon ? (
              <span key={item} className="project-highlight-pill project-technology-icon" title={item} role="img" aria-label={item}
                style={{ '--technology-color': technologyColors[item]?.[0], '--technology-light-color': technologyColors[item]?.[1] }}>
                <Icon aria-hidden="true" />
              </span>
            ) : null;
          })}
        </div>

        <div className="project-footer">
          <button
            type="button"
            className="project-action-link case-study-details"
            aria-haspopup="dialog"
            onClick={(event) => {
              event.stopPropagation();
              openProject(project);
            }}
          >
            View Details <span aria-hidden="true">↗</span>
          </button>
          <ProjectLinks project={project} />
        </div>
      </div>
    </motion.article>
  );
};

const ProjectGallery = ({ project }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const viewerRef = useRef(null);
  const screenshot = project.screenshots[activeIndex];

  return (
    <div className={`project-gallery${project.previewLabel ? ' android-mockup-gallery' : ''}`}>
      <figure className="project-gallery-stage">
        <button type="button" className="project-gallery-expand" onClick={() => viewerRef.current?.showModal()} aria-label={`Enlarge ${screenshot.alt}`}>
          <img src={screenshot.src} alt={screenshot.alt} width={screenshot.width} height={screenshot.height} decoding="async" />
        </button>
        <figcaption aria-live="polite">
          <span>{screenshot.alt}</span>
          <span>{activeIndex + 1} / {project.screenshots.length}</span>
        </figcaption>
      </figure>
      <div className="project-gallery-thumbnails" aria-label="Choose a screenshot">
        {project.screenshots.map((item, index) => (
          <button key={item.src} type="button" aria-label={`Show ${item.alt}`} aria-pressed={index === activeIndex} onClick={() => setActiveIndex(index)}>
            <img src={item.src} alt="" width={item.width} height={item.height} loading="lazy" />
          </button>
        ))}
      </div>
      <dialog
        ref={viewerRef}
        className="project-image-viewer"
        aria-label={`${screenshot.alt} enlarged`}
        onClick={(event) => {
          event.stopPropagation();
          if (event.target === event.currentTarget) viewerRef.current?.close();
        }}
        onKeyDown={(event) => event.stopPropagation()}
      >
        <button type="button" className="project-image-viewer-close" onClick={() => viewerRef.current?.close()} aria-label="Close enlarged screenshot">
          <FaTimes /> <span>Close</span>
        </button>
        <img src={screenshot.src} alt={screenshot.alt} width={screenshot.width} height={screenshot.height} />
      </dialog>
    </div>
  );
};

const ProjectPreview = ({ project }) => {
  if (project.image) {
    return (
      <figure className={`project-preview screenshot-preview${project.previewLabel === 'iPhone UI mockups' || project.previewLabel === 'API explorer illustration' ? ' presentation-preview' : ''}`}>
        <figcaption>{project.previewLabel || 'Application screenshot'}</figcaption>
        <img
          src={project.image}
          alt={project.imageAlt}
          width={project.imageWidth || 1440}
          height={project.imageHeight || 1478}
          loading="lazy"
          decoding="async"
        />
      </figure>
    );
  }
  return <ProjectPlaceholder project={project} />;
};

const QuickProjectActions = ({ project, openProject }) => {
  const stopAction = (event) => event.stopPropagation();

  return (
    <div className="project-quick-actions">
      {project.repoUrl && (
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${project.title} on GitHub`}
          onClick={stopAction}
        >
          <FaGithub />
        </a>
      )}
      {project.demoUrl && (
        <a
          href={project.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${project.title} live demo`}
          onClick={stopAction}
        >
          <FaExternalLinkAlt />
        </a>
      )}
      <button
        type="button"
        className="project-link project-details-button"
        aria-haspopup="dialog"
        aria-label={`View ${project.title} details`}
        onClick={(event) => {
          event.stopPropagation();
          openProject(project);
        }}
      >
        Details
      </button>
    </div>
  );
};

const ProjectLinks = ({ project }) => {
  const stopAction = (event) => event.stopPropagation();

  return (
    <div className="project-actions">
      {project.repoUrl && (
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="project-action-link"
          onClick={stopAction}
        >
          <FaGithub />
          GitHub
        </a>
      )}
      {project.demoUrl && (
        <a
          href={project.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="project-action-link project-action-link-accent"
          onClick={stopAction}
        >
          <FaExternalLinkAlt />
          Live Demo
        </a>
      )}
    </div>
  );
};

export default Projects;
