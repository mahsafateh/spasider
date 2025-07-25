import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function Profile() {
  return (
    <SafeAreaView className={"flex-1"}>
      <View className="flex-1">
        <Text>Profile</Text>
      </View>
    </SafeAreaView>
  );
}

export default Profile;
