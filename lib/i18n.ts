import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { I18nManager } from "react-native";

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

const applyLayoutDirection = (lang: string) => {
  const base = lang?.split("-")[0] || "en";
  const isRtlLang = base === "fa";
  if (I18nManager.isRTL !== isRtlLang) {
    I18nManager.allowRTL(true);
    I18nManager.forceRTL(isRtlLang);
  }
};

applyLayoutDirection(i18n.language || i18n.resolvedLanguage || "en");

i18n.on("languageChanged", (lng) => {
  applyLayoutDirection(lng);
});

export default i18n;
