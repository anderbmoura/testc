import { useCallback, useRef } from 'react';
import { Gesture, type LongPressGesture } from 'react-native-gesture-handler';
import { STORIES_CONFIG } from '../Stories.config';

export interface UsePressGesturesProps {
  /**
   * Callback executado quando o usuário pressiona (touchDown/mouseDown)
   */
  onPressStart?: () => void;

  /**
   * Callback executado quando o usuário solta (touchUp/mouseUp)
   */
  onPressEnd?: () => void;

  /**
   * Se o gesto está habilitado
   * @default true
   */
  enabled?: boolean;
}

export interface UsePressGesturesReturn {
  /**
   * Gesto de pressão para ser usado com GestureDetector
   */
  pressGesture: LongPressGesture;
}

/**
 * Hook para detectar gestos de pressão (touch/mouse press and release)
 *
 * Utiliza react-native-gesture-handler para detectar quando o usuário
 * pressiona e solta o dedo/mouse na tela, permitindo pausar/retomar
 * a progressão dos stories de forma elegante.
 */
export const usePressGestures = ({
  onPressStart,
  onPressEnd,
  enabled = true,
}: UsePressGesturesProps): UsePressGesturesReturn => {
  const isPressed = useRef(false);

  const handlePressStart = useCallback(() => {
    if (!enabled || isPressed.current) return;

    isPressed.current = true;
    onPressStart?.();
  }, [enabled, onPressStart]);

  const handlePressEnd = useCallback(() => {
    if (!enabled || !isPressed.current) return;

    isPressed.current = false;
    onPressEnd?.();
  }, [enabled, onPressEnd]);

  const pressGesture = Gesture.LongPress()
    .minDuration(STORIES_CONFIG.PRESS.MIN_DURATION)
    .onStart(handlePressStart)
    .onEnd(handlePressEnd)
    .onFinalize(() => {
      if (isPressed.current) {
        isPressed.current = false;
        onPressEnd?.();
      }
    })
    .runOnJS(true)
    .enabled(enabled);

  return {
    pressGesture,
  };
};
