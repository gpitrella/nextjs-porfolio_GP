'use client';

import { motion, useScroll } from "framer-motion";
import React, { useRef } from "react";
import LiIcon from "./LiIcon";
import { ExperienceItem } from "@/lib/features/experience";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ExperienceDetailsProps {
  experience: ExperienceItem;
}

const ExperienceDetails: React.FC<ExperienceDetailsProps> = ({ experience }) => {
  const ref = useRef<HTMLLIElement>(null);

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[70%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref as React.RefObject<HTMLElement>} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {experience.position}&nbsp;
          {experience.companyLink ? (
            <Link
              href={experience.companyLink}
              target="_blank"
              rel="noreferrer noopener"
              className="text-primary dark:text-primaryDark capitalize hover:underline"
            >
              @{experience.company}
            </Link>
          ) : (
            <span className="text-primary dark:text-primaryDark capitalize">
              @{experience.company}
            </span>
          )}
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {experience.time} | {experience.address}
        </span>
        <p className="font-medium w-full md:text-sm">{experience.work}</p>
        <p className="font-medium w-full md:text-sm">
          <strong>Stacks: </strong>{experience.stacks}
        </p>
      </motion.div>
    </li>
  );
};

const Experience: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref as React.RefObject<HTMLElement>,
    offset: ["start end", "center start"],
  });

  // For now, using static data - can be replaced with useExperience hook when needed
  const experienceData = [
    {
      id: "hubsnacks-fullstack",
      position: "Full Stack Developer",
      company: "HubSnacks",
      companyLink: "https://www.hubsnacks.com/",
      time: "06/2022 – Current",
      address: "London",
      work: "Creation of high-performance websites and landing pages, implementation of scalable frontend architectures, and end-to-end monitoring of web development aligned with design and UX requirements. Responsibilities include site optimization, debugging and resolving complex client-side issues, integrating web properties with external platforms and APIs, and managing development workflows through ticketing systems. Strong experience embedding React components inside HubSpot (React-in-HubSpot) to extend CMS capabilities, build dynamic modules, and create reusable UI features integrated with HubL and HubSpot's serverless functions.",
      stacks: "HubSpot CMS, HubL, React, React embedded in HubSpot, JavaScript, TypeScript, jQuery, HTML, CSS, Next.js, RESTful APIs, Figma, Scrum / Agile, Slack",
      scope: "me" as const,
    },
    {
      id: "laqua-fullstack",
      position: "Full Stack Developer",
      company: "L'AQUA Store – Lidherma Store",
      time: "02/2021 – 09/2023",
      address: "CABA, Argentina",
      work: "Build a complete E-commerce platform with server integration, web performance optimization and seamless connections to payment gateways Facebook and Google Ads.",
      stacks: "React, WordPress, Javascript, including DOM manipulation and object model, HTML, CSS, Photoshop, Figma, Jira, Scrum/Agile Methodology",
      scope: "me" as const,
    },
    {
      id: "toyota-frontend",
      position: "Front-End Developer | Quality Assembly Engineer",
      company: "TOYOTA Argentina SA",
      companyLink: "https://www.toyota.com.ar/",
      time: "11/2014 – 03/2022",
      address: "Buenos Aires, Argentina",
      work: "Development of App for visualization of vehicle variables. Coordinate supplies in charge. Analyze and solve problems in the production line. Analyze, document, design and manage process improvement. Implement Kaizen as a methodology for continuous improvement and detection of opportunities for change that add value to the company.",
      stacks: "React, Javascript, including DOM manipulation and object model, JQuery, TypeScript, HTML, CSS, SASS, LESS, Node.js, RESTful APIs, Git/GitHub, Webpack, Figma, Scrum/Agile Methodology, Slack, Cypress",
      scope: "me" as const,
    },
    {
      id: "bucciero-quality",
      position: "Quality and Project Engineer",
      company: "Pedro Bucciero Industries SRL",
      companyLink: "https://industriasbucciero.com/",
      time: "09-2009– 11/2014",
      address: "Buenos Aires, Argentina",
      work: "Responsible for Quality and Engineering in the development of more than 40 auto parts for the main automotive terminals in Argentina PSA, GM and FIAT (Application of ISO TS 16949:2009 - ISO 9001:2008 standards). Programming and tuning of CNC machines - PLCs (G&M code language)",
      stacks: "Programming and tuning of CNC machines - PLCs (G&M code language)",
      scope: "me" as const,
    },
  ];

  return (
    <div className="my-32 md:my-32 xs:my-20">
      <h2 className="font-bold text-5xl mb-20 w-full text-center md:text-4xl xs:text-4xl md:mb-16">
        Experience
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          // @ts-expect-error - framer-motion types issue with className
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          {experienceData.map((exp) => (
            <ExperienceDetails key={exp.id} experience={exp} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Experience;

