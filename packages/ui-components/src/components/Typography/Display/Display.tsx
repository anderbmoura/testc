import React from 'react';
import { styled, Text } from 'tamagui';
import { DisplayProps } from './Display.model';

const DscDisplay = styled(Text, {
  name: 'DscDisplay',
  fontFamily: '$heading',
  fontSize: '$larger',
  lineHeight: '$larger',
  fontWeight: '$400',

  variants: {
    size: {
      standard: {
        fontSize: '$larger',
        lineHeight: '$larger',
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
 * DSC Display Component
 *
 * @param size - Size variant of the display text
 * ```tsx
 * <Display size="standard">Main Title</Display>
 * ```
 *
 * @param emphasized - Whether the text should be emphasized with bold weight
 * ```tsx
 * <Display emphasized>Important Display Text</Display>
 * ```
 *
 */
const Display: React.FC<DisplayProps> = ({
  size = 'standard',
  emphasized = false,
  children,
  ...props
}) => {
  return (
    <DscDisplay
      {...(size && { size })}
      {...(emphasized !== undefined && { emphasized })}
      {...props}
    >
      {children}
    </DscDisplay>
  );
};

export default Display;
