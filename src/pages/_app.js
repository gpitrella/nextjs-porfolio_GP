import NavBar from '@/components/NavBar';
import '@/styles/globals.css'
import { Montserrat } from "next/font/google"
import Head from 'next/head';
import Footer from '@/components/Footer';
import { GoogleAnalytics } from "@next/third-parties/google";

const montserrat = Montserrat(
  {
    subsets: ["latin"],
    variable: "--font-mont"
  }
)

export default function App({ Component, pageProps }) {
  
  console.log('process.env.NEXT_PUBLIC_GA_ID: ', process.env.NEXT_PUBLIC_GA_ID)

  return (
 
 <>
    <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
    </Head>
      <main className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen`}>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </main>
 </>
  );  
}


