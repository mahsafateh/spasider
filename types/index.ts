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
  /** Minimum numeric value allowed. Defaults to 1 for numeric inputs. */
  minValue?: number;
}

export interface FloatingLabelPickerProps extends TextInputProps {
  label?: string;
  value?: string;
  onValueChange: (text: string) => void;
}

export interface ButtonProps {
  iconName?: string;
  title?: string;
  onPress: (event: GestureResponderEvent) => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
  disabled?: boolean;
  className?: string;
}

export interface GameState {
  category: string;
  spies: number;
  insiders: number;
  word: string;
  gameStarted: boolean;
  roles: ("spy" | "insider")[];
  currentRole: "spy" | "insider" | null;
  showWord: boolean;
  loading: boolean;
  error: string | null;
}

export interface GameResultsModalProps {
  visible: boolean;
  onClose: () => void;
  gameData: {
    insiders: number;
    spies: number;
    totalPlayers: number;
    playersLeft: number;
  };
}
