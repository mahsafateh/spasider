import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { TouchableOpacity } from "react-native";
import { ButtonProps } from "@/types";

const ResetButton: React.FC<ButtonProps> = ({
  iconName,
  onPress,
  style,
  disabled = false,
  className,
}) => {
  return (
    <TouchableOpacity
      accessible
      accessibilityRole="button"
      accessibilityLabel="Reset game"
      accessibilityHint="Resets the current game and clears progress"
      accessibilityState={{ disabled }}
      hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
      style={style}
      onPress={onPress}
      activeOpacity={0.8}
      disabled={disabled}
      className={`p-2 rounded-lg items-center justify-center ${className ?? ""}`}
    >
      <MaterialCommunityIcons
        name={`${iconName}`}
        color={disabled ? "#6B7280" : "#111827"}
        size={24}
      />
    </TouchableOpacity>
  );
};

export default ResetButton;
