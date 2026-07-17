"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}

const directionMap = {
  up: "translate3d(0, 24px, 0)",
  down: "translate3d(0, -24px, 0)",
  left: "translate3d(24px, 0, 0)",
  right: "translate3d(-24px, 0, 0)",
  none: "translate3d(0, 0, 0)",
};

export default function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const offset = directionMap[direction];

  return (
    <motion.div
      className={className}
      initial={
        shouldReduceMotion ? false : { opacity: 0, transform: offset }
      }
      whileInView={
        shouldReduceMotion
          ? undefined
          : { opacity: 1, transform: "translate3d(0, 0, 0)" }
      }
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
