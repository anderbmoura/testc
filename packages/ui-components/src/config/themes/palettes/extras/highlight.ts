export const highlightDarkGradientPalette = {
  highlight1: 'hsla(204, 100%, 8%, 1)',
  highlight2: 'hsla(204, 98%, 16%, 1)',
  highlight3: 'hsla(204, 98%, 28%, 1)',
  highlight4: 'hsla(204, 98%, 36%, 1)',
  highlight5: 'hsla(204, 98%, 42%, 1)',
  highlight6: 'hsla(204, 98%, 54%, 1)',
  highlight7: 'hsla(204, 98%, 64%, 1)',
  highlight8: 'hsla(207, 72%, 83%, 1)',
  highlight9: 'hsla(207, 56%, 93%, 1)',
  highlight10: 'hsla(207, 40%, 96%, 1)',
  highlight11: 'hsla(207, 28%, 98%, 1)',
  highlight12: 'hsla(207, 11%, 100%, 1)',
};

export const highlightLightGradientPalette = {
  highlight1: 'hsla(207, 11%, 100%, 1)',
  highlight2: 'hsla(207, 8%, 98%, 1)',
  highlight3: 'hsla(207, 16%, 98%, 1)',
  highlight4: 'hsla(207, 28%, 98%, 1)',
  highlight5: 'hsla(207, 40%, 96%, 1)',
  highlight6: 'hsla(207, 56%, 93%, 1)',
  highlight7: 'hsla(207, 72%, 83%, 1)',
  highlight8: 'hsla(207, 85%, 73%, 1)',
  highlight9: 'hsla(207, 100%, 66%, 1)',
  highlight10: 'hsla(207, 100%, 58%, 1)',
  highlight11: 'hsla(207, 100%, 48%, 1)',
  highlight12: 'hsla(207, 100%, 38%, 1)',
};

export const highlightLightSemanticPalette = {
  highlight: highlightLightGradientPalette.highlight9,
  onHighlight: highlightLightGradientPalette.highlight1,
  onHighlightBg: highlightLightGradientPalette.highlight2,
  highlightBg: highlightLightGradientPalette.highlight1,
};

export const highlightDarkSemanticPalette = {
  highlight: highlightDarkGradientPalette.highlight9,
  onHighlight: highlightDarkGradientPalette.highlight1,
  onHighlightBg: highlightDarkGradientPalette.highlight2,
  highlightBg: highlightDarkGradientPalette.highlight1,
};

export const highlightDarkPalette = {
  ...highlightDarkGradientPalette,
  ...highlightDarkSemanticPalette,
};

export const highlightLightPalette = {
  ...highlightLightGradientPalette,
  ...highlightLightSemanticPalette,
};
