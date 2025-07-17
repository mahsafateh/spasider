import { View, Text } from "react-native";

function Header() {
  return (
    <View className={"flex-row items-center justify-center h-20 px-4 mt-6"}>
      <Text className={"font-quicksand-bold text-lg"}>Hello, I am Spy. </Text>
      <Text className={"font-quicksand-bold ml-1 text-lg"}>
        And, I am Insider
      </Text>
    </View>
  );
}

export default Header;
