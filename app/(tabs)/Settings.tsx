import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Settings = () => {
  return (
    <SafeAreaView className={"flex-1"}>
      <View className="flex-1">
        <Text>Settings</Text>
      </View>
    </SafeAreaView>
  );
};
export default Settings;
