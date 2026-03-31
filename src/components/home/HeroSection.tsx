"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import { RainbowButton } from "@/components/ui/RainbowButton";
import { Link } from "@/i18n/navigation";
import { Award, Users, Clock, Paintbrush } from "lucide-react";

export function HeroSection() {
  const t = useTranslations("hero");

  const badges = [
    { icon: Award, label: t("badge1") },
    { icon: Users, label: t("badge2") },
    { icon: Clock, label: t("badge3") },
    { icon: Paintbrush, label: t("badge4") },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Image
        src="/images/hero_desktop.png"
        alt=""
        fill
        priority
        className="object-cover hidden md:block"
        sizes="100vw"
      />
      <Image
        src="/images/hero_mobile.png"
        alt=""
        fill
        priority
        className="object-cover md:hidden"
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-white/70 md:bg-white/60" />

      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,59,59,0.15), rgba(255,140,66,0.1), rgba(255,217,61,0.1), rgba(107,203,119,0.1), rgba(69,183,209,0.1), rgba(77,150,255,0.15), rgba(108,92,231,0.1), rgba(168,85,247,0.15))",
          backgroundSize: "400% 400%",
          animation: "rainbow-shift 12s ease infinite",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logo.png"
            alt="Roni HaTzabai Logo"
            className="mx-auto w-48 md:w-64 h-auto object-contain mb-4 drop-shadow-[0_2px_10px_rgba(0,0,0,0.15)]"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 rainbow-text leading-tight">
            {t("title")}
          </h1>
        </motion.div>

        <motion.p
          className="text-xl sm:text-2xl md:text-3xl text-ink-primary font-medium mb-4 drop-shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {t("subtitle")}
        </motion.p>

        <motion.p
          className="text-base sm:text-lg text-ink-secondary mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {t("area")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-14"
        >
          <Link href="/contact">
            <RainbowButton size="lg">{t("cta")}</RainbowButton>
          </Link>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {badges.map((badge, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center gap-2 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-sm border border-white/50"
              whileHover={{ y: -4, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
            >
              <badge.icon className="w-6 h-6 text-rainbow-blue" />
              <span className="text-sm font-semibold text-ink-primary text-center">
                {badge.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
