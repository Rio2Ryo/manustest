'use client';

import React, { createContext, useContext, useState } from 'react';

/**
 * Minimal stub of a language context used by the legacy components under `folder/`.
 * It simply returns the first non-null argument it receives.
 */
const LanguageContext = createContext({
  language: 'ja',
  changeLanguage: () => {},
  t: (jp, en) => jp ?? en ?? ''
});

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('ja');

  const changeLanguage = (lang) => setLanguage(lang);

  const t = (jp, en) => (language === 'ja' ? jp ?? en ?? '' : en ?? jp ?? '');

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
