import { ImageSourcePropType } from 'react-native';

type ImageSource = ImageSourcePropType | { uri?: string } | string | number;

/**
 * Propriedades do componente MaskImage
 */
export interface MaskImageProps {
  /**
   * Source da imagem para exibir com máscara aplicada.
   * Pode ser um require() local ou objeto com propriedade uri.
   */
  source?: ImageSource;
}
