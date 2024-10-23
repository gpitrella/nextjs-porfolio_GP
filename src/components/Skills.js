import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light 
        py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light
        lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32 sm:text-4xl sm:mt-20">
        Skills
      </h2>
      <div
        className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark 
        lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] 
        lg:bg-circularLightLg lg:dark:bg-circularDarkLg 
        md:bg-circularLightMd md:dark:bg-circularDarkMd 
        sm:bg-circularLightSm sm:dark:bg-circularDarkSm"
      >
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light 
          p-8 shadow-dark cursor-pointer dark:text-dark dark:bg-light 
          lg:p-6 md:p-4 xs:text-xs xs:p-2"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>

        {/* Adjust positions for responsiveness */}
        <Skill name="HTML" x="20vw" y="2vw" />
        <Skill name="CSS" x="-5vw" y="-10vw" />
        <Skill name="JavaScript" x="10vw" y="6vw" />
        <Skill name="PHP" x="0vw" y="12vw" />
        <Skill name="Bootstrap" x="14vw" y="-15vw" />
        <Skill name="ReactJs" x="10vw" y="-12vw" />
        <Skill name="NodeJs" x="15vw" y="-5vw" />
        <Skill name="NextJs" x="0vw" y="-20vw" />
        <Skill name="TypeScript" x="-20vw" y="18vw" />
        <Skill name="Angular" x="18vw" y="18vw" />
        <Skill name="TailWindCSS" x="25vw" y="10vw" />
        <Skill name="LARAVEL" x="22vw" y="-25vw" />
        <Skill name="Symfony" x="-22vw" y="-25vw" />
        <Skill name="JAVAJEE" x="-26vw" y="-5vw" />
        <Skill name="Figma" x="-27vw" y="-15vw" />
        <Skill name=".NET" x="-30vw" y="-1vw" />
        <Skill name="C#" x="-27vw" y="8vw" />
        <Skill name="Dart" x="-15vw" y="2vw" />
        <Skill name="JAVA" x="-18vw" y="12vw" />
        <Skill name="Spring" x="-35vw" y="5vw" />
        <Skill name="MySql" x="-20vw" y="26vw" />
        <Skill name="MongoDb" x="11vw" y="26vw" />
      </div>
    </>
  );
};

export default Skills;
