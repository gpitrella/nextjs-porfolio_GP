'use client';

import { useQuery } from "@tanstack/react-query";
import { profileKeys } from "../../keys";
import { fetchProfile } from "./api";

export const useProfile = () =>
  useQuery({
    queryKey: profileKeys.scope("me"),
    queryFn: fetchProfile,
  });

