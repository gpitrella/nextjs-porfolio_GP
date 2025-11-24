import { PROFILE_DATA } from "./data";
import { toProfile } from "./adapters";
import { ProfileData, ProfileScope } from "./types";

const resolveProfile = (scope: ProfileScope): ProfileData => {
  if (PROFILE_DATA.scope === scope || PROFILE_DATA.scope === "shared") {
    return toProfile(PROFILE_DATA);
  }
  return toProfile(PROFILE_DATA);
};

export const getProfile = (scope: ProfileScope): ProfileData =>
  resolveProfile(scope);

export * from "./types";
export * from "./keys";
export * from "./selectors";

