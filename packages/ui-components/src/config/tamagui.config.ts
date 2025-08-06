import { createTamagui } from '@tamagui/core';
import { defaultConfig } from '@tamagui/config/v4';
import { themes } from './themes';
import { tokens } from './tokens';
import { fonts } from './fonts';

export const dscConfig = createTamagui({
  ...defaultConfig,
  themes,
  tokens,
  fonts,
  settings: {
    ...defaultConfig.settings,
    onlyAllowShorthands: false,
  },
});

export type DscConfig = typeof dscConfig;

declare module 'tamagui' {
  interface TamaguiCustomConfig extends DscConfig {}
}
