import { styled, Text, XStack, XGroup } from 'tamagui';
import { typography } from '../../../config/fonts/typography';

export const TabsContainer = styled(XGroup, {
  name: 'TabsContainer',
  width: '100%',
  borderRadius: '$pill',
  borderWidth: 1,
  borderColor: '$outlined1',
  gap: '$none',
});

export const TabItemContainer = styled(XStack, {
  name: 'TabItemContainer',
  backgroundColor: '$neutralBg1',
  flex: 1,
  gap: '$micro',
  alignItems: 'center',
  justifyContent: 'center',
  paddingHorizontal: '$tiny',

  variants: {
    size: {
      small: {
        height: 32,
      },
      standard: {
        height: 44,
      },
      large: {
        height: 48,
      },
    },
    currentInteractionState: {
      default: {},
      hovered: {
        backgroundColor: '$neutralHover1',
      },
      pressed: {
        backgroundColor: '$neutralPressed1',
      },
      focused: {
        backgroundColor: '$neutralBg2',
        borderColor: '$onNeutral1',
        borderWidth: '$borderWidth.thin',
      },
    },
    selected: {
      true: {
        backgroundColor: '$neutralBg2',
      },
    },
    applyLeftBorderRadius: {
      true: {
        borderTopLeftRadius: '$pill',
        borderBottomLeftRadius: '$pill',
      },
    },
    applyRightBorderRadius: {
      true: {
        borderTopRightRadius: '$pill',
        borderBottomRightRadius: '$pill',
      },
    },
  },
} as const);

export const TabItemLabel = styled(Text, {
  name: 'TabItemLabel',
  color: '$onNeutral1',

  variants: {
    size: {
      small: {
        ...typography.bodySmall,
      },
      standard: {
        ...typography.bodyStandard,
      },
      large: {
        ...typography.bodyStandard,
      },
    },
    currentInteractionState: {
      default: {},
      hovered: {},
      pressed: {},
      focused: {},
    },
    selected: {
      true: {
        fontWeight: 'bold',
      },
    },
  } as const,
});
