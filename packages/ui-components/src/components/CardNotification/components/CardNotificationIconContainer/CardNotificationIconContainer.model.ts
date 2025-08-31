import React from 'react';

/**
 * Variantes de temas do CardNotification.
 */
export type CardNotificationVariant =
  | 'highlight'
  | 'accent'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
  | 'neutral'
  | 'decorative';

/**
 * Propriedades para o ícone do CardNotification.
 */
export interface CardNotificationIconContainerProps {
  /**
   * Variante que define o tema do card.
   */
  variant: CardNotificationVariant;

  /**
   * Ícone customizado opcional (cada variante já recebe o seu ícone padrão).
   */
  icon?: React.ReactNode;
}
