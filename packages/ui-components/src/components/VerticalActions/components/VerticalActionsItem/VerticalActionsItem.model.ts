import React from 'react';
import { BadgeTextProps } from '../../../BadgeText';

/**
 * Propriedades do componente VerticalActionsItem.
 *
 * @deprecated Este componente está obsoleto e será removido em uma versão futura.
 * Use o componente `ListItem` como alternativa.
 */
export interface VerticalActionsItemProps {
  /**
   * Chave única para o componente.
   */
  id: string;

  /**
   * Texto principal do componente.
   */
  text1: string;

  /**
   * Texto secundário do componente. Exibido à direita do text1.
   */
  text2?: string;

  /**
   * Label exibido acima do text1.
   */
  label1?: string;

  /**
   * Label exibido abaixo do text1.
   */
  label2?: string;

  /**
   * Badge exibida entre o text2 e o rightSlot.
   */
  badge?: BadgeTextProps;

  /**
   * Slot para um componente customizado (ex.: ícone). Exibido à esquerda do text1.
   */
  leftSlot?: React.ReactNode;

  /**
   * Slot para um componente customizado (ex.: ícone). Exibido à direita do badge.
   *
   * Se não fornecido, um ícone padrão NavArrowRight é usado.
   *
   * Passe null explicitamente para não mostrar nenhum ícone.
   */
  rightSlot?: React.ReactNode | null;

  /**
   * Função a ser chamada quando o componente é pressionado.
   */
  onPress?: () => void;

  /**
   * Se true, o componente é visualmente desativado e não pode ser pressionado.
   */
  disabled?: boolean;
}
