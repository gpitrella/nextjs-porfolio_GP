import { ProjectCard } from "./types";

export const selectFeatured = (projects: ProjectCard[]): ProjectCard[] =>
  projects.filter((project) => project.featured);

export const selectStandard = (projects: ProjectCard[]): ProjectCard[] =>
  projects.filter((project) => !project.featured);

