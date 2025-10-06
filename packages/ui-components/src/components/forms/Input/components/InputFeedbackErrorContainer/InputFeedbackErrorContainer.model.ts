/**
 * Props para o componente InputFeedbackErrorContainer
 */
export interface InputFeedbackErrorContainerProps {
  /**
   * Texto do erro
   */
  text: string;

  /**
   * Callback para quando o container é pressionado
   */
  onPress?: () => void;

  /**
   * Valor de animação para shake do erro
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  errorShakeAnimation?: any;

  /**
   * Define se o componente está desabilitado
   */
  disabled?: boolean;
}
