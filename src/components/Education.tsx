'use client';

import { motion, useScroll } from "framer-motion";
import React, { useRef } from "react";
import LiIcon from "./LiIcon";
import { EducationItem } from "@/lib/features/education";
import { cn } from "@/lib/utils";

interface EducationDetailsProps {
  education: EducationItem;
}

const EducationDetails: React.FC<EducationDetailsProps> = ({ education }) => {
  const ref = useRef<HTMLLIElement>(null);

  return (
    <li
      ref={ref}
      className="mt-6 first:mt-0 last:mb-0 w-[70%] mx-auto flex flex-col items-center justify-between md:w-[80%] sm:w-[90%]"
    >
      <LiIcon reference={ref as React.RefObject<HTMLElement>} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg text-center">
          {education.type}
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm block text-center">
          {education.time} | {education.place}
        </span>
        <p className="font-medium w-full md:text-sm text-center">
          {education.info}
        </p>
      </motion.div>
    </li>
  );
};

const Education: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref as React.RefObject<HTMLElement>,
    offset: ["start end", "center start"],
  });

  // For now, using static data - can be replaced with useEducation hook when needed
  const educationData = [
    {
      id: "hubspot-architecture",
      type: "HubSpot Architecture: Data models and APIS",
      time: "2025",
      place: "HubSpot",
      info: "Data Architecture",
      scope: "me" as const,
    },
    {
      id: "jira-specialization",
      type: "Jira Specialization, Project Management",
      time: "2024",
      place: "Linkedin",
      info: "Computer Science",
      scope: "me" as const,
    },
    {
      id: "coderhouse-apps",
      type: "Applications Development Course",
      time: "2023",
      place: "CoderHouse",
      info: "Computer Science",
      scope: "me" as const,
    },
    {
      id: "henry-fullstack",
      type: "Full Stack Web Developer",
      time: "2022",
      place: "Henry",
      info: "Computer Science",
      scope: "me" as const,
    },
    {
      id: "uba-automation",
      type: "Postgraduate in Industrial Automation",
      time: "2013",
      place: "University of Buenos Aires",
      info: "Industrial Automation",
      scope: "me" as const,
    },
    {
      id: "uncuyo-engineer",
      type: "Industrial Engineer",
      time: "2008",
      place: "National University of Cuyo",
      info: "Engineering",
      scope: "me" as const,
    },
  ];

  return (
    <div className="my-34">
      <h2 className="font-bold text-5xl mb-20 w-full text-center md:text-4xl xs:text-3xl md:mb-16">
        Education
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          // @ts-expect-error - framer-motion types issue with className
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          {educationData.map((edu) => (
            <EducationDetails key={edu.id} education={edu} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Education;

