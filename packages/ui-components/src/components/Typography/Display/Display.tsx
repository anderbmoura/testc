import React from 'react';
import { styled, Text } from 'tamagui';
import { DisplayProps } from './Display.model';
import { typography } from '../../../config/fonts/typography';

const DscDisplay = styled(Text, {
  name: 'DscDisplay',

  variants: {
    size: {
      standard: typography.displayStandard,
    },
    emphasized: {
      true: typography.displayStandardSemibold,
      false: typography.displayStandard,
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
