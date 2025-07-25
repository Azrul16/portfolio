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
    glowColor: '#FF6F00',
    date: 'May 2022'
  },
  { 
    name: 'Complete Django Bootcamp', 
    issuer: 'Edge, ICT Division, Bangladesh', 
    image: '/assets/certificates/completeDjangopython.png',
    description: 'Full-stack web development using Django, covering models, views, templates, and REST APIs.',
    glowColor: '#3776AB',
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
  },
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
      <div className="section-header">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="emoji">📜</span> My Certifications
          <motion.div 
            className="header-underline"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          />
        </motion.h2>
        
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          Recognized achievements and completed courses in my learning journey
        </motion.p>
      </div>
      
      <div className="certificates-container">
        <div className="certificates-grid">
          {certificateList.map((cert, index) => (
            <motion.div
              className="certificate-card"
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6,
                delay: index * 0.05,
                ease: [0.16, 1, 0.3, 1]
              }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              onHoverStart={() => setHoveredCert(index)}
              onHoverEnd={() => setHoveredCert(null)}
              onClick={() => openModal(cert)}
            >
              <motion.div 
                className="glow-effect"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: hoveredCert === index ? 0.4 : 0,
                  boxShadow: hoveredCert === index ? `0 0 30px 12px ${cert.glowColor}` : 'none'
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
              
              <div className="certificate-badge" style={{ backgroundColor: cert.glowColor }}>
                <svg viewBox="0 0 24 24" width="16" height="16">
                  <path fill="currentColor" d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11V11.99z"/>
                </svg>
              </div>
              
              <motion.div 
                className="certificate-image-container"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <div 
                  className="certificate-image" 
                  style={{ backgroundImage: `url(${cert.image})` }}
                />
              </motion.div>
              
              <div className="certificate-content">
                <h3>{cert.name}</h3>
                <div className="certificate-meta">
                  <span className="issuer">
                    <svg viewBox="0 0 24 24" width="14" height="14">
                      <path fill="currentColor" d="M12 3L1 9l11 6 9-4.91V17h2V9M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"/>
                    </svg>
                    {cert.issuer}
                  </span>
                  <span className="date">
                    <svg viewBox="0 0 24 24" width="14" height="14">
                      <path fill="currentColor" d="M19 19H5V8h14m-3-7v2H8V1H6v2H5c-1.11 0-2 .89-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2h-1V1m-1 11h-5v5h5v-5z"/>
                    </svg>
                    {cert.date}
                  </span>
                </div>
                <p className="description">{cert.description}</p>
                
                <motion.div
                  className="view-button"
                  initial={{ width: 0 }}
                  animate={{ 
                    width: hoveredCert === index ? '100%' : 0,
                    opacity: hoveredCert === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <span>View Certificate</span>
                  <svg viewBox="0 0 24 24" width="16" height="16">
                    <path fill="currentColor" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/>
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedCert && (
          <motion.div 
            className="certificate-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={closeModal}
          >
            <motion.div 
              className="modal-content"
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              transition={{ 
                type: "spring",
                stiffness: 300,
                damping: 25,
                duration: 0.3
              }}
              onClick={(e) => e.stopPropagation()}
              style={{ 
                borderColor: selectedCert.glowColor,
                boxShadow: `0 10px 30px -5px ${selectedCert.glowColor}40`
              }}
            >
              <button 
                className="close-btn" 
                onClick={closeModal}
                whileHover={{ rotate: 90, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg viewBox="0 0 24 24" width="24" height="24">
                  <path fill="currentColor" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"/>
                </svg>
              </button>
              
              <div className="modal-header" style={{ backgroundColor: `${selectedCert.glowColor}20` }}>
                <div className="modal-badge" style={{ backgroundColor: selectedCert.glowColor }}>
                  <svg viewBox="0 0 24 24" width="20" height="20">
                    <path fill="currentColor" d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11V11.99z"/>
                  </svg>
                </div>
                <h3>{selectedCert.name}</h3>
                <p className="issuer">{selectedCert.issuer}</p>
              </div>
              
              <div className="modal-image-container">
                <motion.img 
                  src={selectedCert.image} 
                  alt={selectedCert.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.3 }}
                />
              </div>
              
              <div className="modal-details">
                <div className="detail-row">
                  <svg viewBox="0 0 24 24" width="18" height="18">
                    <path fill="currentColor" d="M12 3L1 9l11 6 9-4.91V17h2V9M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"/>
                  </svg>
                  <span>Issued by: {selectedCert.issuer}</span>
                </div>
                
                <div className="detail-row">
                  <svg viewBox="0 0 24 24" width="18" height="18">
                    <path fill="currentColor" d="M19 19H5V8h14m-3-7v2H8V1H6v2H5c-1.11 0-2 .89-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2h-1V1m-1 11h-5v5h5v-5z"/>
                  </svg>
                  <span>Completed: {selectedCert.date}</span>
                </div>
                
                <div className="detail-row description">
                  <svg viewBox="0 0 24 24" width="18" height="18">
                    <path fill="currentColor" d="M13 9H11V7H13M13 17H11V11H13M12 2A10 10 0 002 12A10 10 0 0012 22A10 10 0 0022 12A10 10 0 0012 2Z"/>
                  </svg>
                  <p>{selectedCert.description}</p>
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