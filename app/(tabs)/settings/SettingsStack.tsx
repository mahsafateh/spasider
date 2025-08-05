import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import SettingsIndex from "./index";
import About from "./About";
import Language from "./Language";
import Theme from "./Theme";
import SoftwareUpdates from "./SoftwareUpdates";

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
        component={About}
        options={{
          title: "About",
        }}
      />
      <Stack.Screen
        name="Language"
        component={Language}
        options={{
          title: "Language",
        }}
      />
      <Stack.Screen
        name="Theme"
        component={Theme}
        options={{
          title: "Theme",
        }}
      />
      <Stack.Screen
        name="SoftwareUpdates"
        component={SoftwareUpdates}
        options={{
          title: "Software Updates",
        }}
      />
    </Stack.Navigator>
  );
}
