'use client';

import { motion, useScroll } from "framer-motion";
import React, { useRef } from "react";
import LiIcon from "./LiIcon";
import { ExperienceItem } from "@/lib/features/experience";
import { EXPERIENCE_DATA } from "@/lib/features/experience/data";
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
        {Array.isArray(experience.work) ? (
          <ul className="list-disc list-inside font-medium w-full md:text-sm space-y-1 mt-2">
            {experience.work.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p className="font-medium w-full md:text-sm">{experience.work}</p>
        )}
        <div className="font-medium w-full md:text-sm mt-2">
          <strong>Stacks: </strong>
          {Array.isArray(experience.stacks) ? (
            <span>{experience.stacks.join(", ")}</span>
          ) : (
            <span>{experience.stacks}</span>
          )}
        </div>
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

  const experienceData = EXPERIENCE_DATA.filter((item) => item.scope === "me");

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

