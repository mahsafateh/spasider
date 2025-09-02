import { View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Tile } from "@/components/Tile";

import i18next from "i18next";

const Index = ({ navigation }: any) => (
  <SafeAreaView className={"flex-1"}>
    <ScrollView className="flex-1 px-4 pt-4">
      <View className={"px-2 bg-white rounded-xl"}>
        <Tile
          icon="language"
          label={i18next.t("settings.language")}
          onPress={() => navigation.navigate("Language")}
          visible={true}
        />
        <Tile
          icon="color-palette-outline"
          label={i18next.t("settings.theme")}
          onPress={() => navigation.navigate("Theme")}
          visible={true}
        />
        <Tile
          icon="information-circle-outline"
          label={i18next.t("settings.about")}
          onPress={() => navigation.navigate("About")}
          visible={true}
        />
        <Tile
          icon="cloud-download-outline"
          label={i18next.t("settings.softwareUpdates")}
          onPress={() => navigation.navigate("SoftwareUpdates")}
          visible={true}
        />
      </View>
    </ScrollView>
  </SafeAreaView>
);
export default Index;
