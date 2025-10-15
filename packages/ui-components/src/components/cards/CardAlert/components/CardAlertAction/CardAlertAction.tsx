import React from 'react';
import { useTheme } from 'tamagui';
import { NavArrowRight } from 'iconoir-react-native';
import { LabelSmall } from '../../../../data-display/Typography';
import { ActionContainer, ActionButton } from './CardAlertAction.styles';
import type { CardAlertActionProps } from './CardAlertAction.model';

// Color token mapping by variant
const colorTokenMap = {
  info: 'onInfoBg',
  success: 'onSuccessBg',
  warning: 'onWarningBg',
  danger: 'onDangerBg',
  smart_tips: 'smart_tips',
} as const;

// Specific color for smart_tips variant
const SMART_TIPS_COLOR = '#804800';

export const CardAlertAction: React.FC<CardAlertActionProps> = ({
  variant,
  label,
  onPress,
  testID,
}) => {
  const theme = useTheme();
  const colorToken = colorTokenMap[variant];

  // For smart_tips, use the hardcoded color directly
  let color: string;
  let tokenColor: string;

  if (variant === 'smart_tips') {
    color = SMART_TIPS_COLOR;
    tokenColor = SMART_TIPS_COLOR;
  } else {
    color = (theme[colorToken]?.val || theme[colorToken]) as string;
    tokenColor = `$${colorToken}`;
  }

  return (
    <ActionContainer>
      <ActionButton onPress={onPress} testID={testID}>
        <LabelSmall color={tokenColor as any} numberOfLines={1}>
          {label}
        </LabelSmall>
        <NavArrowRight width={16} height={16} strokeWidth={1.5} color={color} />
      </ActionButton>
    </ActionContainer>
  );
};
