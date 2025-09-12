/**
 * Propriedades para o componente ContentWidgetsHeader.
 */
export interface ContentWidgetsHeaderProps {
  /**
   * Título exibido na parte superior esquerda.
   */
  title?: string;

  /**
   * Nome do botão de ação exibido na parte superior direita.
   */
  buttonActionName?: string;

  /**
   * Callback executado quando o botão de ação é pressionado.
   */
  onButtonAction?: () => void;
}
