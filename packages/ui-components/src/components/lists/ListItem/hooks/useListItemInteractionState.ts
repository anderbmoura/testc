import { useMemo, useState } from 'react';

/**
 * Estados de interação disponíveis para o ListItem
 */
export type ListItemInteractionState =
  | 'default'
  | 'hovered'
  | 'pressed'
  | 'focused'
  | 'disabled';

/**
 * Propriedades para o hook de estado de interação
 */
export interface UseListItemInteractionStateProps {
  disabled?: boolean;
  onPress?: () => void;
}

/**
 * Valor de retorno do hook de estado de interação
 */
export interface UseListItemInteractionStateReturn {
  currentState: ListItemInteractionState;
  handlers: {
    onFocus: () => void;
    onBlur: () => void;
    onHoverIn: () => void;
    onHoverOut: () => void;
    onPressIn: () => void;
    onPressOut: () => void;
    onPress: () => void;
  };
  states: {
    isFocused: boolean;
    isHovered: boolean;
    isPressed: boolean;
    disabled: boolean;
  };
}

/**
 * Hook para gerenciar estados de interação do ListItem
 *
 * Controla os estados de focus, hover, press e disabled seguindo a hierarquia:
 * disabled > focused > pressed > hovered > default
 */
export const useListItemInteractionState = ({
  disabled = false,
  onPress,
}: UseListItemInteractionStateProps): UseListItemInteractionStateReturn => {
  const [isFocused, setIsFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const currentState = useMemo<ListItemInteractionState>(() => {
    if (disabled) return 'disabled';
    if (isFocused) return 'focused';
    if (isPressed) return 'pressed';
    if (isHovered) return 'hovered';
    return 'default';
  }, [disabled, isFocused, isHovered, isPressed]);

  const handlers = useMemo(
    () => ({
      onFocus: () => {
        if (!disabled) setIsFocused(true);
      },
      onBlur: () => {
        if (!disabled) setIsFocused(false);
      },
      onHoverIn: () => {
        if (!disabled) setIsHovered(true);
      },
      onHoverOut: () => {
        if (!disabled) setIsHovered(false);
      },
      onPressIn: () => {
        if (!disabled) setIsPressed(true);
      },
      onPressOut: () => {
        if (!disabled) setIsPressed(false);
      },
      onPress: () => {
        if (!disabled && onPress) {
          onPress();
        }
      },
    }),
    [disabled, onPress]
  );

  const states = useMemo(
    () => ({
      isFocused,
      isHovered,
      isPressed,
      disabled,
    }),
    [isFocused, isHovered, isPressed, disabled]
  );

  return {
    currentState,
    handlers,
    states,
  };
};
