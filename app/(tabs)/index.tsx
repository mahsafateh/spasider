import {
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context";
import Title from "@/components/Title";
import Main from "@/components/Main";
import ResetButton from "@/components/ResetButton";
import { resetGame } from "@/store/gameSlice";
import { persistor } from "@/store";

import { useTranslation } from "react-i18next";
import Card from "@/components/Card";

export default function Index() {
  const { t } = useTranslation();
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
            <View className={"flex-1 ios:opacity-[0.96]"}>
              <Card className={"p-2 m-4"}>
                <View className="relative h-12 justify-center">
                  <View className="absolute left-0 right-0 items-center">
                    <Title title={t("home.gameTitle")} />
                  </View>
                  <ResetButton
                    iconName="restart"
                    className="absolute right-2 top-1"
                    onPress={onReset}
                  />
                </View>
              </Card>
              <Main key={resetKey} />
            </View>
          </SafeAreaView>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
