import type { InputInternalState } from '../Input.model';

interface InputStateParams {
  disabled: boolean;
  isFocused: boolean;
  isHovering: boolean;
  hasValue: boolean;
  isButtonHovering: boolean;
}

interface HoverBackgroundParams {
  isHovering: boolean;
  disabled: boolean;
  isFocused: boolean;
  isButtonHovering: boolean;
}

/**
 * Calcula o estado interno do Input baseado nas condições atuais
 */
export const calculateInputState = (
  params: InputStateParams
): InputInternalState => {
  const { disabled, isFocused, isHovering, hasValue, isButtonHovering } =
    params;

  if (disabled) return 'disabled';
  if (isFocused) return 'focused';
  if (isHovering && !isButtonHovering) return 'hover';
  if (hasValue) return 'filled';
  return 'empty';
};

/**
 * Determina se deve mostrar background de hover
 */
export const shouldShowHoverBackground = (
  params: HoverBackgroundParams
): boolean => {
  const { isHovering, disabled, isFocused, isButtonHovering } = params;
  return isHovering && !disabled && !isFocused && !isButtonHovering;
};
