import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { NativeModules, Platform } from "react-native";

import en from "@/locales/en/translation.json";
import fa from "@/locales/fa/translation.json";
import sv from "@/locales/sv/translation.json";

// Get device language for React Native
const getDeviceLanguage = () => {
  if (Platform.OS === "ios") {
    return (
      NativeModules.SettingsManager.settings.AppleLocale ||
      NativeModules.SettingsManager.settings.AppleLanguages[0]
    );
  } else {
    return NativeModules.I18nManager.localeIdentifier;
  }
};

const deviceLanguage = getDeviceLanguage();
const languageCode = deviceLanguage?.split(/[-_]/)[0] || "en";

i18n.use(initReactI18next).init({
  lng: languageCode,
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
