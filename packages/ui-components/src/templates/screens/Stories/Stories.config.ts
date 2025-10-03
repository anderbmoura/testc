/**
 * Configurações padrão para o componente Stories
 */
export const STORIES_CONFIG = {
  /**
   * Duração padrão de cada item em milissegundos
   */
  DEFAULT_DURATION: 8000,

  /**
   * Intensidade padrão do blur
   */
  DEFAULT_BLUR_INTENSITY: 5,

  /**
   * Configurações de gestos de swipe
   */
  SWIPE: {
    /**
     * Velocidade mínima para registrar um swipe
     */
    MIN_VELOCITY: 500,

    /**
     * Distância mínima para registrar um swipe
     */
    MIN_DISTANCE: 50,
  },

  /**
   * Configurações de layout e posicionamento
   */
  LAYOUT: {
    /**
     * Padding mínimo para a safe area
     */
    MIN_SAFE_AREA_PADDING: 16,

    /**
     * Z-index do layer de gestos
     */
    GESTURE_LAYER_Z_INDEX: 3,
  },

  /**
   * Configurações de gestos de pressão
   */
  PRESS: {
    /**
     * Duração mínima para registrar um long press (0 = instantâneo)
     */
    MIN_DURATION: 0,
  },

  /**
   * Fallback para safe area insets quando não disponível
   */
  SAFE_AREA_FALLBACK: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
} as const;

/**
 * Tipo que representa as configurações do Stories
 */
export type StoriesConfig = typeof STORIES_CONFIG;
