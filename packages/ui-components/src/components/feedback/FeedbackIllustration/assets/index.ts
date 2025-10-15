const lightAssets = {
  success: require('./success.svg'),
  warning: require('./warning.svg'),
  danger: require('./danger.svg'),
  informative: require('./informative.svg'),
} as const;

const darkAssets: typeof lightAssets = {
  success: require('./dark/success-dark.svg'),
  warning: require('./dark/warning-dark.svg'),
  danger: require('./dark/danger-dark.svg'),
  informative: require('./dark/informative-dark.svg'),
} as const;

export const FeedbackAssets = {
  light: lightAssets,
  dark: darkAssets,
} as const;

export type FeedbackAssetKey = keyof typeof lightAssets;
export type FeedbackTheme = keyof typeof FeedbackAssets;

export const getFeedbackAsset = (
  status: FeedbackAssetKey,
  theme: FeedbackTheme
) => FeedbackAssets[theme]?.[status] ?? FeedbackAssets.light[status];
