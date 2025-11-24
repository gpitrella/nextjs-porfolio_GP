import { ProfileData } from "./types";

export const PROFILE_DATA: ProfileData = {
  id: "gabriel-pitrella-profile",
  scope: "me",
  hero: {
    title: "Developing Solutions",
    subtitle: "Software Engineer Full Stack",
    tagline: "Imagination meets execution",
    summary:
      "Full Stack Engineer with 4+ years building efficient solutions across JavaScript, HubSpot, Node.js, React, and Next.js. Passionate about KISS, DRY, and SOLID for long-term maintainability.",
    cvUrl:
      "https://res.cloudinary.com/djgghmpgh/image/upload/v1739020709/rnrqqgz1xvbc8s0lj6ce.pdf",
    contactEmail: "gabrielpitrella@gmail.com",
  },
  biography: {
    paragraphs: [
      "Hi, I'm Gabriel Pitrella, a Full Stack Software Engineer with over four years architecting reliable and scalable web experiences using JavaScript, HubSpot, Node.js, React, Next.js, and supporting technologies such as Express, PostgreSQL, and MongoDB.",
      "I prioritize clean architecture and maintainability by applying SOLID, DRY, and KISS every day. Before tech, I spent 14 years in Industrial Engineering, including seven years at Toyota honing analytical thinking, continuous improvement, and team leadership.",
    ],
  },
  highlights: [
    "Full Stack Engineer with expertise in HubSpot, Next.js, and Node.js.",
    "Industrial Engineer background with Toyota experience.",
    "Focus on composable architectures and accessible UI.",
  ],
  metrics: [
    { id: "certificates", label: "University certificates", value: 3, suffix: "+" },
    { id: "projects", label: "Projects completed", value: 15, suffix: "+" },
    { id: "experience", label: "Years of experience", value: 4, suffix: "+" },
  ],
};

