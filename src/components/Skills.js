import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-5xl mt-24 mb-12 w-full text-center md:text-4xl md:mt-32 sm:text-3xl sm:mt-20">
        Skills
      </h2>
      <div className="w-full flex flex-wrap gap-3 justify-center">
        <Skill name="JavaScript" />
        <Skill name="TypeScript" />
        <Skill name="HTML" />
        <Skill name="CSS" />
        <Skill name="SASS" />
        <Skill name="LESS" />
        <Skill name="HubSpot" />
        <Skill name="HubL" />        
        <Skill name="ReactJs" />
        <Skill name="React Native" />
        <Skill name="Expo" />
        <Skill name="Redux Toolkit" />
        <Skill name="NodeJs" />
        <Skill name="NextJs" />
        <Skill name="RESTful APIs" />
        <Skill name="Bootstrap" />
        <Skill name="Firebase" />
        <Skill name="TailWindCSS" />
        <Skill name="Express" />
        <Skill name="Sequelize" />        
        <Skill name="Figma" />
        <Skill name="PostgreSQL" />
        <Skill name="Mongoose" />
        <Skill name="MongoDB" />
        <Skill name="Apollo" />
        <Skill name="GraphQL" />
        <Skill name="JQuery" />
        <Skill name="WordPress" />
        <Skill name="Passport" />
        <Skill name="JSON Web Token" />
        <Skill name="Outh" />
        <Skill name="Jest" />
        <Skill name="Cypress" />
        <Skill name="Git/GitHub" />
        <Skill name="Webpack" />
        <Skill name="Vercel" />
        <Skill name="Heroku" />
        <Skill name="Fly.io" />
        <Skill name="Jira" />
        <Skill name="Scrum/Agile Methodology" />
        <Skill name="Slack" />
        <Skill name="Git/GitHub" />
      </div>      
    </>
  );
};

export default Skills;
