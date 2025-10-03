import { useMemo } from 'react';
import { Platform } from 'react-native';
import type { UseExpoBlurResult } from '../BlurView.model';
import { BLUR_CONSTANTS } from '../BlurView.model';

/**
 * Hook para detecção e configuração do expo-blur
 *
 * @param blurIntensity - Intensidade do blur (0-10)
 * @returns Resultado com disponibilidade, componente e configuração
 */
export function useExpoBlur(blurIntensity: number): UseExpoBlurResult {
  return useMemo(() => {
    try {
      const { BlurView: ExpoBlurView } = require('expo-blur');

      const optimizedConfig = {
        intensity: blurIntensity * BLUR_CONSTANTS.EXPO_INTENSITY_MULTIPLIER,
        ...(Platform.OS === 'android' && {
          experimentalBlurMethod: BLUR_CONSTANTS.ANDROID_BLUR_METHOD,
        }),
      };

      return {
        isAvailable: true,
        ExpoBlurView,
        config: optimizedConfig,
      };
    } catch (error) {
      if (__DEV__) {
        console.warn('[BlurView] expo-blur not available:', error);
      }

      return {
        isAvailable: false,
        ExpoBlurView: null,
        config: {
          intensity: 0,
        },
      };
    }
  }, [blurIntensity]);
}
