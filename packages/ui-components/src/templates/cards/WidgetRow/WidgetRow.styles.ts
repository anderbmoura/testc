import { styled, XStack, View } from 'tamagui';

export const WidgetRowContainer = styled(XStack, {
  name: 'WidgetRowContainer',
  width: '100%',
  alignItems: 'stretch',
  justifyContent: 'space-between',
});

export const WidgetItemWrapper = styled(View, {
  name: 'WidgetItemWrapper',
  width: '50%',
  flexShrink: 0,
  flexGrow: 0,
});
