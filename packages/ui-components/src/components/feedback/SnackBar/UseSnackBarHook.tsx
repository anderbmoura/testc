import { useContext } from 'react';
import { SnackBarContext } from './SnackBar.model';

/**
 * Hook DSC useSnackBar
 *
 * Hook para acessar a funcionalidade do SnackBar dentro de componentes.
 * Deve ser usado dentro de um SnackBarProvider.
 *
 * @returns Objeto contendo as funções showSnackBar e hideSnackBar
 * ```tsx
 * const { showSnackBar, hideSnackBar } = useSnackBar();
 *
 * showSnackBar({
 *   title: 'Sucesso!',
 *   description: 'Operação concluída',
 *   color: 'success',
 *   icon: CheckIcon
 * });
 * ```
 */
export function useSnackBar() {
  const context = useContext(SnackBarContext);
  if (!context) {
    throw new Error('useSnackBar must be used within a SnackBarProvider');
  }
  return context;
}
