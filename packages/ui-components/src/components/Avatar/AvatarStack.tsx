import React, {
  Children,
  isValidElement,
  cloneElement,
  ReactElement,
} from 'react';
import { styled, XStack } from 'tamagui';
import { AvatarSpacing, AvatarProps, AvatarStackProps } from './Avatar.model';

const StackContainer = styled(XStack, {
  name: 'AvatarStackContainer',
  position: 'relative',
  alignItems: 'center',
  justifyContent: 'flex-start',
  overflow: 'visible',

  variants: {
    size: {
      small: { height: 32 },
      standard: { height: 32 },
      large: { height: 32 },
    },
  } as const,
});

const spacingOffset: Record<AvatarSpacing, number> = {
  small: 28,
  standard: 32,
  large: 34,
};

const zIndexValues = [500, 400, 300, 200, 100, 0];

/**
 * DSC AvatarStack Component
 *
 * @param count - Maximum number of avatars to display
 * ```tsx
 * <AvatarStack count={3}>
 *   <Avatar ... />
 *   <Avatar ... />
 *   <Avatar ... />
 *   <Avatar ... />
 * </AvatarStack>
 * ```
 *
 * @param spacing - Horizontal spacing between stacked avatars
 * ```tsx
 * <AvatarStack spacing="small" />
 * <AvatarStack spacing="standard" />
 * <AvatarStack spacing="large" />
 * ```
 *
 * @param size - Size of avatars within the stack
 * ```tsx
 * <AvatarStack size="small" />
 * <AvatarStack size="standard" />
 * <AvatarStack size="large" />
 * ```
 *
 * @param children - Avatar elements passed as children to the stack
 * ```tsx
 * <AvatarStack>
 *   <Avatar ... />
 *   <Avatar ... />
 * </AvatarStack>
 * ```
 */
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

  return (
    <StackContainer size={size}>
      {displayedChildren.map((child, index) => {
        if (!isValidElement<AvatarProps>(child)) return null;

        return cloneElement(child as ReactElement<AvatarProps>, {
          size,
          styleProps: {
            position: 'absolute',
            left: index * offset,
            zIndex: zIndexValues[index] ?? 0,
          },
        });
      })}
    </StackContainer>
  );
};

export default AvatarStack;
