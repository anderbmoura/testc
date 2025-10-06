import React, {
  Children,
  isValidElement,
  cloneElement,
  ReactElement,
} from 'react';
import { GetThemeValueForKey, XStack } from 'tamagui';
import {
  AvatarSpacing,
  AvatarProps,
  AvatarStackProps,
  AvatarSize,
} from './Avatar.model';

// Mapeamento dos valores de sobreposição (margem negativa) baseado no design do Figma
const spacingOffset: Record<AvatarSpacing, Record<AvatarSize, number>> = {
  small: {
    small: -8,
    standard: -8,
    large: -12,
  },
  standard: {
    small: -4,
    standard: -4,
    large: -8,
  },
  large: {
    small: -2,
    standard: -2,
    large: -4,
  },
};

// Mapeamento dos tamanhos dos avatares baseado no design do Figma
const avatarSizes: Record<AvatarSize, number> = {
  small: 18,
  standard: 24,
  large: 32,
};

const zIndexTokens: GetThemeValueForKey<'zIndex'>[] = [
  '$500',
  '$400',
  '$300',
  '$200',
  '$100',
  '$0',
];

export const AvatarStack: React.FC<AvatarStackProps> = ({
  count,
  spacing = 'standard',
  size = 'standard',
  children,
}) => {
  const marginOffset = spacingOffset[spacing][size];
  const avatarSize = avatarSizes[size];
  const validChildren = Children.toArray(children).filter(isValidElement);
  const displayedChildren =
    typeof count === 'number' ? validChildren.slice(0, count) : validChildren;

  return (
    <XStack alignItems="center" height={avatarSize}>
      {displayedChildren.map((child, index) => {
        if (!isValidElement<AvatarProps>(child)) return null;

        const isLast = index === displayedChildren.length - 1;

        return cloneElement(child as ReactElement<AvatarProps>, {
          key: index,
          size,
          styleProps: {
            marginRight: isLast ? 0 : marginOffset,
            zIndex: zIndexTokens[index] ?? '$0',
            position: 'relative',
          },
        });
      })}
    </XStack>
  );
};

export default AvatarStack;
