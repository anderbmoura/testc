import { styled, YStack } from 'tamagui';

export const RowsContainer = styled(YStack, {
  name: 'RowsContainer',
  gap: '$nano',
  width: '100%',
});

export const AnimatedRowsContainer = styled(YStack, {
  name: 'AnimatedRowsContainer',
  gap: '$nano',
  width: '100%',
  overflow: 'hidden',
});
