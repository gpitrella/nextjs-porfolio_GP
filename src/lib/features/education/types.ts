export interface EducationItem {
  id: string;
  type: string;
  time: string;
  place: string;
  info: string;
  url?: string;
  scope: "me" | "accelerator" | "admin";
}

export type EducationRecord = EducationItem;

