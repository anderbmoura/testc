import { useCallback } from 'react';
import { Gesture, type PanGesture } from 'react-native-gesture-handler';

export interface UseSwipeGesturesProps {
  /**
   * Callback executado quando swipe para a direita (próximo story)
   */
  onSwipeRight?: () => void;

  /**
   * Callback executado quando swipe para a esquerda (story anterior)
   */
  onSwipeLeft?: () => void;

  /**
   * Velocidade mínima do swipe para ser considerado válido
   * @default 500
   */
  minVelocity?: number;

  /**
   * Distância mínima do swipe para ser considerado válido
   * @default 50
   */
  minDistance?: number;

  /**
   * Se os gestos estão habilitados
   * @default true
   */
  enabled?: boolean;
}

export interface UseSwipeGesturesReturn {
  /**
   * Gesture do react-native-gesture-handler para ser usado no GestureDetector
   */
  panGesture: PanGesture;
}

export const useSwipeGestures = ({
  onSwipeRight,
  onSwipeLeft,
  minVelocity = 500,
  minDistance = 50,
  enabled = true,
}: UseSwipeGesturesProps): UseSwipeGesturesReturn => {
  const handleSwipe = useCallback(
    (velocityX: number, translationX: number) => {
      if (!enabled) return;

      if (Math.abs(translationX) < minDistance) return;

      if (Math.abs(velocityX) < minVelocity) return;

      if (translationX > 0 && velocityX > 0) {
        onSwipeLeft?.();
      } else if (translationX < 0 && velocityX < 0) {
        onSwipeRight?.();
      }
    },
    [enabled, minVelocity, minDistance, onSwipeRight, onSwipeLeft]
  );

  const panGesture = Gesture.Pan()
    .enabled(enabled)
    .onEnd(event => {
      handleSwipe(event.velocityX, event.translationX);
    })
    .runOnJS(true);

  return {
    panGesture,
  };
};
