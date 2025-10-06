import React from 'react';
import { Platform, ViewStyle } from 'react-native';
import { View } from 'tamagui';

interface BlurViewProps {
  blurIntensity: number;
  backgroundColor?: string;
  children?: React.ReactNode;
  style?: ViewStyle;
}

/**
 * Componente BlurView que funciona tanto na web quanto no nativo
 * - Usa expo-blur que tem suporte nativo para web e mobile
 * - Fallback para backdrop-filter CSS se expo-blur não estiver disponível
 */
export const BlurView: React.FC<BlurViewProps> = ({
  blurIntensity,
  backgroundColor = 'rgba(0, 0, 0, 0.3)',
  children,
  style,
}) => {
  // Tentar usar expo-blur (funciona tanto na web quanto no nativo)
  try {
    const { BlurView: ExpoBlurView } = require('expo-blur');

    return (
      <ExpoBlurView
        intensity={blurIntensity * 10} // expo-blur usa escala 0-100
        style={[
          {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor,
          },
          style,
        ]}
      >
        {children}
      </ExpoBlurView>
    );
  } catch (_error) {
    console.warn('expo-blur not found. Using CSS backdrop-filter fallback.');
  }

  // Fallback para CSS backdrop-filter na web ou View simples no nativo
  return (
    <View
      style={[
        {
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor,
          ...(Platform.OS === 'web' && {
            backdropFilter: `blur(${blurIntensity}px)`,
            WebkitBackdropFilter: `blur(${blurIntensity}px)`,
          }),
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};
