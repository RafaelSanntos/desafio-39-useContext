import React, { useContext } from 'react';
import { PreferencesContext } from '../contexts/PreferencesContext.jsx';

const ThemeSelector = () => {
  const { theme, setTheme, language } = useContext(PreferencesContext);

  const texts = {
    pt: {
      label: 'Tema:',
    },
    en: {
      label: 'Theme:',
    },
  };

  return (
    <div>
      <label>{texts[language].label}</label>
      <select value={theme} onChange={(e) => setTheme(e.target.value)}>
        <option value="light">Claro</option>
        <option value="dark">Escuro</option>
      </select>
    </div>
  );
};

export default ThemeSelector;
