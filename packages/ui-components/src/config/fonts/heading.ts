import { createFont, isWeb } from '@tamagui/core';

export const headingFont = createFont({
  family: isWeb
    ? 'CAIXA Std, system-ui, -apple-system, sans-serif'
    : 'CAIXA Std',
  face: {
    400: { normal: 'CAIXA Std Regular', italic: 'CAIXA Std Italic' },
    500: { normal: 'CAIXA Std Medium', italic: 'CAIXA Std Medium Italic' },
    600: { normal: 'CAIXA Std SemiBold', italic: 'CAIXA Std SemiBold Italic' },
    700: { normal: 'CAIXA Std Bold', italic: 'CAIXA Std Bold Italic' },
  },
  size: {
    quark: 12,
    nano: 14,
    micro: 16,
    tiny: 18,
    smaller: 20,
    small: 24,
    medium: 28,
    large: 32,
    larger: 36,
    bigger: 48,
  },
  lineHeight: {
    16: 16,
    20: 20,
    24: 24,
    28: 28,
    32: 32,
    36: 36,
    40: 40,
    44: 44,
    48: 48,
    56: 56,
    64: 64,
  },
  weight: {
    400: '400',
    500: '500',
    600: '600',
    700: '700',
  },
  letterSpacing: {
    standard: 0,
    airy: 0.1,
    loose: 0.15,
    broad: 0.25,
    extended: 0.5,
  },
});
