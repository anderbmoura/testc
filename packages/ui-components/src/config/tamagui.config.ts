import { defaultConfig } from '@tamagui/config/v4';
import { createTamagui } from '@tamagui/core';
import { fonts } from './fonts';
import { themes } from './themes';
import { tokens } from './tokens';

export const dscConfig = createTamagui({
  ...defaultConfig,
  themes,
  tokens,
  fonts: fonts,
  settings: {
    ...defaultConfig.settings,
    onlyAllowShorthands: false,
  },
});

// now, make your types flow nicely back to your `tamagui` import:
export type DscConfig = typeof dscConfig;

declare module 'tamagui' {
  interface TamaguiCustomConfig extends DscConfig {}
}
