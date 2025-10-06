// Exportações principais
export { CardAccount, CardAccountHeader, CardAccountBody } from './CardAccount';

// Exportações de tipos
export type {
  CardAccountProps,
  CardAccountHeaderProps,
  CardAccountBodyProps,
  CardAccountTheme,
} from './CardAccount.model';

// Exportações de hooks (para uso avançado)
export { useInteractionState } from './hooks/useInteractionState';
export type { InteractionState } from './hooks/useInteractionState';
