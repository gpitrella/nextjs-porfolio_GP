import "@/styles/globals.css";
import AppNavBar from "@/components/AppNavBar";
import Footer from "@/components/Footer";
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
  title: "Gabriel Pitrella | Ingeniero Full Stack",
  description:
    "Portafolio y proyectos destacados de Gabriel Pitrella, ingeniero full stack especializado en Next.js, React y arquitecturas escalables.",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es">
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
        <main className="min-h-screen">
          <AppNavBar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}

