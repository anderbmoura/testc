import { useState } from 'react';

/**
 * Hook para gerenciar estado de foco do CardNotification
 */
export const useCardNotificationInteractionState = () => {
  const [isFocused, setIsFocused] = useState(false);

  return {
    isFocused,
    setIsFocused,
  };
};
