import { styled, YStack, View } from 'tamagui';
import { borderWidth } from '../../config/tokens/borderWidth/borderWidth';
import type { IconButtonSize } from './IconButton.model';
import { iconSize } from '../../config/tokens/iconSize/iconSize';

export const sizeMapping = {
  large: { container: 48, icon: iconSize.medium },
  standard: { container: 44, icon: iconSize.small },
  small: { container: 32, icon: iconSize.tiny },
  tiny: { container: 24, icon: iconSize.tiny },
} as const;

const baseTypeVariants = {
  plain: {
    backgroundColor: '$color8',
    borderWidth: borderWidth.none,
    hoverStyle: { backgroundColor: '$color9' },
    pressStyle: { backgroundColor: '$color7' },
    disabledStyle: { backgroundColor: '$disabled1' },
  },
  chromeless: {
    backgroundColor: 'transparent',
    borderWidth: borderWidth.none,
    hoverStyle: { backgroundColor: '$color2' },
    pressStyle: { backgroundColor: '$color3' },
    disabledStyle: { backgroundColor: 'transparent' },
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: borderWidth.thin,
    borderColor: '$color8',
    hoverStyle: {
      backgroundColor: '$color2',
      borderColor: '$color9',
    },
    pressStyle: {
      backgroundColor: '$color3',
      borderColor: '$color7',
    },
    disabledStyle: {
      backgroundColor: 'transparent',
      borderColor: '$disabled1',
    },
  },
} as const;

const whiteTypeVariants = {
  plain: {
    backgroundColor: '$neutralBg1',
    borderWidth: 0,
    hoverStyle: { backgroundColor: '$neutralHover1' },
    pressStyle: { backgroundColor: '$neutralPressed1' },
    disabledStyle: { backgroundColor: '$disabled1' },
  },
  chromeless: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    hoverStyle: { backgroundColor: 'transparent' },
    pressStyle: { backgroundColor: 'transparent' },
    disabledStyle: { backgroundColor: 'transparent' },
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: borderWidth.thin,
    borderColor: '$neutralBg1',
    hoverStyle: {
      backgroundColor: 'transparent',
      borderColor: '$neutralBg1',
    },
    pressStyle: {
      backgroundColor: 'transparent',
      borderColor: '$neutralBg1',
    },
    disabledStyle: {
      backgroundColor: 'transparent',
      borderColor: '$disabled1',
    },
  },
} as const;

const sizeVariants = {
  large: {
    width: sizeMapping.large.container,
    height: sizeMapping.large.container,
  },
  standard: {
    width: sizeMapping.standard.container,
    height: sizeMapping.standard.container,
  },
  small: {
    width: sizeMapping.small.container,
    height: sizeMapping.small.container,
  },
  tiny: {
    width: sizeMapping.tiny.container,
    height: sizeMapping.tiny.container,
  },
} as Record<IconButtonSize, { width: number; height: number }>;

export const IconButtonWrapper = styled(View, {
  name: 'IconButtonWrapper',
  borderRadius: '$pill',
  padding: borderWidth.thick,
  borderWidth: borderWidth.thick,
  borderColor: 'transparent',
  pointerEvents: 'none',

  variants: {
    focused: {
      true: {
        borderColor: '$neutral12',
        zIndex: '$500',
      },
      false: {
        borderColor: 'transparent',
        zIndex: '$0',
      },
    },
  } as const,
});

export const IconButtonTouchableContainer = styled(YStack, {
  name: 'IconButtonTouchableContainer',
  alignItems: 'center',
  justifyContent: 'center',
});

export const getTypeVariants = (isWhite: boolean) =>
  isWhite ? whiteTypeVariants : baseTypeVariants;

export const getSizeVariants = () => sizeVariants;
