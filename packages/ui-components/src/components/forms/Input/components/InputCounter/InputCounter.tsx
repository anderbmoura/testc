import React from 'react';

/**
 * Props para o componente InputCounter
 */
export interface InputCounterProps {
  /**
   * Valor atual do contador
   */
  value: number;

  /**
   * Valor máximo do contador
   */
  max: number;
}

/**
 * Subcomponente para contador do Input
 * Este componente é apenas um placeholder - a renderização real é feita pelo Input pai
 */
export const InputCounter: React.FC<InputCounterProps> = ({
  value: _value,
  max: _max,
}) => {
  return null;
};

InputCounter.displayName = 'InputCounterComponent';
