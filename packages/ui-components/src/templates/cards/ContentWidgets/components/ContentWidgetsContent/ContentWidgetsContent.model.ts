import React from 'react';
import type { WidgetRowProps } from '../../../WidgetRow/WidgetRow.model';

/**
 * Propriedades para o componente ContentWidgetsContent.
 */
export interface ContentWidgetsContentProps {
  /**
   * Lista de elementos WidgetRow a serem renderizados.
   */
  children:
    | React.ReactElement<WidgetRowProps>
    | React.ReactElement<WidgetRowProps>[];
}
