export interface StoriesProgressBarProps {
  /**
   * Estado da barra de progresso
   */
  state?: 'pending' | 'current' | 'completed';

  /**
   * Largura do progresso (0% - 100%)
   */
  progressWidth: string;

  /**
   * Callback executado quando a barra é pressionada
   */
  onPress?: () => void;
}
