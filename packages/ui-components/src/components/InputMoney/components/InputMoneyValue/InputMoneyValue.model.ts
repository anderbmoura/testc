import type { GetThemeValueForKey } from 'tamagui';

/**
 * Props para o componente InputMoneyValue
 */
export interface InputMoneyValueProps {
  /**
   * Valor formatado para exibição
   */
  displayValue: string;

  /**
   * Cor do texto do valor
   */
  color: GetThemeValueForKey<'color'> | string;

  /**
   * Define se deve usar fonte pequena baseado no valor
   */
  useSmallFont: boolean;

  /**
   * Define se está em modo de edição
   */
  isEditing: boolean;

  /**
   * Texto sendo editado durante a digitação
   */
  editingText: string;
}
