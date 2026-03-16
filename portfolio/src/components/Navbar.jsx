import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Navbar.css';
import logo from '../assets/images/logo/logo.png';

const navItems = ['About', 'Education', 'Certificates', 'Skills', 'Projects', 'Contact'];
const cvUrl = 'https://drive.usercontent.google.com/download?id=1ZmV67fJUZ1FATBmHdekrqgkw09bmZkX_&export=download&authuser=0&confirm=t&uuid=f6fd6eaf-b097-4fa9-b482-ab647735efa0&at=AN8xHoodmwJNJQf8ZX1YNOvayv4F:1753280649921';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      const sections = document.querySelectorAll('main section[id]');
      const scrollPosition = window.scrollY + 160;
      let currentSection = 'about';

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const handleHamburgerClick = () => {
    setMenuOpen((current) => !current);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <motion.div
          className="navbar-logo"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a href="#home" onClick={handleLinkClick}>
            <img src={logo} alt="Azrul Amaline logo" className="logo-img" />
            <span className="logo-text">Azrul Amaline</span>
          </a>
        </motion.div>

        <ul className="navbar-links">
          {navItems.map((item, index) => {
            const itemId = item.toLowerCase();
            const isActive = activeSection === itemId;

            return (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <a href={`#${itemId}`} onClick={handleLinkClick} className={`nav-link ${isActive ? 'active' : ''}`}>
                  <span className="link-text">{item}</span>
                  <motion.span
                    className="link-underline"
                    initial={{ width: 0 }}
                    animate={{
                      width: hoveredItem === index || isActive ? '100%' : 0,
                      backgroundColor: hoveredItem === index || isActive ? 'var(--primary-color)' : 'transparent'
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </a>
              </motion.li>
            );
          })}
        </ul>

        <div className="navbar-right">
          <motion.a
            href={cvUrl}
            className="navbar-cv-btn"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            download="Azrul_Amaline_CV.pdf"
          >
            Download CV
          </motion.a>

          <motion.div
            className={`navbar-hamburger ${menuOpen ? 'open' : ''}`}
            onClick={handleHamburgerClick}
            aria-label="Menu"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleLinkClick}
          >
            <motion.ul
              className="mobile-menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              onClick={(event) => event.stopPropagation()}
            >
              {navItems.map((item, index) => {
                const itemId = item.toLowerCase();
                const isActive = activeSection === itemId;

                return (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    <a href={`#${itemId}`} onClick={handleLinkClick} className={`mobile-nav-link ${isActive ? 'active' : ''}`}>
                      {item}
                    </a>
                  </motion.li>
                );
              })}
              <div className="mobile-socials">
                <motion.a href="https://github.com/azrul16" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <FaGithub />
                </motion.a>
                <motion.a href="https://www.linkedin.com/in/azrul-amaline/" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <FaLinkedin />
                </motion.a>
                <motion.a href="https://x.com/AAmaline9489" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <FaTwitter />
                </motion.a>
              </div>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
