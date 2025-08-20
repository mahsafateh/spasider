import { View, Keyboard, ScrollView, Platform, Alert } from "react-native";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startGame, fetchWord } from "@/store/gameSlice";
import type { AppDispatch, RootState } from "@/store";
import FloatingLabelInput from "./FloatingLabelInput";
import FloatingLabelPicker from "@/components/FloatingLabelPicker";
import PrimaryButton from "./PrimaryButton";

function Main() {
  const [insiderInputValue, setInsiderInputValue] = useState("");
  const [spyInputValue, setSpyInputValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const gameStarted = useSelector((state: RootState) => state.game.gameStarted);
  const loading = useSelector((state: RootState) => state.game.loading);

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
          minValue={1}
        />

        <FloatingLabelInput
          label="Insiders"
          value={insiderInputValue}
          onChangeText={setInsiderInputValue}
          minValue={1}
        />
      </View>
      <PrimaryButton
        title={"Start 🎲"}
        disabled={loading || gameStarted}
        onPress={() => {
          Keyboard.dismiss();
          if (!selectedCategory || !spyInputValue || !insiderInputValue)
            return Alert.alert("Empty Input!", "Fill all inputs, try again", [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel",
              },
              { text: "OK", onPress: () => console.log("OK Pressed") },
            ]);
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
