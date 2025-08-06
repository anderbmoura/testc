import { createTokens } from '@tamagui/core';
import { defaultConfig } from '@tamagui/config/v4';
import { borderRadiusTokens, borderWidthTokens } from './border/border';
import { opacityTokens } from './opacity/opacity';
import { spaceTokens } from './space/space';

export const tokens = createTokens({
  ...defaultConfig.tokens,
  size: defaultConfig.tokens.size,
  space: spaceTokens,
  radius: borderRadiusTokens,
  borderWidth: borderWidthTokens,
  opacity: opacityTokens,
});
