import { View, Keyboard, ScrollView, Platform, Alert } from "react-native";
import { useState, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startGame, fetchWord } from "@/store/gameSlice";
import type { AppDispatch, RootState } from "@/store";
import FloatingLabelInput from "@/components/FloatingLabelInput";
import FloatingLabelPicker from "@/components/FloatingLabelPicker";
import PrimaryButton from "@/components/PrimaryButton";
import GameResultsModal from "@/components/GameResultsModal";
import { buildCategories } from "@/constants";
import { useTranslation } from "react-i18next";
import Card from "@/components/Card";

type GameData = {
  insiders: number;
  spies: number;
  totalPlayers: number;
  playersLeft: number;
  playedWords: string[];
};

function Main() {
  const { t } = useTranslation();
  const [insiderInputValue, setInsiderInputValue] = useState("");
  const [spyInputValue, setSpyInputValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showResultsModal, setShowResultsModal] = useState(false);
  const [gameData, setGameData] = useState<GameData | null>(null);

  const dispatch = useDispatch<AppDispatch>();
  const gameStarted = useSelector((state: RootState) => state.game.gameStarted);
  const loading = useSelector((state: RootState) => state.game.loading);

  useEffect(() => {
    if (!gameStarted) {
      setInsiderInputValue("");
      setSpyInputValue("");
      setSelectedCategory("");
      setShowResultsModal(false);
    }
  }, [gameStarted]);

  const handleStart = () => {
    Keyboard.dismiss();

    if (!selectedCategory || !spyInputValue || !insiderInputValue) {
      return Alert.alert("Empty Input!", "Fill all inputs, try again", [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
    }

    const spies = parseInt(spyInputValue, 10);
    const insiders = parseInt(insiderInputValue, 10);

    const modalGameData: GameData = {
      insiders,
      spies,
      totalPlayers: insiders + spies,
      playersLeft: insiders + spies,
      playedWords: [],
    };

    setGameData(modalGameData);
    setShowResultsModal(true);

    dispatch(startGame({ category: selectedCategory, spies, insiders }));
    dispatch(fetchWord(selectedCategory));
  };

  return (
    <>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
        keyboardShouldPersistTaps="handled"
        className="flex-1"
      >
        <Card className="w-full max-w-[400px] bg-white">
          <View className="w-full">
            <FloatingLabelPicker
              label={t("home.category")}
              value={selectedCategory}
              onValueChange={setSelectedCategory}
              viewList={useMemo(() => buildCategories(t), [t])}
            />

            <FloatingLabelInput
              label={t("home.spies")}
              value={spyInputValue}
              onChangeText={setSpyInputValue}
              minValue={1}
            />

            <FloatingLabelInput
              label={t("home.insiders")}
              value={insiderInputValue}
              onChangeText={setInsiderInputValue}
              minValue={1}
            />
          </View>

          <PrimaryButton
            title={t("home.start")}
            disabled={loading || gameStarted}
            onPress={handleStart}
            accessibilityHint="Starts the game with the provided settings"
            className="w-full mt-2"
          />
        </Card>
      </ScrollView>

      {gameData && (
        <GameResultsModal
          visible={showResultsModal}
          onClose={() => setShowResultsModal(false)}
          gameData={gameData}
        />
      )}
    </>
  );
}

export default Main;
