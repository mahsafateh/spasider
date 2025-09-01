import { RootState } from "./index";
import { categories } from "@/constants/index";

function shuffle<T>(items: T[]): T[] {
  const array = items.slice();
  let currentIndex = array.length;
  while (currentIndex !== 0) {
    const randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}

export const selectUnplayedWords = (_: RootState) => {
  return shuffle(categories);
};
