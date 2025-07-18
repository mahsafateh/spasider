import {
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Title from "@/components/Title";
import Main from "@/components/Main";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { showRole, hideRole, resetGame } from "../store/gameSlice";
import GamePanel from "@/components/GamePanel";

export default function Index() {
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

  return (
    <KeyboardAvoidingView className='flex-1 bg-main '>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <SafeAreaView className={"flex-1"}>
          <View className={"flex-1 justify-between pb-12"}>
            <View
              className={
                "h-1/2 bg-backgroundMain rounded-2xl shadow-lg p-4 m-4"
              }
            >
              <Title title={"Spy & Insider"} />
              <Main />
            </View>
            <View className={"flex-auto justify-center items-center"}>
              <GamePanel />
            </View>
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
