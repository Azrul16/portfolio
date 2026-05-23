import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBriefcase, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Navbar.css';
import logo from '../assets/images/logo/logo.png';
import cvUrl from '../assets/CV.pdf';

const navItems = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Education', id: 'education' },
  { label: 'Certificates', id: 'certificates' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact', id: 'contact' }
];
const cvFileName = 'Azrul Amaline.pdf';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [activeSection, setActiveSection] = useState('home');

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
    let animationFrame = null;

    const getNavbarOffset = () => {
      const navbar = document.querySelector('.navbar');
      return (navbar?.getBoundingClientRect().height || 0) + 24;
    };

    const updateActiveSection = () => {
      const sections = navItems
        .map((item) => document.getElementById(item.id))
        .filter(Boolean);

      if (!sections.length) {
        animationFrame = null;
        return;
      }

      const scrollPosition = window.scrollY + getNavbarOffset() + window.innerHeight * 0.22;
      const isAtPageBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      const currentSection = isAtPageBottom
        ? sections[sections.length - 1]
        : sections.reduce((current, section) => {
            return section.offsetTop <= scrollPosition ? section : current;
          }, sections[0]);

      setActiveSection(currentSection.id);
      animationFrame = null;
    };

    const handleScroll = () => {
      if (!animationFrame) {
        animationFrame = window.requestAnimationFrame(updateActiveSection);
      }
    };

    updateActiveSection();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
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

  const scrollToSection = (sectionId) => {
    const target = document.getElementById(sectionId);
    if (!target) {
      return;
    }

    const navbar = document.querySelector('.navbar');
    const navbarHeight = navbar?.getBoundingClientRect().height || 0;
    const targetTop = target.getBoundingClientRect().top + window.scrollY - navbarHeight - 12;

    window.scrollTo({
      top: Math.max(targetTop, 0),
      behavior: 'smooth'
    });
    setActiveSection(sectionId);
  };

  const handleLinkClick = (event, sectionId) => {
    event.preventDefault();
    setMenuOpen(false);
    window.requestAnimationFrame(() => scrollToSection(sectionId));
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
          <a href="#home" onClick={(event) => handleLinkClick(event, 'home')}>
            <img src={logo} alt="Azrul Amaline logo" className="logo-img" />
            <span className="logo-text">Azrul Amaline</span>
          </a>
        </motion.div>

        <ul className="navbar-links">
          {navItems.map((item, index) => {
            const itemId = item.id;
            const isActive = activeSection === itemId;

            return (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <a href={`#${itemId}`} onClick={(event) => handleLinkClick(event, itemId)} className={`nav-link ${isActive ? 'active' : ''}`}>
                  <span className="link-text">{item.label}</span>
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

          <motion.a
            href="#contact"
            className="navbar-hire-btn"
            onClick={(event) => handleLinkClick(event, 'contact')}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <FaBriefcase />
            Hire Me
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
            onClick={() => setMenuOpen(false)}
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
                const itemId = item.id;
                const isActive = activeSection === itemId;

                return (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    <a href={`#${itemId}`} onClick={(event) => handleLinkClick(event, itemId)} className={`mobile-nav-link ${isActive ? 'active' : ''}`}>
                      {item.label}
                    </a>
                  </motion.li>
                );
              })}
              <a href="#contact" onClick={(event) => handleLinkClick(event, 'contact')} className="mobile-hire-link">
                <FaBriefcase />
                Hire Me / Contact
              </a>
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
