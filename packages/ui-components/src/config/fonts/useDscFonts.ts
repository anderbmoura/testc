import { Platform } from 'react-native';
import { useEffect, useState } from 'react';
import { dscFonts } from './fontLoader';

let useFonts: ((fonts: Record<string, any>) => [boolean, Error | null]) | null;
try {
  const ExpoFont = require('expo-font');
  useFonts = ExpoFont.useFonts;
} catch (error) {
  console.error('Erro ao carregar a biblioteca expo-font:', error);
  useFonts = null;
}

/**
 * Hook para carregar fontes DSC
 * Funciona automaticamente em Expo, Repack e Web
 * @returns {boolean} Indica se as fontes foram carregadas
 */
export function useDscFonts() {
  const [fontsLoaded, setFontsLoaded] = useState(Platform.OS === 'web');

  const isExpo = (() => {
    try {
      require('expo-constants');
      return true;
    } catch {
      return false;
    }
  })();

  let expoFontsLoaded = true;
  if (isExpo && useFonts) {
    [expoFontsLoaded] = useFonts(dscFonts);
  }

  useEffect(() => {
    if (Platform.OS === 'web') {
      setFontsLoaded(true);
    } else if (isExpo && useFonts) {
      setFontsLoaded(expoFontsLoaded);
    } else {
      // Para repack, simulação de carregamento, assumindo que as fontes foram registradas via react-native link
      // Isso é necessário para evitar que o hook falhe em ambientes que não suportam expo
      setTimeout(() => setFontsLoaded(true), 100);
    }
  }, [isExpo, expoFontsLoaded]);

  return fontsLoaded;
}
