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
      <h2 className="capitalize text-xl text-center font-semibold hover:underline">{title}</h2>
      <Image src={img} alt={title} className="w-96 h-auto hidden absolute rounded-lg" />
    </Link>
  );
};

const Certificat = ({ img, title, date, link }) => {
  return (
    <li className="relative w-full al p-4 py-6 my-2 rounded-xl flex flex-col items-center justify-center bg-light text-dark border border-solid border-dark border-r-4 border-b-4">
      <MovingImg title={title} img={img} link={link} />
      <span className="text-primary font-semibold pl-4">{date}</span>
    </li>
  );
};

const Certif = () => {
  return (
    <>
      <Head>
        <title>Gabriel Pitrella | Certificats Page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden">
        <Layout className="pt-16">
          <AnimatedText 
          text="Words Can Change The World!" 
          className="mb-2 !text-5xl lg:!text-4xl sm:!text-3xl xs:!text-2xl sm:mb-2" />
          <h2 className="font-bold text-4xl w-full text-center my-16 mt-20 dark:text-light">All Certificats</h2>
          <ul className="grid grid-cols-3 lg:grid-cols-2  md:grid-cols-1 gap-4">
          <Certificat 
              title="HubSpot Architecture I: Data Models and APIs" 
              date="February 2025" 
              link="https://app.hubspot.com/academy/achievements/0qq2q9wg/en/1/gabriel-pitrella/hubspot-architecture-i-data-models-and-apis" 
            />
             <Certificat 
              title="Specialize in Jira, the leading project management tool" 
              date="October 2024" 
              link="https://www.linkedin.com/learning/certificates/6d11d618b7427ab71773426eea78fae86117d638714773e98ff1757cdc7e6baf?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B5UVVeyE0RueWDOXv7vyOGA%3D%3D" 
            />
          <Certificat 
              title="Integrating With HubSpot I: Foundations" 
              date="December 2024" 
              link="https://app.hubspot.com/academy/achievements/h583ly80/en/1/gabriel-pitrella/integrating-with-hubspot-i-foundations" 
            />
               <Certificat 
              title="Data Integrations Certification" 
              date="July 2024" 
              link="https://app.hubspot.com/academy/achievements/k4kfy2sf/en/1/gabriel-pitrella/data-integrations-certification" 
            />
            <Certificat 
              title="CMS Hub Implementation" 
              date="December 2023" 
              link="https://app.hubspot.com/academy/achievements/fvh32vm8/en/1/gabriel-pitrella/cms-hub-implementation" 
            />
               <Certificat 
              title="SEO Optimization Certificate" 
              date="September 2023" 
              link="https://app.hubspot.com/academy/achievements/qjlwwm15/en/1/gabriel-pitrella/seo" 
            />
            <Certificat 
              title="Application Development Course" 
              date="August 2023" 
              link="https://www.coderhouse.com/ar/certificados/6553c1caa970c94cb80cf58b?lang" 
            />
            <Certificat 
              title="HubSpot CMS for Developers II: Best Practices" 
              date="July 2023" 
              link="https://app.hubspot.com/academy/achievements/gw1k76qc/en/1/gabriel-pitrella/hubspot-cms-for-developers-ii-best-practices" 
            />
           <Certificat 
              title="HubSpot CMS for Developers" 
              date="November 2022" 
              link="https://app.hubspot.com/academy/achievements/0fr9ymb4/en/1/gabriel-pitrella/hubspot-cms-for-developers" 
            />        
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default Certif;
