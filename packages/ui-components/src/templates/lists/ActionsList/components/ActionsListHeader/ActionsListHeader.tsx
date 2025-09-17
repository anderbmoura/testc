import { ReactElement } from 'react';
import { ActionsListHeaderContainer } from './ActionsListHeader.styles';
import type { ActionsListHeaderProps } from './ActionsListHeader.model';

/**
 * Componente para renderizar o cabeçalho do ActionsList
 */
export const ActionsListHeader = ({
  children,
}: ActionsListHeaderProps): ReactElement => {
  return <ActionsListHeaderContainer>{children}</ActionsListHeaderContainer>;
};
