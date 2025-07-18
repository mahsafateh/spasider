import { View } from "react-native";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startGame, fetchWord } from "../store/gameSlice";
import type { AppDispatch } from "../store";
import FloatingLabelInput from "./FloatingLabelInput";
import FloatingLabelPicker from "@/components/FloatingLabelPicker";
import PrimaryButton from "./PrimaryButton";
import { Keyboard } from "react-native";

function Main() {
  const [insiderInputValue, setInsiderInputValue] = useState("");
  const [spyInputValue, setSpyInputValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const gameStarted = useSelector((state: any) => state.game.gameStarted);

  // Reset inputs when game is reset
  useEffect(() => {
    if (!gameStarted) {
      setInsiderInputValue("");
      setSpyInputValue("");
      setSelectedCategory("");
    }
  }, [gameStarted]);

  return (
    <View className={"flex-1 px-2 items-center"}>
      <View className={"rounded-lg p-4 mb-2 w-full max-w-md"}>
        <FloatingLabelPicker
          label='Category'
          value={selectedCategory}
          onValueChange={setSelectedCategory}
        />

        <FloatingLabelInput
          label='Spies'
          value={spyInputValue}
          onChangeText={setSpyInputValue}
        />

        <FloatingLabelInput
          label='Insiders'
          value={insiderInputValue}
          onChangeText={setInsiderInputValue}
        />
      </View>
      <PrimaryButton
        onPress={() => {
          Keyboard.dismiss();
          if (!selectedCategory || !spyInputValue || !insiderInputValue) return;
          const spies = parseInt(spyInputValue, 10);
          const insiders = parseInt(insiderInputValue, 10);
          dispatch(startGame({ category: selectedCategory, spies, insiders }));
          dispatch(fetchWord(selectedCategory));
        }}
      />
    </View>
  );
}

export default Main;
