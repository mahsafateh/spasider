import {
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  View,
  ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Title from "@/components/Title";
import Main from "@/components/Main";
import GamePanel from "@/components/GamePanel";

export default function Index() {
  return (
    <KeyboardAvoidingView className="flex-1 font-quicksand">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <ImageBackground 
        source={require('../../assets/images/spy.jpg')} 
        resizeMode='cover'
        style={{ flex: 1 }}
        imageStyle={{opacity: 0.7}}
      >
        <SafeAreaView className={"flex-1"}>
          <View className={"flex-1 justify-between font-quicksand-semibold opacity-[0.9]"}>
            <View
              className={
                "bg-backgroundMain rounded-2xl shadow-lg p-2 m-4"
              }
            >
              <Title title={"Spy & Insider"} />
              <Main />
              <GamePanel />
            </View>
          </View>
        </SafeAreaView>
          </ImageBackground>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
