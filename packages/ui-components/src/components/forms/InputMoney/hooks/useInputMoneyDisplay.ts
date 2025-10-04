import { useMemo } from 'react';
import type { InputMoneyInternalState } from '../InputMoney.model';
import { LARGE_VALUE_THRESHOLD } from '../constants';

/**
 * Props para o hook useInputMoneyDisplay
 */
export interface UseInputMoneyDisplayProps {
  /**
   * Estado efetivo do input
   */
  effectiveState: InputMoneyInternalState;

  /**
   * Valor numérico atual
   */
  value: number;

  /**
   * Define se deve usar fonte pequena
   */
  smallFont: boolean;
}

/**
 * Interface para as cores do componente
 */
export interface InputMoneyColors {
  currency: string;
  value: string;
}

/**
 * Hook para gerenciar cores e tipografia do InputMoney
 */
export const useInputMoneyDisplay = ({
  effectiveState,
  value,
  smallFont,
}: UseInputMoneyDisplayProps) => {
  const colors: InputMoneyColors = useMemo(() => {
    switch (effectiveState) {
      case 'disabled':
        return {
          currency: '$onDisabled',
          value: '$onDisabled',
        };
      case 'readOnly':
        return {
          currency: '$onNeutral3',
          value: '$onNeutral2',
        };
      case 'filled':
        return {
          currency: '$onNeutral3',
          value: '$onNeutral1',
        };
      case 'hover':
      case 'focused':
        return {
          currency: '$onNeutral1',
          value: '$onNeutral1',
        };
      default: // empty
        return {
          currency: '$onNeutral1',
          value: '$onNeutral3',
        };
    }
  }, [effectiveState]);

  const shouldUseSmallFont = useMemo(() => {
    return value > LARGE_VALUE_THRESHOLD || smallFont;
  }, [value, smallFont]);

  return {
    colors,
    shouldUseSmallFont,
  };
};
