import { ProjectCard, ProjectRecord } from "../types";

export const toProjectCard = (record: ProjectRecord): ProjectCard => ({
  ...record,
  accessibilityLabel: `${record.title} – ${record.projectType}`,
});

