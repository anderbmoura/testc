export const accentDarkGradientPalette = {
  accent1: 'hsla(34, 100%, 28%, 1)',
  accent2: 'hsla(34, 100%, 45%, 1)',
  accent3: 'hsla(34, 100%, 65%, 1)',
  accent4: 'hsla(34, 100%, 85%, 1)',
  accent5: 'hsla(35, 100%, 90%, 1)',
  accent6: 'hsla(36, 100%, 95%, 1)',
  accent7: 'hsla(34, 80%, 96%, 1)',
  accent8: 'hsla(35, 60%, 96%, 1)',
  accent9: 'hsla(36, 40%, 97%, 1)',
  accent10: 'hsla(36, 20%, 98%, 1)',
  accent11: 'hsla(36, 10%, 99%, 1)',
  accent12: 'hsla(37, 11%, 100%, 1)',
};

export const accentLightGradientPalette = {
  accent1: 'hsla(37, 11%, 100%, 1)',
  accent2: 'hsla(36, 10%, 99%, 1)',
  accent3: 'hsla(36, 20%, 98%, 1)',
  accent4: 'hsla(36, 40%, 97%, 1)',
  accent5: 'hsla(35, 60%, 96%, 1)',
  accent6: 'hsla(34, 80%, 96%, 1)',
  accent7: 'hsla(36, 100%, 95%, 1)',
  accent8: 'hsla(35, 100%, 90%, 1)',
  accent9: 'hsla(34, 100%, 85%, 1)',
  accent10: 'hsla(34, 100%, 65%, 1)',
  accent11: 'hsla(34, 100%, 45%, 1)',
  accent12: 'hsla(34, 100%, 28%, 1)',
};

export const accentLightSemanticPalette = {
  accent: accentLightGradientPalette.accent9,
  onAccent: accentLightGradientPalette.accent1,
  onAccentBg: accentLightGradientPalette.accent2,
  accentBg: accentLightGradientPalette.accent1,
};

export const accentDarkSemanticPalette = {
  accent: accentDarkGradientPalette.accent7,
  onAccent: accentDarkGradientPalette.accent1,
  onAccentBg: accentDarkGradientPalette.accent2,
  accentBg: accentDarkGradientPalette.accent1,
};

export const accentDarkPalette = {
  ...accentDarkGradientPalette,
  ...accentDarkSemanticPalette,
};

export const accentLightPalette = {
  ...accentLightGradientPalette,
  ...accentLightSemanticPalette,
};
