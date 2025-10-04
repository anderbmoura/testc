import React from 'react';
import { NavArrowDown, NavArrowUp } from 'iconoir-react-native';
import Button from '../../../../../components/buttons/Button';
import { ToggleButtonContainer } from './ActionsButtonRowToggle.styles';
import type { ActionsButtonRowToggleProps } from './ActionsButtonRowToggle.model';

/**
 * Componente responsável por renderizar o botão de toggle (Ver mais/Ver menos).
 * Gerencia a expansão e contração do conteúdo adicional.
 */
export const ActionsButtonRowToggle: React.FC<ActionsButtonRowToggleProps> = ({
  showAll,
  onToggle,
}) => (
  <ToggleButtonContainer>
    <Button
      theme="highlight"
      type="chromeless"
      iconAfter={showAll ? NavArrowUp : NavArrowDown}
      onPress={onToggle}
    >
      {showAll ? 'Ver menos' : 'Ver mais'}
    </Button>
  </ToggleButtonContainer>
);
