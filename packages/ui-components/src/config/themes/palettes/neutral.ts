export const neutralDarkGradientPalette = {
  neutral1: 'hsla(0, 0%, 0%, 1)',
  neutral2: 'hsla(206, 26%, 10%, 1)',
  neutral3: 'hsla(205, 24%, 20%, 1)',
  neutral4: 'hsla(203, 22%, 32%, 1)',
  neutral5: 'hsla(201, 20%, 40%, 1)',
  neutral6: 'hsla(198, 18%, 54%, 1)',
  neutral7: 'hsla(195, 15%, 70%, 1)',
  neutral8: 'hsla(191, 12%, 80%, 1)',
  neutral9: 'hsla(189, 8%, 89%, 1)',
  neutral10: 'hsla(185, 4%, 94%, 1)',
  neutral11: 'hsla(180, 1%, 95%, 1)',
  neutral12: 'hsla(0, 0%, 100%, 1)',
};

export const neutralLightGradientPalette = {
  neutral1: 'hsla(0, 0%, 100%, 1)',
  neutral2: 'hsla(180, 1%, 95%, 1)',
  neutral3: 'hsla(185, 4%, 94%, 1)',
  neutral4: 'hsla(189, 8%, 89%, 1)',
  neutral5: 'hsla(191, 12%, 80%, 1)',
  neutral6: 'hsla(195, 15%, 70%, 1)',
  neutral7: 'hsla(198, 18%, 54%, 1)',
  neutral8: 'hsla(201, 20%, 40%, 1)',
  neutral9: 'hsla(203, 22%, 32%, 1)',
  neutral10: 'hsla(205, 24%, 20%, 1)',
  neutral11: 'hsla(206, 26%, 10%, 1)',
  neutral12: 'hsla(0, 0%, 0%, 1)',
};

export const neutralLightSemanticPalette = {
  neutral: neutralLightGradientPalette.neutral9,
  onNeutral: neutralLightGradientPalette.neutral12,
  onNeutralBg: neutralLightGradientPalette.neutral2,
  neutralBg: neutralLightGradientPalette.neutral1,
};

export const neutralDarkSemanticPalette = {
  neutral: neutralDarkGradientPalette.neutral9,
  onNeutral: neutralDarkGradientPalette.neutral12,
  onNeutralBg: neutralDarkGradientPalette.neutral2,
  neutralBg: neutralDarkGradientPalette.neutral1,
};

export const neutralDarkPalette = {
  ...neutralDarkGradientPalette,
  ...neutralDarkSemanticPalette,
};

export const neutralLightPalette = {
  ...neutralLightGradientPalette,
  ...neutralLightSemanticPalette,
};
