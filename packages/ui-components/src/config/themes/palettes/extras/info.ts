export const infoLightGradientPalette = {
  info1: '#ffffff',
  info2: '#E5F5F8',
  info3: '#C0E9F0',
  info4: '#9BDAE5',
  info5: '#4FBED2',
  info6: '#04A2BF',
  info7: '#0491AB',
  info8: '#038299',
  info9: '#037387',
  info10: '#026273',
  info11: '#02414C',
  info12: '#000000',
};

export const infoDarkGradientPalette = {
  info1: '#000000',
  info2: '#014450',
  info3: '#025564',
  info4: '#036E82',
  info5: '#038299',
  info6: '#0491AB',
  info7: '#26ADC5',
  info8: '#6ACBDC',
  info9: '#B6E4EC',
  info10: '#D5F1F6',
  info11: '#E5F5F8',
  info12: '#ffffff',
};

export const infoLightSemanticPalette = {
  info: infoLightGradientPalette.info8,
  onInfo: infoLightGradientPalette.info1,
  onInfoBg: infoLightGradientPalette.info10,
  infoBg: infoLightGradientPalette.info2,
};

export const infoDarkSemanticPalette = {
  info: infoDarkGradientPalette.info8,
  onInfo: infoDarkGradientPalette.info1,
  onInfoBg: infoDarkGradientPalette.info10,
  infoBg: infoDarkGradientPalette.info2,
};

export const infoLightStatePalette = {
  infoHover1: infoLightGradientPalette.info2,
  infoHover2: infoLightGradientPalette.info9,
  infoPressed1: infoLightGradientPalette.info3,
  infoPressed2: infoLightGradientPalette.info7,
};

export const infoDarkStatePalette = {
  infoHover1: infoDarkGradientPalette.info2,
  infoHover2: infoDarkGradientPalette.info9,
  infoPressed1: infoDarkGradientPalette.info3,
  infoPressed2: infoDarkGradientPalette.info7,
};

export const infoLightPalette = {
  ...infoLightGradientPalette,
  ...infoLightSemanticPalette,
  ...infoLightStatePalette,
};

export const infoDarkPalette = {
  ...infoDarkGradientPalette,
  ...infoDarkSemanticPalette,
  ...infoDarkStatePalette,
};
