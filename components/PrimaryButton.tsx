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
  accessibilityLabel,
  accessibilityHint,
}) => {
  const resolved = `py-3 px-6 rounded-lg items-center justify-center mb-2 active:opacity-90 ${
    disabled ? "bg-gray-400" : "bg-blue-600"
  } ${className ?? ""}`;

  return (
    <TouchableOpacity
      accessible
      accessibilityRole="button"
      accessibilityState={{ disabled }}
      accessibilityLabel={accessibilityLabel ?? title}
      accessibilityHint={accessibilityHint}
      hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
      style={style}
      onPress={onPress}
      activeOpacity={0.8}
      disabled={disabled}
      className={resolved}
    >
      <Text className="text-white text-base font-semibold" style={textStyle}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
