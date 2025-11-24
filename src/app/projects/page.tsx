import ProjectsShowcase from "@/components/projects/ProjectsShowcase";
import { ReactQueryProvider } from "@/components/providers/react-query-provider";
import { projectKeys } from "@/lib/features/projects/keys";
import { fetchProjects } from "@/lib/features/projects/scopes/me/api";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gabriel Pitrella | Proyectos",
  description:
    "Colección curada de proyectos destacados y colaboraciones de Gabriel Pitrella.",
};

export default async function ProjectsPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: projectKeys.list("me"),
    queryFn: fetchProjects,
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <ReactQueryProvider state={dehydratedState}>
      <ProjectsShowcase />
    </ReactQueryProvider>
  );
}

