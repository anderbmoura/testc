import React from 'react';
import { ScrollViewProps } from 'react-native';

export interface CarouselVerticalProps
  extends Omit<ScrollViewProps, 'children'> {
  /**
   * Título exibido na parte superior esquerda.
   */
  title?: string;

  /**
   * Nome do botão de ação exibido na parte superior direita.
   */
  buttonActionName?: string;

  /**
   * Callback executado quando o botão de ação é pressionado.
   */
  onButtonAction?: () => void;

  /**
   * Componentes CardCarouselVertical a serem exibidos no carousel horizontal.
   */
  children: React.ReactNode;
}
