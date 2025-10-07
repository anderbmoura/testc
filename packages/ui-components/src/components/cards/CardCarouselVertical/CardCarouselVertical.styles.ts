import { View, YStack, styled } from 'tamagui';

export const CardContainer = styled(View, {
  name: 'CardContainer',
  backgroundColor: '$neutralBg2',
  borderRadius: '$big',
  width: 192,
  position: 'relative',
  overflow: 'hidden',
  flexDirection: 'column',
});

export const ImageSection = styled(View, {
  name: 'ImageSection',
  position: 'relative',
  width: '100%',
  height: 150,
  flexShrink: 0,
});

export const ContentStack = styled(YStack, {
  name: 'ContentStack',
  padding: '$tiny',
  gap: '$nano',
  flexShrink: 0,
});
