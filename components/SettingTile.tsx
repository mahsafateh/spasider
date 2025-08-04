import { Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export const SettingTile = ({ icon, label, onPress }: any) => {
  return (
    <TouchableOpacity
      className="flex-row items-center p-4 bg-white "
      onPress={onPress}
    >
      <Icon name={icon} size={24} color="#888" className={"mr-4"} />
      <Text className="flex-1 text-sm font-quicksand-semibold">{label}</Text>
      <Icon name="chevron-forward" size={20} color="#aaa" />
    </TouchableOpacity>
  );
};
