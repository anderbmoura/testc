import React, { memo, useCallback, useMemo } from 'react';
import { Pressable } from 'react-native';
import { LabelTiny } from '../../../../data-display/Typography';
import { iconSize } from '../../../../../config/tokens/iconSize/iconSize';
import { useTransformIcon } from '../../../../../utils';
import {
  ToolbarItemWrapper,
  ToolbarItemTouchableContainer,
  ToolbarItemContainerBase,
  ToolbarItemIconContainerBase,
} from './ToolbarItem.styles';
import { useToolbarItemInteractionState } from './hooks/useToolbarItemInteractionState';
import type { ToolbarItemProps } from './ToolbarItem.model';

/**
 * Componente DSC ToolbarItem
 *
 * Item individual de uma toolbar com ícone e label.
 *
 * @example
 * ```tsx
 * import { ToolbarItem } from '@superapp-caixa/dsc-library';
 * import { Home, Settings, Profile } from 'iconoir-react-native';
 *
 * // ToolbarItem básico
 * <ToolbarItem
 *   icon={<Home />}
 *   label="Home"
 *   onPress={() => navigateToHome()}
 * />
 *
 * // ToolbarItem desabilitado
 * <ToolbarItem
 *   icon={<Settings />}
 *   label="Settings"
 *   disabled
 * />
 * ```
 */
export const ToolbarItem: React.FC<ToolbarItemProps> = memo(
  ({ icon, label, onPress, disabled = false }) => {
    const {
      isFocused,
      isPressed,
      isHovered,
      handleFocus,
      handleBlur,
      handlePressIn,
      handlePressOut,
      handleHoverIn,
      handleHoverOut,
    } = useToolbarItemInteractionState();

    const iconContainerStyles = useMemo(() => {
      if (disabled) {
        return {
          backgroundColor: 'transparent' as const,
        };
      }

      if (isPressed) {
        return {
          backgroundColor: '$neutralPressed1' as const,
          opacity: 1,
        };
      }

      if (isHovered) {
        return {
          backgroundColor: '$neutralHover1' as const,
          opacity: 1,
        };
      }

      return {
        backgroundColor: 'transparent' as const,
        opacity: 1,
      };
    }, [disabled, isPressed, isHovered]);

    const transformIcon = useTransformIcon();

    const handlePress = useCallback(() => {
      if (disabled) return;
      onPress?.();
    }, [disabled, onPress]);

    const renderIcon = useMemo(() => {
      if (!icon) return null;

      const iconColor = disabled ? '$disabled1' : '$onNeutral1';
      return transformIcon(icon, iconSize.small, iconColor);
    }, [icon, disabled, transformIcon]);

    return (
      <ToolbarItemTouchableContainer>
        <Pressable
          disabled={disabled}
          onPress={handlePress}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          onHoverIn={handleHoverIn}
          onHoverOut={handleHoverOut}
        >
          <ToolbarItemWrapper focused={isFocused && !disabled}>
            <ToolbarItemContainerBase>
              <ToolbarItemIconContainerBase {...iconContainerStyles}>
                {renderIcon}
              </ToolbarItemIconContainerBase>
              <LabelTiny
                color={disabled ? '$disabled1' : '$onNeutral2'}
                numberOfLines={1}
                textAlign="center"
              >
                {label}
              </LabelTiny>
            </ToolbarItemContainerBase>
          </ToolbarItemWrapper>
        </Pressable>
      </ToolbarItemTouchableContainer>
    );
  }
);

ToolbarItem.displayName = 'ToolbarItem';
