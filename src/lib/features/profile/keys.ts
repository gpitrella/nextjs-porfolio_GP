import { ProfileScope } from "./types";

export const profileKeys = {
  root: ["profile"] as const,
  scope: (scope: ProfileScope) => [...profileKeys.root, scope] as const,
};

