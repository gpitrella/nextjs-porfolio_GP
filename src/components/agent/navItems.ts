import type { LucideIcon } from "lucide-react";
import { Award, Briefcase, Building2, Code2, GraduationCap, Home, Mail, User } from "lucide-react";
import type { Locale } from "./LocaleProvider";

export interface AgentNavItem {
  id: string;
  icon: LucideIcon;
  label: Record<Locale, string>;
  prompt: Record<Locale, string> | null;
}

export const AGENT_NAV_ITEMS: AgentNavItem[] = [
  { id: "inicio", icon: Home, label: { en: "Home", es: "Inicio" }, prompt: null },
  {
    id: "about",
    icon: User,
    label: { en: "About me", es: "Sobre mí" },
    prompt: { en: "Who is Gabriel Pitrella?", es: "¿Quién es Gabriel Pitrella?" },
  },
  {
    id: "skills",
    icon: Code2,
    label: { en: "Technologies", es: "Tecnologías" },
    prompt: { en: "What technologies does Gabriel know?", es: "¿Qué tecnologías conoce Gabriel?" },
  },
  {
    id: "projects",
    icon: Briefcase,
    label: { en: "Projects", es: "Proyectos" },
    prompt: { en: "What projects has Gabriel worked on?", es: "¿En qué proyectos trabajó Gabriel?" },
  },
  {
    id: "experience",
    icon: Building2,
    label: { en: "Experience", es: "Experiencia" },
    prompt: { en: "What is Gabriel's work experience?", es: "¿Cuál es la experiencia laboral de Gabriel?" },
  },
  {
    id: "education",
    icon: GraduationCap,
    label: { en: "Education", es: "Educación" },
    prompt: { en: "What is Gabriel's educational background?", es: "¿Qué formación académica tiene Gabriel?" },
  },
  {
    id: "certifications",
    icon: Award,
    label: { en: "Certifications", es: "Certificaciones" },
    prompt: { en: "What certifications does Gabriel have?", es: "¿Qué certificaciones tiene Gabriel?" },
  },
  {
    id: "contact",
    icon: Mail,
    label: { en: "Contact", es: "Contacto" },
    prompt: { en: "How can I contact Gabriel?", es: "¿Cómo puedo contactar a Gabriel?" },
  },
];

export const getSuggestedPrompts = (locale: Locale): { id: string; label: string }[] =>
  AGENT_NAV_ITEMS.filter((item) => ["skills", "projects", "experience", "contact"].includes(item.id)).map(
    (item) => ({ id: item.id, label: item.prompt![locale] })
  );
