import { ChipsLeftSlotProps } from '../../Chips.model';

/**
 * Propriedades internas para o slot esquerdo do Chips.
 */
export interface ChipsLeftSlotInternalProps extends ChipsLeftSlotProps {
  /**
   * Se o chip está selecionado (necessário para mostrar check).
   */
  selected: boolean;

  /**
   * Cor do ícone.
   */
  iconColor: string;
}
