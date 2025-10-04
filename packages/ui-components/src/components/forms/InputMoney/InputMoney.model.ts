import type { InputMoneyFeedbackVariant } from './components/InputMoneyFeedback/InputMoneyFeedback.model';

/**
 * Estados internos do InputMoney calculados automaticamente baseado nas interações
 */
export type InputMoneyInternalState =
  | 'empty'
  | 'hover'
  | 'filled'
  | 'focused'
  | 'disabled'
  | 'readOnly';

/**
 * Props para o componente DSC InputMoney
 *
 * Propriedades para personalizar o comportamento e aparência
 * do campo de entrada monetário.
 */
export interface InputMoneyProps {
  /**
   * Valor numérico
   *
   * @example
   * ```tsx
   * <InputMoney value={0} />           // R$ 0,00
   * <InputMoney value={1250.75} />     // R$ 1.250,75
   * <InputMoney value={10000.50} />    // R$ 10.000,50
   * ```
   *
   * @default 0
   */
  value?: number;

  /**
   * Valor máximo permitido
   *
   * Quando o usuário tentar inserir um valor que exceda este limite,
   * a animação de shake será ativada e o valor não será alterado.
   *
   * @example
   * ```tsx
   * <InputMoney value={0} maxValue={1000} />      // Máximo R$ 1.000,00
   * <InputMoney value={0} maxValue={50000.99} />  // Máximo R$ 50.000,99
   * ```
   *
   * @default 99999999999.99
   */
  maxValue?: number;

  /**
   * Símbolo da moeda a ser exibido
   *
   * @example
   * ```tsx
   * <InputMoney value={100} currency="R$" />      // R$ 100,00
   * <InputMoney value={100} currency="USD" />     // USD 100,00
   * <InputMoney value={100} currency="€" />       // € 100,00
   * ```
   *
   * @default "R$"
   */
  currency?: string;

  /**
   * Define se deve usar fonte menor para o valor
   *
   * Quando `true`: valor fica 32px, moeda fica 20px
   * Quando `false`: valor fica 48px, moeda fica 20px
   *
   * @example
   * ```tsx
   * <InputMoney value={100} smallFont={false} />  // Fonte grande
   * <InputMoney value={100} smallFont={true} />   // Fonte pequena
   * ```
   *
   * @default false
   */
  smallFont?: boolean;

  /**
   * Texto da mensagem de feedback
   *
   * Se fornecido, o feedback será exibido abaixo do campo.
   * Use junto com `feedbackVariant` para controlar a aparência.
   *
   * @example
   * ```tsx
   * <InputMoney
   *   value={0}
   *   feedbackText="Digite um valor"
   *   feedbackVariant="neutral"
   * />
   *
   * <InputMoney
   *   value={-100}
   *   feedbackText="Valor deve ser positivo"
   *   feedbackVariant="danger"
   * />
   * ```
   */
  feedbackText?: string;

  /**
   * Variante visual do feedback
   *
   * @example
   * ```tsx
   * <InputMoney feedbackText="Info" feedbackVariant="neutral" />
   * <InputMoney feedbackText="Erro" feedbackVariant="danger" />
   * <InputMoney feedbackText="OK" feedbackVariant="success" />
   * ```
   *
   * @default 'danger'
   */
  feedbackVariant?: InputMoneyFeedbackVariant;

  /**
   * Define se o componente está desabilitado
   *
   * Quando desabilitado, o campo não responde a interações e fica visualmente esmaecido.
   *
   * @example
   * ```tsx
   * <InputMoney value={500} disabled={false} />  // Habilitado
   * <InputMoney value={500} disabled={true} />   // Desabilitado
   * ```
   *
   * @default false
   */
  disabled?: boolean;

  /**
   * Define se o componente está em modo somente leitura
   *
   * Quando em modo somente leitura, exibe um ícone de cadeado e não permite edição.
   * Diferente do modo desabilitado, mantém a aparência normal.
   *
   * @example
   * ```tsx
   * <InputMoney value={1000} readOnly={false} />  // Editável
   * <InputMoney value={1000} readOnly={true} />   // Somente leitura
   * ```
   *
   * @default false
   */
  readOnly?: boolean;

  /**
   * Define se o componente deve receber foco automaticamente
   *
   * @example
   * ```tsx
   * <InputMoney value={0} autoFocus={true} />   // Foca automaticamente
   * ```
   *
   * @default false
   */
  autoFocus?: boolean;

  /**
   * Callback executado quando o componente é pressionado
   *
   * @example
   * ```tsx
   * <InputMoney
   *   value={0}
   *   onPress={() => console.log('Campo pressionado')}
   * />
   * ```
   */
  onPress?: () => void;

  /**
   * Callback executado quando o componente recebe foco
   *
   * @example
   * ```tsx
   * <InputMoney
   *   value={0}
   *   onFocus={() => console.log('Campo focado')}
   * />
   * ```
   */
  onFocus?: () => void;

  /**
   * Callback executado quando o componente perde o foco
   *
   * @example
   * ```tsx
   * <InputMoney
   *   value={0}
   *   onBlur={() => console.log('Campo perdeu o foco')}
   * />
   * ```
   */
  onBlur?: () => void;

  /**
   * Callback executado quando o mouse entra na área do componente (web)
   *
   * @example
   * ```tsx
   * <InputMoney
   *   value={0}
   *   onHoverIn={() => console.log('Mouse entrou')}
   * />
   * ```
   */
  onHoverIn?: () => void;

  /**
   * Callback executado quando o mouse sai da área do componente (web)
   *
   * @example
   * ```tsx
   * <InputMoney
   *   value={0}
   *   onHoverOut={() => console.log('Mouse saiu')}
   * />
   * ```
   */
  onHoverOut?: () => void;

  /**
   * Callback executado quando o componente é pressionado (início do toque)
   *
   * @example
   * ```tsx
   * <InputMoney
   *   value={0}
   *   onPressIn={() => console.log('Início do press')}
   * />
   * ```
   */
  onPressIn?: () => void;

  /**
   * Callback executado quando o componente é liberado (fim do toque)
   *
   * @example
   * ```tsx
   * <InputMoney
   *   value={0}
   *   onPressOut={() => console.log('Fim do press')}
   * />
   * ```
   */
  onPressOut?: () => void;

  /**
   * Callback executado quando o valor numérico do input muda
   *
   * Este é o callback principal para capturar mudanças no valor.
   * O valor recebido já está formatado e validado.
   *
   * @param value - Novo valor numérico em reais
   *
   * @example
   * ```tsx
   * const [money, setMoney] = useState(0);
   *
   * <InputMoney
   *   value={money}
   *   onValueChange={(newValue) => {
   *     console.log('Novo valor:', newValue);
   *     setMoney(newValue);
   *   }}
   * />
   * ```
   */
  onValueChange?: (value: number) => void;
}
