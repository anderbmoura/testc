import React, { Children, cloneElement, isValidElement } from 'react';
import { StyledListContainer } from './List.styles';
import type { ListProps } from './List.model';
import type { ListItemProps } from '../../../components/ListItem/ListItem.model';
import type { ListFooterProps } from '../../../components/ListFooter/ListFooter.model';

/**
 * Template DSC List
 *
 * Container que organiza uma lista de componentes ListItem e ListFooter, aplicando automaticamente
 * separators aos ListItems (exceto o último ou quando seguido por ListFooter).
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
    if (!isValidElement<ListItemProps | ListFooterProps>(child)) {
      return child;
    }

    if ('labelLeft' in child.props || 'labelRight' in child.props) {
      return child;
    }

    const isLastItem = index === childrenArray.length - 1;
    const nextChild = childrenArray[index + 1];
    const nextIsFooter =
      nextChild &&
      isValidElement(nextChild) &&
      isValidElement<ListFooterProps>(nextChild) &&
      ('labelLeft' in nextChild.props || 'labelRight' in nextChild.props);

    return cloneElement(child, {
      ...child.props,
      separator: !isLastItem && !nextIsFooter,
    } as ListItemProps);
  });

  return (
    <StyledListContainer {...props}>{processedChildren}</StyledListContainer>
  );
};
