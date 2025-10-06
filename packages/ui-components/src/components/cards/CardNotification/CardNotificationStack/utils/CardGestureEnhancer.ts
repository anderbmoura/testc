import React from 'react';
import { STACK_CONSTANTS } from '../constants';

interface CardProps {
  onSwipe?: () => void;
  onMove?: (gestureData: { dx: number; dy: number }) => void;
  onGestureEnd?: () => void;
  [key: string]: unknown;
}

/**
 * Utilitário para criar children com handlers de gesture aprimorados.
 */
export class CardGestureEnhancer {
  static createGestureHandlers(
    index: number,
    originalProps: CardProps,
    calculateActiveCardPosition: (index: number) => number,
    markCardAsRemoved: (index: number) => void,
    updateFrontCardMovement: (dx: number, dy: number) => void,
    resetFrontCardMovement: () => void
  ) {
    const handleCardSwipe = () => {
      markCardAsRemoved(index);
      resetFrontCardMovement();

      if (originalProps.onSwipe) {
        originalProps.onSwipe();
      }
    };

    const handleCardMovement = (gestureData: { dx: number; dy: number }) => {
      const activePosition = calculateActiveCardPosition(index);
      if (activePosition === STACK_CONSTANTS.FRONT_CARD_POSITION) {
        updateFrontCardMovement(gestureData.dx, gestureData.dy);
      }

      if (originalProps.onMove) {
        originalProps.onMove(gestureData);
      }
    };

    const handleGestureEnd = () => {
      const activePosition = calculateActiveCardPosition(index);
      if (activePosition === STACK_CONSTANTS.FRONT_CARD_POSITION) {
        setTimeout(() => resetFrontCardMovement());
      }

      if (originalProps.onGestureEnd) {
        originalProps.onGestureEnd();
      }
    };

    return {
      onSwipe: handleCardSwipe,
      onMove: handleCardMovement,
      onGestureEnd: handleGestureEnd,
    };
  }

  static enhanceChildWithGestures(
    child: React.ReactNode,
    index: number,
    calculateActiveCardPosition: (index: number) => number,
    markCardAsRemoved: (index: number) => void,
    updateFrontCardMovement: (dx: number, dy: number) => void,
    resetFrontCardMovement: () => void
  ): React.ReactNode {
    if (!React.isValidElement(child)) return child;

    const gestureHandlers = this.createGestureHandlers(
      index,
      child.props as CardProps,
      calculateActiveCardPosition,
      markCardAsRemoved,
      updateFrontCardMovement,
      resetFrontCardMovement
    );

    return React.cloneElement(
      child as React.ReactElement<CardProps>,
      gestureHandlers
    );
  }
}
