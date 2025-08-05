import { View, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { SettingTile } from "@/components/SettingTile";

const Index = ({ navigation }: any) => {
  return (
    <SafeAreaView className={"flex-1"}>
      <ScrollView className="flex-1">
        <View className={"pt-4 px-2"}>
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
            onPress={() => navigation.navigate("About")}
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
