export type ExtractListVariant = 'success' | 'neutral' | 'danger';

/**
 * Propriedades para o componente ExtractList.
 *
 * @property {any} [data] - Dados que serão exibidos na lista de extrato.
 * @property {string} [testID] - Identificador utilizado para testes automatizados.
 * @property {() => Promise<void>} [refreshAction] - Função chamada ao solicitar a atualização dos dados.
 */
export interface ExtractListProps {
  data: any;

  testID?: string;

  refreshAction?: () => Promise<void>;
}
