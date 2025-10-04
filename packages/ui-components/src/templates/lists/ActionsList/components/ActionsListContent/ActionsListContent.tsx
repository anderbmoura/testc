import { ReactElement } from 'react';
import Card from '../../../../../components/cards/Card';
import { List } from '../../../List';
import { ActionsListContentContainer } from './ActionsListContent.styles';
import type { ActionsListContentProps } from './ActionsListContent.model';

/**
 * Componente para renderizar o conteúdo do ActionsList
 */
export const ActionsListContent = ({
  children,
}: ActionsListContentProps): ReactElement => {
  return (
    <ActionsListContentContainer>
      <Card type="plain">
        <List>{children}</List>
      </Card>
    </ActionsListContentContainer>
  );
};
