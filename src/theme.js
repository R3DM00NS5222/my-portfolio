import { createContext, useState } from 'react';
import './styles/themes/gamingTheme.css';  // Import default gaming theme styles
import './styles/themes/professionalTheme.css';  // Import professional theme styles

/**
 * ThemeContext
 * This context is used to manage and provide the current theme ('gaming' or 'professional')
 * throughout the application.
 */
export const ThemeContext = createContext();

/**
 * ThemeProvider
 * A provider component that wraps the application and allows any component
 * within it to access and modify the current theme.
 *
 * @param {object} props - The children components that will be wrapped by this provider.
 * @returns {JSX.Element} The provider component that wraps the children.
 */
export const ThemeProvider = ({ children }) => {
  // State to manage the current theme, default is 'gaming'
  const [theme, setTheme] = useState('gaming');

  /**
   * toggleTheme
   * Function to toggle between the 'gaming' and 'professional' themes.
   * This function updates the `theme` state and dynamically changes the CSS file
   * associated with the current theme.
   */
  const toggleTheme = () => {
    const newTheme = theme === 'gaming' ? 'professional' : 'gaming';
    setTheme(newTheme);

    // Get the theme stylesheet link element by its ID
    const themeStylesheet = document.getElementById('theme-stylesheet');
    
    // Update the stylesheet based on the selected theme
    if (newTheme === 'gaming') {
      themeStylesheet.setAttribute('href', './styles/themes/gamingTheme.css');
    } else {
      themeStylesheet.setAttribute('href', './styles/themes/professionalTheme.css');
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
