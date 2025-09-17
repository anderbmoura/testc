import { ReactElement } from 'react';
import { List } from '../../../List';
import { OptionsListContentContainer } from './OptionsListContent.styles';
import type { OptionsListContentProps } from './OptionsListContent.model';

/**
 * Componente para renderizar o conteúdo da lista de itens
 */
export const OptionsListContent = ({
  children,
}: OptionsListContentProps): ReactElement => {
  return (
    <OptionsListContentContainer>
      <List>{children}</List>
    </OptionsListContentContainer>
  );
};
