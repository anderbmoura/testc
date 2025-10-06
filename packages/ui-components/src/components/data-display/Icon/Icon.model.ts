import React from 'react';
import type { ViewProps } from 'react-native';
import { iconSize } from '../../../config/tokens/iconSize/iconSize';

/**
 * Opções de configuração para o Componente DSC Icon.
 *
 * Define as propriedades disponíveis para personalizar a aparência do Icon.
 */
export interface IconProps extends Omit<ViewProps, 'children'> {
  /**
   * Tamanho do ícone.
   * Deve ser um dos tamanhos predefinidos do design system (iconSize).
   * @default 'medium'
   */
  size?: keyof typeof iconSize;

  /**
   * Cor do ícone usando tokens de cores do DSC.
   * @default '$color9'
   * @example '$color1', '$primary', '$neutral9'
   */
  color?: string;

  /**
   * Componente de ícone externo (Iconoir, Lucide, etc.) ou da própria biblioteca DSC.
   * @example <Heart />, <ArrowRight />
   */
  children?: React.ReactNode;
}
