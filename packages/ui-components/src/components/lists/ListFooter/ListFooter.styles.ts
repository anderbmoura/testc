import { styled, XStack, YStack } from 'tamagui';

export const ListFooterContainer = styled(XStack, {
  name: 'ListFooterContainer',
  gap: '$micro',
  alignItems: 'center',
  paddingHorizontal: '$tiny',
  paddingVertical: '$nano',
  width: '100%',
});

export const LeftContainer = styled(YStack, {
  name: 'LeftContainer',
  flex: 1,
  gap: '$quark',
  alignItems: 'flex-start',
  justifyContent: 'center',
});

export const RightContainer = styled(YStack, {
  name: 'RightContainer',
  flex: 1,
  gap: '$quark',
  alignItems: 'flex-end',
  justifyContent: 'center',
});
