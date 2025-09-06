import { XStack, YStack } from 'tamagui';
import { styled } from 'tamagui';
import { Platform } from 'react-native';
import { borderWidth } from '../../../../config/tokens/borderWidth/borderWidth';

/**
 * Container interno do InputMoney
 */
export const StyledInputMoneyContainer = styled(YStack, {
  name: 'InputMoneyContainer',
  gap: '$nano',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  width: '100%',
  flex: 1,
  cursor: 'pointer',
});

/**
 * Container para o valor monetário
 */
export const StyledValueContainer = styled(XStack, {
  name: 'ValueContainer',
  gap: '$nano',
  minHeight: 56,
  paddingVertical: '$tiny',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  flex: 1,
  borderRadius: 0,
  padding: borderWidth.thick,
  borderWidth: borderWidth.thick,
  borderColor: 'transparent',

  variants: {
    hasHoverBackground: {
      true: {
        backgroundColor: '$neutralHover1',
        borderRadius: '$nano',
      },
      false: {
        backgroundColor: 'transparent',
      },
    },
    focused: {
      true:
        Platform.OS === 'web'
          ? {
              borderColor: '$neutral12',
              borderRadius: '$nano',
            }
          : {
              borderColor: 'transparent',
            },
      false: {
        borderColor: 'transparent',
      },
    },
    keyboardFocused: {
      true: {
        borderColor: '$neutral12',
        borderRadius: '$nano',
      },
      false: {},
    },
  },
});

/**
 * Container para o feedback
 */
export const StyledFeedbackContainer = styled(XStack, {
  name: 'FeedbackContainer',
  gap: '$small',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  flex: 1,
  pointerEvents: 'none',
});
