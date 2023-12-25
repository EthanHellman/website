import React, { useState } from 'react';
import './Header.css'; // Ensure you have imported the CSS

const Header = () => {
  const [active, setActive] = useState('#home');

  // Smooth scroll to section
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    setActive(sectionId);
    document.querySelector(sectionId).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <header className="site-header">
      <div className="container">
        <a href="#about" onClick={(e) => scrollToSection(e, '#about')} className={`logo ${active === '#about' ? 'active' : ''}`}>
          Ethan Hellman
        </a>
        <nav className="navbar">
          <a href="#about" onClick={(e) => scrollToSection(e, '#about')} className={active === '#about' ? 'active' : ''}>
            About
          </a>
          <a href="#experience" onClick={(e) => scrollToSection(e, '#experience')} className={active === '#experience' ? 'active' : ''}>
            Experience
          </a>
          <a href="#skills-academics" onClick={(e) => scrollToSection(e, '#skills-academics')} className={active === '#skills-academics' ? 'active' : ''}>
            Skills & Academics
          </a>
          <a href="#work" onClick={(e) => scrollToSection(e, '#work')} className={active === '#work' ? 'active' : ''}>
            Work
            </a>
          <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')} className={active === '#contact' ? 'active' : ''}>
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
