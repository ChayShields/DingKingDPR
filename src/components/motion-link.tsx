"use client";

import { motion, type HTMLMotionProps } from "motion/react";

export function MotionLink({
  children,
  whileHover = { scale: 1.03 },
  ...props
}: HTMLMotionProps<"a">) {
  return (
    <motion.a whileHover={whileHover} whileTap={{ scale: 0.97 }} {...props}>
      {children}
    </motion.a>
  );
}
