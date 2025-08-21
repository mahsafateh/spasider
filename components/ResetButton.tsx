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
      style={style}
      onPress={onPress}
      activeOpacity={0.6}
      disabled={disabled}
      className={`py-3 px-6 rounded-lg items-center justify-center mb-2 ${
        disabled ? "bg-gray-400" : ""
      } ${className ?? ""}`}
    >
      <MaterialCommunityIcons name={`${iconName}`} color="#000" size={24} />
    </TouchableOpacity>
  );
};

export default ResetButton;
