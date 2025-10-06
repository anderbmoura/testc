export const successLightGradientPalette = {
  success1: '#ffffff',
  success2: '#E7F4EA',
  success3: '#C5E4CC',
  success4: '#A2D3AD',
  success5: '#5CB26E',
  success6: '#179231',
  success7: '#15852D',
  success8: '#127527',
  success9: '#106622',
  success10: '#0D581D',
  success11: '#093A14',
  success12: '#000000',
};

export const successDarkGradientPalette = {
  success1: '#000000',
  success2: '#083512',
  success3: '#0C501A',
  success4: '#0F6120',
  success5: '#127527',
  success6: '#15842C',
  success7: '#2B9742',
  success8: '#50BE67',
  success9: '#9BDAA9',
  success10: '#C1E8C9',
  success11: '#E7F4EA',
  success12: '#ffffff',
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

export const successLightStatePalette = {
  successHover1: successLightGradientPalette.success2,
  successHover2: successLightGradientPalette.success9,
  successPressed1: successLightGradientPalette.success3,
  successPressed2: successLightGradientPalette.success7,
};

export const successDarkStatePalette = {
  successHover1: successDarkGradientPalette.success2,
  successHover2: successDarkGradientPalette.success9,
  successPressed1: successDarkGradientPalette.success3,
  successPressed2: successDarkGradientPalette.success7,
};

export const successLightPalette = {
  ...successLightGradientPalette,
  ...successLightSemanticPalette,
  ...successLightStatePalette,
};

export const successDarkPalette = {
  ...successDarkGradientPalette,
  ...successDarkSemanticPalette,
  ...successDarkStatePalette,
};
