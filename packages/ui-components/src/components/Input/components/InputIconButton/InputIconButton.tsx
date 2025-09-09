import React, { useCallback } from 'react';
import { IconButton } from '../../../IconButton';
import type { InputInternalContext } from '../../Input.model';

/**
 * Props para o componente InputIconButton
 */
export interface InputIconButtonProps {
  /**
   * Ícone do botão
   */
  icon: React.ReactNode;

  /**
   * Callback executado quando o botão é pressionado
   */
  onPress?: () => void;

  /**
   * Estado desabilitado (passado pelo contexto)
   */
  disabled?: boolean;

  /**
   * Contexto interno do Input (passado automaticamente)
   */
  _inputContext?: InputInternalContext;
}

/**
 * Subcomponente para botão com ícone do Input
 */
export const InputIconButton: React.FC<InputIconButtonProps> = ({
  icon,
  onPress,
  disabled = false,
  _inputContext,
}) => {
  const handleHoverIn = useCallback(() => {
    _inputContext?.setIsButtonHovering?.(true);
  }, [_inputContext]);

  const handleHoverOut = useCallback(() => {
    _inputContext?.setIsButtonHovering?.(false);
  }, [_inputContext]);

  const handlePress = useCallback(() => {
    _inputContext?.focusInput?.();
    onPress?.();
  }, [_inputContext, onPress]);

  return (
    <IconButton
      color="highlight"
      size="small"
      type="chromeless"
      icon={icon}
      disabled={disabled}
      onPress={handlePress}
      touchableProps={{
        onHoverIn: handleHoverIn,
        onHoverOut: handleHoverOut,
      }}
    />
  );
};
