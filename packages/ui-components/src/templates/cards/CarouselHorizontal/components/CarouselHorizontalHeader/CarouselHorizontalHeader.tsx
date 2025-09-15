import React from 'react';
import { View } from 'tamagui';
import { BodyLargeSemibold } from '../../../../../components/Typography';
import Button from '../../../../../components/Button';
import { HeaderContainer } from './CarouselHorizontalHeader.styles';
import type { CarouselHorizontalHeaderProps } from './CarouselHorizontalHeader.model';

/**
 * Componente responsável por renderizar o cabeçalho do CarouselHorizontal.
 * Contém o título opcional e o botão de ação opcional.
 */
export const CarouselHorizontalHeader: React.FC<
  CarouselHorizontalHeaderProps
> = ({ title, buttonActionName, onButtonAction }) => (
  <HeaderContainer>
    {title && (
      <BodyLargeSemibold color="$color12" marginRight="auto">
        {title}
      </BodyLargeSemibold>
    )}
    {buttonActionName && (
      <View marginLeft="auto">
        <Button theme="highlight" type="chromeless" onPress={onButtonAction}>
          {buttonActionName}
        </Button>
      </View>
    )}
  </HeaderContainer>
);
