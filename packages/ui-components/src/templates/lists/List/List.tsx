import React, { Children, cloneElement, isValidElement } from 'react';
import { StyledListContainer } from './List.styles';
import type { ListProps } from './List.model';
import type { ListItemProps } from '../../../components/ListItem/ListItem.model';

/**
 * Template DSC List
 *
 * Container que organiza uma lista de componentes ListItem, aplicando automaticamente
 * separators a todos os itens exceto o último.
 *
 * @example
 * ```tsx
 * import { List, ListItem, Avatar, Switch, BadgeText } from '@superapp-caixa/dsc-library';
 *
 * // Lista simples com texto
 * <List>
 *   <ListItem
 *     textOnLeft="Primeiro item"
 *     onPress={() => console.log('Item 1')}
 *   />
 *   <ListItem
 *     textOnLeft="Segundo item"
 *     onPress={() => console.log('Item 2')}
 *   />
 *   <ListItem
 *     textOnLeft="Último item"
 *     onPress={() => console.log('Item 3')}
 *   />
 * </List>
 *
 * // Lista com componentes complexos
 * <List>
 *   <ListItem
 *     leftSlot={<Avatar src="user1.jpg" />}
 *     labelTopLeft="Nome"
 *     textOnLeft="João Silva"
 *     labelBottomLeft="Status"
 *     rightSlot={<Switch checked={true} />}
 *     badge={<BadgeText>5</BadgeText>}
 *     onPress={() => console.log('Usuário 1')}
 *   />
 *   <ListItem
 *     leftSlot={<Avatar src="user2.jpg" />}
 *     labelTopLeft="Nome"
 *     textOnLeft="Maria Santos"
 *     labelBottomLeft="Status"
 *     rightSlot={<Switch checked={false} />}
 *     onPress={() => console.log('Usuário 2')}
 *   />
 * </List>
 * ```
 */
export const List: React.FC<ListProps> = ({ children, ...props }) => {
  const childrenArray = Children.toArray(children);

  const processedChildren = childrenArray.map((child, index) => {
    if (!isValidElement<ListItemProps>(child)) {
      return child;
    }

    const isLastItem = index === childrenArray.length - 1;

    return cloneElement(child, {
      ...child.props,
      separator: !isLastItem,
    } as ListItemProps);
  });

  return (
    <StyledListContainer {...props}>{processedChildren}</StyledListContainer>
  );
};
