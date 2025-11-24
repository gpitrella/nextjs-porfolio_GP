export interface ExperienceItem {
  id: string;
  position: string;
  company: string;
  companyLink?: string;
  time: string;
  address: string;
  work: string;
  stacks: string;
  scope: "me" | "accelerator" | "admin";
}

export type ExperienceRecord = ExperienceItem;

