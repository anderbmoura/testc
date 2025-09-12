import { styled, View } from 'tamagui';

export const StyledListItemContainer = styled(View, {
  name: 'StyledListItemContainer',
  backgroundColor: 'transparent',
  borderRadius: 0,
  borderWidth: 2,
  borderColor: 'transparent',

  variants: {
    disabled: {
      true: {
        backgroundColor: 'transparent',
      },
      false: {},
    },
    hovered: {
      true: {
        backgroundColor: '$neutralHover1',
      },
      false: {},
    },
    pressed: {
      true: {
        backgroundColor: '$neutralPressed1',
      },
      false: {},
    },
    focused: {
      true: {
        borderColor: '$onNeutral1',
        borderWidth: 2,
      },
      false: {
        borderColor: 'transparent',
        borderWidth: 2,
      },
    },
  },
} as const);

export const StyledListItemWrapper = styled(View, {
  name: 'StyledListItemWrapper',
  flexDirection: 'row',
  alignItems: 'center',
  padding: '$tiny',
  gap: '$tiny',
} as const);

export const StyledListItemContent = styled(View, {
  name: 'StyledListItemContent',
  flex: 1,
  gap: '$none',
} as const);

export const StyledListItemRow = styled(View, {
  name: 'StyledListItemRow',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '$nano',
} as const);
