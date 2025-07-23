import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../assets/images/logo/logo.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="#home">
            <img src={logo} alt="Logo" className="logo-img" />
          </a>
        </div>
        
        <div 
          className={`navbar-hamburger ${menuOpen ? 'open' : ''}`} 
          onClick={handleHamburgerClick}
          aria-label="Menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </div>
        
        <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          {['About', 'Projects', 'Education', 'Certificates', 'Blog', 'Contact'].map((item) => (
            <li key={item}>
              <a 
                href={`#${item.toLowerCase()}`} 
                onClick={handleLinkClick}
                className="nav-link"
              >
                <span className="link-text">{item}</span>
                <span className="link-underline"></span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;