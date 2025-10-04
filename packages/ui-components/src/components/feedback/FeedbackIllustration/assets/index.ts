// Centralize todos os assets aqui
export const FeedbackAssets = {
  success: require('./success.svg'),
  warning: require('./warning.svg'),
  danger: require('./danger.svg'),
  informative: require('./informative.svg'),
} as const;

export type FeedbackAssetKey = keyof typeof FeedbackAssets;
