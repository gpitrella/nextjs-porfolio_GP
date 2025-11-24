import { ProjectScope } from "./types";

export const projectKeys = {
  root: ["projects"] as const,
  list: (scope: ProjectScope) => [...projectKeys.root, "list", scope] as const,
  featured: (scope: ProjectScope) =>
    [...projectKeys.root, "featured", scope] as const,
};

