export const warningLightGradientPalette = {
  warning1: '#ffffff',
  warning2: '#FFF9E6',
  warning3: '#FFF0C2',
  warning4: '#FDD150',
  warning5: '#FCBE05',
  warning6: '#CA9804',
  warning7: '#B08403',
  warning8: '#977203',
  warning9: '#7D5E02',
  warning10: '#654C02',
  warning11: '#4D3A02',
  warning12: '#000000',
};

export const warningDarkGradientPalette = {
  warning1: '#000000',
  warning2: '#4C3A02',
  warning3: '#755902',
  warning4: '#8F6C03',
  warning5: '#B08403',
  warning6: '#CA9804',
  warning7: '#E3AB05',
  warning8: '#FCBE05',
  warning9: '#FDD150',
  warning10: '#FEECB7',
  warning11: '#FFF6DB',
  warning12: '#ffffff',
};

export const warningLightSemanticPalette = {
  warning: warningLightGradientPalette.warning8,
  onWarning: warningLightGradientPalette.warning1,
  onWarningBg: warningLightGradientPalette.warning10,
  warningBg: warningLightGradientPalette.warning2,
};

export const warningDarkSemanticPalette = {
  warning: warningDarkGradientPalette.warning8,
  onWarning: warningDarkGradientPalette.warning1,
  onWarningBg: warningDarkGradientPalette.warning10,
  warningBg: warningDarkGradientPalette.warning2,
};

export const warningLightStatePalette = {
  warningHover1: warningLightGradientPalette.warning2,
  warningHover2: warningLightGradientPalette.warning9,
  warningPressed1: warningLightGradientPalette.warning3,
  warningPressed2: warningLightGradientPalette.warning7,
};

export const warningDarkStatePalette = {
  warningHover1: warningDarkGradientPalette.warning2,
  warningHover2: warningDarkGradientPalette.warning9,
  warningPressed1: warningDarkGradientPalette.warning3,
  warningPressed2: warningDarkGradientPalette.warning7,
};

export const warningLightPalette = {
  ...warningLightGradientPalette,
  ...warningLightSemanticPalette,
  ...warningLightStatePalette,
};

export const warningDarkPalette = {
  ...warningDarkGradientPalette,
  ...warningDarkSemanticPalette,
  ...warningDarkStatePalette,
};
