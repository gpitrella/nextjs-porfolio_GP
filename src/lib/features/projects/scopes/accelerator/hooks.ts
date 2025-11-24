'use client';

import { useQuery } from "@tanstack/react-query";
import { projectKeys } from "../../keys";
import { fetchFeaturedProjects, fetchProjects } from "./api";

export const useProjects = () =>
  useQuery({
    queryKey: projectKeys.list("accelerator"),
    queryFn: fetchProjects,
  });

export const useFeaturedProjects = () =>
  useQuery({
    queryKey: projectKeys.featured("accelerator"),
    queryFn: fetchFeaturedProjects,
  });

