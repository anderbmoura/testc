import { styled } from 'tamagui';
import { Pressable } from 'react-native';
import { TitleStandardSemibold } from '../../../../data-display/Typography';

export const StyledTokenDigitContainer = styled(Pressable, {
  name: 'StyledTokenDigitContainer',
  width: 32,
  height: 44,
  borderBottomWidth: '$borderWidth.thick',
  borderBottomColor: '$outlined2',
  alignItems: 'center',
  justifyContent: 'flex-end',
  paddingBottom: '$nano',
  backgroundColor: 'transparent',
  transition: 'all 150ms ease-in-out',

  hoverStyle: {
    backgroundColor: '$neutralHover1',
    borderBottomColor: '$neutralHover2',
  },

  pressStyle: {
    backgroundColor: '$neutralPressed1',
    borderBottomColor: '$neutralPressed2',
  },

  focusStyle: {
    outlineWidth: 0,
  },

  variants: {
    state: {
      default: {},
      focused: {
        borderBottomColor: '$onNeutral1',
        borderWidth: '$borderWidth.thin',
        borderRadius: '$nano',
        hoverStyle: {
          backgroundColor: '$neutralHover1',
          borderBottomColor: '$onNeutral1',
        },
        pressStyle: {
          backgroundColor: '$neutralPressed1',
          borderBottomColor: '$onNeutral1',
        },
      },
      filled: {
        borderBottomColor: '$onNeutral1',
        hoverStyle: {
          backgroundColor: '$neutralHover1',
          borderBottomColor: '$onNeutral1',
        },
        pressStyle: {
          backgroundColor: '$neutralPressed1',
          borderBottomColor: '$onNeutral1',
        },
      },
      error: {
        borderBottomColor: '$danger',
        borderBottomWidth: '$borderWidth.thick',
        hoverStyle: {
          backgroundColor: '$dangerHover1',
          borderBottomColor: '$dangerHover2',
        },
        pressStyle: {
          backgroundColor: '$dangerPressed1',
          borderBottomColor: '$dangerPressed2',
        },
      },
      disabled: {
        borderBottomColor: '$neutral7',
        backgroundColor: 'transparent',
        hoverStyle: {
          backgroundColor: 'transparent',
          borderBottomColor: '$neutral4',
        },
        pressStyle: {
          backgroundColor: 'transparent',
          borderBottomColor: '$neutral4',
        },
      },
    },
  } as const,
});

export const StyledTokenDigitText = styled(TitleStandardSemibold, {
  name: 'StyledTokenDigitText',
  textAlign: 'center',
  color: '$onNeutral1',

  variants: {
    state: {
      default: {
        color: '$onNeutral1',
      },
      focused: {
        color: '$onNeutral1',
      },
      filled: {
        color: '$onNeutral1',
      },
      error: {
        color: '$danger',
      },
      disabled: {
        color: '$neutral7',
      },
    },
  } as const,
});

export const StyledTokenDigitPlaceholder = styled(TitleStandardSemibold, {
  name: 'StyledTokenDigitPlaceholder',
  textAlign: 'center',
  color: '$outlined2',

  variants: {
    state: {
      default: {
        color: '$outlined2',
      },
      focused: {
        color: '$onNeutral1',
      },
      filled: {
        color: '$onNeutral1',
      },
      error: {
        color: '$danger',
      },
      disabled: {
        color: '$neutral7',
      },
    },
  } as const,
});
