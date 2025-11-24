'use client';

import React, { useMemo } from "react";
import Skill from "./Skill";

const SKILLS = [
  "JavaScript", "TypeScript", "HTML", "CSS", "SASS", "LESS", "HubSpot", "HubL",
  "ReactJs", "React Native", "Expo", "Redux Toolkit", "NodeJs", "NextJs",
  "RESTful APIs", "Bootstrap", "Firebase", "TailWindCSS", "Express",
  "Sequelize", "Figma", "PostgreSQL", "Mongoose", "MongoDB", "Apollo", "GraphQL",
  "JQuery", "WordPress", "Passport", "JSON Web Token", "OAuth", "Jest", "Cypress",
  "Webpack", "Vercel", "Heroku", "Fly.io", "Jira",
  "Scrum/Agile Methodology", "Slack", "Git/GitHub", "CI/CD", "Tailwind"
] as const;

const Skills: React.FC = () => {
  // Memoize skills array to avoid recreation on every render
  const skills = useMemo(() => SKILLS, []);

  return (
    <>
      <h2 className="font-bold text-5xl mt-24 mb-12 w-full text-center md:text-4xl md:mt-32 sm:text-3xl sm:mt-20">
        Skills
      </h2>
      <div className="w-full flex flex-wrap gap-3 justify-center" role="list" aria-label="Technical skills">
        {skills.map((name) => (
          <Skill key={name} name={name} />
        ))}
      </div>
    </>
  );
};

export default Skills;

