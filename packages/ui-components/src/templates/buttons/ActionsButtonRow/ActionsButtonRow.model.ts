import React from 'react';
import { ViewProps } from 'react-native';
import type { ButtonRowProps } from '../ButtonRow/ButtonRow.model';

/**
 * Opções de configuração para o Template DSC ActionsButtonRow.
 */
export interface ActionsButtonRowProps extends Omit<ViewProps, 'children'> {
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
   * Número inicial de ButtonRow a serem exibidos.
   * Se não fornecido, todos os ButtonRow serão exibidos.
   */
  initialRowNumber?: number;

  /**
   * Componentes ButtonRow a serem exibidos organizados verticalmente.
   */
  children:
    | React.ReactElement<ButtonRowProps>
    | React.ReactElement<ButtonRowProps>[];
}
