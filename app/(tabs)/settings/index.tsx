import { View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SettingTile } from "@/components/SettingTile";
import Title from "@/components/Title";

const Index = ({ navigation }: any) => {
  return (
    <SafeAreaView className={"flex-1"}>
      <ScrollView className="flex-1 px-4 pt-4">
        <View className={"px-2 bg-white rounded-xl"}>
          <SettingTile
            icon="language"
            label="Language"
            onPress={() => navigation.navigate("Language")}
          />
          <SettingTile
            icon="color-palette-outline"
            label="Theme"
            onPress={() => navigation.navigate("Theme")}
          />
          <SettingTile
            icon="information-circle-outline"
            label="About"
            onPress={() => navigation.navigate("AboutScreen")}
          />
          <SettingTile
            icon="cloud-download-outline"
            label="Software Update"
            onPress={() => navigation.navigate("SoftwareUpdates")}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Index;
