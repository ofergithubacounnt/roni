export interface GalleryImage {
  src: string;
  alt_he: string;
  alt_en: string;
  category: "apartments" | "offices" | "moisture" | "spackle";
  width: number;
  height: number;
}

export interface ServiceCard {
  key: string;
  color: string;
  icon: string;
}
