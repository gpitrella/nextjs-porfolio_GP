import type { Locale } from "./LocaleProvider";

export const UI_TEXT: Record<Locale, {
  brandRole: string;
  downloadCv: string;
  downloadCvShort: string;
  githubAria: string;
  linkedinAria: string;
  themeToggleAria: string;
  localeToggleAria: string;
  collapseAria: string;
  expandAria: string;
  openMenuAria: string;
  closeMenuAria: string;
  welcomeGreeting: string;
  inputPlaceholder: string;
  inputAria: string;
  sendAria: string;
  errorReply: string;
}> = {
  en: {
    brandRole: "Senior Software Engineer",
    downloadCv: "Download CV",
    downloadCvShort: "CV",
    githubAria: "Gabriel Pitrella's GitHub",
    linkedinAria: "Gabriel Pitrella's LinkedIn",
    themeToggleAria: "Toggle theme",
    localeToggleAria: "Switch language",
    collapseAria: "Collapse sidebar",
    expandAria: "Expand sidebar",
    openMenuAria: "Open menu",
    closeMenuAria: "Close menu",
    welcomeGreeting:
      "Hi! I'm Gabriel's assistant. I can tell you about his experience, the technologies he works with, his projects, and his education. What would you like to know?",
    inputPlaceholder: "Ask a question about Gabriel...",
    inputAria: "Write a message",
    sendAria: "Send",
    errorReply: "Sorry, I had trouble answering that. Please try again in a moment.",
  },
  es: {
    brandRole: "Senior Software Engineer",
    downloadCv: "Descargar CV",
    downloadCvShort: "CV",
    githubAria: "GitHub de Gabriel Pitrella",
    linkedinAria: "LinkedIn de Gabriel Pitrella",
    themeToggleAria: "Cambiar tema",
    localeToggleAria: "Cambiar idioma",
    collapseAria: "Colapsar sidebar",
    expandAria: "Expandir sidebar",
    openMenuAria: "Abrir menú",
    closeMenuAria: "Cerrar menú",
    welcomeGreeting:
      "¡Hola! Soy el asistente de Gabriel. Puedo contarte sobre su experiencia, las tecnologías que maneja, sus proyectos y su formación. ¿Qué te gustaría saber?",
    inputPlaceholder: "Escribí tu pregunta sobre Gabriel...",
    inputAria: "Escribir mensaje",
    sendAria: "Enviar",
    errorReply: "Uy, tuve un problema para responder. Probá de nuevo en un momento.",
  },
};
