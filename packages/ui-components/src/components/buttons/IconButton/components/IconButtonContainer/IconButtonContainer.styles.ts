import { styled, View } from 'tamagui';
import { getTypeVariants, getSizeVariants } from '../../IconButton.styles';

export const IconButtonContainerStyled = styled(View, {
  name: 'IconButtonContainer',
  borderRadius: '$pill',
  alignItems: 'center',
  justifyContent: 'center',
  pointerEvents: 'none',

  variants: {
    type: getTypeVariants(false),
    size: getSizeVariants(),
    disabled: {
      true: {},
      false: {},
    } as const,
  } as const,

  defaultVariants: {
    type: 'plain',
    size: 'large',
  },
});
