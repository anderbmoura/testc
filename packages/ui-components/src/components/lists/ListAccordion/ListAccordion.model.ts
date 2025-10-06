import type { ViewProps } from 'tamagui';

export interface ListAccordionProps extends ViewProps {
  /** Texto principal exibido à esquerda */
  textLeft: string;

  /** Texto secundário exibido à direita */
  textRight?: string;

  /** Estado do accordion - se está colapsado ou expandido */
  collapsed?: boolean;

  /** Se o componente está desabilitado */
  disabled?: boolean;

  /** Callback executado quando o estado do accordion muda */
  onChange?: (value: boolean) => void;
}
