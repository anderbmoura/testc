import React from 'react';
import { View } from 'react-native';
import { styled } from 'tamagui';
import { iconSize } from '../../../config/tokens/iconSize/iconSize';
import { useTransformIcon } from '../../../utils';

const CardWidgetIconContainer = styled(View, {
  name: 'CardWidgetIconContainer',
  width: 36,
  height: 36,
  borderRadius: '$pill',
  backgroundColor: '$color2',
  alignItems: 'center',
  justifyContent: 'center',
});

/**
 * Propriedades para o CardWidgetIcon.
 */
export interface CardWidgetIconProps {
  /**
   * Ícone a ser exibido.
   */
  icon: React.ReactNode;
}

/**
 * Componente DSC CardWidgetIcon
 *
 * Ícone de iconSize.small da cor $color8 envolvido por um círculo de 36x36 com background $color2.
 */
export const CardWidgetIcon: React.FC<CardWidgetIconProps> = ({ icon }) => {
  const transformIcon = useTransformIcon();

  if (!icon) return null;

  const transformedIcon = transformIcon(icon, iconSize.small, '$color8');

  return <CardWidgetIconContainer>{transformedIcon}</CardWidgetIconContainer>;
};

export default CardWidgetIcon;
