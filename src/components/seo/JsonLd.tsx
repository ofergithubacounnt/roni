export function LocalBusinessJsonLd({ locale }: { locale: string }) {
  const isHe = locale === "he";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://roni.co.il",
    name: isHe ? "רוני הצבעי" : "Roni HaTzabai",
    alternateName: "Roni Adri Painting Services",
    description: isHe
      ? "עבודות שפכטל וצבע מקצועיות במודיעין והסביבה. 20 שנות ניסיון."
      : "Professional painting and spackling services in Modi'in. 20 years experience.",
    url: "https://roni.co.il",
    telephone: "+972-50-889-8584",
    email: "ron997@hotmail.co.il",
    address: {
      "@type": "PostalAddress",
      streetAddress: isHe ? "לבונה 17/4" : "Levona 17/4",
      addressLocality: isHe ? "מודיעין" : "Modi'in",
      addressCountry: "IL",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 31.897,
      longitude: 35.005,
    },
    areaServed: [
      {
        "@type": "City",
        name: isHe ? "מודיעין-מכבים-רעות" : "Modi'in-Maccabim-Re'ut",
      },
      {
        "@type": "AdministrativeArea",
        name: isHe ? "אזור השפלה" : "Shfela Region",
      },
    ],
    priceRange: "$$",
    serviceType: [
      isHe ? "צביעת דירות" : "Apartment Painting",
      isHe ? "שפכטל אמריקאי" : "American Spackle",
      isHe ? "תיקוני רטיבות ועובש" : "Moisture & Mold Repair",
      isHe ? "צביעת משרדים" : "Office Painting",
    ],
    foundingDate: "2005",
    founder: {
      "@type": "Person",
      name: isHe ? "רוני אדרי" : "Roni Adri",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
