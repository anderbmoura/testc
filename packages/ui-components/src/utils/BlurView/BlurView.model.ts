import type { ViewProps, ViewStyle } from 'react-native';

/**
 * Configuração do blur para expo-blur
 */
export interface ExpoBlurConfig {
  intensity: number;
  experimentalBlurMethod?: string;
}

/**
 * Configuração do fallback CSS para web
 */
export interface CSSBlurConfig {
  backdropFilter: string;
  WebkitBackdropFilter: string;
}

/**
 * Props do componente BlurView
 */
export interface BlurViewProps extends ViewProps {
  blurIntensity: number;
  backgroundColor?: string;
  children?: React.ReactNode;
  style?: ViewStyle;
  accessibilityRole?: 'none' | 'image';
  accessibilityLabel?: string;
}

/**
 * Resultado do hook de detecção do expo-blur
 */
export interface UseExpoBlurResult {
  isAvailable: boolean;
  ExpoBlurView: React.ComponentType<{
    intensity?: number;
    style?: object;
  }> | null;
  config: ExpoBlurConfig;
}

/**
 * Constantes de configuração do blur
 */
export const BLUR_CONSTANTS = {
  EXPO_INTENSITY_MULTIPLIER: 10,
  ANDROID_BLUR_METHOD: 'dimezisBlurView',
  DEFAULT_BACKGROUND_COLOR: 'rgba(0, 0, 0, 0.3)',
  ABSOLUTE_POSITION: {
    position: 'absolute' as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
} as const;
