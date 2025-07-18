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

export default function Index() {
  const [response, setResponse] = useState("test");

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
              <Text>{response}</Text>
            </View>
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
