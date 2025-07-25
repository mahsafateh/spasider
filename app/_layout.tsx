import { SplashScreen } from "expo-router";
import "./global.css";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import { Provider } from "react-redux";
import store from "../store";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Profile from "./(tabs)/Profile";
import Settings from "./(tabs)/Settings";
import Index from "@/app/(tabs)";

const Tab = createBottomTabNavigator();

export default function RootLayout() {
  const [fontsLoaded, error] = useFonts({
    "Quicksand-Bold": require("../assets/fonts/Quicksand-Bold.ttf"),
    "Quicksand-Medium": require("../assets/fonts/Quicksand-Medium.ttf"),
    "Quicksand-Regular": require("../assets/fonts/Quicksand-Regular.ttf"),
    "Quicksand-SemiBold": require("../assets/fonts/Quicksand-SemiBold.ttf"),
    "Quicksand-Light": require("../assets/fonts/Quicksand-Light.ttf"),
  });

  useEffect(() => {
    if (error) throw error;
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error]);
  return (
    <Provider store={store}>
      {/*<Tab.Navigator>*/}
      {/*  <Tab.Screen name="Home" component={index} />*/}
      {/*  <Tab.Screen name="Profile" component={Profile} />*/}
      {/*</Tab.Navigator>*/}

      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Search") {
              iconName = focused ? "search" : "search-outline";
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
            height: 70,
            paddingBottom: 5,
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
          component={Index} // This maps to (tabs)/index.tsx
          options={{
            title: "Home",
            tabBarIcon: ({ focused }) => (
              <Ionicons name={focused ? "home" : "home-outline"} size={24} />
            ),
          }}
        />
        <Tab.Screen
          name="Settings" // This maps to app/settings.tsx
          component={Settings}
          options={{
            title: "Settings",
            headerTitle: "Settings",
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name={focused ? "settings" : "settings-outline"}
                size={24}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile" // This maps to app/profile.tsx
          component={Profile}
          options={{
            title: "Profile",
            headerTitle: "My Profile",
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name={focused ? "person" : "person-outline"}
                size={24}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </Provider>
  );
}
