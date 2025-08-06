export const typographyPresets = {
  displayStandard: {
    fontFamily: '$heading',
    fontSize: '$larger',
    fontWeight: '$400',
    lineHeight: '$44',
  },

  displayStandardEmphasized: {
    fontFamily: '$heading',
    fontSize: '$larger',
    fontWeight: '$600',
    lineHeight: '$44',
  },

  titleLarge: {
    fontFamily: '$heading',
    fontSize: '$large',
    fontWeight: '$400',
    lineHeight: '$38',
  },

  titleLargeEmphasized: {
    fontFamily: '$heading',
    fontSize: '$large',
    fontWeight: '$600',
    lineHeight: '$38',
  },

  titleStandard: {
    fontFamily: '$heading',
    fontSize: '$medium',
    fontWeight: '$400',
    lineHeight: '$34',
  },

  titleStandardEmphasized: {
    fontFamily: '$heading',
    fontSize: '$medium',
    fontWeight: '$600',
    lineHeight: '$34',
  },

  titleSmall: {
    fontFamily: '$heading',
    fontSize: '$small',
    fontWeight: '$400',
    lineHeight: '$28',
  },

  titleSmallEmphasized: {
    fontFamily: '$heading',
    fontSize: '$small',
    fontWeight: '$600',
    lineHeight: '$28',
  },

  bodyLarge: {
    fontFamily: '$body',
    fontSize: '$smaller',
    fontWeight: '$400',
    lineHeight: '$24',
  },

  bodyLargeEmphasized: {
    fontFamily: '$body',
    fontSize: '$smaller',
    fontWeight: '$600',
    lineHeight: '$24',
  },

  bodyStandard: {
    fontFamily: '$body',
    fontSize: '$tiny',
    fontWeight: '$400',
    lineHeight: '$22',
  },

  bodyStandardEmphasized: {
    fontFamily: '$body',
    fontSize: '$tiny',
    fontWeight: '$600',
    lineHeight: '$22',
  },

  bodySmall: {
    fontFamily: '$body',
    fontSize: '$micro',
    fontWeight: '$400',
    lineHeight: '$22',
  },

  bodySmallEmphasized: {
    fontFamily: '$body',
    fontSize: '$micro',
    fontWeight: '$600',
    lineHeight: '$22',
  },

  labelStandard: {
    fontFamily: '$body',
    fontSize: '$nano',
    fontWeight: '$400',
    lineHeight: '$20',
  },

  labelStandardEmphasized: {
    fontFamily: '$body',
    fontSize: '$nano',
    fontWeight: '$600',
    lineHeight: '$20',
  },

  labelSmall: {
    fontFamily: '$body',
    fontSize: '$quark',
    fontWeight: '$400',
    lineHeight: '$20',
  },

  labelSmallEmphasized: {
    fontFamily: '$body',
    fontSize: '$quark',
    fontWeight: '$600',
    lineHeight: '$20',
  },

  labelTiny: {
    fontFamily: '$body',
    fontSize: '$quark',
    fontWeight: '$400',
    lineHeight: '$20',
  },

  labelTinyEmphasized: {
    fontFamily: '$body',
    fontSize: '$quark',
    fontWeight: '$600',
    lineHeight: '$20',
  },
} as const;

export type TypographyPreset = keyof typeof typographyPresets;
