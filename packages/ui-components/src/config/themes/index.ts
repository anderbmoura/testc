import * as Colors from '@tamagui/colors';
import { createThemes, defaultComponentThemes } from '@tamagui/theme-builder';
import {
  neutralDarkPalette,
  neutralLightPalette,
  neutralLightSemanticPalette,
  neutralDarkSemanticPalette,
} from './palettes/neutral';
import {
  highlightLightSemanticPalette,
  highlightDarkSemanticPalette,
} from './palettes/extras/highlight';
import {
  infoLightSemanticPalette,
  infoDarkSemanticPalette,
} from './palettes/extras/info';
import {
  successLightSemanticPalette,
  successDarkSemanticPalette,
} from './palettes/extras/success';
import {
  warningLightSemanticPalette,
  warningDarkSemanticPalette,
} from './palettes/extras/warning';
import {
  accentDarkPalette,
  accentLightPalette,
  accentDarkSemanticPalette,
  accentLightSemanticPalette,
} from './palettes/accent';

const builtThemes = createThemes({
  componentThemes: defaultComponentThemes,

  base: {
    palette: {
      dark: neutralDarkPalette,
      light: neutralLightPalette,
    },

    extra: {
      dark: {
        ...Colors.greenDark,
        ...Colors.redDark,
        ...Colors.yellowDark,
        ...neutralDarkSemanticPalette,
        ...accentDarkSemanticPalette,
        ...highlightDarkSemanticPalette,
        ...infoDarkSemanticPalette,
        ...successDarkSemanticPalette,
        ...warningDarkSemanticPalette,
      },
      light: {
        ...Colors.green,
        ...Colors.red,
        ...Colors.yellow,
        ...neutralLightSemanticPalette,
        ...accentLightSemanticPalette,
        ...highlightLightSemanticPalette,
        ...infoLightSemanticPalette,
        ...successLightSemanticPalette,
        ...warningLightSemanticPalette,
      },
    },
  },

  accent: {
    palette: {
      dark: accentDarkPalette,
      light: accentLightPalette,
    },

    extra: {
      dark: {
        ...Colors.greenDark,
        ...Colors.redDark,
        ...Colors.yellowDark,
        ...neutralDarkSemanticPalette,
        ...accentDarkSemanticPalette,
        ...highlightDarkSemanticPalette,
        ...infoDarkSemanticPalette,
        ...successDarkSemanticPalette,
        ...warningDarkSemanticPalette,
      },
      light: {
        ...Colors.green,
        ...Colors.red,
        ...Colors.yellow,
        ...neutralLightSemanticPalette,
        ...accentLightSemanticPalette,
        ...highlightLightSemanticPalette,
        ...infoLightSemanticPalette,
        ...successLightSemanticPalette,
        ...warningLightSemanticPalette,
      },
    },
  },

  childrenThemes: {
    warning: {
      palette: {
        dark: Object.values(warningDarkSemanticPalette),
        light: Object.values(warningLightSemanticPalette),
      },
    },

    error: {
      palette: {
        dark: Object.values(warningDarkSemanticPalette),
        light: Object.values(warningLightSemanticPalette),
      },
    },

    success: {
      palette: {
        dark: Object.values(successDarkSemanticPalette),
        light: Object.values(successLightSemanticPalette),
      },
    },

    info: {
      palette: {
        dark: Object.values(infoDarkSemanticPalette),
        light: Object.values(infoLightSemanticPalette),
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
