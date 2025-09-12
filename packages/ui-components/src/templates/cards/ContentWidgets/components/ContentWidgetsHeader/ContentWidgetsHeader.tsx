import React from 'react';
import { View } from 'tamagui';
import { BodyLargeSemibold } from '../../../../../components/Typography';
import Button from '../../../../../components/Button';
import { HeaderContainer } from './ContentWidgetsHeader.styles';
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
