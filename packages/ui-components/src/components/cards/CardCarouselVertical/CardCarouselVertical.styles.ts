import { View, YStack, styled } from 'tamagui';

export const CardContainer = styled(YStack, {
  name: 'CardContainer',
  backgroundColor: '$neutralBg2',
  borderRadius: '$big',
  width: 192,
  position: 'relative',
  overflow: 'hidden',

  // Estados de interação
  hoverStyle: {
    backgroundColor: '$neutralHover1',
  },
  pressStyle: {
    backgroundColor: '$neutralPressed1',
  },
  focusStyle: {
    outlineWidth: 2,
    outlineStyle: 'solid',
    outlineColor: '$neutral10',
    outlineOffset: 2,
  },

  variants: {
    hasAction: {
      true: {
        cursor: 'pointer',
      },
      false: {
        cursor: 'default',
      },
    },
  } as const,
});

export const ImageSection = styled(View, {
  name: 'ImageSection',
  position: 'relative',
  width: '100%',
  height: 150,
  flexShrink: 0,
});

export const ContentStack = styled(YStack, {
  name: 'ContentStack',
  padding: '$tiny',
  gap: '$nano',
  flexShrink: 0,
});
