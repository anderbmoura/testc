import React from 'react';
import type { StoriesBlurOverlayProps } from './StoriesBlurOverlay.model';
import { BlurView } from './BlurView';

/**
 * Componente de overlay com blur para Stories
 * Funciona tanto na web (backdrop-filter) quanto no nativo (@react-native-community/blur)
 *
 * @param blurIntensity - Intensidade do blur (0-10)
 */
export const StoriesBlurOverlay: React.FC<StoriesBlurOverlayProps> = ({
  blurIntensity,
}) => {
  // Mapear a intensidade para a cor de fundo adequada
  const getBackgroundColor = (intensity: number) => {
    if (intensity === 0) return 'rgba(0, 0, 0, 0)';
    if (intensity <= 2) return 'rgba(0, 0, 0, 0.1)';
    if (intensity <= 4) return 'rgba(0, 0, 0, 0.15)';
    if (intensity <= 6) return 'rgba(0, 0, 0, 0.2)';
    if (intensity <= 8) return 'rgba(0, 0, 0, 0.25)';
    return 'rgba(0, 0, 0, 0.3)';
  };

  return (
    <BlurView
      blurIntensity={blurIntensity}
      backgroundColor={getBackgroundColor(blurIntensity)}
      style={{ zIndex: 2 }}
    />
  );
};
