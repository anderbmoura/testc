import React from 'react';
import { ChipsRightSlotProps } from '../Chips.model';

/**
 * Componente de slot direito para Chips usando composition pattern.
 *
 * @example
 * ```tsx
 * <Chips text="Exemplo" onPress={() => console.log('Chip pressionado')}>
 *   <Chips.RightSlot variant="clear" />
 * </Chips>
 * ```
 */
export const RightSlot: React.FC<ChipsRightSlotProps> = () => {
  // Este componente é apenas um placeholder para composition
  // A lógica real está no componente pai Chips
  return null;
};

RightSlot.displayName = 'Chips.RightSlot';
