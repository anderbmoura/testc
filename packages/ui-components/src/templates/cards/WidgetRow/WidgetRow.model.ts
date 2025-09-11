import React from 'react';
import { ViewProps } from 'react-native';
import type { CardWidgetProps } from '../../../components/CardWidget/CardWidget.model';

/**
 * Opções de configuração para o Template DSC WidgetRow.
 */
export interface WidgetRowProps extends Omit<ViewProps, 'children'> {
  /**
   * Exatamente 2 componentes CardWidget a serem exibidos em linha.
   * Ambos os widgets terão a mesma largura automaticamente.
   */
  children: [
    React.ReactElement<CardWidgetProps>,
    React.ReactElement<CardWidgetProps>,
  ];
}
