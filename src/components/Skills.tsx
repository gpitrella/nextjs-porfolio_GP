'use client';

import React from "react";
import Skill from "./Skill";
import { SKILLS_DATA } from "@/lib/features/skills/data";

const Skills: React.FC = () => {
  return (
    <>
      <h2 className="font-bold text-5xl mt-24 mb-12 w-full text-center md:text-4xl md:mt-32 sm:text-3xl sm:mt-20">
        Skills
      </h2>
      <div className="w-full flex flex-col gap-8">
        {SKILLS_DATA.map((category) => (
          <div key={category.id}>
            <h3 className="font-semibold text-xl mb-4 text-center md:text-lg">{category.label}</h3>
            <div className="w-full flex flex-wrap gap-3 justify-center" role="list" aria-label={category.label}>
              {category.skills.map((name) => (
                <Skill key={name} name={name} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Skills;

