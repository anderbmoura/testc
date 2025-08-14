import React from 'react';
import { styled, Text } from 'tamagui';
import { LabelProps } from './Label.model';
import { typography } from '../../../config/fonts/typography';

const DscLabel = styled(Text, {
  name: 'DscLabel',

  variants: {
    size: {
      standard: typography.labelStandard,
      small: typography.labelSmall,
      tiny: typography.labelTiny,
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

  defaultVariants: {
    size: 'standard',
    emphasized: false,
  },
});

/**
 * DSC Label Component
 *
 * @param size - Size variant of the label text
 * ```tsx
 * <Label size="standard">Standard label</Label>
 * <Label size="small">Small label</Label>
 * <Label size="tiny">Tiny label</Label>
 * ```
 *
 * @param emphasized - Whether the text should be emphasized with bold weight
 * ```tsx
 * <Label emphasized>Important label</Label>
 * ```
 *
 */
const Label: React.FC<LabelProps> = ({
  size = 'standard',
  emphasized = false,
  children,
  ...props
}) => {
  return (
    <DscLabel
      {...(size && { size })}
      {...(emphasized !== undefined && { emphasized })}
      {...props}
    >
      {children}
    </DscLabel>
  );
};

export default Label;
