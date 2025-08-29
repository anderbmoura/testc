import React from 'react';
import { CardWidgetFooterContainer } from './StyledComponents';

/**
 * Componente DSC CardWidgetFooter
 *
 * Footer do CardWidget que pode receber qualquer conteúdo.
 */
export const CardWidgetFooter: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  if (!children) return null;

  return <CardWidgetFooterContainer>{children}</CardWidgetFooterContainer>;
};

export default CardWidgetFooter;
