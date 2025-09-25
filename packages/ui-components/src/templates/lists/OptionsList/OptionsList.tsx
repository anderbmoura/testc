import React, { ReactElement } from 'react';
import { StyledOptionsListContainer } from './OptionsList.styles';
import { OptionsListHeader } from './components/OptionsListHeader';
import { OptionsListSegmentedContainer } from './components/OptionsListSegmentedContainer';
import { OptionsListContent } from './components/OptionsListContent';
import { useOptionsListChildrenSeparation } from './hooks/useOptionsListChildrenSeparation';
import type { OptionsListProps } from './OptionsList.model';

/**
 * Template DSC OptionsList
 *
 * Combina ListHeading, SegmentedButton, List e ListFooter para criar uma interface
 * de seleção de opções com cabeçalho, controle segmentado, lista de itens e rodapé.
 *
 * Ordem garantida de renderização:
 * 1. ListHeading (se presente)
 * 2. SegmentedButton (se presente)
 * 3. ListItems
 * 4. ListFooter (se presente)
 *
 * @example
 * ```tsx
 * import { OptionsList, ListHeading, SegmentedButton, ListItem, ListFooter } from '@superapp-caixa/dsc-library';
 * import { Settings, User } from 'iconoir-react-native';
 *
 * <OptionsList>
 *   <ListHeading
 *     title="Configurações"
 *     configuration="button"
 *     buttonText="Ver todas"
 *     onButtonPress={() => console.log('Ver todas')}
 *   />
 *   <SegmentedButton
 *     buttons={[
 *       { label: "Geral", icon: <Settings />, onPress: () => console.log('Geral') },
 *       { label: "Perfil", icon: <User />, onPress: () => console.log('Perfil') }
 *     ]}
 *   />
 *   <ListItem
 *     textOnLeft="Notificações"
 *     onPress={() => console.log('Notificações')}
 *   />
 *   <ListItem
 *     textOnLeft="Privacidade"
 *     onPress={() => console.log('Privacidade')}
 *   />
 *   <ListFooter
 *     labelLeft="Total de itens"
 *     textLeft="2"
 *     labelRight="Última atualização"
 *     textRight="Hoje"
 *   />
 * </OptionsList>
 *
 * <OptionsList>
 *   <ListHeading title="Menu Principal" configuration="simple" />
 *   <ListItem textOnLeft="Home" />
 *   <ListItem textOnLeft="Perfil" />
 * </OptionsList>
 * ```
 */
export const OptionsList = ({ children }: OptionsListProps): ReactElement => {
  const { listHeading, segmentedButton, listFooter, listItems } =
    useOptionsListChildrenSeparation(children);

  return (
    <StyledOptionsListContainer>
      {listHeading && <OptionsListHeader>{listHeading}</OptionsListHeader>}

      {segmentedButton && (
        <OptionsListSegmentedContainer>
          {segmentedButton}
        </OptionsListSegmentedContainer>
      )}

      <OptionsListContent>{listItems}</OptionsListContent>

      {listFooter && listFooter}
    </StyledOptionsListContainer>
  );
};
