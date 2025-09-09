import React, { useMemo } from 'react';
import { StyledInputContainer } from './InputContainer.styles';
import type { InputContainerProps } from './InputContainer.model';

/**
 * Determina o estado visual do container baseado nas condições atuais
 *
 * @param disabled - Se o input está desabilitado
 * @param hasError - Se o input tem erro
 * @param isFocused - Se o input está focado
 * @param shouldShowHoverBackground - Se deve mostrar hover
 * @param isFilled - Se o input tem conteúdo
 * @returns Estado visual do container
 */
const getContainerState = (
  disabled: boolean,
  hasError: boolean,
  isFocused: boolean,
  shouldShowHoverBackground: boolean,
  isFilled: boolean
) => {
  if (disabled) return 'disabled';
  if (hasError && isFocused) return 'error-focused';
  if (hasError && shouldShowHoverBackground) return 'error-hover';
  if (hasError) return 'error';
  if (isFocused) return 'focused';
  if (shouldShowHoverBackground) return 'hover';
  if (isFilled) return 'filled';

  return 'default';
};

/**
 * Container principal do Input que gerencia estados visuais e interações
 */
export const InputContainer: React.FC<InputContainerProps> = ({
  children,
  shouldShowHoverBackground,
  isFocused,
  hasError,
  disabled,
  isFilled,
  onPress,
  onHoverIn,
  onHoverOut,
  onPressIn,
  onPressOut,
  onFocus,
  onBlur,
}) => {
  const containerState = useMemo(
    () =>
      getContainerState(
        disabled || false,
        hasError || false,
        isFocused || false,
        shouldShowHoverBackground || false,
        isFilled || false
      ),
    [disabled, hasError, isFocused, shouldShowHoverBackground, isFilled]
  );

  return (
    <StyledInputContainer
      state={containerState}
      onPress={disabled ? undefined : onPress}
      onHoverIn={disabled ? undefined : onHoverIn}
      onHoverOut={disabled ? undefined : onHoverOut}
      onPressIn={disabled ? undefined : onPressIn}
      onPressOut={disabled ? undefined : onPressOut}
      onFocus={disabled ? undefined : onFocus}
      onBlur={disabled ? undefined : onBlur}
    >
      {children}
    </StyledInputContainer>
  );
};
