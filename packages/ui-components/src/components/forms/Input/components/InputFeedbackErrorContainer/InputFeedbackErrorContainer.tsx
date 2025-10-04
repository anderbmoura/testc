import React, { useMemo } from 'react';
import { WarningHexagon } from 'iconoir-react-native';
import { XStack } from 'tamagui';
import { Animated } from 'react-native';
import { BodySmall } from '../../../../data-display/Typography';
import { useTransformIcon } from '../../../../../utils';
import { iconSize } from '../../../../../config/tokens/iconSize/iconSize';
import type { InputFeedbackErrorContainerProps } from './InputFeedbackErrorContainer.model';

/**
 * Componente DSC InputFeedbackErrorContainer
 *
 * Container para exibir feedback de erro do Input.
 *
 * @example
 * ```tsx
 * <InputFeedbackErrorContainer
 *   text="Campo obrigatório"
 * />
 * ```
 */
export const InputFeedbackErrorContainer: React.FC<
  InputFeedbackErrorContainerProps
> = ({ text, onPress, errorShakeAnimation, disabled }) => {
  const transformIcon = useTransformIcon();

  const iconColor = disabled ? '$disabled1' : '$danger';
  const textColor = disabled ? '$disabled1' : '$danger';

  const errorIcon = useMemo(() => {
    return transformIcon(WarningHexagon, iconSize.tiny, iconColor);
  }, [transformIcon, iconColor]);

  return (
    <Animated.View
      style={{
        transform: errorShakeAnimation
          ? [{ translateX: errorShakeAnimation }]
          : undefined,
      }}
    >
      <XStack
        gap="$quark"
        alignItems="center"
        justifyContent="flex-start"
        onPress={onPress}
        cursor={onPress ? 'pointer' : 'default'}
      >
        {errorIcon}
        <BodySmall color={textColor} flex={1}>
          {text}
        </BodySmall>
      </XStack>
    </Animated.View>
  );
};
