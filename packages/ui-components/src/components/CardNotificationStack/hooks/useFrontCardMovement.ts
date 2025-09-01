import { useRef, useState, useCallback } from 'react';
import type {
  CardMovement,
  StackConfiguration,
} from '../CardNotificationStack.model';

/**
 * Hook para gerenciar o movimento do card da frente com throttling.
 *
 * @param configuration - Configurações da pilha
 * @returns Estado e funções para manipular o movimento
 */
export const useFrontCardMovement = (configuration: StackConfiguration) => {
  const frontCardMovementRef = useRef<CardMovement>({
    dx: 0,
    dy: 0,
  });
  const [, triggerRerender] = useState({});
  const lastMovementUpdateTimeRef = useRef<number>(0);

  const shouldThrottleUpdate = useCallback(
    (isReset: boolean): boolean => {
      const currentTime = Date.now();
      return (
        isReset ||
        currentTime - lastMovementUpdateTimeRef.current >
          configuration.animationThrottleDelayMs
      );
    },
    [configuration.animationThrottleDelayMs]
  );

  const updateFrontCardMovement = useCallback(
    (dx: number, dy: number) => {
      const isResetMovement = dx === 0 && dy === 0;

      if (shouldThrottleUpdate(isResetMovement)) {
        frontCardMovementRef.current = { dx, dy };
        triggerRerender({});
        lastMovementUpdateTimeRef.current = Date.now();
      }
    },
    [shouldThrottleUpdate]
  );

  const resetFrontCardMovement = useCallback(() => {
    updateFrontCardMovement(0, 0);
  }, [updateFrontCardMovement]);

  return {
    frontCardMovement: frontCardMovementRef.current,
    updateFrontCardMovement,
    resetFrontCardMovement,
  };
};
