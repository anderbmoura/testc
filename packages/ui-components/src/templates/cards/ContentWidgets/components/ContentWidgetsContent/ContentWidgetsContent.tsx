import React from 'react';
import { ContentContainer } from './ContentWidgetsContent.styles';
import type { ContentWidgetsContentProps } from './ContentWidgetsContent.model';

/**
 * Componente responsável por renderizar o conteúdo dos WidgetRows no ContentWidgets.
 * Organiza os WidgetRows verticalmente com espaçamento consistente.
 */
export const ContentWidgetsContent: React.FC<ContentWidgetsContentProps> = ({
  children,
}) => {
  const childrenArray = React.Children.toArray(children);

  return (
    <ContentContainer>
      {childrenArray.map((child, index) => (
        <React.Fragment key={index}>{child}</React.Fragment>
      ))}
    </ContentContainer>
  );
};
