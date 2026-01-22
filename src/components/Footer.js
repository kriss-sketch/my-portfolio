import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {currentYear} Krista Dev. All rights reserved.</p>
        <p>Built with React.js</p>
      </div>
    </footer>
  );
}

export default Footer;
