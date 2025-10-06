import { ChipsRightSlotProps } from '../../Chips.model';

/**
 * Propriedades internas para o slot direito do Chips.
 */
export interface ChipsRightSlotInternalProps extends ChipsRightSlotProps {
  /**
   * Cor do ícone (deve ser a mesma do texto).
   */
  iconColor: string;
}
