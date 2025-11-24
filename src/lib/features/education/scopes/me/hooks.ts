import { useQuery } from "@tanstack/react-query";
import { educationKeys } from "../../keys";
import { fetchEducation } from "./api";

export const useEducation = () => {
  return useQuery({
    queryKey: educationKeys.list("me"),
    queryFn: fetchEducation,
    staleTime: 1000 * 60 * 60, // 1 hour
  });
};

