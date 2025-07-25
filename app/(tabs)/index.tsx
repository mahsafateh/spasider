import {
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Title from "@/components/Title";
import Main from "@/components/Main";
import GamePanel from "@/components/GamePanel";

export default function Index() {
  return (
    <KeyboardAvoidingView className="flex-1 bg-main font-quicksand">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <SafeAreaView className={"flex-1"}>
          <View className={"flex-1 justify-between font-quicksand-semibold"}>
            <View
              className={
                "h-3/5 bg-backgroundMain rounded-2xl shadow-lg p-2 m-4"
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
