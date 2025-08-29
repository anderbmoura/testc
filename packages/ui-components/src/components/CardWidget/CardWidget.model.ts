import React from 'react';
import { StackProps } from 'tamagui';

/**
 * Variantes disponíveis para o CardWidget.
 */
export type CardWidgetVariant = 'highlight' | 'success' | 'danger';

/**
 * Opções de configuração para o Componente DSC CardWidget.
 *
 * Define as propriedades disponíveis para personalizar o comportamento e aparência do CardWidget.
 */
export interface CardWidgetProps
  extends Omit<StackProps, 'theme' | 'children'> {
  /**
   * Variante do widget que determina o tema aplicado.
   * @default 'highlight'
   */
  variant?: CardWidgetVariant;

  /**
   * Texto da label pequena exibida no topo (cor: $onNeutral2).
   */
  topLabel: string;

  /**
   * Texto da label principal exibida abaixo (cor: $onNeutral1).
   */
  mainLabel: string;

  /**
   * Ícone opcional exibido no lado direito do header.
   */
  icon?: React.ReactNode;

  /**
   * Imagem opcional exibida no lado direito do header (alternativa ao ícone).
   */
  image?: React.ReactNode;

  /**
   * Conteúdo do footer.
   */
  children?: React.ReactNode;

  /**
   * Função chamada ao pressionar o widget.
   */
  onPress?: () => void;
}
