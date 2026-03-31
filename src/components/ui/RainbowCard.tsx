"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface RainbowCardProps {
  children: ReactNode;
  className?: string;
  accentColor?: string;
  hoverGlow?: boolean;
}

export function RainbowCard({
  children,
  className,
  accentColor,
  hoverGlow = true,
}: RainbowCardProps) {
  return (
    <motion.div
      className={cn(
        "relative bg-white rounded-2xl p-6 shadow-sm transition-all duration-300 overflow-hidden",
        hoverGlow && "hover:shadow-xl hover:-translate-y-1",
        className
      )}
      whileHover={hoverGlow ? { y: -4 } : undefined}
    >
      {accentColor && (
        <div
          className="absolute top-0 inset-x-0 h-1 rounded-t-2xl"
          style={{ backgroundColor: accentColor }}
        />
      )}
      {children}
    </motion.div>
  );
}
