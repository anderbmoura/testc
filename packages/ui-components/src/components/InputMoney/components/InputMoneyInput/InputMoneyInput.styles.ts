import { Platform, TextInput } from 'react-native';
import { styled } from 'tamagui';

/**
 * TextInput invisível para capturar foco e entrada do usuário
 */
export const HiddenInput = styled(TextInput, {
  name: 'HiddenInput',
  position: 'absolute',
  width: '100%',
  height: '100%',
  flex: 1,
  backgroundColor: 'transparent',
  borderWidth: 0,

  variants: {
    web: {
      true: {
        opacity: 0,
        pointerEvents: 'auto',
        cursor: 'text',
      },
      false: {
        opacity: 0,
        pointerEvents: 'auto',
      },
    },
  } as const,
  defaultVariants: {
    web: Platform.OS === 'web',
  },
});
