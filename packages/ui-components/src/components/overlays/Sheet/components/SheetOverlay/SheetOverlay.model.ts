/**
 * Propriedades do componente SheetOverlay.
 */
export interface SheetOverlayProps {
  /**
   * Se o toque no overlay deve fechar o sheet.
   * @default true
   */
  dismissOnPress?: boolean;

  /**
   * Callback executado quando o overlay é pressionado.
   */
  onPress?: () => void;
}
