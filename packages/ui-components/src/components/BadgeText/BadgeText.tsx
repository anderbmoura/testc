import React from 'react';
import { styled, YStack } from 'tamagui';
import { LabelTiny } from '../Typography';
import { BadgeTextProps } from './BadgeText.model';

const StyledBadgeContainer = styled(YStack, {
  name: 'BadgeTextContainer',
  borderRadius: '$pill',
  backgroundColor: '$color2',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row',

  variants: {
    size: {
      large: {
        minHeight: 32,
        paddingVertical: '$nano',
        paddingHorizontal: '$micro',
        gap: '$quark',
      },
      medium: {
        minHeight: 24,
        paddingVertical: '$none',
        paddingHorizontal: '$nano',
        gap: '$quark',
      },
      small: {
        minHeight: 20,
        paddingVertical: '$none',
        paddingHorizontal: '$nano',
        gap: '$quark',
      },
    },
  } as const,

  defaultVariants: {
    size: 'medium',
  },
});

/**
 * Componente DSC BadgeText
 *
 * @param size - Tamanho do badge ('large' | 'medium' | 'small')
 * ```tsx
 * <BadgeText size="large">Large Badge</BadgeText>
 * <BadgeText size="medium">Medium Badge</BadgeText>
 * <BadgeText size="small">Small Badge</BadgeText>
 * ```
 *
 * @param color - Cor do badge ('highlight' | 'danger')
 * ```tsx
 * <BadgeText color="highlight">Destaque</BadgeText>
 * <BadgeText color="danger">Perigo</BadgeText>
 * ```
 *
 */
export default function BadgeText({
  children,
  size = 'medium',
  color = 'highlight',
}: BadgeTextProps) {
  const content = (
    <StyledBadgeContainer theme={color} size={size}>
      <LabelTiny color="$color8">{children}</LabelTiny>
    </StyledBadgeContainer>
  );

  return content;
}
