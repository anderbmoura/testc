export const dangerDarkGradientPalette = {
  danger1: 'hsla(0, 100%, 20%, 1)',
  danger2: 'hsla(0, 100%, 30%, 1)',
  danger3: 'hsla(0, 100%, 40%, 1)',
  danger4: 'hsla(0, 92%, 48%, 1)',
  danger5: 'hsla(0, 92%, 55%, 1)',
  danger6: 'hsla(0, 84%, 62%, 1)',
  danger7: 'hsla(0, 70%, 78%, 1)',
  danger8: 'hsla(0, 48%, 88%, 1)',
  danger9: 'hsla(0, 30%, 93%, 1)',
  danger10: 'hsla(0, 15%, 97%, 1)',
  danger11: 'hsla(0, 6%, 99%, 1)',
  danger12: 'hsla(0, 1%, 100%, 1)',
};

export const dangerLightGradientPalette = {
  danger1: 'hsla(0, 1%, 100%, 1)',
  danger2: 'hsla(0, 6%, 99%, 1)',
  danger3: 'hsla(0, 15%, 97%, 1)',
  danger4: 'hsla(0, 30%, 93%, 1)',
  danger5: 'hsla(0, 48%, 88%, 1)',
  danger6: 'hsla(0, 70%, 78%, 1)',
  danger7: 'hsla(0, 84%, 62%, 1)',
  danger8: 'hsla(0, 92%, 55%, 1)',
  danger9: 'hsla(0, 92%, 48%, 1)',
  danger10: 'hsla(0, 100%, 40%, 1)',
  danger11: 'hsla(0, 100%, 30%, 1)',
  danger12: 'hsla(0, 100%, 20%, 1)',
};

export const dangerLightSemanticPalette = {
  danger: dangerLightGradientPalette.danger9,
  onDanger: dangerLightGradientPalette.danger1,
  onDangerBg: dangerLightGradientPalette.danger2,
  dangerBg: dangerLightGradientPalette.danger1,
};

export const dangerDarkSemanticPalette = {
  danger: dangerDarkGradientPalette.danger9,
  onDanger: dangerDarkGradientPalette.danger1,
  onDangerBg: dangerDarkGradientPalette.danger2,
  dangerBg: dangerDarkGradientPalette.danger1,
};

export const dangerDarkPalette = {
  ...dangerDarkGradientPalette,
  ...dangerDarkSemanticPalette,
};

export const dangerLightPalette = {
  ...dangerLightGradientPalette,
  ...dangerLightSemanticPalette,
};
