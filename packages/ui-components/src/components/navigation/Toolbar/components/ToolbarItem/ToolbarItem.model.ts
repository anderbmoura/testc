import React from 'react';

/**
 * Props do componente ToolbarItem.
 */
export interface ToolbarItemProps {
  /**
   * Ícone a ser exibido no item da toolbar.
   */
  icon: React.ReactNode;

  /**
   * Label/texto a ser exibido abaixo do ícone.
   */
  label: string;

  /**
   * Callback executado quando o item é pressionado.
   */
  onPress?: () => void;

  /**
   * Se o item está desabilitado.
   * @default false
   */
  disabled?: boolean;
}

/**
 * Estados de interação do ToolbarItem.
 */
export type ToolbarItemInteractionState =
  | 'default'
  | 'hover'
  | 'pressed'
  | 'focus'
  | 'disabled';
