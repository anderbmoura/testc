export type FeedbackStatus = 'success' | 'warning' | 'danger' | 'informative';

export interface FeedbackIllustrationProps {
  /**
   * Status que define qual ilustração será exibida
   */
  status: FeedbackStatus;
  /**
   * Texto alternativo para acessibilidade
   */
  alt?: string;
}
