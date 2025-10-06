import { styled, YStack, View } from 'tamagui';

/**
 * Container principal do template ContentCard.
 */
export const StyledContentCardContainer = styled(YStack, {
  name: 'ContentCardContainer',
  gap: '$nano',
  width: '100%',
});

/**
 * Container do Card com padding horizontal.
 */
export const StyledCardContainer = styled(View, {
  name: 'CardContainer',
  paddingHorizontal: '$tiny',
  width: '100%',
});
