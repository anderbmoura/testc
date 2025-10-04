import React from 'react';
import { PressableProps, ImageProps } from 'react-native';

/**
 * Variantes do slot esquerdo do chip.
 */
export type ChipsLeftSlotVariant = 'icon' | 'check' | 'avatar';

/**
 * Variantes do slot direito do chip.
 */
export type ChipsRightSlotVariant = 'arrow' | 'clear';

/**
 * Variantes visuais do chip.
 */
export type ChipsVariant = 'highlight' | 'neutral' | 'disabled';

/**
 * Propriedades para o slot esquerdo do chip.
 */
export interface ChipsLeftSlotProps {
  /**
   * Variante do slot esquerdo.
   */
  variant: ChipsLeftSlotVariant;

  /**
   * Ícone customizado para a variante 'icon'.
   */
  icon?: React.ReactNode;

  /**
   * Fonte da imagem para a variante 'avatar'.
   */
  imageSource?: ImageProps['source'];

  /**
   * Define se o check está marcado (apenas para variante 'check').
   * @default false
   */
  checked?: boolean;
}

/**
 * Propriedades para o slot direito do chip.
 */
export interface ChipsRightSlotProps {
  /**
   * Variante do slot direito.
   */
  variant: ChipsRightSlotVariant;
}

/**
 * Propriedades do componente Chips principal.
 */
export interface ChipsProps extends Omit<PressableProps, 'children'> {
  /**
   * Texto exibido no chip.
   */
  text: string;

  /**
   * Define se o chip está selecionado.
   * @default false
   */
  selected?: boolean;

  /**
   * Define se o chip está desabilitado.
   * @default false
   */
  disabled?: boolean;

  /**
   * Callback executado quando o chip é pressionado.
   */
  onPress?: () => void;

  /**
   * Elementos filhos (slots) do chip.
   */
  children?: React.ReactNode;
}
