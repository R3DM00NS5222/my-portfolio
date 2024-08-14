import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

/**
 * App Component
 * This is the main component of your React application. It renders the Navbar, a main section for content,
 * and the Footer. The Footer is positioned at the bottom and is only visible after scrolling.
 *
 * @returns {JSX.Element} The main application component.
 */
function App() {
  return (
    <div className="App">
      <Navbar /> {/* Navbar with navigation links */}
      <main>
        {/* Additional content (like Hero, About, etc.) will go here */}
        <p>Your main content goes here...</p>
      </main>
      <Footer /> {/* Footer with links and social media */}
    </div>
  );
}

export default App;
