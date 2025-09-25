import React, { ReactNode, ReactElement, isValidElement, useMemo } from 'react';
import { ListHeading } from '../../../../components/ListHeading';
import { SegmentedButton } from '../../../../components/SegmentedButton';
import { ListFooter } from '../../../../components/ListFooter';
import { ListItemProps } from '../../../../components/ListItem/ListItem.model';

interface CategorizedChildren {
  listHeading: ReactElement | null;
  segmentedButton: ReactElement | null;
  listFooter: ReactElement | null;
  listItems: ReactElement<ListItemProps>[];
}

type ComponentType = {
  name?: string;
  displayName?: string;
};

/**
 * Hook para separar e categorizar os children do OptionsList,
 * garantindo a ordem correta independente da ordem de entrada.
 */
export const useOptionsListChildrenSeparation = (
  children: ReactNode
): CategorizedChildren => {
  return useMemo(() => {
    const childrenArray = React.Children.toArray(children);

    const categorizedChildren: CategorizedChildren = {
      listHeading: null,
      segmentedButton: null,
      listFooter: null,
      listItems: [],
    };

    const processChild = (child: ReactNode) => {
      if (!isValidElement(child)) {
        return;
      }

      if (child.type === React.Fragment) {
        const fragmentChildren = React.Children.toArray(
          (child as ReactElement<{ children: ReactNode }>).props.children
        );
        fragmentChildren.forEach(processChild);
        return;
      }

      const isListHeading =
        child.type === ListHeading ||
        (child.type as ComponentType)?.name === 'ListHeading' ||
        (child.type as ComponentType)?.displayName === 'ListHeading';

      const isSegmentedButton =
        child.type === SegmentedButton ||
        (child.type as ComponentType)?.name === 'SegmentedButton' ||
        (child.type as ComponentType)?.displayName === 'SegmentedButton';

      const isListFooter =
        child.type === ListFooter ||
        (child.type as ComponentType)?.name === 'ListFooter' ||
        (child.type as ComponentType)?.displayName === 'ListFooter';

      if (isListHeading) {
        categorizedChildren.listHeading = child;
      } else if (isSegmentedButton) {
        categorizedChildren.segmentedButton = child;
      } else if (isListFooter) {
        categorizedChildren.listFooter = child;
      } else {
        categorizedChildren.listItems.push(
          child as ReactElement<ListItemProps>
        );
      }
    };

    childrenArray.forEach(processChild);

    return categorizedChildren;
  }, [children]);
};
