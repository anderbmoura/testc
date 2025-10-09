import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { normalizeValue } from '../utils/normalizeValue';
import { getDigitArray } from '../utils/getDigitArray';
import type { InputPinVariant } from '../InputPin.model';

const sanitizeSingleChar = (variant: InputPinVariant, value: string) => {
  if (!value) return '';

  const sanitized = normalizeValue(variant, value.slice(-1), 1);
  return sanitized.slice(-1);
};

type UseInputPinValueArgs = {
  variant: InputPinVariant;
  digitCount: number;
  value?: string;
  defaultValue?: string;
  onChange?: (nextValue: string) => void;
};

type UseInputPinValueReturn = {
  value: string;
  digits: string[];
  setDigitValue: (index: number, char: string) => void;
  clearDigitValue: (index: number) => void;
  replaceValue: (nextValue: string) => void;
};

export const useInputPinValue = ({
  variant,
  digitCount,
  value: valueProp,
  defaultValue,
  onChange,
}: UseInputPinValueArgs): UseInputPinValueReturn => {
  const isControlled = useRef(valueProp !== undefined);

  const [internalValue, setInternalValue] = useState(() =>
    normalizeValue(variant, defaultValue ?? '', digitCount)
  );

  const normalizedValue = useMemo(() => {
    const baseValue = isControlled.current ? (valueProp ?? '') : internalValue;
    return normalizeValue(variant, baseValue, digitCount);
  }, [digitCount, internalValue, valueProp, variant]);

  useEffect(() => {
    if (!isControlled.current) {
      setInternalValue(prev => normalizeValue(variant, prev, digitCount));
    }
  }, [digitCount, variant]);

  useEffect(() => {
    if (isControlled.current !== (valueProp !== undefined)) {
      isControlled.current = valueProp !== undefined;
    }
  }, [valueProp]);

  const emitChange = useCallback(
    (nextValue: string) => {
      const finalValue = normalizeValue(variant, nextValue, digitCount);

      if (!isControlled.current) {
        setInternalValue(finalValue);
      }

      onChange?.(finalValue);
    },
    [digitCount, onChange, variant]
  );

  const digits = useMemo(() => {
    if (variant === 'alphanumeric') {
      return [];
    }

    return getDigitArray(normalizedValue, digitCount);
  }, [digitCount, normalizedValue, variant]);

  const setDigitValue = useCallback(
    (index: number, char: string) => {
      if (variant === 'alphanumeric') return;

      const sanitizedChar = sanitizeSingleChar(variant, char);
      const nextDigits = [...digits];
      nextDigits[index] = sanitizedChar;

      emitChange(nextDigits.join(''));
    },
    [digits, emitChange, variant]
  );

  const clearDigitValue = useCallback(
    (index: number) => {
      if (variant === 'alphanumeric') return;

      const nextDigits = [...digits];
      nextDigits[index] = '';
      emitChange(nextDigits.join(''));
    },
    [digits, emitChange, variant]
  );

  const replaceValue = useCallback(
    (nextValue: string) => {
      emitChange(nextValue);
    },
    [emitChange]
  );

  return {
    value: normalizedValue,
    digits,
    setDigitValue,
    clearDigitValue,
    replaceValue,
  };
};
