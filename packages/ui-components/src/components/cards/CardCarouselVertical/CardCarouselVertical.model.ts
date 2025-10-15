import { ImageProps } from 'tamagui';
import type {
  BackgroundImageProps,
  BackgroundImageVariant,
} from './components/BackgroundImage/BackgroundImage.model';
import type { MaskImageProps } from './components/MaskImage/MaskImage.model';

export type { BackgroundImageProps, BackgroundImageVariant, MaskImageProps };

/**
 * Tipo de variante do card.
 * - `image`: Card com background colorido e imagem com máscara/clip
 * - `custom`: Card com imagem simples sem efeitos
 */
export type CardCarouselVerticalVariant = 'image' | 'custom';

/**
 * Opções de configuração para o Componente DSC CardCarouselVertical.
 */
export interface CardCarouselVerticalProps {
  /**
   * Source da imagem para exibir no card.
   */
  source?: ImageProps['source'];

  /**
   * Cor do tema aplicada ao background (quando variant="image").
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
  color?: BackgroundImageVariant;

  /**
   * Variante do card.
   * - `image`: Exibe background colorido com imagem e máscara/clip
   * - `custom`: Exibe apenas a imagem sem efeitos (192x148)
   * @default 'image'
   */
  variant?: CardCarouselVerticalVariant;

  /**
   * Título do card.
   */
  title: string;

  /**
   * Descrição do card.
   */
  description: string;

  /**
   * Callback opcional disparado quando o card é pressionado.
   */
  onPress?: () => void;

  /**
   * ID de teste para testes automatizados.
   */
  testID?: string;
}
