export const neutralDarkGradientPalette = {
  neutral1: '#000000',
  neutral2: '#262626',
  neutral3: '#404040',
  neutral4: '#595959',
  neutral5: '#737373',
  neutral6: '#8C8C8C',
  neutral7: '#A6A6A6',
  neutral8: '#BFBFBF',
  neutral9: '#D9D9D9',
  neutral10: '#F2F2F2',
  neutral11: '#F7F7F7',
  neutral12: '#FFFFFF',
};

export const neutralLightGradientPalette = {
  neutral1: '#FFFFFF',
  neutral2: '#F7F7F7',
  neutral3: '#F2F2F2',
  neutral4: '#D9D9D9',
  neutral5: '#BFBFBF',
  neutral6: '#A6A6A6',
  neutral7: '#8C8C8C',
  neutral8: '#737373',
  neutral9: '#595959',
  neutral10: '#404040',
  neutral11: '#262626',
  neutral12: '#000000',
};

export const neutralLightSemanticPalette = {
  neutralBg1: neutralLightGradientPalette.neutral1,
  neutralBg2: neutralLightGradientPalette.neutral3,
  neutralBg3: neutralLightGradientPalette.neutral5,
  neutralBgAlternative: neutralLightGradientPalette.neutral1,
  onNeutral1: neutralLightGradientPalette.neutral11,
  onNeutral2: neutralLightGradientPalette.neutral9,
  onNeutral3: neutralLightGradientPalette.neutral8,
  onNeutralInverse: neutralLightGradientPalette.neutral1,
  outlined1: neutralLightGradientPalette.neutral6,
  outlined2: neutralLightGradientPalette.neutral8,
};

export const neutralDarkSemanticPalette = {
  neutralBg1: neutralDarkGradientPalette.neutral1,
  neutralBg2: neutralDarkGradientPalette.neutral3,
  neutralBg3: neutralDarkGradientPalette.neutral5,
  neutralBgAlternative: neutralDarkGradientPalette.neutral1,
  onNeutral1: neutralDarkGradientPalette.neutral11,
  onNeutral2: neutralDarkGradientPalette.neutral9,
  onNeutral3: neutralDarkGradientPalette.neutral8,
  onNeutralInverse: neutralDarkGradientPalette.neutral1,
  outlined1: neutralDarkGradientPalette.neutral6,
  outlined2: neutralDarkGradientPalette.neutral8,
};

export const neutralDarkPalette = {
  ...neutralDarkGradientPalette,
  ...neutralDarkSemanticPalette,
};

export const neutralLightPalette = {
  ...neutralLightGradientPalette,
  ...neutralLightSemanticPalette,
};
