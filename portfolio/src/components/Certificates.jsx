import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './Certificates.css';

const certificateList = [
  {
    name: 'Basics in Computer Networking',
    issuer: 'Cisco Networking Academy',
    issuerLogo: 'CN',
    image: '/assets/certificates/basicincomputernetworking.png',
    description: 'Fundamental concepts of computer networking, including protocols, models, and network design.',
    glowColor: '#9f7aea',
    date: 'June 2021',
    skills: ['Network models', 'Protocols', 'Network design']
  },
  {
    name: 'Introduction to Packet Tracer',
    issuer: 'Cisco Networking Academy',
    issuerLogo: 'CN',
    image: '/assets/certificates/introductiontopackettracer.png',
    description: 'Hands-on experience with Cisco Packet Tracer for network simulation and troubleshooting.',
    glowColor: '#FFCA28',
    date: 'July 2021',
    skills: ['Simulation', 'Troubleshooting', 'Packet Tracer']
  },
  {
    name: 'National Cyber Drill 2022',
    issuer: 'ICT Division, Bangladesh',
    issuerLogo: 'ICT',
    image: '/assets/certificates/nationalCyberDrill2022.png',
    description: 'Participation in a national-level cyber drill focusing on cybersecurity awareness and incident response.',
    glowColor: '#FF6F61',
    date: 'March 2022',
    skills: ['Cybersecurity', 'Incident response', 'Awareness']
  },
  {
    name: 'Complete Python Masterclass 2022',
    issuer: 'Udemy',
    issuerLogo: 'U',
    image: '/assets/certificates/pythonmasterclass.png',
    description: 'Comprehensive Python programming course covering basics to advanced topics, including data structures, OOP, and web development.',
    glowColor: '#FF9B42',
    date: 'May 2022',
    skills: ['Python', 'OOP', 'Data structures']
  },
  {
    name: 'Complete Django Bootcamp',
    issuer: 'Edge, ICT Division, Bangladesh',
    issuerLogo: 'EDGE',
    image: '/assets/certificates/completeDjangopython.png',
    description: 'Full-stack web development using Django, covering models, views, templates, and REST APIs.',
    glowColor: '#58c7ff',
    date: 'August 2022',
    skills: ['Django', 'REST APIs', 'Full-stack']
  },
  {
    name: 'Python for Machine Learning',
    issuer: 'Udemy',
    issuerLogo: 'U',
    image: '/assets/certificates/pythonformachinelearning.png',
    description: 'Machine learning fundamentals using Python, including data preprocessing, model training, and evaluation.',
    glowColor: '#4ade80',
    date: 'September 2022',
    skills: ['Machine learning', 'Model training', 'Evaluation']
  },
  {
    name: 'Python for Deep Learning',
    issuer: 'Udemy',
    issuerLogo: 'U',
    image: '/assets/certificates/pythonfordeeplearning.png',
    description: 'Deep learning fundamentals with Python, neural network concepts, model training workflows, and practical AI experimentation.',
    glowColor: '#60a5fa',
    date: 'October 2022',
    skills: ['Deep learning', 'Neural networks', 'AI workflow']
  },
  {
    name: 'Concepts of Operating System',
    issuer: 'Udemy',
    issuerLogo: 'U',
    image: '/assets/certificates/conceptsofOperatingSystem.png',
    description: 'Understanding operating system principles, including process management, memory management, and file systems.',
    glowColor: '#f472b6',
    date: 'November 2022',
    skills: ['Processes', 'Memory', 'File systems']
  }
];

const CertificateModal = ({ selectedCert, closeModal }) => {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!selectedCert) {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, [selectedCert]);

  const handleModalKeyDown = (event) => {
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

  if (typeof document === 'undefined') {
    return null;
  }

  return createPortal(
    <AnimatePresence>
      {selectedCert && (
        <motion.div
          className="certificate-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="certificate-modal-title"
          aria-describedby="certificate-modal-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.16 }}
          onClick={closeModal}
          onKeyDown={handleModalKeyDown}
        >
          <motion.div
            className="modal-content"
            initial={{ scale: 0.98, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.98, opacity: 0 }}
            transition={{ duration: 0.18 }}
            onClick={(event) => event.stopPropagation()}
            style={{ '--certificate-glow': selectedCert.glowColor, '--pointer-glow-color': `${selectedCert.glowColor}33` }}
            data-pointer-glow
          >
            <div className="modal-accent"></div>
            <button ref={closeButtonRef} type="button" className="close-btn" onClick={closeModal} aria-label="Close certificate preview">
              <span className="close-line close-line-one"></span>
              <span className="close-line close-line-two"></span>
            </button>

            <div className="modal-layout">
              <div className="modal-visual-panel">
                <div className="modal-image-container">
                  <img src={selectedCert.image} alt={selectedCert.name} />
                </div>
              </div>

              <div className="modal-copy">
                <div className="certificate-issuer-lockup">
                  <span className="certificate-issuer-logo" aria-hidden="true">{selectedCert.issuerLogo}</span>
                  <div>
                    <span>Issued by</span>
                    <strong>{selectedCert.issuer}</strong>
                  </div>
                </div>
                <h3 id="certificate-modal-title">{selectedCert.name}</h3>
                <p className="issuer">{selectedCert.issuer}</p>
                <p className="certificate-date">{selectedCert.date}</p>
                <p className="modal-description" id="certificate-modal-description">{selectedCert.description}</p>
                <div className="certificate-modal-meta" aria-label="Certificate highlights">
                  {selectedCert.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
                <a className="certificate-full-link" href={selectedCert.image} target="_blank" rel="noopener noreferrer">
                  Open full certificate
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const [hoveredCert, setHoveredCert] = useState(null);

  const openModal = (cert) => {
    setSelectedCert(cert);
  };

  const closeModal = (e) => {
    if (e) e.stopPropagation();
    setSelectedCert(null);
  };

  useEffect(() => {
    if (!selectedCert) {
      document.body.style.overflow = '';
      return undefined;
    }

    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedCert(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedCert]);

  return (
    <section id="certificates" className="certificates-section">
      <div className="certificates-orb certificates-orb-left" aria-hidden="true"></div>
      <div className="certificates-orb certificates-orb-right" aria-hidden="true"></div>
      <div className="certificates-grid-glow" aria-hidden="true"></div>

      <div className="certificates-shell">
        <div className="section-title-block">
          <h2>Professional Credentials</h2>
        </div>

        <div className="certificates-container">
          <div className="certificates-grid">
            {certificateList.map((cert) => (
              <motion.article
                className="certificate-card"
                key={cert.name}
                initial={{ opacity: 1, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4 }}
                onHoverStart={() => setHoveredCert(cert.name)}
                onHoverEnd={() => setHoveredCert(null)}
                onClick={() => openModal(cert)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    openModal(cert);
                  }
                }}
                role="button"
                tabIndex={0}
                style={{ '--certificate-glow': cert.glowColor, '--pointer-glow-color': `${cert.glowColor}33` }}
                data-pointer-glow
              >
                <motion.div
                  className="certificate-glow-effect"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredCert === cert.name ? 1 : 0 }}
                  transition={{ duration: 0.14 }}
                />

                <div className="certificate-image-container">
                  <div className="certificate-image" style={{ backgroundImage: `url(${cert.image})` }} />
                  <div className="image-overlay"></div>
                </div>

                <div className="certificate-content">
                  <p className="certificate-date">{cert.date}</p>
                  <h3>{cert.name}</h3>
                  <p className="issuer">{cert.issuer}</p>
                  <div className="certificate-footer">
                    <span className="view-label">View Certificate</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>

      <CertificateModal selectedCert={selectedCert} closeModal={closeModal} />
    </section>
  );
};

export default Certificates;

