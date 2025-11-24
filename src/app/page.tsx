import HomePage from "@/components/home/HomePage";
import { ReactQueryProvider } from "@/components/providers/react-query-provider";
import { profileKeys } from "@/lib/features/profile/keys";
import { fetchProfile } from "@/lib/features/profile/scopes/me/api";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gabriel Pitrella | Full Stack Engineer",
  description:
    "Gabriel Pitrella’s portfolio: full-stack engineer specialized in Next.js, HubSpot, and scalable solutions.",
};

export default async function Page() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: profileKeys.scope("me"),
    queryFn: fetchProfile,
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <ReactQueryProvider state={dehydratedState}>
      <HomePage />
    </ReactQueryProvider>
  );
}

