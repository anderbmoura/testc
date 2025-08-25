export const highlightLightGradientPalette = {
  highlight1: '#ffffff',
  highlight2: '#E5F2FC',
  highlight3: '#CCE6FC',
  highlight4: '#A0D2FC',
  highlight5: '#6DBAFA',
  highlight6: '#2D8AD8',
  highlight7: '#1474C3',
  highlight8: '#005CA9',
  highlight9: '#005094',
  highlight10: '#00437A',
  highlight11: '#002747',
  highlight12: '#000000',
};

export const highlightDarkGradientPalette = {
  highlight1: '#000000',
  highlight2: '#002E57',
  highlight3: '#003461',
  highlight4: '#004784',
  highlight5: '#006CCB',
  highlight6: '#0078E0',
  highlight7: '#005CA9',
  highlight8: '#33A0FF',
  highlight9: '#8FCBFF',
  highlight10: '#C2E2FF',
  highlight11: '#E2F1FF',
  highlight12: '#ffffff',
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

export const highlightLightStatePalette = {
  highlightHover1: highlightLightGradientPalette.highlight2,
  highlightHover2: highlightLightGradientPalette.highlight9,
  highlightPressed1: highlightLightGradientPalette.highlight3,
  highlightPressed2: highlightLightGradientPalette.highlight7,
};

export const highlightDarkStatePalette = {
  highlightHover1: highlightDarkGradientPalette.highlight2,
  highlightHover2: highlightDarkGradientPalette.highlight9,
  highlightPressed1: highlightDarkGradientPalette.highlight3,
  highlightPressed2: highlightDarkGradientPalette.highlight7,
};

export const highlightLightPalette = {
  ...highlightLightGradientPalette,
  ...highlightLightSemanticPalette,
  ...highlightLightStatePalette,
};

export const highlightDarkPalette = {
  ...highlightDarkGradientPalette,
  ...highlightDarkSemanticPalette,
  ...highlightDarkStatePalette,
};
