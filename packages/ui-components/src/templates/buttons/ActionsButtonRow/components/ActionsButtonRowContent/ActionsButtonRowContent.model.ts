import React from 'react';
import type { ButtonRowProps } from '../../../ButtonRow/ButtonRow.model';

/**
 * Propriedades para o componente ActionsButtonRowContent.
 */
export interface ActionsButtonRowContentProps {
  /**
   * Array de componentes ButtonRow iniciais a serem exibidos.
   */
  initialRows: React.ReactElement<ButtonRowProps>[];

  /**
   * Array de componentes ButtonRow adicionais para expansão.
   */
  additionalRows: React.ReactElement<ButtonRowProps>[];

  /**
   * Estado atual de expansão.
   */
  showAll: boolean;

  /**
   * Altura do conteúdo para animação.
   */
  contentHeight: number;

  /**
   * Indica se deve mostrar o botão de toggle.
   */
  shouldShowToggleButton: boolean;

  /**
   * Callback para capturar layout do conteúdo adicional.
   */
  onContentLayout: (event: any) => void;
}
