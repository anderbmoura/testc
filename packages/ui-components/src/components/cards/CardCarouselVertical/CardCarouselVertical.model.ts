import { ImageProps } from 'tamagui';
import type {
  BackgroundImageProps,
  BackgroundImageVariant,
} from './components/BackgroundImage/BackgroundImage.model';
import type { MaskImageProps } from './components/MaskImage/MaskImage.model';

export type { BackgroundImageProps, BackgroundImageVariant, MaskImageProps };

/**
 * Opções de configuração para o Componente DSC CardCarouselVertical.
 */
export interface CardCarouselVerticalProps {
  /**
   * Source da imagem para exibir no card.
   */
  source?: ImageProps['source'];

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
