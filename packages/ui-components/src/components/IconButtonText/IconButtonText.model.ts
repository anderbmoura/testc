import React from 'react';
import { StackProps, ImageProps } from 'tamagui';
import { BadgeTextColor } from '../BadgeText/BadgeText.model';

/**
 * Variantes visuais para o IconButtonText.
 */
export type IconButtonTextVariant = 'default' | 'danger' | 'image';

/**
 * Opções de configuração para o Componente DSC IconButtonText.
 *
 * Define as propriedades disponíveis para personalizar o comportamento e aparência do botão.
 */
export interface IconButtonTextProps {
  /**
   * Texto exibido abaixo do ícone/imagem.
   */
  children: React.ReactNode;

  /**
   * Variante visual do botão que determina o estilo e comportamento.
   * - `default`: Botão de ícone padrão
   * - `danger`: Aplica estilo de tema de perigo
   * - `image`: Usa uma imagem em vez de um ícone
   */
  variant?: IconButtonTextVariant;

  /**
   * Ícone exibido no botão.
   * Usado quando variant é 'default' ou 'danger'.
   */
  icon?: React.ReactNode;

  /**
   * Fonte da imagem exibida no botão.
   * Usado quando variant é 'image'.
   */
  image?: ImageProps['source'];

  /**
   * Largura da imagem em pixels.
   * Usado quando variant é 'image'.
   */
  imageWidth?: number;

  /**
   * Altura da imagem em pixels.
   * Usado quando variant é 'image'.
   */
  imageHeight?: number;

  /**
   * Desabilita a interação e aplica estilo desabilitado.
   */
  disabled?: boolean;

  /**
   * Exibe um spinner de carregamento no lugar do ícone/imagem
   * e aplica estilo desabilitado.
   */
  loading?: boolean;

  /**
   * Aplica estilo alternativo para fundos cinzas.
   * Altera o fundo do container e comportamento da borda para melhor contraste.
   */
  onGrayBg?: boolean;

  /**
   * Callback executado quando o botão é pressionado.
   */
  onPress?: StackProps['onPress'];

  /**
   * Texto do badge exibido flutuando sobre o container.
   * Quando definido, um badge pequeno será exibido na parte superior direita.
   */
  badgeText?: string;

  /**
   * Cor do badge.
   * - `highlight`: Estilo de destaque (padrão)
   * - `danger`: Estilo de perigo
   */
  badgeColor?: BadgeTextColor;

  /**
   * Propriedades adicionais passadas para o componente container.
   */
  touchableProps?: Omit<StackProps, 'onPress' | 'disabled'>;
}
