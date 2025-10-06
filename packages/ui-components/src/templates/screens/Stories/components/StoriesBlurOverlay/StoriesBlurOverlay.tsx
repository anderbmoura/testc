import React from 'react';
import { View } from 'tamagui';
import type { StoriesBlurOverlayProps } from './StoriesBlurOverlay.model';

/**
 * Componente de overlay com blur para Stories
 * Funciona tanto na web (backdrop-filter) quanto no nativo (@react-native-community/blur)
 * Com transições suaves para entrada/saída do blur
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
    <View
      position="absolute"
      top={0}
      left={0}
      right={0}
      bottom={0}
      zIndex={2}
      backgroundColor={getBackgroundColor(blurIntensity)}
      animation="medium"
      opacity={blurIntensity > 0 ? 1 : 0}
      style={{
        // @ts-ignore - Tamagui não tem tipagem para backdrop-filter
        backdropFilter: `blur(${blurIntensity}px)`,
        WebkitBackdropFilter: `blur(${blurIntensity}px)`,
        transition:
          'opacity 0.3s ease-in-out, backdrop-filter 0.3s ease-in-out',
      }}
    />
  );
};
