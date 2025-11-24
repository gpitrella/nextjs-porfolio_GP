'use client';

import React, { useMemo } from 'react';
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  className?: string;
}

const quote = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};

const singleWord = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = "" }) => {
  // Memoize split to avoid recalculation on every render
  const words = useMemo(() => text.split(" "), [text]);

  return (
    <div className={cn(
      'w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden dark:text-light sm:py-0'
    )}>
      <motion.h1
        // @ts-expect-error - framer-motion types issue with className
        className={cn(
          'inline-block w-full text-dark font-bold capitalize text-8xl dark:text-light',
          className
        )}
        variants={quote}
        initial="initial"
        animate="animate"
      >
        {words.map((word, index) => (
          <motion.span
            key={`${word}-${index}`}
            // @ts-expect-error - framer-motion types issue with className
            className="inline-block"
            variants={singleWord}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;

