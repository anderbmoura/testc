import { ReactNode } from 'react';

/**
 * Props do componente SheetFrame
 */
export interface SheetFrameProps {
  /**
   * Conteúdo do frame
   */
  children: ReactNode;

  /**
   * Variante do sheet que afeta o estilo do background
   */
  variant?: 'default' | 'onMediaBg';
}
