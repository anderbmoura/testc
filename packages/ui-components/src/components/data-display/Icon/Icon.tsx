import React, { memo, useMemo } from 'react';
import { useTransformIcon } from '../../../utils';
import { iconSize } from '../../../config/tokens/iconSize/iconSize';
import { IconContainer } from './Icon.styles';
import type { IconProps } from './Icon.model';

/**
 * Componente DSC Icon
 *
 * Componente para renderizar ícones.
 *
 * @example
 * ```tsx
 * // Usando ícone Iconoir
 * <Icon size="medium" color="$color1">
 *   <Heart />
 * </Icon>
 *
 * // Usando ícone da biblioteca
 * <Icon size="large" color="$primary">
 *   <Loterias />
 * </Icon>
 * ```
 */
export const Icon: React.FC<IconProps> = memo(
  ({ size = 'medium', color = '$color9', children, ...props }) => {
    const transformIcon = useTransformIcon();
    const iconSizeValue = useMemo(() => iconSize[size], [size]);
    const renderIcon = useMemo(() => {
      if (children) {
        return transformIcon(children, iconSizeValue, color);
      }

      if (__DEV__) {
        console.warn('Icon component requires children');
      }
      return null;
    }, [children, transformIcon, iconSizeValue, color]);

    if (!renderIcon) {
      return null;
    }

    return <IconContainer {...props}>{renderIcon}</IconContainer>;
  }
);

Icon.displayName = 'Icon';
