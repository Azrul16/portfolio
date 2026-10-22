import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { m as motion, AnimatePresence } from 'framer-motion';
import './Certificates.css';

const certificateList = [
  {
    name: 'Basics of Computer Networking',
    issuer: 'Great Learning Academy',
    issuerLogo: 'GL',
    image: '/assets/certificates/basicincomputernetworking.png',
    description:
      'Fundamental concepts of computer networking, including protocols, models, and network design.',
    overview: 'Network protocols, models, and design fundamentals.',
    glowColor: '#9f7aea',
    date: 'March 2024',
    skills: ['Network models', 'Protocols', 'Network design'],
  },
  {
    name: 'Introduction to Packet Tracer',
    issuer: 'Cisco Networking Academy',
    issuerLogo: 'CN',
    image: '/assets/certificates/introductiontopackettracer.png',
    description:
      'Hands-on experience with Cisco Packet Tracer for network simulation and troubleshooting.',
    overview: 'Network simulation and troubleshooting with Packet Tracer.',
    glowColor: '#FFCA28',
    date: 'February 20, 2024',
    skills: ['Simulation', 'Troubleshooting', 'Packet Tracer'],
  },
  {
    name: 'National Cyber Drill 2022',
    issuer: 'BGD e-GOV CIRT (N-CERT)',
    issuerLogo: 'CIRT',
    image: '/assets/certificates/nationalCyberDrill2022.png',
    description:
      'Participation in a national-level cyber drill focusing on cybersecurity awareness and incident response.',
    overview: 'Cybersecurity awareness and incident response practice.',
    glowColor: '#FF6F61',
    date: '2022',
    skills: ['Cybersecurity', 'Incident response', 'Awareness'],
  },
  {
    name: 'Python Masterclass 2022: Python 3 Programming for Beginners',
    issuer: 'Udemy',
    issuerLogo: 'U',
    image: '/assets/certificates/pythonmasterclass.png',
    description:
      'Completed a 9.5-hour introductory Python 3 programming course from Tech Academy on Udemy.',
    overview: 'Introductory Python 3 programming fundamentals.',
    glowColor: '#FF9B42',
    date: 'July 8, 2025',
    skills: ['Python 3', 'Programming fundamentals'],
  },
  {
    name: 'Python (Django) Training',
    issuer: 'EDGE, Bangladesh Computer Council / PSTU',
    issuerLogo: 'EDGE',
    image: '/assets/certificates/completeDjangopython.png',
    description:
      'Completed Python (Django) training at PSTU under the EDGE project, from February to March 2024.',
    overview: 'Python and Django training through the EDGE project.',
    glowColor: '#58c7ff',
    date: 'March 27, 2024',
    skills: ['Django', 'REST APIs', 'Full-stack'],
  },
  {
    name: 'Python for Machine Learning',
    issuer: 'Udemy',
    issuerLogo: 'U',
    image: '/assets/certificates/pythonformachinelearning.png',
    description:
      'Machine learning fundamentals using Python, including data preprocessing, model training, and evaluation.',
    overview: 'Data preprocessing, model training, and evaluation.',
    glowColor: '#4ade80',
    date: 'July 7, 2025',
    skills: ['Machine learning', 'Model training', 'Evaluation'],
  },
  {
    name: 'Python for Deep Learning',
    issuer: 'Udemy',
    issuerLogo: 'U',
    image: '/assets/certificates/pythonfordeeplearning.png',
    description:
      'Deep learning fundamentals with Python, neural network concepts, model training workflows, and practical AI experimentation.',
    overview: 'Neural networks and deep learning with Python.',
    glowColor: '#60a5fa',
    date: 'July 16, 2025',
    skills: ['Deep learning', 'Neural networks', 'AI workflow'],
  },
  {
    name: 'Concepts of Operating Systems',
    issuer: 'Udemy',
    issuerLogo: 'U',
    image: '/assets/certificates/conceptsofOperatingSystem.png',
    description:
      'Understanding operating system principles, including process management, memory management, and file systems.',
    overview: 'Processes, memory management, and file systems.',
    glowColor: '#f472b6',
    date: 'July 11, 2025',
    skills: ['Processes', 'Memory', 'File systems'],
  },
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
            style={{
              '--certificate-glow': selectedCert.glowColor,
              '--pointer-glow-color': `${selectedCert.glowColor}33`,
            }}
            data-pointer-glow
          >
            <div className="modal-accent"></div>
            <button
              ref={closeButtonRef}
              type="button"
              className="close-btn"
              onClick={closeModal}
              aria-label="Close certificate preview"
            >
              <span className="close-line close-line-one"></span>
              <span className="close-line close-line-two"></span>
            </button>

            <div className="modal-layout">
              <div className="modal-visual-panel">
                <div className="modal-image-container">
                  <img
                    src={selectedCert.image.replace('.png', '-preview.webp')}
                    alt={selectedCert.name}
                    decoding="async"
                    fetchPriority="high"
                  />
                </div>
              </div>

              <div className="modal-copy">
                <div className="certificate-issuer-lockup">
                  <span className="certificate-issuer-logo" aria-hidden="true">
                    {selectedCert.issuerLogo}
                  </span>
                  <div>
                    <span>Issued by</span>
                    <strong>{selectedCert.issuer}</strong>
                  </div>
                </div>
                <h3 id="certificate-modal-title">{selectedCert.name}</h3>
                <p className="issuer">{selectedCert.issuer}</p>
                <p className="certificate-date">{selectedCert.date}</p>
                <p
                  className="modal-description"
                  id="certificate-modal-description"
                >
                  {selectedCert.description}
                </p>
                <div
                  className="certificate-modal-meta"
                  aria-label="Certificate highlights"
                >
                  {selectedCert.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
                <a
                  className="certificate-full-link"
                  href={selectedCert.image}
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
  const preloadedPreviews = useRef(new Set());

  const preloadPreview = (cert) => {
    if (preloadedPreviews.current.has(cert.image)) return;
    preloadedPreviews.current.add(cert.image);
    const image = new Image();
    image.decoding = 'async';
    image.src = cert.image.replace('.png', '-preview.webp');
    image.decode().catch(() => preloadedPreviews.current.delete(cert.image));
  };

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

    const previousFocus = document.activeElement;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedCert(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      previousFocus?.focus({ preventScroll: true });
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedCert]);

  return (
    <section id="certificates" className="certificates-section">
      <div
        className="certificates-orb certificates-orb-left"
        aria-hidden="true"
      ></div>
      <div
        className="certificates-orb certificates-orb-right"
        aria-hidden="true"
      ></div>
      <div className="certificates-grid-glow" aria-hidden="true"></div>

      <div className="certificates-shell">
        <div className="section-title-block">
          <h2>Certificates & Training</h2>
        </div>

        <div className="certificates-container">
          <div className="certificates-grid">
            {certificateList.map((cert) => (
              <button
                type="button"
                className="certificate-row"
                key={cert.name}
                onPointerEnter={() => preloadPreview(cert)}
                onFocus={() => preloadPreview(cert)}
                onClick={() => openModal(cert)}
                aria-haspopup="dialog"
              >
                <img
                  className="certificate-row-thumbnail"
                  src={cert.image.replace('.png', '.webp')}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  width="160"
                  height="112"
                />
                <span className="certificate-row-details">
                  <strong>{cert.name}</strong>
                  <span className="certificate-row-issuer">
                    {cert.issuer} &middot; {cert.date}
                  </span>
                </span>
                <span className="certificate-row-overview">
                  {cert.overview}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <CertificateModal selectedCert={selectedCert} closeModal={closeModal} />
    </section>
  );
};

export default Certificates;
