import { useRef, useCallback } from 'react';
import { Animated } from 'react-native';

/**
 * Hook personalizado para criar animação de shake
 * @returns {Object} Objeto contendo o valor animado e a função para triggerar o shake
 */
export const useShakeAnimation = () => {
  const shakeAnimation = useRef(new Animated.Value(0)).current;

  const shake = useCallback(() => {
    // Reset da animação
    shakeAnimation.setValue(0);

    // Sequência de shake: esquerda -> direita -> esquerda -> centro
    Animated.sequence([
      Animated.timing(shakeAnimation, {
        toValue: -5,
        duration: 50,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: 5,
        duration: 50,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: -3,
        duration: 50,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: 3,
        duration: 50,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: 0,
        duration: 50,
        useNativeDriver: true,
      }),
    ]).start();
  }, [shakeAnimation]);

  return {
    shakeAnimation,
    shake,
  };
};
