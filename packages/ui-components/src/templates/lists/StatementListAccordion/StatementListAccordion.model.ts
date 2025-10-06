import { ReactNode } from 'react';
import { ViewProps } from 'react-native';

/**
 * Propriedades do template DSC StatementListAccordion
 */
export interface StatementListAccordionProps
  extends Omit<ViewProps, 'children'> {
  /**
   * Texto principal exibido no accordion
   */
  textLeft: string;

  /**
   * Texto secundário opcional exibido à direita no accordion
   */
  textRight?: string;

  /**
   * Estado inicial do accordion - se está colapsado ou expandido
   * @default false
   */
  collapsed?: boolean;

  /**
   * Se o componente está desabilitado
   * @default false
   */
  disabled?: boolean;

  /**
   * Callback executado quando o estado do accordion muda
   */
  onChange?: (value: boolean) => void;

  /**
   * Se deve exibir o separador inferior
   * @default true
   */
  showSeparator?: boolean;

  /**
   * Children components que podem incluir:
   * - ExtractItem: Itens de extrato exibidos quando expandido (obrigatório)
   * - ListFooter: Rodapé da lista com totais (opcional)
   *
   * Ordem garantida de renderização:
   * 1. ListAccordion (cabeçalho com toggle)
   * 2. ExtractItems (quando expandido)
   * 3. ListFooter (se presente e expandido)
   * 4. Separator (separador inferior)
   *
   * @example
   * ```tsx
   * <StatementListAccordion textLeft="A vencer (3)" collapsed={false}>
   *   <ExtractItem
   *     item={{ service: "Fatura cartão", detail: "Venc: 15/10", value: "R$ 1.200,00" }}
   *     icon={<CreditCard />}
   *   />
   *   <ExtractItem
   *     item={{ service: "Financiamento", detail: "Venc: 20/10", value: "R$ 850,00" }}
   *     icon={<Home />}
   *   />
   *   <ListFooter textLeft="Total" textRight="R$ 2.200,00" />
   * </StatementListAccordion>
   * ```
   */
  children: ReactNode;
}
