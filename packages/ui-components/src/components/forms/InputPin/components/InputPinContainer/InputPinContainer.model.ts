import type { GestureResponderEvent } from 'react-native';

export type InputPinContainerState =
  | 'default'
  | 'focused'
  | 'error'
  | 'disabled';

export type InputPinContainerProps = {
  state: InputPinContainerState;
  children: React.ReactNode;
  disabled?: boolean;
  onPress?: (event: GestureResponderEvent) => void;
  underline?: boolean;
  testID?: string;
  accessibilityLabel?: string;
};
