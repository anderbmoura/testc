import { StackProps } from '@tamagui/core';
import { ButtonProps } from 'tamagui';

/**
 * Visual style variants for the Avatar component.
 *
 * - `monogram`: Displays a single character centered inside the avatar.
 * - `image`: Displays a profile image from a remote URL.
 * - `icon`: Displays a custom icon element.
 */
export type AvatarStyle = 'monogram' | 'image' | 'icon';

/**
 * Size variants for the Avatar component.
 *
 * - `small`: Compact avatar size.
 * - `standard`: Default avatar size.
 * - `large`: Enlarged avatar size.
 */
export type AvatarSize = 'small' | 'standard' | 'large';

/**
 * Spacing options for stacked avatars.
 *
 * Controls the horizontal overlap between avatars in a stack.
 *
 * - `small`: Tight spacing with more overlap.
 * - `standard`: Moderate spacing.
 * - `large`: Loose spacing with less overlap.
 */
export type AvatarSpacing = 'small' | 'standard' | 'large';

/**
 * Represents a single character used in monogram style.
 *
 * Must be a string containing exactly one character.
 */
export type MonogramChar = string;

/**
 * Configuration options for the DSC Avatar component.
 *
 * Defines the properties available for customizing avatar behavior and appearance.
 */
export interface AvatarProps {
  /**
   * Visual style of the avatar.
   * Can be `monogram`, `image`, or `icon`.
   */
  style?: AvatarStyle;

  /**
   * Size of the avatar.
   * If omitted, it will be inherited from the AvatarStack.
   */
  size?: AvatarSize;

  /**
   * Character displayed in monogram style.
   * Must be a single character.
   */
  monogramChar?: MonogramChar;

  /**
   * Remote image URL displayed in image style.
   */
  imageUrl?: string;

  /**
   * Icon element displayed in icon style. Inherited from Tamagui Button icon system.
   */
  icon?: ButtonProps['icon'];

  /**
   * Additional style props applied to the avatar container.
   * Useful for positioning within a stack or layout adjustments.
   */
  styleProps?: StackProps;
}

/**
 * Configuration options for the AvatarStack component.
 *
 * Defines the properties available for customizing stacked avatar behavior and layout.
 */
export interface AvatarStackProps {
  /**
   * Maximum number of avatars to display.
   * If omitted, all children will be rendered.
   */
  count?: number;

  /**
   * Horizontal spacing between stacked avatars.
   * Controls how much they overlap.
   */
  spacing?: AvatarSpacing;

  /**
   * Size of avatars within the stack.
   * Automatically propagated to child avatars.
   */
  size?: AvatarSize;

  /**
   * Avatar elements passed as children to the stack.
   */
  children: React.ReactNode;
}
