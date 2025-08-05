import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const LanguageScreen = () => {
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 justify-center items-center">
        <Text className="text-lg font-medium">Language Settings</Text>
        <Text className="text-gray-600 mt-2">
          Choose your preferred language
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default LanguageScreen;
