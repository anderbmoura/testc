import React from 'react';
import { ListHeading } from '../../../../../components/lists/ListHeading';
import type { CarouselHorizontalHeaderProps } from './CarouselHorizontalHeader.model';

/**
 * Componente responsável por renderizar o cabeçalho do CarouselHorizontal.
 * Contém o título opcional e o botão de ação opcional.
 */
export const CarouselHorizontalHeader: React.FC<
  CarouselHorizontalHeaderProps
> = ({ title, buttonActionName, onButtonAction }) => (
  <ListHeading
    title={title || ''}
    configuration={buttonActionName ? 'button' : 'simple'}
    buttonText={buttonActionName}
    onButtonPress={onButtonAction}
    size="standard"
  />
);
