import { styled, View, YStack } from 'tamagui';

export const StoriesProgressContainerViewWrapper = styled(YStack, {
  name: 'StoriesProgressContainerViewWrapper',
  position: 'absolute',
  left: '$tiny',
  right: '$tiny',
  zIndex: 5,
  gap: '$tiny',
});

export const StoriesProgressContainerView = styled(View, {
  name: 'StoriesProgressContainerView',
  flexDirection: 'row',
  gap: '$nano',
});
