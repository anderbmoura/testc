import React from 'react';
import { styled, Text } from 'tamagui';
import { TitleProps } from './Title.model';

const DscTitle = styled(Text, {
  name: 'DscTitle',
  fontFamily: '$heading',
  fontSize: '$medium',
  lineHeight: '$medium',
  fontWeight: '$400',

  variants: {
    size: {
      large: {
        fontSize: '$large',
        lineHeight: '$large',
      },
      standard: {
        fontSize: '$medium',
        lineHeight: '$medium',
      },
      small: {
        fontSize: '$small',
        lineHeight: '$small',
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
 * DSC Title Component
 *
 * @param size - Size variant of the title text
 * ```tsx
 * <Title size="large">Section Title</Title>
 * <Title size="standard">Subsection Title</Title>
 * <Title size="small">Small Title</Title>
 * ```
 *
 * @param emphasized - Whether the text should be emphasized with bold weight
 * ```tsx
 * <Title emphasized>Important Title</Title>
 * ```
 *
 */
const Title: React.FC<TitleProps> = ({
  size = 'standard',
  emphasized = false,
  children,
  ...props
}) => {
  return (
    <DscTitle
      {...(size && { size })}
      {...(emphasized !== undefined && { emphasized })}
      {...props}
    >
      {children}
    </DscTitle>
  );
};

export default Title;
