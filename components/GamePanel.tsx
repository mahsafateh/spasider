import React from "react";
import { View, Text, TouchableWithoutFeedback, ScrollView } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store";
import { showRole, hideRole, resetGame } from "@/store/gameSlice";

const WORD_BOX_HEIGHT = 60;

const GamePanel = () => {
  const dispatch = useDispatch();
  const {
    gameStarted,
    spies,
    insiders,
    word,
    currentRole,
    showWord,
    roles,
    loading,
    error,
  } = useSelector((state: RootState) => state.game);

  if (!gameStarted) return null;

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
      keyboardShouldPersistTaps="handled"
    >
      <View
        className={
          "flex-auto justify-center items-center min-h-[260px] w-full mt-8"
        }
        style={{ width: "100%", maxWidth: 400, alignSelf: "center" }}
      >
        {loading && <Text>Loading...</Text>}
        {error && <Text className="text-red-500">{error}</Text>}
        {!loading && (
          <View className="items-center w-full">
            <Text className={"font-quicksand-semibold text-2xl"}>
              Insiders: {insiders}
            </Text>
            <Text className={"font-quicksand-semibold text-2xl"}>
              Spies: {spies}
            </Text>
            <Text className={"font-quicksand-semibold text-2xl"}>
              Total Players: {insiders + spies}
            </Text>
            <View className="my-4">
              <Text className="mb-2 font-quicksand-semibold text-2xl">
                Players left: {roles.length + (currentRole ? 1 : 0)}
              </Text>
            </View>
            <View
              className="items-center justify-center w-full"
              style={{ minHeight: WORD_BOX_HEIGHT, marginBottom: 16 }}
            >
              {showWord ? (
                <>
                  <Text className="text-2xl font-quicksand-semibold">
                    {currentRole === "insider" ? word : "SPY"}
                  </Text>
                  <Text className="mt-2 font-quicksand-semibold text-gray-500">
                    ({currentRole?.toUpperCase()})
                  </Text>
                </>
              ) : (
                // Empty space to reserve height
                <View style={{ height: WORD_BOX_HEIGHT }} />
              )}
            </View>
            <View className="flex-row items-center justify-center w-full">
              {roles.length > 0 || showWord ? (
                <TouchableWithoutFeedback
                  onPress={() => {
                    if (showWord) {
                      dispatch(hideRole());
                    } else {
                      dispatch(showRole());
                    }
                  }}
                >
                  <View className="bg-blue-500 px-6 py-2 rounded-full">
                    <Text className="text-white text-lg font-quicksand-semibold">
                      {showWord ? "Hide" : "Show"}
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
              ) : (
                roles.length === 0 &&
                !showWord && (
                  <TouchableWithoutFeedback
                    onPress={() => dispatch(resetGame())}
                  >
                    <View className="bg-red-500 px-4 py-2 rounded-full">
                      <Text className="text-white font-quicksand-semibold">
                        Restart Game
                      </Text>
                    </View>
                  </TouchableWithoutFeedback>
                )
              )}
            </View>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default GamePanel;
