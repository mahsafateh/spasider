import { View } from "react-native";
import { useState } from "react";
import FloatingLabelInput from "./FloatingLabelInput";
import FloatingLabelPicker from "@/components/FloatingLabelPicker";
import PrimaryButton from "./PrimaryButton";

function Main() {
  const [insiderInputValue, setInsiderInputValue] = useState("");
  const [spyInputValue, setSpyInputValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <View className={"flex-1 px-2 items-center"}>
      <View className={"rounded-lg p-4 mb-2 w-full max-w-md"}>
        <FloatingLabelPicker
          label='Category'
          value={selectedCategory}
          onValueChange={setSelectedCategory}
        />

        <FloatingLabelInput
          label='Spies'
          value={spyInputValue}
          onChangeText={setSpyInputValue}
        />

        <FloatingLabelInput
          label='Insiders'
          value={insiderInputValue}
          onChangeText={setInsiderInputValue}
        />
      </View>
      <PrimaryButton onPress={() => console.log("Show pressed")} />
    </View>
  );
}

export default Main;
