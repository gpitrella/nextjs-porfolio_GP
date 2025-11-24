import CertificatesPage from "@/components/certificates/CertificatesPage";
import { ReactQueryProvider } from "@/components/providers/react-query-provider";
import { certificateKeys } from "@/lib/features/certificates/keys";
import { fetchCertificates } from "@/lib/features/certificates/scopes/me/api";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gabriel Pitrella | Certifications",
  description:
    "Listado de certificaciones y logros profesionales de Gabriel Pitrella.",
};

export default async function Certifications() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: certificateKeys.list("me"),
    queryFn: fetchCertificates,
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <ReactQueryProvider state={dehydratedState}>
      <CertificatesPage />
    </ReactQueryProvider>
  );
}

