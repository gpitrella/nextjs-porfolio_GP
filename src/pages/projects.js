import AnimatedText from "@/components/AnimtedText";
import Layout from "@/components/Layout";
import React from "react";
import Head from "next/head";
import { GithubIcon } from "@/components/Icons";
import Link from "next/link";
import Image from "next/image";
import project1 from "../../public/images/projects/captureP2E.png"
import project2 from "../../public/images/projects/donation_picture.png"
import project3 from "../../public/images/projects/I1.png"
import project4 from "../../public/images/projects/Capture1.png"
import project5 from "../../public/images/projects/three.png"
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";
const FramerImage = motion(Image);
const FeaturedProject = ({type,title,summary,img,link,github}) => {

    return (

        <article className="w-full flex items-center justify-between relative rounded-br-2xl
        rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
        ">
     <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light
     rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]
     " />
          <Link href={link} target="_blank"
          className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
          >
            <FramerImage src={img} alt={title} className="w-full h-auto"
            whileHover={{scale:1.05}}
            transition={{duration:0.2}}
            />
          </Link>

          <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
            <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">{type}</span>
            <Link href={link} target="_blank" className="hover:underline underline-offset-2">
            <h2 className="my-2 w-full text-left text-4xl font-bold lg:text-2xl">{title}</h2>
          </Link>
          <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">{summary}</p>
          <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10"> <GithubIcon/> </Link>
          <Link href={link} target="_blank" className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold
          dark:bg-light dark:text-dark  sm:px-4 sm:text-base
          "
          
          >Visit Project</Link>

        
          </div>
          </div>
        </article>
    )
}

const Project = ({title,type,img,link,github}) => {

    return (
      <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative p-6 relative dark:bg-dark dark:border-light xs:p-4">
          <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark
     rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]
     " />
           <Link href={link} target="_blank"
          className="w-full cursor-pointer overflow-hidden rounded-lg"
          >
            <FramerImage src={img} alt={title} className="w-full h-auto"
            whileHover={{scale:1.05}}
            transition={{duration:0.2}}
            priority sizes="(max-width:768px) 100vw,
            (max-width: 1200px) 50vw, 50vw"
            />
          </Link>

          <div className="w-full flex flex-col items-start justify-between mt-4">
            <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">{type}</span>
            <Link href={link} target="_blank" className="hover:underline underline-offset-2">
            <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">{title}</h2>
          </Link>
          <div className="w-full mt-2 flex items-center justify-between">
          <Link href={link} target="_blank" className="text-lg font-semibold underline md:text-base"
          
          >Visit</Link>
          <Link href={github} target="_blank" className="w-8 md:w-6"> {" "} <GithubIcon/> {" "}</Link>
          

        
          </div>
          </div>
      </article>
    )
}
const projects = () => {
    return (
      <>
         <Head>
         <title>Gabriel Pitrella | Projects Page</title>
         <meta name="description" content="any description" />
       </Head>
       <TransitionEffect/>
       <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
         <Layout className="pt-16">
            <AnimatedText text="Imagination Trumps Knowledge!" 
            className="mb-16 !text-5xl lg:!text-4xl sm:mb-8 sm:!text-3xl xs:!text-3xl"
            />

            <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
                <div className="col-span-12">
                <FeaturedProject 
                    title="https://laquastore.com"
                    img={project2}
                    summary="This is a full Web E-commerce, you can buy any product in the store. The main used
    technologies are: WordPress, MercadoPago, Google Ads, Google Analytics, Facebook Ads"
                    link="https://laquastore.com"
                    github="https://github.com/gpitrella/laqua"
                    type="Modular Project Management"
                />

                </div>
                <div className="col-span-12">
                <FeaturedProject 
                    title="Development of a donation website"
                    img={project2}
                    summary="This project develops a web application for online donations, using Bootstrap for the interface and PHP for server-side operations. It ensures efficient donor management and tracking, providing a seamless donation experience while maintaining transparency and accountability."
                    link="https://github.com/Noussaiba-Zaoui/Save_Project.git"
                    github="https://github.com/Noussaiba-Zaoui/Save_Project.git"
                    type="Nonprofit Donation Management Platform"
/>

                </div>

                <div className="col-span-12">
                <FeaturedProject 
   title="Development of a CRUD Application for Managing ENSA0 Students"
   img={project3}
   summary="This project develops a CRUD application for managing student information at ENSA0 using Java and JavaFX. It allows adding, viewing, updating, and deleting student records, aiming to create an efficient and user-friendly academic administration system."
   link="https://github.com/ImeneLEG/E-SchoolEnsaO.git"
   github="https://github.com/ImeneLEG/E-SchoolEnsaO.git"
   type="Student Management System"
/>

                </div>

                <div className="col-span-12">
                <FeaturedProject 
                    
                    title="Development of an E-Commerce Website for Furniture"
                    img={project4}
                    summary="This project aims to build a modern e-commerce website for furniture using ReactJS for the frontend, Laravel and Node.js for backend operations, and TailwindCSS for styling. Stripe API will manage secure payments, providing a smooth and secure shopping experience."
                    link="https://github.com/Noussaiba-Zaoui/React_AKIA.git"
                    github="https://github.com/Noussaiba-Zaoui/React_AKIA.git"
                    type="E-Commerce Furniture Store"
                    />
                </div>
                <div className="col-span-12">
                <FeaturedProject 
                    
                    title="Development of an Android Delivery Application"
                    img={project5}
                    summary="This project involves creating an Android application for delivery services. The app will be developed using Java for the core functionality, SQLite for local data storage, and XML for designing the user interface. The goal is to provide an efficient and user-friendly platform for managing delivery orders and tracking shipments."
                    link="https://github.com/ImeneLEG/FoodExpress.git"
                    github="https://github.com/ImeneLEG/FoodExpress.git"
                    type="Android Delivery App"
                    />
                </div>
                <div className="col-span-6 sm:col-span-12">
                </div>
            </div>
         </Layout>
       </main>
      </>
    )
}

export default projects