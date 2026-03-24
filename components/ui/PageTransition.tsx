"use client";

import { motion } from "framer-motion";

const variants = {
  initial: {
    opacity: 0,
    filter: "brightness(0)",
  },
  animate: {
    opacity: 1,
    filter: "brightness(1)",
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
  exit: {
    opacity: 0,
    filter: "brightness(0)",
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 1, 1] as const,
    },
  },
};

export function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
}
