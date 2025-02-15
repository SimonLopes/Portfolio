import { ReactNode } from "react";
import { Language } from "../../utils/texts/types";

export interface LanguageContextType {
  language: string;
  handleLanguageChange: (lang: Language) => void;
}

export interface LanguageProviderProps {
  children: ReactNode;
}
