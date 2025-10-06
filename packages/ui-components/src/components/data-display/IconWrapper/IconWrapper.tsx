import React from 'react';
import { useTheme } from 'tamagui';
import { iconSize } from '../../../config/tokens/iconSize/iconSize';
import { IconWrapperProps } from './IconWrapper.model';

/**
 * Componente DSC IconWrapper
 *
 * Renderiza um ícone com tamanho e cor definidos, respeitando o tema Tamagui.
 *
 * @param icon - Componente ou elemento React que representa o ícone
 * ```tsx
 * <IconWrapper icon={Home} size="medium" />
 * <IconWrapper icon={<Settings />} size="small" />
 * ```
 *
 * @param size - Tamanho do ícone baseado no token `iconSize`
 * ```tsx
 * <IconWrapper icon={Home} size="small" />
 * <IconWrapper icon={Home} size="large" />
 * ```
 *
 * @param color - Cor do ícone. Pode ser uma cor opaca do React Native ou uma referência ao tema Tamagui (ex: '$color8')
 * ```tsx
 * <IconWrapper icon={Home} size="medium" color="$color9" />
 * <IconWrapper icon={Home} size="medium" color="#FF0000" />
 * ```
 */
export const IconWrapper = ({ icon, size, color }: IconWrapperProps) => {
  const theme = useTheme();

  if (!icon) return null;

  const resolvedSize = iconSize[size];

  const resolvedColor =
    typeof color === 'string'
      ? color.startsWith('$')
        ? theme[color.replace('$', '')]?.get()
        : color
      : '#000';

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const iconProps: any = {
    color: resolvedColor,
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if ((icon as any)?.$$typeof === Symbol.for('react.forward_ref')) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return React.createElement(icon as any, {
      width: resolvedSize,
      height: resolvedSize,
      ...iconProps,
    });
  }

  if (typeof icon === 'function') {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const isTamaguiIcon = (icon as any).displayName?.includes('themed');

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return React.createElement(icon as any, {
      ...(isTamaguiIcon
        ? { size: resolvedSize }
        : { width: resolvedSize, height: resolvedSize }),
      ...iconProps,
    });
  }

  if (React.isValidElement(icon)) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const isTamaguiIcon = ((icon.type as any)?.displayName || '').includes(
      'themed'
    );

    return React.cloneElement(icon, {
      ...(isTamaguiIcon
        ? { size: resolvedSize }
        : { width: resolvedSize, height: resolvedSize }),
      ...iconProps,
    });
  }

  return icon;
};
