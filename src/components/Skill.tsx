'use client';

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SkillProps {
  name: string;
}

const Skill: React.FC<SkillProps> = ({ name }) => {
  return (
    <motion.div
      // @ts-expect-error - framer-motion types issue with className and role
      role="button"
      tabIndex={0}
      className={cn(
        "flex items-center justify-center rounded-full font-semibold bg-dark text-light",
        "py-3 px-6 shadow-dark cursor-pointer dark:text-dark dark:bg-light",
        "lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3",
        "xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold"
      )}
      whileHover={{ scale: 1.03 }}
      viewport={{ once: true }}
      aria-label={`Skill: ${name}`}
    >
      {name}
    </motion.div>
  );
};

export default Skill;

