/**
 * Props para o componente InputSupportingTextContainer
 */
export interface InputSupportingTextContainerProps {
  /**
   * Texto de apoio
   */
  supportingText?: string;

  /**
   * Número atual de caracteres
   */
  characterCount?: number;

  /**
   * Número máximo de caracteres
   */
  maxLength?: number;

  /**
   * Callback para quando o container é pressionado
   */
  onPress?: () => void;

  /**
   * Valor de animação para shake do contador
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  counterShakeAnimation?: any;

  /**
   * Define se o componente está desabilitado
   */
  disabled?: boolean;
}
