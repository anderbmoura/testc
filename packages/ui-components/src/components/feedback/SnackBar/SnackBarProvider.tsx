import { useState } from 'react';
import { SnackBar } from './SnackBar';
import { SnackBarProps, SnackBarContext } from './SnackBar.model';

/**
 * Componente DSC SnackBarProvider
 *
 * @param children - Componentes React que terão acesso à funcionalidade do SnackBar
 * ```tsx
 * <SnackBarProvider>
 *   <App />
 * </SnackBarProvider>
 * ```
 */
export function SnackBarProvider({ children }: { children: React.ReactNode }) {
  const [snackBar, setSnackBar] = useState<SnackBarProps | null>(null);

  const showSnackBar = (options: Omit<SnackBarProps, 'onDismiss'>) => {
    setSnackBar(options);
  };

  const hideSnackBar = () => {
    setSnackBar(null);
  };

  return (
    <SnackBarContext.Provider value={{ showSnackBar, hideSnackBar }}>
      {children}
      {snackBar && <SnackBar {...snackBar} onDismiss={hideSnackBar} />}
    </SnackBarContext.Provider>
  );
}
