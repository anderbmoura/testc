export const dangerLightGradientPalette = {
  danger1: '#ffffff',
  danger2: '#FBEBEB',
  danger3: '#F5CDCD',
  danger4: '#F0AFAF',
  danger5: '#E47272',
  danger6: '#D93636',
  danger7: '#C73232',
  danger8: '#B22C2C',
  danger9: '#A12828',
  danger10: '#8C2424',
  danger11: '#661A1A',
  danger12: '#000000',
};

export const dangerDarkGradientPalette = {
  danger1: '#000000',
  danger2: '#380E0E',
  danger3: '#661A1A',
  danger4: '#8C2323',
  danger5: '#B22C2C',
  danger6: '#C73232',
  danger7: '#D93636',
  danger8: '#E47272',
  danger9: '#F0AFAF',
  danger10: '#F5CDCD',
  danger11: '#FBEBEB',
  danger12: '#ffffff',
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

export const dangerLightStatePalette = {
  dangerHover1: dangerLightGradientPalette.danger2,
  dangerHover2: dangerLightGradientPalette.danger9,
  dangerPressed1: dangerLightGradientPalette.danger3,
  dangerPressed2: dangerLightGradientPalette.danger7,
};

export const dangerDarkStatePalette = {
  dangerHover1: dangerDarkGradientPalette.danger2,
  dangerHover2: dangerDarkGradientPalette.danger9,
  dangerPressed1: dangerDarkGradientPalette.danger3,
  dangerPressed2: dangerDarkGradientPalette.danger7,
};

export const dangerLightPalette = {
  ...dangerLightGradientPalette,
  ...dangerLightSemanticPalette,
  ...dangerLightStatePalette,
};

export const dangerDarkPalette = {
  ...dangerDarkGradientPalette,
  ...dangerDarkSemanticPalette,
  ...dangerDarkStatePalette,
};
