import React, { useContext } from 'react';
import { PreferencesProvider, PreferencesContext } from './contexts/PreferencesContext.jsx';
import LanguageSelector from './components/LanguageSelector.jsx';
import ThemeSelector from './components/ThemeSelector.jsx';

const AppContent = () => {
  const { language } = useContext(PreferencesContext);

  const texts = {
    pt: {
      title: 'Configurações de Preferências',
      languageLabel: 'Idioma:',
      themeLabel: 'Tema:',
    },
    en: {
      title: 'Preferences Settings',
      languageLabel: 'Language:',
      themeLabel: 'Theme:',
    },
  };

  return (
    <div>
      <h1>{texts[language].title}</h1>
      <LanguageSelector />
      <ThemeSelector />
    </div>
  );
};

const App = () => {
  return (
    <PreferencesProvider>
      <AppContent />
    </PreferencesProvider>
  );
};

export default App;
