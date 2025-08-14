import { TextProps } from 'tamagui';

/**
 * Configuration options for the DSC Label Component.
 *
 * Defines the properties available for customizing label text appearance.
 */
export interface LabelProps extends Omit<TextProps, 'size'> {
  /**
   * Size variant of the label text.
   */
  size?: 'standard' | 'small' | 'tiny';

  /**
   * Whether the text should be emphasized with bold weight.
   */
  emphasized?: boolean;
}
