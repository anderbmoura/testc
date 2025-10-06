import React, { useMemo } from 'react';
import { CardNotificationStackContainer } from './CardNotificationStack.styles';
import { StackedCard } from './components/StackedCard';
import { useCardVisibilityState } from './hooks/useCardVisibilityState';
import { useFrontCardMovement } from './hooks/useFrontCardMovement';
import { StackTransformCalculator } from './utils/StackTransformCalculator';
import { CardGestureEnhancer } from './utils/CardGestureEnhancer';
import { STACK_CONSTANTS } from './constants';
import {
  CardNotificationStackProps,
  DEFAULT_STACK_CONFIGURATION,
} from './CardNotificationStack.model';

/**
 * Componente DSC CardNotificationStack
 *
 * Exibe componentes CardNotification em formato de "deck de cartas", onde o primeiro card fica na frente
 * e os demais ficam atrás com deslocamento vertical para visibilidade
 *
 * @example
 * <CardNotificationStack>
 *   <CardNotification title="Primeira notificação" />
 *   <CardNotification title="Segunda notificação" />
 *   <CardNotification title="Terceira notificação" />
 * </CardNotificationStack>
 */
export const CardNotificationStack: React.FC<CardNotificationStackProps> = ({
  children,
}) => {
  const childrenArray = React.Children.toArray(children);
  const stackConfig = DEFAULT_STACK_CONFIGURATION;

  const transformCalculator = useMemo(
    () => new StackTransformCalculator(stackConfig),
    [stackConfig]
  );

  const {
    cardVisibilityStates,
    markCardAsRemoved,
    calculateActiveCardPosition,
  } = useCardVisibilityState(childrenArray.length);

  const { frontCardMovement, updateFrontCardMovement, resetFrontCardMovement } =
    useFrontCardMovement(stackConfig);

  const enhancedChildrenWithGestures = useMemo(() => {
    return React.Children.map(children, (child, index) =>
      CardGestureEnhancer.enhanceChildWithGestures(
        child,
        index,
        calculateActiveCardPosition,
        markCardAsRemoved,
        updateFrontCardMovement,
        resetFrontCardMovement
      )
    );
  }, [
    children,
    calculateActiveCardPosition,
    markCardAsRemoved,
    updateFrontCardMovement,
    resetFrontCardMovement,
  ]);

  const visibleChildrenForRendering = useMemo(() => {
    return (enhancedChildrenWithGestures || []).slice(
      0,
      stackConfig.maximumVisibleCards
    );
  }, [enhancedChildrenWithGestures, stackConfig.maximumVisibleCards]);

  return (
    <CardNotificationStackContainer>
      {visibleChildrenForRendering.map(
        (child: React.ReactNode, originalIndex: number) => {
          if (!cardVisibilityStates[originalIndex]) {
            return null;
          }

          const activePosition = calculateActiveCardPosition(originalIndex);
          if (activePosition === STACK_CONSTANTS.INACTIVE_CARD_POSITION) {
            return null;
          }

          const isFrontCard =
            activePosition === STACK_CONSTANTS.FRONT_CARD_POSITION;
          const transform = isFrontCard
            ? undefined
            : transformCalculator.calculateTransformForPosition(
                activePosition,
                frontCardMovement
              );

          return (
            <StackedCard
              key={originalIndex}
              activePosition={activePosition}
              isFrontCard={isFrontCard}
              transform={transform}
            >
              {child}
            </StackedCard>
          );
        }
      )}
    </CardNotificationStackContainer>
  );
};
