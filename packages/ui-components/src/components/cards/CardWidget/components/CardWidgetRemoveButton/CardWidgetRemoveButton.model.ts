/**
 * Propriedades para o CardWidgetRemoveButton.
 *
 * Este componente renderiza um botão de remoção posicionado absolutamente
 * no canto superior esquerdo do CardWidget.
 */
export interface CardWidgetRemoveButtonProps {
  /**
   * Função chamada ao pressionar o botão de remoção.
   *
   * @example
   * ```tsx
   * <CardWidgetRemoveButton
   *   onPress={() => handleRemoveWidget(widgetId)}
   * />
   * ```
   */
  onPress?: () => void;

  /**
   * Label de acessibilidade para o botão.
   *
   * @default 'Remover widget'
   */
  accessibilityLabel?: string;

  /**
   * Identificador único para o botão, útil para testes automatizados.
   */
  testID?: string;
}
