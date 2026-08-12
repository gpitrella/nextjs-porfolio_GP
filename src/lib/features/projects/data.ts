import project1 from "../../../../public/images/projects/LAqua6x6.webp";
import project2 from "../../../../public/images/projects/JuniorApp.png";
import project3 from "../../../../public/images/projects/PorfolioGP.png";
import project4 from "../../../../public/images/projects/HigherMeGP.png";
import project5 from "../../../../public/images/projects/TechEcommerceGP.png";
import project6 from "../../../../public/images/projects/projectsGP.png";
import project7 from "../../../../public/images/projects/RayoLP.png";
import project8 from "../../../../public/images/projects/BrodeurBg.png";
import { ProjectRecord } from "./types";

export const PROJECTS_DATA: ProjectRecord[] = [
  {
    id: "brodeur-development",
    slug: "brodeur-development",
    title: "Brodeur Development",
    summary:
      "Corporate website with bespoke HubSpot CMS modules, culture highlights, and applicant funnels.",
    description:
      "Fully responsive HubSpot CMS experience that showcases services, talent culture, and recruiting flows with modular HubL blocks.",
    projectType: "Corporate Web Platform",
    liveUrl: "https://brodeurdevelopment.com/",
    repoUrl: "https://brodeurdevelopment.com/",
    heroImage: project8,
    technologies: ["HubSpot CMS", "HubL", "JavaScript", "CSS"],
    scope: "me",
    featured: true,
    badges: ["CMS", "Responsive"],
  },
  {
    id: "car-wash",
    slug: "car-wash-landing",
    title: "Rayo Lavados",
    summary:
      "Landing page for a collaborative car-wash initiative built with Next.js and Tailwind.",
    description:
      "Marketing experience optimized for conversion and schedule requests, co-built with a small distributed team.",
    projectType: "Landing Page",
    liveUrl: "https://rayolavados.com",
    repoUrl: "https://github.com/gpitrella/rayo-landing-page",
    heroImage: project7,
    technologies: ["Next.js", "React", "TypeScript", "TailwindCSS"],
    scope: "me",
    featured: true,
    badges: ["Next.js", "Team effort"],
  },
  {
    id: "junior-app",
    slug: "junior",
    title: "Junior",
    summary:
      "Collaboration platform that connects junior engineers to hands-on practice using a MERN stack.",
    description:
      "Web app enabling junior developers to discover collaborative challenges, manage squads, and log learning outcomes.",
    projectType: "Collaboration Platform",
    liveUrl: "https://appjunior.vercel.app/",
    repoUrl: "https://github.com/gpitrella/JUNIOR",
    heroImage: project2,
    technologies: ["React", "Express", "MongoDB", "Mongoose"],
    scope: "me",
    featured: true,
    badges: ["MERN"],
  },
  {
    id: "personal-portfolio",
    slug: "portfolio-gp",
    title: "Portfolio Gabriel Pitrella",
    summary:
      "Interactive personal portfolio highlighting studies, experience, and motion-rich case studies.",
    description:
      "Single-page app with Lottie animations and custom SASS theming to showcase background and featured work.",
    projectType: "Personal Portfolio",
    liveUrl: "https://porfolio-gpitrella.vercel.app",
    repoUrl: "https://github.com/gpitrella/Porfolio-GPitrella",
    heroImage: project3,
    technologies: ["React", "TypeScript", "SASS", "Lottie"],
    scope: "me",
    featured: false,
    badges: ["Personal"],
  },
  {
    id: "tech-ecommerce",
    slug: "tech-ecommerce",
    title: "Tech E-commerce",
    summary:
      "Full-featured marketplace with user/admin flows, transactional emails, and inventory modules.",
    description:
      "React + Redux storefront backed by Node, Sequelize, and SendGrid notifications supporting granular roles.",
    projectType: "E-commerce",
    liveUrl: "https://techmarketfront.vercel.app",
    repoUrl: "https://github.com/gpitrella/PF-FrontEnd",
    heroImage: project5,
    technologies: ["React", "Redux", "SendGrid", "Sequelize"],
    scope: "accelerator",
    featured: false,
    badges: ["Commerce"],
  },
  {
    id: "laqua-store",
    slug: "laqua-store",
    title: "LAqua Store",
    summary:
      "WordPress-powered marketplace with React micro-interactions and MercadoPago integration.",
    description:
      "End-to-end commerce experience connected to Google Ads, Analytics, and MercadoPago for regional payments.",
    projectType: "Commerce Platform",
    liveUrl: "https://laquastore.com",
    repoUrl: "https://github.com/gpitrella/laqua",
    heroImage: project1,
    technologies: ["WordPress", "React", "MercadoPago", "Google Ads"],
    scope: "accelerator",
    featured: false,
    badges: ["WordPress"],
  },
  {
    id: "higherme-story",
    slug: "higherme-story",
    title: "Our Story – HigherMe",
    summary:
      "Narrative-driven business site chronicling company history with HubL modules and smooth storytelling.",
    description:
      "Modular HubL sections layering timeline, metrics, and CTA zones, optimized for editorial updates.",
    projectType: "Corporate Storytelling",
    liveUrl: "https://higherme.com/our-story",
    repoUrl: "https://higherme.com/our-story",
    heroImage: project4,
    technologies: ["HubL", "JavaScript", "jQuery", "CSS"],
    scope: "admin",
    featured: false,
    badges: ["Storytelling"],
  },
  {
    id: "projects-hub",
    slug: "projects-hub",
    title: "Projects Hub",
    summary: "Central index to additional case studies and experiments.",
    description:
      "Collection of supplementary projects hosted in the classic React portfolio to keep the catalogue fresh.",
    projectType: "Projects Index",
    liveUrl: "https://porfolio-gpitrella.vercel.app/projects",
    repoUrl: "https://github.com/gpitrella/Porfolio-GPitrella",
    heroImage: project6,
    technologies: ["React", "TypeScript"],
    scope: "shared",
    featured: false,
    badges: ["Index"],
  },
  {
    id: "memxus",
    slug: "memxus",
    title: "Memxus",
    summary:
      "Open-source remote MCP server giving Claude, ChatGPT, and Cursor a shared, authenticated, persistent memory layer.",
    description:
      "Full stack AI memory infrastructure: Next.js dashboard, Node.js MCP server, OAuth 2.1 + PKCE with Dynamic Client Registration, Supabase pgvector persistence, and OpenAI embeddings for semantic search across 13 MCP tools. Launched across the Anthropic Claude Connectors Directory, Slack App Marketplace, and Cursor Marketplace.",
    projectType: "AI Memory Infrastructure",
    liveUrl: "https://memxus.com",
    repoUrl: "https://github.com/gpitrella/memxus-remote-mcp",
    technologies: ["MCP Protocol", "Next.js", "Node.js", "Supabase", "pgvector", "OpenAI Embeddings", "OAuth 2.1"],
    scope: "me",
    featured: true,
    badges: ["Open Source", "AI Agents"],
  },
  {
    id: "mcp-secrets-vault",
    slug: "mcp-secrets-vault",
    title: "MCP-Secrets-Vault",
    summary:
      "Security-first credential manager for AI agents, storing, rotating, and distributing API keys via the MCP protocol.",
    description:
      "Open source MCP server with 8 tools (set/get/rotate/list/delete/search/import_env/export_env), AES-256-GCM encryption, SQLite by default, zero third-party crypto dependencies, and OWASP MCP Top 10 mitigations with supply-chain hardening (pinned deps, lockfile, npm audit in CI). Currently in development.",
    projectType: "AI Agent Security",
    liveUrl: "https://github.com/gpitrella/mcp-secrets-vault",
    repoUrl: "https://github.com/gpitrella/mcp-secrets-vault",
    technologies: ["MCP Protocol", "Node.js", "TypeScript", "AES-256-GCM", "SQLite"],
    scope: "me",
    featured: true,
    badges: ["Open Source", "Security", "In development"],
  },
  {
    id: "memxus-cursor-plugin",
    slug: "memxus-cursor-plugin",
    title: "Memxus Cursor Plugin",
    summary: "Companion plugin that connects the Cursor IDE to Memxus's shared memory layer.",
    description:
      "Editor integration extending Memxus's multi-client memory model (Claude, ChatGPT, Cursor) directly into the Cursor IDE workflow.",
    projectType: "IDE Integration",
    liveUrl: "https://github.com/gpitrella/memxus-cursor-plugin",
    repoUrl: "https://github.com/gpitrella/memxus-cursor-plugin",
    technologies: ["JavaScript", "Cursor", "MCP Protocol"],
    scope: "me",
    featured: false,
    badges: ["Open Source"],
  },
  {
    id: "pi-videogames",
    slug: "pi-videogames",
    title: "PI-VideoGames",
    summary: "Full-stack video game search and management app.",
    description:
      "MERN-style app for browsing and managing a video game catalog, with server-side filtering and a relational data layer via Sequelize.",
    projectType: "Full-Stack App",
    liveUrl: "https://github.com/gpitrella/PI-VideoGames",
    repoUrl: "https://github.com/gpitrella/PI-VideoGames",
    technologies: ["React", "Redux", "Node.js", "Express", "Sequelize"],
    scope: "me",
    featured: false,
    badges: ["Bootcamp"],
  },
];

