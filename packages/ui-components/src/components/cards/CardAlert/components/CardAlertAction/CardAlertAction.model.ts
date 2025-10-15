import type { CardAlertVariant } from '../../CardAlert.model';

export interface CardAlertActionProps {
  /**
   * Visual variant that determines button color.
   */
  variant: CardAlertVariant;

  /**
   * Text displayed in the action button.
   */
  label: string;

  /**
   * Callback fired when action button is pressed.
   */
  onPress: () => void;

  /**
   * Test ID for automated testing.
   */
  testID?: string;
}
