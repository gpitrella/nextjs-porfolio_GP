import { ProfileData } from "./types";

export const PROFILE_DATA: ProfileData = {
  id: "gabriel-pitrella-profile",
  scope: "me",
  hero: {
    title: "Developing Solutions",
    subtitle: "Software Engineer Full Stack",
    tagline: "Imagination meets execution",
    summary:
      "Full Stack Engineer with 5 years building efficient solutions across JavaScript, HubSpot, Node.js, React, and Next.js. Passionate about KISS, DRY, and SOLID for long-term maintainability.",
    cvUrl:
      "https://res.cloudinary.com/djgghmpgh/image/upload/v1739020709/rnrqqgz1xvbc8s0lj6ce.pdf",
    contactEmail: "gabrielpitrella@gmail.com",
  },
  biography: {
    paragraphs: [
      "Hi, I'm Gabriel Pitrella, a Full Stack Software Engineer with five years building reliable and scalable web experiences. I've reduced page load time by 40% across 20+ HubSpot CMS sites, built and deployed 15+ production applications serving 100K+ monthly users, and implemented CI/CD pipelines reducing deployment time by 60% using JavaScript, HubSpot, Node.js, React, Next.js, and supporting technologies such as Express, PostgreSQL, and MongoDB.",
      "I prioritize clean architecture and maintainability by applying SOLID, DRY, and KISS every day. Before tech, I spent 14 years in Industrial Engineering, including seven years at Toyota honing analytical thinking, continuous improvement, and team leadership.",
    ],
  },
  highlights: [
    "Full Stack Engineer with expertise in HubSpot, Next.js, and Node.js.",
    "Industrial Engineer background with Toyota experience.",
    "Focus on composable architectures and accessible UI.",
  ],
  metrics: [
    { id: "certificates", label: "Professional Certifications", value: 10, suffix: "" },
    { id: "projects", label: "Full-Stack Projects completed", value: 8, suffix: "+" },
    { id: "experience", label: "Years of experience", value: 5, suffix: "" },
  ],
};

