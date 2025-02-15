export const languages = ["pt", "en", "es", "fr"] as const;

export type Language = (typeof languages)[number];

interface Texts {
  name: string;
  role: string;
  description: string;
}

interface MenuItems {
  aboutMe: string;
  projects: string;
  technologies: string;
  contact: string;
}

interface About {
  title: string;
  name: string;
  description: string;
}

interface Projects {
  title: string;
  buttons: string;
}

interface Technologies {
  title: string;
  description: string;
}

interface Contact {
  title: string;
}

interface TextsByLanguage<T> {
  pt: T;
  en: T;
  es: T;
  fr: T;
}

export interface AllTexts {
  menuItems: TextsByLanguage<MenuItems>;
  presentation: TextsByLanguage<Texts>;
  about: TextsByLanguage<About>;
  projects: TextsByLanguage<Projects>;
  technologies: TextsByLanguage<Technologies>;
  contact: TextsByLanguage<Contact>;
}
