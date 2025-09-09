import React, { useCallback } from 'react';
import { XmarkCircle } from 'iconoir-react-native';
import { IconButton } from '../../../IconButton';
import type { InputInternalContext } from '../../Input.model';
import { COMPONENT_DISPLAY_NAMES } from '../../constants';

/**
 * Props para o componente InputClearButton
 */
export interface InputClearButtonProps {
  /**
   * Callback executado quando o botão de limpar é pressionado
   * Se não fornecido, utilizará o onChangeText do Input pai para limpar o campo
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
 * Subcomponente para botão de limpar do Input
 */
export const InputClearButton: React.FC<InputClearButtonProps> = ({
  onPress,
  disabled = false,
  _inputContext,
}) => {
  const handlePress = useCallback(() => {
    _inputContext?.focusInput?.();

    if (onPress) {
      onPress();
    } else if (_inputContext?.onChangeText) {
      _inputContext.onChangeText('');
    }
  }, [onPress, _inputContext]);

  const handleHoverIn = useCallback(() => {
    _inputContext?.setIsButtonHovering?.(true);
  }, [_inputContext]);

  const handleHoverOut = useCallback(() => {
    _inputContext?.setIsButtonHovering?.(false);
  }, [_inputContext]);

  return (
    <IconButton
      color="highlight"
      size="small"
      type="chromeless"
      icon={<XmarkCircle />}
      disabled={disabled}
      onPress={handlePress}
      accessibilityLabel="Limpar campo"
      touchableProps={{
        onHoverIn: handleHoverIn,
        onHoverOut: handleHoverOut,
      }}
    />
  );
};

InputClearButton.displayName = COMPONENT_DISPLAY_NAMES.CLEAR_BUTTON;
