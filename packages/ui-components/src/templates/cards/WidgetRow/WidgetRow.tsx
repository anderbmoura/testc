import React from 'react';
import { WidgetRowContainer, WidgetItemWrapper } from './WidgetRow.styles';
import type { WidgetRowProps } from './WidgetRow.model';

/**
 * Template DSC WidgetRow
 *
 * Container que organiza exatamente 2 componentes CardWidget em linha horizontal,
 * aplicando largura igual para ambos os widgets e gap consistente entre eles.
 *
 * @example
 * ```tsx
 * <WidgetRow>
 *   <CardWidget topLabel="Saldo" mainLabel="R$ 1.234,56" variant="highlight" />
 *   <CardWidget topLabel="Limite" mainLabel="R$ 5.000,00" variant="success" />
 * </WidgetRow>
 * ```
 */
export const WidgetRow: React.FC<WidgetRowProps> = ({ children, ...props }) => {
  if (React.Children.count(children) !== 2) {
    throw new Error(
      'WidgetRow deve receber exatamente 2 CardWidget componentes'
    );
  }

  const wrappedChildren = React.Children.map(children, (child, index) => (
    <WidgetItemWrapper key={index}>{child}</WidgetItemWrapper>
  ));

  return <WidgetRowContainer {...props}>{wrappedChildren}</WidgetRowContainer>;
};
