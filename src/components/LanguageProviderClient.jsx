'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('fr');

  useEffect(() => {
    const savedLang = localStorage.getItem('language') || 'fr';
    setLanguage(savedLang);
  }, []);

  const toggleLanguage = () => {
    setLanguage((prevLang) => {
      const nextLang = prevLang === 'fr' ? 'en' : 'fr';
      try {
        localStorage.setItem('language', nextLang);
      } catch (e) {}
      return nextLang;
    });
  };

  const setLang = (lang) => {
    setLanguage(lang);
    try {
      localStorage.setItem('language', lang);
    } catch (e) {}
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    return { language: 'fr', toggleLanguage: () => {}, setLang: () => {} };
  }
  return context;
};
