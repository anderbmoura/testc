import { useState, useCallback, useEffect } from 'react';
import { STACK_CONSTANTS } from '../constants';

const VISIBILITY_CONSTANTS = {
  INITIAL_ACTIVE_POSITION: 0,
  POSITION_INCREMENT: 1,
} as const;

/**
 * Hook para gerenciar o estado de visibilidade dos cards na pilha.
 *
 * @param initialCount - Número inicial de cards
 * @returns Estado e funções para manipular a visibilidade dos cards
 */
export const useCardVisibilityState = (initialCount: number) => {
  const [cardVisibilityStates, setCardVisibilityStates] = useState<boolean[]>(
    () => new Array(initialCount).fill(true)
  );

  // Atualiza o estado quando o número de cards muda
  useEffect(() => {
    setCardVisibilityStates(prev => {
      if (initialCount > prev.length) {
        return [...prev, ...new Array(initialCount - prev.length).fill(true)];
      } else if (initialCount < prev.length) {
        return prev.slice(
          VISIBILITY_CONSTANTS.INITIAL_ACTIVE_POSITION,
          initialCount
        );
      }
      return prev;
    });
  }, [initialCount]);

  const markCardAsRemoved = useCallback((index: number) => {
    setCardVisibilityStates(prev => {
      const newState = [...prev];
      newState[index] = false;
      return newState;
    });
  }, []);

  /**
   * Calcula a posição ativa de um card considerando apenas cards visíveis.
   *
   * @param originalIndex - Índice original do card
   * @returns Posição ativa (0 = primeiro card visível) ou -1 se invisível
   */
  const calculateActiveCardPosition = useCallback(
    (originalIndex: number): number => {
      let activePosition = VISIBILITY_CONSTANTS.INITIAL_ACTIVE_POSITION;
      for (
        let i = VISIBILITY_CONSTANTS.INITIAL_ACTIVE_POSITION;
        i <= originalIndex;
        i++
      ) {
        if (cardVisibilityStates[i]) {
          if (i === originalIndex) {
            return activePosition;
          }
          activePosition += VISIBILITY_CONSTANTS.POSITION_INCREMENT;
        }
      }
      return STACK_CONSTANTS.INACTIVE_CARD_POSITION;
    },
    [cardVisibilityStates]
  );

  return {
    cardVisibilityStates,
    markCardAsRemoved,
    calculateActiveCardPosition,
  };
};
