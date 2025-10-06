import { createContext } from 'react';
import { ButtonProps as TamaguiButtonProps } from 'tamagui';

/**
 * Variantes de cor para o SnackBar.
 */
export type SnackBarColor = 'neutral' | 'danger' | 'success';

/**
 * Opções de configuração para o Componente DSC SnackBar.
 *
 * Define as propriedades disponíveis para personalizar o comportamento e aparência do SnackBar.
 */
export interface SnackBarProps {
  /**
   * Variante de cor do SnackBar.
   * - `neutral`
   * - `danger`
   * - `success`
   */
  color?: SnackBarColor;

  /**
   * Ícone exibido no SnackBar.
   */
  icon?: TamaguiButtonProps['icon'];

  /**
   * Título exibido no SnackBar.
   */
  title: string;

  /**
   * Texto de descrição opcional.
   */
  description?: string;

  /**
   * Duração em milissegundos para fechamento automático. Defina como 0 para desabilitar o fechamento automático.
   */
  duration?: number;

  /**
   * Callback executado quando o SnackBar é fechado.
   */
  onDismiss?: () => void;
}

/**
 * Interface de contexto para gerenciar o estado do SnackBar.
 */
export interface SnackBarContextType {
  /**
   * Exibe um SnackBar com as opções especificadas.
   */
  showSnackBar: (options: Omit<SnackBarProps, 'onDismiss'>) => void;

  /**
   * Oculta o SnackBar atualmente visível.
   */
  hideSnackBar: () => void;
}

/**
 * Contexto React para funcionalidade do SnackBar.
 * Usado internamente pelo SnackBarProvider e hook useSnackBar.
 */
export const SnackBarContext = createContext<SnackBarContextType | undefined>(
  undefined
);
