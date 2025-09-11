import { styled, View, withStaticProperties, XStack, GetProps } from 'tamagui';
import { ChipsVariant } from './Chips.model';
import { borderWidth } from '../../config/tokens/borderWidth/borderWidth';
import { LabelSmall } from '../Typography';
import { iconSize } from '../../config/tokens/iconSize/iconSize';
import { useTransformIcon } from '../../utils';

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
  paddingHorizontal: '$space.nano',
  alignItems: 'center',
});

const ChipLabel = styled(LabelSmall, {
  name: 'ChipLabel',
  backgroundColor: 'transparent',
  userSelect: 'none',
  paddingHorizontal: '$space.nano',
  disabledStyle: {
    color: '$onDisabled',
  },
});

const ChipContent = styled(View, {
  name: 'ChipContent',
  borderRadius: '$radius.pill',
  justifyContent: 'center',
  padding: '$space.quark',
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

const iconColorMap = {
  highlight: '$onHighlight',
  neutral: '$onNeutral1',
  disabled: '$onDisabled',
};

type ItemIconProps = {
  icon?: React.ReactNode;
  variant: ChipsVariant;
  size?: number;
};

const ItemIcon: React.FC<ItemIconProps> = ({
  icon,
  variant,
  size = iconSize.tiny,
}) => {
  const transformIcon = useTransformIcon();
  const iconColor = iconColorMap[variant];

  if (!icon) return null;

  return transformIcon(icon, size, iconColor);
};

export const Chip = withStaticProperties(ChipFrame, {
  Text: ChipLabel,
  Content: ChipContent as React.ComponentType<ChipContentProps>,
  Row: ChipRow,
  LeftIcon: ItemIcon,
  RightIcon: ItemIcon,
});
