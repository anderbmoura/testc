import { View, XStack, styled } from 'tamagui';

export const SheetHeaderContainer = styled(XStack, {
  name: 'SheetHeaderContainer',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  marginTop: '$small',
  paddingHorizontal: '$medium',
});

export const SheetHeaderContent = styled(View, {
  name: 'SheetHeaderContent',
  flex: 1,

  variants: {
    alignment: {
      center: {
        alignItems: 'center',
      },
      left: {
        alignItems: 'flex-start',
      },
    },
  } as const,
});

export const SheetHeaderSpacer = styled(View, {
  name: 'SheetHeaderSpacer',
  width: 80,
  height: 40,
});

export const SheetHeaderCloseButton = styled(View, {
  name: 'SheetHeaderCloseButton',
  width: 80,
});

export const SheetHeaderTitleContainer = styled(XStack, {
  name: 'SheetHeaderTitleContainer',
  alignItems: 'center',
  gap: '$tiny',
});
