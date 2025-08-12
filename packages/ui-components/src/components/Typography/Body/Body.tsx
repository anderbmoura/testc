import React from 'react';
import { styled, Text } from 'tamagui';
import { BodyProps } from './Body.model';

const DscBody = styled(Text, {
  name: 'DscBody',
  fontFamily: '$body',
  fontSize: '$tiny',
  lineHeight: '$tiny',
  fontWeight: '$400',

  variants: {
    size: {
      large: {
        fontSize: '$smaller',
        lineHeight: '$smaller',
      },
      standard: {
        fontSize: '$tiny',
        lineHeight: '$tiny',
      },
      small: {
        fontSize: '$micro',
        lineHeight: '$micro',
      },
    },
    emphasized: {
      true: {
        fontWeight: '$600',
      },
      false: {
        fontWeight: '$400',
      },
    },
  } as const,
});

/**
 * DSC Body Component
 *
 * @param size - Size variant of the body text
 * ```tsx
 * <Body size="large">Large body text</Body>
 * <Body size="standard">Standard body text</Body>
 * <Body size="small">Small body text</Body>
 * ```
 *
 * @param emphasized - Whether the text should be emphasized with bold weight
 * ```tsx
 * <Body emphasized>Important body text</Body>
 * ```
 *
 */
const Body: React.FC<BodyProps> = ({
  size = 'standard',
  emphasized = false,
  children,
  ...props
}) => {
  return (
    <DscBody
      {...(size && { size })}
      {...(emphasized !== undefined && { emphasized })}
      {...props}
    >
      {children}
    </DscBody>
  );
};

export default Body;
