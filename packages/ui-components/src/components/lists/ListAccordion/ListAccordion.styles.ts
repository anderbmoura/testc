import { styled, View, YStack } from 'tamagui';

export const StyledListAccordionContainer = styled(YStack, {
  name: 'StyledListAccordionContainer',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingHorizontal: '$tiny',
  paddingVertical: '$micro',
  gap: '$micro',
  borderWidth: 2,
  borderColor: 'transparent',

  hoverStyle: {
    backgroundColor: '$neutralHover1',
    borderColor: 'transparent',
  },

  pressStyle: {
    backgroundColor: '$neutralPressed1',
    borderColor: 'transparent',
  },

  focusStyle: {
    borderColor: '$color12',
    zIndex: 500,
  },

  variants: {
    disabled: {
      true: {
        backgroundColor: '$disabled2',
        color: '$onDisabled',
      },
    },
  } as const,
});

export const StyledTextContainer = styled(View, {
  name: 'StyledTextContainer',
  flex: 1,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '$nano',
});

export const StyledLeftTextContainer = styled(View, {
  name: 'StyledLeftTextContainer',
  justifyContent: 'center',
});

export const StyledRightTextContainer = styled(View, {
  name: 'StyledRightTextContainer',
  justifyContent: 'center',
  alignItems: 'flex-end',
});

export const StyledIconContainer = styled(View, {
  name: 'StyledIconContainer',
  alignItems: 'center',
  justifyContent: 'center',
});
