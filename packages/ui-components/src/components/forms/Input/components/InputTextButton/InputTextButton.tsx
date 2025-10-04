import React, { useCallback } from 'react';
import Button from '../../../../buttons/Button';
import type { InputInternalContext } from '../../Input.model';

/**
 * Props para o componente InputTextButton
 */
export interface InputTextButtonProps {
  /**
   * Texto do botão
   * @default 'Button'
   */
  text?: string;

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
 * Subcomponente para botão com texto do Input
 */
export const InputTextButton: React.FC<InputTextButtonProps> = ({
  text = 'Button',
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
    <Button
      theme="highlight"
      size="small"
      type="chromeless"
      disabled={disabled}
      onPress={handlePress}
      onHoverIn={handleHoverIn}
      onHoverOut={handleHoverOut}
    >
      {text}
    </Button>
  );
};
