import { createContext, useState } from 'react';

export const LanguageContext = createContext();

const data = {
  en: { signIn: 'Sign In', subTitle: 'Sign Into Your Account' },
  uz: { signIn: 'Kirish', subTitle: 'Hisobingizga kiring' },
  ru: { signIn: 'Войти', subTitle: 'Войдите в свой аккаунт' },
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('en');
  return (
    <LanguageContext.Provider value={{ lang, setLang, data }}>
      {children}
    </LanguageContext.Provider>
  );
};
