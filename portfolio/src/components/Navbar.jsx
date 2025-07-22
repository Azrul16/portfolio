import React, { useState } from 'react';
import './Navbar.css';
import logo from '../assets/images/logo/logo.png'; 

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleHamburgerClick = () => {
    setMenuOpen((open) => !open);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo" style={{ alignItems: 'center', display: 'flex', height: '160px' }}>
        <a href="#home">
          <img src={logo} alt="Logo" />
        </a>
      </div>
      <div className="navbar-hamburger" onClick={handleHamburgerClick}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`navbar-links${menuOpen ? ' open' : ''}`}>
        <li><a href="#about" onClick={handleLinkClick}>About</a></li>
        <li><a href="#projects" onClick={handleLinkClick}>Projects</a></li>
        <li><a href="#education" onClick={handleLinkClick}>Education</a></li>
        <li><a href="#certificates" onClick={handleLinkClick}>Certificates</a></li>
        <li><a href="#blog" onClick={handleLinkClick}>Blog</a></li>
        <li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar; 