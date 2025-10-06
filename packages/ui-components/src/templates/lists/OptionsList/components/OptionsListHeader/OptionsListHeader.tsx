import { ReactElement } from 'react';
import { OptionsListHeaderContainer } from './OptionsListHeader.styles';
import type { OptionsListHeaderProps } from './OptionsListHeader.model';

/**
 * Componente para renderizar o cabeçalho do OptionsList
 */
export const OptionsListHeader = ({
  children,
}: OptionsListHeaderProps): ReactElement => {
  return <OptionsListHeaderContainer>{children}</OptionsListHeaderContainer>;
};
