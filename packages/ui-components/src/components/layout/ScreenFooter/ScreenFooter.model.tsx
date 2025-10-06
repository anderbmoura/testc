import React from 'react';

/**
 * Variantes disponíveis para o ScreenFooter.
 */
export type ScreenFooterVariant = 'button' | 'iconButton';

/**
 * Props específicas para variant 'button'.
 */
interface ButtonVariantProps {
  /**
   * Variante do footer para layout vertical de botões.
   */
  variant: 'button';

  /**
   * Componentes Button que serão exibidos verticalmente.
   */
  children: React.ReactElement | React.ReactElement[];
}

/**
 * Props específicas para variant 'iconButton'.
 */
interface IconButtonVariantProps {
  /**
   * Variante do footer para layout horizontal de ícones (máximo 2).
   */
  variant: 'iconButton';

  /**
   * Componentes IconButton que serão exibidos horizontalmente (máximo 2).
   */
  children: React.ReactElement | React.ReactElement[];
}

/**
 * Props padrão quando variant não é especificada (assume 'button').
 */
interface DefaultVariantProps {
  /**
   * Variante padrão do footer (button).
   * @default 'button'
   */
  variant?: undefined;

  /**
   * Componentes Button que serão exibidos verticalmente.
   */
  children: React.ReactElement | React.ReactElement[];
}

/**
 * Opções de configuração para o Componente DSC ScreenFooter.
 *
 * Usa tipagem discriminada para garantir que:
 * - variant='button' aceite apenas componentes Button
 * - variant='iconButton' aceite apenas componentes IconButton (máximo 2)
 */
export type ScreenFooterProps =
  | ButtonVariantProps
  | IconButtonVariantProps
  | DefaultVariantProps;
