import React from 'react';
import './Navbar.css';

/**
 * Navbar Component
 * This component renders the navigation bar of the portfolio website.
 * It includes a logo, navigation links, and a placeholder button for theme toggling.
 *
 * @returns {JSX.Element} The Navbar component.
 */
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>My Portfolio</h1>
      </div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <button className="theme-toggle">Toggle Theme</button> {/* Placeholder button */}
    </nav>
  );
};

export default Navbar;
