import { VerticalActionsItemProps } from './components/VerticalActionsItem/VerticalActionsItem.model';
import { SegmentedButtonProps } from '../SegmentedButton';

/**
 * Propriedades do componente VerticalActions.
 *
 * @deprecated Este componente está obsoleto e será removido em uma versão futura.
 * Use o componente `OptionsList` como alternativa.
 */
export interface VerticalActionsProps {
  /**
   * Array de props para os componentes VerticalActionsItem a serem exibidos.
   *
   * Veja o componente VerticalActionsItem para mais detalhes.
   */
  actions: VerticalActionsItemProps[];

  /**
   * Caso seja passado, exibe o componente SegmentedButton acima da lista
   * de ações utilizando as props definidas.
   */
  segmentedButtonProps?: SegmentedButtonProps;
}
