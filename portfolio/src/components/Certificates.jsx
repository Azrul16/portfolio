import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Certificates.css';

const certificateList = [
  { 
    name: 'Flutter Development Bootcamp', 
    issuer: 'Udemy', 
    image: '/assets/certificates/flutter.png',
    description: 'Comprehensive training in Flutter framework covering state management, UI design, and Firebase integration.',
    glowColor: '#9f7aea'
  },
  { 
    name: 'Firebase in Practice', 
    issuer: 'Coursera', 
    image: '/src/assets/certificates/pythonmasterclass.png',
    description: 'Mastered Firebase services including Authentication, Firestore, Cloud Functions, and Hosting.',
    glowColor: '#FFCA28'
  },
  { 
    name: 'AI for Everyone', 
    issuer: 'Coursera', 
    image: '/src/assets/certificates/pythonmasterclass.png',
    description: 'Fundamental understanding of AI concepts, machine learning workflows, and real-world applications.',
    glowColor: '#FF6F61'
  },
  { 
    name: 'Machine Learning', 
    issuer: 'Coursera', 
    image: '/src/assets/certificates/ml.png',
    description: 'Hands-on experience with supervised and unsupervised learning algorithms using Python and scikit-learn.',
    glowColor: '#FF6F00'
  },
  { 
    name: 'Python for Data Science', 
    issuer: 'edX', 
    image: '/assets/certificates/python.png',
    description: 'Data manipulation, visualization, and analysis using Pandas, NumPy, and Matplotlib libraries.',
    glowColor: '#3776AB'
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
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <span className="emoji">📜</span> Certificates
      </motion.h2>
      
      <div className="certificates-grid">
        {certificateList.map((cert, index) => (
          <motion.div
            className="certificate-card"
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.4,
              delay: index * 0.05,
              ease: "easeOut"
            }}
            whileHover={{ 
              y: -5,
              transition: { duration: 0.2 }
            }}
            onHoverStart={() => setHoveredCert(index)}
            onHoverEnd={() => setHoveredCert(null)}
            onClick={() => openModal(cert)}
          >
            <motion.div 
              className="glow-effect"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: hoveredCert === index ? 0.7 : 0,
                boxShadow: hoveredCert === index ? `0 0 25px 8px ${cert.glowColor}` : 'none'
              }}
              transition={{ duration: 0.25 }}
            />
            
            <motion.div 
              className="certificate-image" 
              style={{ 
                backgroundImage: `url(${cert.image})`,
                borderColor: cert.glowColor
              }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.25 }}
            />
            
            <div className="certificate-content">
              <h3>{cert.name}</h3>
              <p className="issuer">Issued by: {cert.issuer}</p>
              <p className="description">{cert.description}</p>
              
              <motion.div
                className="view-indicator"
                initial={{ width: 0 }}
                animate={{ 
                  width: hoveredCert === index ? '100%' : 0,
                  opacity: hoveredCert === index ? 1 : 0
                }}
                transition={{ duration: 0.2 }}
                style={{ backgroundColor: cert.glowColor }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {selectedCert && (
        <motion.div 
          className="certificate-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={closeModal}
        >
          <motion.div 
            className="modal-content"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.95 }}
            transition={{ 
              type: "spring",
              stiffness: 400,
              damping: 30
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="close-btn" 
              onClick={closeModal}
              whileHover={{ rotate: 90, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              ×
            </button>
            <div className="modal-image-container">
              <img src={selectedCert.image} alt={selectedCert.name} />
            </div>
            <div className="modal-details">
              <h3>{selectedCert.name}</h3>
              <p className="issuer">Issued by: {selectedCert.issuer}</p>
              <p className="description">{selectedCert.description}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Certificates;