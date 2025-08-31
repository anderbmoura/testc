import React from 'react';
import { MoreVert } from 'iconoir-react-native';
import { IconButton } from '../../../IconButton';
import { CardNotificationButtonProps } from './CardNotificationButton.model';
import { ButtonContainer } from './CardNotificationButton.styles';

export const CardNotificationButton: React.FC<CardNotificationButtonProps> = ({
  onPress,
  accessibilityLabel = 'Mais opções',
}) => (
  <ButtonContainer>
    <IconButton
      type="plain"
      size="small"
      color="white"
      icon={<MoreVert />}
      onPress={onPress}
      accessibilityLabel={accessibilityLabel}
    />
  </ButtonContainer>
);
