import type { GetThemeValueForKey } from 'tamagui';

/**
 * Props para o componente InputMoneyCurrency
 */
export interface InputMoneyCurrencyProps {
  /**
   * Símbolo da moeda a ser exibido
   */
  currency: string;

  /**
   * Cor do texto da moeda
   */
  color: GetThemeValueForKey<'color'> | string;

  /**
   * Define se deve usar fonte pequena baseado no valor
   */
  useSmallFont: boolean;
}
