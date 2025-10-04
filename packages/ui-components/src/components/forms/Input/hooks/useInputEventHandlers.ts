import { useMemo } from 'react';

export interface InputEventHandlersProps {
  onFocus?: () => void;
  onBlur?: () => void;
  onHoverIn?: () => void;
  onHoverOut?: () => void;
  onPressIn?: () => void;
  onPressOut?: () => void;
  handlers: {
    onFocus: () => void;
    onBlur: () => void;
    onHoverIn: () => void;
    onHoverOut: () => void;
    onPressIn: () => void;
    onPressOut: () => void;
  };
}

/**
 * Hook para gerenciar os event handlers do Input
 */
export const useInputEventHandlers = ({
  onFocus,
  onBlur,
  onHoverIn,
  onHoverOut,
  onPressIn,
  onPressOut,
  handlers,
}: InputEventHandlersProps) => {
  const eventHandlers = useMemo(
    () => ({
      onFocus: () => {
        handlers.onFocus();
        onFocus?.();
      },
      onBlur: () => {
        handlers.onBlur();
        onBlur?.();
      },
      onHoverIn: () => {
        handlers.onHoverIn();
        onHoverIn?.();
      },
      onHoverOut: () => {
        handlers.onHoverOut();
        onHoverOut?.();
      },
      onPressIn: () => {
        handlers.onPressIn();
        onPressIn?.();
      },
      onPressOut: () => {
        handlers.onPressOut();
        onPressOut?.();
      },
    }),
    [handlers, onFocus, onBlur, onHoverIn, onHoverOut, onPressIn, onPressOut]
  );

  return eventHandlers;
};
