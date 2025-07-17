import {
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "@/components/Header";
import Main from "@/components/Main";

export default function Index() {
  return (
    <KeyboardAvoidingView className='flex-1 bg-main '>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <SafeAreaView className={"flex-1"}>
          <View className={"flex-1 justify-between"}>
            <View className={"h-1/2 bg-backgroundMain rounded-2xl shadow-lg p-4 m-4"}>
              <Header />
       
              <Main/>
            </View>
            <View className={'flex-auto justify-center items-center'}>
              <Text>word to show later on</Text>
            </View>
          </View>
        
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}


