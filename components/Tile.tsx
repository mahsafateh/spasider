import { Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export const Tile = ({ icon, label, onPress, visible }: any) => {
  return (
    <TouchableOpacity className="flex-row items-center p-4 " onPress={onPress}>
      {visible ? (
        <Icon name={icon} size={24} color="#888" className={"mr-4"} />
      ) : null}
      <Text className="flex-1 text-sm font-quicksand-semibold">{label}</Text>
      {visible ? <Icon name="chevron-forward" size={20} color="#aaa" /> : null}
    </TouchableOpacity>
  );
};
