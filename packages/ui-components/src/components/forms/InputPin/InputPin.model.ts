import type { TextInput } from 'react-native';

/**
 * Variantes suportadas pelo InputPin.
 *
 * - `numeric`: PIN tradicional exibido em caixas vazias.
 * - `token`: Código temporário (OTP) com placeholder e estados destacados.
 * - `alphanumeric`: Campo único seguro para senhas com letras e números.
 */
export type InputPinVariant = 'numeric' | 'token' | 'alphanumeric';

/**
 * Tipos de feedback exibidos abaixo do componente.
 */
export type InputPinFeedbackType = 'neutral' | 'success' | 'danger';

/**
 * Props públicas do componente InputPin.
 *
 * Responsáveis por configurar o fluxo de digitação, feedback visual e estados de acessibilidade.
 */
export interface InputPinProps {
  /**
   * Define a apresentação e o comportamento esperado.
   */
  variant: InputPinVariant;

  /**
   * Quantidade de dígitos para variantes numéricas (`numeric` ou `token`).
   *
   * @default 6
   */
  digitCount?: 4 | 6;

  /**
   * Valor controlado atual do PIN/senha.
   */
  value?: string;

  /**
   * Valor inicial utilizado em modo não controlado.
   */
  defaultValue?: string;

  /**
   * Callback disparado a cada alteração de dígito.
   */
  onChange?: (pin: string) => void;

  /**
   * Callback obrigatório executado quando todos os dígitos válidos são preenchidos.
   */
  onComplete: (pin: string) => void;

  /**
   * Indica estado de erro visual (bordas e mensagem em vermelho).
   *
   * @default false
   */
  isError?: boolean;

  /**
   * Mensagem opcional exibida abaixo do componente.
   */
  feedbackMessage?: string;

  /**
   * Tom utilizado pela mensagem de feedback.
   *
   * @default "neutral"
   */
  feedbackType?: InputPinFeedbackType;

  /**
   * Desabilita interações e aplica estilo atenuado.
   *
   * @default false
   */
  disabled?: boolean;

  /**
   * Texto descritivo para leitores de tela.
   */
  accessibilityLabel?: string;

  /**
   * Identificador auxiliar para testes automatizados.
   */
  testID?: string;
}

/**
 * Valores expostos pelo contexto interno usado pelos dígitos/token.
 */
export type InputPinContextValue = {
  /** Variante/fluxo ativo. */
  variant: InputPinVariant;
  /** Número total de caracteres esperados. */
  digitCount: number;
  /** Valor completo atual da entrada. */
  value: string;
  /** Representação por dígito utilizada pelas variantes de caixas. */
  digits: string[];
  /** Índice atualmente focado (-1 quando nenhum dígito está ativo). */
  focusedIndex: number;
  /** Indica se o valor atual atingiu o número esperado de caracteres. */
  isComplete: boolean;
  /** Flag de erro compartilhada entre subcomponentes. */
  isError: boolean;
  /** Indica se o componente está desabilitado. */
  disabled: boolean;
  /** Registra a ref de cada `TextInput` interno para gerenciamento de foco. */
  registerDigitRef: (index: number, ref: TextInput | null) => void;
  /** Foca um dígito específico. */
  focusDigit: (index: number) => void;
  /** Foca o primeiro dígito vazio disponível. */
  focusFirstAvailableDigit: () => void;
  /** Atualiza o caracter digitado em um índice. */
  handleDigitChange: (index: number, char: string) => void;
  /** Remove um caracter e movimenta o foco conforme necessário. */
  handleDigitBackspace: (index: number) => void;
  /** Atualiza o estado quando um dígito recebe foco. */
  handleDigitFocus: (index: number) => void;
  /** Atualiza o estado quando um dígito perde o foco. */
  handleDigitBlur: (index: number) => void;
  /** Substitui o valor completo atual (usado pela variante alfanumérica). */
  replaceValue: (nextValue: string) => void;
};
