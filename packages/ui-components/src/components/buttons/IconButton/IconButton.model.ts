import React from 'react';
import { StackProps } from 'tamagui';

/**
 * Tipos visuais para o IconButton.
 */
export type IconButtonType = 'plain' | 'chromeless' | 'outline';

/**
 * Tamanhos disponíveis para o IconButton.
 */
export type IconButtonSize = 'large' | 'standard' | 'small' | 'tiny';

/**
 * Cores disponíveis para o IconButton.
 */
export type IconButtonColor = 'highlight' | 'danger' | 'white';

/**
 * Opções de configuração para o Componente DSC IconButton.
 *
 * Define as propriedades disponíveis para personalizar o comportamento e aparência do IconButton.
 */
export interface IconButtonProps {
  /**
   * Tipo visual do botão que determina o estilo aplicado.
   * - `plain`: Botão preenchido (padrão)
   * - `chromeless`: Botão sem fundo
   * - `outline`: Botão com borda
   * @default 'plain'
   */
  type?: IconButtonType;

  /**
   * Tamanho do botão.
   * - `large`
   * - `standard`
   * - `small`
   * - `tiny`
   * @default 'large'
   */
  size?: IconButtonSize;

  /**
   * Cor do botão.
   * - `highlight`
   * - `danger`
   * - `white`
   * @default 'highlight'
   */
  color?: IconButtonColor;

  /**
   * Ícone exibido no botão.
   */
  icon: React.ReactNode;

  /**
   * Define se o botão está desabilitado.
   * @default false
   */
  disabled?: boolean;

  /**
   * Define se o botão está em estado de carregamento.
   * Quando true, o botão fica desabilitado e exibe um Spinner no lugar do ícone.
   * @default false
   */
  loading?: boolean;

  /**
   * Callback executado quando o botão é pressionado.
   */
  onPress?: () => void;

  /**
   * Accessibility label para leitores de tela.
   */
  accessibilityLabel?: string;

  /**
   * Propriedades adicionais para o container touchable.
   */
  touchableProps?: Omit<StackProps, 'onPress' | 'disabled'>;
}
