import {
  ImageBackground,
  Modal,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { hideRole, resetGame, showRole } from "@/store/gameSlice";
import PrimaryButton from "./PrimaryButton";
import { GameResultsModalProps } from "@/types";

import i18next from "i18next";
import React from "react";
import Card from "@/components/Card";

const WORD_BOX_HEIGHT = 60;

const GameResultsModal: React.FC<GameResultsModalProps> = ({
  visible,
  onClose,
}) => {
  const dispatch = useDispatch();
  const {
    category,
    spies,
    insiders,
    word,
    currentRole,
    showWord,
    roles,
    loading,
    error,
  } = useSelector((state: RootState) => state.game);

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={false}
      onRequestClose={onClose}
      presentationStyle="pageSheet"
    >
      <ImageBackground
        source={require("../assets/images/spy.png")}
        resizeMode="cover"
        className="w-full"
        style={{ flex: 1 }}
        imageStyle={{ opacity: 0.5 }}
      >
        <SafeAreaView className="flex-1">
          <ScrollView
            contentContainerStyle={{
              flexGrow: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
            keyboardShouldPersistTaps="handled"
            className="flex-1"
          >
            <Card className="w-full max-w-[400px] m-4">
              <View className="flex-row items-center justify-between mb-4">
                <Text className="font-quicksand-bold text-lg">
                  {i18next.t("home.gameResultsModal.title")}
                </Text>
                <TouchableOpacity
                  accessible
                  accessibilityRole="button"
                  accessibilityLabel="Close and reset game"
                  onPress={() => dispatch(resetGame())}
                >
                  <Text className="text-blue-600 font-quicksand-semibold">
                    ✕
                  </Text>
                </TouchableOpacity>
              </View>

              <View className="items-center w-full">
                {loading && <Text>Loading...</Text>}
                {error && <Text className="text-red-600">{error}</Text>}
                {!loading && (
                  <>
                    <Text className="font-quicksand-semibold text-2xl">
                      {i18next.t("home.category")}: {category}
                    </Text>
                    <Text className="font-quicksand-semibold text-2xl">
                      {i18next.t("home.insiders")}: {insiders}
                    </Text>
                    <Text className="font-quicksand-semibold text-2xl">
                      {i18next.t("home.spies")}: {spies}
                    </Text>
                    <Text className="font-quicksand-semibold text-2xl">
                      {i18next.t("home.gameResultsModal.totalPlayers")}:{" "}
                      {insiders + spies}
                    </Text>
                    <View className="my-4">
                      <Text className="mb-2 font-quicksand-semibold text-2xl">
                        {i18next.t("home.gameResultsModal.playersLeft")}:{" "}
                        {roles.length + (currentRole ? 1 : 0)}
                      </Text>
                    </View>

                    <View
                      className="items-center justify-center w-full"
                      style={{ minHeight: WORD_BOX_HEIGHT, marginBottom: 16 }}
                    >
                      {showWord ? (
                        <>
                          <Text className="text-2xl font-quicksand-semibold">
                            {currentRole === "insider"
                              ? word
                              : i18next.t("home.spies")}
                          </Text>
                          <Text className="mt-2 font-quicksand-semibold text-gray-500">
                            ({currentRole?.toUpperCase()})
                          </Text>
                        </>
                      ) : (
                        <View style={{ height: WORD_BOX_HEIGHT }} />
                      )}
                    </View>

                    <View className="flex-row items-center justify-center w-full">
                      {roles.length > 0 || showWord ? (
                        <PrimaryButton
                          title={
                            showWord
                              ? `${i18next.t("home.gameResultsModal.hide")}`
                              : `${i18next.t("home.gameResultsModal.show")}`
                          }
                          className="w-full mt-2"
                          onPress={() => {
                            if (showWord) {
                              dispatch(hideRole());
                            } else {
                              dispatch(showRole());
                            }
                          }}
                        />
                      ) : (
                        roles.length === 0 &&
                        !showWord && (
                          <PrimaryButton
                            title={i18next.t("home.gameResultsModal.resetGame")}
                            className="w-full mt-2 bg-red-600"
                            onPress={() => dispatch(resetGame())}
                          />
                        )
                      )}
                    </View>
                  </>
                )}
              </View>
            </Card>
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    </Modal>
  );
};

export default GameResultsModal;
