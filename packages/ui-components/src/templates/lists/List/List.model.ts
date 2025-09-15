import { ReactElement } from 'react';
import { ViewProps } from 'react-native';
import { ListItemProps } from '../../../components/ListItem/ListItem.model';

/**
 * Propriedades do template DSC List
 */
export interface ListProps extends Omit<ViewProps, 'children'> {
  /**
   * Lista de componentes ListItem que serão renderizados.
   */
  children: ReactElement<ListItemProps> | ReactElement<ListItemProps>[];
}
