import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { ButtonProps } from "@/types";

const PrimaryButton: React.FC<ButtonProps> = ({
  title,
  onPress,
  style,
  textStyle,
  disabled = false,
  className,
}) => {
  return (
    <TouchableOpacity
      style={style}
      onPress={onPress}
      activeOpacity={0.7}
      disabled={disabled}
      className={`py-3 px-6 rounded-lg items-center justify-center mb-2 ${
        disabled ? "bg-gray-400" : ""
      } ${className ?? ""}`}
    >
      <Text className="text-white text-base font-semibold" style={textStyle}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
