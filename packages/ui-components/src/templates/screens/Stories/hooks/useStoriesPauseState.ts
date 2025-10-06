import { useState, useCallback } from 'react';

/**
 * Hook para gerenciar o estado de pausa por pressão
 */
export const useStoriesPauseState = () => {
  const [isPausedByPress, setIsPausedByPress] = useState(false);

  const startPause = useCallback(() => {
    setIsPausedByPress(true);
  }, []);

  const endPause = useCallback(() => {
    setIsPausedByPress(false);
  }, []);

  const resetPauseOnNavigation = useCallback(() => {
    setIsPausedByPress(false);
  }, []);

  return {
    isPausedByPress,
    startPause,
    endPause,
    resetPauseOnNavigation,
  };
};
