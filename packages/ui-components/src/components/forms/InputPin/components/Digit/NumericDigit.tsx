import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { useInputPinContext } from '../../context/InputPinContext';
import {
  StyledNumericDigitBullet,
  StyledNumericDigitCaret,
  StyledNumericDigitContainer,
  StyledNumericDigitPlaceholder,
  StyledNumericDigitValue,
} from './NumericDigit.styles';

export type NumericDigitProps = {
  index: number;
};

type NumericDigitState =
  | 'default'
  | 'focused'
  | 'filled'
  | 'error'
  | 'disabled';

const NUMERIC_REVEAL_DURATION_MS = 400;

const getState = (options: {
  isFocused: boolean;
  hasValue: boolean;
  isError: boolean;
  disabled: boolean;
}): NumericDigitState => {
  if (options.disabled) return 'disabled';
  if (options.isError) return 'error';
  if (options.isFocused) return options.hasValue ? 'filled' : 'focused';
  if (options.hasValue) return 'filled';
  return 'default';
};

export const NumericDigit: React.FC<NumericDigitProps> = ({ index }) => {
  const {
    digits,
    focusedIndex,
    isError,
    disabled,
    registerDigitRef,
    focusDigit,
    handleDigitChange,
    handleDigitBackspace,
    handleDigitFocus,
    handleDigitBlur,
  } = useInputPinContext();

  const value = digits[index] ?? '';
  const isFocused = focusedIndex === index;
  const hasValue = value.length > 0;

  const [isRevealed, setIsRevealed] = useState(false);
  const revealTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!hasValue || disabled) {
      setIsRevealed(false);

      if (revealTimeoutRef.current) {
        clearTimeout(revealTimeoutRef.current);
        revealTimeoutRef.current = null;
      }

      return;
    }

    setIsRevealed(true);

    if (revealTimeoutRef.current) {
      clearTimeout(revealTimeoutRef.current);
    }

    const timeoutId = setTimeout(() => {
      setIsRevealed(false);
      revealTimeoutRef.current = null;
    }, NUMERIC_REVEAL_DURATION_MS);

    revealTimeoutRef.current = timeoutId;

    return () => {
      clearTimeout(timeoutId);
    };
  }, [disabled, hasValue, value]);

  useEffect(() => {
    return () => {
      if (revealTimeoutRef.current) {
        clearTimeout(revealTimeoutRef.current);
      }
    };
  }, []);

  const state = useMemo(
    () =>
      getState({
        isFocused,
        hasValue,
        isError,
        disabled,
      }),
    [disabled, hasValue, isError, isFocused]
  );

  const handlePress = useCallback(() => {
    focusDigit(index);
  }, [focusDigit, index]);

  const handleChangeText = useCallback(
    (text: string) => {
      handleDigitChange(index, text);
    },
    [handleDigitChange, index]
  );

  const handleKeyPress = useCallback(
    ({ nativeEvent }: { nativeEvent: { key: string } }) => {
      if (nativeEvent.key === 'Backspace') {
        handleDigitBackspace(index);
      }
    },
    [handleDigitBackspace, index]
  );

  const handleFocusEvent = useCallback(() => {
    handleDigitFocus(index);
  }, [handleDigitFocus, index]);

  const handleBlurEvent = useCallback(() => {
    handleDigitBlur(index);
  }, [handleDigitBlur, index]);

  const isErrorFocused = isError && isFocused;

  let displayedDigit: React.ReactNode = null;

  if (hasValue) {
    displayedDigit =
      isRevealed && !disabled ? (
        <StyledNumericDigitValue state={state}>{value}</StyledNumericDigitValue>
      ) : (
        <StyledNumericDigitBullet state={state} />
      );
  } else if (isFocused) {
    displayedDigit = <StyledNumericDigitCaret state={state} />;
  } else {
    displayedDigit = <StyledNumericDigitPlaceholder state={state} />;
  }

  return (
    <StyledNumericDigitContainer
      state={state}
      onPress={handlePress}
      disabled={disabled}
      errorFocused={isErrorFocused}
      accessibilityLabel={`Dígito ${index + 1}`}
      accessibilityRole="text"
      accessibilityState={{
        disabled,
        selected: isFocused,
      }}
    >
      {displayedDigit}

      <TextInput
        ref={ref => registerDigitRef(index, ref)}
        value={value}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        autoComplete="one-time-code"
        accessibilityLabel={`Entrada do dígito ${index + 1}`}
        maxLength={1}
        editable={!disabled}
        onChangeText={handleChangeText}
        onKeyPress={handleKeyPress}
        onFocus={handleFocusEvent}
        onBlur={handleBlurEvent}
        caretHidden
        contextMenuHidden
        style={styles.hiddenInput}
        selectionColor="transparent"
        underlineColorAndroid="transparent"
      />
    </StyledNumericDigitContainer>
  );
};

const styles = StyleSheet.create({
  hiddenInput: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    opacity: 0,
  },
});
