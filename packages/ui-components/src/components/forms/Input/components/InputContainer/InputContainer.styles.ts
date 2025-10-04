import { styled } from 'tamagui';
import { Pressable } from 'react-native';
import { CONTAINER_HEIGHT, BORDER } from '../../constants';

export const StyledInputContainer = styled(Pressable, {
  name: 'StyledInputContainer',
  borderBottomWidth: BORDER.DEFAULT_WIDTH,
  borderBottomColor: '$outlined2',
  paddingVertical: '$quark',
  minHeight: CONTAINER_HEIGHT.MIN_HEIGHT,
  flexDirection: 'row',
  alignItems: 'center',
  gap: '$nano',
  flex: 1,
  width: '100%',

  variants: {
    state: {
      default: {
        borderBottomColor: '$outlined2',
        backgroundColor: 'transparent',
      },
      hover: {
        borderBottomColor: '$neutralHover2',
        backgroundColor: '$neutralHover1',
      },
      focused: {
        borderBottomColor: '$onNeutral1',
        borderBottomWidth: BORDER.FOCUSED_WIDTH,
        paddingTop: 4,
        paddingBottom: 3,
        backgroundColor: 'transparent',
      },
      filled: {
        borderBottomColor: '$onNeutral1',
        backgroundColor: 'transparent',
      },
      disabled: {
        borderBottomColor: '$disabled1',
        backgroundColor: 'transparent',
      },
      error: {
        borderBottomColor: '$danger',
        backgroundColor: 'transparent',
      },
      'error-hover': {
        borderBottomColor: '$onDangerBg',
        backgroundColor: '$dangerBg',
      },
      'error-focused': {
        borderBottomColor: '$onDangerBg',
        borderBottomWidth: BORDER.FOCUSED_WIDTH,
        paddingTop: 4,
        paddingBottom: 3,
        backgroundColor: 'transparent',
      },
    },
  } as const,
});
