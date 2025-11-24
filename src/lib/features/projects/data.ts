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
    slug: "brodeurd-development",
    title: "Brodeurd Development",
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
];

