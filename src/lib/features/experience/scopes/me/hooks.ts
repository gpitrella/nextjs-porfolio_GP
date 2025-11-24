import { useQuery } from "@tanstack/react-query";
import { experienceKeys } from "../../keys";
import { fetchExperience } from "./api";

export const useExperience = () => {
  return useQuery({
    queryKey: experienceKeys.list("me"),
    queryFn: fetchExperience,
    staleTime: 1000 * 60 * 60, // 1 hour
  });
};

