import { useState, useCallback } from 'react';
import type { ToolbarItemInteractionState } from '../ToolbarItem.model';

/**
 * Hook para gerenciar estados de interação do ToolbarItem
 */
export const useToolbarItemInteractionState = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleFocus = useCallback(() => setIsFocused(true), []);
  const handleBlur = useCallback(() => setIsFocused(false), []);
  const handlePressIn = useCallback(() => setIsPressed(true), []);
  const handlePressOut = useCallback(() => setIsPressed(false), []);
  const handleHoverIn = useCallback(() => setIsHovered(true), []);
  const handleHoverOut = useCallback(() => setIsHovered(false), []);

  const getInteractionState = (): ToolbarItemInteractionState => {
    if (isFocused) return 'focus';
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
