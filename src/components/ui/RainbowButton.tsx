"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ReactNode, ButtonHTMLAttributes } from "react";

interface RainbowButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  variant?: "filled" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
}

export function RainbowButton({
  children,
  className,
  variant = "filled",
  size = "md",
  href,
  ...props
}: RainbowButtonProps) {
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const baseClasses = cn(
    "relative inline-flex items-center justify-center font-bold rounded-full transition-all duration-300 cursor-pointer",
    sizeClasses[size],
    variant === "filled"
      ? "text-white overflow-hidden"
      : "bg-white text-ink-primary",
    className
  );

  const content = (
    <motion.span
      className={baseClasses}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {variant === "filled" && (
        <span
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "linear-gradient(135deg, #FF3B3B, #FF8C42, #FFD93D, #6BCB77, #45B7D1, #4D96FF, #6C5CE7, #A855F7)",
            backgroundSize: "300% 300%",
            animation: "rainbow-shift 6s ease infinite",
          }}
        />
      )}
      {variant === "outline" && (
        <span
          className="absolute inset-0 rounded-full p-[2px]"
          style={{
            background:
              "linear-gradient(135deg, #FF3B3B, #FF8C42, #FFD93D, #6BCB77, #45B7D1, #4D96FF, #6C5CE7, #A855F7)",
            backgroundSize: "300% 300%",
            animation: "rainbow-shift 6s ease infinite",
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          }}
        />
      )}
      <span className="relative z-10">{children}</span>
    </motion.span>
  );

  if (href) {
    return (
      <a href={href} className="inline-block">
        {content}
      </a>
    );
  }

  return (
    <button {...props} className="inline-block">
      {content}
    </button>
  );
}
