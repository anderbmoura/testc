import type { InputInternalContext } from '../../Input.model';

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
