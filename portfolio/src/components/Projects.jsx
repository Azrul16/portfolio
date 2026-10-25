import { useEffect, useMemo, useRef, useState } from 'react';
import './Projects.css';
import ProjectPlaceholder from './ProjectPlaceholder';
import {
  FaExternalLinkAlt,
  FaGithub,
  FaGripHorizontal,
  FaList,
  FaTimes,
} from 'react-icons/fa';
import { AnimatePresence, m as motion } from 'framer-motion';
import { springHover, staggerContainer } from './motionConfig';
import {
  projectList,
  filterOptions,
  caseStudyTitles,
  getTechLabels,
  projectMatchesFilter,
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

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');
  const [archiveView, setArchiveView] = useState('carousel');
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
        .filter(Boolean),
    []
  );
  const moreProjects = useMemo(
    () =>
      projectList.filter((project) => !caseStudyTitles.includes(project.title)),
    []
  );
  const filteredProjects = useMemo(() => {
    return moreProjects.filter((project) =>
      projectMatchesFilter(project, activeFilter)
    );
  }, [activeFilter, moreProjects]);

  const openProject = (project) => setSelectedProject(project);
  const closeProject = () => setSelectedProject(null);

  const handleCarouselPointerDown = (event) => {
    if (event.pointerType !== 'mouse' || event.target.closest('a, button'))
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
    if (Math.abs(movement) > 6) {
      state.suppressClick = true;
      event.currentTarget.setPointerCapture?.(event.pointerId);
    }

    const carousel = event.currentTarget;
    carousel.scrollLeft = state.scrollLeft - movement;
  };

  const stopCarouselDrag = (event) => {
    const carousel = event.currentTarget;
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
    if (!selectedProject) {
      document.body.style.overflow = '';
      return undefined;
    }

    const previousFocus = document.activeElement;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedProject(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      previousFocus?.focus({ preventScroll: true });
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject]);

  useEffect(() => {
    if (!selectedProject) {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => {
      projectCloseButtonRef.current?.focus();
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, [selectedProject]);

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
          >
            <LoopingProjectTrack projects={caseStudyProjects} className="case-study-track" dragState={dragState}>
              {(project) => (
                <CaseStudyCard
                  project={project}
                  openProject={openProject}
                />
              )}
            </LoopingProjectTrack>
          </div>
        </motion.div>

        <motion.div
          className="project-subsection-heading more-projects-heading"
          initial={false}
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          variants={revealVariants}
        >
          <h3>More Projects</h3>
        </motion.div>

        <motion.div
          className="projects-toolbar"
          initial={false}
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          variants={revealVariants}
        >
          <div className="project-filters" aria-label="Filter projects">
            {filterOptions.map((filter) => (
              <motion.button
                type="button"
                key={filter}
                className={`project-filter ${activeFilter === filter ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter)}
                aria-pressed={activeFilter === filter}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.96 }}
                transition={springHover}
              >
                {filter}
              </motion.button>
            ))}
          </div>
          <div className="project-view-toggle" aria-label="Project view mode">
            <button
              type="button"
              className={archiveView === 'carousel' ? 'active' : ''}
              onClick={() => setArchiveView('carousel')}
              aria-label="Show carousel view"
              aria-pressed={archiveView === 'carousel'}
            >
              <FaGripHorizontal />
              <span>Carousel</span>
            </button>
            <button
              type="button"
              className={archiveView === 'grid' ? 'active' : ''}
              onClick={() => setArchiveView('grid')}
              aria-label="Show grid view"
              aria-pressed={archiveView === 'grid'}
            >
              <FaList />
              <span>Grid</span>
            </button>
          </div>
        </motion.div>

        <div className="sr-only" role="status">
          <span>
            {filteredProjects.length} of {moreProjects.length} projects in view
          </span>
          <span>{activeFilter} filter</span>
        </div>

        {archiveView === 'carousel' ? (
          <motion.div
            className="projects-carousel"
            role="region"
            tabIndex={0}
            aria-label="Scrollable project archive"
            onPointerDown={handleCarouselPointerDown}
            onPointerMove={handleCarouselPointerMove}
            onPointerUp={stopCarouselDrag}
            onPointerCancel={stopCarouselDrag}
            onPointerLeave={stopCarouselDrag}
            onClickCapture={handleCarouselClickCapture}
          >
            <LoopingProjectTrack projects={filteredProjects} dragState={dragState}>
              {(project) => (
                <ProjectArchiveCard
                  project={project}
                  openProject={openProject}
                />
              )}
            </LoopingProjectTrack>
          </motion.div>
        ) : (
          <motion.div
            className="projects-scan-grid"
            initial={false}
            whileInView="visible"
            viewport={{ once: true, amount: 0.08 }}
            variants={staggerContainer}
          >
            {filteredProjects.map((project) => (
              <ProjectArchiveCard
                project={project}
                openProject={openProject}
                key={project.title}
              />
            ))}
          </motion.div>
        )}
      </div>

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
              className="project-modal project-modal-simple"
              onClick={(event) => event.stopPropagation()}
              data-pointer-glow
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
                <div className="project-topline">
                  <p className="project-category">{selectedProject.category}</p>
                  <span className="project-status">
                    {selectedProject.status}
                  </span>
                </div>
                <p className="project-repo-name modal-repo-name">
                  {selectedProject.repoName}
                </p>
                <h3 id="project-modal-title">{selectedProject.title}</h3>
                <p
                  className="project-modal-description"
                  id="project-modal-description"
                >
                  {selectedProject.description}
                </p>
                <div className="project-dialog-actions">
                  <ProjectLinks project={selectedProject} />
                </div>
                <div className="project-dialog-layout">
                  <div className="project-dialog-visual">
                    {selectedProject.screenshots?.length ? (
                      <ProjectGallery key={selectedProject.repoName} project={selectedProject} />
                    ) : (
                      <ProjectPreview project={selectedProject} />
                    )}
                    <div className="project-highlights modal-highlights">
                      {selectedProject.highlights.map((item) => (
                        <span key={item} className="project-highlight-pill">{item}</span>
                      ))}
                    </div>
                  </div>
                  <div className="project-dialog-information">
                    {selectedProject.details && (
                      <section className="project-dialog-overview">
                        <h4 className="modal-label">Overview</h4>
                        <p>{selectedProject.details}</p>
                      </section>
                    )}

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
                      <div className="project-proof-list">
                        <h4 className="modal-label">Built with</h4>
                        <ul>
                          {(
                            selectedProject.architecture ||
                            getTechLabels(selectedProject)
                          ).map((tool) => (
                            <li key={tool}>{tool}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
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
  <motion.article
    className="project-card compact-project"
    onClick={() => openProject(project)}
    data-pointer-glow
    style={{ '--project-accent': project.accent }}
    variants={revealVariants}
    whileHover={{ y: -4, scale: 1.005 }}
    whileTap={{ scale: 0.99 }}
    transition={springHover}
  >
    <div className="project-card-sheen" aria-hidden="true"></div>
    <ProjectPreview project={project} />
    <div className="project-topline">
      <p className="project-category">{project.category}</p>
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
  </motion.article>
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
          <p className="project-category">{project.category}</p>
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
          {getTechLabels(project).map((item) => (
            <span key={item} className="project-highlight-pill">
              {item}
            </span>
          ))}
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
      <figure className="project-preview screenshot-preview">
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
