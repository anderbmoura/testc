import React from 'react';
import Spinner from '../../../Spinner';
import { useIconButtonIcon } from '../../hooks/useIconButtonIcon';
import type { IconButtonIconProps } from './IconButtonIcon.model';

/**
 * Componente responsável por renderizar o ícone do IconButton
 */
export const IconButtonIcon: React.FC<IconButtonIconProps> = ({
  icon,
  type,
  size,
  color,
  interactionState,
  disabled,
  loading,
}) => {
  const transformedIcon = useIconButtonIcon(
    icon,
    type,
    size,
    color,
    interactionState,
    disabled
  );

  if (loading) {
    return <Spinner variant="neutral" size="small" />;
  }

  return transformedIcon;
};
