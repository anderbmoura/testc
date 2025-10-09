import React, { useMemo } from 'react';
import { CheckCircle, InfoCircle, WarningHexagon } from 'iconoir-react-native';
import { XStack } from 'tamagui';
import { BodySmall } from '../../../../data-display/Typography';
import { useTransformIcon } from '../../../../../utils';
import type { InputPinFeedbackType } from '../../InputPin.model';
import { iconSize } from '../../../../../config/tokens/iconSize/iconSize';

export type InputPinFeedbackProps = {
  message?: string;
  type?: InputPinFeedbackType;
  showIcon?: boolean;
};

const iconMap = {
  neutral: InfoCircle,
  success: CheckCircle,
  danger: WarningHexagon,
} as const;

const colorMap = {
  neutral: '$onNeutral2',
  success: '$success',
  danger: '$danger',
} as const;

export const InputPinFeedback: React.FC<InputPinFeedbackProps> = ({
  message,
  type = 'neutral',
  showIcon = true,
}) => {
  if (!message) return null;

  const transformIcon = useTransformIcon();

  const feedbackIcon = useMemo(() => {
    if (!showIcon) return null;

    const IconComponent = iconMap[type];
    return transformIcon(IconComponent, iconSize.tiny, colorMap[type]);
  }, [showIcon, transformIcon, type]);

  return (
    <XStack
      gap="$nano"
      alignItems="center"
      justifyContent="center"
      width="100%"
    >
      {feedbackIcon}
      <BodySmall color={colorMap[type]} textAlign="center">
        {message}
      </BodySmall>
    </XStack>
  );
};
