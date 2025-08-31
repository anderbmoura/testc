import React from 'react';
import type {
  CardNotificationIconContainerProps,
  CardNotificationVariant,
} from './components/CardNotificationIconContainer/CardNotificationIconContainer.model';
import type { CardNotificationContentProps } from './components/CardNotificationContent/CardNotificationContent.model';
import type { CardNotificationButtonProps } from './components/CardNotificationButton/CardNotificationButton.model';

export type {
  CardNotificationIconContainerProps,
  CardNotificationVariant,
  CardNotificationContentProps,
  CardNotificationButtonProps,
};

/**
 * Opções de configuração para o Componente DSC CardNotification.
 *
 * Define as propriedades disponíveis para personalizar o comportamento e aparência do CardNotification.
 */
export interface CardNotificationProps {
  /**
   * Variante que aplica um tema ao card.
   * - `highlight`
   * - `accent`
   * - `success`
   * - `warning`
   * - `danger`
   * - `info`
   * - `neutral`
   * - `decorative`
   * @default 'highlight'
   */
  variant?: CardNotificationVariant;

  /**
   * Título principal exibido no card.
   */
  label: string;

  /**
   * Descrição complementar exibida abaixo do título.
   */
  description: string;

  /**
   * Ícone personalizado para o card.
   * Se não fornecido, usa o ícone padrão da variante.
   */
  icon?: React.ReactNode;

  /**
   * Define se o botão de ação (more-vert) deve ser exibido no canto superior direito.
   * @default false
   */
  showButton?: boolean;

  /**
   * Callback executado quando o botão de ação é pressionado.
   * Só é executado se showButton for true.
   */
  onButtonPress?: () => void;

  /**
   * Callback executado quando o card é dispensado por swipe.
   * Este callback é opcional - se não fornecido, o swipe ainda funciona mas sem ação.
   */
  onSwipe?: () => void;

  /**
   * Define se o componente deve se auto-desrenderizar após o swipe.
   * Quando true (padrão), o componente será automaticamente removido após emitir onSwipe.
   * Quando false, o controle de visibilidade fica com o componente pai.
   * @default true
   */
  autoHide?: boolean;

  /**
   * Label para acessibilidade do card.
   */
  accessibilityLabel?: string;

  /**
   * Label para acessibilidade do botão de ação.
   */
  buttonAccessibilityLabel?: string;
}
