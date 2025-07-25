import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaMoon, FaSun } from 'react-icons/fa';
import './Navbar.css';
import logo from '../assets/images/logo/logo.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [hoveredItem, setHoveredItem] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleHamburgerClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('light-mode');
  };

  const navItems = ['About', 'Education','Certificates', 'Skills', 'Projects', 'Contact'];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${darkMode ? 'dark' : 'light'}`}>
      <div className="navbar-container">
        <motion.div 
          className="navbar-logo"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a href="#home">
            <img src={logo} alt="Logo" className="logo-img" />
            <span className="logo-text">Azrul Amaline</span>
          </a>
        </motion.div>
        
        <div className="navbar-right">
          {/* <motion.button 
            className="theme-toggle"
            onClick={toggleDarkMode}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle dark mode"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </motion.button> */}
          
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
        
        <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          {navItems.map((item, index) => (
            <motion.li 
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <a 
                href={`#${item.toLowerCase()}`} 
                onClick={handleLinkClick}
                className="nav-link"
              >
                <span className="link-text">{item}</span>
                <motion.span 
                  className="link-underline"
                  initial={{ width: 0 }}
                  animate={{ 
                    width: hoveredItem === index ? '100%' : 0,
                    backgroundColor: hoveredItem === index ? 'var(--primary-color)' : 'transparent'
                  }}
                  transition={{ duration: 0.3 }}
                />
              </a>
            </motion.li>
          ))}
        </ul>
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
            >
              {navItems.map((item, index) => (
                <motion.li 
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                >
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    onClick={handleLinkClick}
                    className="mobile-nav-link"
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
              <div className="mobile-socials">
                <motion.a 
                  href="https://github.com/azrul16" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaGithub />
                </motion.a>
                <motion.a 
                  href="https://linkedin.com/in/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaLinkedin />
                </motion.a>
                <motion.a 
                  href="https://twitter.com/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaTwitter />
                </motion.a>
              </div>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;