import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { STORIES_CONFIG } from '../Stories.config';

/**
 * Hook seguro para acessar safe area insets
 * Retorna valores padrão caso o contexto não esteja disponível (ex: Storybook)
 */
export const useSafeStoriesInsets = () => {
  try {
    return useSafeAreaInsets();
  } catch {
    return STORIES_CONFIG.SAFE_AREA_FALLBACK;
  }
};

/**
 * Hook para calcular o padding superior com safe area
 */
export const useStoriesTopPadding = () => {
  const insets = useSafeStoriesInsets();
  return Math.max(
    insets?.top || 0,
    STORIES_CONFIG.LAYOUT.MIN_SAFE_AREA_PADDING
  );
};
