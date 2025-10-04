import { useCallback } from 'react';
import { CardWidgetRemoveButtonProps } from '../CardWidgetRemoveButton.model';

/**
 * Hook para gerenciar a lógica de interação do botão de remoção.
 */
export const useCardWidgetRemoveButton = ({
  onPress,
}: Pick<CardWidgetRemoveButtonProps, 'onPress'>) => {
  /**
   * Handler otimizado para o evento de pressionar o botão.
   * Usa useCallback para evitar re-renders desnecessários.
   */
  const handlePress = useCallback(() => {
    if (onPress) {
      onPress();
    }
  }, [onPress]);

  /**
   * Determina se o botão deve estar habilitado.
   * Um botão sem callback não deve ser interativo.
   */
  const isEnabled = Boolean(onPress);

  return {
    handlePress,
    isEnabled,
  };
};
