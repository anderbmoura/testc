import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { TextInput } from 'react-native';
import { useInputPinValue } from './useInputPinValue';
import { getNextFocusIndex } from '../utils/getNextFocusIndex';
import { isComplete as isCompleteUtil } from '../utils/isComplete';
import type { InputPinProps, InputPinVariant } from '../InputPin.model';

type UseControllerArgs = Pick<
  InputPinProps,
  'variant' | 'digitCount' | 'value' | 'defaultValue' | 'onChange' | 'disabled'
>;

type UseControllerReturn = {
  value: string;
  digits: string[];
  focusedIndex: number;
  isComplete: boolean;
  registerDigitRef: (index: number, ref: TextInput | null) => void;
  focusDigit: (index: number) => void;
  focusFirstAvailableDigit: () => void;
  handleDigitChange: (index: number, char: string) => void;
  handleDigitBackspace: (index: number) => void;
  handleDigitFocus: (index: number) => void;
  handleDigitBlur: (index: number) => void;
  replaceValue: (nextValue: string) => void;
};

const getInitialFocusIndex = (variant: InputPinVariant, digits: string[]) => {
  if (variant === 'alphanumeric') {
    return -1;
  }

  return getNextFocusIndex(digits);
};

export const useInputPinController = ({
  variant,
  digitCount = 6,
  value,
  defaultValue,
  onChange,
  disabled = false,
}: UseControllerArgs): UseControllerReturn => {
  const {
    value: normalizedValue,
    digits,
    setDigitValue,
    clearDigitValue,
    replaceValue,
  } = useInputPinValue({ variant, digitCount, value, defaultValue, onChange });

  const refs = useRef<Array<TextInput | null>>([]);
  const [focusedIndex, setFocusedIndex] = useState(() =>
    getInitialFocusIndex(variant, digits)
  );

  useEffect(() => {
    if (variant === 'alphanumeric') {
      setFocusedIndex(-1);
      return;
    }

    setFocusedIndex(prevFocused => {
      if (disabled) return -1;
      const nextIndex = getNextFocusIndex(digits);

      if (prevFocused === -1) {
        return nextIndex;
      }

      if (prevFocused > digits.length - 1) {
        return digits.length - 1;
      }

      return prevFocused;
    });
  }, [digits, variant, disabled]);

  const registerDigitRef = useCallback(
    (index: number, ref: TextInput | null) => {
      refs.current[index] = ref;
    },
    []
  );

  const focusDigit = useCallback(
    (index: number) => {
      if (variant === 'alphanumeric' || disabled) return;

      const clampedIndex = Math.max(0, Math.min(index, digits.length - 1));
      refs.current[clampedIndex]?.focus();
      setFocusedIndex(clampedIndex);
    },
    [disabled, digits.length, variant]
  );

  const focusFirstAvailableDigit = useCallback(() => {
    if (variant === 'alphanumeric' || disabled) return;

    const targetIndex = getNextFocusIndex(digits);
    focusDigit(targetIndex);
  }, [disabled, digits, focusDigit, variant]);

  const handleDigitChange = useCallback(
    (index: number, char: string) => {
      if (variant === 'alphanumeric' || disabled) return;

      setDigitValue(index, char);

      if (char) {
        const nextIndex = Math.min(index + 1, digits.length - 1);
        focusDigit(nextIndex);
      }
    },
    [disabled, digits.length, focusDigit, setDigitValue, variant]
  );

  const handleDigitBackspace = useCallback(
    (index: number) => {
      if (variant === 'alphanumeric' || disabled) return;

      if (digits[index]) {
        clearDigitValue(index);
        focusDigit(index);
        return;
      }

      const previousIndex = Math.max(0, index - 1);
      clearDigitValue(previousIndex);
      focusDigit(previousIndex);
    },
    [clearDigitValue, disabled, digits, focusDigit, variant]
  );

  const handleDigitFocus = useCallback(
    (index: number) => {
      if (variant === 'alphanumeric' || disabled) return;

      setFocusedIndex(index);
    },
    [disabled, variant]
  );

  const handleDigitBlur = useCallback(() => {
    if (variant === 'alphanumeric' || disabled) return;

    // Mantemos o índice para reaproveitar a posição quando o usuário voltar a focar
  }, [disabled, variant]);

  const isComplete = useMemo(() => {
    if (variant === 'alphanumeric') {
      return normalizedValue.length > 0;
    }

    return isCompleteUtil(digits);
  }, [digits, normalizedValue, variant]);

  return {
    value: normalizedValue,
    digits,
    focusedIndex,
    isComplete,
    registerDigitRef,
    focusDigit,
    focusFirstAvailableDigit,
    handleDigitChange,
    handleDigitBackspace,
    handleDigitFocus,
    handleDigitBlur,
    replaceValue,
  };
};
