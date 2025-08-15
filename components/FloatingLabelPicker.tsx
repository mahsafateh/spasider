import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
  StyleSheet,
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

  const staticLabelStyle = {
    position: "absolute" as const,
    left: 10,
    //EEEEEE
    backgroundColor: Platform.OS === "ios" ? "#EEEEEE" : "#fff",
    paddingHorizontal: 14,
    paddingVertical: Platform.OS === "ios" ? 5 : 0,
    zIndex: 1,
    alignSelf: "flex-start" as const,
    fontFamily: "Quicksand-SemiBold",
    pointerEvents: "none" as const,
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
      outputRange: ["#aaa", "#555"],
    }),
  };

  return (
    <Pressable
      style={{ marginBottom: 16, paddingTop: 18 }}
      onPress={() => {
        setModalVisible(true);
        setIsFocused(true);
      }}
    >
      <Animated.Text style={[staticLabelStyle, animatedLabelStyle]}>
        {label}
      </Animated.Text>
      <View style={styles.input}>
        <Text
          className={"font-quicksand-semibold"}
          style={{
            color: value ? "#222" : "#aaa",
            fontSize: 16,
            textAlign: "left",
            paddingLeft: 8,
            flex: 1,
          }}
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
          style={styles.modalOverlay}
          onPress={() => {
            setModalVisible(false);
            setIsFocused(false);
          }}
          activeOpacity={1}
        >
          <View style={styles.modalContent}>
            <FlatList
              className={"font-quicksand-semibold"}
              data={categories}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.item}
                  onPress={() => {
                    onValueChange(item.name);
                    setModalVisible(false);
                    setIsFocused(false);
                  }}
                >
                  <Text
                    className={"font-quicksand-semibold"}
                    style={{ fontSize: 16 }}
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

const styles = StyleSheet.create({
  input: {
    height: 44,
    justifyContent: "center",
    backgroundColor: "transparent",
    borderRadius: 8,
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 1,
    paddingHorizontal: 10,
    width: "100%",
    alignItems: "flex-start",
    minHeight: 44,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.2)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    minWidth: 250,
    maxHeight: 500,
  },
  item: {
    paddingVertical: 12,
    paddingHorizontal: 8,
    width: "100%",
  },
});
