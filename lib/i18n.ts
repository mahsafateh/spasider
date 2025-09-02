import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "@/locales/en/translation.json";
import fa from "@/locales/fa/translation.json";
import sv from "@/locales/sv/translation.json";

i18n.use(initReactI18next).init({
  lng: "fa",
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
  react: {
    useSuspense: false,
  },
});

export default i18n;
