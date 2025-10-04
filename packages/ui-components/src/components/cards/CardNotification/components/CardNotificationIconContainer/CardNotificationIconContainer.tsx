import React, { useMemo } from 'react';
import {
  InfoCircle,
  BadgeCheck,
  WarningTriangle,
  WarningHexagon,
  Bell,
  Message,
  Star,
} from 'iconoir-react-native';
import { useTransformIcon } from '../../../../../utils';
import { fontSize } from '../../../../../config/tokens/fontSize/fontSize';
import type {
  CardNotificationIconContainerProps,
  CardNotificationVariant,
} from './CardNotificationIconContainer.model';
import {
  IconSpacer,
  IconContainer,
} from './CardNotificationIconContainer.styles';

const defaultIconMap: Record<
  CardNotificationVariant,
  React.ComponentType<{ size?: number; color?: string }>
> = {
  highlight: InfoCircle,
  accent: Bell,
  success: BadgeCheck,
  warning: WarningTriangle,
  danger: WarningHexagon,
  info: InfoCircle,
  neutral: Message,
  decorative: Star,
};

export const CardNotificationIconContainer: React.FC<
  CardNotificationIconContainerProps
> = ({ variant, icon }) => {
  const transformIcon = useTransformIcon();

  const displayIcon = useMemo(() => {
    if (icon) {
      return transformIcon(icon, fontSize.medium, '$color8');
    }

    const IconComponent = defaultIconMap[variant];
    return transformIcon(IconComponent, fontSize.medium, '$color8');
  }, [icon, variant, transformIcon]);

  return (
    <IconContainer>
      <IconSpacer>{displayIcon}</IconSpacer>
    </IconContainer>
  );
};
