export type TileButtonModel = {
  /**
   * Label exibido no botão.
   */
  label: string;

  /**
   * Callback executado ao pressionar o TileButton.
   */
  onPress: () => void;

  /**
   * Controla a propriedade flexGrow do TileButton.
   */
  flexGrow?: number;

  /**
   * Ícone exibido no botão, com tamanho pré definido e uma cor padrão.
   * O ícone mostrado será instanciado pelo IconWrapper.
   */
  iconSlot: React.ElementType | React.ReactElement;
};
