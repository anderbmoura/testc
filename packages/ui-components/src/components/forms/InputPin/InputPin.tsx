import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import type { TextInput } from 'react-native';
import { InputPinContextProvider } from './context/InputPinContext';
import { useInputPinController } from './hooks/useInputPinController';
import {
  DEFAULT_ACCESSIBILITY_LABEL,
  DEFAULT_DIGIT_COUNT,
  SUPPORTED_DIGIT_COUNTS,
} from './InputPin.constants';
import {
  StyledInputPinContent,
  StyledInputPinWrapper,
} from './InputPin.styles';
import type { InputPinProps } from './InputPin.model';
import { InputPinContainer } from './components/InputPinContainer';
import type { InputPinContainerState } from './components/InputPinContainer';
import { DigitRow } from './components/DigitRow';
import { AlphanumericField } from './components/TextField';
import { InputPinFeedback } from './components/Feedback';

const resolveDigitCount = (
  variant: InputPinProps['variant'],
  digitCount?: 4 | 6
) => {
  if (variant === 'alphanumeric') return DEFAULT_DIGIT_COUNT;
  if (digitCount && SUPPORTED_DIGIT_COUNTS.includes(digitCount)) {
    return digitCount;
  }
  return DEFAULT_DIGIT_COUNT;
};

export const InputPin: React.FC<InputPinProps> = ({
  variant,
  digitCount,
  value,
  defaultValue,
  onChange,
  onComplete,
  isError = false,
  feedbackMessage,
  feedbackType = 'neutral',
  disabled = false,
  accessibilityLabel = DEFAULT_ACCESSIBILITY_LABEL,
  testID,
}) => {
  const resolvedDigitCount = resolveDigitCount(variant, digitCount);
  const textInputRef = useRef<TextInput>(null);

  const {
    value: currentValue,
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
  } = useInputPinController({
    variant,
    digitCount: resolvedDigitCount,
    value,
    defaultValue,
    onChange,
    disabled,
  });

  const containerState: InputPinContainerState = useMemo(() => {
    if (disabled) return 'disabled';

    if (variant === 'alphanumeric') {
      return 'default';
    }

    if (isError) return 'error';

    const hasFocus = focusedIndex >= 0 && focusedIndex < digits.length;

    if (hasFocus) return 'focused';

    return 'default';
  }, [disabled, digits.length, focusedIndex, isError, variant]);

  const handleContainerPress = useCallback(() => {
    if (disabled) return;

    if (variant === 'alphanumeric') {
      textInputRef.current?.focus();
      return;
    }

    focusFirstAvailableDigit();
  }, [disabled, focusFirstAvailableDigit, variant]);

  const effectiveFeedbackType = isError ? 'danger' : feedbackType;

  const lastCompletedValueRef = useRef<string | null>(null);

  useEffect(() => {
    if (disabled) return;

    if (!isComplete) {
      lastCompletedValueRef.current = null;
      return;
    }

    if (lastCompletedValueRef.current === currentValue) {
      return;
    }

    lastCompletedValueRef.current = currentValue;
    onComplete(currentValue);
  }, [currentValue, disabled, isComplete, onComplete]);

  const contextValue = useMemo(
    () => ({
      variant,
      digitCount: resolvedDigitCount,
      value: currentValue,
      digits,
      focusedIndex,
      isComplete,
      isError,
      disabled,
      registerDigitRef,
      focusDigit,
      focusFirstAvailableDigit,
      handleDigitChange,
      handleDigitBackspace,
      handleDigitFocus,
      handleDigitBlur,
      replaceValue,
    }),
    [
      currentValue,
      disabled,
      digits,
      focusDigit,
      focusFirstAvailableDigit,
      focusedIndex,
      handleDigitBackspace,
      handleDigitBlur,
      handleDigitChange,
      handleDigitFocus,
      isComplete,
      isError,
      registerDigitRef,
      replaceValue,
      resolvedDigitCount,
      variant,
    ]
  );

  return (
    <InputPinContextProvider value={contextValue}>
      <StyledInputPinWrapper testID={testID}>
        <StyledInputPinContent>
          <InputPinContainer
            state={containerState}
            disabled={disabled}
            onPress={handleContainerPress}
            underline={false}
            accessibilityLabel={accessibilityLabel}
          >
            {variant === 'alphanumeric' ? (
              <AlphanumericField
                ref={textInputRef}
                placeholder={accessibilityLabel}
                accessibilityLabel={accessibilityLabel}
              />
            ) : (
              <DigitRow variant={variant} />
            )}
          </InputPinContainer>

          {feedbackMessage ? (
            <InputPinFeedback
              message={feedbackMessage}
              type={effectiveFeedbackType}
            />
          ) : null}
        </StyledInputPinContent>
      </StyledInputPinWrapper>
    </InputPinContextProvider>
  );
};
