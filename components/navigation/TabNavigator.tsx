import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Profile from "@/app/(tabs)/Profile";
import SettingsStack from "@/components/navigation/SettingsStack";
import Index from "@/app/(tabs)/index";

import i18next from "i18next";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "settings" : "settings-outline";
          }
          return <Ionicons name={iconName as any} size={size} />;
        },
        tabBarActiveTintColor: "#F97A00",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: "#EEEEEE",
          borderTopWidth: 1,
          borderTopColor: "#E5E5E5",
          height: 70 + insets.bottom,
          paddingBottom: insets.bottom + 5,
          paddingTop: 10,
        },
        headerStyle: {
          backgroundColor: "#007AFF",
        },
        headerTintColor: "white",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      })}
    >
      <Tab.Screen
        name="index"
        component={Index}
        options={{
          title: i18next.t("home.title"),
          tabBarIcon: ({ focused }) => (
            <Ionicons name={focused ? "home" : "home-outline"} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsStack}
        options={{
          title: i18next.t("settings.title"),
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "settings" : "settings-outline"}
              size={24}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          title: i18next.t("profile.title"),
          headerTitle: "My Profile",
          tabBarIcon: ({ focused }) => (
            <Ionicons name={focused ? "person" : "person-outline"} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
