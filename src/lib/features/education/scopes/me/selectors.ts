import { EducationRecord } from "../../types";

export const selectEducation = (data: EducationRecord[]): EducationRecord[] => {
  return data.sort((a, b) => {
    // Sort by time (most recent first)
    return b.time.localeCompare(a.time);
  });
};

