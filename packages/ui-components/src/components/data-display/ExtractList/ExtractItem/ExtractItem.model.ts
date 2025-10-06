import { ViewProps } from 'tamagui';

type ExtractItemVariant = 'success' | 'neutral' | 'danger';
type DetailsVariant = 'neutral' | 'danger';

export interface ExtractItemProps extends ViewProps {
  /**
   * Objeto com os dados do item do extrato financeiro.
   * - value: Valor da transação (ex: 'R$ 100,00')
   * - service: Tipo de serviço ou operação (ex: 'Transferência recebida')
   * - detail: Detalhe adicional (ex: 'Banco XPTO')
   * - supportTextValue: Texto de suporte opcional (ex: 'Pix')
   */
  item: {
    value: string;
    service: string;
    detail: string;
    supportTextValue?: string;
  };

  /**
   * Variante visual do item, define cor e ícone.
   * - 'success': entrada de valor
   * - 'danger': saída de valor
   * - 'neutral': operação neutra
   * @default 'neutral'
   */
  iconVariant?: ExtractItemVariant;

  /**
   * Ícone personalizado para o item.
   * Se não fornecido, pode ser omitido ou seguir padrão da variante.
   */
  icon?: React.ReactNode;

  /**
   * Exibe o ícone do item.
   * @default true
   */
  showIcon?: boolean;

  /**
   * Exibe o texto de suporte do item.
   * @default true
   */
  showSupportTextValue?: boolean;
  /**
   * Variante visual do detalhe do item, define a cor do texto de detalhe.
   * - 'neutral': cor padrão de detalhes
   * - 'danger': cor de alerta para detalhes
   * @default 'neutral'
   */
  detailsVariant?: DetailsVariant;
}
