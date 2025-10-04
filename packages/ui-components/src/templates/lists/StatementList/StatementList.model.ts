import { ReactElement } from 'react';
import { ViewProps } from 'react-native';
import { ExtractItemProps } from '../../../components/data-display/ExtractList/ExtractItem/ExtractItem.model';

/**
 * Opções de configuração para o Template StatementList.
 */
export interface StatementListProps extends Omit<ViewProps, 'children'> {
  /**
   * Título do cabeçalho da lista.
   */
  title: string;

  /**
   * Lista de componentes ExtractItem que serão renderizados.
   */
  children: ReactElement<ExtractItemProps> | ReactElement<ExtractItemProps>[];

  /**
   * Define se deve exibir um separator após o cabeçalho
   * @default true
   */
  showSeparator?: boolean;
}
