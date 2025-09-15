import React from 'react';

/**
 * Variações de tema para o Card Carousel Horizontal.
 */
export type CardCarouselHorizontalTheme = 'neutral' | 'highlight' | 'accent';

/**
 * Opções de configuração para o Componente DSC Card Carousel Horizontal.
 */
export interface CardCarouselHorizontalProps {
  /**
   * Variante visual que determina o tema (cor) do card.
   * - `neutral`
   * - `highlight`
   * - `accent`
   * @default 'neutral'
   */
  theme?: CardCarouselHorizontalTheme;

  /**
   * Título principal exibido no canto superior esquerdo do card.
   */
  title: string;

  /**
   * Descrição complementar exibida abaixo do título no lado esquerdo.
   */
  description?: string;

  /**
   * Slot de conteúdo que aceita qualquer componente React.
   */
  children?: React.ReactNode;

  /**
   * Callback opcional disparado quando o card é pressionado.
   */
  onPress?: () => void;

  /**
   * ID de teste para testes automatizados.
   */
  testID?: string;
}
