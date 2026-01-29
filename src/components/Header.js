import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <img src="/images/krista.jpeg" alt="Krista's profile" className="profile-picture" />
        <h1 className="logo">Krista Japona</h1>
        <p className="tagline">Software Developer</p>
        <p className="hero-statement">
          Software Developer focused on building reliable, user-centered web applications with clean architecture and real-world usability.
        </p>
        <div className="cta-buttons">
          <button className="cta-button primary" onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
            View Projects
          </button>
          <button className="cta-button secondary" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
            Contact Me
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
