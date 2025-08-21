import { createTokens } from '@tamagui/core';
import { defaultConfig } from '@tamagui/config/v4';
import { borderRadiusTokens, borderWidthTokens } from './border/border';
import { fontSizeTokens } from './fontSize/fontSize';
import { fontWeightTokens } from './fontWeight/fontWeight';
import { iconSizeTokens } from './iconSize/iconSize';
import { letterSpacingTokens } from './letterSpacing/letterSpacing';
import { lineHeightTokens } from './lineHeight/lineHeight';
import { opacityTokens } from './opacity/opacity';
import { spaceTokens } from './space/space';
import { zIndexTokens } from './zIndex/zIndex';

export const tokens = createTokens({
  size: defaultConfig.tokens.size,
  fontSize: fontSizeTokens,
  space: spaceTokens,
  radius: borderRadiusTokens,
  borderWidth: borderWidthTokens,
  opacity: opacityTokens,
  iconSize: iconSizeTokens,
  lineHeight: lineHeightTokens,
  fontWeight: fontWeightTokens,
  letterSpacing: letterSpacingTokens,
  zIndex: zIndexTokens,
});
