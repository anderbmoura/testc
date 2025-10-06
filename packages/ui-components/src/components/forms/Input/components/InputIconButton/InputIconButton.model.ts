import React from 'react';
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
