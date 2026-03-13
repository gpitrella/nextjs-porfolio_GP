export interface ExperienceItem {
  id: string;
  position: string;
  company: string;
  companyLink?: string;
  time: string;
  address: string;
  work: string | string[]; // Support both string and array for backward compatibility
  stacks: string | string[]; // Support both string and array for backward compatibility
  scope: "me" | "accelerator" | "admin";
}

export type ExperienceRecord = ExperienceItem;

