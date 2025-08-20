export const highlightDarkGradientPalette = {
  highlight1: '#00264D',
  highlight2: '#003366',
  highlight3: '#004D99',
  highlight4: '#0066CC',
  highlight5: '#0080FF',
  highlight6: '#1A8CFF',
  highlight7: '#3399FF',
  highlight8: '#4DA6FF',
  highlight9: '#66B2FF',
  highlight10: '#B3D9FF',
  highlight11: '#E6F0FF',
  highlight12: '#F2F7FF',
};

export const highlightLightGradientPalette = {
  highlight1: '#F2F7FF',
  highlight2: '#E6F0FF',
  highlight3: '#B3D9FF',
  highlight4: '#66B2FF',
  highlight5: '#4DA6FF',
  highlight6: '#3399FF',
  highlight7: '#1A8CFF',
  highlight8: '#0080FF',
  highlight9: '#0066CC',
  highlight10: '#004D99',
  highlight11: '#003366',
  highlight12: '#00264D',
};

export const highlightLightSemanticPalette = {
  highlight: highlightLightGradientPalette.highlight8,
  onHighlight: highlightLightGradientPalette.highlight1,
  onHighlightBg: highlightLightGradientPalette.highlight10,
  highlightBg: highlightLightGradientPalette.highlight2,
};

export const highlightDarkSemanticPalette = {
  highlight: highlightDarkGradientPalette.highlight8,
  onHighlight: highlightDarkGradientPalette.highlight1,
  onHighlightBg: highlightDarkGradientPalette.highlight10,
  highlightBg: highlightDarkGradientPalette.highlight2,
};

export const highlightDarkPalette = {
  ...highlightDarkGradientPalette,
  ...highlightDarkSemanticPalette,
};

export const highlightLightPalette = {
  ...highlightLightGradientPalette,
  ...highlightLightSemanticPalette,
};
