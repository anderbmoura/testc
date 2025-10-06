import { styled, View, YStack } from 'tamagui';
import { borderWidth } from '../../../../../config/tokens/borderWidth/borderWidth';

/**
 * Container principal do ToolbarItem com estado de foco.
 */
export const ToolbarItemWrapper = styled(View, {
  name: 'ToolbarItemWrapper',
  borderRadius: '$nano',
  borderWidth: borderWidth.thick,
  borderColor: 'transparent',
  pointerEvents: 'none',

  variants: {
    focused: {
      true: {
        borderColor: '$neutral12',
        zIndex: '$500',
      },
      false: {
        borderColor: 'transparent',
        zIndex: '$0',
      },
    },
  } as const,
});

/**
 * Container touchable do ToolbarItem.
 */
export const ToolbarItemTouchableContainer = styled(YStack, {
  name: 'ToolbarItemTouchableContainer',
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
});

/**
 * Container interno base do ToolbarItem.
 */
export const ToolbarItemContainerBase = styled(YStack, {
  name: 'ToolbarItemContainer',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$quark',
  paddingVertical: '$nano',
  paddingHorizontal: '$nano',
  minWidth: 80,
  backgroundColor: 'transparent',
});

/**
 * Container do ícone do ToolbarItem com fundo circular.
 */
export const ToolbarItemIconContainerBase = styled(View, {
  name: 'ToolbarItemIconContainer',
  alignItems: 'center',
  justifyContent: 'center',
  width: 56,
  height: 32,
  borderRadius: '$pill',
  backgroundColor: 'transparent',
});
