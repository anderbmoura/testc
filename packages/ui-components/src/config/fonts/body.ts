import { defaultConfig } from '@tamagui/config/v4';
import { createFont, isWeb } from '@tamagui/core';

export const bodyFont = createFont({
  family: isWeb ? 'Roboto, system-ui, -apple-system, sans-serif' : 'Roboto',
  face: {
    400: { normal: 'Roboto-Regular', italic: 'Roboto-Italic' },
    600: { normal: 'Roboto-SemiBold', italic: 'Roboto-SemiBoldItalic' },
  },
  size: {
    ...defaultConfig.fonts.body.size,
    quark: 12,
    nano: 14,
    micro: 16,
    tiny: 18,
    smaller: 20,
    small: 24,
    medium: 28,
    large: 32,
    larger: 36,
  },
  lineHeight: {
    quark: 20,
    nano: 22,
    micro: 24,
    tiny: 28,
    smaller: 28,
    small: 34,
    medium: 38,
    large: 40,
    larger: 44,
  },
  weight: {
    400: '400',
    600: '600',
  },
  letterSpacing: {
    quark: 0,
    nano: 0,
    micro: 0,
    tiny: 0,
    smaller: 0,
    small: 0,
    medium: 0,
    large: 0,
    larger: 0,
  },
});
