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
import { categories } from "@/constants";
import { FloatingLabelPickerProps } from "@/types";

export default function FloatingLabelPicker({
  label,
  value,
  onValueChange,
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
    <Pressable
      className={"mb-4 pt-[18px]"}
      onPress={() => {
        setModalVisible(true);
        setIsFocused(true);
      }}
    >
      <Animated.Text
        className={
          "absolute left-[10px] ios:bg-[#EEEEEE] android:bg-white px-[14px] ios:py-[7px] android:py-[4px] z-10 self-start font-quicksand-semibold pointer-events-none leading-[18px]"
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
          className={
            "font-quicksand-semibold text-left pl-2 flex-1 text-base pt-4"
          }
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
          className={"flex-1 bg-black/20 justify-center items-center"}
          onPress={() => {
            setModalVisible(false);
            setIsFocused(false);
          }}
          activeOpacity={1}
        >
          <View
            className={"bg-white rounded-xl p-4 min-w-[250px] max-h-[500px]"}
          >
            <FlatList
              className={"font-quicksand-semibold"}
              data={categories}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <TouchableOpacity
                  className={"py-3 px-2 w-full"}
                  onPress={() => {
                    onValueChange(item.name);
                    setModalVisible(false);
                    setIsFocused(false);
                  }}
                >
                  <Text className={"font-quicksand-semibold text-base"}>
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
