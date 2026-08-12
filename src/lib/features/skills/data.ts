import { SkillCategory } from "./types";

export const SKILLS_DATA: SkillCategory[] = [
  {
    id: "ai-agents",
    label: "AI & Agents",
    skills: [
      "MCP Protocol",
      "AI Agent / Tool Integrations (Claude, ChatGPT, Cursor)",
      "OpenAI Embeddings",
      "Vector Search (Supabase pgvector)",
      "OAuth 2.1 + PKCE",
    ],
  },
  {
    id: "crm-integrations",
    label: "CRM & Integrations",
    skills: ["HubSpot CRM", "HubSpot CMS", "HubL", "Serverless Functions", "REST APIs", "Webhooks"],
  },
  {
    id: "backend",
    label: "Backend",
    skills: ["Node.js", "TypeScript", "Express.js", "GraphQL", "JWT", "PostgreSQL", "Supabase", "MongoDB"],
  },
  {
    id: "cloud-infra",
    label: "Cloud & Infrastructure",
    skills: ["Docker", "Kubernetes", "Azure (SQL + Blob)", "Keycloak", "Railway", "Vercel", "CI/CD (GitHub Actions)"],
  },
  {
    id: "frontend",
    label: "Frontend",
    skills: ["Next.js", "React", "Redux Toolkit", "Tailwind CSS", "HTML5", "CSS3", "SASS"],
  },
  {
    id: "product",
    label: "Product",
    skills: [
      "Product Strategy from 0 to 1",
      "Roadmap Prioritization",
      "Partner Discovery",
      "Go-to-Market",
      "Product KPIs",
      "Value Proposition Design",
    ],
  },
  {
    id: "data",
    label: "Data",
    skills: ["Conversion & Funnel Analytics", "Metric Definition", "Data-Driven Decision Making"],
  },
  {
    id: "integrations-partners",
    label: "Integrations & Partners",
    skills: ["Multi-Partner Integrations (HubSpot, Claude, ChatGPT, Cursor)", "External Vendor / Supplier Management"],
  },
  {
    id: "communication",
    label: "Communication",
    skills: ["International Client Interlocution", "Cross-Functional Coordination", "Technical Documentation"],
  },
];
