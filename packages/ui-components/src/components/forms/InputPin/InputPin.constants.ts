import type { InputPinFeedbackType, InputPinVariant } from './InputPin.model';

export const INPUT_PIN_VARIANTS: InputPinVariant[] = [
  'numeric',
  'token',
  'alphanumeric',
];

export const INPUT_PIN_FEEDBACK_TYPES: InputPinFeedbackType[] = [
  'neutral',
  'success',
  'danger',
];

export const DEFAULT_DIGIT_COUNT = 6;
export const SUPPORTED_DIGIT_COUNTS = [4, 6] as const;

export const DEFAULT_ACCESSIBILITY_LABEL = 'Campo de código';
