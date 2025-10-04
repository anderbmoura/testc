import React from 'react';

/**
 * Tamanhos disponíveis para o BadgeText.
 */
export type BadgeTextSize = 'large' | 'medium' | 'small';

/**
 * Cores disponíveis para o BadgeText.
 */
export type BadgeTextColor = 'highlight' | 'danger';

/**
 * Opções de configuração para o Componente DSC BadgeText.
 *
 * Define as propriedades disponíveis para personalizar o comportamento e aparência do badge.
 */
export interface BadgeTextProps {
  /**
   * Texto exibido no badge.
   */
  children: React.ReactNode;

  /**
   * Tamanho do badge.
   * - `large`
   * - `medium`
   * - `small`
   */
  size?: BadgeTextSize;

  /**
   * Cor do badge.
   * - `highlight`
   * - `danger`
   */
  color?: BadgeTextColor;
}
