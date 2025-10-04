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
