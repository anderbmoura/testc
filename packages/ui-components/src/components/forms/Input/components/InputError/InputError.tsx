import React from 'react';

/**
 * Props para o componente InputError
 */
export interface InputErrorProps {
  /**
   * Mensagem de erro
   */
  value: string;
}

/**
 * Subcomponente para erro do Input
 * Este componente é apenas um placeholder - a renderização real é feita pelo Input pai
 */
export const InputError: React.FC<InputErrorProps> = ({ value: _value }) => {
  return null;
};

InputError.displayName = 'InputErrorComponent';
