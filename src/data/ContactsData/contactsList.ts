export interface Contact {
  name: string;
  url: string;
  contact: string;
  iconUrl: string;
}

export const ContactsList: Contact[] = [
  {
    name: "email",
    url: "mailto:simonlopes99@gmail.com",
    contact: "simonlopes99@gmail.com",
    iconUrl: "/contacts/email-8-svgrepo-com.svg",
  },
  {
    name: "github",
    url: "https://github.com/SimonLopes",
    contact: "@SimonLopes",
    iconUrl: "/contacts/github-svgrepo-com.svg",
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/simon_lops",
    contact: "@simon_lops",
    iconUrl: "/contacts/instagram-svgrepo-com.svg",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/simon-lopes",
    contact: "@simon-lopes",
    iconUrl: "/contacts/linkedin-svgrepo-com.svg",
  },
];
