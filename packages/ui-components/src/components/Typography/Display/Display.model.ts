import { TextProps } from 'tamagui';

/**
 * Configuration options for the DSC Display Component.
 *
 * Defines the properties available for customizing display text appearance.
 */
export interface DisplayProps extends Omit<TextProps, 'size'> {
  /**
   * Size variant of the display text.
   */
  size?: 'standard';

  /**
   * Whether the text should be emphasized with bold weight.
   */
  emphasized?: boolean;
}
