import React from 'react';
import { ViewProps } from 'react-native';
import type { WidgetRowProps } from '../WidgetRow/WidgetRow.model';

/**
 * Opções de configuração para o Template DSC ContentWidgets.
 */
export interface ContentWidgetsProps extends Omit<ViewProps, 'children'> {
  /**
   * Título exibido na parte superior esquerda.
   */
  title?: string;

  /**
   * Nome do botão de ação exibido na parte superior direita.
   */
  buttonActionName?: string;

  /**
   * Callback executado quando o botão de ação é pressionado.
   */
  onButtonAction?: () => void;

  /**
   * Componentes WidgetRow a serem exibidos organizados verticalmente.
   */
  children:
    | React.ReactElement<WidgetRowProps>
    | React.ReactElement<WidgetRowProps>[];
}
