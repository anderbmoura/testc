import type { ReactNode } from 'react';

/**
 * Props para o componente InputMoneyContainer
 */
export interface InputMoneyContainerProps {
  /**
   * Conteúdo do container
   */
  children: ReactNode;

  /**
   * Define se deve mostrar background de hover
   */
  shouldShowHoverBackground: boolean;

  /**
   * Define se está focado
   */
  isFocused: boolean;

  /**
   * Define se o foco veio de navegação por teclado
   */
  isKeyboardFocused?: boolean;

  /**
   * Callback quando o container é pressionado
   */
  onPress: () => void;

  /**
   * Callback quando o mouse entra no container
   */
  onHoverIn: () => void;

  /**
   * Callback quando o mouse sai do container
   */
  onHoverOut: () => void;

  /**
   * Callback quando o container é pressionado (início)
   */
  onPressIn: () => void;

  /**
   * Callback quando o container é liberado
   */
  onPressOut: () => void;
}
