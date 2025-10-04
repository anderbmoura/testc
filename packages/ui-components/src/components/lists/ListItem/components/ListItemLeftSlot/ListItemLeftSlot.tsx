import React from 'react';
import { ListItemLeftSlotProps } from './ListItemLeftSlot.model';
import { LeftSlotContainer } from './ListItemLeftSlot.styles';

/**
 * Componente para o slot esquerdo do ListItem
 *
 * Slot genérico que aceita qualquer conteúdo React
 *
 * @example
 * ```tsx
 * <ListItemLeftSlot>
 *   <Home />
 * </ListItemLeftSlot>
 *
 * <ListItemLeftSlot>
 *   <Avatar src="profile.jpg" />
 * </ListItemLeftSlot>
 * ```
 */
export const ListItemLeftSlot: React.FC<ListItemLeftSlotProps> = ({
  children,
}) => {
  return <LeftSlotContainer>{children}</LeftSlotContainer>;
};
