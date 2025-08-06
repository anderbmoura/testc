import * as Colors from '@tamagui/colors';
import { createThemes, defaultComponentThemes } from '@tamagui/theme-builder';

const darkPalette = [
  'hsla(0, 5%, 2%, 1)',
  'hsla(0, 5%, 7%, 1)',
  'hsla(0, 5%, 13%, 1)',
  'hsla(0, 5%, 18%, 1)',
  'hsla(0, 5%, 23%, 1)',
  'hsla(0, 5%, 29%, 1)',
  'hsla(0, 5%, 34%, 1)',
  'hsla(0, 5%, 39%, 1)',
  'hsla(0, 5%, 45%, 1)',
  'hsla(0, 5%, 50%, 1)',
  'hsla(0, 5%, 90%, 1)',
  'hsla(0, 5%, 95%, 1)',
];
const lightPalette = [
  'hsla(0, 5%, 98%, 1)',
  'hsla(0, 5%, 93%, 1)',
  'hsla(0, 5%, 87%, 1)',
  'hsla(0, 5%, 82%, 1)',
  'hsla(0, 5%, 77%, 1)',
  'hsla(0, 5%, 71%, 1)',
  'hsla(0, 5%, 66%, 1)',
  'hsla(0, 5%, 61%, 1)',
  'hsla(0, 5%, 55%, 1)',
  'hsla(0, 5%, 50%, 1)',
  'hsla(0, 5%, 20%, 1)',
  'hsla(0, 5%, 10%, 1)',
];

const lightShadows = {
  shadow1: 'rgba(0,0,0,0.04)',
  shadow2: 'rgba(0,0,0,0.08)',
  shadow3: 'rgba(0,0,0,0.16)',
  shadow4: 'rgba(0,0,0,0.24)',
  shadow5: 'rgba(0,0,0,0.32)',
  shadow6: 'rgba(0,0,0,0.4)',
};

const darkShadows = {
  shadow1: 'rgba(0,0,0,0.2)',
  shadow2: 'rgba(0,0,0,0.3)',
  shadow3: 'rgba(0,0,0,0.4)',
  shadow4: 'rgba(0,0,0,0.5)',
  shadow5: 'rgba(0,0,0,0.6)',
  shadow6: 'rgba(0,0,0,0.7)',
};

// we're adding some example sub-themes for you to show how they are done, "success" "warning", "error":

const builtThemes = createThemes({
  componentThemes: defaultComponentThemes,

  base: {
    palette: {
      dark: darkPalette,
      light: lightPalette,
    },

    extra: {
      light: {
        ...Colors.green,
        ...Colors.red,
        ...Colors.yellow,
        ...lightShadows,
        shadowColor: lightShadows.shadow1,
      },
      dark: {
        ...Colors.greenDark,
        ...Colors.redDark,
        ...Colors.yellowDark,
        ...darkShadows,
        shadowColor: darkShadows.shadow1,
      },
    },
  },

  accent: {
    palette: {
      dark: [
        'hsla(210, 70%, 30%, 1)',
        'hsla(210, 70%, 32%, 1)',
        'hsla(210, 70%, 34%, 1)',
        'hsla(210, 70%, 37%, 1)',
        'hsla(210, 70%, 39%, 1)',
        'hsla(210, 70%, 41%, 1)',
        'hsla(210, 70%, 43%, 1)',
        'hsla(210, 70%, 46%, 1)',
        'hsla(210, 70%, 48%, 1)',
        'hsla(210, 70%, 50%, 1)',
        'hsla(210, 70%, 80%, 1)',
        'hsla(210, 70%, 90%, 1)',
      ],
      light: [
        'hsla(206, 71%, 94%, 1)', // #e5f1fc
        'hsla(206, 66%, 87%, 1)', // #c5dff3
        'hsla(206, 61%, 79%, 1)', // #a5ceea
        'hsla(206, 56%, 71%, 1)', // #85bce1
        'hsla(206, 60%, 64%, 1)', // #65aad8
        'hsla(206, 100%, 34%, 1)', // #005ca9
        'hsla(206, 100%, 28%, 1)', // #00528f
        'hsla(206, 100%, 23%, 1)', // #004776
        'hsla(206, 100%, 18%, 1)', // #003d5c
        'hsla(206, 100%, 13%, 1)', // #003343
        'hsla(206, 100%, 14%, 1)', // #002f48
        'hsla(206, 100%, 15%, 1)', // #002a4d
      ],
    },
  },

  childrenThemes: {
    warning: {
      palette: {
        dark: Object.values(Colors.yellowDark),
        light: Object.values(Colors.yellow),
      },
    },

    error: {
      palette: {
        dark: Object.values(Colors.redDark),
        light: Object.values(Colors.red),
      },
    },

    success: {
      palette: {
        dark: Object.values(Colors.greenDark),
        light: Object.values(Colors.green),
      },
    },
  },

  // optionally add more, can pass palette or template

  // grandChildrenThemes: {
  //   alt1: {
  //     template: 'alt1',
  //   },
  //   alt2: {
  //     template: 'alt2',
  //   },
  //   surface1: {
  //     template: 'surface1',
  //   },
  //   surface2: {
  //     template: 'surface2',
  //   },
  //   surface3: {
  //     template: 'surface3',
  //   },
  // },
});

export type Themes = typeof builtThemes;

// the process.env conditional here is optional but saves web client-side bundle
// size by leaving out themes JS. tamagui automatically hydrates themes from CSS
// back into JS for you, and the bundler plugins set TAMAGUI_ENVIRONMENT. so
// long as you are using the Vite, Next, Webpack plugins this should just work,
// but if not you can just export builtThemes directly as themes:
export const themes: Themes =
  process.env.TAMAGUI_ENVIRONMENT === 'client' &&
  process.env.NODE_ENV === 'production'
    ? ({} as any)
    : (builtThemes as any);
