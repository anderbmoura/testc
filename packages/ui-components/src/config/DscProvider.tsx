import React from 'react';
import { TamaguiProvider, type TamaguiProviderProps } from 'tamagui';
import { dscConfig } from './tamagui.config';
import { SnackBarProvider } from '../components/SnackBar';

type DscProviderProps = TamaguiProviderProps & {
  children: React.ReactNode;
  /**
   * Se true, o SnackBarProvider é incluído automaticamente.
   * @default true
   */
  includeSnackBarProvider?: boolean;
};

/**
 * Provider principal da biblioteca DSC que configura o Tamagui com as configurações personalizadas.
 *
 * @param includeSnackBarProvider - Se true, o SnackBarProvider é incluído automaticamente.
 *
 * @example
 * ```tsx
 * // Uso básico (com SnackBarProvider incluído por padrão)
 * function App() {
 *   return (
 *     <DscProvider>
 *       <YourApp />
 *     </DscProvider>
 *   );
 * }
 * ```
 *
 * @example
 * ```tsx
 * // Sem SnackBarProvider incluído por padrão
 * function App() {
 *   return (
 *     <DscProvider includeSnackBarProvider={false}>
 *       <SnackBarProvider>
 *         <YourApp />
 *       </SnackBarProvider>
 *     </DscProvider>
 *   );
 * }
 * ```
 *
 */
export function DscProvider({
  children,
  includeSnackBarProvider = true,
  ...props
}: DscProviderProps) {
  return (
    <TamaguiProvider config={dscConfig} {...props}>
      {includeSnackBarProvider ? (
        <SnackBarProvider>{children}</SnackBarProvider>
      ) : (
        children
      )}
    </TamaguiProvider>
  );
}
