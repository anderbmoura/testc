import React, { createContext, useContext, useMemo, ReactNode } from 'react';
import type { InputInternalState } from '../Input.model';

/**
 * Contexto interno do Input para evitar prop drilling
 */
export interface InputContextValue {
  /** Estado interno atual do Input */
  internalState: InputInternalState;
  /** Se o Input está desabilitado */
  disabled: boolean;
  /** Se o Input tem erro */
  hasError: boolean;
  /** Se o Input está focado */
  isFocused: boolean;
  /** Se o Input tem conteúdo */
  isFilled: boolean;
  /** Se deve mostrar background de hover */
  shouldShowHoverBackground: boolean;
  /** Se é multiline */
  multiline: boolean;
  /** Comprimento máximo permitido */
  maxLength: number;
  /** Comprimento atual do texto */
  currentLength: number;
  /** Valor atual do input */
  value: string;
  /** Handler para mudança de texto */
  onChangeText?: (text: string) => void;
  /** Handler para focar o input */
  focusInput?: () => void;
}

const InputContext = createContext<InputContextValue | null>(null);

/**
 * Props do Provider do InputContext
 */
export interface InputContextProviderProps {
  children: ReactNode;
  value: InputContextValue;
}

/**
 * Provider do InputContext
 *
 * @example
 * ```tsx
 * <InputContextProvider value={contextValue}>
 *   <InputContainer>
 *     <InputTextField />
 *   </InputContainer>
 * </InputContextProvider>
 * ```
 */
export const InputContextProvider: React.FC<InputContextProviderProps> = ({
  children,
  value,
}) => {
  const memoizedValue = useMemo(
    () => value,
    [
      value.internalState,
      value.hasError,
      value.isFocused,
      value.isFilled,
      value.shouldShowHoverBackground,
      value.disabled,
      value.multiline,
      value.maxLength,
      value.currentLength,
      value.value,
    ]
  );

  return (
    <InputContext.Provider value={memoizedValue}>
      {children}
    </InputContext.Provider>
  );
};

/**
 * Hook para usar o InputContext
 *
 * @throws Error quando usado fora do InputContextProvider
 *
 * @example
 * ```tsx
 * const { internalState, disabled } = useInputContext();
 * ```
 */
export const useInputContext = (): InputContextValue => {
  const context = useContext(InputContext);

  if (context === null) {
    throw new Error(
      'useInputContext must be used within an InputContextProvider. ' +
        'Make sure the component is wrapped with <InputContextProvider>.'
    );
  }

  return context;
};
