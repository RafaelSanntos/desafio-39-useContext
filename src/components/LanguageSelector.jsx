import React, { useContext } from 'react';
import { PreferencesContext } from '../contexts/PreferencesContext.jsx';

const LanguageSelector = () => {
  const { language, setLanguage } = useContext(PreferencesContext);

  const texts = {
    pt: {
      label: 'Idioma:',
    },
    en: {
      label: 'Language:',
    },
  };

  return (
    <div>
      <label>{texts[language].label}</label>
      <select value={language} onChange={(e) => setLanguage(e.target.value)}>
        <option value="pt">Português</option>
        <option value="en">English</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
