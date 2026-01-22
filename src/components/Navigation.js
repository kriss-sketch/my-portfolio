import React, { useState } from 'react';
import './Navigation.css';

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-content">
        <div className="nav-brand">Portfolio</div>
        
        <button className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li><button onClick={() => scrollToSection('about')} className="nav-button">About</button></li>
          <li><button onClick={() => scrollToSection('projects')} className="nav-button">Projects</button></li>
          <li><button onClick={() => scrollToSection('contact')} className="nav-button">Contact</button></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
