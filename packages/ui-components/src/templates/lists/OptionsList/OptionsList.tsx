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
 * Combina ListHeading, SegmentedButton e List para criar uma interface
 * de seleção de opções com cabeçalho, controle segmentado e lista de itens.
 *
 * Ordem garantida de renderização:
 * 1. ListHeading (se presente)
 * 2. SegmentedButton (se presente)
 * 3. ListItems
 *
 * @example
 * ```tsx
 * import { OptionsList, ListHeading, SegmentedButton, ListItem } from '@superapp-caixa/dsc-library';
 * import { Settings, User } from 'iconoir-react-native';
 *
 * <OptionsList>
 *   <ListItem textOnLeft="Item 1" />
 *   <ListHeading title="Configurações" configuration="button" />
 *   <ListItem textOnLeft="Item 2" />
 *   <SegmentedButton buttons={[...]} />
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
  const { listHeading, segmentedButton, listItems } =
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
    </StyledOptionsListContainer>
  );
};
