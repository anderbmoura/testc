import { useCallback } from 'react';

/**
 * Propriedades para o hook useActionsButtonRowInteractions.
 */
export interface UseActionsButtonRowInteractionsProps {
  /**
   * Callback executado quando o botão de ação é pressionado.
   */
  onButtonAction?: () => void;

  /**
   * Callback executado quando o botão de toggle é pressionado.
   */
  onToggle: () => void;
}

/**
 * Valores retornados pelo hook useActionsButtonRowInteractions.
 */
export interface UseActionsButtonRowInteractionsReturn {
  /**
   * Handler para o botão de ação do header.
   */
  handleButtonAction: () => void;

  /**
   * Handler para o botão de toggle.
   */
  handleToggle: () => void;
}

/**
 * Hook customizado para gerenciar as interações do ActionsButtonRow.
 * Centraliza a lógica de callbacks e handlers.
 */
export const useActionsButtonRowInteractions = ({
  onButtonAction,
  onToggle,
}: UseActionsButtonRowInteractionsProps): UseActionsButtonRowInteractionsReturn => {
  const handleButtonAction = useCallback(() => {
    onButtonAction?.();
  }, [onButtonAction]);

  const handleToggle = useCallback(() => {
    onToggle();
  }, [onToggle]);

  return {
    handleButtonAction,
    handleToggle,
  };
};
