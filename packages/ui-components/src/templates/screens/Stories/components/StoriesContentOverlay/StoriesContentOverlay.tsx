import React from 'react';
import type { StoriesContentOverlayProps } from './StoriesContentOverlay.model';
import { StoriesContentContainer } from './StoriesContentOverlay.styles';

/**
 * Componente de overlay de conteúdo para Story
 *
 * @param children - Conteúdo a ser renderizado por cima das imagens
 */
export const StoriesContentOverlay: React.FC<StoriesContentOverlayProps> = ({
  children,
}) => {
  if (!children) {
    return null;
  }

  return <StoriesContentContainer>{children}</StoriesContentContainer>;
};
