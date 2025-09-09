import React from 'react';
import { XStack } from 'tamagui';
import { Animated } from 'react-native';
import { BodySmall } from '../../../Typography';
import type { InputSupportingTextContainerProps } from './InputSupportingTextContainer.model';

/**
 * Componente DSC InputSupportingTextContainer
 *
 * Container de texto de apoio e contador de caracteres do Input.
 *
 * @example
 * ```tsx
 * <InputSupportingTextContainer
 *   supportingText="Texto de apoio"
 *   characterCount={10}
 *   maxLength={100}
 * />
 * ```
 */
export const InputSupportingTextContainer: React.FC<
  InputSupportingTextContainerProps
> = ({
  supportingText,
  characterCount,
  maxLength,
  onPress,
  counterShakeAnimation,
  disabled,
}) => {
  const textColor = disabled ? '$disabled1' : '$onNeutral2';

  return (
    <XStack
      gap="$nano"
      alignItems="flex-start"
      justifyContent="space-between"
      width="100%"
      onPress={onPress}
      cursor={onPress ? 'pointer' : 'default'}
    >
      <BodySmall color={textColor} flex={1}>
        {supportingText || ''}
      </BodySmall>
      {characterCount !== undefined && maxLength !== undefined && (
        <Animated.View
          style={{
            transform: counterShakeAnimation
              ? [{ translateX: counterShakeAnimation }]
              : undefined,
          }}
        >
          <BodySmall color={textColor} flexShrink={0}>
            {characterCount}/{maxLength}
          </BodySmall>
        </Animated.View>
      )}
    </XStack>
  );
};
