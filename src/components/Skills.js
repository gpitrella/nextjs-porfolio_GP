import React, { useMemo, useState } from "react";
import Skill from "./Skill";

const Skills = () => {
  const [ skillsNumber, setSkillsNumber ] = useState(0);
  const [ skills, setSkills ] = useState([
    "JavaScript", "TypeScript", "HTML", "CSS", "SASS","LESS" ,"HubSpot","HubL","ReactJs","React Native",
    "Expo","Redux Toolkit","NodeJs","NextJs","RESTful APIs","Bootstrap","Firebase","TailWindCSS","Express",
    "Sequelize","Figma","PostgreSQL","Mongoose","MongoDB","Apollo","GraphQL","JQuery","WordPress","Passport",
    "JSON Web Token","Outh","Jest","Cypress","Webpack","Vercel","Heroku","Fly.io","Jira",
    "Scrum/Agile Methodology","Slack","Git/GitHub","CI/CD","Tailwind"
  ]);

  const skillsCounter2 = ()=>{
    console.log('Calculando numero de skills.')
    setSkillsNumber(skills.length);
  }

  // const skillsCounter = useMemo(()=>{
  //   setSkillsNumber(skills.length);
  //   return (
  //     console.log('Calculando numero de skills MEMO.')      
  //   )   
  // }, [skills]);


  return (
    <>
      <h2 className="font-bold text-5xl mt-24 mb-12 w-full text-center md:text-4xl md:mt-32 sm:text-3xl sm:mt-20">
        Skills
      </h2>
      <div className="w-full flex flex-wrap gap-3 justify-center">
        {skills.map((name) => (
          <div key={name} onClick={skillsCounter2}>
            <Skill name={name} />
          </div>
        ))}
      </div>      
    </>
  );
};

export default Skills;
