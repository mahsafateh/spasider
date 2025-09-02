import { View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SettingTile } from "@/components/SettingTile";

import i18next from "i18next";

const Index = ({ navigation }: any) => {
  return (
    <SafeAreaView className={"flex-1"}>
      <ScrollView className="flex-1 px-4 pt-4">
        <View className={"px-2 bg-white rounded-xl"}>
          <SettingTile
            icon="language"
            label={i18next.t("settings.language")}
            onPress={() => navigation.navigate("Language")}
          />
          <SettingTile
            icon="color-palette-outline"
            label={i18next.t("settings.theme")}
            onPress={() => navigation.navigate("Theme")}
          />
          <SettingTile
            icon="information-circle-outline"
            label={i18next.t("settings.about")}
            onPress={() => navigation.navigate("About")}
          />
          <SettingTile
            icon="cloud-download-outline"
            label={i18next.t("settings.softwareUpdates")}
            onPress={() => navigation.navigate("SoftwareUpdates")}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Index;
