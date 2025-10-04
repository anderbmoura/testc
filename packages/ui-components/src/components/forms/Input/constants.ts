/**
 * Limite padrão quando maxLength não é especificado.
 */
export const DEFAULT_MAX_LENGTH = 999;

/**
 * Configurações de altura do container
 */
export const CONTAINER_HEIGHT = {
  MIN_HEIGHT: 48,
} as const;

/**
 * Configurações de bordas
 */
export const BORDER = {
  DEFAULT_WIDTH: 1,
  FOCUSED_WIDTH: 2,
} as const;

/**
 * Estados do container do Input
 */
export const INPUT_STATES = {
  DEFAULT: 'default',
  HOVER: 'hover',
  FOCUSED: 'focused',
  FILLED: 'filled',
  ERROR: 'error',
  ERROR_HOVER: 'error-hover',
  ERROR_FOCUSED: 'error-focused',
  DISABLED: 'disabled',
} as const;

/**
 * Nomes de display para identificação de subcomponentes
 */
export const COMPONENT_DISPLAY_NAMES = {
  ERROR: 'InputErrorComponent',
  SUPPORTING_TEXT: 'InputSupportingTextComponent',
  COUNTER: 'InputCounterComponent',
  CLEAR_BUTTON: 'InputClearButtonComponent',
} as const;
