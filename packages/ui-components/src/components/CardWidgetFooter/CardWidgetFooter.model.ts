import React from 'react';
import type { StackProps } from 'tamagui';

/**
 * Variantes de temas disponíveis para o CardWidgetFooter.
 */
export type CardWidgetFooterVariant = 'neutral' | 'success' | 'danger';

/**
 * Opções de configuração para o Componente DSC CardWidgetFooter.
 *
 * Define as propriedades disponíveis para personalizar o comportamento e aparência do CardWidgetFooter.
 */
export interface CardWidgetFooterProps extends Omit<StackProps, 'theme'> {
  /**
   * Variante que aplica um tema ao footer.
   * - `neutral`
   * - `success`
   * - `danger`
   * @default 'neutral'
   */
  variant?: CardWidgetFooterVariant;

  /**
   * Texto do label a ser exibido no topo do footer.
   */
  label?: string;

  /**
   * Texto principal (value) exibido na parte inferior do footer.
   * A cor varia conforme a variante.
   */
  value?: string;

  /**
   * Ícone a ser exibido no footer ao lado do value.
   * A cor varia conforme a variante.
   *
   * @example
   * ```tsx
   * import { CreditCard } from 'iconoir-react-native';
   *
   * <CardWidgetFooter
   *   icon={CreditCard}
   *   value="Cartão de Crédito"
   * />
   * ```
   */
  icon?: React.ComponentType<any>;

  /**
   * Define se a barra de progresso deve ser exibida.
   * @default true
   */
  showProgress?: boolean;

  /**
   * Valor do progresso entre 0 e 100.
   * @default 50
   */
  progress?: number;
}
