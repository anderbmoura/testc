import { useState, useMemo } from 'react';

export type InteractionState = 'default' | 'hover' | 'pressed' | 'focused';

/**
 * Hook para gerenciar estados de interação (focus, hover, press)
 */
export const useInteractionState = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const currentState: InteractionState = useMemo(() => {
    if (isPressed) return 'pressed';
    if (isHovered) return 'hover';
    if (isFocused) return 'focused';
    return 'default';
  }, [isFocused, isHovered, isPressed]);

  const handlers = useMemo(
    () => ({
      onFocus: () => setIsFocused(true),
      onBlur: () => setIsFocused(false),
      onHoverIn: () => setIsHovered(true),
      onHoverOut: () => setIsHovered(false),
      onPressIn: () => setIsPressed(true),
      onPressOut: () => setIsPressed(false),
    }),
    []
  );

  return { isFocused, currentState, handlers };
};
