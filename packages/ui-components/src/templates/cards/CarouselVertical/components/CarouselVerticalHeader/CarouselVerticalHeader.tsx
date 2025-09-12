import React from 'react';
import { View } from 'tamagui';
import { BodyLargeSemibold } from '../../../../../components/Typography';
import Button from '../../../../../components/Button';
import { HeaderContainer } from './CarouselVerticalHeader.styles';
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
