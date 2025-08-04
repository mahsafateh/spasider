import { View, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { SettingTile } from "@/components/SettingTile";

const Settings = ({ navigation }: any) => {
  return (
    <SafeAreaView className={"flex-1"}>
      <ScrollView className="flex-1">
        <View className={"pt-4 px-2"}>
          <SettingTile
            icon="information-circle-outline"
            label="About"
            onPress={() => {}}
          />
          <SettingTile
            icon="cloud-download-outline"
            label="Software Update"
            onPress={() => {}}
          />
          <SettingTile
            icon="language"
            label="Language"
            onPress={() => {
              navigation.navigate("Language");
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Settings;
