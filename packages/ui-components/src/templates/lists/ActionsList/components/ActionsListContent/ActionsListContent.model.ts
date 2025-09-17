import { ReactElement } from 'react';
import { ListItemProps } from '../../../../../components/ListItem/ListItem.model';

export interface ActionsListContentProps {
  children: ReactElement<ListItemProps> | ReactElement<ListItemProps>[];
}
