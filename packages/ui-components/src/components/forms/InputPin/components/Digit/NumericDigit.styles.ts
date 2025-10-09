import { styled } from 'tamagui';
import { Pressable, View } from 'react-native';
import { BodyLargeSemibold } from '../../../../data-display/Typography';

export const StyledNumericDigitContainer = styled(Pressable, {
  name: 'StyledNumericDigitContainer',
  width: 48,
  height: 48,
  borderRadius: '$small',
  borderWidth: 0,
  borderColor: 'transparent',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'transparent',
  transition: 'all 150ms ease-in-out',

  hoverStyle: {
    backgroundColor: '$neutralHover1',
  },

  pressStyle: {
    backgroundColor: '$neutralPressed1',
  },

  focusStyle: {
    outlineWidth: 0,
  },

  variants: {
    state: {
      default: {},
      focused: {
        borderColor: '$onNeutral1',
        borderWidth: 2,
        hoverStyle: {
          backgroundColor: '$neutralHover1',
        },
        pressStyle: {
          backgroundColor: '$neutralPressed1',
        },
      },
      filled: {
        hoverStyle: {
          backgroundColor: '$neutralHover1',
        },
        pressStyle: {
          backgroundColor: '$neutralPressed1',
        },
      },
      error: {
        hoverStyle: {
          backgroundColor: '$dangerHover1',
        },
        pressStyle: {
          backgroundColor: '$dangerPressed1',
        },
      },
      disabled: {
        hoverStyle: {
          backgroundColor: 'transparent',
        },
        pressStyle: {
          backgroundColor: 'transparent',
        },
      },
    },
    errorFocused: {
      true: {
        borderColor: '$danger',
        borderWidth: 2,
        hoverStyle: {
          backgroundColor: '$dangerHover1',
          borderColor: '$danger',
        },
        pressStyle: {
          backgroundColor: '$dangerPressed1',
          borderColor: '$danger',
        },
      },
      false: {},
    },
  } as const,
});

export const StyledNumericDigitBullet = styled(View, {
  name: 'StyledNumericDigitBullet',
  width: 16,
  height: 16,
  borderRadius: '$pill',
  backgroundColor: '$onNeutral1',

  variants: {
    state: {
      default: {
        backgroundColor: '$onNeutral1',
      },
      focused: {
        backgroundColor: '$onNeutral1',
      },
      filled: {
        backgroundColor: '$onNeutral1',
      },
      error: {
        backgroundColor: '$danger',
      },
      disabled: {
        backgroundColor: '$neutral7',
      },
    },
  } as const,
});

export const StyledNumericDigitPlaceholder = styled(View, {
  name: 'StyledNumericDigitPlaceholder',
  width: 16,
  height: 16,
  borderRadius: '$pill',
  borderWidth: 1,
  borderColor: '$onNeutral2',

  variants: {
    state: {
      default: {
        borderColor: '$onNeutral2',
      },
      focused: {
        borderColor: '$onNeutral1',
      },
      filled: {
        borderColor: '$onNeutral1',
      },
      error: {
        borderColor: '$danger',
      },
      disabled: {
        borderColor: '$neutral7',
      },
    },
  } as const,
});

export const StyledNumericDigitCaret = styled(View, {
  name: 'StyledNumericDigitCaret',
  width: 2,
  height: 24,
  borderRadius: 1,
  backgroundColor: '$onNeutral1',

  variants: {
    state: {
      default: {
        backgroundColor: '$onNeutral1',
      },
      focused: {
        backgroundColor: '$onNeutral1',
      },
      filled: {
        backgroundColor: '$onNeutral1',
      },
      error: {
        backgroundColor: '$danger',
      },
      disabled: {
        backgroundColor: '$neutral7',
      },
    },
  } as const,
});

export const StyledNumericDigitValue = styled(BodyLargeSemibold, {
  name: 'StyledNumericDigitValue',
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
