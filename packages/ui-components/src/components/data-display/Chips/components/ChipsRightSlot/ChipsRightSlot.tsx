import React from 'react';
import { NavArrowDown, Xmark } from 'iconoir-react-native';
import { ChipsRightSlotInternalProps } from './ChipsRightSlot.model';
import { useTransformIcon } from '../../../../../utils/icon-transformer';

/**
 * Componente interno para renderizar o slot direito do chip.
 */
export const ChipsRightSlot: React.FC<ChipsRightSlotInternalProps> = ({
  variant,
  iconColor,
}) => {
  const transformIcon = useTransformIcon();
  const IconComponent = variant === 'arrow' ? NavArrowDown : Xmark;

  return transformIcon(<IconComponent />, 12, iconColor);
};
