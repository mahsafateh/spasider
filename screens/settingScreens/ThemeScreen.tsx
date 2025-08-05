import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const ThemeScreen = () => {
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 justify-center items-center">
        <Text className="text-lg font-medium">Theme Settings</Text>
        <Text className="text-gray-600 mt-2">Choose your preferred theme</Text>
      </View>
    </SafeAreaView>
  );
};

export default ThemeScreen;
