import React, { Children } from 'react';
import { ListHeading } from '../../../components/ListHeading';
import { Separator } from '../../../components/Separator';
import { StatementListContainer } from './StatementList.styles';
import type { StatementListProps } from './StatementList.model';

/**
 * Template StatementList - Lista de extrato bancário
 *
 * Combina ListHeading, Separator e múltiplos ExtractItems para exibir
 * transações financeiras de forma organizada e estruturada.
 *
 * @example
 * ```tsx
 * import { StatementList, ExtractItem } from '@superapp-caixa/dsc-library';
 * import { SendDollars, ReceiveDollars } from 'iconoir-react-native';
 *
 * <StatementList title="Hoje">
 *   <ExtractItem
 *     item={{
 *       value: '-R$ 1.000,00',
 *       service: 'Pix enviado',
 *       detail: 'Evelyn Almeida Souza'
 *     }}
 *     iconVariant="danger"
 *     icon={<SendDollars width={24} height={24} />}
 *   />
 *   <ExtractItem
 *     item={{
 *       value: 'R$ 550,00',
 *       service: 'Pix recebido',
 *       detail: 'Ryan Melo Cardoso'
 *     }}
 *     iconVariant="success"
 *     icon={<ReceiveDollars width={24} height={24} />}
 *   />
 * </StatementList>
 * ```
 *
 * @param title - Título do cabeçalho da lista
 * @param children - Componentes ExtractItem a serem renderizados
 * @param showSeparator - Define se deve exibir separator após o cabeçalho
 */
export const StatementList: React.FC<StatementListProps> = ({
  title,
  children,
  showSeparator = true,
}) => {
  const childrenArray = Children.toArray(children);

  return (
    <StatementListContainer>
      <ListHeading title={title} size="small" configuration="simple" />
      {showSeparator && <Separator direction="horizontal" />}
      {childrenArray}
    </StatementListContainer>
  );
};

export default StatementList;
