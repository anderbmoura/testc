/**
 * Variantes visuais do feedback do InputMoney
 */
export type InputMoneyFeedbackVariant = 'neutral' | 'danger' | 'success';

/**
 * Props para o componente InputMoneyFeedback
 *
 * Define as opções de configuração para a exibição de mensagens de feedback.
 */
export interface InputMoneyFeedbackProps {
  /**
   * Texto da mensagem de feedback
   *
   * @example
   * ```tsx
   * <InputMoneyFeedback text="Digite um valor válido" />
   * ```
   *
   * @default 'Feedback message'
   */
  text?: string;

  /**
   * Define se o ícone deve ser exibido junto ao texto
   *
   * @example
   * ```tsx
   * <InputMoneyFeedback text="Erro" showIcon={true} />
   * <InputMoneyFeedback text="Apenas texto" showIcon={false} />
   * ```
   *
   * @default true
   */
  showIcon?: boolean;

  /**
   * Variante que determina a cor e ícone do feedback
   * - `neutral`: Ícone de informação com cor neutra
   * - `danger`: Ícone de erro com cor vermelha
   * - `success`: Ícone de sucesso com cor verde
   *
   * @example
   * ```tsx
   * <InputMoneyFeedback text="Informação" variant="neutral" />
   * <InputMoneyFeedback text="Erro no valor" variant="danger" />
   * <InputMoneyFeedback text="Valor válido" variant="success" />
   * ```
   *
   * @default 'neutral'
   */
  variant?: InputMoneyFeedbackVariant;
}
