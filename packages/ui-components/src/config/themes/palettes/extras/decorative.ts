export const decorativeDarkGradientPalette = {
  decorative1: '#252D3E',
  decorative2: '#253858',
  decorative3: '#1D6592',
  decorative4: '#2684FF',
  decorative5: '#4C9AFF',
  decorative6: '#68ACFF',
  decorative7: '#85BCFF',
  decorative8: '#A3CDFF',
  decorative9: '#C1DDFF',
  decorative10: '#DEEDFF',
  decorative11: '#EBF4FF',
  decorative12: '#F7FAFF',
};

export const decorativeLightGradientPalette = {
  decorative1: '#F7FAFF',
  decorative2: '#EBF4FF',
  decorative3: '#DEEDFF',
  decorative4: '#C1DDFF',
  decorative5: '#A3CDFF',
  decorative6: '#85BCFF',
  decorative7: '#68ACFF',
  decorative8: '#4C9AFF',
  decorative9: '#2684FF',
  decorative10: '#1D6592',
  decorative11: '#253858',
  decorative12: '#252D3E',
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

export const decorativeDarkPalette = {
  ...decorativeDarkGradientPalette,
  ...decorativeDarkSemanticPalette,
};

export const decorativeLightPalette = {
  ...decorativeLightGradientPalette,
  ...decorativeLightSemanticPalette,
};
