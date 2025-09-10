import { Tile } from "@/components/Tile";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import i18next from "i18next";

const LanguageScreen = () => {
  return (
    <SafeAreaView className="flex-1">
      <View className="justify-center items-center w-full px-4">
        <Text className="text-gray-600 text-lg font-medium">
          Choose your preferred language
        </Text>
        <View className={"px-2 bg-white rounded-xl w-full mt-2"}>
          <Tile
            label="English"
            visible={false}
            onPress={() => i18next.changeLanguage("en")}
          />
          <Tile
            label="Persian"
            visible={false}
            onPress={() => i18next.changeLanguage("fa")}
          />
          <Tile
            label="Svenska"
            visible={false}
            onPress={() => i18next.changeLanguage("sv")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LanguageScreen;
