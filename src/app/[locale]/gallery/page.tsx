"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { GalleryFilter } from "@/components/gallery/GalleryFilter";
import { galleryImages } from "@/lib/gallery-data";

export default function GalleryPage() {
  const t = useTranslations("gallery");
  const [activeFilter, setActiveFilter] = useState("all");

  return (
    <section className="pt-32 pb-20 md:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h1
            className="text-4xl sm:text-5xl font-black mb-4 rainbow-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {t("title")}
          </motion.h1>
          <motion.p
            className="text-lg text-ink-secondary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t("subtitle")}
          </motion.p>
          <motion.div
            className="rainbow-divider w-24 mx-auto mt-6"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
        </div>

        <GalleryFilter
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />

        <GalleryGrid images={galleryImages} activeFilter={activeFilter} />
      </div>
    </section>
  );
}
