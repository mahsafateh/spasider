import React, { useState, useRef, useEffect } from 'react';
import { View, TextInput, Animated, StyleSheet } from 'react-native';
import {FloatingLabelInputProps} from "@/types";

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
      toValue: isFocused || value ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [isFocused, value]);

  const staticLabelStyle = {
    position: 'absolute' as const,
    left: 18,
    backgroundColor: '#EEEEEE',
    paddingHorizontal: 14,
    paddingVertical: 2,
    zIndex: 1,
    alignSelf: 'flex-start' as const,
    fontFamily: 'Quicksand-SemiBold',
    pointerEvents: 'none' as const,
  };
  const animatedLabelStyle = {
    top: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [26, 6],
    }),
    fontSize: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 14],
    }),
    color: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: ['#aaa', '#555'],
    }),
  };

  return (
    <View style={styles.container}>
      <Animated.Text style={[staticLabelStyle, animatedLabelStyle]}>
        {label}
      </Animated.Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        className={'input'}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        blurOnSubmit
        {...props}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 18,
    marginBottom: 16,
  },
}); 