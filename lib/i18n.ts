import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "@/locales/en/translation.json";
import fa from "@/locales/fa/translation.json";
import sv from "@/locales/sv/translation.json";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    lng: undefined,
    fallbackLng: "en",
    resources: {
      en: { translation: en },
      fa: { translation: fa },
      sv: { translation: sv },
    },
    supportedLngs: ["en", "fa", "sv"],
    interpolation: {
      escapeValue: false,
    },
    // detection: {
    //   order: ["localStorage", "navigator"],
    // }
  });

export default i18n;
