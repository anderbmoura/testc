import type { StoriesItem } from '../../Stories.model';

export interface StoriesProgressContainerProps {
  /**
   * Array de imagens para determinar o número de barras
   */
  images: StoriesItem[];

  /**
   * Índice do item atual (começando em 0)
   */
  currentIndex: number;

  /**
   * Progresso atual (0 a 1) do item sendo exibido
   */
  currentProgress: number;

  /**
   * Callback chamado quando uma barra de progresso é pressionada
   * Recebe o índice da barra pressionada
   */
  onProgressBarPress?: (index: number) => void;

  /**
   * Padding superior para respeitar a safe area
   * Usado como fallback quando SafeAreaProvider não está disponível
   */
  topPadding?: number;
}
