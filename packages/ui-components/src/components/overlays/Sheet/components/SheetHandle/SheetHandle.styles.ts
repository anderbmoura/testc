import { styled } from 'tamagui';
import { Sheet as TSheet } from 'tamagui';

export const StyledSheetHandle = styled(TSheet.Handle, {
  name: 'StyledSheetHandle',
  marginVertical: '$nano',
  borderRadius: '$pill',
  width: 120,
  height: 6,
  alignSelf: 'center',
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
