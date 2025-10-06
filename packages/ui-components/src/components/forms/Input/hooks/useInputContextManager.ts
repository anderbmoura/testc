import { useMemo } from 'react';
import type { InputContextValue } from '../context/InputContext';
import { DEFAULT_MAX_LENGTH } from '../constants';
import {
  calculateInputState,
  shouldShowHoverBackground,
} from '../utils/stateUtils';

export interface InputContextManagerProps {
  disabled: boolean;
  isFocused: boolean;
  currentState: string;
  value: string;
  hasError: boolean;
  isButtonHovering: boolean;
  multiline: boolean;
  counterChild: React.ReactElement | null;
  onChangeText?: (text: string) => void;
  focusInput: () => void;
}

/**
 * Hook para gerenciar o contexto do Input
 */
export const useInputContextManager = ({
  disabled,
  isFocused,
  currentState,
  value,
  hasError,
  isButtonHovering,
  multiline,
  counterChild,
  onChangeText,
  focusInput,
}: InputContextManagerProps): InputContextValue => {
  const internalState = useMemo(
    () =>
      calculateInputState({
        disabled: disabled || false,
        isFocused: isFocused || false,
        isHovering: currentState === 'hover',
        hasValue: Boolean(value && value.length > 0),
        isButtonHovering,
      }),
    [disabled, isFocused, currentState, value, isButtonHovering]
  );

  const shouldShowHoverBg = useMemo(
    () =>
      shouldShowHoverBackground({
        isHovering: currentState === 'hover',
        disabled: disabled || false,
        isFocused: isFocused || false,
        isButtonHovering,
      }),
    [currentState, disabled, isFocused, isButtonHovering]
  );

  const maxLength = useMemo(() => {
    if (!counterChild) return DEFAULT_MAX_LENGTH;
    const props = counterChild.props as Record<string, unknown>;
    return typeof props.max === 'number' ? props.max : DEFAULT_MAX_LENGTH;
  }, [counterChild]);

  const contextValue: InputContextValue = useMemo(
    () => ({
      internalState,
      disabled: disabled || false,
      hasError,
      isFocused: isFocused || false,
      isFilled: internalState === 'filled',
      shouldShowHoverBackground: shouldShowHoverBg,
      multiline: multiline || false,
      maxLength,
      currentLength: value?.length || 0,
      value: value || '',
      onChangeText,
      focusInput,
    }),
    [
      internalState,
      disabled,
      hasError,
      isFocused,
      shouldShowHoverBg,
      multiline,
      maxLength,
      value,
      onChangeText,
      focusInput,
    ]
  );

  return contextValue;
};
