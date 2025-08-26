import React from 'react';
import { StackProps, ImageProps } from 'tamagui';

/**
 * Variant types for IconButtonText component
 */
export type IconButtonTextVariant = 'default' | 'danger' | 'image';

/**
 * Configuration options for the DSC IconButtonText Component.
 *
 * Defines the properties available for customizing button behavior and appearance.
 */
export interface IconButtonTextProps {
  /**
   * Text content to display below the icon button
   */
  children: React.ReactNode;

  /**
   * Variant of the button that determines styling and behavior
   * - 'default': Standard icon button
   * - 'danger': Applies danger theme styling
   * - 'image': Uses an image instead of an icon
   */
  variant?: IconButtonTextVariant;

  /**
   * Icon element to display inside the button
   * Used when variant is 'default' or 'danger'
   */
  icon?: React.ReactNode;

  /**
   * Image source to display inside the button
   * Used when variant is 'image'
   */
  image?: ImageProps['source'];

  /**
   * Width of the image in pixels
   * Required when variant is 'image'
   */
  imageWidth?: number;

  /**
   * Height of the image in pixels
   * Required when variant is 'image'
   */
  imageHeight?: number;

  /**
   * Prevents user interaction and shows disabled styling.
   */
  disabled?: boolean;

  /**
   * When true, applies alternative styling for gray backgrounds.
   * Changes container background and border behavior for better contrast.
   */
  onGrayBg?: boolean;

  /**
   * Callback function called when the button is pressed.
   */
  onPress?: StackProps['onPress'];

  /**
   * Additional props passed to the container component
   */
  touchableProps?: Omit<StackProps, 'onPress' | 'disabled'>;
}
