import i18n from "@/lib/i18n";
import { TFunction } from "i18next";

import enData from "@/data/english-words.json";
import faData from "@/data/persian-words.json";
import svData from "@/data/swedish-words.json";

type CategoryData = { name: string; words: string[] };
type LanguageData = { categories: CategoryData[] };

const languageCodeToData: Record<string, LanguageData> = {
  en: enData as LanguageData,
  fa: faData as LanguageData,
  sv: svData as LanguageData,
};

const canonicalCategoryKeys = [
  "sport",
  "animal",
  "things",
  "landmark",
  "profession",
  "fruitAndVegetables",
  "movieAndSerial",
  "cityAndCountry",
  "foodAndCuisine",
  "mixedCategory",
] as const;
type CanonicalKey = (typeof canonicalCategoryKeys)[number];

const jsonCategoryNameByLang: Record<string, Record<CanonicalKey, string>> = {
  en: {
    sport: "Sports",
    animal: "Animal",
    things: "Things",
    landmark: "Landmark",
    profession: "Profession",
    fruitAndVegetables: "Fruit And Vegetables",
    movieAndSerial: "Movie And Serial",
    cityAndCountry: "City and Country",
    foodAndCuisine: "Food and Cuisine",
    mixedCategory: "Mixed Category",
  },
  fa: {
    // Names as present in persian-words.json
    sport: "Sports",
    animal: "Animal",
    things: "Things",
    landmark: "Landmark",
    profession: "Profession",
    fruitAndVegetables: "Fruit and Vegetables",
    movieAndSerial: "Movie and Serial",
    cityAndCountry: "City and Country",
    foodAndCuisine: "Food and Cuisine",
    mixedCategory: "Mixed Category",
  },
  sv: {
    sport: "Sport",
    animal: "Animal",
    things: "Things",
    landmark: "Landmark",
    profession: "Profession",
    fruitAndVegetables: "Fruit And Vegetables",
    movieAndSerial: "Movie And Serial",
    cityAndCountry: "City And Country",
    foodAndCuisine: "Food And Cuisine",
    mixedCategory: "Mixed Category",
  },
};

export const resolveCanonicalKeyFromDisplayName = (
  displayName: string,
): CanonicalKey | null => {
  for (const key of canonicalCategoryKeys) {
    const translated = i18n.t(`home.categories.${key}`);
    if (translated === displayName) return key;
  }
  return null;
};

export const getWordsForCategoryDisplayName = (
  displayName: string,
): string[] => {
  const currentLang = (i18n.language || i18n.resolvedLanguage || "en").split(
    "-",
  )[0];
  const data = languageCodeToData[currentLang] ?? languageCodeToData.en;
  const map = jsonCategoryNameByLang[currentLang] ?? jsonCategoryNameByLang.en;

  const canonicalKey = resolveCanonicalKeyFromDisplayName(displayName);
  if (!canonicalKey) return [];

  const jsonName = map[canonicalKey];
  const category = data.categories.find((c) => c.name === jsonName);
  return category?.words ?? [];
};

export const buildCategories = (t: TFunction) => [
  { name: t("home.categories.fruitAndVegetables"), id: "1" },
  { name: t("home.categories.landmark"), id: "2" },
  { name: t("home.categories.animal"), id: "3" },
  { name: t("home.categories.movieAndSerial"), id: "4" },
  { name: t("home.categories.cityAndCountry"), id: "5" },
  { name: t("home.categories.foodAndCuisine"), id: "6" },
  { name: t("home.categories.sport"), id: "7" },
  { name: t("home.categories.things"), id: "8" },
  { name: t("home.categories.profession"), id: "9" },
  { name: t("home.categories.mixedCategory"), id: "10" },
];
