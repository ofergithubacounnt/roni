"use client";

import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

interface GalleryFilterProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const filters = [
  { key: "all", translationKey: "filterAll" },
  { key: "apartments", translationKey: "filterApartments" },
  { key: "offices", translationKey: "filterOffices" },
  { key: "moisture", translationKey: "filterMoisture" },
  { key: "spackle", translationKey: "filterSpackle" },
];

export function GalleryFilter({
  activeFilter,
  onFilterChange,
}: GalleryFilterProps) {
  const t = useTranslations("gallery");

  return (
    <div className="flex flex-wrap justify-center gap-2 mb-10">
      {filters.map((filter) => (
        <button
          key={filter.key}
          onClick={() => onFilterChange(filter.key)}
          className={cn(
            "px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer",
            activeFilter === filter.key
              ? "text-white shadow-md"
              : "bg-surface-muted text-ink-secondary hover:bg-surface-light"
          )}
          style={
            activeFilter === filter.key
              ? {
                  background:
                    "linear-gradient(135deg, #FF3B3B, #FF8C42, #FFD93D, #6BCB77, #45B7D1, #4D96FF, #6C5CE7, #A855F7)",
                  backgroundSize: "300% 300%",
                  animation: "rainbow-shift 6s ease infinite",
                }
              : undefined
          }
        >
          {t(filter.translationKey)}
        </button>
      ))}
    </div>
  );
}
