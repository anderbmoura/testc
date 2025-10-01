import { styled } from 'tamagui';
import { Sheet as TSheet } from 'tamagui';

export const StyledSheetFrame = styled(TSheet.Frame, {
  name: 'StyledSheetFrame',
  flex: 1,
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  borderTopLeftRadius: '$large',
  borderTopRightRadius: '$large',
  overflow: 'hidden',

  variants: {
    variant: {
      default: {
        backgroundColor: '$background',
      },
      onMediaBg: {
        backgroundColor: 'transparent',
      },
    },
  } as const,
});
