import { motion } from "framer-motion";

const Skill = ({ name }) => {
    return (
      <motion.div
        className="flex items-center justify-center rounded-full font-semibold bg-dark text-light 
            py-3 px-6 shadow-dark cursor-pointer dark:text-dark dark:bg-light
            lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold"
            whileHover={{ scale: 1.03, shadow: true }}
            viewport={{ once: true }}
        >
        {name}
      </motion.div>
    );
};

export default Skill;