import { styled } from 'tamagui';
import { View } from 'react-native';
import { YStack } from 'tamagui';

export const StyledInputWrapper = styled(View, {
  name: 'StyledInputWrapper',
  width: '100%',
});

export const StyledInputContent = styled(YStack, {
  name: 'StyledInputContent',
  gap: '$quark',
  width: '100%',
});
