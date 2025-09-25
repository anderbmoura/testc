import { ReactElement } from 'react';
import { ViewProps } from 'react-native';
import { ListItemProps } from '../../../components/ListItem/ListItem.model';
import { ListFooterProps } from '../../../components/ListFooter/ListFooter.model';

/**
 * Propriedades do template DSC List
 */
export interface ListProps extends Omit<ViewProps, 'children'> {
  /**
   * Lista de componentes ListItem e ListFooter que serão renderizados.
   */
  children:
    | ReactElement<ListItemProps | ListFooterProps>
    | ReactElement<ListItemProps | ListFooterProps>[];
}
