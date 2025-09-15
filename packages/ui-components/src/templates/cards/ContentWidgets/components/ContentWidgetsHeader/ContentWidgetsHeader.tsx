import React from 'react';
import { ListHeading } from '../../../../../components/ListHeading';
import type { ContentWidgetsHeaderProps } from './ContentWidgetsHeader.model';

/**
 * Componente responsável por renderizar o cabeçalho do ContentWidgets.
 * Contém o título opcional e o botão de ação opcional.
 */
export const ContentWidgetsHeader: React.FC<ContentWidgetsHeaderProps> = ({
  title,
  buttonActionName,
  onButtonAction,
}) => (
  <ListHeading
    title={title || ''}
    configuration={buttonActionName ? 'button' : 'simple'}
    buttonText={buttonActionName}
    onButtonPress={onButtonAction}
    size="standard"
  />
);
