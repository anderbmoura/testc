import { defaultConfig } from '@tamagui/config/v4';
import { createTamagui } from 'tamagui';
import { themes } from './themes';

export const dscThemeConfig = {
  ...defaultConfig,
  media: {
    ...defaultConfig.media,
    // add your own media queries here, if wanted
  },
  settings: {
    ...defaultConfig.settings,
    onlyAllowShorthands: false,
  },
};

export const DscConfig = createTamagui({
  ...dscThemeConfig,
  themes,
});

// now, make your types flow nicely back to your `tamagui` import:
type dscConfig = typeof DscConfig;

declare module 'tamagui' {
  interface TamaguiCustomConfig extends DatescConfig {}
}
