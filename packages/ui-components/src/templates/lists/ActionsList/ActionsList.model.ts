import { ReactNode } from 'react';
import { ViewProps } from 'react-native';

/**
 * Propriedades do template DSC ActionsList
 */
export interface ActionsListProps extends Omit<ViewProps, 'children'> {
  /**
   * Children components que podem incluir:
   * - ListHeading: Cabeçalho da lista (opcional)
   * - SegmentedButton: Controle segmentado (opcional)
   * - ListItem: Itens de ação da lista (obrigatório)
   *
   * Ordem garantida de renderização:
   * 1. ListHeading (se presente)
   * 2. SegmentedButton (se presente)
   * 3. ActionItems (ListItems)
   *
   * A ordem de renderização é garantida automaticamente,
   * independente da ordem em que os componentes são passados como children.
   *
   * @example
   * ```tsx
   * <ActionsList>
   *   <ListItem textOnLeft="Ação 1" onPress={() => console.log('Ação 1')} />
   *   <ListHeading title="Ações Rápidas" />
   *   <ListItem textOnLeft="Ação 2" onPress={() => console.log('Ação 2')} />
   *   <SegmentedButton buttons={[...]} />
   * </ActionsList>
   * ```
   */
  children: ReactNode;
}
