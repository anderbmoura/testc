import { styled, YStack, XStack, View } from 'tamagui';

export const CardWidgetFooterContainer = styled(YStack, {
  name: 'CardWidgetFooterContainer',
  paddingTop: '$none',
  paddingBottom: '$tiny',
  paddingHorizontal: '$tiny',
  gap: '$quark',
});

export const CardWidgetFooterValueContainer = styled(XStack, {
  name: 'CardWidgetFooterValueContainer',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: '$quark',
  width: '100%',
});

export const CardWidgetFooterIconContainer = styled(View, {
  name: 'CardWidgetFooterIconContainer',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
});
