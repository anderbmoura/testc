import React from 'react';
import { useTheme } from 'tamagui';
import {
  InfoCircle,
  BadgeCheck,
  WarningTriangle,
  WarningHexagon,
  Sparks,
} from 'iconoir-react-native';
import { IconContainer } from './CardAlertIcon.styles';
import type { CardAlertIconProps } from './CardAlertIcon.model';

// Icon mapping by variant
const iconMap = {
  info: InfoCircle,
  success: BadgeCheck,
  warning: WarningTriangle,
  danger: WarningHexagon,
  smart_tips: Sparks,
};

// Icon color token mapping by variant
const iconColorTokenMap = {
  info: 'onInfoBg',
  success: 'onSuccessBg',
  warning: 'onWarningBg',
  danger: 'onDangerBg',
  smart_tips: '#804800',
} as const;

export const CardAlertIcon: React.FC<CardAlertIconProps> = ({ variant }) => {
  const theme = useTheme();
  const IconComponent = iconMap[variant];
  const colorToken = iconColorTokenMap[variant];

  // For smart_tips, use the hardcoded color directly since it doesn't use a token
  const iconColor =
    variant === 'smart_tips'
      ? colorToken
      : ((theme[colorToken]?.val || theme[colorToken]) as string);

  return (
    <IconContainer>
      <IconComponent
        width={24}
        height={24}
        strokeWidth={1.5}
        color={iconColor}
      />
    </IconContainer>
  );
};
