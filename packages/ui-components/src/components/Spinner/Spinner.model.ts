/**
 * Variantes visuais para o spinner.
 */
export type SpinnerVariant = 'highlight' | 'neutral' | 'danger';

/**
 * Tamanhos disponíveis para o spinner.
 */
export type SpinnerSize = 'small' | 'large';

/**
 * Opções de configuração para o Componente DSC Spinner.
 *
 * Define as propriedades disponíveis para personalizar a aparência do spinner.
 */
export interface SpinnerProps {
  /**
   * Variante visual do spinner que define o tema de cores aplicado.
   * - `highlight`: Tema principal com cores de destaque (padrão)
   * - `neutral`: Tema neutro com cores discretas
   * - `danger`: Tema de perigo com cores de alerta
   */
  variant?: SpinnerVariant;

  /**
   * Tamanho do spinner.
   * - `small`: Spinner menor para espaços reduzidos
   * - `large`: Spinner maior para destaque principal (padrão)
   */
  size?: SpinnerSize;
}
