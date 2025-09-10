import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
  Animated,
  Platform,
  Pressable,
} from "react-native";
import { FloatingLabelPickerProps } from "@/types";

export default function FloatingLabelPicker({
  label,
  value,
  onValueChange,
  viewList,
}: FloatingLabelPickerProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const animatedIsFocused = useRef(new Animated.Value(value ? 1 : 0)).current;

  useEffect(() => {
    Animated.timing(animatedIsFocused, {
      toValue: isFocused || value ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [isFocused, value]);

  const animatedLabelStyle = {
    top: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [26, Platform.OS === "ios" ? 1 : 4],
    }),
    fontSize: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [16, Platform.OS === "ios" ? 16 : 15],
    }),
    color: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: ["#6B7280", "#1F2937"],
    }),
  };

  return (
    <Pressable
      accessible
      accessibilityRole="button"
      accessibilityLabel={label}
      accessibilityHint={`Open ${label} picker`}
      className={"mb-4 pt-[18px]"}
      onPress={() => {
        setModalVisible(true);
        setIsFocused(true);
      }}
    >
      <Animated.Text
        className={
          "absolute left-[10px] ios:bg-[#EEEEEE] android:bg-white px-[8px] ios:py-[7px] android:py-[4px] z-10 self-start font-quicksand-semibold pointer-events-none leading-[18px]"
        }
        style={[animatedLabelStyle]}
      >
        {label}
      </Animated.Text>
      <View
        className={
          "h-11 justify-center bg-transparent rounded-lg border border-black px-[10px] w-full items-start min-h-[44px]"
        }
      >
        <Text
          className={"font-quicksand-semibold text-left flex-1 text-base pt-3"}
          style={{ color: value ? "#222" : "#aaa" }}
        >
          {value || ""}
        </Text>
      </View>
      <Modal
        visible={modalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => {
          setModalVisible(false);
          setIsFocused(false);
        }}
      >
        <TouchableOpacity
          className={"flex-1 bg-black/30 justify-center items-center"}
          onPress={() => {
            setModalVisible(false);
            setIsFocused(false);
          }}
          activeOpacity={1}
        >
          <View
            className={"bg-white rounded-xl p-4 min-w-[250px] max-h-[450px]"}
          >
            <FlatList
              className={"font-quicksand-semibold"}
              data={viewList}
              keyExtractor={(item) => item.id}
              ItemSeparatorComponent={() => (
                <View className="self-center bg-gray-300 w-[85%] h-[0.5]" />
              )}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => (
                <TouchableOpacity
                  className={"py-3 px-2 w-full items-center"}
                  onPress={() => {
                    onValueChange(item.name);
                    setModalVisible(false);
                    setIsFocused(false);
                  }}
                >
                  <Text
                    className={
                      "font-quicksand-semibold text-base p-[0.5] text-center"
                    }
                  >
                    {item.name}
                  </Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </Pressable>
  );
}
