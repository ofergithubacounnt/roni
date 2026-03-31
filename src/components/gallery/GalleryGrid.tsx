"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { motion, AnimatePresence } from "framer-motion";
import type { GalleryImage } from "@/types";

interface GalleryGridProps {
  images: GalleryImage[];
  activeFilter: string;
}

export function GalleryGrid({ images, activeFilter }: GalleryGridProps) {
  const t = useTranslations("gallery");
  const locale = useLocale();
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const filtered =
    activeFilter === "all"
      ? images
      : images.filter((img) => img.category === activeFilter);

  if (filtered.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-ink-muted text-lg">{t("noImages")}</p>
      </div>
    );
  }

  return (
    <>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        <AnimatePresence>
          {filtered.map((img, i) => (
            <motion.div
              key={img.src}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="break-inside-avoid cursor-pointer group"
              onClick={() => setLightboxIndex(i)}
            >
              <div className="relative rounded-2xl overflow-hidden bg-surface-muted">
                <Image
                  src={img.src}
                  alt={locale === "he" ? img.alt_he : img.alt_en}
                  width={img.width}
                  height={img.height}
                  loading="lazy"
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <Lightbox
        open={lightboxIndex >= 0}
        close={() => setLightboxIndex(-1)}
        index={lightboxIndex}
        slides={filtered.map((img) => ({
          src: img.src,
          alt: locale === "he" ? img.alt_he : img.alt_en,
          width: img.width,
          height: img.height,
        }))}
      />
    </>
  );
}
