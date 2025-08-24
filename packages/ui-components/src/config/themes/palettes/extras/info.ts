export const infoDarkGradientPalette = {
  info1: '#00262B',
  info2: '#004D55',
  info3: '#007380',
  info4: '#0099AA',
  info5: '#00BFD4',
  info6: '#00E6FF',
  info7: '#1AE9FF',
  info8: '#4DEDED',
  info9: '#80F0F0',
  info10: '#B3F7F7',
  info11: '#E6FDFD',
  info12: '#F2FEFE',
};

export const infoLightGradientPalette = {
  info1: '#F2FEFE',
  info2: '#E6FDFD',
  info3: '#B3F7F7',
  info4: '#80F0F0',
  info5: '#4DEDED',
  info6: '#1AE9FF',
  info7: '#00E6FF',
  info8: '#00BFD4',
  info9: '#0099AA',
  info10: '#007380',
  info11: '#004D55',
  info12: '#00262B',
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

export const infoDarkPalette = {
  ...infoDarkGradientPalette,
  ...infoDarkSemanticPalette,
};

export const infoLightPalette = {
  ...infoLightGradientPalette,
  ...infoLightSemanticPalette,
};
