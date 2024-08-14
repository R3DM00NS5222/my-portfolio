import React from 'react';
import './Footer.css'; // Reintroduce the CSS

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2024 My Portfolio. All rights reserved.</p>
        <ul className="footer-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="footer-socials">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
