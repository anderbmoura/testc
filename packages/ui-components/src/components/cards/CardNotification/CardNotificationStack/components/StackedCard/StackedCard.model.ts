import React from 'react';
import type { CardTransform } from '../../CardNotificationStack.model';

export interface StackedCardProps {
  children: React.ReactNode;
  activePosition: number;
  transform?: CardTransform;
  isFrontCard: boolean;
}
