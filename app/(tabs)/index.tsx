import {
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  View,
  ImageBackground,
  Platform,
} from "react-native";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context";
import Title from "@/components/Title";
import Main from "@/components/Main";
import ResetButton from "@/components/ResetButton";
import { resetGame } from "@/store/gameSlice";
import { persistor } from "@/store/index";

import i18next from "i18next";

export default function Index() {
  const [resetKey, setResetKey] = useState(0);
  const dispatch = useDispatch();

  const onReset = async () => {
    dispatch(resetGame());
    await persistor.purge();
    setResetKey((k) => k + 1);
  };
  return (
    <KeyboardAvoidingView className="flex-1 font-quicksand">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <ImageBackground
          source={require("../../assets/images/spy.png")}
          resizeMode="cover"
          style={{ flex: 1 }}
          imageStyle={{ opacity: 0.9 }}
        >
          <SafeAreaView className={"flex-1"}>
            <View
              className={
                "flex-1 justify-between font-quicksand-semibold ios:opacity-[0.95]"
              }
            >
              <View
                style={{
                  backgroundColor: Platform.OS === "ios" ? "#EEEEEE" : "#fff",
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 4 },
                  shadowOpacity: 0.1,
                  shadowRadius: 20,
                  elevation: 30,
                }}
                className={" rounded-2xl shadow-lg p-2 m-4"}
              >
                <View className="relative h-12 justify-center">
                  <View className="absolute left-0 right-0 items-center">
                    <Title title={i18next.t("home.gameTitle")} />
                  </View>
                  <ResetButton
                    iconName="restart"
                    className="absolute right-2 top-1 py-2 px-2 mb-0"
                    onPress={onReset}
                  />
                </View>
                <Main key={resetKey} />
              </View>
            </View>
          </SafeAreaView>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
