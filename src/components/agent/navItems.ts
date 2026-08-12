import type { LucideIcon } from "lucide-react";
import { Award, Briefcase, Building2, Code2, GraduationCap, Home, Mail, User } from "lucide-react";

export interface AgentNavItem {
  id: string;
  label: string;
  icon: LucideIcon;
  prompt: string | null;
}

export const AGENT_NAV_ITEMS: AgentNavItem[] = [
  { id: "inicio", label: "Inicio", icon: Home, prompt: null },
  { id: "about", label: "Sobre mí", icon: User, prompt: "¿Quién es Gabriel Pitrella?" },
  { id: "skills", label: "Tecnologías", icon: Code2, prompt: "¿Qué tecnologías conoce Gabriel?" },
  { id: "projects", label: "Proyectos", icon: Briefcase, prompt: "¿En qué proyectos trabajó Gabriel?" },
  { id: "experience", label: "Experiencia", icon: Building2, prompt: "¿Cuál es la experiencia laboral de Gabriel?" },
  { id: "education", label: "Educación", icon: GraduationCap, prompt: "¿Qué formación académica tiene Gabriel?" },
  { id: "certifications", label: "Certificaciones", icon: Award, prompt: "¿Qué certificaciones tiene Gabriel?" },
  { id: "contact", label: "Contacto", icon: Mail, prompt: "¿Cómo puedo contactar a Gabriel?" },
];

export const SUGGESTED_PROMPTS = AGENT_NAV_ITEMS.filter(
  (item) => item.id === "skills" || item.id === "projects" || item.id === "experience" || item.id === "contact"
).map((item) => item.prompt as string);
