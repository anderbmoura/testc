export const warningDarkGradientPalette = {
  warning1: '#4D3D00',
  warning2: '#665200',
  warning3: '#997B00',
  warning4: '#CCA300',
  warning5: '#FFCC00',
  warning6: '#FFD21A',
  warning7: '#FFD633',
  warning8: '#FFDB4D',
  warning9: '#FFE066',
  warning10: '#FFECB3',
  warning11: '#FFF6E6',
  warning12: '#FFF9F2',
};

export const warningLightGradientPalette = {
  warning1: '#FFF9F2',
  warning2: '#FFF6E6',
  warning3: '#FFECB3',
  warning4: '#FFE066',
  warning5: '#FFDB4D',
  warning6: '#FFD633',
  warning7: '#FFD21A',
  warning8: '#FFCC00',
  warning9: '#CCA300',
  warning10: '#997B00',
  warning11: '#665200',
  warning12: '#4D3D00',
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

export const warningDarkPalette = {
  ...warningDarkGradientPalette,
  ...warningDarkSemanticPalette,
};

export const warningLightPalette = {
  ...warningLightGradientPalette,
  ...warningLightSemanticPalette,
};
