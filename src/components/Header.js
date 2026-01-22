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
          I am a Software Developer with a Computer Science background, focused on building reliable, user-centered web applications while continuously growing my technical skills.
        </p>
      </div>
    </header>
  );
}

export default Header;
