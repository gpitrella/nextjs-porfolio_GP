'use client';

import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  selectCertificates,
} from "@/lib/features/certificates/scopes/me/selectors";
import { useCertificates } from "@/lib/features/certificates/scopes/me/hooks";
import Link from "next/link";

const CertificatesPage = () => {
  const { data, isLoading } = useCertificates();
  const certificates = selectCertificates(data);

  return (
    <>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center overflow-hidden dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Words Can Change The World!"
            className="mb-2 !text-5xl lg:!text-4xl sm:!text-3xl xs:!text-2xl sm:mb-2"
          />
          <h2 className="mt-20 w-full text-center text-4xl font-bold dark:text-light">
            All Certificates
          </h2>
          {isLoading ? (
            <div className="mt-10 grid grid-cols-3 items-stretch gap-6 lg:grid-cols-2 md:grid-cols-1">
              {Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={`certificate-skeleton-${index}`}
                  className="h-48 animate-pulse rounded-2xl border border-dark/10 bg-dark/5 p-6 dark:border-light/10 dark:bg-light/5"
                >
                  <div className="mb-4 h-6 w-3/4 rounded bg-dark/10 dark:bg-light/10" />
                  <div className="mb-4 h-4 w-1/2 rounded bg-dark/10 dark:bg-light/10" />
                  <div className="h-10 w-full rounded bg-dark/10 dark:bg-light/10" />
                </div>
              ))}
            </div>
          ) : (
            <ul className="mt-10 grid grid-cols-3 items-stretch gap-6 lg:grid-cols-2 md:grid-cols-1">
              {certificates.map((certificate) => (
                <li key={certificate.id} className="list-none flex">
                  <Card className="flex h-full w-full flex-col border border-dark/15 bg-light p-6 shadow-lg transition-shadow hover:shadow-xl dark:border-light/15 dark:bg-dark">
                    <CardHeader className="px-0 pb-4">
                      <CardTitle className="text-xl font-semibold leading-tight">
                        {certificate.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-1 flex-col gap-4 px-0 pt-0">
                      <span className="text-sm font-semibold uppercase tracking-wide text-primary dark:text-primaryDark">
                        {certificate.issuedAt}
                      </span>
                      <Link
                        href={certificate.url}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="mt-auto rounded-lg bg-dark px-4 py-2 text-center text-sm font-semibold text-light transition-colors hover:bg-dark/90 dark:bg-light dark:text-dark dark:hover:bg-light/90"
                        aria-label={`Descargar certificado ${certificate.title}`}
                      >
                        Ver Certificado
                      </Link>
                    </CardContent>
                  </Card>
                </li>
              ))}
            </ul>
          )}
        </Layout>
      </main>
    </>
  );
};

export default CertificatesPage;

