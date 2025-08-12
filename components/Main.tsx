import { View, Keyboard, ScrollView, Platform } from "react-native";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startGame, fetchWord } from "@/store/gameSlice";
import type { AppDispatch } from "@/store";
import FloatingLabelInput from "./FloatingLabelInput";
import FloatingLabelPicker from "@/components/FloatingLabelPicker";
import PrimaryButton from "./PrimaryButton";

function Main() {
  const [insiderInputValue, setInsiderInputValue] = useState("");
  const [spyInputValue, setSpyInputValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const gameStarted = useSelector((state: any) => state.game.gameStarted);

  useEffect(() => {
    if (!gameStarted) {
      setInsiderInputValue("");
      setSpyInputValue("");
      setSelectedCategory("");
    }
  }, [gameStarted]);

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Platform.OS === "ios" ? "#EEEEEE" : "#fff",
      }}
      keyboardShouldPersistTaps="handled"
    >
      <View
        className={"rounded-lg p-4"}
        style={{ width: "100%", maxWidth: 400, alignSelf: "center" }}
      >
        <FloatingLabelPicker
          label="Category"
          value={selectedCategory}
          onValueChange={setSelectedCategory}
        />

        <FloatingLabelInput
          label="Spies"
          value={spyInputValue}
          onChangeText={setSpyInputValue}
        />

        <FloatingLabelInput
          label="Insiders"
          value={insiderInputValue}
          onChangeText={setInsiderInputValue}
        />
      </View>
      <PrimaryButton
        title={"Start 🎲"}
        onPress={() => {
          Keyboard.dismiss();
          if (!selectedCategory || !spyInputValue || !insiderInputValue) return;
          const spies = parseInt(spyInputValue, 10);
          const insiders = parseInt(insiderInputValue, 10);
          dispatch(startGame({ category: selectedCategory, spies, insiders }));
          dispatch(fetchWord(selectedCategory));
        }}
      />
    </ScrollView>
  );
}

export default Main;
