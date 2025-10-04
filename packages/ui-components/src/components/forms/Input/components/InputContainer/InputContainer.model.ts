import type { ReactNode } from 'react';

/**
 * Props para o componente InputContainer
 */
export interface InputContainerProps {
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
   * Define se tem erro
   */
  hasError: boolean;

  /**
   * Define se está desabilitado
   */
  disabled: boolean;

  /**
   * Define se tem conteúdo (estado filled)
   */
  isFilled: boolean;

  /**
   * Define se é multilinhas
   */
  _multiline: boolean;

  /**
   * Define se o foco veio de navegação por teclado
   */
  _isKeyboardFocused?: boolean;

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

  /**
   * Callback quando o container recebe foco
   */
  onFocus: () => void;

  /**
   * Callback quando o container perde foco
   */
  onBlur: () => void;
}
