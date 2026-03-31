"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export function AboutHero() {
  const t = useTranslations("about");

  return (
    <section className="relative py-32 md:py-40 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,59,59,0.06), rgba(77,150,255,0.06), rgba(168,85,247,0.06))",
          backgroundSize: "400% 400%",
          animation: "rainbow-shift 12s ease infinite",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 rainbow-text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {t("heroTitle")}
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-ink-secondary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {t("heroSubtitle")}
        </motion.p>
        <motion.div
          className="rainbow-divider w-24 mx-auto mt-8"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        />
      </div>
    </section>
  );
}
