import { getProfile } from "../../index";
import { ProfileData } from "../../types";

export const fetchProfile = async (): Promise<ProfileData> =>
  Promise.resolve(getProfile("me"));

