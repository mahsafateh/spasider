import { View, Text } from "react-native";

function Title({ title }: { title: string }) {
  return (
    <View className={"flex-row items-center justify-center h-10 mt-3"}>
      <Text className={"font-quicksand-bold text-lg"}>{title}</Text>
    </View>
  );
}

export default Title;
