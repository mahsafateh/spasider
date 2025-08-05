import { View, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { SettingTile } from "@/components/SettingTile";
import { useRouter } from "expo-router";

const Index = () => {
  const router = useRouter();
  return (
    <SafeAreaView className={"flex-1"}>
      <ScrollView className="flex-1">
        <View className={"pt-4 px-2"}>
          <SettingTile
            icon="language"
            label="Language"
            onPress={() => router.push("/(tabs)/settings/Language")}
          />
          <SettingTile
            icon="color-palette-outline"
            label="Theme"
            onPress={() => router.push("/(tabs)/settings/Theme")}
          />
          <SettingTile
            icon="information-circle-outline"
            label="About"
            onPress={() => router.push("/(tabs)/settings/About")}
          />
          <SettingTile
            icon="cloud-download-outline"
            label="Software Update"
            onPress={() => router.push("/(tabs)/settings/SoftwareUpdates")}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Index;
