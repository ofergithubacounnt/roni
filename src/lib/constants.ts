export const BUSINESS = {
  name: { he: "רוני הצבעי", en: "Roni HaTzabai" },
  owner: { he: "רוני אדרי", en: "Roni Adri" },
  phone: "050-8898584",
  phoneIntl: "+972508898584",
  email: "ron997@hotmail.co.il",
  address: {
    he: "לבונה 17/4, מודיעין",
    en: "Levona 17/4, Modi'in, Israel",
  },
  whatsappUrl: `https://wa.me/972508898584?text=${encodeURIComponent("שלום, אשמח לקבל הצעת מחיר")}`,
  callUrl: "tel:+972508898584",
  experience: 20,
  discountEmpty: 30,
} as const;

export const LOCALES = ["he", "en"] as const;
export type Locale = (typeof LOCALES)[number];
