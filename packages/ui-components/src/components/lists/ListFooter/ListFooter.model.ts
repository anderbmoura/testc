import { ViewProps } from 'react-native';

/**
 * Propriedades do componente DSC ListFooter
 */
export interface ListFooterProps extends ViewProps {
  /**
   * Texto principal posicionado à esquerda
   */
  textLeft?: string;

  /**
   * Texto principal posicionado à direita
   */
  textRight?: string;

  /**
   * Label posicionado à esquerda
   */
  labelLeft?: string;

  /**
   * Label posicionado à direita
   */
  labelRight?: string;
}
