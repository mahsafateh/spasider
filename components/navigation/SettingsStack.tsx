import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import SettingsIndex from "@/app/(tabs)/settings/index";
import AboutScreen from "@/screens/settingScreens/AboutScreen";
import LanguageScreen from "@/screens/settingScreens/LanguageScreen";
import ThemeScreen from "@/screens/settingScreens/ThemeScreen";
import SoftwareUpdatesScreen from "@/screens/settingScreens/SoftwareUpdatesScreen";

import i18next from "i18next";

const Stack = createStackNavigator();

export default function SettingsStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="SettingsIndex"
        component={SettingsIndex}
        options={{
          title: "Settings",
        }}
      />
      <Stack.Screen
        name="About"
        component={AboutScreen}
        options={{
          title: i18next.t("settings.about"),
        }}
      />
      <Stack.Screen
        name="Language"
        component={LanguageScreen}
        options={{
          title: i18next.t("settings.language"),
        }}
      />
      <Stack.Screen
        name="Theme"
        component={ThemeScreen}
        options={{
          title: i18next.t("settings.theme"),
        }}
      />
      <Stack.Screen
        name="SoftwareUpdates"
        component={SoftwareUpdatesScreen}
        options={{
          title: i18next.t("settings.softwareUpdates"),
        }}
      />
    </Stack.Navigator>
  );
}
