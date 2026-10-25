import { useState, useEffect, useRef } from 'react';
import { m as motion, AnimatePresence } from 'framer-motion';
import {
  FaBriefcase,
  FaDownload,
  FaGithub,
  FaLinkedin,
  FaMoon,
  FaSun,
  FaTwitter,
} from 'react-icons/fa';
import './Navbar.css';
import logo from '../assets/images/logo/logo.webp';
import smallLogo from '../assets/images/logo/logo-80.webp';
import cvUrl from '../assets/Azrul-Amalie-Flutter.pdf';

const navItems = [
  { label: 'Home', id: 'home' },
  { label: 'Projects', id: 'projects' },
  { label: 'Skills', id: 'skills' },
  { label: 'About', id: 'about' },
  { label: 'Education', id: 'education' },
  { label: 'Certificates', id: 'certificates' },
  { label: 'Contact', id: 'contact' },
];
const cvFileName = 'Azrul-Amalie-Flutter.pdf';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [activeSection, setActiveSection] = useState('home');
  const scrolledRef = useRef(false);
  const hamburgerRef = useRef(null);
  const activeSectionRef = useRef('home');
  const [theme, setTheme] = useState('dark');
  const [themeReady, setThemeReady] = useState(false);

  useEffect(() => {
    let savedTheme;
    try {
      savedTheme = window.localStorage.getItem('portfolio-theme');
    } catch {
      /* Storage is optional. */
    }
    setTheme(
      savedTheme === 'light' || savedTheme === 'dark'
        ? savedTheme
        : window.matchMedia('(prefers-color-scheme: light)').matches
          ? 'light'
          : 'dark'
    );
    setThemeReady(true);
  }, []);

  useEffect(() => {
    if (!themeReady) return;
    document.body.classList.toggle('light-mode', theme === 'light');
    document.body.classList.toggle('dark-mode', theme === 'dark');
    try {
      window.localStorage.setItem('portfolio-theme', theme);
    } catch {
      /* Storage is optional. */
    }
  }, [theme, themeReady]);

  useEffect(() => {
    let animationFrame = null;

    const getNavbarOffset = () => {
      const navbar = document.querySelector('.navbar');
      return (navbar?.getBoundingClientRect().height || 0) + 24;
    };

    const updateActiveSection = () => {
      const nextScrolled = window.scrollY > 10;
      if (scrolledRef.current !== nextScrolled) {
        scrolledRef.current = nextScrolled;
        setScrolled(nextScrolled);
      }

      const sections = navItems
        .map((item) => document.getElementById(item.id))
        .filter(Boolean);

      if (!sections.length) {
        animationFrame = null;
        return;
      }

      const activationLine = getNavbarOffset() + window.innerHeight * 0.22;
      const isAtPageBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4;
      const currentSection = isAtPageBottom
        ? sections[sections.length - 1]
        : sections.reduce((current, section) => {
            return section.getBoundingClientRect().top <= activationLine
              ? section
              : current;
          }, sections[0]);

      if (activeSectionRef.current !== currentSection.id) {
        activeSectionRef.current = currentSection.id;
        setActiveSection(currentSection.id);
      }
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

    const hamburger = hamburgerRef.current;
    const timer = window.setTimeout(
      () => document.querySelector('.mobile-nav-link')?.focus(),
      0
    );
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
      if (event.key === 'Tab') {
        const controls = [
          ...document.querySelectorAll(
            '#mobile-navigation a, #mobile-navigation button'
          ),
        ];
        const first = controls[0];
        const last = controls[controls.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener('keydown', handleKeyDown);
      hamburger?.focus({ preventScroll: true });
    };
  }, [menuOpen]);

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 1181px)');
    const closeDesktopMenu = () => {
      if (desktop.matches) setMenuOpen(false);
    };
    desktop.addEventListener('change', closeDesktopMenu);
    return () => desktop.removeEventListener('change', closeDesktopMenu);
  }, []);

  const handleHamburgerClick = () => {
    setMenuOpen((current) => !current);
  };

  const toggleTheme = () => {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'));
  };

  const scrollToSection = (sectionId) => {
    const target = document.getElementById(sectionId);
    if (!target) {
      return;
    }

    const navbar = document.querySelector('.navbar');
    const navbarHeight = navbar?.getBoundingClientRect().height || 0;
    const targetTop =
      target.getBoundingClientRect().top + window.scrollY - navbarHeight - 12;

    window.scrollTo({
      top: Math.max(targetTop, 0),
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ? 'auto'
        : 'smooth',
    });
    activeSectionRef.current = sectionId;
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
          transition={{ duration: 0.25 }}
        >
          <a href="#home" onClick={(event) => handleLinkClick(event, 'home')}>
            <img
              src={logo}
              srcSet={`${smallLogo} 80w, ${logo} 160w`}
              sizes="48px"
              alt="Azrul Amaline logo"
              className="logo-img"
              width="160"
              height="160"
            />
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
                transition={{ duration: 0.18, delay: index * 0.025 }}
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <a
                  href={`#${itemId}`}
                  onClick={(event) => handleLinkClick(event, itemId)}
                  aria-current={isActive ? 'location' : undefined}
                  className={`nav-link ${isActive ? 'active' : ''}`}
                >
                  <span className="link-text">{item.label}</span>
                  <motion.span
                    className="link-underline"
                    initial={{ width: 0 }}
                    animate={{
                      width: hoveredItem === index || isActive ? '100%' : 0,
                      backgroundColor:
                        hoveredItem === index || isActive
                          ? 'var(--primary-color)'
                          : 'transparent',
                    }}
                    transition={{ duration: isActive ? 0 : 0.16 }}
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
            aria-label="Download CV"
          >
            <FaDownload className="navbar-download-icon" aria-hidden="true" />
            <span className="navbar-download-label">Download CV</span>
          </motion.a>

          <motion.a
            href="#contact"
            className="navbar-hire-btn"
            onClick={(event) => {
              handleLinkClick(event, 'contact');
            }}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <FaBriefcase />
            Hire Me
          </motion.a>

          <motion.button
            type="button"
            className="theme-toggle-btn"
            onClick={toggleTheme}
            aria-label={
              theme === 'dark'
                ? 'Switch to light theme'
                : 'Switch to dark theme'
            }
            aria-pressed={theme === 'light'}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.96 }}
          >
            <span className="theme-toggle-icon">
              {theme === 'dark' ? <FaSun /> : <FaMoon />}
            </span>
          </motion.button>

          <motion.button
            type="button"
            ref={hamburgerRef}
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
            className={`mobile-menu-backdrop ${scrolled ? 'scrolled' : ''}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMenuOpen(false)}
          >
            <motion.div
              id="mobile-navigation"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
              className="mobile-menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{
                type: 'spring',
                stiffness: 520,
                damping: 38,
                mass: 0.6,
              }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                className="mobile-close-link"
                onClick={() => setMenuOpen(false)}
              >
                Close menu
              </button>
              {navItems.map((item, index) => {
                const itemId = item.id;
                const isActive = activeSection === itemId;

                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.035 + 0.05, duration: 0.16 }}
                  >
                    <a
                      href={`#${itemId}`}
                      onClick={(event) => handleLinkClick(event, itemId)}
                      aria-current={isActive ? 'location' : undefined}
                      className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                    >
                      {item.label}
                    </a>
                  </motion.div>
                );
              })}
              <a
                href={cvUrl}
                className="mobile-cv-link"
                download={cvFileName}
                onClick={() => {
                  setMenuOpen(false);
                }}
              >
                <FaDownload />
                Download CV
              </a>
              <a
                href="#contact"
                onClick={(event) => {
                  handleLinkClick(event, 'contact');
                }}
                className="mobile-hire-link"
              >
                <FaBriefcase />
                Hire Me / Contact
              </a>
              <button
                type="button"
                className="mobile-theme-link"
                onClick={toggleTheme}
              >
                {theme === 'dark' ? <FaSun /> : <FaMoon />}
                {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
              </button>
              <div className="mobile-socials">
                <motion.a
                  href="https://github.com/azrul16"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open GitHub profile"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaGithub />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/azrul-amaline/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open LinkedIn profile"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaLinkedin />
                </motion.a>
                <motion.a
                  href="https://x.com/AAmaline9489"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open X profile"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaTwitter />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
