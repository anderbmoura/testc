export const successDarkGradientPalette = {
  success1: '#002600',
  success2: '#004D00',
  success3: '#007300',
  success4: '#009900',
  success5: '#00BF00',
  success6: '#00E600',
  success7: '#1AFF1A',
  success8: '#4DFF4D',
  success9: '#80FF80',
  success10: '#B3FFB3',
  success11: '#E6FFE6',
  success12: '#F2FFF2',
};

export const successLightGradientPalette = {
  success1: '#F2FFF2',
  success2: '#E6FFE6',
  success3: '#B3FFB3',
  success4: '#80FF80',
  success5: '#4DFF4D',
  success6: '#1AFF1A',
  success7: '#00E600',
  success8: '#00BF00',
  success9: '#009900',
  success10: '#007300',
  success11: '#004D00',
  success12: '#002600',
};

export const successLightSemanticPalette = {
  success: successLightGradientPalette.success8,
  onSuccess: successLightGradientPalette.success1,
  onSuccessBg: successLightGradientPalette.success10,
  successBg: successLightGradientPalette.success2,
};

export const successDarkSemanticPalette = {
  success: successDarkGradientPalette.success8,
  onSuccess: successDarkGradientPalette.success1,
  onSuccessBg: successDarkGradientPalette.success10,
  successBg: successDarkGradientPalette.success2,
};

export const successDarkPalette = {
  ...successDarkGradientPalette,
  ...successDarkSemanticPalette,
};

export const successLightPalette = {
  ...successLightGradientPalette,
  ...successLightSemanticPalette,
};
