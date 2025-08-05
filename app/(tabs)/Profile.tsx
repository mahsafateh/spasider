import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function Profile() {
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 justify-center items-center">
        <Text className="text-lg font-medium">User Spasider</Text>
        <Text className="text-gray-600 mt-2">Version 1.0.0</Text>
      </View>
    </SafeAreaView>
  );
}

export default Profile;
