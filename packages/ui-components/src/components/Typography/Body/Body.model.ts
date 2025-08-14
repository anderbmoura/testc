import { TextProps } from 'tamagui';

/**
 * Configuration options for the DSC Body Component.
 *
 * Defines the properties available for customizing body text appearance.
 */
export interface BodyProps extends Omit<TextProps, 'size'> {
  /**
   * Size variant of the body text.
   */
  size?: 'large' | 'standard' | 'small';

  /**
   * Whether the text should be emphasized with bold weight.
   */
  emphasized?: boolean;
}
