import { createContext, useContext, useState } from "react";
import { Language } from "../../utils/texts/types";
import { LanguageContextType, LanguageProviderProps } from "./types";

const LanguageContext = createContext<LanguageContextType>({
  language: "pt",
  handleLanguageChange: () => {},
});

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>("pt");

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, handleLanguageChange }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  return useContext(LanguageContext);
};
