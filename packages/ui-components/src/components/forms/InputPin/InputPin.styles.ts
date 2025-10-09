import { styled, YStack } from 'tamagui';
import { View } from 'react-native';

export const StyledInputPinWrapper = styled(View, {
  name: 'StyledInputPinWrapper',
  width: '100%',
});

export const StyledInputPinContent = styled(YStack, {
  name: 'StyledInputPinContent',
  gap: '$quark',
  width: '100%',
});
