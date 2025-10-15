import type { CardAlertVariant } from '../../CardAlert.model';

export interface CardAlertContentProps {
  /**
   * Visual variant that determines title color.
   */
  variant: CardAlertVariant;

  /**
   * Title text displayed prominently in the alert.
   */
  title: string;

  /**
   * Description text providing additional context.
   */
  description: string;
}
