import React from 'react';
import { ChipsLeftSlotProps } from '../Chips.model';

/**
 * Componente de slot esquerdo para Chips usando composition pattern.
 *
 * @example
 * ```tsx
 * <Chips text="Exemplo">
 *   <Chips.LeftSlot variant="icon" icon={<Star />} />
 * </Chips>
 * ```
 */
export const LeftSlot: React.FC<ChipsLeftSlotProps> = () => {
  // Este componente é apenas um placeholder para composition
  // A lógica real está no componente pai Chips
  return null;
};

LeftSlot.displayName = 'Chips.LeftSlot';
