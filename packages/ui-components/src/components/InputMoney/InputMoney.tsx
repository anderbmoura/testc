import React, { useMemo, useCallback, useRef, useEffect } from 'react';
import type { TextInput } from 'react-native';
import { Animated } from 'react-native';
import { Lock } from 'iconoir-react-native';
import { useTransformIcon } from '../../utils';
import { useInputMoneyInteractionState } from './hooks/useInputMoneyInteractionState';
import { useInputMoneyTextInput } from './hooks/useInputMoneyTextInput';
import { useInputMoneyDisplay } from './hooks/useInputMoneyDisplay';
import { useShakeAnimation } from './hooks/useShakeAnimation';
import { useKeyboardNavigation } from './hooks/useKeyboardNavigation';
import { InputMoneyInput } from './components/InputMoneyInput';
import { InputMoneyCurrency } from './components/InputMoneyCurrency';
import { InputMoneyValue } from './components/InputMoneyValue';
import {
  InputMoneyContainer,
  InputMoneyFeedbackContainer,
} from './components/InputMoneyContainer';
import { InputMoneyFeedback } from './components/InputMoneyFeedback';
import { StyledInputMoneyWrapper } from './InputMoney.styles';
import { formatDisplayValue, isValueEmpty } from './utils/moneyFormatUtils';
import { DEFAULT_MAX_VALUE, FOCUS_MOUNT_DELAY } from './constants';
import type {
  InputMoneyProps,
  InputMoneyInternalState,
} from './InputMoney.model';
import { iconSize } from '../../config/tokens/iconSize/iconSize';

/**
 * Componente DSC InputMoney
 *
 * Campo de entrada monetário.
 * Suporta diferentes estados de interação e validação.
 *
 * @example
 * ```tsx
 * import { InputMoney } from '@superapp-caixa/dsc-library';
 *
 * // Uso básico
 * <InputMoney
 *   value={1234.56}
 *   currency="R$"
 *   onValueChange={(value) => setValue(value)}
 * />
 *
 * // Com valor máximo customizado
 * <InputMoney
 *   value={500}
 *   maxValue={1000}
 *   onValueChange={(value) => setValue(value)}
 * />
 *
 * // Com feedback
 * <InputMoney
 *   value={0}
 *   feedbackText="Digite um valor"
 *   feedbackVariant="neutral"
 * />
 *
 * // Somente leitura
 * <InputMoney
 *   value={9999.99}
 *   readOnly={true}
 *   smallFont={false}
 * />
 *
 * // Desabilitado
 * <InputMoney
 *   value={500.00}
 *   disabled={true}
 * />
 *
 * // Com foco automático
 * <InputMoney
 *   value={0}
 *   autoFocus={true}
 *   onValueChange={(value) => setValue(value)}
 * />
 * ```
 */
export const InputMoney: React.FC<InputMoneyProps> = ({
  value = 0,
  maxValue = DEFAULT_MAX_VALUE,
  currency = 'R$',
  smallFont = false,
  feedbackText,
  feedbackVariant = 'danger',
  disabled = false,
  readOnly = false,
  autoFocus = false,
  onPress,
  onFocus,
  onBlur,
  onHoverIn,
  onHoverOut,
  onPressIn,
  onPressOut,
  onValueChange,
}) => {
  const { isFocused, currentState, handlers } = useInputMoneyInteractionState();
  const { isKeyboardNavigating } = useKeyboardNavigation();
  const transformIcon = useTransformIcon();
  const inputRef = useRef<TextInput>(null);
  const { shakeAnimation, shake } = useShakeAnimation();

  useEffect(() => {
    if (value > maxValue && onValueChange) {
      onValueChange(maxValue);
    }
  }, [value, maxValue, onValueChange]);

  useEffect(() => {
    if (autoFocus && !disabled && !readOnly && inputRef.current) {
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, FOCUS_MOUNT_DELAY);

      return () => clearTimeout(timer);
    }
  }, [autoFocus, disabled, readOnly]);

  useEffect(() => {
    if (feedbackText && feedbackVariant === 'danger') {
      shake();
    }
  }, [feedbackText, feedbackVariant, shake]);

  const displayValue = useMemo(() => formatDisplayValue(value), [value]);
  const isEmpty = useMemo(() => isValueEmpty(value), [value]);

  const effectiveState: InputMoneyInternalState = useMemo(() => {
    if (disabled) return 'disabled';
    if (readOnly) return 'readOnly';
    if (isFocused) return 'focused';
    if (currentState === 'hover') return 'hover';
    if (isEmpty) return 'empty';
    return 'filled';
  }, [disabled, readOnly, isFocused, currentState, isEmpty]);

  const { colors, shouldUseSmallFont } = useInputMoneyDisplay({
    effectiveState,
    value,
    smallFont,
  });

  const {
    editingText,
    isEditing,
    inputDigits,
    handleStartEditing,
    handleEndEditing,
    handleChangeText,
    handleKeyPress,
  } = useInputMoneyTextInput({
    value,
    maxValue,
    onValueChange,
    shake,
    disabled,
    readOnly,
  });

  const lockIcon = useMemo(() => {
    if (effectiveState !== 'readOnly') return null;
    return transformIcon(Lock, iconSize.medium, '$onNeutral2');
  }, [effectiveState, transformIcon]);

  const handlePress = useCallback(() => {
    if (disabled || readOnly) return;
    inputRef.current?.focus();
    onPress?.();
  }, [disabled, readOnly, onPress]);

  const handleFocus = useCallback(() => {
    if (disabled || readOnly) return;
    handleStartEditing();
    handlers.onFocus();
    onFocus?.();
  }, [disabled, readOnly, handleStartEditing, handlers, onFocus]);

  const handleBlur = useCallback(() => {
    if (disabled || readOnly) return;
    handleEndEditing();
    handlers.onBlur();
    onBlur?.();
  }, [disabled, readOnly, handleEndEditing, handlers, onBlur]);

  const handleHoverIn = useCallback(() => {
    if (disabled || readOnly) return;
    handlers.onHoverIn();
    onHoverIn?.();
  }, [disabled, readOnly, handlers, onHoverIn]);

  const handleHoverOut = useCallback(() => {
    if (disabled || readOnly) return;
    handlers.onHoverOut();
    onHoverOut?.();
  }, [disabled, readOnly, handlers, onHoverOut]);

  const handlePressIn = useCallback(() => {
    if (disabled || readOnly) return;
    inputRef.current?.focus();
    handlers.onPressIn();
    onPressIn?.();
  }, [disabled, readOnly, handlers, onPressIn]);

  const handlePressOut = useCallback(() => {
    if (disabled || readOnly) return;
    handlers.onPressOut();
    onPressOut?.();
  }, [disabled, readOnly, handlers, onPressOut]);

  const shouldShowHoverBackground = effectiveState === 'hover';
  const shouldShowFeedback = Boolean(feedbackText);

  return (
    <StyledInputMoneyWrapper
      onPress={handlePress}
      onHoverIn={handleHoverIn}
      onHoverOut={handleHoverOut}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      <Animated.View
        style={{
          transform: [{ translateX: shakeAnimation }],
        }}
      >
        <InputMoneyContainer
          shouldShowHoverBackground={shouldShowHoverBackground}
          isFocused={effectiveState === 'focused'}
          isKeyboardFocused={
            effectiveState === 'focused' && isKeyboardNavigating
          }
          onPress={handlePress}
          onHoverIn={handleHoverIn}
          onHoverOut={handleHoverOut}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
        >
          <InputMoneyInput
            inputRef={inputRef}
            disabled={disabled}
            readOnly={readOnly}
            isEditing={isEditing}
            inputDigits={inputDigits}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChangeText={handleChangeText}
            onKeyPress={handleKeyPress}
          />

          <InputMoneyCurrency
            currency={currency}
            color={colors.currency}
            useSmallFont={shouldUseSmallFont}
          />

          <InputMoneyValue
            displayValue={displayValue}
            color={colors.value}
            useSmallFont={shouldUseSmallFont}
            isEditing={isEditing}
            editingText={editingText}
          />

          {lockIcon}
        </InputMoneyContainer>
      </Animated.View>

      {shouldShowFeedback && (
        <InputMoneyFeedbackContainer>
          <InputMoneyFeedback
            text={feedbackText}
            variant={feedbackVariant}
            showIcon={true}
          />
        </InputMoneyFeedbackContainer>
      )}
    </StyledInputMoneyWrapper>
  );
};
