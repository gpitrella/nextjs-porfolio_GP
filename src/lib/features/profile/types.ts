export type ProfileScope = "me" | "accelerator" | "admin";

export interface ProfileHero {
  title: string;
  subtitle: string;
  tagline: string;
  summary: string;
  cvUrl: string;
  contactEmail: string;
}

export interface ProfileMetric {
  id: string;
  label: string;
  value: number;
  suffix?: string;
}

export interface ProfileBiography {
  paragraphs: string[];
}

export interface ProfileRecord {
  id: string;
  scope: ProfileScope | "shared";
  hero: ProfileHero;
  biography: ProfileBiography;
  highlights: string[];
  metrics: ProfileMetric[];
}

export interface ProfileData extends ProfileRecord {}

