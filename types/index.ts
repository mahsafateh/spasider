import {
  TextInputProps,
  ViewStyle,
  TextStyle,
  GestureResponderEvent,
} from "react-native";

export interface FloatingLabelInputProps extends TextInputProps {
  label: string;
  value?: string;
  onChangeText: (text: string) => void;
}

export interface FloatingLabelPickerProps extends TextInputProps {
  label?: string;
  value?: string;
  onValueChange: (text: string) => void;
}

export interface ButtonProps {
  title?: string;
  onPress: (event: GestureResponderEvent) => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
  disabled?: boolean;
}
