/**
 * Visual variants for the CardAlert component.
 */
export type CardAlertVariant = 'info' | 'success' | 'warning' | 'danger';

/**
 * Action button configuration for CardAlert.
 */
export interface CardAlertAction {
  /**
   * Text displayed in the action button.
   */
  label: string;

  /**
   * Callback fired when action button is pressed.
   */
  onPress: () => void;
}

/**
 * Configuration options for the DSC CardAlert Component.
 *
 * Defines the properties available for customizing CardAlert behavior and appearance.
 */
export interface CardAlertProps {
  /**
   * Visual variant of the CardAlert affecting colors and icon.
   * - `info`: Blue themed alert for informational messages
   * - `success`: Green themed alert for success messages
   * - `warning`: Yellow themed alert for warning messages
   * - `danger`: Red themed alert for error/danger messages
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

  /**
   * Optional action button configuration.
   * When provided, displays an action button at the bottom of the alert.
   */
  action?: CardAlertAction;

  /**
   * Optional custom styling for the container.
   */
  style?: object;

  /**
   * Test ID for automated testing.
   */
  testID?: string;
}
