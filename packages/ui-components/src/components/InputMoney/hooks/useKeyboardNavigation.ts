import { useState, useEffect } from 'react';
import { Platform } from 'react-native';

/**
 * Hook para detectar se o usuário está navegando por teclado (foco por acessibilidade)
 *
 * No web: sempre permite foco visível
 * No mobile: só mostra foco se for detectado uso de teclado para acessibilidade
 */
export const useKeyboardNavigation = () => {
  const [isKeyboardNavigating, setIsKeyboardNavigating] = useState(() => {
    // Na web, sempre consideramos que pode haver navegação por teclado
    return Platform.OS === 'web';
  });

  const [hasKeyboardConnected, setHasKeyboardConnected] = useState(() => {
    return Platform.OS === 'web';
  });

  useEffect(() => {
    // Na web, sempre permitimos foco visível
    if (Platform.OS === 'web') {
      setIsKeyboardNavigating(true);
      setHasKeyboardConnected(true);
      return;
    }

    // No mobile, assumimos que não há navegação por teclado por padrão
    // A detecção de teclado físico em React Native é limitada
    // Por enquanto, mantemos false para mobile
    setIsKeyboardNavigating(false);
    setHasKeyboardConnected(false);
  }, []);

  return {
    isKeyboardNavigating,
    hasKeyboardConnected,
  };
};
