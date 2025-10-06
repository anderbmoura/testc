import { useState, useMemo } from 'react';
import React from 'react';
import type { ButtonRowProps } from '../../ButtonRow/ButtonRow.model';

/**
 * Propriedades para o hook useActionsButtonRowState.
 */
export interface UseActionsButtonRowStateProps {
  /**
   * Número inicial de ButtonRow a serem exibidos.
   */
  initialRowNumber?: number;

  /**
   * Children do componente (ButtonRows).
   */
  children:
    | React.ReactElement<ButtonRowProps>
    | React.ReactElement<ButtonRowProps>[];
}

/**
 * Valores retornados pelo hook useActionsButtonRowState.
 */
export interface UseActionsButtonRowStateReturn {
  /**
   * Estado atual de expansão.
   */
  showAll: boolean;

  /**
   * Altura do conteúdo para animação.
   */
  contentHeight: number;

  /**
   * Array de children convertido.
   */
  childrenArray: React.ReactElement<ButtonRowProps>[];

  /**
   * Total de rows.
   */
  totalRows: number;

  /**
   * Indica se deve mostrar o botão de toggle.
   */
  shouldShowToggleButton: boolean;

  /**
   * Rows iniciais a serem exibidas.
   */
  initialRows: React.ReactElement<ButtonRowProps>[];

  /**
   * Rows adicionais para expansão.
   */
  additionalRows: React.ReactElement<ButtonRowProps>[];

  /**
   * Função para alternar o estado de expansão.
   */
  handleToggleRows: () => void;

  /**
   * Função para capturar o layout do conteúdo.
   */
  handleContentLayout: (event: {
    nativeEvent: { layout: { height: number } };
  }) => void;

  /**
   * Função para atualizar a altura do conteúdo.
   */
  setContentHeight: (height: number) => void;
}

/**
 * Hook customizado para gerenciar o estado do ActionsButtonRow.
 * Controla a lógica de expansão/contração e organização dos ButtonRows.
 */
export const useActionsButtonRowState = ({
  initialRowNumber,
  children,
}: UseActionsButtonRowStateProps): UseActionsButtonRowStateReturn => {
  const [showAll, setShowAll] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);

  const childrenArray = React.Children.toArray(
    children
  ) as React.ReactElement<ButtonRowProps>[];
  const totalRows = childrenArray.length;

  const shouldShowToggleButton = useMemo(() => {
    return initialRowNumber !== undefined && totalRows > initialRowNumber;
  }, [initialRowNumber, totalRows]);

  const initialRows = useMemo(() => {
    if (!shouldShowToggleButton) {
      return childrenArray;
    }
    return childrenArray.slice(0, initialRowNumber);
  }, [childrenArray, shouldShowToggleButton, initialRowNumber]);

  const additionalRows = useMemo(() => {
    if (!shouldShowToggleButton) {
      return [];
    }
    return childrenArray.slice(initialRowNumber);
  }, [childrenArray, shouldShowToggleButton, initialRowNumber]);

  const handleToggleRows = () => {
    setShowAll(!showAll);
  };

  const handleContentLayout = (event: {
    nativeEvent: { layout: { height: number } };
  }) => {
    const { height } = event.nativeEvent.layout;
    if (height > 0) {
      setContentHeight(height);
    }
  };

  return {
    showAll,
    contentHeight,
    childrenArray,
    totalRows,
    shouldShowToggleButton,
    initialRows,
    additionalRows,
    handleToggleRows,
    handleContentLayout,
    setContentHeight,
  };
};
