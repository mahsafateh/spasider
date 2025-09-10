import { Text, Pressable, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

type TileProps = {
  icon?: string;
  label: string;
  visible?: boolean;
  onPress: () => void;
};

export const Tile = ({ icon, label, onPress, visible = true }: TileProps) => {
  return (
    <Pressable
      accessible
      accessibilityRole="button"
      accessibilityLabel={label}
      accessibilityHint={`Navigate to ${label}`}
      onPress={onPress}
      android_ripple={{ color: "rgba(0,0,0,0.06)" }}
      className="w-full"
      hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
    >
      <View className="flex-row items-center p-4">
        {visible ? (
          <Icon name={icon ?? "ellipse"} size={24} color="#4B5563" />
        ) : null}
        <Text className="flex-1 text-base font-quicksand-semibold ml-3 text-textDark">
          {label}
        </Text>
        {visible ? (
          <Icon name="chevron-forward" size={20} color="#6B7280" />
        ) : null}
      </View>
    </Pressable>
  );
};
