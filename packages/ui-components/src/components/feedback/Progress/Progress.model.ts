import type { ViewProps } from 'react-native';

/**
 * Tamanhos disponíveis para o componente Progress.
 */
export type ProgressSize = 'smaller' | 'small' | 'medium' | 'large' | 'larger';

/**
 * Propriedades do componente Progress da DSC Library.
 *
 * Componente para exibir progresso visual através de uma barra preenchida.
 * Aceita valores numéricos de 0 a 100 representando a porcentagem de progresso.
 */
export interface ProgressProps extends Omit<ViewProps, 'children'> {
  /**
   * Tamanho visual do componente de progresso.
   * Define a altura da barra de progresso.
   * @default 'medium'
   */
  size?: ProgressSize;

  /**
   * Valor do progresso em porcentagem.
   * Valores menores que 0 serão tratados como 0.
   * Valores maiores que 100 serão tratados como 100.
   * @default 0
   */
  progress?: number;
}
