import { useState, useMemo } from 'react';

export type TabsInteractionState =
  | 'default'
  | 'hovered'
  | 'pressed'
  | 'focused';

/**
 * Hook para gerenciar estados de interação (focus, hover, press) para cada TabItem
 */
export const useTabsInteractionState = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const currentState: TabsInteractionState = useMemo(() => {
    if (isFocused) return 'focused';
    if (isPressed) return 'pressed';
    if (isHovered) return 'hovered';
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

  return { currentState, handlers };
};
