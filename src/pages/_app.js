import NavBar from '@/components/NavBar';
import { useEffect } from 'react';
import '@/styles/globals.css';
import Script from "next/script";
import { Montserrat } from "next/font/google";
import Head from 'next/head';
import Footer from '@/components/Footer';

const montserrat = Montserrat(
  {
    subsets: ["latin"],
    variable: "--font-mont"
  }
)

export default function App({ Component, pageProps }) {

  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "G-ZFZE480F9S");
  }, []);

  return ( 
        <>
            <Head>
                <Script
                  strategy="afterInteractive"
                  src="https://www.googletagmanager.com/gtag/js?id=G-ZFZE480F9S"
                />

                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charset="UTF-8"/>
                <title>Gabriel Pitrella | Engineer Full Stack Developer </title>

                {/* <!-- Descripción optimizada --> */}
                <meta name="description" content="Full Stack Engineer with over 4 years of hands-on expertise in crafting and implementing efficient solutions using a diverse set of technologies, including JavaScript, HuBL(HubSpot), NodeJS, ReactJS, NextJS and more. I prioritize KISS, DRY and SOLID principles for robust and maintainable software. My professional journey spans over 14 years as an Industrial Engineer with 7 years as an Engineer at Toyota, where I developed a strong foundation in analytical thinking, effective problem-solving, teamwork, communication, and a commitment to continuous improvement."/>

                {/* <!-- Keywords (Google ya no las usa mucho, pero algunos motores sí) --> */}
                <meta name="keywords" content="Engineer Full Stack, Full Stack Engineer, Full Stack Developer, Software Engineer, Web Developer, React, Next.js, API, Node.js, JavaScript, TypeScript, SEO Optimization, HubSpot Developer, HubSpot Specialist, HubL, Engineer HubSpot"/>

                {/* <!-- Meta de autor --> */}
                <meta name="author" content="Gabriel Pitrella"/>

                {/* <!-- Open Graph (para redes sociales) --> */}
                <meta property="og:title" content="Gabriel | Full Stack Developer & Engineer"/>
                <meta property="og:description" content="Explore my portfolio of web development and advanced technological solutions."/>
                {/* <meta property="og:image" content="https://tuportafolio.com/imagG-ZFZE480F9Sen.jpg"/> */}
                <meta property="og:url" content="https://tuportafolio.com"/>
                <meta property="og:type" content="website"/>

                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:title" content="Gabriel | Engineer Full Stack Developer"/>
                <meta name="twitter:description" content="Explora mi portafolio con proyectos de desarrollo web, optimización y tecnología."/>

                <link rel="icon" href="/favicon.ico" />
                <GoogleAnalytics />
            </Head>
              <main className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen`}>
              <NavBar />
              <Component {...pageProps} />
              <Footer />
            </main>
        </>
  );  
}


