import { ProfileData, ProfileHero, ProfileMetric } from "./types";

export const selectHero = (profile?: ProfileData): ProfileHero | undefined =>
  profile?.hero;

export const selectBiography = (profile?: ProfileData): string[] =>
  profile?.biography.paragraphs ?? [];

export const selectHighlights = (profile?: ProfileData): string[] =>
  profile?.highlights ?? [];

export const selectMetrics = (profile?: ProfileData): ProfileMetric[] =>
  profile?.metrics ?? [];

