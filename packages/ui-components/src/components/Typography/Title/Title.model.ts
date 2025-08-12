import { TextProps } from 'tamagui';

/**
 * Configuration options for the DSC Title Component.
 *
 * Defines the properties available for customizing title text appearance.
 */
export interface TitleProps extends Omit<TextProps, 'size'> {
  /**
   * Size variant of the title text.
   */
  size?: 'large' | 'standard' | 'small';

  /**
   * Whether the text should be emphasized with bold weight.
   */
  emphasized?: boolean;
}
