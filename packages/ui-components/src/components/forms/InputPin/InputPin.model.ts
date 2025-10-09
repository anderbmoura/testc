import type { TextInput } from 'react-native';

export type InputPinVariant = 'numeric' | 'token' | 'alphanumeric';
export type InputPinFeedbackType = 'neutral' | 'success' | 'danger';

export type InputPinProps = {
  variant: InputPinVariant;
  digitCount?: 4 | 6;
  value?: string;
  defaultValue?: string;
  onChange?: (pin: string) => void;
  onComplete: (pin: string) => void;
  isError?: boolean;
  feedbackMessage?: string;
  feedbackType?: InputPinFeedbackType;
  disabled?: boolean;
  accessibilityLabel?: string;
  testID?: string;
};

export type InputPinContextValue = {
  variant: InputPinVariant;
  digitCount: number;
  value: string;
  digits: string[];
  focusedIndex: number;
  isComplete: boolean;
  isError: boolean;
  disabled: boolean;
  registerDigitRef: (index: number, ref: TextInput | null) => void;
  focusDigit: (index: number) => void;
  focusFirstAvailableDigit: () => void;
  handleDigitChange: (index: number, char: string) => void;
  handleDigitBackspace: (index: number) => void;
  handleDigitFocus: (index: number) => void;
  handleDigitBlur: (index: number) => void;
  replaceValue: (nextValue: string) => void;
};
