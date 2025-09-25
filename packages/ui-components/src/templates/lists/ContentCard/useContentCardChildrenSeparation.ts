import React from 'react';
import type { ListItemProps } from '../../../components/ListItem/ListItem.model';
import type { ListFooterProps } from '../../../components/ListFooter/ListFooter.model';

interface ContentCardChildrenSeparationResult {
  listItems: React.ReactElement<ListItemProps>[];
  listFooter: React.ReactElement<ListFooterProps> | null;
}

/**
 * Hook responsável por separar os children do ContentCard em ListItems e ListFooter.
 *
 * Garante que os componentes sejam renderizados na ordem correta:
 * 1. ListItems
 * 2. ListFooter (se presente)
 */
export const useContentCardChildrenSeparation = (
  children:
    | React.ReactElement<ListItemProps | ListFooterProps>
    | React.ReactElement<ListItemProps | ListFooterProps>[]
): ContentCardChildrenSeparationResult => {
  return React.useMemo(() => {
    const childrenArray = React.Children.toArray(
      children
    ) as React.ReactElement<ListItemProps | ListFooterProps>[];

    const listItems: React.ReactElement<ListItemProps>[] = [];
    let listFooter: React.ReactElement<ListFooterProps> | null = null;

    childrenArray.forEach(child => {
      if (React.isValidElement(child)) {
        if ('labelLeft' in child.props || 'labelRight' in child.props) {
          listFooter = child as React.ReactElement<ListFooterProps>;
        } else {
          listItems.push(child as React.ReactElement<ListItemProps>);
        }
      }
    });

    return {
      listItems,
      listFooter,
    };
  }, [children]);
};
