import {
  Button,
  createStyledContext,
  GetProps,
  Input,
  styled,
  Text,
  View,
  XStack,
  YStack,
} from 'tamagui';

export const InputStepperContext = createStyledContext<{
  size: 'small' | 'large';
}>({
  size: 'large',
});

export const InputStepperFrame = styled(YStack, {
  name: 'InputStepperFrame',
  context: InputStepperContext,
  variants: {
    size: {
      small: {
        justifyContent: 'flex-start',
        width: 'min-content',
      },
      large: {
        justifyContent: 'space-between',
        width: '100%',
      },
    },
  } as const,
  defaultVariants: {
    size: 'large',
  },
});

export const StepperControl = styled(XStack, {
  gap: '$micro',
  justifyContent: 'center',
  alignItems: 'center',
  variants: {
    size: {
      small: {
        width: 'min-content',
      },
      large: {
        width: '100%',
      },
    },
  } as const,
  defaultVariants: {
    size: 'large',
  },
});

export const StepperButton = styled(Button, {
  name: 'StepperButton',
  context: InputStepperContext,
  padding: 0,
  borderRadius: 100,
  borderColor: '$color8',
  backgroundColor: '$colorTransparent',
  pressStyle: {
    backgroundColor: '$neutral2',
  },
  variants: {
    size: {
      small: {
        width: 32,
        height: 32,
      },
      large: {
        width: 44,
        height: 44,
      },
    },
    disabled: {
      true: {
        borderColor: '$onDisabled',
      },
    },
  } as const,
  defaultVariants: {
    size: 'large',
  },
});

export type StepperButtonProps = GetProps<typeof StepperButton>;

export const InputContainer = styled(XStack, {
  alignItems: 'center',
  justifyContent: 'space-between',

  variants: {
    size: {
      small: {
        width: 'min-content',
      },
      large: {},
    },
  } as const,
  defaultVariants: {
    size: 'large',
  },
});

export const StepperText = styled(Input, {
  fontWeight: '600',
  color: '$neutral12',
  textAlign: 'center',
  backgroundColor: 'transparent',
  borderColor: 'transparent',
  borderWidth: 0,
  padding: 0,
  borderRadius: '$radius.nano',
  focusStyle: {
    outlineWidth: 2,
    outlineColor: '$color9',
  },
  hoverStyle: {
    backgroundColor: '$neutralHover1',
    color: '$onNeutral1',
  },
  pressStyle: {
    backgroundColor: '$neutralPressed1',
  },
  variants: {
    size: {
      small: {
        flexShrink: 1,
        flexGrow: 0,
        minWidth: 32,
        maxWidth: 60,
        lineHeight: 24,
        height: 32,
        fontSize: '$micro',
        fontWeight: '500',
      },
      large: {
        fontSize: 28,
        lineHeight: 36,
        flex: 1,
      },
    },
  } as const,
  defaultVariants: {
    size: 'large',
  },
});

export const FeedbackText = styled(Text, {
  fontSize: 14,
  letterSpacing: 0.25,
  lineHeight: 20,
  fontWeight: '400',
  color: '$color9',
  textAlign: 'center',
});

export const IconContainer = styled(View, {
  width: 16,
  height: 16,
  overflow: 'hidden',
});
