import { ProfileData } from "./types";

export const PROFILE_DATA: ProfileData = {
  id: "gabriel-pitrella-profile",
  scope: "me",
  hero: {
    title: "Bridging process and technology",
    subtitle: "Senior Software & Solutions Engineer · Industrial Engineer · Data, Cloud & Process Transformation",
    tagline: "Imagination meets execution",
    summary:
      "Industrial Engineer with 7+ years of experience in Toyota Argentina's manufacturing and quality operations and 5+ years building production software and data systems for international clients. I combine process engineering, software development, cloud platforms, and data to turn complex operational requirements into scalable technical solutions — from requirements gathering and stakeholder management to architecture, implementation, and measuring whether it actually improved the outcome. Creator of Memxus, an open-source AI memory/retrieval system exposed as an MCP server for Claude, ChatGPT, and Cursor.",
    cvUrl: "/Gabriel_Pitrella_Resume_2026.pdf",
    contactEmail: "gabrielpitrella@gmail.com",
  },
  biography: {
    paragraphs: [
      "Hi, I'm Gabriel Pitrella. My background sits at the intersection of Industrial Engineering and Software Engineering: 7+ years in Toyota Argentina's manufacturing and quality operations, and 5+ years building production software and data systems for international clients. What carries over between both worlds is the same method — understand the business process, translate requirements into a system, implement it, and measure whether it actually improved the outcome.",
      "At Toyota I applied Kaizen and continuous-improvement methodologies to production and quality processes, managed external suppliers, and built internal applications for operational data visualization. In software, I've led end-to-end implementations with TypeScript, Node.js, Next.js, Azure, AWS, HubSpot, and AI-enabled architectures, working directly with international stakeholders — including a multi-role institutional training platform built for NATO. I also created Memxus, an open-source AI memory/retrieval system exposed as an MCP server for Claude, ChatGPT, and Cursor, evaluated end-to-end against a 451-question benchmark.",
    ],
  },
  highlights: [
    "Industrial Engineer with 7+ years at Toyota Argentina and 5+ years building production software for international clients.",
    "Business & systems analysis: requirements gathering, stakeholder management, and process optimization — paired with hands-on software delivery.",
    "Creator of Memxus, an open-source AI memory/retrieval system (MCP server) rigorously evaluated against a public benchmark.",
  ],
  metrics: [
    { id: "certificates", label: "Professional Certifications", value: 10, suffix: "" },
    { id: "experience-industrial", label: "Years in Industrial Engineering", value: 14, suffix: "+" },
    { id: "experience-software", label: "Years building software", value: 5, suffix: "+" },
  ],
};

