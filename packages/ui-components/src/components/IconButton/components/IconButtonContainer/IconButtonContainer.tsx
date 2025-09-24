import React, { useMemo } from 'react';
import { IconButtonContainerStyled } from './IconButtonContainer.styles';
import { getTypeVariants, sizeMapping } from '../../IconButton.styles';
import type { IconButtonContainerProps } from './IconButtonContainer.model';

/**
 * Container interno do IconButton que gerencia estilos de interação
 */
export const IconButtonContainer: React.FC<IconButtonContainerProps> = ({
  type,
  size,
  color,
  disabled,
  isPressed,
  isHovered,
  children,
}) => {
  // Calcula estilos de interação baseado no estado atual
  const interactionStyles = useMemo(() => {
    const typeVariants = getTypeVariants(color === 'white');
    const typeVariant = typeVariants[type];

    if (disabled) {
      return typeVariant.disabledStyle || {};
    }
    if (isPressed) {
      return typeVariant.pressStyle || {};
    }
    if (isHovered) {
      return typeVariant.hoverStyle || {};
    }

    return {
      backgroundColor: typeVariant.backgroundColor,
      ...('borderColor' in typeVariant && typeVariant.borderColor
        ? { borderColor: typeVariant.borderColor }
        : {}),
      ...('borderWidth' in typeVariant && typeVariant.borderWidth
        ? { borderWidth: typeVariant.borderWidth }
        : {}),
    };
  }, [type, color, disabled, isPressed, isHovered]);

  return (
    <IconButtonContainerStyled
      width={sizeMapping[size].container}
      height={sizeMapping[size].container}
      borderRadius={sizeMapping[size].container / 2}
      {...interactionStyles}
    >
      {children}
    </IconButtonContainerStyled>
  );
};
