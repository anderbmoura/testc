import React from 'react';
import { ListItemRightSlotProps } from './ListItemRightSlot.model';
import { RightSlotContainer } from './ListItemRightSlot.styles';

/**
 * Componente para o slot direito do ListItem
 *
 * Slot genérico que aceita qualquer conteúdo React
 *
 * @example
 * ```tsx
 * <ListItemRightSlot>
 *   <ArrowRight />
 * </ListItemRightSlot>
 *
 * <ListItemRightSlot>
 *   <Switch checked={isEnabled} onCheckedChange={setIsEnabled} />
 * </ListItemRightSlot>
 * ```
 */
export const ListItemRightSlot: React.FC<ListItemRightSlotProps> = ({
  children,
}) => {
  return <RightSlotContainer>{children}</RightSlotContainer>;
};
