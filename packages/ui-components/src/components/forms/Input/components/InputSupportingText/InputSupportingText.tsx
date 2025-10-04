import React from 'react';

/**
 * Props para o componente InputSupportingText
 */
export interface InputSupportingTextProps {
  /**
   * Texto de apoio
   */
  value: string;
}

/**
 * Subcomponente para texto de apoio do Input
 * Este componente é apenas um placeholder - a renderização real é feita pelo Input pai
 */
export const InputSupportingText: React.FC<InputSupportingTextProps> = ({
  value: _value,
}) => {
  return null;
};

InputSupportingText.displayName = 'InputSupportingTextComponent';
