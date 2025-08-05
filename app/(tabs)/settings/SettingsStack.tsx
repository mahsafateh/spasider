import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import SettingsIndex from "./index";
import AboutScreen from "@/screens/settingScreens/AboutScreen";
import LanguageScreen from "@/screens/settingScreens/LanguageScreen";
import ThemeScreen from "@/screens/settingScreens/ThemeScreen";
import SoftwareUpdatesScreen from "@/screens/settingScreens/SoftwareUpdatesScreen";

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
          title: "About",
        }}
      />
      <Stack.Screen
        name="Language"
        component={LanguageScreen}
        options={{
          title: "Language",
        }}
      />
      <Stack.Screen
        name="Theme"
        component={ThemeScreen}
        options={{
          title: "Theme",
        }}
      />
      <Stack.Screen
        name="SoftwareUpdates"
        component={SoftwareUpdatesScreen}
        options={{
          title: "Software Updates",
        }}
      />
    </Stack.Navigator>
  );
}
