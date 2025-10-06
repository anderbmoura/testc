import { styled, View, withStaticProperties, XStack, GetProps } from 'tamagui';
import { borderWidth } from '../../../config/tokens/borderWidth/borderWidth';
import { LabelSmall } from '../Typography';

export const ChipFrame = styled(View, {
  name: 'ChipFrame',
  display: 'flex',
  flexDirection: 'row',
  borderRadius: '$radius.pill',
  padding: 2,
  borderWidth: borderWidth.thick,
  borderColor: 'transparent',

  variants: {
    focused: {
      true: {
        borderColor: '$neutral12',
      },
      false: {
        borderColor: 'transparent',
      },
    },
  },
});

const ChipRow = styled(XStack, {
  name: 'ChipRow',
  alignItems: 'center',
});

const ChipLabel = styled(LabelSmall, {
  name: 'ChipLabel',
  backgroundColor: 'transparent',
  userSelect: 'none',
  disabledStyle: {
    color: '$onDisabled',
  },
});

const ChipLeftSlotWrapper = styled(View, {
  name: 'ChipLeftSlotWrapper',
  paddingLeft: '$tiny',
  alignItems: 'center',
  justifyContent: 'center',
});

const ChipLabelWrapper = styled(View, {
  name: 'ChipLabelWrapper',
  paddingHorizontal: '$nano',
  alignItems: 'center',
  justifyContent: 'center',
});

const ChipRightSlotWrapper = styled(View, {
  name: 'ChipRightSlotWrapper',
  paddingRight: '$tiny',
  alignItems: 'center',
  justifyContent: 'center',
  height: 16,
  width: 20,
});

const ChipContent = styled(View, {
  name: 'ChipContent',
  borderRadius: '$radius.pill',
  justifyContent: 'center',
  paddingVertical: '$quark',
  minHeight: 32,
  disabledStyle: {
    backgroundColor: '$disabled1',
  },
  variants: {
    selected: {
      true: {
        backgroundColor: '$highlight',
        hoverStyle: {
          backgroundColor: '$highlightHover2',
        },
        pressStyle: {
          backgroundColor: '$highlightPressed2',
        },
      },
      false: {
        backgroundColor: '$neutralBg2',
        hoverStyle: {
          backgroundColor: '$neutralHover1',
        },
        pressStyle: {
          backgroundColor: '$neutralPressed1',
        },
      },
    },
  },
});

type ChipContentProps = GetProps<typeof ChipContent>;

export const Chip = withStaticProperties(ChipFrame, {
  Text: ChipLabel,
  Content: ChipContent as React.ComponentType<ChipContentProps>,
  Row: ChipRow,
  LeftSlotWrapper: ChipLeftSlotWrapper,
  LabelWrapper: ChipLabelWrapper,
  RightSlotWrapper: ChipRightSlotWrapper,
});
