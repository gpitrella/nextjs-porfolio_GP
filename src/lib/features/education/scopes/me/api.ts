import { EDUCATION_DATA } from "../../data";
import { EducationRecord } from "../../types";

export const fetchEducation = async (): Promise<EducationRecord[]> => {
  // Simulate API call - replace with actual API endpoint
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(EDUCATION_DATA.filter((item) => item.scope === "me"));
    }, 0);
  });
};

