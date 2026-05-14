import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Navbar.css';
import logo from '../assets/images/logo/logo.png';
import cvUrl from '../assets/CV.pdf';

const navItems = ['About', 'Education', 'Certificates', 'Skills', 'Projects', 'Contact'];
const cvFileName = 'Azrul Amaline.pdf';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    let animationFrame = null;

    const updateScrolledState = () => {
      setScrolled(window.scrollY > 10);
      animationFrame = null;
    };

    const handleScroll = () => {
      if (!animationFrame) {
        animationFrame = window.requestAnimationFrame(updateScrolledState);
      }
    };

    updateScrolledState();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  useEffect(() => {
    const sectionIds = new Set(navItems.map((item) => item.toLowerCase()));
    const sections = Array.from(document.querySelectorAll('main section[id]')).filter((section) => sectionIds.has(section.id));

    if (!sections.length || !('IntersectionObserver' in window)) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      {
        rootMargin: '-28% 0px -58% 0px',
        threshold: [0.08, 0.18, 0.32, 0.5]
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
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
            download={cvFileName}
          >
            Download CV
          </motion.a>

          <motion.button
            type="button"
            className={`navbar-hamburger ${menuOpen ? 'open' : ''}`}
            onClick={handleHamburgerClick}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </motion.button>
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
              id="mobile-navigation"
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
                <motion.a href="https://github.com/azrul16" target="_blank" rel="noopener noreferrer" aria-label="Open GitHub profile" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <FaGithub />
                </motion.a>
                <motion.a href="https://www.linkedin.com/in/azrul-amaline/" target="_blank" rel="noopener noreferrer" aria-label="Open LinkedIn profile" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <FaLinkedin />
                </motion.a>
                <motion.a href="https://x.com/AAmaline9489" target="_blank" rel="noopener noreferrer" aria-label="Open X profile" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
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
