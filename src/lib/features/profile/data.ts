import { ProfileData } from "./types";

export const PROFILE_DATA: ProfileData = {
  id: "gabriel-pitrella-profile",
  scope: "me",
  hero: {
    title: "Building AI-native products",
    subtitle: "Senior Software Engineer · AI & Agent Systems · Product-Minded",
    tagline: "Imagination meets execution",
    summary:
      "Senior Software Engineer with 5+ years building production systems across HubSpot CRM ecosystems, AI/agent infrastructure, and cloud-native platforms, backed by a 14-year engineering career (including 7 years at Toyota). Creator of Memxus, an open-source remote MCP server giving Claude, ChatGPT, and Cursor a shared, persistent memory layer — taken from idea to launch across three marketplaces. Comfortable owning systems end-to-end, from architecture and authentication to deployment and product strategy.",
    cvUrl: "/Gabriel_Pitrella_Resume_July_2026.pdf",
    contactEmail: "gabrielpitrella@gmail.com",
  },
  biography: {
    paragraphs: [
      "Hi, I'm Gabriel Pitrella. I build production systems across HubSpot CRM integrations, AI/agent infrastructure, and cloud-native platforms — hands-on with the MCP protocol, OAuth 2.1, OpenAI embeddings, vector search, and serverless REST APIs. I created Memxus, an open-source remote MCP server that gives Claude, ChatGPT, and Cursor a shared, authenticated, persistent memory layer, submitted to the Anthropic Claude Connectors Directory, Slack App Marketplace, and Cursor Marketplace.",
      "Beyond the code, I've defined product strategy from scratch: identifying the need, shaping the value proposition, prioritizing the roadmap, and making go-to-market decisions for Memxus across three distribution channels. Before software, I spent 14 years in Industrial Engineering, including seven years at Toyota coordinating suppliers and production quality under a Kaizen continuous-improvement mindset — the same systems-thinking and quality discipline I bring to shipping software today.",
    ],
  },
  highlights: [
    "Senior Software Engineer specialized in HubSpot CRM, AI/agent infrastructure, and MCP.",
    "Creator of Memxus — an open-source remote MCP server launched across 3 marketplaces.",
    "14-year engineering career, including 7 years at Toyota, blending product thinking with technical depth.",
  ],
  metrics: [
    { id: "certificates", label: "Professional Certifications", value: 10, suffix: "" },
    { id: "projects", label: "Full-Stack Projects completed", value: 10, suffix: "+" },
    { id: "experience", label: "Years in software engineering", value: 5, suffix: "+" },
  ],
};

