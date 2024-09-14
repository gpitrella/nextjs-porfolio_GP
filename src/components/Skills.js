import React from "react";
import { motion } from "framer-motion";

const Skill = ({name,x,y}) => {

    return (
        <motion.div className="flex items-center justify-center rounded-full font-semibold bg-dark text-light 
        py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light
        lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold" whileHover={{scale:1.05}}
        initial={{x:0,y:0}}
        whileInView={{x: x,y: y, transition: {duration: 1.5}}}
        viewport={{once: true}}
        >
          {name}
        </motion.div>
    )
}
const Skills = () => {
    return (
        <>
         <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32">Skills</h2>
         <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm">
          
          <motion.div className="flex items-center justify-center rounded-full font-semibold bg-dark text-light 
          p-8 shadow-dark cursor-pointer dark:text-dark dark:bg-light lg:p-6 md:p-4 xs:text-xs xs:p-2
          " whileHover={{scale:1.05}}>
            Web
          </motion.div>

          <Skill name="HTML" x="400px" y="20px"/>
          <Skill name="CSS" x="-50px" y="-100px"/>
          <Skill name="JavaScript" x="200px" y="60px"/>
          <Skill name="PHP" x="0px" y="120px"/>
          <Skill name="Bootstrap" x="270px" y="-150px"/>
          <Skill name="ReactJs" x="150px" y="-120px"/>
          <Skill name="NodeJs" x="320px" y="-50px"/>
          <Skill name="NextJs" x="0px" y="-200px"/>
          <Skill name="TypeScript" x="-250px" y="180px"/>
          <Skill name="Angular" x="180px" y="180px"/>
          <Skill name="TailWindCSS" x="450px" y="100px"/>
          <Skill name="LARAVEL" x="220px" y="-250px"/>
          <Skill name="Smyphony" x="-220px" y="-250px"/>
          <Skill name="JAVAJEE" x="-260px" y="-50px"/>
          <Skill name="Figma" x="-270px" y="-150px"/>
          <Skill name=".NET" x="-370px" y="-1px"/>
          <Skill name="C#" x="-270px" y="80px"/>
          <Skill name="dart" x="-150px" y="20px"/>
          <Skill name="JAVA" x="-180px" y="120px"/>
          <Skill name="Spring" x="-490px" y="50px"/>
          <Skill name="MySql" x="-200px" y="260px"/>
          <Skill name="MongoDb" x="110px" y="260px"/>
         </div>
        </>
    )
}

export default Skills