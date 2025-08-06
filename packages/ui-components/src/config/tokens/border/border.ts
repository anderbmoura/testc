import { defaultConfig } from '@tamagui/config/v4';

export const borderWidthTokens = {
  none: 0,
  hairline: 0.5,
  thin: 1,
  thick: 2,
  heavy: 4,
} as const;

export const borderRadiusTokens = {
  ...defaultConfig.tokens.radius,
  none: 0,
  quark: 2,
  nano: 4,
  small: 8,
  medium: 12,
  large: 16,
  big: 24,
  pill: 1000,
} as const;
