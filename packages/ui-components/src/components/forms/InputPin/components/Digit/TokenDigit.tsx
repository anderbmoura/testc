import React, { useCallback, useMemo } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { useInputPinContext } from '../../context/InputPinContext';
import {
  StyledTokenDigitContainer,
  StyledTokenDigitPlaceholder,
  StyledTokenDigitText,
} from './TokenDigit.styles';

export type TokenDigitProps = {
  index: number;
};

type TokenDigitState = 'default' | 'focused' | 'filled' | 'error' | 'disabled';

const getState = (options: {
  isFocused: boolean;
  hasValue: boolean;
  isError: boolean;
  disabled: boolean;
}): TokenDigitState => {
  if (options.disabled) return 'disabled';
  if (options.isError) return 'error';
  if (options.isFocused) return options.hasValue ? 'filled' : 'focused';
  if (options.hasValue) return 'filled';
  return 'default';
};

const PLACEHOLDER_CHAR = '—';
const CARET_CHAR = '│';

export const TokenDigit: React.FC<TokenDigitProps> = ({ index }) => {
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

  const displayChar = hasValue
    ? value
    : isFocused
      ? CARET_CHAR
      : PLACEHOLDER_CHAR;

  const isPlaceholder = !hasValue && !isFocused;

  return (
    <StyledTokenDigitContainer
      state={state}
      onPress={handlePress}
      disabled={disabled}
      accessibilityLabel={`Dígito ${index + 1}`}
      accessibilityRole="text"
      accessibilityState={{
        disabled,
        selected: isFocused,
      }}
    >
      {isPlaceholder ? (
        <StyledTokenDigitPlaceholder state={state}>
          {displayChar}
        </StyledTokenDigitPlaceholder>
      ) : (
        <StyledTokenDigitText state={state}>{displayChar}</StyledTokenDigitText>
      )}

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
    </StyledTokenDigitContainer>
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
