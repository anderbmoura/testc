import { ReactNode } from 'react';

/**
 * Propriedades do componente SheetContent.
 */
export interface SheetContentProps {
  /**
   * Conteúdo do sheet.
   */
  children: ReactNode;

  /**
   * Habilita scroll para conteúdo que excede a altura disponível.
   * @default false
   */
  scrollable?: boolean;
}
