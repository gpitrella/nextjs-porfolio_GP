import "@/styles/globals.css";
import AppNavBar from "@/components/AppNavBar";
import Footer from "@/components/Footer";
import ErrorBoundary from "@/components/ErrorBoundary";
import ThemeScript from "@/components/ThemeScript";
import { Montserrat } from "next/font/google";
import Script from "next/script";
import type { Metadata } from "next";
import { ReactNode } from "react";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gabrielpitrella.com"),
  title: "Gabriel Pitrella | Ingeniero Full Stack",
  description:
    "Portafolio y proyectos destacados de Gabriel Pitrella, ingeniero full stack especializado en Next.js, React y arquitecturas escalables.",
  openGraph: {
    title: "Gabriel Pitrella | Full Stack Engineer",
    description: "Specialized in Next.js, React, and scalable architectures",
    url: "https://gabrielpitrella.com",
    siteName: "Gabriel Pitrella Portfolio",
    images: [
      {
        url: "/images/profile/gabriel-pitrella.png",
        width: 1200,
        height: 630,
        alt: "Gabriel Pitrella - Full Stack Engineer",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gabriel Pitrella | Full Stack Engineer",
    description: "Specialized in Next.js, React, and scalable architectures",
    images: ["/images/profile/gabriel-pitrella.png"],
  },
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body className={`${montserrat.variable} font-mont bg-light dark:bg-dark`}>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-ZFZE480F9S"
        />
        <Script
          id="ga-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-ZFZE480F9S');
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Gabriel Pitrella",
              jobTitle: "Full Stack Engineer",
              url: "https://gabrielpitrella.com",
              sameAs: [
                "https://github.com/gabrielpitrella",
                "https://linkedin.com/in/gabrielpitrella",
              ],
              knowsAbout: ["Next.js", "React", "TypeScript", "HubSpot CMS"],
            }),
          }}
        />
        <ErrorBoundary>
          <main className="min-h-screen">
            <AppNavBar />
            {children}
            <Footer />
          </main>
        </ErrorBoundary>
      </body>
    </html>
  );
}

