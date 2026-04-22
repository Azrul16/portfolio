import React from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/images/logo/logo.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <motion.div
        className="footer-container"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="footer-logo-container">
          <img src={logo} alt="Azrul Amaline Logo" className="footer-logo" />
          <motion.div
            className="footer-text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <p>&copy; {new Date().getFullYear()} Azrul Amaline. All rights reserved.</p>
            <motion.p
              className="footer-heart"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.75, 1, 0.75]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            >
              Built with care.
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
