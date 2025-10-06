import React from 'react';
import { COMPONENT_DISPLAY_NAMES } from '../constants';

/**
 * Informações sobre os children do Input processados
 */
export interface ProcessedChildren {
  errorChild: React.ReactElement | null;
  supportingTextChild: React.ReactElement | null;
  counterChild: React.ReactElement | null;
}

/**
 * Processa os children do Input e categoriza os especiais (error, supporting text, counter)
 *
 * @param children - Children do componente Input
 * @returns Objeto com os children especiais categorizados
 */
export const processInputChildren = (
  children: React.ReactNode
): ProcessedChildren => {
  let errorChild: React.ReactElement | null = null;
  let supportingTextChild: React.ReactElement | null = null;
  let counterChild: React.ReactElement | null = null;

  React.Children.forEach(children, child => {
    if (React.isValidElement(child)) {
      const childType =
        (child.type as React.ComponentType)?.displayName ||
        (child.type as React.ComponentType)?.name;

      switch (childType) {
        case COMPONENT_DISPLAY_NAMES.ERROR:
          errorChild = child as React.ReactElement;
          break;
        case COMPONENT_DISPLAY_NAMES.SUPPORTING_TEXT:
          supportingTextChild = child as React.ReactElement;
          break;
        case COMPONENT_DISPLAY_NAMES.COUNTER:
          counterChild = child as React.ReactElement;
          break;
      }
    }
  });

  return { errorChild, supportingTextChild, counterChild };
};
