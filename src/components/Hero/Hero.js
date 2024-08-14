import React, { useContext } from 'react';
import { ThemeContext } from '../../theme';
import './Hero.css';

/**
 * Hero Component
 * This component renders the Hero section of the portfolio website.
 * It displays the user's name, a brief description or tagline, and a call-to-action button.
 * The appearance of the Hero section changes based on the current theme (Gaming or Professional).
 *
 * @returns {JSX.Element} The Hero section.
 */
const Hero = () => {
  console.log('Hero component rendered');
  // Access the current theme from the ThemeContext
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`hero-container ${theme}`}>
      <div className="hero-content">
        <h1>John Doe</h1>
        <p>{theme === 'gaming' ? 'Game Developer & Enthusiast' : 'Professional Full-Stack Developer'}</p>
        <a href="#projects" className="cta-button">
          {theme === 'gaming' ? 'Explore My Games' : 'View My Projects'}
        </a>
      </div>
    </div>
  );
};

export default Hero;
