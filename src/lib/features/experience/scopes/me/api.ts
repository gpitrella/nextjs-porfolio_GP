import { EXPERIENCE_DATA } from "../../data";
import { ExperienceRecord } from "../../types";

export const fetchExperience = async (): Promise<ExperienceRecord[]> => {
  // Simulate API call - replace with actual API endpoint
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(EXPERIENCE_DATA.filter((item) => item.scope === "me"));
    }, 0);
  });
};

