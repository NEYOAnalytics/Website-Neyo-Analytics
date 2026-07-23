'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    if (typeof document !== 'undefined') {
      document.body.classList.remove('light', 'dark');
      document.body.classList.add(savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
      if (typeof document !== 'undefined') {
        document.body.classList.remove('light', 'dark');
        document.body.classList.add(nextTheme);
      }
      try {
        localStorage.setItem('theme', nextTheme);
      } catch (e) {}
      return nextTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    return { theme: 'dark', toggleTheme: () => {} };
  }
  return context;
};
