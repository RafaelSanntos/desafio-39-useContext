import React, { createContext, useState, useEffect } from 'react';

const PreferencesContext = createContext();

const PreferencesProvider = ({ children }) => {
  const [language, setLanguage] = useState('pt');
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.className = theme; // Aplica a classe do tema ao body
  }, [theme]);

  return (
    <PreferencesContext.Provider value={{ language, setLanguage, theme, setTheme }}>
      {children}
    </PreferencesContext.Provider>
  );
};

export { PreferencesContext, PreferencesProvider };
