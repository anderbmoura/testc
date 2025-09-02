import { View, YStack, styled } from 'tamagui';

export const CardContainer = styled(View, {
  name: 'CardContainer',
  backgroundColor: '$neutralBg2',
  borderRadius: '$big',
  minHeight: 244,
  width: 192,
  gap: '$tiny',
  position: 'relative',
  overflow: 'hidden',
  justifyContent: 'flex-end',
  alignItems: 'flex-start',
});

export const ContentStack = styled(YStack, {
  name: 'ContentStack',
  padding: '$tiny',
  gap: '$nano',
});
