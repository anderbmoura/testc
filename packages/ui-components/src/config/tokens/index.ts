import { createTokens } from '@tamagui/core';
import { borderRadius } from './borderRadius/borderRadius';
import { borderWidth } from './borderWidth/borderWidth';
import { fontSize } from './fontSize/fontSize';
import { fontWeight } from './fontWeight/fontWeight';
import { iconSize } from './iconSize/iconSize';
import { letterSpacing } from './letterSpacing/letterSpacing';
import { lineHeight } from './lineHeight/lineHeight';
import { opacity } from './opacity/opacity';
import { space } from './space/space';
import { zIndex } from './zIndex/zIndex';
import { defaultConfig } from '@tamagui/config/v4';

export const tokens = createTokens({
  size: defaultConfig.tokens.size,
  fontSize: fontSize,
  space: space,
  radius: borderRadius,
  borderWidth: borderWidth,
  opacity: opacity,
  iconSize: iconSize,
  lineHeight: lineHeight,
  fontWeight: fontWeight,
  letterSpacing: letterSpacing,
  zIndex: zIndex,
});
