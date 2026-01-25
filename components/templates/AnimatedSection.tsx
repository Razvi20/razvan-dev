"use client";

import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";
import type { HTMLMotionProps } from "framer-motion";

// Dynamic import of Framer Motion to reduce initial bundle size
const MotionDiv = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.div),
  { ssr: false }
);

interface AnimatedSectionProps extends Omit<HTMLMotionProps<"div">, "ref"> {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: "fadeUp" | "fadeIn" | "scaleIn";
  once?: boolean;
}

const animations = {
  fadeUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  },
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
  },
};

export function AnimatedSection({
  children,
  className,
  delay = 0,
  animation = "fadeUp",
  once = true,
  ...props
}: AnimatedSectionProps) {
  const { initial, animate } = animations[animation];

  return (
    <MotionDiv
      initial={initial}
      whileInView={animate}
      viewport={{ once }}
      transition={{ duration: 0.5, delay }}
      className={cn(className)}
      {...props}
    >
      {children}
    </MotionDiv>
  );
}

// Animated wrapper for hero section (no viewport trigger)
export function AnimatedHero({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className={cn(className)}
    >
      {children}
    </MotionDiv>
  );
}
