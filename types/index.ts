import {TextInputProps} from "react-native";

export interface FloatingLabelInputProps extends TextInputProps {
  label: string;
  value?: string;
  onChangeText: (text: string) => void;
}