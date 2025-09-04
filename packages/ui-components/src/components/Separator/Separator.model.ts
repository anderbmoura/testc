/**
 * Tipos de direção suportados pelo componente Separator.
 */
export type SeparatorDirection = 'horizontal' | 'vertical';

/**
 * Opções de configuração para o Componente DSC Separator.
 *
 * Define as propriedades disponíveis para o separador conforme especificações do design system.
 * O separador possui dimensões fixas, opacidade fixa em 1 e cor fixa "$outlined1".
 */
export interface SeparatorProps {
  /**
   * Direção do separador.
   * - `horizontal`: Separador horizontal (largura: 100%, altura: 1px)
   * - `vertical`: Separador vertical (largura: 1px, altura: 100px)
   * 
   * A cor é sempre "$outlined1" e a opacidade é sempre 1 conforme design system.
   */
  direction: SeparatorDirection;
}
