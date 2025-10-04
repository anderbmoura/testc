/**
 * Props para o componente InputTextField
 */
export interface InputTextFieldProps {
  /**
   * Valor do texto
   */
  value: string;

  /**
   * Texto do placeholder
   */
  placeholder: string;

  /**
   * Define se é multilinhas
   */
  multiline: boolean;

  /**
   * Número máximo de caracteres
   */
  maxLength: number;

  /**
   * Define se está desabilitado
   */
  disabled: boolean;

  /**
   * Define se tem erro
   */
  hasError: boolean;

  /**
   * Define se deve receber foco automaticamente
   */
  autoFocus: boolean;

  /**
   * Callback quando o texto muda
   */
  onChangeText: (text: string) => void;

  /**
   * Callback quando recebe foco
   */
  onFocus: () => void;

  /**
   * Callback quando perde foco
   */
  onBlur: () => void;

  /**
   * Função para executar animação de shake quando tentar digitar além do limite
   */
  onMaxLengthExceeded?: () => void;
}

/**
 * Ref para o componente InputTextField
 */
export interface InputTextFieldRef {
  /**
   * Foca no input
   */
  focus: () => void;

  /**
   * Remove o foco do input
   */
  blur: () => void;
}
