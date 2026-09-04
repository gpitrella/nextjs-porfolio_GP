import { ExperienceRecord } from "./types";

export const EXPERIENCE_DATA: ExperienceRecord[] = [
  {
    id: "memxus-founder",
    position: "Creator & Product Owner",
    company: "Memxus (Own Product)",
    companyLink: "https://memxus.com",
    time: "2024 – Current",
    address: "Remote",
    work: [
      "Designed and built Memxus end-to-end: memory architecture, authentication flow, retrieval layer, and deployment model for a remote MCP server used by Claude, ChatGPT, Cursor, and Claude Code",
      "Implemented OAuth 2.1 + PKCE with Dynamic Client Registration (RFC 9728) and Streamable HTTP transport for secure multi-client AI agent access",
      "Built persistent semantic memory using Supabase pgvector and OpenAI embeddings, exposed through 13 MCP tools (remember, recall, get_context, GitHub/Notion connectors)",
      "Evaluated the system end-to-end against LongMemEval-V2 (451 questions), measuring baseline, actual, and theoretical-ceiling performance (2.66% / 20.18% / 72.51%), including controlled ablation experiments and negative results",
      "Defined product strategy from scratch and launched across three distribution channels: Anthropic Claude Connectors Directory, Slack App Marketplace, and Cursor Marketplace",
    ],
    stacks: ["MCP Protocol", "Node.js", "TypeScript", "Next.js", "Python", "FastAPI", "Supabase", "pgvector", "OpenAI Embeddings", "OAuth 2.1"],
    scope: "me",
  },
  {
    id: "hubsnacks-fullstack",
    position: "Senior Full Stack Engineer — Technical Solutions & Client Implementations",
    company: "HubSnacks — The Alt' HubSpot Agency",
    companyLink: "https://www.hubsnacks.com/",
    time: "07/2022 – Current",
    address: "Remote",
    work: [
      "Technical lead and point of contact for international clients, translating business, operational, and data requirements into production systems",
      "Own end-to-end delivery of client implementations, from requirements discovery and technical scoping through architecture, development, deployment, and optimization",
      "Built serverless Node.js endpoints (HubSpot CMS, Node 18) connected to HubSpot CRM objects and account data for an international test-centre directory platform, including logo enrichment and membership-gated access",
      "Developed custom HubL modules and REST API integrations that retrieved, transformed, and rendered CRM data across corporate client portals",
      "Delivered a multi-role (4 user profiles) institutional training platform for NATO, standalone from HubSpot, with Azure SQL persistence, Azure Blob Storage, and Keycloak/OIDC/OAuth role-based authentication",
      "Migrated the platform's backend from Azure Functions to Node.js, containerized it on Docker/Kubernetes with a Next.js frontend, and coordinated development across multiple contributors",
      "Implemented gated access and CRM-driven business logic inside HubSpot environments; maintained CI/CD pipelines and performance/SEO optimization",
    ],
    stacks: ["HubSpot CMS", "HubL", "Node.js", "TypeScript", "Next.js", "Express", "Keycloak", "Azure SQL", "Azure Blob", "Azure Functions", "Docker", "Kubernetes", "RESTful APIs"],
    scope: "me",
  },
  {
    id: "laqua-fullstack",
    position: "Full Stack Engineer",
    company: "L'AQUA Store – Lidherma Store",
    time: "02/2021 – 09/2023",
    address: "CABA, Argentina",
    work: [
      "Built complete E-commerce platform with server integration",
      "Optimized web performance for improved user experience",
      "Integrated seamless connections to payment gateways",
      "Connected Facebook and Google Ads for marketing automation"
    ],
    stacks: ["React", "WordPress", "JavaScript", "HTML", "CSS", "Photoshop", "Figma", "Jira", "Scrum/Agile"],
    scope: "me",
  },
  {
    id: "toyota-frontend",
    position: "Quality & Process Assembly Engineer",
    company: "TOYOTA Argentina SA",
    companyLink: "https://www.toyota.com.ar/",
    time: "11/2014 – 03/2022",
    address: "Buenos Aires, Argentina",
    work: [
      "Managed 3 external suppliers as part of quality and production-support operations, coordinating deliverables and resolving quality issues cross-functionally",
      "Redesigned line-station ergonomics and work-cycle timing as part of a Kaizen initiative, reducing the number of operators required per production line while improving worker ergonomics",
      "Analyzed production and quality processes and translated operational requirements into data-driven improvement initiatives and decision-support tools",
      "Built internal Next.js/AWS applications to visualize vehicle and production variables, giving production, quality, and engineering teams a shared operational view",
      "Collaborated cross-functionally with production, quality, engineering, and other stakeholders to identify problems, define requirements, implement improvements, and evaluate results",
    ],
    stacks: ["React", "JavaScript", "jQuery", "TypeScript", "HTML", "CSS", "SASS", "LESS", "Node.js", "AWS", "RESTful APIs", "Git/GitHub", "Webpack", "Figma", "Scrum/Agile", "Slack", "Cypress"],
    scope: "me",
  },
  {
    id: "bucciero-quality",
    position: "Quality and Project Engineer",
    company: "Pedro Bucciero Industries SRL",
    companyLink: "https://industriasbucciero.com/",
    time: "09/2009 – 10/2014",
    address: "Buenos Aires, Argentina",
    work: [
      "Led Quality and Engineering for development of 40+ auto parts",
      "Worked with main automotive terminals in Argentina (PSA, GM, FIAT)",
      "Applied ISO TS 16949:2009 and ISO 9001:2008 standards",
      "Programmed and tuned CNC machines and PLCs using G&M code language"
    ],
    stacks: ["CNC Programming", "PLC Programming", "G&M Code", "ISO TS 16949:2009", "ISO 9001:2008"],
    scope: "me",
  },
];

