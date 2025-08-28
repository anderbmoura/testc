export const decorativeLightGradientPalette = {
  decorative1: '#FFFFFF',
  decorative2: '#E4F7F4',
  decorative3: '#D0F2ED',
  decorative4: '#81D6C9',
  decorative5: '#54BBAB',
  decorative6: '#359485',
  decorative7: '#2A8073',
  decorative8: '#216E62',
  decorative9: '#145248',
  decorative10: '#03453B',
  decorative11: '#00332B',
  decorative12: '#000000',
};

export const decorativeDarkGradientPalette = {
  decorative1: '#000000',
  decorative2: '#09342E',
  decorative3: '#0B473D',
  decorative4: '#0E584C',
  decorative5: '#137264',
  decorative6: '#189582',
  decorative7: '#1DAF98',
  decorative8: '#21CAAF',
  decorative9: '#61E5D1',
  decorative10: '#CBF6F0',
  decorative11: '#E5F1FC',
  decorative12: '#FFFFFF',
};

export const decorativeLightSemanticPalette = {
  decorative: decorativeLightGradientPalette.decorative8,
  onDecorative: decorativeLightGradientPalette.decorative1,
  onDecorativeBg: decorativeLightGradientPalette.decorative10,
  decorativeBg: decorativeLightGradientPalette.decorative2,
};

export const decorativeDarkSemanticPalette = {
  decorative: decorativeDarkGradientPalette.decorative8,
  onDecorative: decorativeDarkGradientPalette.decorative1,
  onDecorativeBg: decorativeDarkGradientPalette.decorative10,
  decorativeBg: decorativeDarkGradientPalette.decorative2,
};

export const decorativeLightStatePalette = {
  decorativeHover1: decorativeLightGradientPalette.decorative2,
  decorativeHover2: decorativeLightGradientPalette.decorative9,
  decorativePressed1: decorativeLightGradientPalette.decorative3,
  decorativePressed2: decorativeLightGradientPalette.decorative7,
};

export const decorativeDarkStatePalette = {
  decorativeHover1: decorativeDarkGradientPalette.decorative2,
  decorativeHover2: decorativeDarkGradientPalette.decorative9,
  decorativePressed1: decorativeDarkGradientPalette.decorative3,
  decorativePressed2: decorativeDarkGradientPalette.decorative7,
};

export const decorativeLightPalette = {
  ...decorativeLightGradientPalette,
  ...decorativeLightSemanticPalette,
  ...decorativeLightStatePalette,
};

export const decorativeDarkPalette = {
  ...decorativeDarkGradientPalette,
  ...decorativeDarkSemanticPalette,
  ...decorativeDarkStatePalette,
};
