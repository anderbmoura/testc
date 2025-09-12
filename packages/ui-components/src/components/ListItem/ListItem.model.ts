import { ReactNode, ReactElement } from 'react';
import { ViewProps } from 'react-native';
import BadgeText from '../BadgeText';

/**
 * Propriedades do componente DSC ListItem
 */
export interface ListItemProps extends Omit<ViewProps, 'onPress' | 'children'> {
  /**
   * Slot esquerdo - aceita qualquer componente React
   */
  leftSlot?: ReactNode;

  /**
   * Slot direito - aceita qualquer componente React
   */
  rightSlot?: ReactNode;

  /**
   * Label posicionado no topo à esquerda
   */
  labelTopLeft?: string;

  /**
   * Label posicionado no topo à direita
   */
  labelTopRight?: string;

  /**
   * Texto principal posicionado à esquerda
   */
  textOnLeft?: string;

  /**
   * Texto principal posicionado à direita
   */
  textOnRight?: string;

  /**
   * Label posicionado na parte inferior à esquerda
   */
  labelBottomLeft?: string;

  /**
   * Label posicionado na parte inferior à direita
   */
  labelBottomRight?: string;

  /**
   * Badge a ser exibido - deve ser um componente BadgeText
   */
  badge?: ReactElement<typeof BadgeText>;

  /**
   * Define se deve exibir um separator abaixo do item
   * @default false
   */
  separator?: boolean;

  /**
   * Callback executado ao pressionar o item
   */
  onPress?: () => void;

  /**
   * Estado desabilitado do componente
   * @default false
   */
  disabled?: boolean;
}
