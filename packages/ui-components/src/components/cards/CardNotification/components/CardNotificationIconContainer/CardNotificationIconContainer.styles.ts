import { View, styled } from 'tamagui';

export const IconSpacer = styled(View, {
  name: 'IconSpacer',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '$nano',
});

export const IconContainer = styled(View, {
  name: 'IconContainer',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '$micro',
  borderTopLeftRadius: '$large',
  borderBottomLeftRadius: '$large',
  alignSelf: 'stretch',
  minWidth: 48,
  backgroundColor: '$color2',
});
