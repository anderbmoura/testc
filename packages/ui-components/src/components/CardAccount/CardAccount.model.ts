import React from 'react';
import { StackProps } from 'tamagui';

/**
 * Temas disponíveis para o CardAccount.
 */
export type CardAccountTheme =
  | 'highlight'
  | 'danger'
  | 'success'
  | 'warning'
  | 'info';

/**
 * Propriedades para o CardAccountHeader.
 */
export interface CardAccountHeaderProps {
  /**
   * Texto do tipo de conta.
   */
  accountType: string;

  /**
   * Número da conta.
   */
  accountNumber: string;

  /**
   * Função chamada ao pressionar o header.
   */
  onPress?: () => void;
}

/**
 * Propriedades para o CardAccountBody.
 */
export interface CardAccountBodyProps {
  /**
   * Valor do saldo.
   */
  balance: string;

  /**
   * Ícone opcional de suporte para exibir ao lado do texto de suporte.
   */
  supportIcon?: React.ReactNode;

  /**
   * Texto de suporte opcional.
   */
  supportText?: string;

  /**
   * Função chamada ao pressionar o body.
   */
  onPress?: () => void;
}

/**
 * Opções de configuração para o Componente DSC CardAccount.
 *
 * Define as propriedades disponíveis para personalizar o comportamento e aparência do CardAccount.
 */
export interface CardAccountProps extends Omit<StackProps, 'theme'> {
  /**
   * Tema do cartão.
   * @default 'highlight'
   */
  theme?: CardAccountTheme;

  /**
   * Propriedades do header.
   */
  headerProps?: CardAccountHeaderProps;

  /**
   * Propriedades do body.
   */
  bodyProps?: CardAccountBodyProps;
}
