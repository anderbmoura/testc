/**
 * Variantes de temas disponíveis para o BackgroundImage.
 */
export type BackgroundImageVariant =
  | 'highlight'
  | 'accent'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
  | 'neutral'
  | 'decorative';

export interface BackgroundImageProps {
  /**
   * Variante que aplica um tema ao background.
   * - `highlight`
   * - `accent`
   * - `success`
   * - `warning`
   * - `danger`
   * - `info`
   * - `neutral`
   * - `decorative`
   * @default 'highlight'
   */
  variant?: BackgroundImageVariant;
}
