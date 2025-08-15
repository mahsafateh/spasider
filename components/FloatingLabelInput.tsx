import React, { useState, useRef, useEffect } from "react";
import { View, TextInput, Animated, StyleSheet, Platform } from "react-native";
import { FloatingLabelInputProps } from "@/types";

export default function FloatingLabelInput({
  label,
  value,
  onChangeText,
  ...props
}: FloatingLabelInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const animatedIsFocused = useRef(new Animated.Value(value ? 1 : 0)).current;

  useEffect(() => {
    Animated.timing(animatedIsFocused, {
      toValue: isFocused || !!value ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [isFocused, value]);

  const staticLabelStyle = {
    position: "absolute" as const,
    left: 10,
    //E7E7E7
    backgroundColor: Platform.OS === "ios" ? "#EEEEEE" : "#fff",
    paddingHorizontal: 14,
    paddingVertical: Platform.OS === "ios" ? 7 : 4,
    zIndex: 1,
    alignSelf: "flex-start" as const,
    fontFamily: "Quicksand-SemiBold",
    pointerEvents: "none" as const,
    lineHeight: 18,
  };
  const animatedLabelStyle = {
    top: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [26, Platform.OS === "ios" ? 6 : 8],
    }),
    fontSize: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [16, Platform.OS === "ios" ? 14 : 15],
    }),
    color: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: ["#aaa", "#555"],
    }),
  };

  return (
    <View style={styles.container}>
      <Animated.Text style={[staticLabelStyle, animatedLabelStyle]}>
        {label}
      </Animated.Text>
      <TextInput
        keyboardType="numeric"
        value={value}
        onChangeText={onChangeText}
        className={"input font-quicksand-semibold"}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        maxLength={2}
        blurOnSubmit
        style={{
          paddingLeft: 8,
          fontSize: 16,
        }}
        {...props}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    fontFamily: "Quicksand-SemiBold",
    paddingTop: 18,
    marginBottom: 16,
  },
});
