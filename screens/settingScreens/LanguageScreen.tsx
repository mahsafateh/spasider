import { View, Text, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const LanguageScreen = () => {
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 justify-center items-center">
        <Text className="text-gray-600 text-lg font-medium">
          Choose your preferred language
        </Text>

        <Button title="English" />
        <Button title="Persian" />
        <Button title="Svenska" />
      </View>
    </SafeAreaView>
  );
};

export default LanguageScreen;
