import React, { useMemo } from 'react';
import { InfoCircle, WarningTriangle, CheckCircle } from 'iconoir-react-native';
import { XStack } from 'tamagui';
import { BodySmall } from '../../../Typography';
import { useTransformIcon } from '../../../../utils';
import { iconSize } from '../../../../config/tokens/iconSize/iconSize';
import type { InputMoneyFeedbackProps } from './InputMoneyFeedback.model';

const defaultIconMap = {
  neutral: InfoCircle,
  danger: WarningTriangle,
  success: CheckCircle,
} as const;

const feedbackColorMap = {
  neutral: '$onNeutral2',
  danger: '$danger',
  success: '$success',
} as const;

/**
 * Componente DSC InputMoneyFeedback
 *
 * Componente de feedback para exibir mensagens de status do InputMoney.
 *
 * @example
 * ```tsx
 * <InputMoneyFeedback
 *   variant="danger"
 *   text="Valor inválido"
 *   showIcon={true}
 * />
 * ```
 */
export const InputMoneyFeedback: React.FC<InputMoneyFeedbackProps> = ({
  text = 'Feedback message',
  showIcon = true,
  variant = 'neutral',
}) => {
  const transformIcon = useTransformIcon();

  const feedbackIcon = useMemo(() => {
    if (!showIcon) return null;

    const IconComponent = defaultIconMap[variant];
    const iconColor = feedbackColorMap[variant];

    return transformIcon(IconComponent, iconSize.tiny, iconColor);
  }, [showIcon, variant, transformIcon]);

  const textColor = feedbackColorMap[variant];

  return (
    <XStack gap="$nano" alignItems="center" justifyContent="flex-start">
      {feedbackIcon}
      <BodySmall color={textColor}>{text}</BodySmall>
    </XStack>
  );
};
