import { styled } from 'tamagui';
import { View } from 'react-native';

export const StyledAlphanumericFieldContainer = styled(View, {
  name: 'StyledAlphanumericFieldContainer',
  width: '100%',
  paddingVertical: '$nano',
  backgroundColor: 'transparent',
  borderBottomWidth: 1,
  borderBottomColor: '$outlined2',
  transition: 'all 150ms ease-in-out',

  hoverStyle: {
    backgroundColor: '$neutralHover1',
    borderBottomColor: '$neutralHover2',
  },

  focusStyle: {
    outlineWidth: 0,
  },

  variants: {
    visualState: {
      default: {},
      filled: {
        borderBottomColor: '$onNeutral1',
        hoverStyle: {
          backgroundColor: '$neutralHover1',
          borderBottomColor: '$onNeutral1',
        },
      },
      errorDefault: {
        borderBottomColor: '$danger',
        hoverStyle: {
          backgroundColor: '$dangerHover1',
          borderBottomColor: '$dangerHover2',
        },
      },
      errorFilled: {
        borderBottomColor: '$danger',
        hoverStyle: {
          backgroundColor: '$dangerHover1',
          borderBottomColor: '$dangerHover2',
        },
      },
      disabled: {
        backgroundColor: 'transparent',
        borderBottomColor: '$neutral7',
        hoverStyle: {
          backgroundColor: 'transparent',
          borderBottomColor: '$neutral7',
        },
        opacity: 0.6,
      },
    },
  } as const,
});
