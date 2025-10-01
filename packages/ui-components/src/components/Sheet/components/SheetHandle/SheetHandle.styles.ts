import { styled } from 'tamagui';
import { Sheet as TSheet } from 'tamagui';

export const StyledSheetHandle = styled(TSheet.Handle, {
  name: 'StyledSheetHandle',
  marginVertical: '$small',

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
