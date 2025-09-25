import React, {
  Children,
  isValidElement,
  cloneElement,
  ReactElement,
} from 'react';
import { GetThemeValueForKey, XStack } from 'tamagui';
import { AvatarSpacing, AvatarProps, AvatarStackProps } from './Avatar.model';
import { space } from '../../config/tokens/space/space';

const spacingOffset: Record<AvatarSpacing, number> = {
  small: space.small,
  standard: space.medium,
  large: space.large,
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
  const offset = spacingOffset[spacing];
  const validChildren = Children.toArray(children).filter(isValidElement);
  const displayedChildren =
    typeof count === 'number' ? validChildren.slice(0, count) : validChildren;
  const totalOffset = (displayedChildren.length - 1) * offset;

  return (
    <XStack position="relative" width={totalOffset + offset} height={32}>
      {displayedChildren.map((child, index) => {
        if (!isValidElement<AvatarProps>(child)) return null;

        return cloneElement(child as ReactElement<AvatarProps>, {
          size,
          styleProps: {
            position: 'absolute',
            left: index * offset,
            zIndex: zIndexTokens[index] ?? '$0',
          },
        });
      })}
    </XStack>
  );
};

export default AvatarStack;
