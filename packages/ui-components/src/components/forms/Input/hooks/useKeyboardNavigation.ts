import { useState, useEffect } from 'react';
import { Platform } from 'react-native';

/**
 * Hook para detectar se a navegação está sendo feita via teclado
 */
export const useKeyboardNavigation = () => {
  const [isKeyboardNavigating, setIsKeyboardNavigating] = useState(false);

  useEffect(() => {
    if (Platform.OS !== 'web') return;

    const handleKeyDown = () => {
      setIsKeyboardNavigating(true);
    };

    const handleMouseDown = () => {
      setIsKeyboardNavigating(false);
    };

    // @ts-ignore - window exists in web environment
    if (typeof window !== 'undefined') {
      // @ts-ignore
      window.addEventListener('keydown', handleKeyDown);
      // @ts-ignore
      window.addEventListener('mousedown', handleMouseDown);

      return () => {
        // @ts-ignore
        window.removeEventListener('keydown', handleKeyDown);
        // @ts-ignore
        window.removeEventListener('mousedown', handleMouseDown);
      };
    }
  }, []);

  return { isKeyboardNavigating };
};
