import React, { ReactElement } from 'react';
import { StyledActionsListContainer } from './ActionsList.styles';
import { ActionsListHeader } from './components/ActionsListHeader';
import { ActionsListSegmentedContainer } from './components/ActionsListSegmentedContainer';
import { ActionsListContent } from './components/ActionsListContent';
import { useActionsListChildrenSeparation } from './hooks/useActionsListChildrenSeparation';
import type { ActionsListProps } from './ActionsList.model';

/**
 * Template DSC ActionsList
 *
 * Combina ListHeading, SegmentedButton, List e ListFooter para criar uma interface
 * de ações com cabeçalho, controle segmentado, lista de itens de ação e rodapé.
 *
 * Ordem garantida de renderização:
 * 1. ListHeading (se presente)
 * 2. SegmentedButton (se presente)
 * 3. ActionItems (ListItems)
 * 4. ListFooter (se presente)
 *
 * @example
 * ```tsx
 * import { ActionsList, ListHeading, SegmentedButton, ListItem, ListFooter } from '@superapp-caixa/dsc-library';
 * import { Settings, User, CreditCard } from 'iconoir-react-native';
 *
 * <ActionsList>
 *   <ListHeading
 *     title="Ações Rápidas"
 *     configuration="button"
 *     buttonText="Ver mais"
 *     onButtonPress={() => console.log('Ver mais')}
 *   />
 *   <SegmentedButton
 *     buttons={[
 *       { label: "Conta", icon: <User />, onPress: () => console.log('Conta') },
 *       { label: "Cartão", icon: <CreditCard />, onPress: () => console.log('Cartão') }
 *     ]}
 *   />
 *   <ListItem
 *     textOnLeft="Transferir"
 *     onPress={() => console.log('Transferir')}
 *   />
 *   <ListItem
 *     textOnLeft="Pagar"
 *     onPress={() => console.log('Pagar')}
 *   />
 *   <ListFooter
 *     labelLeft="Total de ações"
 *     textLeft="2"
 *     labelRight="Última operação"
 *     textRight="Ontem"
 *   />
 * </ActionsList>
 *
 * <ActionsList>
 *   <ListHeading title="Menu Principal" configuration="simple" />
 *   <ListItem textOnLeft="Conta" onPress={() => console.log('Conta')} />
 *   <ListItem textOnLeft="Cartões" onPress={() => console.log('Cartões')} />
 * </ActionsList>
 * ```
 */
export const ActionsList = ({ children }: ActionsListProps): ReactElement => {
  const { listHeading, segmentedButton, listFooter, actionItems } =
    useActionsListChildrenSeparation(children);

  return (
    <StyledActionsListContainer>
      {listHeading && <ActionsListHeader>{listHeading}</ActionsListHeader>}

      {segmentedButton && (
        <ActionsListSegmentedContainer>
          {segmentedButton}
        </ActionsListSegmentedContainer>
      )}

      <ActionsListContent>{actionItems}</ActionsListContent>

      {listFooter && listFooter}
    </StyledActionsListContainer>
  );
};
