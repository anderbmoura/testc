/**
 * Propriedades do componente ValueSection
 *
 * Seção para exibição de valores, com suporte a rótulo, valor, moeda e botão de ação.
 *
 * @example
 * ```tsx
 * <ValueSection label="Saldo" value={1234.56} currency="R$" />
 * ```
 */
export interface ValueSectionProps {
  /**
   * Rótulo exibido acima do valor.
   */
  label: string;
  /**
   * Valor principal exibido.
   * Se não informado ou zerado, exibe "Sem valor".
   */
  value?: number;
  /**
   * Moeda exibida ao lado do valor.
   * @default 'R$'
   */
  currency?: string;
  /**
   * Tamanho do componente.
   * @default 'standard'
   */
  size?: 'standard' | 'large';
  /**
   * Exibe botão de ação à direita.
   * @default true
   */
  showButton?: boolean;
  /**
   * Callback do botão de ação.
   */
  onButtonPress?: () => void;
}
