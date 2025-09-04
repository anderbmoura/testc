import { View } from 'react-native';
import { styled, YStack, XStack } from 'tamagui';
import { borderWidth } from '../../../config/tokens/borderWidth/borderWidth';
import { borderRadius } from '../../../config/tokens/borderRadius/borderRadius';

export const CardWidgetWrapper = styled(View, {
  name: 'CardWidgetWrapper',
  padding: borderWidth.thick,
  borderRadius: borderRadius.large + 12,
  borderWidth: borderWidth.thick,
  borderColor: 'transparent',

  variants: {
    focused: {
      true: {
        borderColor: '$neutral12',
        zIndex: '$100',
        position: 'relative',
      },
      false: {
        borderColor: 'transparent',
        zIndex: 0,
      },
    },
  },
});

export const CardWidgetContent = styled(YStack, {
  name: 'CardWidgetContent',
  height: 168,
  width: '100%',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  borderRadius: '$large',
  padding: '$none',
  backgroundColor: '$neutralBg1',

  hoverStyle: {
    backgroundColor: '$neutralHover1',
  },

  pressStyle: {
    backgroundColor: '$neutralPressed1',
  },
});

export const CardWidgetHeaderContainer = styled(YStack, {
  name: 'CardWidgetHeaderContainer',
  width: '100%',
  paddingTop: '$nano',
  paddingRight: '$nano',
  paddingLeft: '$tiny',
  gap: '$none',
});

export const CardWidgetHeaderTopRow = styled(XStack, {
  name: 'CardWidgetHeaderTopRow',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const CardWidgetIconContainer = styled(View, {
  name: 'CardWidgetIconContainer',
  alignItems: 'center',
  justifyContent: 'center',
});

export const CardWidgetFooterContainer = styled(View, {
  name: 'CardWidgetFooterContainer',
  width: '100%',
});
