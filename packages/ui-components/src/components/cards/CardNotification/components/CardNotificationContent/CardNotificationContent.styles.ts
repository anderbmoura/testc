import { View, styled } from 'tamagui';

export const TextContainer = styled(View, {
  name: 'TextContainer',
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'flex-start',
  gap: '$quark',
  paddingHorizontal: '$tiny',
  paddingVertical: '$micro',
});
