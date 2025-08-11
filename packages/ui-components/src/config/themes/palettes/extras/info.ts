export const infoDarkGradientPalette = {
  info1: 'hsla(189, 100%, 23%, 1)',
  info2: 'hsla(189, 100%, 33%, 1)',
  info3: 'hsla(189, 100%, 43%, 1)',
  info4: 'hsla(189, 100%, 53%, 1)',
  info5: 'hsla(189, 100%, 68%, 1)',
  info6: 'hsla(189, 98%, 75%, 1)',
  info7: 'hsla(189, 70%, 82%, 1)',
  info8: 'hsla(189, 44%, 90%, 1)',
  info9: 'hsla(189, 28%, 94%, 1)',
  info10: 'hsla(189, 14%, 97%, 1)',
  info11: 'hsla(189, 6%, 99%, 1)',
  info12: 'hsla(189, 1%, 100%, 1)',
};

export const infoLightGradientPalette = {
  info1: 'hsla(189, 1%, 100%, 1)',
  info2: 'hsla(189, 6%, 99%, 1)',
  info3: 'hsla(189, 14%, 97%, 1)',
  info4: 'hsla(189, 28%, 94%, 1)',
  info5: 'hsla(189, 44%, 90%, 1)',
  info6: 'hsla(189, 70%, 82%, 1)',
  info7: 'hsla(189, 98%, 75%, 1)',
  info8: 'hsla(189, 100%, 68%, 1)',
  info9: 'hsla(189, 100%, 53%, 1)',
  info10: 'hsla(189, 100%, 43%, 1)',
  info11: 'hsla(189, 100%, 33%, 1)',
  info12: 'hsla(189, 100%, 23%, 1)',
};

export const infoLightSemanticPalette = {
  info: infoLightGradientPalette.info9,
  oninfo: infoLightGradientPalette.info1,
  oninfoBg: infoLightGradientPalette.info2,
  infoBg: infoLightGradientPalette.info1,
};

export const infoDarkSemanticPalette = {
  info: infoDarkGradientPalette.info8,
  oninfo: infoDarkGradientPalette.info1,
  oninfoBg: infoDarkGradientPalette.info2,
  infoBg: infoDarkGradientPalette.info1,
};

export const infoDarkPalette = {
  ...infoDarkGradientPalette,
  ...infoDarkSemanticPalette,
};

export const infoLightPalette = {
  ...infoLightGradientPalette,
  ...infoLightSemanticPalette,
};
