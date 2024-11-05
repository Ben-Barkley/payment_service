import React, { createContext, useState, useContext } from 'react';
import { IntlProvider } from 'react-intl';
import messages_en from '../locales/en.json';
import messages_es from '../locales/es.json';

const messages = {
  en: messages_en,
  es: messages_es,
};

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const [locale, setLocale] = useState('en');

  const changeLanguage = (language) => {
    setLocale(language);
  };

  return (
    <LanguageContext.Provider value={{ changeLanguage }}>
      <IntlProvider locale={locale} messages={messages[locale]}>
        {children}
      </IntlProvider>
    </LanguageContext.Provider>
  );
};