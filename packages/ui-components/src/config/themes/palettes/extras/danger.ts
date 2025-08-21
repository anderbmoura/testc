export const dangerDarkGradientPalette = {
  danger1: '#330000',
  danger2: '#660000',
  danger3: '#990000',
  danger4: '#CC0000',
  danger5: '#FF0000',
  danger6: '#FF1A1A',
  danger7: '#FF3333',
  danger8: '#FF4D4D',
  danger9: '#FF6666',
  danger10: '#FFB3B3',
  danger11: '#FFE6E6',
  danger12: '#FFF2F2',
};

export const dangerLightGradientPalette = {
  danger1: '#FFF2F2',
  danger2: '#FFE6E6',
  danger3: '#FFB3B3',
  danger4: '#FF6666',
  danger5: '#FF4D4D',
  danger6: '#FF3333',
  danger7: '#FF1A1A',
  danger8: '#FF0000',
  danger9: '#CC0000',
  danger10: '#990000',
  danger11: '#660000',
  danger12: '#330000',
};

export const dangerLightSemanticPalette = {
  danger: dangerLightGradientPalette.danger8,
  onDanger: dangerLightGradientPalette.danger1,
  onDangerBg: dangerLightGradientPalette.danger10,
  dangerBg: dangerLightGradientPalette.danger2,
};

export const dangerDarkSemanticPalette = {
  danger: dangerDarkGradientPalette.danger8,
  onDanger: dangerDarkGradientPalette.danger1,
  onDangerBg: dangerDarkGradientPalette.danger10,
  dangerBg: dangerDarkGradientPalette.danger2,
};

export const dangerDarkPalette = {
  ...dangerDarkGradientPalette,
  ...dangerDarkSemanticPalette,
};

export const dangerLightPalette = {
  ...dangerLightGradientPalette,
  ...dangerLightSemanticPalette,
};
