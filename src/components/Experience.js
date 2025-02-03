import { motion, useScroll } from "framer-motion";
import React, { useRef } from "react";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[70%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary dark:text-primaryDark capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64 md:my-32 xs:my-20">
      <h2 className="font-bold text-5xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Full Stack Developer"
            company="HubSnacks"
            companyLink="https://www.hubsnacks.com/"
            time="06/2022 – Current"
            address="London"
            work="Creation of web pages and landing pages, monitoring of web development according to design, 
            optimization of websites, troubleshooting of client websites, integration of websites with 
            different platforms and monitoring of tasks through tickets. See the latest developments in my profile. 
            Stacks: HubSpot, HubL, Javascript, JQuery, HTML, CSS, RESTful APIs, Figma, Scrum/Agile Methodology, Slack"
          />

          <Details
            position="Intern Oujda"
            company="ANCFCC"
            companyLink="www.google.com"
            time="07/2023 – 08/2023"
            address="Boulevard Mohammed Derfoufi, Oujda"
            work="Creation of a platform for Forest Domain Distraction, Real Estate Exchange, 
            Private Land Acquisition using Bootstrap and PHP."
          />
          <Details
            position="Intern Oujda"
            company="ESTO"
            companyLink="www.google.com"
            time="04/2022 – 07/2022"
            address="Al Qods University Complex, Oujda"
            work="Processing a large medical database in Gulf countries and constructing a 
            dashboard using machine learning, Python, PowerBI, and PowerQuery."
          />
          <Details
            position="Intern Guercif"
            company="Commune"
            companyLink="www.google.com"
            time="04-2021– 06/2021"
            address="downtown, Guercif"
            work="Creation of an intern management application using Java, Swing."
          />
          <Details
            position="Intern Guercif"
            company="Commune"
            companyLink="www.google.com"
            time="08-2020 – 09-2020"
            address="downtown, Guercif"
            work="Creation of an individual life certificate application using C#."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
