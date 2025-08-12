import * as Colors from '@tamagui/colors';
import { createThemes, defaultComponentThemes } from '@tamagui/theme-builder';
import {
  neutralDarkGradientPalette,
  neutralLightGradientPalette,
  neutralDarkPalette,
  neutralLightPalette,
} from './palettes/neutral';
import {
  highlightDarkPalette,
  highlightLightPalette,
  highlightDarkGradientPalette,
  highlightLightGradientPalette,
} from './palettes/extras/highlight';
import {
  infoDarkPalette,
  infoLightPalette,
  infoDarkGradientPalette,
  infoLightGradientPalette,
} from './palettes/extras/info';
import {
  successDarkPalette,
  successLightPalette,
  successDarkGradientPalette,
  successLightGradientPalette,
} from './palettes/extras/success';
import {
  warningDarkPalette,
  warningLightPalette,
  warningDarkGradientPalette,
  warningLightGradientPalette,
} from './palettes/extras/warning';
import {
  dangerDarkPalette,
  dangerLightPalette,
  dangerDarkGradientPalette,
  dangerLightGradientPalette,
} from './palettes/extras/danger';
import {
  accentDarkGradientPalette,
  accentLightGradientPalette,
  accentDarkPalette,
  accentLightPalette,
} from './palettes/accent';

const builtThemes = createThemes({
  componentThemes: defaultComponentThemes,

  base: {
    palette: {
      dark: Object.values(neutralDarkGradientPalette),
      light: Object.values(neutralLightGradientPalette),
    },

    extra: {
      dark: {
        ...Colors.greenDark,
        ...Colors.redDark,
        ...Colors.yellowDark,
        ...neutralDarkPalette,
        ...accentDarkPalette,
        ...highlightDarkPalette,
        ...infoDarkPalette,
        ...successDarkPalette,
        ...warningDarkPalette,
        ...dangerDarkPalette,
      },
      light: {
        ...Colors.green,
        ...Colors.red,
        ...Colors.yellow,
        ...neutralLightPalette,
        ...accentLightPalette,
        ...highlightLightPalette,
        ...infoLightPalette,
        ...successLightPalette,
        ...warningLightPalette,
        ...dangerLightPalette,
      },
    },
  },

  accent: {
    palette: {
      dark: Object.values(accentDarkGradientPalette),
      light: Object.values(accentLightGradientPalette),
    },

    extra: {
      dark: {
        ...Colors.greenDark,
        ...Colors.redDark,
        ...Colors.yellowDark,
        ...neutralDarkPalette,
        ...accentDarkPalette,
        ...highlightDarkPalette,
        ...infoDarkPalette,
        ...successDarkPalette,
        ...warningDarkPalette,
        ...dangerDarkPalette,
      },
      light: {
        ...Colors.green,
        ...Colors.red,
        ...Colors.yellow,
        ...neutralLightPalette,
        ...accentLightPalette,
        ...highlightLightPalette,
        ...infoLightPalette,
        ...successLightPalette,
        ...warningLightPalette,
        ...dangerLightPalette,
      },
    },
  },

  childrenThemes: {
    highlight: {
      palette: {
        dark: Object.values(highlightDarkGradientPalette),
        light: Object.values(highlightLightGradientPalette),
      },
    },

    warning: {
      palette: {
        dark: Object.values(warningDarkGradientPalette),
        light: Object.values(warningLightGradientPalette),
      },
    },

    error: {
      palette: {
        dark: Object.values(dangerDarkGradientPalette),
        light: Object.values(dangerLightGradientPalette),
      },
    },

    success: {
      palette: {
        dark: Object.values(successDarkGradientPalette),
        light: Object.values(successLightGradientPalette),
      },
    },

    info: {
      palette: {
        dark: Object.values(infoDarkGradientPalette),
        light: Object.values(infoLightGradientPalette),
      },
    },
  },
});

export type Themes = typeof builtThemes;

export const themes: Themes =
  process.env.TAMAGUI_ENVIRONMENT === 'client' &&
  process.env.NODE_ENV === 'production'
    ? ({} as any)
    : (builtThemes as any);
