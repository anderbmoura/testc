import React from 'react';
import { ViewProps } from 'react-native';

/**
 * Visual appearance variants for the card.
 */
export type CardType = 'outline' | 'plain';

/**
 * Configuration options for the DSC Card Component.
 *
 * Defines the properties available for customizing card behavior and appearance.
 */
export interface CardProps {
  /**
   * Visual appearance variant of the card.
   * - `outline`: Card with border and transparent background
   * - `plain`: Card with background color and no border
   */
  type?: CardType;

  /**
   * Content displayed inside the card. Can be text, components, or other React elements.
   */
  children?: React.ReactNode;

  /**
   * Custom width for the card. If not provided, defaults to design system value.
   */
  width?: number | string;

  /**
   * Custom height for the card. If not provided, defaults to design system value.
   */
  height?: number | string;

  /**
   * Additional style properties inherited from React Native View
   */
  style?: ViewProps['style'];

  /**
   * Callback fired when card is pressed.
   */
  onPress?: () => void;
}
