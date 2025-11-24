import { getFeaturedProjects, getProjectsByScope } from "../../index";
import { ProjectCard, ProjectScope } from "../../types";

const scope: ProjectScope = "accelerator";

export const fetchProjects = async (): Promise<ProjectCard[]> =>
  Promise.resolve(getProjectsByScope(scope));

export const fetchFeaturedProjects = async (): Promise<ProjectCard[]> =>
  Promise.resolve(getFeaturedProjects(scope));

