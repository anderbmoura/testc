import React from 'react';
import type { ViewProps } from 'react-native';

/**
 * Tamanho do componente ListHeading.
 */
export type ListHeadingSize = 'standard' | 'small';

/**
 * Configuração visual do componente ListHeading.
 */
export type ListHeadingConfiguration = 'simple' | 'button' | 'iconButton';

/**
 * Opções de configuração para o Componente DSC ListHeading.
 *
 * Define as propriedades disponíveis para personalizar o comportamento e aparência do ListHeading.
 */
export interface ListHeadingProps extends Omit<ViewProps, 'onPress'> {
  /**
   * Título principal exibido no cabeçalho.
   */
  title: string;

  /**
   * Tamanho do componente.
   * - `standard`: Tamanho padrão com tipografia maior
   * - `small`: Tamanho reduzido com tipografia menor
   * @default 'standard'
   */
  size?: ListHeadingSize;

  /**
   * Configuração visual do componente.
   * - `simple`: Apenas título sem elementos interativos
   * - `button`: Título com botão de texto
   * - `iconButton`: Título com botão de ícone
   * @default 'simple'
   */
  configuration?: ListHeadingConfiguration;

  /**
   * Texto do botão (usado apenas quando configuration='button').
   */
  buttonText?: string;

  /**
   * Ícone personalizado para o botão (usado apenas quando configuration='iconButton').
   * Se não fornecido, usa o ícone padrão (seta para direita).
   */
  buttonIcon?: React.ReactNode;

  /**
   * Função chamada quando o botão é pressionado.
   * Aplicável apenas quando configuration='button' ou configuration='iconButton'.
   */
  onButtonPress?: () => void;
}
