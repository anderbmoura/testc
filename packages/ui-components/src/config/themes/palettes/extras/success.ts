export const successDarkGradientPalette = {
  success1: 'hsla(133, 100%, 16%, 1)',
  success2: 'hsla(133, 100%, 26%, 1)',
  success3: 'hsla(133, 100%, 36%, 1)',
  success4: 'hsla(133, 92%, 45%, 1)',
  success5: 'hsla(133, 92%, 52%, 1)',
  success6: 'hsla(133, 84%, 57%, 1)',
  success7: 'hsla(133, 70%, 75%, 1)',
  success8: 'hsla(133, 48%, 85%, 1)',
  success9: 'hsla(133, 30%, 91%, 1)',
  success10: 'hsla(133, 15%, 96%, 1)',
  success11: 'hsla(133, 6%, 98%, 1)',
  success12: 'hsla(133, 1%, 100%, 1)',
};

export const successLightGradientPalette = {
  success1: 'hsla(133, 1%, 100%, 1)',
  success2: 'hsla(133, 6%, 98%, 1)',
  success3: 'hsla(133, 15%, 96%, 1)',
  success4: 'hsla(133, 30%, 91%, 1)',
  success5: 'hsla(133, 48%, 85%, 1)',
  success6: 'hsla(133, 70%, 75%, 1)',
  success7: 'hsla(133, 84%, 57%, 1)',
  success8: 'hsla(133, 92%, 52%, 1)',
  success9: 'hsla(133, 92%, 45%, 1)',
  success10: 'hsla(133, 100%, 36%, 1)',
  success11: 'hsla(133, 100%, 26%, 1)',
  success12: 'hsla(133, 100%, 16%, 1)',
};

export const successLightSemanticPalette = {
  success: successLightGradientPalette.success9,
  onSuccess: successLightGradientPalette.success1,
  onSuccessBg: successLightGradientPalette.success2,
  successBg: successLightGradientPalette.success1,
};

export const successDarkSemanticPalette = {
  success: successDarkGradientPalette.success8,
  onSuccess: successDarkGradientPalette.success1,
  onSuccessBg: successDarkGradientPalette.success2,
  successBg: successDarkGradientPalette.success1,
};

export const successDarkPalette = {
  ...successDarkGradientPalette,
  ...successDarkSemanticPalette,
};

export const successLightPalette = {
  ...successLightGradientPalette,
  ...successLightSemanticPalette,
};
