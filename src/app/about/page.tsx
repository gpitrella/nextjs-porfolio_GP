import AboutPage from "@/components/about/AboutPage";
import { ReactQueryProvider } from "@/components/providers/react-query-provider";
import { profileKeys } from "@/lib/features/profile/keys";
import { fetchProfile } from "@/lib/features/profile/scopes/me/api";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gabriel Pitrella | About",
  description: "Conoce la trayectoria y experiencia de Gabriel Pitrella.",
};

export default async function About() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: profileKeys.scope("me"),
    queryFn: fetchProfile,
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <ReactQueryProvider state={dehydratedState}>
      <AboutPage />
    </ReactQueryProvider>
  );
}

