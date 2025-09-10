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
  minValue?: number;
}

export interface FloatingLabelPickerProps extends TextInputProps {
  label?: string;
  value?: string;
  onValueChange: (text: string) => void;
  viewList: CategoryOption[];
}

export interface Categories {
  name: string;
  words: string[];
  id: string;
}

export interface CategoryOption {
  name: string;
  id: string;
}

export interface ButtonProps {
  iconName?: string;
  title?: string;
  onPress: (event: GestureResponderEvent) => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
  disabled?: boolean;
  className?: string;
  accessibilityLabel?: string;
  accessibilityHint?: string;
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
