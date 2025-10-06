import React from 'react';

/**
 * Configurações da pilha de cards.
 */
export interface StackConfiguration {
  /** Espaçamento vertical entre cards empilhados */
  verticalOffset: number;
  /** Redução de escala por nível de empilhamento */
  scaleReductionPerLevel: number;
  /** Número máximo de cards visíveis na pilha */
  maximumVisibleCards: number;
  /** Distância máxima para interpolação completa */
  maximumDragDistanceForInterpolation: number;
  /** Delay do throttle para animações (em ms) */
  animationThrottleDelayMs: number;
}

/**
 * Movimento de um card.
 */
export interface CardMovement {
  dx: number;
  dy: number;
}

/**
 * Transformação aplicada a um card empilhado.
 */
export interface CardTransform {
  translateY: number;
  scale: number;
  interpolationProgress: number;
}

/**
 * Propriedades do componente CardNotificationStack.
 */
export interface CardNotificationStackProps {
  /**
   * Componentes CardNotification filhos para exibir em formato de deck/pilha.
   */
  children: React.ReactNode;
}

/**
 * Configurações padrão da pilha.
 */
export const DEFAULT_STACK_CONFIGURATION: StackConfiguration = {
  verticalOffset: 9,
  scaleReductionPerLevel: 0.05,
  maximumVisibleCards: 8,
  maximumDragDistanceForInterpolation: 120,
  animationThrottleDelayMs: 32,
};
