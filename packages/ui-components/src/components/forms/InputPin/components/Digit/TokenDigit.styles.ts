import { styled } from 'tamagui';
import { Pressable, View } from 'react-native';
import { TitleStandardSemibold } from '../../../../data-display/Typography';

export const StyledTokenDigitWrapper = styled(View, {
  name: 'StyledTokenDigitWrapper',
  position: 'relative',
  width: 32,
  height: 44,
  overflow: 'visible',
  alignItems: 'center',
  justifyContent: 'center',
});

export const StyledTokenDigitFocusRing = styled(View, {
  name: 'StyledTokenDigitFocusRing',
  position: 'absolute',
  top: -4,
  right: -4,
  bottom: -4,
  left: -4,
  borderRadius: '$nano',
  borderWidth: '$borderWidth.thin',
  borderColor: '$onNeutral1',
  opacity: 0,
  pointerEvents: 'none',
  transition: 'all 150ms ease-in-out',

  variants: {
    visible: {
      true: {
        opacity: 1,
      },
      false: {
        opacity: 0,
      },
    },
    state: {
      default: {
        borderColor: '$onNeutral1',
      },
      error: {
        borderColor: '$onNeutral1',
      },
      disabled: {
        borderColor: '$neutral4',
      },
    },
  } as const,
});

export const StyledTokenDigitContainer = styled(Pressable, {
  name: 'StyledTokenDigitContainer',
  width: '100%',
  height: '100%',
  borderColor: '$outlined2',
  borderBottomWidth: 0,
  borderBottomColor: 'transparent',
  alignItems: 'center',
  justifyContent: 'flex-end',
  paddingBottom: '$nano',
  backgroundColor: 'transparent',
  transition: 'all 150ms ease-in-out',

  hoverStyle: {
    backgroundColor: '$neutralHover1',
    borderColor: '$neutralHover2',
  },

  pressStyle: {
    backgroundColor: '$neutralPressed1',
    borderColor: '$neutralPressed2',
  },

  focusStyle: {
    outlineWidth: 0,
  },

  variants: {
    state: {
      default: {},
      focused: {
        borderColor: '$onNeutral1',
        hoverStyle: {
          backgroundColor: '$neutralHover1',
          borderColor: '$neutralHover2',
        },
        pressStyle: {
          backgroundColor: '$neutralPressed1',
          borderColor: '$neutralPressed2',
        },
      },
      filled: {
        borderColor: '$onNeutral1',
        borderBottomColor: '$onNeutral1',
        borderBottomWidth: '$borderWidth.thick',
        hoverStyle: {
          backgroundColor: '$neutralHover1',
          borderColor: '$neutralHover2',
          borderBottomColor: '$onNeutral1',
        },
        pressStyle: {
          backgroundColor: '$neutralPressed1',
          borderColor: '$neutralPressed2',
          borderBottomColor: '$onNeutral1',
        },
      },
      error: {
        borderColor: '$danger',
        borderBottomColor: '$danger',
        borderBottomWidth: '$borderWidth.thick',
        hoverStyle: {
          backgroundColor: '$dangerHover1',
          borderColor: '$dangerHover2',
          borderBottomColor: '$dangerHover2',
        },
        pressStyle: {
          backgroundColor: '$dangerPressed1',
          borderColor: '$dangerPressed2',
          borderBottomColor: '$dangerPressed2',
        },
      },
      disabled: {
        borderColor: '$neutral4',
        borderBottomWidth: 0,
        backgroundColor: 'transparent',
        hoverStyle: {
          backgroundColor: 'transparent',
          borderColor: '$neutral4',
          borderBottomColor: '$neutral4',
        },
        pressStyle: {
          backgroundColor: 'transparent',
          borderColor: '$neutral4',
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
