import { View } from 'react-native';
import { styled, XStack } from 'tamagui';
import { borderWidth } from '../../../../config/tokens/borderWidth/borderWidth';
import { space } from '../../../../config/tokens/space/space';
import { borderRadius } from '../../../../config/tokens/borderRadius/borderRadius';

export const CardAccountHeaderWrapper = styled(View, {
  name: 'CardAccountHeaderWrapper',
  padding: borderWidth.thick,
  borderTopLeftRadius: borderRadius.large + 4,
  borderTopRightRadius: borderRadius.large + 4,
  borderWidth: borderWidth.thick,
  borderColor: 'transparent',

  variants: {
    focused: {
      true: {
        borderColor: '$neutral12',
        zIndex: '$100',
        position: 'relative',
      },
      false: {
        borderColor: 'transparent',
        zIndex: 0,
      },
    },
  },
});

export const CardAccountBodyWrapper = styled(View, {
  name: 'CardAccountBodyWrapper',
  padding: borderWidth.thick,
  borderBottomLeftRadius: borderRadius.large + 4,
  borderBottomRightRadius: borderRadius.large + 4,
  borderWidth: borderWidth.thick,
  borderColor: 'transparent',
  marginTop: -space.nano,

  variants: {
    focused: {
      true: {
        borderColor: '$neutral12',
        zIndex: '$100',
        position: 'relative',
      },
      false: {
        borderColor: 'transparent',
        zIndex: 0,
      },
    },
  },
});

export const CardAccountHeaderContainer = styled(XStack, {
  name: 'CardAccountHeaderContainer',
  width: '100%',
  padding: '$tiny',
  borderTopLeftRadius: '$large',
  borderTopRightRadius: '$large',
  gap: '$nano',
  backgroundColor: '$color8',
  alignItems: 'center',
  justifyContent: 'space-between',

  hoverStyle: {
    backgroundColor: '$color9',
  },
  pressStyle: {
    backgroundColor: '$color7',
  },
});

export const CardAccountBodyContainer = styled(XStack, {
  name: 'CardAccountBodyContainer',
  width: '100%',
  padding: '$tiny',
  borderBottomLeftRadius: '$large',
  borderBottomRightRadius: '$large',
  gap: '$nano',
  backgroundColor: '$color8',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingTop: 24,

  hoverStyle: {
    backgroundColor: '$color9',
  },
  pressStyle: {
    backgroundColor: '$color7',
  },
});

export const ArrowButtonContainer = styled(View, {
  name: 'ArrowButtonContainer',
  width: 32,
  height: 32,
  borderRadius: 16,
  borderWidth: 1,
  borderColor: '$color1',
  alignItems: 'center',
  justifyContent: 'center',
});
