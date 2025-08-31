/**
 * Propriedades para o botão de ação do CardNotification.
 */
export interface CardNotificationButtonProps {
  /**
   * Callback executado quando o botão é pressionado.
   */
  onPress?: () => void;

  /**
   * Label de acessibilidade do botão.
   */
  accessibilityLabel?: string;
}
