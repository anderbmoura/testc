import { ReactNode } from 'react';
import { ViewProps } from 'react-native';

/**
 * Propriedades do template DSC OptionsList
 */
export interface OptionsListProps extends Omit<ViewProps, 'children'> {
  /**
   * Children components que podem incluir:
   * - ListHeading: Cabeçalho da lista (opcional)
   * - SegmentedButton: Controle segmentado (opcional)
   * - ListItem: Itens da lista (obrigatório)
   * - ListFooter: Rodapé da lista (opcional)
   *
   * Ordem garantida de renderização:
   * 1. ListHeading (se presente)
   * 2. SegmentedButton (se presente)
   * 3. ListItems
   * 4. ListFooter (se presente)
   *
   * A ordem de renderização é garantida automaticamente,
   * independente da ordem em que os componentes são passados como children.
   *
   * @example
   * ```tsx
   * <OptionsList>
   *   <ListItem textOnLeft="Item 1" />
   *   <ListHeading title="Configurações" />
   *   <ListItem textOnLeft="Item 2" />
   *   <SegmentedButton buttons={[...]} />
   *   <ListFooter labelLeft="Total" textLeft="2 itens" />
   * </OptionsList>
   * ```
   */
  children: ReactNode;
}
