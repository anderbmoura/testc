import { styled } from 'tamagui';
import { Pressable } from 'react-native';

export const StyledInputPinContainer = styled(Pressable, {
  name: 'StyledInputPinContainer',
  width: '100%',
  paddingVertical: '$nano',
  paddingHorizontal: '$quark',
  borderWidth: 0,
  borderColor: 'transparent',
  backgroundColor: 'transparent',
  gap: '$nano',
  alignItems: 'center',
  justifyContent: 'center',

  variants: {
    underline: {
      true: {
        borderBottomWidth: 1,
        borderBottomColor: '$outlined2',
      },
      false: {
        borderBottomWidth: 0,
      },
    },
    state: {
      default: {},
      focused: {
        borderBottomColor: '$onNeutral1',
        borderBottomWidth: 2,
      },
      error: {
        borderBottomColor: '$danger',
        borderBottomWidth: 2,
      },
      disabled: {
        opacity: 0.5,
      },
    },
  } as const,
});
