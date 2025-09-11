/**
 * Propriedades para o componente ActionsButtonRowToggle.
 */
export interface ActionsButtonRowToggleProps {
  /**
   * Estado atual de expansão.
   */
  showAll: boolean;

  /**
   * Callback executado quando o botão de toggle é pressionado.
   */
  onToggle: () => void;
}
