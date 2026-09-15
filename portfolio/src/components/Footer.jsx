import React from 'react';
import { m as motion } from 'framer-motion';
import logo from '../assets/images/logo/logo.webp';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <motion.div
        className="footer-container"
        initial={false}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.28 }}
      >
        <div className="footer-logo-container">
          <img src={logo} alt="Azrul Amaline Logo" className="footer-logo" width="160" height="160" loading="lazy" decoding="async" />
          <motion.div
            className="footer-text"
            initial={false}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.06, duration: 0.22 }}
          >
            <p>&copy; {new Date().getFullYear()} Azrul Amaline. All rights reserved.</p>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
