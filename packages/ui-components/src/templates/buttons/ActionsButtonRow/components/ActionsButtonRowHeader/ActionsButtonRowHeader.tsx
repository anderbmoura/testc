import React from 'react';
import { ListHeading } from '../../../../../components/ListHeading';
import type { ActionsButtonRowHeaderProps } from './ActionsButtonRowHeader.model';

/**
 * Componente responsável por renderizar o cabeçalho do ActionsButtonRow.
 * Contém o título opcional e o botão de ação opcional.
 */
export const ActionsButtonRowHeader: React.FC<ActionsButtonRowHeaderProps> = ({
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
