export const accentLightGradientPalette = {
  accent1: '#ffffff',
  accent2: '#FFEFD6',
  accent3: '#FFE3B8',
  accent4: '#FFD392',
  accent5: '#FDB548',
  accent6: '#F39200',
  accent7: '#E58500',
  accent8: '#D87B00',
  accent9: '#BF6C00',
  accent10: '#804800',
  accent11: '#663A00',
  accent12: '#000000',
};

export const accentDarkGradientPalette = {
  accent1: '#000000',
  accent2: '#522E00',
  accent3: '#7A4500',
  accent4: '#B86800',
  accent5: '#E07F00',
  accent6: '#F58B00',
  accent7: '#FF9E1F',
  accent8: '#FFBD66',
  accent9: '#FFD7A3',
  accent10: '#FFE9CC',
  accent11: '#FFF2E0',
  accent12: '#ffffff',
};

export const accentLightSemanticPalette = {
  accent: accentLightGradientPalette.accent8,
  onAccent: accentLightGradientPalette.accent1,
  onAccentBg: accentLightGradientPalette.accent10,
  accentBg: accentLightGradientPalette.accent1,
};

export const accentDarkSemanticPalette = {
  accent: accentDarkGradientPalette.accent8,
  onAccent: accentDarkGradientPalette.accent1,
  onAccentBg: accentDarkGradientPalette.accent10,
  accentBg: accentDarkGradientPalette.accent2,
};

export const accentLightStatePalette = {
  accentHover1: accentLightGradientPalette.accent2,
  accentHover2: accentLightGradientPalette.accent9,
  accentPressed1: accentLightGradientPalette.accent3,
  accentPressed2: accentLightGradientPalette.accent7,
};

export const accentDarkStatePalette = {
  accentHover1: accentDarkGradientPalette.accent2,
  accentHover2: accentDarkGradientPalette.accent9,
  accentPressed1: accentDarkGradientPalette.accent3,
  accentPressed2: accentDarkGradientPalette.accent7,
};

export const accentLightPalette = {
  ...accentLightGradientPalette,
  ...accentLightSemanticPalette,
  ...accentLightStatePalette,
};

export const accentDarkPalette = {
  ...accentDarkGradientPalette,
  ...accentDarkSemanticPalette,
  ...accentDarkStatePalette,
};
