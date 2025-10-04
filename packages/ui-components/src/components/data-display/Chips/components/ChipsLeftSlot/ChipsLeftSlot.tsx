import React from 'react';
import { ChipsLeftSlotInternalProps } from './ChipsLeftSlot.model';
import { Check } from 'iconoir-react-native';
import { Avatar } from '../../../Avatar';
import { useTransformIcon } from '../../../../../utils/icon-transformer';

/**
 * Componente interno para renderizar o slot esquerdo do chip.
 */
export const ChipsLeftSlot: React.FC<ChipsLeftSlotInternalProps> = ({
  variant,
  icon,
  imageSource,
  checked,
  selected,
  iconColor,
}) => {
  const transformIcon = useTransformIcon();

  switch (variant) {
    case 'check':
      // Mostra o check apenas quando selecionado ou checked explicitamente
      return selected || checked
        ? transformIcon(<Check />, 16, iconColor)
        : null;

    case 'avatar':
      if (!imageSource) {
        return null;
      }
      return <Avatar style="image" size="small" imageSource={imageSource} />;

    case 'icon':
    default:
      return icon ? transformIcon(icon, 16, iconColor) : null;
  }
};
