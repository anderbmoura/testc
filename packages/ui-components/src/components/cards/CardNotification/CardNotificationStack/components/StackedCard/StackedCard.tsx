import React from 'react';
import { CardNotificationStackItem } from '../../CardNotificationStack.styles';
import type { StackedCardProps } from './StackedCard.model';
import { zIndex } from '../../../../../../config/tokens/zIndex/zIndex';

const Z_INDEX_BASE = zIndex[100];

export const StackedCard: React.FC<StackedCardProps> = ({
  children,
  activePosition,
  transform,
  isFrontCard,
}) => {
  if (isFrontCard) {
    return (
      <CardNotificationStackItem
        position="relative"
        zIndex={Z_INDEX_BASE - activePosition}
        pointerEvents="auto"
      >
        {children}
      </CardNotificationStackItem>
    );
  }

  if (!transform) {
    return null;
  }

  return (
    <CardNotificationStackItem
      zIndex={Z_INDEX_BASE - activePosition}
      pointerEvents="none"
      y={transform.translateY}
      scale={transform.scale}
      animation="75ms"
      animateOnly={['transform']}
    >
      {children}
    </CardNotificationStackItem>
  );
};
