import { motion, useScroll } from "framer-motion";
import React, { useRef } from "react";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work, stacks }) => {
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
          { companyLink ? 
            <a
              href={companyLink}
              target="_blank"
              className="text-primary dark:text-primaryDark capitalize"
            >
              @{company}
            </a>
            : <span
              className="text-primary dark:text-primaryDark capitalize"
            >
              @{company}
            </span>
          }
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
        <p className="font-medium w-full md:text-sm"><strong>Stacks: </strong>{stacks}</p>
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
    <div className="my-32 md:my-32 xs:my-20">
      <h2 className="font-bold text-5xl mb-20 w-full text-center md:text-4xl xs:text-4xl md:mb-16">
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
            different platforms and monitoring of tasks through tickets. See the latest developments in my profile."
            stacks="HubSpot, HubL, Javascript, JQuery, HTML, CSS, RESTful APIs, Figma, Scrum/Agile Methodology, Slack"
          />

          <Details
            position="Full Stack Developer"
            company="L’AQUA Store – Lidherma Store"
            time="02/2021 – 09/2023"
            address="CABA, Argentina"
            work="Build a complete E-commerce platform with server integration, web performance optimization and seamless 
             connections to payment gateways Facebook and Google Ads."
            stacks="React, WordPress, Javascript, including DOM manipulation and object model, HTML, CSS, Photoshop, Figma, Jira, Scrum/Agile Methodology"
          />

          <Details
            position="Front-End Developer | Quality Assembly Engineer"
            company="TOYOTA Argentina SA"
            companyLink="https://www.toyota.com.ar/"
            time="11/2014 – 03/2022"
            address="Buenos Aires, Argentina"
            work="Development of App for visualization of vehicle variables. Coordinate supplies in charge. Analyze and 
            solve problems in the production line. Analyze, document, design and manage process improvement. Implement 
            Kaizen as a methodology for continuous improvement and detection of opportunities for change that add value 
            to the company."
            stacks="React, Javascript, including DOM manipulation and object model, JQuery, TypeScript, HTML, 
            CSS, SASS, LESS, Node.js, RESTful APIs, Git/GitHub, Webpack, Figma, Scrum/Agile Methodology, Slack, Cypress"    
          />

          <Details
            position="Quality and Project Engineer"
            company="Pedro Bucciero Industries SRL"
            companyLink="https://industriasbucciero.com/"
            time="09-2009– 11/2014"
            address="Buenos Aires, Argentina"
            work="Responsible for Quality and Engineering in the development of more than 40 auto parts for the 
            main automotive terminals in Argentina PSA, GM and FIAT (Application of ISO TS 16949:2009 - 
            ISO 9001:2008 standards). Programming and tuning of CNC machines - PLCs (G&M code language)"
            stacks="Programming and tuning of CNC machines - PLCs (G&M code language)"
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
