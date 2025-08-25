export const neutralLightGradientPalette = {
  neutral1: '#FFFFFF',
  neutral2: '#F7FAFA',
  neutral3: '#F0F2F2',
  neutral4: '#EBF1F2',
  neutral5: '#E3EBEB',
  neutral6: '#D0E0E3',
  neutral7: '#9EB2B8',
  neutral8: '#64747A',
  neutral9: '#525F66',
  neutral10: '#404B52',
  neutral11: '#22292E',
  neutral12: '#000000',
};

export const neutralDarkGradientPalette = {
  neutral1: '#000000',
  neutral2: '#1E2429',
  neutral3: '#282F34',
  neutral4: '#404B52',
  neutral5: '#64747A',
  neutral6: '#9EB2B8',
  neutral7: '#D0E0E3',
  neutral8: '#B9C3CB',
  neutral9: '#EBF1F2',
  neutral10: '#DCE1E5',
  neutral11: '#F7FAFA',
  neutral12: '#FFFFFF',
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
  neutralBgAlternative: neutralDarkGradientPalette.neutral5,
  onNeutral1: neutralDarkGradientPalette.neutral11,
  onNeutral2: neutralDarkGradientPalette.neutral9,
  onNeutral3: neutralDarkGradientPalette.neutral8,
  onNeutralInverse: neutralDarkGradientPalette.neutral1,
  outlined1: neutralDarkGradientPalette.neutral6,
  outlined2: neutralDarkGradientPalette.neutral8,
};

export const neutralLightStatePalette = {
  neutralHover1: neutralLightGradientPalette.neutral5,
  neutralHover2: neutralLightGradientPalette.neutral11,
  neutralPressed1: neutralLightGradientPalette.neutral6,
  neutralPressed2: neutralLightGradientPalette.neutral8,
};

export const neutralDarkStatePalette = {
  neutralHover1: neutralDarkGradientPalette.neutral3,
  neutralHover2: neutralDarkGradientPalette.neutral11,
  neutralPressed1: neutralDarkGradientPalette.neutral5,
  neutralPressed2: neutralDarkGradientPalette.neutral8,
};

export const neutralLightDisabledPalette = {
  disabled1: neutralLightGradientPalette.neutral3,
  disabled2: neutralLightGradientPalette.neutral4,
  onDisabled: neutralLightGradientPalette.neutral7,
  disabledOutlined1: neutralLightGradientPalette.neutral6,
  disabledOutlined2: neutralLightGradientPalette.neutral7,
};

export const neutralDarkDisabledPalette = {
  disabled1: neutralDarkGradientPalette.neutral3,
  disabled2: neutralDarkGradientPalette.neutral4,
  onDisabled: neutralDarkGradientPalette.neutral7,
  disabledOutlined1: neutralDarkGradientPalette.neutral6,
  disabledOutlined2: neutralDarkGradientPalette.neutral7,
};

export const neutralLightPalette = {
  ...neutralLightGradientPalette,
  ...neutralLightSemanticPalette,
  ...neutralLightStatePalette,
  ...neutralLightDisabledPalette,
};

export const neutralDarkPalette = {
  ...neutralDarkGradientPalette,
  ...neutralDarkSemanticPalette,
  ...neutralDarkStatePalette,
  ...neutralDarkDisabledPalette,
};
