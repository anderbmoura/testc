export const warningDarkGradientPalette = {
  warning1: 'hsla(45, 100%, 30%, 1)',
  warning2: 'hsla(45, 100%, 40%, 1)',
  warning3: 'hsla(45, 100%, 49%, 1)',
  warning4: 'hsla(45, 100%, 60%, 1)',
  warning5: 'hsla(45, 100%, 78%, 1)',
  warning6: 'hsla(45, 98%, 99%, 1)',
  warning7: 'hsla(45, 60%, 99%, 1)',
  warning8: 'hsla(45, 40%, 99%, 1)',
  warning9: 'hsla(45, 25%, 99%, 1)',
  warning10: 'hsla(45, 15%, 99%, 1)',
  warning11: 'hsla(45, 5%, 99%, 1)',
  warning12: 'hsla(45, 1%, 100%, 1)',
};

export const warningLightGradientPalette = {
  warning1: 'hsla(45, 1%, 100%, 1)',
  warning2: 'hsla(45, 5%, 99%, 1)',
  warning3: 'hsla(45, 15%, 99%, 1)',
  warning4: 'hsla(45, 25%, 99%, 1)',
  warning5: 'hsla(45, 40%, 99%, 1)',
  warning6: 'hsla(45, 60%, 99%, 1)',
  warning7: 'hsla(45, 98%, 99%, 1)',
  warning8: 'hsla(45, 100%, 78%, 1)',
  warning9: 'hsla(45, 100%, 60%, 1)',
  warning10: 'hsla(45, 100%, 49%, 1)',
  warning11: 'hsla(45, 100%, 40%, 1)',
  warning12: 'hsla(45, 100%, 30%, 1)',
};

export const warningLightSemanticPalette = {
  warning: warningLightGradientPalette.warning9,
  onWarning: warningLightGradientPalette.warning1,
  onWarningBg: warningLightGradientPalette.warning2,
  warningBg: warningLightGradientPalette.warning1,
};

export const warningDarkSemanticPalette = {
  warning: warningDarkGradientPalette.warning9,
  onWarning: warningDarkGradientPalette.warning1,
  onWarningBg: warningDarkGradientPalette.warning2,
  warningBg: warningDarkGradientPalette.warning1,
};

export const warningDarkPalette = {
  ...warningDarkGradientPalette,
  ...warningDarkSemanticPalette,
};

export const warningLightPalette = {
  ...warningLightGradientPalette,
  ...warningLightSemanticPalette,
};
