import { VerticalActionsItemProps } from './components/VerticalActionsItem/VerticalActionsItem.model';

/**
 * Propriedades do componente VerticalActionsSection.
 */
export interface VerticalActionsSectionProps {
  /**
   * Título da seção.
   */
  title: string;

  /**
   * Botão de texto opcional, exibido à direita do título.
   */
  textButton?: {
    /**
     * Label a ser exibido no TextButton.
     */
    label: string;

    /**
     * Função a ser chamada quando o botão for pressionado.
     */
    onPress: () => void;
  };

  /**
   * Array de props para os componentes VerticalActionsItem a serem exibidos.
   *
   * Veja o componente VerticalActionsItem para mais detalhes.
   */
  actions: VerticalActionsItemProps[];
}
