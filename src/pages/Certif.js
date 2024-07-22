import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimtedText";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";
const FramerImage = motion(Image);

const MovingImg = ({ title, img, link }) => {
  return (
    <Link href={link} target={"_blank"} download={true}>
      <h2 className="capitalize text-xl font-semibold hover:underline">{title}</h2>
      <Image src={img} alt={title} className="w-96 h-auto hidden absolute rounded-lg" />
    </Link>
  );
};

const Certificat = ({ img, title, date, link }) => {
  return (
    <li className="relative w-full p-4 py-6 my-4 rounded-xl flex flex-col md:flex-row items-center justify-between bg-light text-dark border border-solid border-dark border-r-4 border-b-4">
      <MovingImg title={title} img={img} link={link} />
      <span className="text-primary font-semibold pl-4">{date}</span>
    </li>
  );
};

const Certif = () => {
  return (
    <>
      <Head>
        <title>Kaoutarlaouaj | Certificats Page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden">
        <Layout className="pt-16">
          <AnimatedText text="Words Can Change The World!" className="mb-16" />
          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32 dark:text-light">All Certificats</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Certificat 
              title="Basic Concepts of Switching, Routing, and Wireless: Networking fundamentals" 
              date="June 2024" 
              link="/images/certificats/kaoutarlaouaj_CCNAv7_GI4_2_certificate.pdf" 
            />
          <Certificat 
              title="C# .NET Certificate: Professional software development with C#" 
              date="January 2024" 
              link="/images/certificats/CSHARP_DOTNET_Certificat.pdf" 
            />
               <Certificat 
              title="React.js: Creating dynamic web applications" 
              date="December 2023" 
              link="/images/certificats/react_certificat.pdf" 
            />
               <Certificat 
              title="JavaScript Certificate (Coursera): Advanced JavaScript concepts" 
              date="September 2023" 
              link="/images/certificats/JS_Certificat_coursera_Kaoutar_Laouaj.pdf" 
            />
            <Certificat 
              title="Bootstrap: Master the fundamentals of building responsive websites" 
              date="March 2023" 
              link="/images/certificats/KAOUTAR_LAOUAJ_BOOTSTRAP.pdf" 
            />
            <Certificat 
              title="Node.js: Build scalable network applications" 
              date="February 2023" 
              link="/images/certificats/KAOUTAR_LAOUAJ_NODEJS.pdf" 
            />
           <Certificat 
              title="PHP: Developing server-side web applications" 
              date="January 2023" 
              link="/images/certificats/KAOUTAR_LAOUAJ_PHP.pdf" 
            />
        
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default Certif;
