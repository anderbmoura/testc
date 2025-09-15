import React from 'react';
import { ListHeading } from '../../../../../components/ListHeading';
import type { CarouselVerticalHeaderProps } from './CarouselVerticalHeader.model';

/**
 * Componente responsável por renderizar o cabeçalho do CarouselVertical.
 * Contém o título opcional e o botão de ação opcional.
 */
export const CarouselVerticalHeader: React.FC<CarouselVerticalHeaderProps> = ({
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
