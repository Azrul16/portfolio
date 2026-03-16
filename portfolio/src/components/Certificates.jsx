import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Certificates.css';

const certificateList = [
  {
    name: 'Basics in Computer Networking',
    issuer: 'Cisco Networking Academy',
    image: '/assets/certificates/basicincomputernetworking.png',
    description: 'Fundamental concepts of computer networking, including protocols, models, and network design.',
    glowColor: '#9f7aea',
    date: 'June 2021'
  },
  {
    name: 'Introduction to Packet Tracer',
    issuer: 'Cisco Networking Academy',
    image: '/assets/certificates/introductiontopackettracer.png',
    description: 'Hands-on experience with Cisco Packet Tracer for network simulation and troubleshooting.',
    glowColor: '#FFCA28',
    date: 'July 2021'
  },
  {
    name: 'National Cyber Drill 2022',
    issuer: 'ICT Division, Bangladesh',
    image: '/assets/certificates/nationalCyberDrill2022.png',
    description: 'Participation in a national-level cyber drill focusing on cybersecurity awareness and incident response.',
    glowColor: '#FF6F61',
    date: 'March 2022'
  },
  {
    name: 'Complete Python Masterclass 2022',
    issuer: 'Udemy',
    image: '/assets/certificates/pythonmasterclass.png',
    description: 'Comprehensive Python programming course covering basics to advanced topics, including data structures, OOP, and web development.',
    glowColor: '#FF9B42',
    date: 'May 2022'
  },
  {
    name: 'Complete Django Bootcamp',
    issuer: 'Edge, ICT Division, Bangladesh',
    image: '/assets/certificates/completeDjangopython.png',
    description: 'Full-stack web development using Django, covering models, views, templates, and REST APIs.',
    glowColor: '#58c7ff',
    date: 'August 2022'
  },
  {
    name: 'Python for Machine Learning',
    issuer: 'Udemy',
    image: '/assets/certificates/pythonformachinelearning.png',
    description: 'Machine learning fundamentals using Python, including data preprocessing, model training, and evaluation.',
    glowColor: '#4ade80',
    date: 'September 2022'
  },
  {
    name: 'Python for Deep Learning',
    issuer: 'Udemy',
    image: '/assets/certificates/pythonfordeeplearning.png',
    description: 'Data manipulation, visualization, and analysis using Pandas, NumPy, and Matplotlib libraries.',
    glowColor: '#60a5fa',
    date: 'October 2022'
  },
  {
    name: 'Concepts of Operating System',
    issuer: 'Udemy',
    image: '/assets/certificates/conceptsofOperatingSystem.png',
    description: 'Understanding operating system principles, including process management, memory management, and file systems.',
    glowColor: '#f472b6',
    date: 'November 2022'
  }
];

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const [hoveredCert, setHoveredCert] = useState(null);

  const openModal = (cert) => {
    setSelectedCert(cert);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = (e) => {
    if (e) e.stopPropagation();
    setSelectedCert(null);
    document.body.style.overflow = 'auto';
  };

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
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -8 }}
                onHoverStart={() => setHoveredCert(cert.name)}
                onHoverEnd={() => setHoveredCert(null)}
                onClick={() => openModal(cert)}
                style={{ '--certificate-glow': cert.glowColor }}
              >
                <motion.div
                  className="glow-effect"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredCert === cert.name ? 1 : 0 }}
                  transition={{ duration: 0.25 }}
                />

                <div className="certificate-image-container">
                  <div className="certificate-image" style={{ backgroundImage: `url(${cert.image})` }} />
                  <div className="image-overlay"></div>
                </div>

                <div className="certificate-content">
                  <p className="certificate-date">{cert.date}</p>
                  <h3>{cert.name}</h3>
                  <p className="issuer">{cert.issuer}</p>
                  <p className="description">{cert.description}</p>
                  <div className="certificate-footer">
                    <span className="view-label">View Certificate</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedCert && (
          <motion.div className="certificate-modal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }} onClick={closeModal}>
            <motion.div
              className="modal-content"
              initial={{ scale: 0.96, y: 24 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, y: 24 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              style={{ '--certificate-glow': selectedCert.glowColor }}
            >
              <div className="modal-accent"></div>
              <button className="close-btn" onClick={closeModal}>
                <svg viewBox="0 0 24 24" width="24" height="24">
                  <path fill="currentColor" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
                </svg>
              </button>

              <div className="modal-layout">
                <div className="modal-visual-panel">
                  <div className="modal-image-container">
                    <img src={selectedCert.image} alt={selectedCert.name} />
                  </div>
                </div>

                <div className="modal-copy">
                  <h3>{selectedCert.name}</h3>
                  <p className="issuer">{selectedCert.issuer}</p>
                  <p className="certificate-date">{selectedCert.date}</p>
                  <p className="modal-description">{selectedCert.description}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;

