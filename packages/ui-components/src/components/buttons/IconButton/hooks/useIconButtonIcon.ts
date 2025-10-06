import { useMemo } from 'react';
import { useTransformIcon } from '../../../../utils';
import type {
  IconButtonColor,
  IconButtonType,
  IconButtonSize,
} from '../IconButton.model';
import { sizeMapping } from '../IconButton.styles';
import type { InteractionState } from './useIconButtonInteractionState';

export type IconColorConfig = {
  default: string;
  hover: string;
  pressed: string;
  disabled: string;
};

const colorConfigurations: Record<string, IconColorConfig> = {
  plain: {
    default: '$neutralBg1',
    hover: '$neutralBg1',
    pressed: '$neutralBg1',
    disabled: '$onDisabled',
  },
  chromeless: {
    default: '$color8',
    hover: '$color9',
    pressed: '$color7',
    disabled: '$onDisabled',
  },
  outline: {
    default: '$color8',
    hover: '$color9',
    pressed: '$color7',
    disabled: '$onDisabled',
  },
};

const whiteColorConfigurations: Record<string, IconColorConfig> = {
  plain: {
    default: '$onNeutral1',
    hover: '$onNeutral1',
    pressed: '$onNeutral1',
    disabled: '$onDisabled',
  },
  chromeless: {
    default: '$neutralBg1',
    hover: '$neutralBg1',
    pressed: '$neutralBg1',
    disabled: '$onDisabled',
  },
  outline: {
    default: '$neutralBg1',
    hover: '$neutralBg1',
    pressed: '$neutralBg1',
    disabled: '$onDisabled',
  },
};

const getIconColor = (
  type: IconButtonType,
  state: InteractionState,
  color: IconButtonColor
): string => {
  if (state === 'disabled') return '$onDisabled';

  const configurations =
    color === 'white' ? whiteColorConfigurations : colorConfigurations;
  const typeConfig = configurations[type];

  if (state === 'pressed') return typeConfig.pressed;
  if (state === 'hover') return typeConfig.hover;
  return typeConfig.default;
};

/**
 * Hook para gerenciar configuração e transformação do ícone
 */
export const useIconButtonIcon = (
  icon: React.ReactNode,
  type: IconButtonType,
  size: IconButtonSize,
  color: IconButtonColor,
  interactionState: InteractionState,
  disabled: boolean
) => {
  const transformIcon = useTransformIcon();
  const iconSize = sizeMapping[size].icon;

  return useMemo(() => {
    if (!icon) return null;

    const currentState = disabled ? 'disabled' : interactionState;
    const iconColor = getIconColor(type, currentState, color);

    return transformIcon(icon, iconSize, iconColor);
  }, [icon, transformIcon, type, iconSize, color, interactionState, disabled]);
};
