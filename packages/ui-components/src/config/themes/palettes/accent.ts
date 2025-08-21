export const accentDarkGradientPalette = {
  accent1: '#332200',
  accent2: '#663300',
  accent3: '#994D00',
  accent4: '#CC6600',
  accent5: '#FF8000',
  accent6: '#FF8C1A',
  accent7: '#FF9933',
  accent8: '#FFA64D',
  accent9: '#FFB266',
  accent10: '#FFD9B3',
  accent11: '#FFF0E6',
  accent12: '#FFF7F2',
};

export const accentLightGradientPalette = {
  accent1: '#FFF7F2',
  accent2: '#FFF0E6',
  accent3: '#FFD9B3',
  accent4: '#FFB266',
  accent5: '#FFA64D',
  accent6: '#FF9933',
  accent7: '#FF8C1A',
  accent8: '#FF8000',
  accent9: '#CC6600',
  accent10: '#994D00',
  accent11: '#663300',
  accent12: '#332200',
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

export const accentDarkPalette = {
  ...accentDarkGradientPalette,
  ...accentDarkSemanticPalette,
};

export const accentLightPalette = {
  ...accentLightGradientPalette,
  ...accentLightSemanticPalette,
};
