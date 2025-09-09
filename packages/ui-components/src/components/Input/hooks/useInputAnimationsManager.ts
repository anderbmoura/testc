import { useState, useEffect } from 'react';
import { useShakeAnimation } from './useShakeAnimation';

export interface InputAnimationsManagerProps {
  hasError: boolean;
  errorText: string;
}

/**
 * Hook para gerenciar as animações do Input (shake para erro e contador)
 */
export const useInputAnimationsManager = ({
  hasError,
  errorText,
}: InputAnimationsManagerProps) => {
  const { shakeAnimation: counterShakeAnimation, shake: shakeCounter } =
    useShakeAnimation();
  const { shakeAnimation: errorShakeAnimation, shake: shakeError } =
    useShakeAnimation();

  // Estado para controlar quando mostrar animação de erro
  const [prevError, setPrevError] = useState<string | null>(null);

  useEffect(() => {
    const currentError = hasError ? errorText : null;
    if (hasError && currentError && currentError !== prevError) {
      shakeError();
    }
    setPrevError(currentError);
  }, [hasError, errorText, prevError, shakeError]);

  return {
    counterShakeAnimation,
    errorShakeAnimation,
    shakeCounter,
    shakeError,
  };
};
