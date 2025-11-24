import { ExperienceRecord } from "../../types";

export const selectExperience = (data: ExperienceRecord[]): ExperienceRecord[] => {
  return data.sort((a, b) => {
    // Sort by time (most recent first) - simple string comparison for now
    return b.time.localeCompare(a.time);
  });
};

