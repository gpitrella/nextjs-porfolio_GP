import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y, xSm, ySm }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light 
        py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light
        lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent 
        xs:text-dark xs:dark:text-light xs:font-bold"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: window.innerWidth < 640 ? xSm : x, y: window.innerWidth < 640 ? ySm : y, transition: { duration: 1.5 } }}
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
        <Skill name="HTML" x="400px" y="20px" xSm="150px" ySm="10px" />
        <Skill name="CSS" x="-50px" y="-100px" xSm="10px" ySm="-60px" />
        <Skill name="JavaScript" x="200px" y="60px" xSm="80px" ySm="20px" />
        <Skill name="PHP" x="0px" y="120px" xSm="20px" ySm="70px" />
        <Skill name="Bootstrap" x="270px" y="-150px" xSm="100px" ySm="-100px" />
        <Skill name="ReactJs" x="150px" y="-120px" xSm="60px" ySm="-80px" />
        <Skill name="NodeJs" x="320px" y="-50px" xSm="120px" ySm="-30px" />
        <Skill name="NextJs" x="0px" y="-200px" xSm="0px" ySm="-100px" />
        <Skill name="TypeScript" x="-250px" y="180px" xSm="-120px" ySm="90px" />
        <Skill name="Angular" x="180px" y="180px" xSm="90px" ySm="70px" />
        <Skill name="TailWindCSS" x="450px" y="100px" xSm="200px" ySm="50px" />
        <Skill name="LARAVEL" x="220px" y="-250px" xSm="100px" ySm="-130px" />
        <Skill name="Smyphony" x="-220px" y="-250px" xSm="-110px" ySm="-130px" />
        <Skill name="JAVAJEE" x="-260px" y="-50px" xSm="-130px" ySm="-30px" />
        <Skill name="Figma" x="-270px" y="-150px" xSm="-130px" ySm="-80px" />
        <Skill name=".NET" x="-370px" y="-1px" xSm="-180px" ySm="0px" />
        <Skill name="C#" x="-270px" y="80px" xSm="-130px" ySm="40px" />
        <Skill name="dart" x="-150px" y="20px" xSm="-80px" ySm="10px" />
        <Skill name="JAVA" x="-180px" y="120px" xSm="-90px" ySm="60px" />
        <Skill name="Spring" x="-490px" y="50px" xSm="-240px" ySm="30px" />
        <Skill name="MySql" x="-200px" y="260px" xSm="-100px" ySm="130px" />
        <Skill name="MongoDb" x="110px" y="260px" xSm="50px" ySm="130px" />
      </div>
    </>
  );
};

export default Skills;
