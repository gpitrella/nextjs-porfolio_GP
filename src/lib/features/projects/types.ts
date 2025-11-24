import { StaticImageData } from "next/image";

export type ProjectScope = "me" | "accelerator" | "admin";
export type ProjectAudience = ProjectScope | "shared";

export interface ProjectRecord {
  id: string;
  slug: string;
  title: string;
  summary: string;
  description: string;
  projectType: string;
  liveUrl: string;
  repoUrl: string;
  heroImage: StaticImageData;
  technologies: string[];
  scope: ProjectAudience;
  featured: boolean;
  badges?: string[];
}

export interface ProjectCard extends ProjectRecord {
  accessibilityLabel: string;
}

export interface ProjectFilters {
  featuredOnly?: boolean;
  scope?: ProjectScope;
}

