import { styled, View, XStack } from 'tamagui';

export const VerticalActionsItemStack = styled(XStack, {
  name: 'VerticalActionsItemStack',
  padding: '$tiny',
  width: '100%',
  justifyContent: 'flex-start',
  alignItems: 'center',
  backgroundColor: 'transparent',
  variants: {
    disabled: {
      true: {
        opacity: 0.5,
        userSelect: 'none',
        pressStyle: undefined,
        hoverStyle: undefined,
        focusStyle: undefined,
      },
      false: {
        opacity: 1,
        hoverStyle: {
          backgroundColor: '$neutralHover1',
        },
        pressStyle: {
          backgroundColor: '$neutralPressed1',
        },
        focusStyle: {
          outlineColor: '$neutral12',
          outlineWidth: 2,
          outlineStyle: 'solid',
        },
      },
    },
  } as const,
  role: 'button',
  tabIndex: 0,
});

export const IconSlot = styled(View, {
  name: 'IconSlot',
  justifyContent: 'center',
  alignItems: 'center',
  minWidth: '$space.smaller',
  minHeight: '$space.small',
});
