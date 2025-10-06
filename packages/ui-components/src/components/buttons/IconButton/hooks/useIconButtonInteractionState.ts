import { useState, useCallback } from 'react';

export type InteractionState =
  | 'default'
  | 'hover'
  | 'pressed'
  | 'focused'
  | 'disabled';

/**
 * Hook para gerenciar estados de interação do IconButton
 */
export const useIconButtonInteractionState = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleFocus = useCallback(() => setIsFocused(true), []);
  const handleBlur = useCallback(() => setIsFocused(false), []);
  const handlePressIn = useCallback(() => setIsPressed(true), []);
  const handlePressOut = useCallback(() => setIsPressed(false), []);
  const handleHoverIn = useCallback(() => setIsHovered(true), []);
  const handleHoverOut = useCallback(() => setIsHovered(false), []);

  const getInteractionState = (): InteractionState => {
    if (isFocused) return 'focused';
    if (isPressed) return 'pressed';
    if (isHovered) return 'hover';
    return 'default';
  };

  return {
    isFocused,
    isPressed,
    isHovered,
    handleFocus,
    handleBlur,
    handlePressIn,
    handlePressOut,
    handleHoverIn,
    handleHoverOut,
    getInteractionState,
  };
};
