import { PROJECTS_DATA } from "./data";
import { toProjectCard } from "./adapters";
import {
  ProjectCard,
  ProjectScope,
  ProjectRecord,
  ProjectAudience,
} from "./types";

const filterByScope = (
  scope: ProjectScope,
  items: ProjectRecord[]
): ProjectRecord[] =>
  items.filter((project) => {
    const audiences: ProjectAudience[] =
      project.scope === "shared" ? ["me", "accelerator", "admin"] : [project.scope];
    return audiences.includes(scope);
  });

export const getProjectsByScope = (scope: ProjectScope): ProjectCard[] =>
  filterByScope(scope, PROJECTS_DATA).map(toProjectCard);

export const getFeaturedProjects = (scope: ProjectScope): ProjectCard[] =>
  getProjectsByScope(scope).filter((project) => project.featured);

export { PROJECTS_DATA };
export * from "./types";
export * from "./keys";

