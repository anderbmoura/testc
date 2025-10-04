import type { StackProps } from 'tamagui';

/**
 * Define as propriedades disponíveis para personalizar o comportamento e aparência do CardWidgetFooterLoterias.
 */
export interface CardWidgetFooterLoteriasProps
  extends Omit<StackProps, 'theme'> {
  /**
   * Array de números da loteria a serem exibidos em círculos.
   * O componente sempre exibe 6 números em 2 linhas de 3 números cada.
   *
   * @example
   * ```tsx
   * <CardWidgetFooterLoterias numbers={[12, 21, 37, 46, 49, 53]} />
   * ```
   */
  numbers: number[];
}
