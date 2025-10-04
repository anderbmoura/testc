import { styled, View, XStack, YStack } from 'tamagui';

export const CardWidgetFooterLoteriasContainer = styled(YStack, {
  name: 'CardWidgetFooterLoteriasContainer',
  gap: '$nano',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  paddingTop: '$none',
  paddingBottom: '$nano',
  paddingHorizontal: '$nano',
  width: '100%',
});

export const CardWidgetFooterLoteriasRow = styled(XStack, {
  name: 'CardWidgetFooterLoteriasRow',
  gap: '$nano',
  alignItems: 'center',
  justifyContent: 'flex-start',
});

export const CardWidgetFooterLoteriasCircle = styled(View, {
  name: 'CardWidgetFooterLoteriasCircle',
  backgroundColor: '$neutralBg2',
  borderRadius: '$pill',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  width: 36,
  height: 36,
});
