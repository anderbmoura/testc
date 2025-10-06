import React from 'react';
import { ButtonProps as TamaguiButtonProps } from 'tamagui';

/**
 * Visual appearance variants for the button.
 */
export type ButtonType = 'plain' | 'outline' | 'chromeless';

/**
 * Size variants for the button.
 */
export type ButtonSize = 'large' | 'standard' | 'small';

/**
 * Configuration options for the DSC Button Component.
 *
 * Defines the properties available for customizing button behavior and appearance.
 */
export interface ButtonProps {
  /**
   * Visual theme for the button. Inherited from Tamagui Button theme system.
   */
  theme?: TamaguiButtonProps['theme'];

  /**
   * Visual appearance variant of the button.
   * - `plain`: Standard filled button with background color
   * - `outline`: Button with border and transparent background
   * - `chromeless`: Minimal button without background or border
   */
  type?: ButtonType;

  /**
   * Size variant of the button affecting padding and typography.
   * - `large`: Bigger button for primary actions
   * - `standard`: Default size for most use cases
   * - `small`: Compact button for secondary actions
   */
  size?: ButtonSize;

  /**
   * Prevents user interaction and shows disabled styling.
   */
  disabled?: boolean;

  /**
   * Shows loading spinner and prevents interaction when true.
   */
  loading?: boolean;

  /**
   * Content displayed inside the button. Can be text, icons, or other React elements.
   */
  children?: React.ReactNode;

  /**
   * Icon displayed before the button text. Inherited from Tamagui Button icon system.
   */
  icon?: TamaguiButtonProps['icon'];

  /**
   * Icon displayed after the button text. Inherited from Tamagui Button icon system.
   */
  iconAfter?: TamaguiButtonProps['iconAfter'];

  /**
   * Callback fired when button is pressed. Inherited from Tamagui Button onPress handler.
   */
  onPress?: TamaguiButtonProps['onPress'];

  /**
   * Callback fired when mouse enters the button area (web only).
   */
  onHoverIn?: TamaguiButtonProps['onHoverIn'];

  /**
   * Callback fired when mouse leaves the button area (web only).
   */
  onHoverOut?: TamaguiButtonProps['onHoverOut'];
}
